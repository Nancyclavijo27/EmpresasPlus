import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get('/empresas/empresas');
        setEmpresas(response.data);
      } catch (error) {
        console.error('Error al obtener empresas:', error);
      }
    };

    fetchEmpresas();
  }, []);

  return (
    <div>
      <h2>Listado de Empresas</h2>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.nit}>
            <h3>{empresa.nombre}</h3>
            <p><strong>NIT:</strong> {empresa.nit}</p>
            <p><strong>Dirección:</strong> {empresa.direccion}</p>
            <p><strong>Teléfono:</strong> {empresa.telefono}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Empresas;
