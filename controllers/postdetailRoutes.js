const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name", "profile_pic", "current_job"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const userPosts = postData.get({ plain: true });

    console.log(userPosts);
    res.render("postdetail", {
      ...userPosts,
      user_id: req.user.id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
