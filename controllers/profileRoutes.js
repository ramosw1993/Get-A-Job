const router = require("express").Router();
const { Post, User } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: req.session.user_id },
      raw: true,
    });
    console.log(userPosts);
    res.render("profile", {
      userPosts,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
