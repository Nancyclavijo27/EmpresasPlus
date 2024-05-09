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
    // Crear el nuevo producto
    const nuevoProducto = await Producto.create({ codigo, nombre, caracteristicas, precio, moneda });
    // Obtener la lista actualizada de productos
    const productos = await Producto.find();
    res.status(201).json({ nuevoProducto, productos });
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
};

// Controlador para obtener el detalle de un producto por su ID
exports.obtenerDetalleProducto = async (req, res) => {
  const { id } = req.params; // Obtener el ID del producto de los parámetros de la solicitud

  try {
    const producto = await Producto.findByPk(id); // Buscar el producto por su ID
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' }); // Si no se encuentra el producto, devolver un error 404
    }
    res.json(producto); // Devolver el producto encontrado
  } catch (error) {
    console.error('Error al obtener el detalle del producto:', error);
    res.status(500).json({ mensaje: 'Error al obtener el detalle del producto' });
  }
};