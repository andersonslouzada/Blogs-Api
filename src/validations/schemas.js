const joi = require('joi');

const userSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
});

const categorySchema = joi.object({
  name: joi.string().required(),
});

module.exports = {
  userSchema,
  categorySchema,
};