const express = require('express');
const path = require("path");
const favicon = require('serve-favicon');
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Authentication Packages
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Create a new Express application.
const app = express();

const db = require('./config');
const mysql = require("mysql");
const pool = mysql.createPool(db);

const flash = require('connect-flash');
app.use(flash());

const fs = require("fs");
const log = fs.createWriteStream('error.log', {flags: 'a'});

// Configure view engine to render PUG templates.
app.set('views', path.join(__dirname, "views"));
app.set('view engine', "pug");

app.use(logger('combined', {stream: log}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.all('/', function (req, res) {
//     console.log(req.session.id);
// });

// app.use(session({keys: ['secret']}));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


app.use("/", require('./router/index'));

// app.use(expressValidator({
//     errorFormatter: function (param, msg, value) {
//         var namespace = param.split('.'),
//             root = namespace.shift(),
//             formParam = root;
//
//         while (namespace.length) {
//             formParam += '[' + namespace.shift() + ']';
//         }
//         return {
//             param: formParam,
//             msg : msg,
//             value: value
//         };
//     }
// }));

// app.use(function(req, res, next ) {
//     res.locals.messages = require('express-messages')(req, res);
//     next();
// });


// app.get('*', function (req, res) {
//     res.locals.user = req.user || null;
// });

// app.use(function(e, req, res, next) {
//     if (e.message === "Bad request") {
//         res.status(400).json({error: {msg: e.message, stack: e.stack}});
//     }
// });

// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('pages/error');
// });


/**
 * Model
 */
const User = require('./models/User/user')(pool);

/**
 * Controllers
 */
const AuthController = require('./controllers/AuthController')(User);

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username,password);

        pool.query('SELECT * FROM users WHERE email = ?', [username], function (err, results, fields) {
            if (err) done(err);
            if ( results.length === 0 ) done(null, false);
            console.log(results[0].password);
            return done(null, 'ksjbv');
        });
        return done(null, false);
        // User.getUser(username, password, function (err, rows) {
        //     if(rows || rows.length == 1){
        //         return done(err, rows[0]);
        //     }else{
        //         return done(null, false, {message: "incorected"});
        //     }
        // });
        // User.findByEmail(username, function(err, user) {
        //     if (err) { return cb(err); }
        //     if (!user) { return cb(null, false); }
        //     if (user.password != password) { return cb(null, false); }
        //     return cb(null, user);
        // });
}));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, rows) {
        if(rows || rows.length == 1){
            return done(err, rows);
        }else{
            return done(null, false, {message: "Incorrected"});
        }
    });
});


app.post('/login', passport.authenticate('local'), AuthController.postLogin );
// app.post('/login',
//     passport.authenticate('local', { successRedirect: '/profile',
//                                      failureFlash: 'Invalid username or password.',
//                                      failureRedirect: '/login' }),
//     AuthController.postLogin );
app.get('/login', AuthController.login);
app.get('/logout', AuthController.logout);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Server is listening ${server.address().port}`);
});