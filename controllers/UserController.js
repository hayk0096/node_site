module.exports = function () {
    return {
        userPage(req, res) {
            if(req.isAuthenticated()){
                res.render("pages/profile", { title: 'Profile' });
            }
            res.redirect('/login');
        },
        profile(req, res){
            // if(req.isAuthenticated()){
            //user.modelin zapros
            //Auth.id
            res.render('pages/profile',{
                //img: userImg
            });
        }


    }
};