const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const mongoDB = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = mongoDB;
