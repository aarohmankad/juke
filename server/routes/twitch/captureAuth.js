var bot = require('node-twitchbot');

module.exports = function(router) {
  router.post('/captureAuth', function (req, res) {
    bot.run({
      username: 'aarohmankad',
      oauth: 'oauth:'+ req.body.params.token,
      channel: 'aarohmankad',
    });

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      bot.msg("Usage: !juke [artist name] - [song name]");
    });

    res.send('Successfully redirected. Check your Twitch channel');
  });
};