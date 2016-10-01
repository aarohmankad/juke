var bot = require('node-twitchbot');

module.exports = function(router) { 
  router.post('/captureAuth', function (req, res) {
    var params = {
      username: 'aarohmankad',
      oauth: 'oauth:' + req.body.token,
      channel: 'aarohmankad'
    };

    bot.run(params);

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke help");
      bot.msg("Usage: !juke [song name] - [artist name]");
    });

    bot.listen('!juke /queue', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      var message = chatter.msg;
      var songParts = message.substring(13).split(' - ');
      var songTitle = songParts[0];
      var songArtist = songParts[1];
      
      console.log("Someone wants to play " + songTitle + " by " + songArtist);
      bot.msg("Queueing " + songTitle + " by " + songArtist);
    });
    
    res.send({
      message: 'Successfully redirected. Check your Twitch channel'
    });
  });
};