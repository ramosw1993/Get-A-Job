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
          attributes: ["name", "profile_pic", "current_job"],
        },
      ],
    });
    console.log(userPosts);

    if (userPosts[0].user_id === req.user.id) {
      thisUser = true;
    } else {
      thisUser = false;
    }

    res.render("profile", {
      userPosts,
      thisUser,
      user_id: req.user.id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    let thisUser;
    const userPosts = await Post.findAll({
      where: { user_id: req.params.id },
      raw: true,
      nest: true,
      include: [
        {
          model: User,
          attributes: ["name", "profile_pic", "current_job"],
        },
      ],
    });
    console.log(userPosts);
    if (userPosts[0].user_id === req.user.id) {
      thisUser = true;
    } else {
      thisUser = false;
    }

    console.log(thisUser);

    res.render("profile", {
      userPosts,
      thisUser,
      user_id: req.user.id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
