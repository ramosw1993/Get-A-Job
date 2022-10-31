//define
const router = require("express").Router();

const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoute");

router.use("/post", postRoutes);
router.use("/users", userRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
