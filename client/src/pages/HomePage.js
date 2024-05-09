import React from 'react';
import { Link } from 'react-router-dom';
import Empresas from '../components/Empresa/Empresas';
import ProductosList from '../components/Producto/ProductoList';
import styles from './HomePage.module.css'; // Importa los estilos CSS


const HomePage = () => {
 
return (
  <div className={styles.container}>
    <h1 className={styles.title}>Bienvenido a EmpresaPlus</h1>
    <p className={styles.subtitle}>La plataforma para gestionar empresas y productos de manera eficiente.</p>
    <p className={styles.welcome}>¡Comienza a visualizar tus empresas y productos ahora!</p>
    <Link to="/" className={styles.button}>Ir al formulario de inicio de sesión</Link>
    <Empresas />
    <ProductosList empresaId />
   
  </div>
);
};

export default HomePage;
