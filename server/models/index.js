var db = require('../db');
var Promise = require('bluebird');

// var queryString = 'SELECT * FROM messages';

// let getConnect = db.query(queryString, function (err, result, fields) {
//   if (err) { throw err }
//   console.log(result);
// });
// let getConnectAsync = Promise.promisify(getConnect);

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, function (err, result, field) {
        if (err) {
          console.log(err, 'err');
        } else {
          console.log(result, 'results');
          // callback(result);
        }
      });
    },
    // a function which produces all the messages
    post: function () { } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

