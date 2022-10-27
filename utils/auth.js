const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // if user is not logged in, redirect to login page.
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
