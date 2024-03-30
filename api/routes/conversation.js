const router = require("express").Router();
const Conversation = require("../models/Conversation.model");

//post a message
router.post("/", async (req, res) => {
  try {
    const msg = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    const savedMsg = await msg.save();
    res.status(200).send(savedMsg);
  } catch (error) {
    res.send(404).send(error);
  }
});

//get a conversation based on userId
router.get("/:userId", async (req, res) => {
  try {
    const search = req.params.userId;
    console.log(search);
    const conve = await Conversation.find({
      members: { $regex: search, $options: "i" },
    });
    res.status(200).send(conve);
  } catch (error) {
    res.send(404).send(error);
  }
});
module.exports = router;
