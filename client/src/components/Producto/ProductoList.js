import React, { useEffect, useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './ListaProductos.module.css'; // Importa los estilos CSS

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
    <div className={styles.container}>
      <h2>Listado de Productos</h2>
      <ul className={styles.productos}>
        {productos.map(producto => (
          <li key={producto.id}>
            <span><strong>Código:</strong> {producto.codigo}</span> <br />
            <span><strong>Nombre:</strong> {producto.nombre}</span> <br />
            <span><strong>Características:</strong> {producto.caracteristicas}</span> <br />
            <span><strong>Precio:</strong> {producto.precio}</span> <br />
            <span><strong>Moneda:</strong> {producto.moneda}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;