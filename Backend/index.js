const mongoose = require("mongoose");
const express = require("express");
const config = require("config");
const cors = require("cors");
const app = express();

const auth = require("./middleware/auth");

const login = require("./route/login");
const user = require("./route/user");
const list = require("./route/list");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/login", login);
app.use("/api/user", user);
app.use("/api/list", auth, list);

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to database..."))
  .catch(() => console.log("Something failed"));

app.listen(3900, () => console.log("Listening on port 3900..."));
