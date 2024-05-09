// productosRoutes.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas para los productos
router.get('/productos', productosController.obtenerProductos);
router.post('/productos', productosController.crearProducto);
router.get('/productos/:id', productosController.obtenerDetalleProducto); // Nueva ruta para obtener el detalle de un producto

module.exports = router;
