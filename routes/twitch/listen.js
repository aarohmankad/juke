var bot = require('node-twitchbot');

module.exports = function(router) {
  router.get('/authenticate', function (req, res) {
    var redirectString = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=[your client ID]&redirect_uri=[your registered redirect URI]&scope=[space separated list of scopes]"
    res.redirect(redirectString);
  });
};