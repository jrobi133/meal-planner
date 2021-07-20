const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
const PORT = process.nextTick.PORT || 5000;

app.get("/", (req, res) => {
  res.send("");
});

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
