const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Connected Mongodb
const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error("error db connection:", err.message);
  });

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "checking server" });
});
app.listen(PORT, () => {
  console.log(" SERVER IS RUNNING");
});
//Routes
app.use("/user", require("./routes/userRouter"));
