import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios

const DetallesEmpresa = ({ nit }) => {
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const response = await axios.get(`/empresas/empresas/${nit}`);
        setEmpresa(response.data);
      } catch (error) {
        console.error('Error al obtener detalles de empresa:', error);
      }
    };

    if (nit) {
      fetchEmpresa();
    }
  }, [nit]);

  if (!empresa) {
    return <div>Cargando detalles de empresa...</div>;
  }

  return (
    <div>
      <h2>Detalles de Empresa</h2>
      <p><strong>NIT:</strong> {empresa.nit}</p>
      <p><strong>Nombre:</strong> {empresa.nombre}</p>
      <p><strong>Dirección:</strong> {empresa.direccion}</p>
      <p><strong>Teléfono:</strong> {empresa.telefono}</p>
      {/* Agregar más detalles de la empresa si es necesario */}
    </div>
  );
};

export default DetallesEmpresa;
