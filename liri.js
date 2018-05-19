require("dotenv").config();
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var keys = require("./keys");

var spotify_client = new Spotify(keys.spotify);
var twitter_client = new Twitter(keys.twitter);

let param1 = process.argv
  .slice(2, 3)
  .join("")
  .trim();
let param2 = process.argv.slice(3).join(" ");

if (param1 === "my-tweets") {
  let screenName = "RajPurushoth";
  if (param2) {
    screenName = param2;
  }
  twitter_client.get(
    "statuses/user_timeline",
    { screen_name: screenName, count: 20 },
    function(error, tweets, response) {
      if (tweets.length > 0) {
        for (let i = 0; i < tweets.length; i++) {
          logWriter(
            "**************************************************************************** Tweet #" +
              (i + 1) +
              " ****************************************************************************" +
              "\n" +
              tweets[i].text +
              "\n" +
              tweets[i].created_at
          );
        }
      } else {
        logWriter("No tweets for @" + screenName);
      }
    }
  );
} else if (param1 === "spotify-this-song" && param2) {
  spotify_client.search({ type: "track", query: param2 }, function(err, data) {
    if (err) {
      logWriter("Error occurred: " + err);
      return;
    } else if (data.tracks.items.length > 0) {
      logWriter("Artist(s) : " + data.tracks.items[0].album.artists[0].name);
      logWriter("Song Name : " + data.tracks.items[0].name);
      logWriter("Album Name : " + data.tracks.items[0].album.name);
      logWriter("Preview Link : " + data.tracks.items[0].preview_url);
    }
  });
} else if (param1 === "movie-this" && param2) {
  var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + param2;

  request(URL, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let jsonData = JSON.parse(body);
      logWriter("Title : " + jsonData.Title);
      logWriter("Year : " + jsonData.Year);
      logWriter("IMDB Rating : " + jsonData.Ratings[0].Value);
      logWriter("Rotten Tomato Ratig : " + jsonData.Ratings[1].Value);
      logWriter("Country : " + jsonData.Country);
      logWriter("Language : " + jsonData.Language);
      logWriter("Plot : " + jsonData.Plot);
      logWriter("Actors : " + jsonData.Actors);
    } else {
      logWriter("An Error Happened!!" + error);
    }
  });
} else {
  logWriter("Invalid Parameters");
  logWriter("Valid Parameters are ");
  logWriter("my-tweets or spotify-this-song or movie-this");
}

function logWriter(data, target) {
  if (target === 0) {
    console.log(data);
  } else if (target === 1) {
    fileWriter(data, "./log.txt");
  } else {
    console.log(data);
    fileWriter(data, "./log.txt");
  }
}

function fileWriter(data, fileName) {
  fs.appendFile(fileName, data + "\n", function(error) {
    if (error) throw error;
  });
}
