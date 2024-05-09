import React, { useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios

const CrearProducto = ({ onProductoCreado }) => {
  const [producto, setProducto] = useState({
    codigo: '',
    nombre: '',
    caracteristicas: '',
    precio: '',
    moneda: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/productos/productos', producto);
      onProductoCreado(response.data);
      // Limpiar el formulario después de enviar
      setProducto({
        codigo: '',
        nombre: '',
        caracteristicas: '',
        precio: '',
        moneda: '',
      });
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="codigo" value={producto.codigo} onChange={handleChange} placeholder="Código" />
        <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} placeholder="Nombre" />
        <textarea name="caracteristicas" value={producto.caracteristicas} onChange={handleChange} placeholder="Características"></textarea>
        <input type="text" name="precio" value={producto.precio} onChange={handleChange} placeholder="Precio" />
        <input type="text" name="moneda" value={producto.moneda} onChange={handleChange} placeholder="Moneda" />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CrearProducto;
