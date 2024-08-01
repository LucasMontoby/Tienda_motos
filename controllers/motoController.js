const {Moto, Categoria} = require('../models');

const motoController = {
    list: async(req, res) => {
    try{
        const motos = await Moto.findAll({include: Categoria});
        res.render('motos/list', {motos})
    }catch(error){
        res.status(500).send('Error al obtener las motos')
    }
    },
    create: async(req, res) => {
        try{
            const categorias = await Categoria.findAll();
            res.render('motos/create', {categorias})
            }catch(error){
                res.status(500).send('Error al cargar el formulario de creación')
            }
        },
    
    store:  async(req, res) => {
        const {nombre, descripcion, precio, categoria_id} = req.body;
        const imagen = req.file ? req.file.filename : null;
        try{
           await Moto.create({nombre, descripcion, precio, imagen, categoria_id});
           res.redirect('/motos');
        }catch(error){
            res.status(500).send('Error al guardar la moto')
        }    
        }
}
module.exports =  motoController;