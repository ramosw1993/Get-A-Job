const router = require("express").Router();
const { Post, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// gets all posts
router.get('/', async (req, res) => {
  const dashboardData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: [
          'name',
          'profilePic'
        ],
      },
    ],
  });
  const posts = dashboardData.map((posts) =>
      posts.get({ plain: true }));
      console.log(posts);
      res.render('dashboard', { posts });
});

// gets  one dashboard 
router.get("/dashboard/:id", withAuth, async (req, res) => {
  try {
    const dashboardData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'name',
            // 'description',
            // 'dateCreated',
            // 'pay',
            // 'userId',
          ],
        },
        {
          // model: Comment,
          // include: [User],
        },
      ],
    });
    const newPostData = dashboardData.get({ plain: true });
    res.render('newPostData', newPostData);
  } catch (err) {
      res.status(500).json(err);
  };     
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const onePost = postData.get({ plain: true });
    res.render('onePost', { onePost });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
