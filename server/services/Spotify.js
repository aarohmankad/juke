var spotifyWebApiNode = require('spotify-web-api-node');
var spotify = new spotifyWebApiNode();

module.exports = {
  initialize: function(token) {
    spotify.setAccessToken(token);
  },
  search: function(song, artist) {
    spotify.searchTracks('track:' + song + ' artist:' + artist)
      .then(function(data) {
          console.log('I found these tracks:\n', data.body.items[0]);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
  }
}