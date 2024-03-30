const router = require("express").Router();
const message=require("../models/Message.model")


//post a message
router.post("/", async(req, res) => {
  try {
    const msg= new message(req.body)
    const savedMsg=await msg.save()

    res.status(200).send(savedMsg);
  } catch (error) {
    console.log(error);
  }
});



//get message
router.get("/", (req, res) => {
  try {
    res.status(200).send("its working fine");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
