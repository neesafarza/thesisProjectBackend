'use strict';

const { Router } = require('express');
const router = new Router();
const user = require('./controllers/user');
const product = require('./controllers/product');
const category = require('./controllers/category');
const basketProduct = require('./controllers/basketProduct');
const payment = require('./controllers/payment');
const purchase = require('./controllers/purchase');
const authMiddleware = require('./middlewares/auth');


/*** PUBLIC ROUTES ***/
router.post('/register', user.create);
router.post('/login', user.login);

router.get('/products', product.getAll);
router.get('/categories', category.getCategories);


/*** PRIVATE ROUTES ***/
router.get('/user/:id', authMiddleware, user.getOne);
router.put('/user/:id', authMiddleware, user.update);

router.post('/product', authMiddleware, product.create);
router.put('/product/:id', authMiddleware, product.update);
router.delete('/product/:id', authMiddleware, product.delete);

router.get('/basket_products', authMiddleware, basketProduct.getAll);
router.post('/basket_products/:id', authMiddleware, basketProduct.create);
router.delete('/basket_products/:id', authMiddleware, basketProduct.delete);

router.post('/purchases', authMiddleware, purchase.create);
router.get('/purchases', authMiddleware, purchase.getAll);

router.post('/api/payment_intents', payment.intent);  // TODO: add authMiddleware


module.exports = router;
