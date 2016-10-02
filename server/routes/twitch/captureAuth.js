var bot = require('node-twitchbot');
var Spotify = require('./../../services/Spotify');

module.exports = function(router) { 
  router.post('/captureTwitchAuth', function (req, res) {
    console.log(req.body);
    var params = {
      username: req.body.username,
      oauth: 'oauth:' + req.body.token,
      channel: req.body.channel,
    };

    bot.run(params);

    bot.listenFor('!juke', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke");
      bot.msg("Usage: !juke /add [song name] - [artist name]\n");
    });

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke help");
      bot.msg("Usage: !juke /add [song name] - [artist name]\n");
    });

    bot.listen('!juke /add', function(err, chatter) {
      if (err) {
        console.log(err);

        bot.msg("[Juke says:] Song requests must be formatted as follows: !juke /add [song name] - [artist name]");
      }

      console.log(chatter);
      var message = chatter.msg;
      var songParts = message.substring(11).split(' - ');
      var songTitle = songParts[0].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      var songArtist = songParts[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

      console.log("Searching...");
      Spotify.search(songTitle, songArtist)
        .then(function(data) {
            var spotifyURI = data.body.tracks.items[0].uri;
            Spotify.addToPlaylist(spotifyURI);
            bot.msg(songTitle + ' by ' + songArtist + ' was added');
          }, function(err) {
            console.log('Something went wrong in search!', err);
          });
    });
    
    res.send({
      message: 'Successfully redirected. Check your Twitch channel'
    });
  });
};