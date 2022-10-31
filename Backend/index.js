const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost/toDoList")
  .then(() => console.log("Connected to database..."))
  .catch(() => console.log("Something failed"));
app.listen(3900, () => console.log("Listening on port 3900..."));
