import React, { useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './CrearProductoFormulario.module.css';

const CrearProductoFormulario = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [precio, setPrecio] = useState('');
  const [moneda, setMoneda] = useState('');

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
      // Puedes hacer algo aquí como redireccionar a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al crear el producto:', error);
      // Puedes manejar el error mostrando un mensaje al usuario
    }
  }

  return (
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
  );
};

export default CrearProductoFormulario;
