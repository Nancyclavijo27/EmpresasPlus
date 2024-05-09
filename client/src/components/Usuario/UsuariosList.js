import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Importa el archivo de configuración de Axios
import styles from './usuariosList.module.css';


const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuarios/usuarios');
        console.log('Datos de usuarios:', response.data); 
        console.log('Longitud de usuarios:', response.data.length); 
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Usuarios</h2>
      <ul className={styles.userList}>
        {usuarios.map((usuario, index) => (
          <li key={index} className={styles.userItem}>{usuario}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosList;