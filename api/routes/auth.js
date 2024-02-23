const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
   res.status.json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !validPassword && res.status(404).json("wrong found");

    res.status(200).json(user);
  } catch (error) {
    res.status.json(error)
  }
});
module.exports = router;
