//define
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

//get all posts from one user
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
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
