const express = require('express');
const cors = require('cors');
const database = require('./operations.js')
const PORT = (process.env.APP_PORT || 3000);

const app = express();
// To allow CORS - corsOptions go here
app.use(cors());
// const corsOptions = {
//   origin: [`http://${process.env.CORS_SPA_HOST}:${process.env.CORS_SPA_PORT}`, 'http://localhost:8080']
// };

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get('/api/hello', database.displayStatus)
// Route to handle POST requests
app.post('/api/write-to-database', database.sendMessage);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});