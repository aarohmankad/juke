var bot = require('node-twitchbot');

module.exports = function(router) {
  router.get('/redirectAuth', function (req, res) {
    bot.run({
      username: 'aarohmankad',
      oauth: 'oauth:m94g18p2rec7i2lboarwc2qwtprgzz',
      channel: 'aarohmankad',
    });

    bot.listenFor('!juke help', function(err, chatter) {
      if (err) {
        console.log(err);
      }
    
      console.log(chatter);
      bot.msg("Usage: !juke [artist name] - [song name]");
    });

    res.send('Successfully redirected. Check your Twitch channel');
  });
};