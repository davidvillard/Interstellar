import { registerUser } from './api'; // Importa la función de api.js
import api from './api'; // Asegúrate de importar el objeto api

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Recopilar valores de cada campo
    const name = document.getElementById('UserName').value.trim();
    const surname = document.getElementById('UserSurname').value.trim();
    const gender = document.getElementById('UserGender').value;
    const country = document.getElementById('UserCountry').value;
    const birthdate = document.getElementById('UserBirthdate').value;
    const email = document.getElementById('UserEmail').value.trim();
    const password = document.getElementById('UserPassword').value;
    const phone = document.getElementById('UserPhone').value.trim();
    
    // Validación básica
    if (!name || !surname || !gender || !country || !birthdate || !email || !password || !phone) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('gender', gender);
    formData.append('country', country);
    formData.append('birthdate', birthdate);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);

    // Adjuntar archivo de avatar si se selecciona
    const avatarFile = document.getElementById('UserAvatar').files[0];
    if (avatarFile) {
      formData.append('avatar', avatarFile);
    }

    // Agrega este console.log para ver el endpoint
    console.log("Enviando solicitud de registro a:", api.defaults.baseURL + '/register');

    try {
      const response = await registerUser(name, surname, gender, country, birthdate, email, password, phone, avatarFile);
      alert(response.message); // Muestra el mensaje del servidor
      console.log('Registro exitoso:', response);
      
      // Aquí puedes redirigir al usuario a otra página o realizar otra acción
      window.location.href = '/'; // Redirigir a la página principal (ajusta según tu necesidad)
    } catch (error) {
      console.error('Error al registrar:', error);
      const message = error.response?.data?.message || error.message || 'Hubo un error al registrar.';
      alert(message); // Muestra el mensaje de error
    }
  });
});
