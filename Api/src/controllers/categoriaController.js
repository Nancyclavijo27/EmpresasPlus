// CategoríaController.js
const Categoría = require('../models/categoriaModel');

// Controlador para obtener todas las categorías
exports.obtenerCategorías = async (req, res) => {
  try {
    const categorías = await Categoría.findAll();
    res.json(categorías);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ mensaje: 'Error al obtener categorías' });
  }
};

// Controlador para crear una nueva categoría
exports.crearCategoría = async (req, res) => {
  const { nombre } = req.body;

  try {
    const nuevaCategoría = await Categoría.create({ nombre });
    res.status(201).json(nuevaCategoría);
  } catch (error) {
    console.error('Error al crear categoría:', error);
    res.status(500).json({ mensaje: 'Error al crear categoría' });
  }
};

// Otros controladores para actualizar y eliminar categorías
