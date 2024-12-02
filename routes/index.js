const express = require('express');
const router = express.Router();

// Importando outras rotas
const userRoutes = require('./users');
const productRoutes = require('./products');
const cartRoutes = require('./carts');
const paymentRoutes = require('./payment');
const orderRoutes = require('./orders');
const wishlistRoutes = require('./wishlist');

// Rota principal
router.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Registrando sub-rotas
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/carts', cartRoutes);
router.use('/payment', paymentRoutes);
router.use('/orders', orderRoutes);
router.use('/wishlist', wishlistRoutes);

module.exports = router;

