const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');


// Ruta para obtener las empresas (accesible para todos)
router.get('/empresas', empresaController.obtenerEmpresas);


router.post('/empresas',  empresaController.crearEmpresa);


router.get('/empresas/:nit', empresaController.obtenerDetallesEmpresa);

module.exports = router;
