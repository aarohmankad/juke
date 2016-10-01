var bot = require('node-twitchbot');

module.exports = function(router) { 
  router.post('/captureAuth', function (req, res) {
    var params = {
      username: 'aarohmankad',
      oauth: 'oauth:' + req.body.token,
      channel: 'aarohmankad'
    };

    console.log(params);

    bot.run(params);

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke help");
      bot.msg("Usage: !juke [song name] - [artist name]");
    });

    res.send({
      message: 'Successfully redirected. Check your Twitch channel'
    });
  });
};