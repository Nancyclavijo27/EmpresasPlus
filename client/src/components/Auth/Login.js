import React, { useState } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; 

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate(); // Importa useNavigate

  const handleLogin = async () => {
    try {
      if (!correo || !contraseña) {
        setMensaje('Por favor, complete todos los campos.');
        return;
      }

      const response = await axios.post('/auth/login', { correo, contraseña });
      console.log(response.data);
      setMensaje(response.data.mensaje);
      navigate('/home'); // Redirecciona a '/home' si el inicio de sesión es exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      setMensaje(error.response.data.mensaje);
    } finally {
      // Limpiar el formulario
      setCorreo('');
      setContraseña('');
    }
  };

  return (
    <div className={styles['login-container']}>
      <h2>Login</h2>
      <label>Correo electrónico:</label>
      <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <label>Contraseña:</label>
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Login;