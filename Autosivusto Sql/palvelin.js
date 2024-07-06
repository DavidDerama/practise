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

app.post("/lisaa", async (req, res) => {
  try {
    const autot = await haeAutot();
    const id = parseInt(autot.length + 1);
    const merkki = req.body.merkki;
    const malli = req.body.malli;
    const vuosimalli = parseInt(req.body.vuosimalli);
    const omistaja = req.body.omistaja;
    const laheta = await lisaaAuto(id, merkki, malli, vuosimalli, omistaja);
    res.json(laheta);
  } catch (err) {
    res.status(500).json({ err: err });
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

function lisaaAuto(id, merkki, malli, vuosimalli, omistaja) {
  const connection = mysql.createConnection(dbconfig);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO auto (id, merkki, malli, vuosimalli, omistaja) values (${id}, "${merkki}", "${malli}", ${vuosimalli}, "${omistaja}")`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve({ message: "Auto lisätty" });
      }
    );
    connection.end();
  });
}

app.listen(port, host, () => {
  console.log("Palvelin kuuntelee");
});
