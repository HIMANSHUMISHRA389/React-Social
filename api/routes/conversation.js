const router = require("express").Router();




//get message
router.get("/", (req, res) => {
  try {
    res.status(200).send("its working fine");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
