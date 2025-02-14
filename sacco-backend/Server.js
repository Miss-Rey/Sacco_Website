import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?)";
    
    db.query(sql, [firstName, lastName, email, phone, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: "User registered successfully!" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
