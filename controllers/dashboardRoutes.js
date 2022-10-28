const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      raw: true,
      nest: true,
      include: [
        // {
        //   model: Comment,
        //   attributes: [
        //     "id",
        //     "description",
        //     "date_created",
        //     "user_id",
        //     "post_id",
        //   ],
        // },
        {
          model: User,
          attributes: ["name", "profilePic", "currentJob"],
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
