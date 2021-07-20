const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

require("dotenv").config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Hunter15",
  database: "crud_db",
});

const PORT = process.nextTick.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM demo_one ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const demo_name = req.body.demo_name;
  const demo_description = req.body.demo_description;

  const sqlInsert =
    "INSERT INTO demo_one (demo_name, demo_description) Values (?,?)";
  db.query(sqlInsert, [demo_name, demo_description], (err, result) => {
    console.log(result);
  });
});

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
