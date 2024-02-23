const router = require("express").Router();
const Post = require("../models/Post.model");
//create a post
router.post("/", async (req, res) => {
  try {
    const savedPost = await new Post(req.body)
    await savedPost.save()
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(404).json(error);
  }
});
//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId == req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("your post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a post
//like a post
//get a post
//get timeline posts

module.exports = router;
