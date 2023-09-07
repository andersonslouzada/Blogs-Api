const userRouter = require('express').Router();
const { userController } = require('../controllers');
const authToken = require('../middlewares/authToken');

userRouter.post('/user', userController.createUser);
userRouter.get('/user', authToken, userController.getUsers);

module.exports = userRouter;