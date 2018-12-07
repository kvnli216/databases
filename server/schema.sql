CREATE DATABASE chat;

USE chat;

-- CREATE TABLE roomname (
--   id INTEGER PRIMARY KEY auto_increment,
--   roomname TEXT
-- );

-- CREATE TABLE friends (
--   id INTEGER PRIMARY KEY auto_increment,
--   username TEXT
-- );
CREATE TABLE users (
  id INTEGER PRIMARY KEY auto_increment,
  username TEXT
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY auto_increment,
  username TEXT,
  createdAt DATETIME,
  message TEXT,
  roomname TEXT
  -- friends INTEGER,
  -- FOREIGN KEY(roomname) REFERENCES roomname(id),
  -- FOREIGN KEY(friends) REFERENCES friends(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

