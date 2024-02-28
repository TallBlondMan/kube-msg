const express = require('express');
const { Pool } = require('pg');

// Create MySQL connection
const database = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Connect to MySQL
database.connect((err) => {
  if (err) {
    console.log(`Error connecting to ${process.env.MYSQL_HOST}`)
    throw err;
  }
  console.log(`Connected to database at ${process.env.MYSQL_HOST}`);
});

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests from frontend
app.post('/write-to-database', (req, res) => {
  const { message } = req.body;
  
  // Insert the message into the database
  const sql = `INSERT INTO messages (message) VALUES (?)`;
  db.query(sql, [message], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error writing to database' });
    } else {
      res.status(200).json({ message: 'Message written to database successfully' });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});