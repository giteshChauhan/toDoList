const { List, validate } = require("../model/list");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const username = req.user.username;
  const userToDo = await List.find({ username });
  if (!userToDo) return res.status(200).send([]);
  res.status(200).send(userToDo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const username = req.user.username;
  const { title, items } = req.body;
  const userToDo = new List({
    username,
    title,
    items,
    date: Date.now(),
  });
  await userToDo.save();

  res.status(200).send(userToDo);
});

router.put("/check/:listId/:itemId", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Id");

  const userToDo = await List.findOneAndUpdate(
    { _id: req.params.listId, "items._id": req.params.itemId },
    {
      $set: {
        "items.$.isCheck": 1,
      },
    },
    { new: true }
  );
  res.status(200).send(userToDo.list);
});

router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid Id");

  const userToDo = await List.findByIdAndRemove(req.params.id, { new: false });
  if (!userToDo) return res.status(400).send("No such item");
  res.status(200).send("List removed");
});

module.exports = router;
