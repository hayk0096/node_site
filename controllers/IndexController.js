module.exports = function () {
    return{
        index(req, res){
            // if(req.isAuthenticated()){
                res.render("pages/home");
            // }
        },
        aboutPage(req, res){
            res.render("pages/about", {title: 'About'});
        }
    }
};
