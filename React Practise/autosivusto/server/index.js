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

  const hakutermiMuokattu = hakutermi.toLowerCase();

  const autoFilter = autot.filter((auto) => {
    if (
      auto.merkki.toLowerCase().includes(hakutermiMuokattu) ||
      auto.malli.toLowerCase().includes(hakutermiMuokattu) ||
      auto.omistaja.toLowerCase().includes(hakutermiMuokattu)
    ) {
      return auto;
    }
  });
  res.json(autoFilter);
});

app.get("/api/maara", (req, res) => {
  res.json({ length: autot.length });
});

app.post("/api/lisaa", (req, res) => {
  const { merkki, malli, vuosimalli, omistaja } = req.body;
  autot.push({
    id: autot.length + 1,
    vuosimalli: parseInt(vuosimalli),
    merkki,
    malli,
    omistaja,
  });
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
