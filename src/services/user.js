const jwt = require('jsonwebtoken');
const { User } = require('../models');
const schema = require('../validations/userValidation');

const createUser = async (user) => {
  const errors = schema.validateUser(user);
  if (errors) return { status: errors.status, data: { message: errors.message } };

  const existingUser = await User.findOne({ where: { email: user.email } });
  if (existingUser) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  const newUser = await User.create(user);
  const { id, displayName, email } = newUser.dataValues;
  const payload = { id, displayName, email };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

  return { status: 'CREATED', data: { token } };
};

module.exports = {
  createUser,
};