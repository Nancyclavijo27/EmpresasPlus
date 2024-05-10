import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './Empresas.module.css'; // Importa los estilos CSS

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [empresa, setEmpresa] = useState({
    nit: '',
    nombre: '',
    direccion: '',
    telefono: ''
  });

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const fetchEmpresas = async () => {
    try {
      const response = await axios.get('/empresas/empresas');
      setEmpresas(response.data);
    } catch (error) {
      console.error('Error al obtener empresas:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/empresas/empresas', empresa);
      console.log('Empresa creada correctamente');
      fetchEmpresas();
      setEmpresa({
        nit: '',
        nombre: '',
        direccion: '',
        telefono: ''
      });
    } catch (error) {
      console.error('Error al crear empresa:', error);
    }
  };

  const eliminarEmpresa = async (nit) => {
    try {
      await axios.delete(`/empresas/empresas/${nit}`);
      console.log('Empresa eliminada correctamente');
      // Después de eliminar la empresa, actualiza la lista de empresas
      fetchEmpresas();
    } catch (error) {
      console.error('Error al eliminar empresa:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Listado de Empresas</h2>
      <ul className={styles.empresas}>
        {empresas.map((empresa) => (
          <li key={empresa.nit}>
            <h3>{empresa.nombre}</h3>
            <p><strong>NIT:</strong> {empresa.nit}</p>
            <p><strong>Dirección:</strong> {empresa.direccion}</p>
            <p><strong>Teléfono:</strong> {empresa.telefono}</p>
            <button onClick={() => eliminarEmpresa(empresa.nit)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
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
    </div>
  );
};

export default Empresas;
