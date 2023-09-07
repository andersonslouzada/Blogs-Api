const userRouter = require('express').Router();
const { userController } = require('../controllers');

userRouter.post('/user', userController.createUser);

module.exports = userRouter;