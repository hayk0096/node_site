module.exports = function (pool) {
    return {
        createProduct(name, price, description, default_image, category_id, currency_id, cb) {
            pool.query("INSERT INTO products SET ?", [
                name,
                price,
                description,
                default_image,
                category_id,
                currency_id
            ], cb);
        },
        getAllProducts(cb) {
            pool.query('SELECT * FROM products', cb);
        },
        singleProduct(id, cb){
            pool.query('SELECT * FROM products WHERE id = ?', [id], cb);
        },
        findProductByCategoryName(name,cb){
            pool.query("SELECT * FROM categories, products WHERE(products.category_id = categories.id) AND(categories.name = ?)",
                [name],
                cb)
        },
        getCurrency(cb) {
            pool.query('SELECT * FROM currency', cb);
        },
        getCurrValue(id, cb){
            pool.query('SELECT name FROM currency WHERE id = ?', [id], cb);
        },
        listCartProducts() {

        }
    }
};