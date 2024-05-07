// ClienteController.js
const Cliente = require('../models/clienteModel');

// Controlador para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ mensaje: 'Error al obtener clientes' });
  }
};

// Controlador para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  const { nombre, correo, dirección } = req.body;

  try {
    const nuevoCliente = await Cliente.create({ nombre, correo, dirección });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ mensaje: 'Error al crear cliente' });
  }
};

// Otros controladores para actualizar y eliminar clientes
