import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios

const DetalleProducto = ({ id }) => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`/api/productos/productos/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error('Error al obtener el detalle del producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p><strong>Código:</strong> {producto.codigo}</p>
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Características:</strong> {producto.caracteristicas}</p>
      <p><strong>Precio:</strong> {producto.precio} {producto.moneda}</p>
    </div>
  );
};

export default DetalleProducto;
