const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');
const { isAdmin } = require('../middleware/authMiddleware');

// Ruta para obtener las empresas (accesible para todos)
router.get('/empresas', empresaController.obtenerEmpresas);

// Ruta para registrar una nueva empresa (requiere permisos de administrador)
router.post('/empresas', isAdmin, empresaController.crearEmpresa);
// Otras rutas para editar, eliminar empresas, etc. (también requieren permisos de administrador)

module.exports = router;
