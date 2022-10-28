const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentDelete = Comment.destroy({
      where: { id: req.params.id },
    });
    if (!commentDelete) {
      res.status(404).json({ message: "No comments found!" });
      return;
    }
    res.status(200).json(commentDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
