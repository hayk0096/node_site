module.exports = function (user) {
    return {
        login(req, res){
            if (req.isAuthenticated()){
                res.render('/');
            } else {
                // console.log(req.user);
            }
            res.render("pages/user/login", { title: 'Login' });
        },
        registerPage(req, res) {
            res.render("pages/user/register", { title: 'Register' });
        },
        postRegister(req, res){
            req.checkBody('firstName', 'First name field cannot be empty').notEmpty();
            req.checkBody('lastName', 'Last name must be between 4-15 characters long').len(4, 15);
            req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
            req.checkBody('email', 'Email address must be between 4-100 characters long,please try again').len(4, 100);
            req.checkBody('password', 'Password must be between 6-50 characters long.').len(6, 50);
            req.checkBody('password', 'Password must be include one lowercase character, one uppercase character, a number and a special character.')
                            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{6,}$/, "i");
            req.checkBody('reEmail', 'Re enter email and email fields don\'t mutch').equals(req.body.email);

            const errors = req.validationErrors();

            if (errors) {
                // console.log(`errors: ${JSON.stringify(errors)}`);
                res.render('pages/user/register', {
                    errorTitle: 'Registration Error',
                    errors: errors
                });
            } else {
                var birthdate = `${req.body.birthYear}-${req.body.birthMonth}-0${req.body.birthDay}`;
                user.createUser(
                    req.body.firstName,
                    req.body.lastName,
                    req.body.reEmail,
                    birthdate,
                    req.body.gender,
                    req.body.password, (err, result) => {
                        if(err) throw new Error(err);
                        req.flash('success', 'You are now registered and can login ');
                        res.redirect('/login');
                    }
                );
            }
        },
        postLogin(req, res){
            user.getUser(req.body.email, req.body.password, (err, rows) => {
                if(err) throw new Error(err);
                res.location('/profile');
                res.render('pages/user/profile', { user: rows });
            });
        },
        // postLogin(req, res) {
        //     req.flash('success', 'You are now logged in');
        //     res.redirect('/');
        // },
        logout(req, res){
            req.logout();
            req.flash('success', 'You are now logged out');
            req.session.destroy();
            res.redirect('/login');
        }
    }
};