var models = require('../models');
var mysql = require('mysql'); // added access to mysql module **************

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (err, results) {
        if (err) {
          res.json(err);
        } else {
          res.json(results);
        }
      });
    },
    // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function (err, results) {
        if (err) {
          res.json(err);
        } else {
          console.log(results, 'this is the success after post messages');
          res.json(results);
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function (err, results) {
        if (err) {
          res.json(err);
        } else {
          res.json(results);
        }
      });
    },
    // a function which handles a get request for all messages
    post: function (req, res) {
      models.users.post(req.body, function (err, results) {
        if (err) {
          res.json(err);
        } else {
          res.json(results);
        }
      });
    }
  }
  // users: {
  //   // Ditto as above
  //   get: function (req, res) { },
  //   post: function (req, res) { }
  // }
};