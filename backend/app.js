const express = require('express');
const cors = require('cors');
const database = require('./operations.js')
const PORT = (process.env.APP_PORT || 3000);

const app = express();
database.createDatabase();
database.createTables();
// To allow CORS - corsOptions go here
// Don't thik I need this in 'production'
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
// Route to handle GET requests
app.get('/api/status', database.displayStatus);
// Route to handle POST requests
app.post('/api/write-to-database', database.sendMessage);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});