'use strict';

const { Router } = require('express');
const router = new Router();
const user = require('./controllers/user');
const product = require('./controllers/product');
const category = require('./controllers/category');
const authMiddleware = require('./middlewares/auth');
const review = require('./controllers/reviews')

const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


/*** PUBLIC ROUTES ***/
router.post('/register', user.create);
router.post('/login', user.login);
router.post('/review', review.create);

router.get('/products', product.getAll);
router.get('/categories', category.getCategories)
router.get('/reviews', review.getAllReviews);


/*** PRIVATE ROUTES ***/
router.get('/user/:id', authMiddleware, user.getOne);
router.put('/user/:id', authMiddleware, user.update);

router.post('/product', upload.single("images"), authMiddleware, product.create);
router.put('/product/:id', authMiddleware, product.update);
router.delete('/product/:id', authMiddleware, product.delete);


module.exports = router;
