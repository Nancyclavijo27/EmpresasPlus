import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanel from '../components/Admin/AdminPanel';
import styles from './AdminPanelPage.module.css'; // Importa los estilos CSS

const AdminPanelPage = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <Link to="/" className={styles.button}>Ir al formulario de inicio de sesión</Link>
      <AdminPanel />
     
    </div>
  );
};

export default AdminPanelPage;
