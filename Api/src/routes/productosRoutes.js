// productosRoutes.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas para los productos
router.get('/productos', productosController.obtenerProductos);
router.post('/productos', productosController.crearProducto);

module.exports = router;
