CREATE DATABASE trunk;

USE trunk;

CREATE TABLE messages (
    message_id INT PRIMARY KEY IDENTITY (1, 1),
    message_content VARCHAR (50) NOT NULL
);