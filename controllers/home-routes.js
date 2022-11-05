const homePage = async (req, res) => {
   return res.render("home.handlebars",{
       user: req.user
   });
};

module.exports = homePage;