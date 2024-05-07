// categoríaRoutes.js
const express = require('express');
const router = express.Router();
const categoríaController = require('../controllers/categoriaController');

// Rutas para las categorías
router.get('/', categoríaController.obtenerCategorías);
router.post('/', categoríaController.crearCategoría);

// Otros endpoints para actualizar y eliminar categorías

module.exports = router;
