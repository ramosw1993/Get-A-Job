const router = require("express").Router();

function startHome() {
  res.render("homepage");
}

startHome();

module.exports = homeRoutes;
