var models = require('../models');
var mysql = require('mysql'); // added access to mysql module **************

module.exports = {
  messages: {
    // get: function (req, res) {
    //   if (req.method === 'get') { //check if get is all caps
    //     let promiseGet = models.message.get((res) => {
    //       return Promise.all(promiseGet)
    //         .then((messages) => {
    //           res.end(messages);
    //         });

    //     }
    //   }
    // },
    get: function (req, res) {
      models.messages.get(function (err, results) {
        if (err) {
          console.log(err, 'line 20');
          res.json(err);
        } else {
          res.json(results);
        }
      });
    },
    // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function (err, result) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(result);
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function (err, results) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(results);
        }
      });
    },
    // a function which handles a get request for all messages
    post: function (req, res) {
      models.users.post(req.body, function (err, result) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(result);
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