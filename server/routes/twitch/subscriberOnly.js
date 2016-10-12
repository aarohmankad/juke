var Twitch = require('./../../services/Twitch');

module.exports = function(router) { 
  router.post('/toggleSubscriberOnly', function (req, res) {
    Twitch.toggleSubscriberOnly();

    res.send({
      message: 'Now only subscribers can add songs to your playlist'
    });
  });
};