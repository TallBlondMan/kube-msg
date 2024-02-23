CREATE DATABASE trunk;
USE trunk;
CREATE TABLE messages (
    message_id INT NOT NULL AUTO_INCREMENT,
    message_content VARCHAR (50) NOT NULL,
    PRIMARY KEY (message_id)
);