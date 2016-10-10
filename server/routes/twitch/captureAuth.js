var Twitch = require('./../../services/Twitch');

module.exports = function(router) { 
  router.post('/captureTwitchAuth', function (req, res) {
    var config = {
      username: req.body.username,
      oauth: 'oauth:' + req.body.token,
      channel: req.body.channel,
    };

    Twitch.initialize(config);
    
    Twitch.listenFor('!juke', 'Usage: !juke /add [song name] - [artist name]\n');
    Twitch.listenFor('!juke help', 'Usage: !juke /add [song name] - [artist name]\n');
    
    var errorString = '[Juke says:] Song requests must be formatted as follows: !juke /add [song name] - [artist name]';
    
    Twitch.listenAndAddSong('!juke /add', errorString);
    
    res.send({
      message: 'Successfully redirected. Check your Twitch channel'
    });
  });
};