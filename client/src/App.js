import React, { useState } from 'react';
import axios from './api/axios'; 
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import './App.css'; // Importa tus estilos CSS

function App() {
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (data) => {
    try {
      // Enviar datos de inicio de sesión al backend
      const response = await axios.post('/auth/login', data); 

      // Manejar la respuesta del backend
      setMensaje(response.data.mensaje);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMensaje('Error al iniciar sesión');
    }
  };

  const handleRegister = async (data) => {
    try {
      // Enviar datos de registro al backend
      const response = await axios.post('/auth/registro', data); 

      // Manejar la respuesta del backend
      setMensaje(response.data.mensaje);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setMensaje('Error al registrar usuario');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">¡Bienvenido a EmpresaPlus!</h1>
        <p className="App-info">La plataforma para gestionar empresas y productos de manera eficiente.</p>
      </header>
      <div className="Form-container">
        <LoginForm onLogin={handleLogin} />
        <RegisterForm onRegister={handleRegister} />
      </div>
      {mensaje && <p className="Message">{mensaje}</p>}
    </div>
  );
}

export default App;
