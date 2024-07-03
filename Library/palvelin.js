const express = require("express");
const path = require("path");
const fs = require("fs");

const { port, host } = require("./config.json");
const tyontekijat = require("./tyontekijat.json");
const { prototype } = require("events");

const app = express();
app.use("/inc", express.static("includes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "sivupohjat"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/tyontekijat", (req, res) => {
  res.json(tyontekijat);
});

app.get("/tyontekija/:sukunimi", (req, res) => {
  const sukunimi = req.params.sukunimi;
  const hae = tyontekijat.find((joku) => {
    return joku.sukunimi === sukunimi;
  });
  console.log(hae);
  res.send(hae);
});

app.post("/lisaa", (req, res) => {
  const etunimi = req.body.etunimi;
  const sukunimi = req.body.sukunimi;
  const yritys = req.body.yritys;
  const osasto = req.body.osasto;
  const kaupunki = req.body.kaupunki;

  const uusiTyontekija = {
    id: tyontekijat.length + 1,
    etunimi: etunimi,
    sukunimi: sukunimi,
    yritys: yritys,
    osasto: osasto,
    kaupunki: kaupunki,
  };

  tyontekijat.push(uusiTyontekija);

  fs.writeFile(
    "tyontekijat.json",
    JSON.stringify(tyontekijat),
    { encoding: "utf8" },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: "Information Added" });
      }
    }
  );
});

app.put("/paivita", (req, res) => {
  const etunimi = req.body.etunimi;
  const sukunimi = req.body.sukunimi;
  const yritys = req.body.yritys;
  const osasto = req.body.osasto;
  const kaupunki = req.body.kaupunki;

  const muokatettava = tyontekijat.find((tyontekija) => {
    return tyontekija.sukunimi === sukunimi;
  });
  muokatettava.etunimi = etunimi;
  muokatettava.sukunimi = sukunimi;
  muokatettava.yritys = yritys;
  muokatettava.osasto = osasto;
  muokatettava.kaupunki = kaupunki;

  const index = tyontekijat.findIndex((tyontekija) => {
    return tyontekija.sukunimi === sukunimi;
  });

  tyontekijat.splice(index, 1, muokatettava);

  fs.writeFile(
    "tyontekijat.json",
    JSON.stringify(tyontekijat),
    { encoding: "utf8" },
    (err) => {
      if (err) {
        console.log(err);
      }
      res.json({ message: "Information Updated" });
    }
  );
});

app.delete("/poista/:index", (req, res) => {
  const index = req.params.index;
  tyontekijat.splice(index, 1);

  fs.writeFile(
    "tyontekijat.json",
    JSON.stringify(tyontekijat),
    { encoding: "utf8" },
    (err) => {
      if (err) {
        console.log(err);
      }
      res.json({ message: "Worker removed" });
    }
  );
});

app.listen(port, host, () => {
  console.log("Palvelin kuuntelee");
});
