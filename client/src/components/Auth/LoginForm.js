// LoginForm.js

import React from 'react';
import Login from './Login';
import AdminLogin from './AdminLogin';
import Registro from './Registro';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div>
      <div className={styles['login-form-title']}>
        <h1>Bienvenido a EmpresaPlus</h1>
        <p>La plataforma para gestionar empresas y productos de manera eficiente.</p>
      </div>
      <div className={styles['login-form-container']}>
        <div className={styles['login-form-column']}>
          <div>
            <h2>Login</h2>
            <Login />
          </div>
        </div>
        <div className={styles['login-form-column']}>
          <div>
            <h2>Login como Administrador</h2>
            <AdminLogin />
          </div>
        </div>
        <div className={styles['login-form-column']}>
          <div>
            <h2>Registro</h2>
            <Registro />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
