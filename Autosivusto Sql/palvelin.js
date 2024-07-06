const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const { port, host } = require("./config.json");
const dbconfig = require("./dbconfig.json");

const app = express();

app.use("/inc", express.static("includes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "sivupohjat"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/hakutulos", (req, res) => {
  res.render("hakutulos");
});

app.get("/api/autot", async (req, res) => {
  try {
    const autot = await haeAutot();
    res.json(autot);
  } catch (err) {
    res.status(500).json({ err: "Autot ei löydetty" });
  }
});

app.post("/hae", async (req, res) => {
  const haettava = req.body.hakusana;

  try {
    const autot = await haeAutot();
    const autoJson = autot.filter((auto) => {
      if (
        auto.malli.includes(haettava) ||
        auto.merkki.includes(haettava) ||
        auto.vuosimalli === parseInt(haettava) ||
        auto.omistaja.includes(haettava)
      ) {
        return auto;
      }
    });
    res.json(autoJson);
  } catch (err) {
    res.status(500).json({ err: "Autot ei löydetty" });
  }
});

function haeAutot() {
  const connection = mysql.createConnection(dbconfig);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM auto", (err, rivit, kentat) => {
      if (err) {
        reject(err);
      }
      resolve(rivit);
    });
    connection.end();
  });
}
app.listen(port, host, () => {
  console.log("Palvelin kuuntelee");
});

function lisaaAuto() {
  const connection = mysql.createConnection(dbconfig);
  connection.connect();
}
