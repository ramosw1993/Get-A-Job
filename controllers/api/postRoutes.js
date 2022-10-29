const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get one post
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("post", {
      ...post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      // title: req.body.title,
      // description: req.body.description,
      ...req.body,
      user_id: req.user.id,
      // pay: req.body.pay,
    });
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    console.log(newPost);
    res.status(400).json(err);
  }
});

//update post
router.put('/:id', async (req,res) => {
  try {
  const post = await Post.update(
    {
    title: req.body.title,
      description: req.body.description,
      pay: req.body.pay,
      dateCreated: req.body.dateCreated,
      userId: req.user.id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json(dish);
} catch (err) {
  res.status(500).json(err);
}
});

//delete a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.user.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
