const mongoose = require("mongoose");
const express = require("express");
const config = require("config");
const app = express();

const login = require("./route/login");
const list = require("./route/list");
const user = require("./route/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/login", login);
app.use("/api/user", user);
app.use("/api/list", list);

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to database..."))
  .catch(() => console.log("Something failed"));

app.listen(3900, () => console.log("Listening on port 3900..."));
