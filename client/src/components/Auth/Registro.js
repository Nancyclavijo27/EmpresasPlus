import React, { useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './Registro.module.css'; // Importa el archivo de estilos CSS como un módulo

const Registro = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegistro = async () => {
    try {
      const response = await axios.post('/auth/registro', { correo, contraseña, tipo: 'Externo' });
      console.log(response.data);
      setMensaje(response.data.mensaje);
      // Limpiar el formulario después de un registro exitoso
      setCorreo('');
      setContraseña('');
    } catch (error) {
      console.error('Error al registrar usuario:', error.response.data);
      setMensaje(error.response.data.mensaje);
    }
  };

  return (
    <div className={styles['registro-container']}>
      <h2>Registro</h2>
      <label>Correo electrónico:</label>
      <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <label>Contraseña:</label>
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={handleRegistro}>Registrar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Registro;
