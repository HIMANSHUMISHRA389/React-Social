const router = require("express").Router();
const Post = require("../models/Post.model");
const User = require("../models/User.model");


//create a post

// router.post("/", async (req, res) => {
//   try {
//     const user = User.findById(req.body.userId);
//     if (user) {
//       const pos=await new Post(req.body)
//       await pos.save()
//       res.status(200).json("your post has been created");
//     } else {
//       res.status(403).json("you can update only your post");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });




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
router.delete("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId == req.body.userId) {
      await post.deleteOne();
      res.status(200).json("your post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//like /dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
     res.status(200).json(post)
    } else {
      res.status(200).json("post not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
 
 try {
  console.log(req.params.userId)
  const currentUser=await User.findById(req.params.userId);
  console.log(currentUser)
  const userPosts=await Post.find({userId:currentUser._id});
  console.log("step1",currentUser,userPosts)
  const friendPosts=await Promise.all(
    currentUser.followings.map((friendId)=>{
     return Post.find({userId:friendId})
    })
  )
  console.log("step2");
  res.status(200).json(userPosts.concat(...friendPosts))
 } catch (error) {
  console.log("err")
  res.status(400).json(error)
 }
  
});


//get user's all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user=await User.findOne({
      username:req.params.username
    })
    const posts=await Post.find({userId:user._id})
    res.status(200).json(posts)
    
  } catch (error) {
    console.log("err");
    res.status(400).json(error);
  }
});
module.exports = router;
