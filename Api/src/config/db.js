const { Sequelize } = require('sequelize');
require('dotenv').config();


// Configura la conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'postgres', // El dialecto para PostgreSQL
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  define: {
    freezeTableName: true, // Evita la pluralización automática de los nombres de las tablas
  },
  logging: console.log,
});

// Verifica la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

module.exports = sequelize;
