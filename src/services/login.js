const jwt = require('jsonwebtoken'); 
const { User } = require('../models');

async function login(email, password) {
if (!email || !password) {
  return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
}

const user = await User.findOne({ where: { email, password } });
if (!user) return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };

const payload = { 
  id: user.dataValues.id, 
  email: user.dataValues.email, 
  username: user.dataValues.username, 
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

return { status: 'SUCCESSFUL', data: { token } };
}

module.exports = {
  login,
};