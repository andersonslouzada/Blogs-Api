const jwt = require('jsonwebtoken');
const { User } = require('../models');
const schema = require('../validations/dataValidation');

async function createUser(user) {
  const errors = schema.validateUser(user);
  if (errors) return { status: errors.status, data: { message: errors.message } };

  const existingUser = await User.findOne({ where: { email: user.email } });
  if (existingUser) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  const newUser = await User.create(user);
  const { id, displayName, email } = newUser.dataValues;
  const payload = { id, displayName, email };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

  return { status: 'CREATED', data: { token } };
}

async function findAll() {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: users };
}

async function findById(id) {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  return { status: 'SUCCESSFUL', data: user };
}

const deleteUser = async (userId) => {
  const user = await User.findByPk(userId);

  if (!user) return { status: 'NOT_FOUND', data: { message: 'My user is not in database' } };

  if (user.dataValues.id !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  const deletedUser = await User.destroy({ where: { id: userId } });

  return { status: 'NO_CONTENT', data: deletedUser };
};

module.exports = {
  createUser,
  findAll,
  findById,
  deleteUser,
};