const mongoose = require("mongoose");
const Joi = require("joi");

const listSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  items: [
    {
      item: { type: String },
      isCheck: { type: Boolean, default: false },
    },
  ],
  date: { type: Date, required: true },
});

const List = mongoose.model("list", listSchema);

const validateList = (list) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    items: Joi.array().items(Joi.object().min(1).max(10)),
  });
  return schema.validate(list);
};

exports.validate = validateList;
exports.List = List;
