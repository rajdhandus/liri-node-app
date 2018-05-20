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

    *   `node liri my-tweets <twitter_handle>`
        *  The above command will retrieve last 20 tweets for the twitter_handle mentioned. if you do not mention a twitter handle @RajPurushoth will be used
    *   `node liri spotify-this-song <song name>`
        *   The above command will search spotify for a song with the "song name" parameter 
    *   `node liri movie-this <movie name>`
        *   The above command will search OMDB for a movie with the "movie name" parameter
    *   `node liri do-what-it-says`
        *   The above command will execute the one line command present in the random.txt file
