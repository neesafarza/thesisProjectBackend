'use strict';

const { Router } = require('express');
const router = new Router();
const user = require('./controllers/user');
const product = require('./controllers/product');
const category = require('./controllers/category');
const basketProduct = require('./controllers/basketProduct');
const payment = require('./controllers/payment');
const purchase = require('./controllers/purchase');
const review = require('./controllers/reviews');
const view = require('./controllers/view');
const authMiddleware = require('./middlewares/auth');

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


/*** PUBLIC ROUTES ***/
router.post('/register', user.create);
router.post('/login', user.login);
router.get('/user_public_data/:id', user.getPublicData);

router.get('/products', product.getAll);

router.get('/categories', category.getCategories);

router.post('/api/payment_intents', payment.intent);

router.post('/review', review.create);
router.get('/reviews', review.getAllReviews);


/*** PRIVATE ROUTES ***/
router.get('/user/:id', authMiddleware, user.getOne);
router.put('/user/:id', authMiddleware, user.update);

router.post('/product', upload.single("images"), authMiddleware, product.create);
router.put('/product/:id', authMiddleware, product.update);
router.delete('/product/:id', authMiddleware, product.delete);

router.get('/basket_products', authMiddleware, basketProduct.getAll);
router.post('/basket_products/:id', authMiddleware, basketProduct.create);
router.put('/basket_products/:id', authMiddleware, basketProduct.updateQuantity);
router.delete('/basket_products/:id', authMiddleware, basketProduct.delete);

router.post('/purchase_history', authMiddleware, purchase.create);
router.get('/purchase_history', authMiddleware, purchase.getAllPurchases);
router.get('/sales_history', authMiddleware, purchase.getAllSales);

router.post('/product/view', authMiddleware, view.create);
router.get('/products/view', authMiddleware, view.getViewedProducts);


module.exports = router;
