const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", { apiKey: process.env.API_KEY });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
