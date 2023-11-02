// Manejador de evento para el formulario de inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
    
    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;
  
    // Datos de inicio de sesión
    const loginData = {
      username: loginUsername,
      password: loginPassword,
    };
    
    // Realizamos la solicitud POST al servidor utilizando Axios para el inicio de sesión
    axios.post('http://localhost:3000/login', loginData)
      .then(response => {
        // Manejamos la respuesta del servidor
        if (response.data) {
          // Inicio de sesión exitoso
          console.log('Inicio de sesión exitoso');
        } else {
          // Inicio de sesión fallido
          console.error('Inicio de sesión fallido');
        }
      })
      .catch(error => {
        // Manejamos los errores
        console.error('Error:', error);
      });
  });
  
  // Manejador de evento para el formulario de registro
  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const signupUsername = document.getElementById('username').value;
    const signupPassword = document.getElementById('password').value;
    const profileImage = document.getElementById('profile_image').value;
  
    // Datos para la solicitud de registro
    const signupData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: signupUsername,
      password: signupPassword,
      profile_image: profileImage
    };
    
    // Realiza la solicitud POST al servidor utilizando Axios para el registro
    axios.post('http://localhost:5000/signup', signupData)
    console.log(signupData)
      .then(response => {
        // Manejamos la respuesta del servidor
        if (response.data) {
          // Registro exitoso
          console.log('Registro exitoso');
        } else {
          // Registro fallido
          console.error('Registro fallido');
        }
      })
      .catch(error => {
        // Manejamos los errores
        console.error('Error:', error);
      });
  });
  

  // Agregamos un evento click al enlace "Posts"
  const postsLink = document.getElementById('posts-link');
  postsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos la navegación predeterminada
    
    // Realizamos la solicitud Axios cuando se hace clic en "Posts"
    axios.get('http://localhost:5000/posts')
      .then(response => {
        // Manejamos la respuesta aquí, por ejemplo, puedes mostrar los datos en la página o redirigir a una nueva página.
        console.log('Respuesta de Axios:', response.data);
      })
      .catch(error => {
        console.error('Error en la solicitud Axios:', error);
      });
  });

  