const express = require("express");
const path = require("path");

const { port, host } = require("./config.json");

const app = express();

app.use("/inc", express.static("includes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "sivupohjat"));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, host, () => {
  console.log("Palvelin kuuntelee");
});
