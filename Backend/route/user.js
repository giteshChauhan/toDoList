const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const { User, validate } = require("../model/user");
const auth = require("../middleware/auth");
const { List } = require("../model/list");

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

// Updating user's username & list username via mongodb transaction.

router.put("/", auth, async (req, res) => {
  const username = req.user.username;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const session = await mongoose.startSession();
  mongoose.connection.transaction(async (session) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      const user = await User.findOneAndUpdate(
        { username },
        {
          username: req.body.username,
          password,
        },
        { new: true }
      );

      await List.findOneAndUpdate(
        { username },
        {
          username: req.body.username,
        }
      );

      const token = user.generateAuthToken();
      res
        .header("auth-token", token)
        .header("access-control-expose-headers", "auth-token")
        .send(user.username);
    } catch (err) {
      console.log(err);
      session.abortTransaction();
      return res.status(400).send("Something failed");
    } finally {
      session.endSession();
    }
  });
});

module.exports = router;
