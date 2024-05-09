import React from 'react';
import EmpresaForm from '../Empresa/EmpresaForm';
//import DetallesEmpresa from '../Empresa/DetallesEmpresa';
import Empresas from '../Empresa/Empresas';

const AdminPanel = () => {
  return (
    <div>
    <h2>Gestión de Empresas</h2>
      <EmpresaForm />
      
      <Empresas />
    </div>
  );
};

export default AdminPanel;
