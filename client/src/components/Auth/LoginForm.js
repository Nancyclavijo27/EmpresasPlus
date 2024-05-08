import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!correo || !contraseña) {
      setError('Por favor ingresa tu correo y contraseña.');
      return;
    }

    // Si todos los campos están llenos, envía los datos al backend
    onLogin({ correo, contraseña });
  };

  return (
   <div className={styles.container}>
     <h2 className={styles.title}>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Iniciar sesión</button>
    </form>
     </div>
  );
};

export default LoginForm;
