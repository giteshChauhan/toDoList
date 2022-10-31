const mongoose = require("mongoose");
const passComplex = require("joi-password-complexity");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  password: { type: String, required: true, minlength: 8, maxlength: 255 },
});

const User = mongoose.model("user", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().required().email().min(3).max(30),
    password: passComplex().required(),
  });
  return schema.validate(user);
};

exports.validate = validateUser;
exports.User = User;
