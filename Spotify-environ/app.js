var SpotifyWebApi = require('spotify-web-api-node');

var fs = require("fs");
var contents = fs.readFileSync("song.json");
var JSONContent = JSON.parse(contents);
//need to split the obj string into two strings 'arist' and 'track'


var spotifyApi = new SpotifyWebApi( {
	clientID : 'f5092f7deb3b477a9a22cc753f5980c8',
	clientSecret : '7e2b1b91ce8e459383613763e02a02dd',
	redirectUri : 'http://localhost:8888/callback',
});

spotifyApi.searchTracks('track:' + JSONContent.Song + 'artist:' + JSONContent.Artist)
	.then(function(data) {
		console.log('Search tracks with name' + JSONContent.Song + 'by artist: ' + JSONContent.Artist, data.body);
	}, function(err) {
		console.log('Something went wrong!', err);
	});

//searchTracks returns an object, you need to figure out what to do with it
//that object should contain some type of code to a song, which can then
//be fed into addToPlayList()