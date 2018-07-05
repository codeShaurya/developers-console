const Joi = require('joi');

const payloadValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { payloadValidator };
