module.exports = function(router) {
  router.get('/authenticate', function (req, res) {
    var redirectString = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=lu14if1tzfgirz3wh4q8lfulc13aszh&redirect_uri=" + encodeURIComponent("http://localhost:8000/api/redirectAuth");
    res.redirect(redirectString);
  });
};
