const { List, validate } = require("../model/list");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const username = req.user.username;
  const userToDo = await List.findOne({ username });
  if (!userToDo) return res.status(200).send([]);
  res.status(200).send(userToDo.list);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const username = req.user.username;
  const { title, message } = req.body;
  let userToDo = await List.findOne({ username });
  if (!userToDo) {
    userToDo = new List({
      username,
      list: [
        {
          title,
          message,
          date: Date.now(),
        },
      ],
    });
  } else userToDo.list.push({ title, message, date: Date.now() });
  await userToDo.save();

  res.status(200).send(userToDo.list);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Id");

  const userToDo = await List.findOneAndUpdate(
    { username: req.user.username, "list._id": req.params.id },
    {
      $set: {
        "list.$.title": req.body.title,
        "list.$.message": req.body.message,
      },
    },
    { new: true }
  );
  res.status(200).send(userToDo.list);
});

router.put("/check/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Id");

  const userToDo = await List.findOneAndUpdate(
    { username: req.user.username, "list._id": req.params.id },
    {
      $set: {
        "list.$.isCheck": 1,
      },
    },
    { new: true }
  );
  res.status(200).send(userToDo.list);
});

router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Id");

  const userToDo = await List.findOneAndUpdate(
    { username: req.user.username, "list._id": req.params.id },
    {
      $pull: {
        list: { _id: req.params.id },
      },
    },
    { new: true }
  );
  if (!userToDo) return res.status(400).send("No such item");
  res.status(200).send(userToDo.list);
});

module.exports = router;
