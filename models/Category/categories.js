module.exports = function (pool) {
    return {
        getCategory(cb) {
            pool.query('SELECT * FROM categories', cb);
        },
        addCategory(cb){
            // insert category
        }
    }
};