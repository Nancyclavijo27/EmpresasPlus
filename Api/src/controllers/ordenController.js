// OrdenController.js
const Orden = require('../models/ordenModel');

// Controlador para obtener todas las órdenes
exports.obtenerÓrdenes = async (req, res) => {
  try {
    const órdenes = await Orden.findAll();
    res.json(órdenes);
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    res.status(500).json({ mensaje: 'Error al obtener órdenes' });
  }
};

// Controlador para crear una nueva orden
exports.crearOrden = async (req, res) => {
  const { clienteId, productos } = req.body;

  try {
    const nuevaOrden = await Orden.create({ clienteId, productos });
    res.status(201).json(nuevaOrden);
  } catch (error) {
    console.error('Error al crear orden:', error);
    res.status(500).json({ mensaje: 'Error al crear orden' });
  }
};

// Otros controladores para actualizar y eliminar órdenes
