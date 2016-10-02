var spotifyWebApiNode = require('spotify-web-api-node');
var spotify = new spotifyWebApiNode();
var user_id;
var playlist_id = "";

module.exports = {
  initialize: function(token) {
    console.log("intializing", token);
    spotify.setAccessToken(token);
    console.log("intialized");
  },
  search: function(song, artist) {
    console.log('track:' + song + ' artist:' + artist);
    return spotify.searchTracks('track:' + song + ' artist:' + artist);
  },
  getMe: function() {
    spotify.getMe()
      .then(function(data) {
        user_id = data.body.id;
      }, function(err) {
        console.log('Something went wrong in getMe!', err);
      });
  },
  getUserPlaylists: function() {
    return spotify.getUserPlaylists(user_id)
      .then(function(data) {
        for (var i = 0; i < data.body.items.length; i++) {
          if (data.body.items[i].name == 'Jukebox') {
            playlist_id = data.body.items[i].id;
            console.log("Found a Jukebox:", playlist_id);
          }
        }

        if(playlist_id == "") {
          spotify.createPlaylist(user_id, 'Jukebox', {
            public: true
          }).then(function(data) {
            playlist_id = data.body.id;
          });
        }
      }, function(err) {
        console.log('Something went wrong in getUserPlaylists', err);
      });
  },
  addToPlaylist: function(uri) {
      this.getUserPlaylists()
        .then(function() {
          return spotify.addTracksToPlaylist(user_id, playlist_id, [uri]);
        })
        .then(function(data) {
          console.log('Added tracks to playlist!');
        }, function(err) {
          console.log('Something went wrong in adding to playlist!', err);
        });
  }
}