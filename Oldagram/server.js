const express = require("express");
const path = require("path");
const fs = require("fs");

const { port, host } = require("./config.json");
const posts = require("./posts.json");

const app = express();
app.use("/inc", express.static("includes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "sivupohjat"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.put("/post/:id", (req, res) => {
  const search = req.params.id;
  const searchFind = posts.find((post) => post.username === search);
  if (searchFind.isLiked) {
    searchFind.likes--;
  } else {
    searchFind.likes++;
  }
  searchFind.isLiked = !searchFind.isLiked;

  const searchIndex = posts.findIndex((post) => post.username === search);
  posts.splice(searchIndex, 1, searchFind);
  fs.writeFile(
    "posts.json",
    JSON.stringify(posts),
    { encoding: "utf8" },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(posts);
      }
    }
  );
});

app.use((req, res) => {
  res.send("Page not found");
});

app.listen(port, host, () => {
  console.log("Server running");
});
