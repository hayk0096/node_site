const express = require('express');
const router = express.Router();
const db = require('../config');
const mysql = require("mysql");
const path = require('path');
const pool = mysql.createPool(db);
const multer = require("multer");
const localStorage = require('localStorage');

/**
 * Models
 */
const User = require('../models/User/user')(pool);
const Categories = require('../models/Category/categories')(pool);
const Products = require('../models/Products/products')(pool);
const Defaults = require('../models/index')(pool);

/**
 * Controllers
 */
const IndexController = require(path.join('../controllers/IndexController'))();
const AuthController = require(path.join('../controllers/AuthController'))(User);
const UserController = require(path.join('../controllers/UserController'))();
const ProductsController = require(path.join('../controllers/ProductsController'))(Categories, Products, Defaults, localStorage);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        let mime = file.mimetype.split("/");
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime[1]);
    }
});

const upload = multer({storage: storage});

router.get('/', IndexController.index);
router.get('/home', IndexController.index);
router.get('/index', IndexController.index);

router.get('/about', IndexController.aboutPage);

router.get('/profile', UserController.userPage);

router.get('/register', AuthController.registerPage);
router.post('/register', AuthController.postRegister);

router.get('/products', ProductsController.index);
router.get('/products/:id', ProductsController.getProduct);
router.post('/currency', ProductsController.currencyValue);

router.get('/cart', ProductsController.getCartProducts);
router.post('/cart', ProductsController.getCartVal);
router.post('/cart/remove',ProductsController.removeCartProduct);

router.get('/add-product', ProductsController.addProductPage);
router.all('/add-product', upload.single('image'), ProductsController.insertProduct);

router.all('/filter', function (req, res) {
    req.on("data", function (chunk) {
        let data = JSON.parse(chunk.toString());
        Products.findProductByCategoryName(data.category, function (err, rows) {
            if(!err){
                res.send(200, {message: rows});
            }
        });
    });
});

module.exports = router;