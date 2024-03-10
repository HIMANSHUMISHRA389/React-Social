const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes/users");
const authRoute = require("./routes/auth");
const postRouter = require("./routes/post");
const path = require("path");

dotenv.config();
const multer = require("multer");
const cors = require("cors");
const uri = process.env.MONGO_URL;

//middlewares


app.use(cors())
app.use(
  "/uploads/assets",
  express.static(path.join(__dirname, "/uploads/assets"))
);


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//using multer to upload images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const formData = req.body;
  const file = req.file;

  console.log("Form data:", formData);
  console.log("Uploaded file:", file);

  res.send("File uploaded successfully");
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
