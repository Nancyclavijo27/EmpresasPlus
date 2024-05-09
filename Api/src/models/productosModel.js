const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la instancia de Sequelize configurada



class Producto extends Model {}

Producto.init({
  codigo: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caracteristicas: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  moneda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Producto',
  timestamps: false, // Opcional: Deshabilita la generación automática de timestamps
});



module.exports = Producto;
