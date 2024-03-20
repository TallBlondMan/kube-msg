const { Pool, Client } = require('pg');

const PG_USER = process.env.PG_USER
const PG_HOST = process.env.PG_HOST
const PG_PASSWORD = process.env.PG_PASSWORD
const PG_DATABASE = process.env.PG_DATABASE
const PG_PORT = process.env.PG_PORT || 5432

async function createDatabase() {
    // Create client for ONE TIME connection and creation of database
    const dbCreate = new Client({
        user: PG_USER,
        host: PG_HOST,
        database: 'postgres', // Default one for avoiding errors
        password: PG_PASSWORD,
        port: PG_PORT,
    })
    // The database creation logic
    try {
        await dbCreate.connect();
        // Check if databse exist SQL querry
        const psqlExists = `SELECT EXISTS (SELECT 1 FROM pg_database WHERE datname = '${PG_DATABASE}');`;
        const psqlExistsResult = await dbCreate.query(psqlExists);

        if (!psqlExistsResult.rows[0].exists) {
            // if there is no database create one
            console.log('Database not found... Creating');
            await dbCreate.query(`CREATE DATABASE ${PG_DATABASE};`);
            console.log('Database created successfully!');
        } else {
            console.log('Database is in place');
            // returning true for later logic
            return true;
        }
    } catch (err) {
        console.log('Error while creating databse: ', err);
        // returning false to not proceed with table creation
        return false;
    } finally {
        // Close the connection
        dbCreate.end();
    }
}
// Scope variable
let database

async function createTables() {
    database = new Pool({
        user: PG_USER,
        host: PG_HOST,
        database: PG_DATABASE,
        password: PG_PASSWORD,
        port: PG_PORT,
    })
    try {
        // Check if table already exists 
        const psqlTableExists = `SELECT EXISTS (SELECT 1 from pg_tables WHERE tablename = 'messages');`;
        const tableExistsResult = await database.query(psqlTableExists);
        // Logic for creating database 
        if (!tableExistsResult){
            console.log('Table not found, creating... ')
            // This could just be CREATE IF NOT EXISTS but this way it has more logs to know what's up
            const psqlTableCreate = `
                CREATE TABLE messages (
                    message_id SERIAL PRIMARY KEY,
                    message_content VARCHAR (50) NOT NULL
                );`;
            await database.query(psqlTableCreate);
            console.log('Table created successfully!');
        } else {
            console.log('Table present, ready for connections')
            return true;
        }
    } catch (err) {
        console.log(`Error while creating tables: `, err);
        return false;
    } 
}

async function databaseInitialization() {
    // Run the createDatabase function and write the result to a const
    const databaseCreated = await createDatabase();
    // If creation was a success proceed or database is existing create table
    if (databaseCreated) {
        await createTables();
    }
}

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
    databaseInitialization,
    createTables,
    createDatabase,
    sendMessage,
    showMessage,
    displayStatus,
}