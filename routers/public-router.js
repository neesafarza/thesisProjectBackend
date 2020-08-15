'use strict';

const { Router } = require('express');
const publicRouter = new Router();
const userController = require('../controllers/user');
const productController = require('../controllers/product');

publicRouter.get('/register', userController.create);
publicRouter.get('/login', userController.login);

publicRouter.get('/home', productController.getAllByRecommendation);

module.exports = router;
