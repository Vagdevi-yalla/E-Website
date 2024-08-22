const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});

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
