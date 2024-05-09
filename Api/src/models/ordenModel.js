const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la instancia de Sequelize configurada

class Orden extends Model {}

Orden.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Orden',
  timestamps: false, // Opcional: Deshabilita la generación automática de timestamps
});



module.exports = Orden;
