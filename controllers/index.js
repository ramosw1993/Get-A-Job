const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const profileRoutes = require("./profileRoutes");
const postdetailRoutes = require("./postdetailRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/profile", profileRoutes);
router.use("/postdetail", postdetailRoutes);

module.exports = router;
