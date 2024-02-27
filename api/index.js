const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes/users");
const authRoute = require("./routes/auth");
const postRouter = require("./routes/post");
dotenv.config();
const cors = require("cors");
const uri = process.env.MONGO_URL;

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

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
