const router = require("express").Router();
const { User } = require("../../models/");

router.post("/edit/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    console.log(req.body);

    await userData.update(req.body);

    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
