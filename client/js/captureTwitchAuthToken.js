var
  request = new Request(),
  hash = window.location.hash.substr(1),
  authToken = hash.split('=')[1].split('&')[0];

var account = loadData();

console.log(account);

request.send({
  method: 'POST',
  url: 'http://localhost:8000/api/captureTwitchAuth',
  data: {
    username: account.username,
    token: authToken,
    channel: account.channel,
  },
}, function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log(data);
});

function loadData() {
  var account = localStorage.getItem('_account');

  if (!account) {
    return false;
  }

  localStorage.removeItem('_account');
  //decodes a string data encoded using base-64
  account = atob(account);
  //parses to Object the JSON string
  account = JSON.parse(account);

  return account;
}
