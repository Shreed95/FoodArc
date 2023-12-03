const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db");
const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.use(express.json());

app.use("/api", require("./routes/createUser"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
