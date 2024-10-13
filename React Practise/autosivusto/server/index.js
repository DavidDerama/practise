const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");

dotenv.config();

const port = process.env.PORT;
const host = process.env.host;

const autot = require("./autot.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/autot", (req, res) => {
  res.json(autot);
});

app.get("/api/haku", (req, res) => {
  const hakutermi = req.query.q;

  const hakutermiMuokattu = hakutermi[0].toUpperCase() + hakutermi.slice(1);

  const autoFilter = autot.filter((auto) => {
    if (
      auto.merkki.includes(hakutermiMuokattu) ||
      auto.malli.includes(hakutermiMuokattu) ||
      auto.omistaja.includes(hakutermiMuokattu)
    ) {
      return auto;
    }
  });
  res.json(autoFilter);
});

app.post("/api/lisaa", (req, res) => {
  const uusiAutoOlio = req.body;
  autot.push({ id: autot.length + 1, ...uusiAutoOlio });
  fs.writeFile(
    "autot.json",
    JSON.stringify(autot),
    { encoding: "utf8" },
    (err) => {
      if (err) {
        console.log("Error");
      } else {
        res.status(200).json({ message: "Car added to database" });
      }
    }
  );
});

app.delete("/api/poista", (req, res) => {
  const { id } = req.body;
  const index = autot.findIndex((auto) => parseInt(id) === auto.id);
  autot.splice(index, 1);
  fs.writeFile(
    "autot.json",
    JSON.stringify(autot),
    { encoding: "utf8" },
    (err) => {
      if (err) {
        console.log("Error");
      } else {
        res.json({ message: "Car removed" });
      }
    }
  );
});

app.listen(3000, host, () => console.log("Listening...."));
