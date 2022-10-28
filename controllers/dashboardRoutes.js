const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  try {
    const postData = Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "description",
            "date_created",
            "user_id",
            "post_id",
          ],
          include: {
            model: User,
            attributes: ["name", "email"],
          },
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
