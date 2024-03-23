const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes/users");
const Post = require("./models/Post.model");
const authRoute = require("./routes/auth");
const postRouter = require("./routes/post");
const path = require("path");
const jwt = require("jsonwebtoken");

dotenv.config();
const multer = require("multer");
const cors = require("cors");
const uri = process.env.MONGO_URL;

//middlewares

app.use(
  cors({
    origin: "https://client-fnl2tkyb8-himanshumishra389s-projects.vercel.app",
    credentials: true, // This allows cookies to be sent across origins
  })
);

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  "/uploads/assets",
  express.static(path.join(__dirname, "/uploads/assets"))
);

app.use(express.json());
app.use(helmet());
// app.use(morgan("common"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//using multer to upload images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  const pa = req.file.path;
  const desc = req.body.text;
  let file = req.file.path;
  // Replace "\" with "/
  let fixedPath = file.replace(/\\/g, "/");

  const userId = req.body.userId;
  try {
    const newPost = await new Post({
      userId: userId,
      img: fixedPath,
      desc: desc,
    });

    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
    // Send the saved post as response
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ error: "Failed to save post" });
  }
});

//APIs

app.use("/api/users", userRouter);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRouter);

mongoose
  .connect(uri, {})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

app.listen(8800, () => {
  console.log("Server started at loacalhost:8800");
});
