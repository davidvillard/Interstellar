import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/auth', // Cambiado para incluir el prefijo
});

// Exporta el objeto api para que pueda ser utilizado en otros archivos
export default api;

// Función para registrar un nuevo usuario
export const registerUser = async (name, surname, gender, country, birthdate, email, password, phone, avatar) => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('gender', gender);
    formData.append('country', country);
    formData.append('birthdate', birthdate);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('avatar', avatar); // Este es el archivo (imagen) que estás subiendo

    const response = await api.post('/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Necesario para enviar archivos
      },
    });
    return response.data; // Retorna la respuesta del servidor
  } catch (error) {
    throw error.response.data; // Lanza un error si ocurre
  }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      return response.data; // Devuelve la respuesta del servidor
    } catch (error) {
      // Manejo mejorado de errores
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || 'Error al iniciar sesión');
      } else {
        throw new Error('Error en la conexión al servidor'); // Error general si no hay respuesta
      }
    }
  };
