import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importa Navigate para redirigir a otra página
import styles from './RegisterForm.module.css';

const RegisterForm = ({ onRegister }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!correo || !contraseña || !tipo) {
      setError('Por favor completa todos los campos.');
      return;
    }

    try {
      const response = await onRegister({ correo, contraseña, tipo });

      setIsLoggedIn(true);

      if (response && response.data && response.data.tipo === 'Administrador') {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Error al registrar usuario');
    }
  };

  if (isLoggedIn) {
    if (isAdmin) {
      // Redirige a la página de administración si el usuario es administrador
      return <Navigate to="/admin" />;
    } else {
      // Redirige a la página general si el usuario no es administrador
      return <Navigate to="/external" />;
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Seleccionar tipo</option>
          <option value="Administrador">Administrador</option>
          <option value="Externo">Externo</option>
        </select>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
