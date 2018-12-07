CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  -- id INTEGER PRIMARY KEY auto_increment,
  -- username TEXT
  id INTEGER PRIMARY KEY auto_increment,
  username TEXT,
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE messages (
  -- id INTEGER PRIMARY KEY auto_increment,
  -- username TEXT,
  -- createdAt DATETIME,
  -- message TEXT,
  -- roomname TEXT
  id INTEGER PRIMARY KEY auto_increment,
  username TEXT,
  message TEXT,
  roomname TEXT,
  createdAt DATETIME,
  updatedAt DATETIME
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

