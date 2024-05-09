import React from 'react';
import Empresas from '../components/Empresa/Empresas';
import ProductosList from '../components/Producto/ProductoList';
import PerfilUsuario from '../components/Usuario/PerfilUsuario';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a EmpresaPlus</h1>
      <p>La plataforma para gestionar empresas y productos de manera eficiente.</p>
      <Empresas />
      <ProductosList empresaId />
      <PerfilUsuario userId />
      {/* Agrega aquí otros componentes o elementos para la página de inicio */}
    </div>
  );
};

export default HomePage;
