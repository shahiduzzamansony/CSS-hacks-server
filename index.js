const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
// repo changed

app.use(cors());

const frameworks = require("./data/frameworks.json");
const informations = require("./data/frameworks.json");

app.get("/", (req, res) => {
  res.send("news api running ok");
});

app.get("/frameworks", (req, res) => [res.send(frameworks)]);
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const selectedInfo = informations.find((n) => n.id === id);
  res.send(selectedInfo);
});

app.listen(port, () => {
  console.log("site", port);
});
