const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "12345"

router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(req.body);
    //create new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(newUser);
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).json("user not found");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(404).json("wrong found");
    }
    console.log("secret",secret)
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });
    console.log("token",token)
    res.status(200).json({user,token});
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
