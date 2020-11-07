const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');
const { NamedModulesPlugin } = require('webpack');

const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const searchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=`;

module.exports = {genreURL, searchURL};