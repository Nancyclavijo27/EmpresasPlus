// src/api/axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Reemplaza esto con la URL de tu servidor backend
});

export default instance;
