// productosController.js
const Producto = require('../models/productosModel');

// Controlador para obtener todos los productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
};

// Controlador para crear un nuevo producto
exports.crearProducto = async (req, res) => {
  const { codigo, nombre, caracteristicas, precio, moneda } = req.body;

  try {
    const nuevoProducto = await Producto.create({ codigo, nombre, caracteristicas, precio, moneda });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
};
