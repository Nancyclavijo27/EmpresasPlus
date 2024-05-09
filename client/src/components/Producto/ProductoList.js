import React, { useEffect, useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('/productos/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setError('Error al obtener los productos. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchProductos();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <span>{producto.nombre}</span> - <span>{producto.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
