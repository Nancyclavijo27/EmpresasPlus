const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./src/config/db'); // Importa la conexión a la base de datos desde db.js
const authRoutes = require('./src/routes/authRoutes');
const empresaRoutes = require('./src/routes/empresaRoutes');
const productosRoutes = require('./src/routes/productosRoutes');
const categoríaRoutes = require('./src/routes/categoríaRoutes'); // Importa las rutas de categoría
const clienteRoutes = require('./src/routes/clienteRoutes'); // Importa las rutas de cliente
const ordenRoutes = require('./src/routes/ordenRoutes'); // Importa las rutas de orden


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Middleware para manejar las rutas de autenticación
app.use('/auth', authRoutes);

// Middleware para manejar las rutas de empresas
app.use('/empresas', empresaRoutes);

// Middleware para manejar las rutas de productos
app.use('/productos', productosRoutes);

// Middleware para manejar las rutas de categorías
app.use('/categorias', categoríaRoutes);

// Middleware para manejar las rutas de clientes
app.use('/clientes', clienteRoutes);

// Middleware para manejar las rutas de órdenes
app.use('/ordenes', ordenRoutes);



// Aquí debes importar la instancia de Sequelize y asignarla a una variable
const sequelize = require('./src/config/db'); // Asegúrate de que esta ruta sea correcta

// Sincronizar modelos con la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Error al sincronizar modelos con la base de datos:', error);
});
