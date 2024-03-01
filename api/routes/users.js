const User = require("../models/User.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  
  if (req.body.userId == req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        console.log(req.body.password);
      } catch (error) {
        res.status(404).json("found error");
      }
    }
    try {
      console.log(req.body.password);
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (error) {
      return res.status(404).json("You can update only your account!");
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  // res.send("welcome to my page")
  console.log(req.body.userId);
  if (req.body.userId == req.params.id || req.user.isAdmin) {
    console.log(req.body.userId == req.params.id);
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).json("Account has been deleted");
    } catch (error) {
      return res.status(404).json(error);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//get a user
router.get("/", async (req, res) => {
  const userId=req.query.userId;
  const username=req.query.username;
console.log("here",userId,username)


  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({username:username});
    ;
    console.log(user)
    const { password, updatedAt, ...others } = user._doc;
    console.log(others)
    res.status(200).json(others);
  } catch (error) {
    res.status(404).json(error);
  }
});

//follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
       
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
      
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
         res.status(403).json("user has been followed");
      } else {
        res.status(403).json("error")
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

//unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(403).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
});
module.exports = router;
