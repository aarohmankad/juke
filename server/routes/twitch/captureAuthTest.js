var bot = require('node-twitchbot');

module.exports = function(router) { 
  router.get('/captureAuthTest', function (req, res) {
    var params = {
      username: 'aarohmankad',
      oauth: 'oauth:ziwu1ngzsa5j7xncfazrfdsn7wq2iw',
      channel: 'aarohmankad'
    };

    bot.run(params);

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke help");
      bot.msg("Usage: !juke [artist name] - [song name]");
    });

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }

      console.log("Someone typed !juke help");
    });

    res.send({
      message: 'Successfully redirected. Check your Twitch channel'
    });
  });
};