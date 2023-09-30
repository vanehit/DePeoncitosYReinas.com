const express = require('express');
const path = require('path');
const axios = require('axios');


const app = express();

//middlewares
app.use(express.json());


// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));



// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


// Ruta para la página de inicio
app.get('/', async (req, res) => {
  try {
    // Realiza la solicitud Axios para obtener las publicaciones
    const response = await axios.get('http://localhost:5000/posts'); 

    // Maneja los datos de las publicaciones aquí
    const posts = response.data;

    // Renderiza la página de inicio y pasa los datos de las publicaciones
    res.render('/', { posts: posts });
  } catch (error) {
    // Maneja los errores
    console.error('Error al cargar las publicaciones:', error);
    // Puedes renderizar la página de inicio sin datos o mostrar un mensaje de error
    res.render('pages/home', { posts: [] });
  }
});

// Iniciamos el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
