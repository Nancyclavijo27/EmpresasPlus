import React, { useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post('/auth/admin/login', { clave });
      console.log(response.data);
      setMensaje(response.data.mensaje);
      navigate('/admin');
    } catch (error) {
      console.error('Error al iniciar sesión como administrador:', error.response.data);
      setMensaje(error.response.data.mensaje);
    }
  };

  return (
    <div className={styles['admin-login-container']}>
      <h2>Login como Administrador</h2>
      <label>Clave de Administrador:</label>
      <input type="password" placeholder="Clave de Administrador" value={clave} onChange={(e) => setClave(e.target.value)} />
      <button onClick={handleAdminLogin}>Iniciar sesión como administrador</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default AdminLogin;