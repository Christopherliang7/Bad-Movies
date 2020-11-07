const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const db = require('../db/sql/index.js').connection;

const app = express();

//Helpers
// var { getGenres, searchGenreMovies } = require("./helpers/apiHelpers.js");
const movieController = require('./controllers/movieController.js')

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + "/../client/dist"));


db.connect();
//***********************************************************************************************************************

/*
Use the routes below to build your application:

|      URL         | HTTP Verb |  Result                                                     |
| :------------:   | :-------: |------------------------------------------------------:      |
|     /genres      |   GET     |  genres                            |
|     /search      |   GET     |  Respond with JSON of all movies by the selected genre      |
|     /save        |   POST    |  Save selected movie as favorite                           |
|     /delete      |   POST    |  Remove selected movie as favorite                          |

*/

app.get("/genres", movieController.getGenres);

app.get("/search", movieController.getSearch);

//   // and sort them by votes (worst first) using the search parameters in themoviedb API
//   // do NOT save the results into the database; render results directly on the page
//   // Respond with JSON of all movies by the selected 


app.post("/save", function(req, res) {
  // save movie as favorite into the database
  // Save selected movie as favorite
});

app.post("/delete", function(req, res) {
  // remove movie from favorites into the database
  // Remove selected movie as favorite
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
