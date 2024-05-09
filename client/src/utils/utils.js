import { jwtDecode } from 'jwt-decode'; // Importa jwtDecode directamente

export const obtenerTipoUsuario = (token) => {
  // Decodificar el token para obtener la información del usuario
  const decodedToken = jwtDecode(token);

  // Extraer el tipo de usuario del token decodificado
  const tipoUsuario = decodedToken.tipo;

  // Devolver el tipo de usuario
  return tipoUsuario;
};
