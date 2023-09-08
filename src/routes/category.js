const categoryRouter = require('express').Router();
const { categoryController } = require('../controllers');
const authToken = require('../middlewares/authToken');

categoryRouter.post('/categories', authToken, categoryController.createCategory);

// categoryRouter.get('/user', authToken, userController.findAll);
// categoryRouter.get('/user/:id', authToken, userController.findById);

module.exports = categoryRouter;