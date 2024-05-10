const Inventario = require('../models/Inventario');

// Registrar un producto en el inventario de una empresa
exports.registrarProductoEnInventario = async (req, res) => {
  const { productoCodigo, empresaNit, cantidad } = req.body;

  try {
    // Verificar si ya existe un registro para este producto en el inventario de la empresa
    let inventario = await Inventario.findOne({ where: { productoCodigo, empresaNit } });

    if (inventario) {
      // Si el producto ya está en el inventario, actualiza la cantidad
      inventario.cantidad += cantidad;
      await inventario.save();
    } else {
      // Si el producto no está en el inventario, crea un nuevo registro
      inventario = await Inventario.create({ productoCodigo, empresaNit, cantidad });
    }

    res.status(201).json(inventario);
  } catch (error) {
    console.error('Error al registrar producto en inventario:', error);
    res.status(500).json({ mensaje: 'Error al registrar producto en inventario' });
  }
};

// Obtener los productos en el inventario de una empresa
exports.obtenerProductosPorEmpresa = async (req, res) => {
  const { empresaNit } = req.params;

  try {
    const productosEnInventario = await Inventario.findAll({ where: { empresaNit } });
    res.json(productosEnInventario);
  } catch (error) {
    console.error('Error al obtener productos en inventario:', error);
    res.status(500).json({ mensaje: 'Error al obtener productos en inventario' });
  }
};

// Actualizar la cantidad de un producto en el inventario de una empresa
exports.actualizarCantidadEnInventario = async (req, res) => {
  const { empresaNit, codigoProducto } = req.params;
  const { cantidad } = req.body;

  try {
    let inventario = await Inventario.findOne({ where: { productoCodigo: codigoProducto, empresaNit } });

    if (!inventario) {
      return res.status(404).json({ mensaje: 'Producto no encontrado en inventario' });
    }

    inventario.cantidad = cantidad;
    await inventario.save();

    res.json(inventario);
  } catch (error) {
    console.error('Error al actualizar cantidad en inventario:', error);
    res.status(500).json({ mensaje: 'Error al actualizar cantidad en inventario' });
  }
};
