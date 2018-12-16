module.exports = function (db) {
  return {
      getCountries(cb) {
          db.query('SELECT name FROM country', cb);
      }
  }
};