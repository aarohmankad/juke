var bot = require('node-twitchbot');
var Spotify = require('./../../services/Spotify');

module.exports = function(router) { 
  router.post('/captureTwitchAuth', function (req, res) {
    var params = {
      username: 'aarohmankad',
      oauth: 'oauth:' + req.body.token,
      channel: 'aarohmankad'
    };

    bot.run(params);

    bot.listenFor('!juke', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke");
      bot.msg("Usage: !juke /queue [song name] - [artist name]\n");
    });

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke help");
      bot.msg("Usage: !juke /queue [song name] - [artist name]\n");
    });

    bot.listen('!juke /queue', function(err, chatter) {
      if (err) {
        console.log(err);

        bot.msg("[Juke says:] Song requests must be formatted as follows: !juke /queue [song name] - [artist name]");
      }

      console.log(chatter);
      var message = chatter.msg;
      var songParts = message.substring(13).split(' - ');
      var songTitle = songParts[0].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      var songArtist = songParts[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

      console.log("Searching...");
      var spotifyUri = Spotify.search(songTitle, songArtist);
      Spotify.addToPlaylist(spotifyUri);
    });
    
    res.send({
      message: 'Successfully redirected. Check your Twitch channel'
    });
  });
};