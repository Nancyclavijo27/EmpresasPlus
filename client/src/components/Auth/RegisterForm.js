import React, { useState } from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ onRegister }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!correo || !contraseña || !tipo) {
      setError('Por favor completa todos los campos.');
      return;
    }

    // Si todos los campos están llenos, envía los datos al backend
    onRegister({ correo, contraseña, tipo });
    // Limpiar los campos del formulario
    setCorreo('');
    setContraseña('');
    setTipo('');
  };

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
