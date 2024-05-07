// ordenRoutes.js
const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');

// Rutas para las órdenes
router.get('/', ordenController.obtenerÓrdenes);
router.post('/', ordenController.crearOrden);

// Otros endpoints para actualizar y eliminar órdenes

module.exports = router;
