//define
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//get all posts on dash
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: User,
          attributes: ["name", "profile_pic", "current_job"],
        },
      ],
    });

    console.log(postData);

    res.render("dashboard", {
      postData,
      user_id: req.user.id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
