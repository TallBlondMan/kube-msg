const { Pool } = require('pg');

const database = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT || 5432,
});

// Connect to Postgres -- no need as querry doesn't need a constant DB connection
// database.connect((err) => {
//     if (err) {
//       console.log(`Error connecting to ${process.env.PG_HOST}`)
//       throw err;
//     }
//     console.log(`Connected to database at ${process.env.PG_HOST}`);
//   });
  

const sendMessage = (req, res) => {
    // Get message from body
    const { message } = req.body;
    // The default PSQL querry
    const psql = `INSERT INTO messages (message_content) VALUES ($1)`;
    // Does not need connection beforehand
    database.query(psql, [message], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error writing to database' });
            console.log(`Message '${message}' received`);
            console.log(`Request from: ${req.ip}`);
            console.log(err.message)
        } else {
            res.status(200).json({ message: 'Message written to database successfully' });
            console.log(`Message '${message}' received`);
            console.log('Result: ', result.rowCount)
            console.log(`Request from: ${req.ip}`);
        }
    })
}

const showMessage = (req, res) => {
    // TODO 
}

const displayStatus = (req, res) => {
    // SQL querry 
    const psql = 'SELECT COUNT(*) FROM messages'
    database.query(psql, (err, result) => {
        if(err) {
            res.status(500).json({error: 'Error getting data from database'});
            console.log('Error ', err.message)
        } else {
            // unmarshalling the Object given by result
            res.status(200).json({ message: `You have ${result.rows[0].count} messages in database`});
            console.log(`Hello request received from ${req.hostname}`);
        }
    })
}
// This makes sure our modules are available in app.js
module.exports = {
    sendMessage,
    showMessage,
    displayStatus,
}