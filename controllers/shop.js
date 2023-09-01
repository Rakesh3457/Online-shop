const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      });
  });
};

exports.getProduct =(req,res,next) => {
  const prodId = req.params.productId;
  Product.findbyId(prodId, product => {
   res.render('shop/product-details',{
    product: product,
    pageTitle: product.title,
    path:'/products'
   });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path:'/cart'
  })
};

exports.postcart = (req,res,next) => {
  const prodId = req.body.productId;
  Product.findbyId(prodId,product =>{
    Cart.addProduct(prodId,product.price);
    console.log(prodId,product.price);
  });
  res.redirect('/cart');
};

exports.getOrder = (req, res, next) => {
  res.render('shop/order', {
    pageTitle: 'Order',
    path:'/order'
  })
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path:'/checkout'
  })
};