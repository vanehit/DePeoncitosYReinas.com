document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Enviamos la solicitud POST al servidor
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      // Manejamos la respuesta del servidor, por ejemplo, redireccionar al usuario a otra página o mostrar un mensaje de error.
      if (data.token) {
        // si el inicio de sesión fue exitoso, puedes redireccionar al usuario o realizar otras acciones.
        console.log('Inicio de sesión exitoso');
      } else {
        // si el inicio de sesión falló, muestra un mensaje de error al usuario.
        console.error('Inicio de sesión fallido');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  