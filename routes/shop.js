const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);

router.get('/products',shopController.getProducts);

router.get('/products/:productId',shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart',shopController.postcart);

router.get('/order', shopController.getOrder);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
