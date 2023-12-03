const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});

mongoose.connection.on('error', err =>{
  console.log(err);
})
