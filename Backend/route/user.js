const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validate } = require("../model/user");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered");

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  user = new User({
    username: req.body.username,
    password,
  });
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("auth-token", token)
    .header("access-control-expose-headers", "auth-token")
    .send(user.username);
});

module.exports = router;
