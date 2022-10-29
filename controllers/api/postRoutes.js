const router = require("express").Router();
const { User, Post, Comment } = require("../../models/Post");
const withAuth = require("../../utils/auth");

// get one post
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const onePost = postData.get({ plain:true });

    res.render('onePost', { onePost });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const createdPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
      pay: req.body.pay,
      dateCreated: req.body.dateCreated,
      userId: req.session.userId,
    });
    res.status(200).json(createdPost);
  } catch (err) {
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
      userId: req.session.userId,
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


//delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
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
