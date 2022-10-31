const withAuth = (req, res, next) => {
  req.user ? next() : res.redirect("/notauth");
};

module.exports = withAuth;
