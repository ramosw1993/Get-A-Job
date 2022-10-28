const router = require("express").Router();
const { Post, User } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: req.user.id },
      raw: true,
      nest: true,
      include: [
        {
          model: User,
          attributes: ["name", "profilePic", "currentJob"],
        },
      ],
    });
    console.log(userPosts);
    res.render("profile", {
      userPosts,

      user_id: req.user.id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
