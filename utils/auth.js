//make sure logged in, if not autherized show not auth pg
const withAuth = (req, res, next) => {
  req.user ? next() : res.redirect("/notauth");
};

module.exports = withAuth;
