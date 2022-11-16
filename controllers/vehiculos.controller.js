const { response } = require('../app');
const models = require('../models');
const vehiculos = require('../models/vehiculos');
const Validator = require('fastest-validator');

function save(req, res){
    const post = {
        placa: req.body.placa,
        color: req.body.color,
        marca: req.body.marca,
        modelo: req.body.modelo,
        IdUsuario: req.body.IdUsuario
    }
    models.Usuario.findOne({where:{id:req.body.IdUsuario}}).then(result =>{
        if(result){
            models.vehiculos.create(post).then(result =>{
                res.status(201).json({
                    message:"Vehiculo registrado",
                    reserva: result
                });
            }).catch(error =>{
                res.status(500).json({
                    message:"Error",
                    error: error
                });
            });
        }else{
            res.status(404).json({
                message:"usuario no encontrado"
            });
        }
});
}

function show(req, res){
const id = req.params.id;

models.vehiculos.findByPk(id).then(result =>{
    if(result){
        res.status(200).json(result);
    }else{
        res.status(500).json({
            message: "No encontrado"
        });
    }
}).catch(error =>{
    res.status(500).json({
        message: "error",
        error: error
    });
});
}

function index(req, res){   
    models.vehiculos.findAll({where:{IdUsuario:req.params.IdUsuario}}).then(result=>{
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
    const updatedVehiculo = {
        placa: req.body.placa,
        color: req.body.color,
        marca: req.body.marca,
        modelo: req.body.modelo,
        IdUsuario: req.body.IdUsuario
    }
    const userId = req.body.IdUsuario;
    models.vehiculos.update(updatedVehiculo, {where:{id:id, IdUsuario: userId}}).then(result=>{
        res.status(200).json({
            message:"Actualizado",
            result: updatedVehiculo
        });
    }).catch(error=>{
        res.status(500).json({
            message: "error",
            error: error
        });
    });
}

function destroy(req, res){
    const id = req.params.id;
    const IdUsuario = req.body.IdUsuario;
    models.vehiculos.destroy({where:{id:id, IdUsuario:IdUsuario}}).then(result =>{
        res.status(200).json({
            message:"Eliminado",
            result: result
        });
    }).catch(error=>{
        res.status(500).json({
            message: "error",
            error: error
        });
    });
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy:destroy
}