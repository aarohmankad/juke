var SpotifyWebApi = require('spotify-web-api-node')
console.log("\n Start Parse \n");
var obj = require("../path/jsonFile.json");
console.log(
	JSON.stringify(obj);
);
//need to split the obj string into two strings 'arist' and 'track'


var spotifyApi = new SpotifyWebApi( {
	clientID : 'f5092f7deb3b477a9a22cc753f5980c8',
	clientSecret : '7e2b1b91ce8e459383613763e02a02dd',
	redirectUri : 'http://localhost:8888/callback',
});

spotifyApi.searchTracks('track: artst: ')

//searchTracks returns an object, you need to figure out what to do with it
//that object should contain some type of code to a song, which can then
//be fed into addToPlayList()