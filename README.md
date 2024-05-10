# Proyecto Empresas Plus

## Estructura del Proyecto

El proyecto se divide en tres partes principales: backend, frontend y base de datos.

### Backend

La parte del servidor que maneja las solicitudes HTTP y se comunica con la base de datos.

### Frontend

La interfaz de usuario de la aplicación web, construida con React.js.

### Base de Datos

Utilizamos PostgreSQL como nuestro sistema de gestión de bases de datos relacional.

## Tecnologías Utilizadas

### Backend

- Node.js
- Express.js
- Sequelize (opcional)
- JSON Web Tokens (JWT)
- Bcrypt

### Frontend

- React.js
- CSS
- Axios
- React Router Dom

## Funcionalidades Principales

- **Gestión de Empresas:** Permite al usuario crear, ver, actualizar y eliminar empresas.
- **Gestión de Productos:** Permite al usuario crear, ver, actualizar y eliminar productos asociados a cada empresa.
- **Interfaz Intuitiva:** La aplicación tiene una interfaz fácil de usar y entender.

## Estructura del Proyecto (Backend)

El backend se organiza de la siguiente manera:

- **Rutas (Routes):** Define los endpoints HTTP y los controladores asociados para gestionar las operaciones CRUD.
- **Controladores (Controllers):** Contienen la lógica de negocio para manejar las solicitudes HTTP.
- **Modelos (Models):** Define los modelos de datos para interactuar con la base de datos (si es necesario).
- **Middlewares:** Funciones intermedias para la validación de datos, autenticación, etc.
- **Configuración:** Archivos de configuración para la conexión a la base de datos, autenticación, etc.

## Estructura del Proyecto (Frontend)

El frontend se organiza de la siguiente manera:

### Componentes:

- **EmpresaForm:** Componente para crear y editar empresas.
- **EmpresaList:** Componente para mostrar la lista de empresas y permitir su eliminación.
- **ProductoForm:** Componente para crear y editar productos.
- **ProductoList:** Componente para mostrar la lista de productos de una empresa y permitir su eliminación.
- **AdminPanel:** Componente principal que organiza la gestión de empresas y productos.

## Ubicación en el Proyecto

- **Backend:** Coloca la parte del backend en una carpeta llamada "backend" dentro del directorio raíz de tu proyecto.
- **Frontend:** La parte del frontend se coloca en una carpeta llamada "frontend" dentro del directorio raíz del proyecto.
- **Base de Datos:** No necesitas colocar nada en tu proyecto para la base de datos, ya que suele estar alojada en un servidor independiente.
