var SpotifyWebApi = require('spotify-web-api-node');
/*
 * This example shows how to search for a track. The endpoint is documented here:
 * https://developer.spotify.com/web-api/search-item/

 * Please note that this endpoint does not require authentication. However, using an access token
 * when making requests will give your application a higher rate limit.
 */
var exports = module.exports = {};

exports.twitchSearch = function(JSONContent) {
  var spotifyApi = new SpotifyWebApi();
  console.log(JSONContent.Song + ' ' + JSONContent.Artist);
  spotifyApi.searchTracks('track:' + JSONContent.Song + ' artist:' + JSONContent.Artist, function(err, data) {
    if (err) {
      console.error('Something went wrong', err.message);
    return;
    }
    console.log('past err');
    // Print some information about the results
    console.log('I got ' + data.body.tracks.total + ' results!');

    // Go through the first page of results
    var firstPage = data.body.tracks.items;
    console.log('The tracks in the first page are.. (popularity in parentheses)');

    /*
    * 0: All of Me (97)
    * 1: My Love (91)
    * 2: I Love This Life (78)
    * ...
    */
    firstPage.forEach(function(track, index) {
      console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
    });
  });
};