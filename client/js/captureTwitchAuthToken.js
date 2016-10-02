var
  request = new Request(),
  hash = window.location.hash.substr(1),
  authToken = hash.split('=')[1].split('&')[0];

console.log(authToken);

request.send({
  method: 'POST',
  url: 'http://localhost:8000/api/captureTwitchAuth',
  data: {
    token: authToken,
  },
}, function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log(data);
});

// var redirect = window.setTimeout(function() {
//   window.location = 'http://localhost:9000/';
// }, 1000);