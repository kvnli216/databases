// var db = require('../db');
var Promise = require('bluebird');
const mysql = require('mysql'); // added access to mysql module **************
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'student', 'student', {
  host: 'localhost'
  // maybe need port number?
});

var User = db.define('User', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

var Message = db.define('Message', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

module.exports = {
  messages: {
    get: function (callback) {
      Message.findAll({ include: [{ model: User }] })
        .then(function (theMessage) {
          console.log(theMessage, 'from message get');
          callback(null, theMessage);
        })
        .catch(function (err) {
          callback(err);
        });
    },
    post: function (requestBody, callback) {
      // debugger;
      Message.create({
        username: requestBody.username, message: requestBody.message,
        roomname: requestBody.roomname
      })
        .then(function (theMessage) {
          console.log(theMessage, 'MESSAGE post success!');
          callback(null, theMessage);
        })
        .catch(err => {
          console.log('MESSAGE post ERR!');
          callback(err);
        });
    }
  },
  users: {
    get: function (callback) {
      User.findAll()
        .then(function (theUser) {
          callback(null, theUser);
        })
        .catch(function (err) {
          callback(err);
        });
    },
    post: function (requestBody, callback) {
      User.create({ username: requestBody.username })
        .then(function (theUser) {
          console.log('user post success!');
          callback(null, theUser);
        })
        .catch(function (err) {
          console.log('user post ERR!');
          callback(err);
        });
    }

  }
};





// module.exports = {
//   messages: {
//     get: function (callback) {
//       let queryString = 'SELECT * FROM messages';
//       db.query(queryString, function (err, result) {
//         if (err) {
//           throw err;
//         } else {
//           callback(err, result);
//         }
//       });
//     },
//     // a function which produces all the messages
//     post: function (requestBody, callback) {
//       let queryString = `INSERT INTO messages(username, message, roomname) VALUES("${requestBody.username}","${requestBody.message}","${requestBody.roomname}")`;
//       db.query(queryString, function (err, result) {
//         if (err) { throw err; }
//         callback(err, result);
//       });
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function (callback) {
//       let queryString = 'SELECT * FROM users';
//       db.query(queryString, function (err, result) {
//         if (err) {
//           throw err;
//         } else {
//           callback(err, result);
//         }
//       });
//     },
//     post: function (requestBody, callback) {
//       let queryString = `INSERT INTO users(username) VALUES('${requestBody.username}')`;
//       db.query(queryString, function (err, result) {
//         if (err) { throw err; }
//         callback(err, result);
//       });
//     } // a function which can be used to insert a message into the database
//   }
// };
