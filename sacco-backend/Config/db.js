const mysql = require("mysql2/promise");
const fs = require('fs');
const path = require('path');
require("dotenv").config();

// Create a connection pool to the MySQL database
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'SACCO-WEBSITE',
});

// Function to apply the schema if necessary
async function applySchema() {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SHOW TABLES LIKE "users"');
    
    // If the table doesn't exist, apply the schema
    if (rows.length === 0) {
      const sqlFilePath = path.join(__dirname, 'Databases', 'schema.sql');
      const sql = fs.readFileSync(sqlFilePath, 'utf8');
      await connection.query(sql);
      console.log('Schema applied successfully');
    } else {
      console.log('Tables already exist, skipping schema application');
    }
    
    connection.release();
  } catch (err) {
    console.error('Error applying schema: ', err);
  }
}

// Apply the schema
applySchema();

module.exports = db;
