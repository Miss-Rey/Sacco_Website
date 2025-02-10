const express = require('express');
const db = require('./sacco-backend/config/db');


// Create an Express app
const app = express();
const port = process.env.PORT || 5000;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the SACCO Website!');
});

// Create a test route to fetch data from the database
app.get('/test', async (req, res) => {
  try {
    const [rows, fields] = await db.promise().query('SELECT * FROM users'); // Replace with your table name
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
