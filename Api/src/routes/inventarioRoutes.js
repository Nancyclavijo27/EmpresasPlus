const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

router.post('/', inventarioController.registrarProductoEnInventario);
router.get('/:empresaNit', inventarioController.obtenerProductosPorEmpresa);
router.put('/:empresaNit/:codigoProducto', inventarioController.actualizarCantidadEnInventario);

module.exports = router;
