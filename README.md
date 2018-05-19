# liri-node-app

This is a CLI based project that emulates a personal smart assistant. 

PreRequisites

* Get Spotify ID and Secret by visiting https://beta.developer.spotify.com/dashboard/applications
* Get Twitter Consumer Key & Secret, Access Token Key & Secret by visiting https://apps.twitter.com/app/new 

To run this project in your local machine

* run 'npm install'
* create a .env file with following entries
    * SPOTIFY_ID
    * SPOTIFY_SECRET
    * TWITTER_CONSUMER_KEY
    * TWITTER_CONSUMER_SECRET
    * TWITTER_ACCESS_TOKEN_KEY
    * TWITTER_ACCESS_TOKEN_SECRET




 * Given below are the valid CLI commands

    *   => node liri my-tweets <twitter_handle>
    *   => node liri spotify-this-song <song name>
    *   => node liri movie-this <movie name>
