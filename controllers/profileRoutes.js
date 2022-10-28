const router = require("express").Router();
const { Post, User } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/profile", withAuth, async (req, res) => {
    try {
      const userPosts = await Post.findAll({
        where: { ${req.user.id} },
        raw: true,
      });
      console.log(userPosts);
      res.render("profile", {
        userPosts,
        ${req.user.id},
      });
    } catch (err) {
      res.status(400).json(err);
    }
});



module.exports = router;
