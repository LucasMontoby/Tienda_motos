const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const multer = require('multer');
const {sequelize} = require('./models');
const motoRouter = require('./routes/motoRouter');
app.use(methodOverride('_method'));

// Configuración de Multer para el manejo de archivos
const storage = multer.diskStorage({
    // Directorio donde se almacenarán los archivos subidos
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    // Nombre del archivo subido
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use('/', motoRouter);

app.listen(3000, async () => {
    console.log('Servidor iniciado en el puerto 3000');
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada');
    } catch (error) {
        console.log('Error al conectar a la base de datos', error);
    }
});




