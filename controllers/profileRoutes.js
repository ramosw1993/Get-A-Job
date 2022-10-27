const router = require("express").Router();
const { Comment, Post, User } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
      raw: true,
      nest: true,
    });

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      raw: true,
    });

    console.log(postData, commentData);

    res.render("postdetail", {
      commentData,
      postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
