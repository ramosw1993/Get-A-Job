//define
const router = require("express").Router();
const { Post, User } = require("../models");
const { findAll } = require("../models/User");
const withAuth = require("../utils/auth");

//get profile
router.get("/", withAuth, async (req, res) => {
  try {
    let thisUser;
    const userData = await User.findByPk(req.user.id, {
      include: [
        {
          model: Post,
          include: [User],
        },
      ],
    });
    console.log(userData);
    if (userData.id === req.user.id) {
      thisUser = true;
    } else {
      thisUser = false;
    }

    console.log(thisUser);
    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      thisUser,
      user_id: req.user.id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//get profile with posts by user id
router.get("/:id", withAuth, async (req, res) => {
  try {
    let thisUser;
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          include: [User],
        },
      ],
    });
    console.log(userData);
    if (userData.id === req.user.id) {
      thisUser = true;
    } else {
      thisUser = false;
    }

    console.log(thisUser);
    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      thisUser,
      user_id: req.user.id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
