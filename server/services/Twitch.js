var bot = require('node-twitchbot');
var Spotify = require('./Spotify');

var subscriberOnly = false;

module.exports = {
  initialize: function(config) {
    bot.run(config);
  },
  toggleSubscriberOnly: function() {
    subscriberOnly = !subscriberOnly;
  },
  isSubscriberOnly: function() {
    return subscriberOnly;
  },
  listenFor: function(trigger, response) {
    bot.listenFor(trigger, function(err, chatter) {
      if (err) {
        console.log(err);
      }

      bot.msg(response);
    });
  }
 , listenAndAddSong: function(trigger, errorString, successString) {
    bot.listen('!juke /add', function(err, chatter) {
      if (err) {
        console.log(err);
        bot.msg(errorString);
      }

      if (subscriberOnly && chatter.sub != 1) {
        bot.msg('Sorry, only subscribers are able to add songs to this streamer\'s playlist');
        return;
      }
      
      var message = chatter.msg;
      var songParts = message.substring(11).split(' - ');
      var songTitle = songParts[0].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      var songArtist = songParts[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

      Spotify.search(songTitle, songArtist)
        .then(function(data) {
            var spotifyURI = data.body.tracks.items[0].uri;
            Spotify.addToPlaylist(spotifyURI);
            bot.msg(successString = '[Juke says:] ' + songTitle + ' by ' + songArtist + ' was added');
          }, function(err) {
            console.log('Something went wrong in search!', err);
          });
    });
  }
}