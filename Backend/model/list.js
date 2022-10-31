const mongoose = require("mongoose");
const Joi = require("joi");

const listSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  list: [
    {
      title: { type: String, required: true, minlength: 3, maxlength: 50 },
      message: { type: String, required: true, minlength: 3, maxlength: 500 },
      date: { type: Date, required: true },
      isCheck: { type: Boolean, default: false },
    },
  ],
});

const List = mongoose.model("list", listSchema);

const validateList = (list) => {
  const schema = Joi.object({
    uid: Joi.objectId().required(),
    title: Joi.string().min(3).max(50).required(),
    message: Joi.string().min(3).max(500).required(),
  });
  return schema.validate(list);
};

exports.validate = validateList;
exports.List = List;
