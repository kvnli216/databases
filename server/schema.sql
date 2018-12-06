CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  createdAt DATETIME,
  message TEXT NOT NULL,
  -- room text
  FOREIGN KEY(rooms) REFERENCES rooms(id),
  FOREIGN KEY(friends) REFERENCES friends(id)
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  roomName TEXT NOT NULL
);

CREATE TABLE friends (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

