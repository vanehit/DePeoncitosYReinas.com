const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de inicio
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/posts'); 
    const posts = response.data;
    res.render('pages/home', { posts });
  } catch (error) {
    console.error('Error al cargar las publicaciones:', error.message);
    res.render('pages/home', { posts: [] });
  }
});

// Ruta de publicaciones
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/posts');
    res.render('pages/posts', { posts: response.data });
  } catch (error) {
    console.error('Error al obtener posts:', error.message);
    res.render('pages/posts', { posts: [] });
  }
});

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor en funcionamiento en http://localhost:${port}`));
