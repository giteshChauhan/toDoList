const { List, validate } = require("../model/list");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const username = req.user.username;
  const user = await List.findOne({ username });
  if (!user) return res.status(200).send([]);
  res.status(200).send(user.list);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const username = req.user.username;
  const { title, message } = req.body;
  let user = await List.findOne({ username });
  if (!user) {
    user = new List({
      username,
      list: [
        {
          title,
          message,
          date: Date.now(),
        },
      ],
    });
  } else user.list.push({ title, message, date: Date.now() });
  await user.save();

  res.status(200).send(user.list);
});

module.exports = router;
