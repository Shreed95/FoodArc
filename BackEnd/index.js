const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT, () => console.log("Mongo DB Connected")))
  .catch((error) => console.log(error.message));
