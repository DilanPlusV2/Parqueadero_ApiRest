const models = require('../models');

function index(req, res){
    models.puestos.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message: "error",
            error:error
        });
    });
}

function update(req, res){
    const id = req.params.id;
    const updatedPuesto = {
        estado: req.body.estado,
        IdZonaParqueo: 1
    }
    const IdZona = 1;
    models.puestos.update(updatedPuesto, {where:{id:id, IdZonaParqueo: IdZona}}).then(result=>{
        res.status(200).json({
            message:"Actualizado",
            post: updatedPuesto,
            result:result
        });
    }).catch(error=>{
        res.status(500).json({
            message: "error",
            error: error
        });
    });
}

module.exports = {
    index:index,
    update:update
}