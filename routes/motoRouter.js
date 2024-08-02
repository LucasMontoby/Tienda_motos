const express = require('express');
const multer = require('multer');
const motoController = require('../controllers/motoController');

const router = express.Router();

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

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/motos', motoController.list);
router.get('/motos/create', motoController.create);
router.post('/motos/create', upload.single('imagen'), motoController.store);
router.get('/motos/:id/edit', motoController.edit);
router.post('/motos/:id', upload.single('imagen'), motoController.update);
router.delete('/motos/:id', motoController.destroy);

module.exports = router;