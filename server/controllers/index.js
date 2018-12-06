var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      if (req.method === 'get') { //check if get is all caps
        let promiseGet = models.message.get((res) => {
          return Promise.all(promiseGet)
            .then((messages) => {
              res.end(messages);
            });

        }
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) { } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) { }
  }
};

