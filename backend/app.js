const express = require('express');
const database = require('./operations.js')
const { Pool } = require('pg');
const PORT = (process.env.APP_PORT || 3000);

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get('/', database.displayStatus)
// Route to handle POST requests
app.post('/write-to-database', database.sendMessage);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});