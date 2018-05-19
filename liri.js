require("dotenv").config();
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var keys = require("./keys");

var spotify_client = new Spotify(keys.spotify);
var twitter_client = new Twitter(keys.twitter);

let param1 = process.argv[2];
let param2 = process.argv[3];

if (param1 === "my-tweets") {
  twitter_client.get(
    "statuses/user_timeline",
    { screen_name: "RajPurushoth", count: 20 },
    function(error, tweets, response) {
      console.log(tweets.length);
      for (let i = 0; i < tweets.length; i++) {
        console.log(
          "******************* Tweet # " + (i + 1) + " *******************"
        );
        console.log(tweets[i].text);
        console.log(tweets[i].created_at);
      }
      // console.log("Tweet");
    }
  );
} else if (param1 === "spotify-this-song" && param2) {
  spotify_client.search({ type: "track", query: param2 }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    // console.log(JSON.stringify(data));
    console.log("Artist(s) : " + data.tracks.items[0].album.artists[0].name);
    console.log("Song Name : " + data.tracks.items[0].name);
    console.log("Album Name : " + data.tracks.items[0].album.name);
    console.log("Preview Link : " + data.tracks.items[0].preview_url);
  });
} else if (param1 === "movie-this" && param2) {
  var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + param2;

  request(URL, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let jsonData = JSON.parse(body);
      console.log("Title : " + jsonData.Title);
      console.log("Year : " + jsonData.Year);
      console.log("IMDB Rating : " + jsonData.Ratings[0].Value);
      console.log("Rotten Tomato Ratig : " + jsonData.Ratings[1].Value);
      console.log("Country : " + jsonData.Country);
      console.log("Language : " + jsonData.Language);
      console.log("Plot : " + jsonData.Plot);
      console.log("Actors : " + jsonData.Actors);
    } else {
      console.log("An Error Happened!!" + error);
    }
  });
}
