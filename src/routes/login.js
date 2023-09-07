const loginRouter = require('express').Router();
const { loginController } = require('../controllers');

loginRouter.post('/login', loginController.login);

module.exports = loginRouter;