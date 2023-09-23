const express = require('express');
const path = require('path');

const app = express();

//middlewares
app.use(express.json());

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, ''));


// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


// Rutas
app.get('/', (req, res) => {
  const featuredPosts = [
    { title: 'Título 1', content: 'Contenido 1' },
    { title: 'Título 2', content: 'Contenido 2' },
    
  ];
  res.render('./src/views/pages/home.ejs', { featuredPosts });
});

// Iniciamos el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
