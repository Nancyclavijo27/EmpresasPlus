const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Empresa = require('../models/empresaModel'); // Importa el modelo de Empresas
const Producto = require('../models/productosModel'); // Importa el modelo de Productos

class Inventario extends Model {}

Inventario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Inventario',
  timestamps: false,
});

// Define las relaciones con Producto y Empresa
Inventario.belongsTo(Producto, { foreignKey: 'productoCodigo' });
Inventario.belongsTo(Empresa, { foreignKey: 'empresaNit' });

module.exports = Inventario;
