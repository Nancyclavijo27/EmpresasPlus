import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios

const PerfilUsuario = ({ userId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`URL_API_USUARIO/${userId}`);
        setUsuario(response.data);
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      }
    };

    fetchUsuario();
  }, [userId]);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {usuario && (
        <form>
          <label>Nombre:</label>
          <input type="text" value={usuario.nombre} readOnly />
          <label>Correo electrónico:</label>
          <input type="email" value={usuario.correo} readOnly />
          <label>Contraseña:</label>
          <input type="password" value="*********" readOnly />
          {/* Permitir edición de otros campos si es necesario */}
        </form>
      )}
    </div>
  );
};

export default PerfilUsuario;
