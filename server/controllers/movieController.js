const movieModel = require('../models/movieModel.js');
// const apiHelpers = require('../helpers/apiHelpers.js');
const axios = require('axios');
const {genreURL, searchURL} = require('../helpers/apiHelpers.js')

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    return axios.get(`${searchURL}`)
    // .then((response) => {console.log(response.data.genres)})
    .then((response) => {res.status(200).send(response.data.genres)})
    .catch((err) => {console.log('failed to search for movies: ', err)})
  },
  getGenres: (req, res) => {
    return axios.get(`${genreURL}`)
    .then((response) => {res.status(200).send(response.data)})
    .catch((err) => {console.log('Failed GET (controller - getGenre) request: ', err)})
  },
  // filterGenre: (req, res) => {
  //   return axios.get(`${genreURL}`)

  // },
  saveMovie: (req, res) => {
    
  },
  deleteMovie: (req, res) => {

  }
}