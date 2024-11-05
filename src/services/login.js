import { loginUser } from './api'; // Importa la función de api.js
import api from './api'; // Asegúrate de importar el objeto api

const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const email = document.getElementById('UserEmail').value.trim();
    const password = document.getElementById('UserPassword').value;

    // Validación básica
    if (!email || !password) {
      alert('Email y contraseña son obligatorios.');
      return;
    }

    // Agrega este console.log
    console.log("Enviando solicitud de login a:", api.defaults.baseURL + '/login');

    try {
      const response = await loginUser(email, password);
      alert(response.message); // Muestra el mensaje del servidor

      // Aquí puedes redirigir al usuario a otra página o realizar otra acción
      window.location.href = '/'; // Redirigir a la página principal (ajusta según tu necesidad)
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Error al iniciar sesión.';
      alert(message); // Muestra el mensaje de error
    }
  });
}
