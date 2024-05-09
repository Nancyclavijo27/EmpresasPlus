import React, { useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './FormularioCrearEmpresa.module.css';

const FormularioCrearEmpresa = () => {
  const [empresa, setEmpresa] = useState({
    nit: '',
    nombre: '',
    direccion: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/empresas/empresas', empresa);
      // Lógica adicional después de crear la empresa, como actualizar la lista de empresas
      // Puedes llamar a una función para actualizar el listado de empresas aquí
    } catch (error) {
      console.error('Error al crear empresa:', error);
      // Manejo de errores, como mostrar un mensaje al usuario
    }
  };

  return (
    <div className={styles["formulario-empresa"]}>
      <h2>Crear Nueva Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>NIT:</label>
          <input
            type="text"
            name="nit"
            value={empresa.nit}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={empresa.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={empresa.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={empresa.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Empresa</button>
      </form>
    </div>
  );
};

export default FormularioCrearEmpresa;
