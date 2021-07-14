"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Helovan");
});


app.listen(3000);

