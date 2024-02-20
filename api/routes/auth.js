const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcome to route");
});
module.exports = router;
