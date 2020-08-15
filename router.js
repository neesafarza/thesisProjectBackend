'use strict';

const { Router } = require('express');
const router = new Router();
const user = require('../controllers/user');
const product = require('../controllers/product');

/*** PUBLIC ROUTES ***/
router.post('/register', user.create);
router.post('/login', user.login);

router.get('/home', product.getAll);
router.get('/products', product.getAll);


/*** PRIVATE ROUTES ***/
router.get('/user/:id', authMiddleware, user.get);
router.put('/user/:id', authMiddleware, user.update);

router.get('/products', authMiddleware, product.getAllProducts);
router.post('/product', authMiddleware, product.createProduct);
router.get('/product/:id', authMiddleware, product.getProduct);
router.put('/product/:id', authMiddleware, product.updateProduct);


module.exports = router;
