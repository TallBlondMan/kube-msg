const express = require('express');
const cors = require('cors');
const database = require('./operations.js')
const PORT = (process.env.APP_PORT || 3000);

const app = express();
const corsOptions = {
  origin: `http://${process.env.CORS_SPA_HOST}:${process.env.CORS_SPA_PORT}`
};

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get('/api/hello', database.displayStatus)
// Route to handle POST requests
app.post('/api/write-to-database', database.sendMessage);
// To allow CORS
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});