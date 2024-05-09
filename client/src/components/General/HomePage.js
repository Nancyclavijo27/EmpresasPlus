import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces dentro de tu aplicación

const HomePage = () => {
  return (
    <div>
      <h2>Bienvenido a la Página de Inicio General</h2>
      <p>
        Aquí puedes mostrar información general sobre tu aplicación y lo que los usuarios pueden hacer.
      </p>
      
      <div>
        {/* Enlace para que los usuarios administradores ingresen a la página de administración */}
        <Link to="/admin">Ir a la Página de Administración</Link>
      </div>
    </div>
  );
};

export default HomePage;
