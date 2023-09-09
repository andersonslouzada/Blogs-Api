const userRouter = require('express').Router();
const { userController } = require('../controllers');
const authToken = require('../middlewares/authToken');

userRouter.post('/user', userController.createUser);
userRouter.get('/user', authToken, userController.findAll);
userRouter.get('/user/:id', authToken, userController.findById);
userRouter.delete('/user/me', authToken, userController.deleteUser);

module.exports = userRouter;