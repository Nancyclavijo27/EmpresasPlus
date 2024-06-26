import React from 'react';
import EmpresaForm from '../Empresa/EmpresaForm';
import ProductoForm from '../Producto/ProductoForm';
import UsuariosList from '../Usuario/UsuariosList';
import styles from './AdminPanel.module.css'; // Importa los estilos CSS


const AdminPanel = () => {
  return (
    <div className={styles["admin-panel"]}>
      <div className={styles["gestion-empresas"]}>
    
        <h2>Gestión de Empresas</h2>
        <div className={styles["crear-empresa-form"]}>
          <h3>Crear Nueva Empresa</h3>
          <EmpresaForm />
        </div>
        
        <h2>Gestión de Usuarios</h2>
         <UsuariosList />
      </div>
      <div className={styles["gestion-productos"]}>
        <h2>Gestión de Productos</h2>
        <div className={styles["crear-producto-form"]}>
          <h3>Crear Producto</h3>
          <ProductoForm />
        </div>
        
        
      </div>
    </div>
  );
};

export default AdminPanel;