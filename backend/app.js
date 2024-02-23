const express = require('express');
const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database at ${process.env.MYSQL_HOST}');
});

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests from frontend
app.post('/write', (req, res) => {
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