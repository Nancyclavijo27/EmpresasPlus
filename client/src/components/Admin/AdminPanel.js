import React from 'react';
import EmpresaForm from '../Empresa/EmpresaForm';
import Empresas from '../Empresa/Empresas';
import ProductoList from '../Producto/ProductoList';
import ProductoForm from '../Producto/ProductoForm';
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
        <div className={styles["lista-empresas"]}>
          <h3>Listado de Empresas</h3>
          <Empresas />
        </div>
      </div>
      <div className={styles["gestion-productos"]}>
        <h2>Gestión de Productos</h2>
        <div className={styles["crear-producto-form"]}>
          <h3>Crear Producto</h3>
          <ProductoForm />
        </div>
        <div className={styles["lista-productos"]}>
          <h3>Listado de Productos</h3>
          <ProductoList />
        </div>
        
      </div>
    </div>
  );
};

export default AdminPanel;