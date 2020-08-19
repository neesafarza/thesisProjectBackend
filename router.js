'use strict';

const { Router } = require('express');
const router = new Router();
const user = require('./controllers/user');
const product = require('./controllers/product');
const authMiddleware = require('./middlewares/auth');


/*** PUBLIC ROUTES ***/
router.post('/register', user.create);
router.post('/login', user.login);

router.get('/products', product.getAll);


/*** PRIVATE ROUTES ***/
router.get('/user/:id', authMiddleware, user.getOne);
router.put('/user/:id', authMiddleware, user.update);

router.post('/product', authMiddleware, product.create);
router.put('/product/:id', authMiddleware, product.update);
router.delete('/product/:id', authMiddleware, product.delete);


module.exports = router;
