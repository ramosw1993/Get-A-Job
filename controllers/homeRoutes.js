const router = require("express").Router();
var passport = require("passport");
var GoogleStrategy = require("passport-google-oidc");

// const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/login/federated/google", passport.authenticate("google"));

module.exports = router;
