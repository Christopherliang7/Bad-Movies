const { Db } = require('mongodb');
const sqlDb = require('../../db/sql');


module.exports = {
  // get - for showing your saved favorites
  get: function(callback) {
    const getQuery = 'SELECT * FROM movies;'
    sqlDb.query(getQuery, (err, results) => {
      if (err) {
        console.log('Error with GET Model: ', err)
      } else {
        callback(results);
      }
    })
  }

}