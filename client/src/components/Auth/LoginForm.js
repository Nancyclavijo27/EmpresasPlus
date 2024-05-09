import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', { correo, contraseña });
      console.log(response.data);
      setMensaje(response.data.mensaje);
      navigate('/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      setMensaje(error.response.data.mensaje);
    } finally {
      // Limpiar el formulario
      setCorreo('');
      setContraseña('');
    }
  };

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post('/auth/admin/login', { clave: 'clave_admin' });
      console.log(response.data);
      setMensaje(response.data.mensaje);
      navigate('/admin');
    } catch (error) {
      console.error('Error al iniciar sesión como administrador:', error.response.data);
      setMensaje(error.response.data.mensaje);
    } finally {
      // Limpiar el formulario
      setContraseña('');
    }
  };

  const handleRegistro = async () => {
    try {
      const response = await axios.post('/auth/registro', { correo, contraseña, tipo: 'Externo' });
      console.log(response.data);
      setMensaje(response.data.mensaje);
    } catch (error) {
      console.error('Error al registrar usuario:', error.response.data);
      setMensaje(error.response.data.mensaje);
    } finally {
      // Limpiar el formulario
      setCorreo('');
      setContraseña('');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <h3>Iniciar sesión</h3>
        <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
      
      <div>
        <h3>Iniciar sesión como administrador</h3>
        <input type="password" placeholder="Clave de administrador" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        <button onClick={handleAdminLogin}>Iniciar sesión como administrador</button>
      </div>
      
      <div>
        <h3>Registro</h3>
        <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        <button onClick={handleRegistro}>Registrar</button>
      </div>
      
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default LoginForm;
