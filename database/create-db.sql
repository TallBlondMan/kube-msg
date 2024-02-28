CREATE DATABASE trunk;

-- Connect to the trunk database
\c trunk;

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    message_content VARCHAR (50) NOT NULL
);