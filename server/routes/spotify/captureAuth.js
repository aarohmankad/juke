var Spotify = require('./../../services/Spotify');

module.exports = function(router) { 
  router.post('/captureSpotifyAuth', function (req, res) {
    Spotify.initialize(req.body.token);
  });
};