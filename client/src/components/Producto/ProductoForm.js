import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './CrearProductoFormulario.module.css';

const CrearProductoFormulario = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [precio, setPrecio] = useState('');
  const [moneda, setMoneda] = useState('');
  const [productos, setProductos] = useState([]);
  const [nuevaCantidad, setNuevaCantidad] = useState('');

  // Función para obtener los productos y gestionar el inventario
  const obtenerProductosYInventario = async () => {
    try {
      // Obtener los productos
      const response = await axios.get('/productos/productos');
      setProductos(response.data);

      // Aquí puedes agregar lógica para obtener el inventario
      // utilizando la ruta '/inventarios/:empresaNit'
      // y guardar los datos en un estado adecuado
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  // Llama a la función para obtener los productos al cargar el componente
  useEffect(() => {
    obtenerProductosYInventario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/productos/productos', {
        codigo,
        nombre,
        caracteristicas,
        precio,
        moneda
      });
      console.log('Producto creado:', response.data);
      // Vuelve a cargar los productos después de crear uno nuevo
      obtenerProductosYInventario();
      // Puedes hacer algo aquí como redireccionar a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al crear el producto:', error);
      // Puedes manejar el error mostrando un mensaje al usuario
    }
  }

  

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <h2>Crear Nuevo Producto</h2>
        <form className={styles["formulario-producto"]}  onSubmit={handleSubmit}>
      <label>
        Código:
        <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
      </label>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Características:
        <textarea value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
      </label>
      <label>
        Precio:
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </label>
      <label>
        Moneda:
        <input type="text" value={moneda} onChange={(e) => setMoneda(e.target.value)} />
      </label>
      <button type="submit">Crear Producto</button>
    </form>
      </div>
     
      <div className={styles.productos}>
        <h2>Lista de Productos</h2>
        {/* Aquí puedes mostrar la lista de productos */}
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Características</th>
              <th>Precio</th>
              <th>Moneda</th>
              <th>Cantidad en Inventario</th>
              <th>Actualizar Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.codigo}>
                <td>{producto.codigo}</td>
                <td>{producto.nombre}</td>
                <td>{producto.caracteristicas}</td>
                <td>{producto.precio}</td>
                <td>{producto.moneda}</td>
                <td>{producto.cantidad}</td>
                <td>
                  <input
                    type="number"
                    value={nuevaCantidad}
                    onChange={(e) => setNuevaCantidad(e.target.value)}
                  />
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrearProductoFormulario;
