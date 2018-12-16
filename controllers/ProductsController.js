module.exports = function (category, products, defaults, localStorage) {
    const curr = new Promise( (resolve, reject) => {
        products.getCurrency( (err, rows) => {
            if (!err  && rows.length > 0 ) {
                resolve(rows);
            }
            reject("Sql request error", reject);
        });
    });
    return {
        index(req, res){
            curr.then(rows => {
                products.getAllProducts( (err, result ) => {
                    if (!err ) {
                        res.render('pages/product/products', {
                            products: result,
                            currencies: rows,
                            title: 'Products'
                        });
                    }
                });
            }).catch( err => {
                console.log(err);
                res.redirect('/home');
            });
        },
        addProductPage(req, res){
            curr.then( currency => {
                category.getCategory( (err, result) => {
                    if (!err) {
                        res.render('pages/product/addProduct', {
                            categories: result,
                            currencies: currency,
                            title: 'Create Product'
                        });
                    }
                });
            }).catch( err => {
                console.log(err);
                res.redirect('/products');
            });
        },
        insertProduct(req, res){
            products.createProduct(
                req.body.name,
                req.body.price,
                req.body.description,
                req.file.filename,
                req.body.category_id,
                req.body.currency_id,
                function (err, rows) {
                    if (!err) {
                        res.redirect('/products');
                    }
                }
            );
        },
        getProduct(req, res) {
            curr.then( currency => {
                products.singleProduct(req.params.id, (err, rows) => {
                    if (err) {
                        res.redirect('/products');
                    }
                    res.render('pages/product/singleProduct', {
                        result: rows,
                        currencies: currency
                    });
                });
            }).catch( err => {
                console.log(err);
                res.redirect('/addProduct');
            });
        },
        currencyValue(req, res) {
            req.on('data', function(chunk){
                let data = JSON.parse(chunk);
                products.getCurrValue(data.id, (err, rows) => {
                    res.send(rows[0].name);
                });
            });
        },
        getCartProducts(req, res){
            let cart = JSON.parse(localStorage.getItem('cart'));
            res.render('pages/product/cart',{ products: cart });
        },
        getCartVal(req, res){
            req.on("data", function (chunk) {
                let data = JSON.parse(chunk.toString());
                localStorage.setItem('cart', JSON.stringify(data));
            });
        },
        removeCartProduct(req, res){
            var arr = [];
            req.on("data", function (chunk) {
                var data = JSON.parse(chunk.toString()),
                    cart = JSON.parse(localStorage.getItem('cart'));
                cart.forEach(function (item) {
                    if(item.name != data.pName){
                        arr.push(item);
                        let result = JSON.stringify(arr);
                        localStorage.setItem('cart', result);
                    }
                });
            });
        }
    }
};

