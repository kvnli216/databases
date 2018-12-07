var db = require('../db');
var Promise = require('bluebird');
const mysql = require('mysql'); // added access to mysql module **************

// var queryString = 'SELECT * FROM messages';

// let getConnect = db.query(queryString, function (err, result, fields) {
//   if (err) { throw err }
//   console.log(result);
// });
// let getConnectAsync = Promise.promisify(getConnect);

module.exports = {
  messages: {
    get: function (callback) {
      let queryString = 'SELECT * FROM messages';
      db.query(queryString, function (err, result) {
        if (err) {
          // console.log(err, 'err');
          console.log(err);
        } else {
          console.log(result, 'results');
          callback(err, result);
        }
      });
    },
    // a function which produces all the messages
    post: function (requestBody, callback) {
      console.log('poo');
      // debugger;
      let queryString = `INSERT INTO messages(username, message, roomname) VALUES("${requestBody.username}","${requestBody.message}","${requestBody.roomname}")`;
      console.log(requestBody, 'reqb');
      db.query(queryString, function (err, result) {
        if (err) { throw err; }
        // debugger;
        console.log('results');
        callback(err, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryString = 'SELECT * FROM messages';
      db.query(queryString, function (err, result) {
        if (err) {
          // console.log(err, 'err');
          console.log(err);
        } else {
          console.log(result, 'results');
          callback(err, result);
        }
      });
    },
    post: function (requestBody, callback) {
      let queryString = `INSERT INTO users(username) VALUES('${requestBody.username}')`;
      console.log(requestBody, 'reqb');
      db.query(queryString, function (err, result) {
        if (err) { throw err; }
        console.log('results');
        callback(err, result);
      });
    } // a function which can be used to insert a message into the database
  }
};

// export default models;