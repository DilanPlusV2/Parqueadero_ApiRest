const { where } = require('sequelize');
const { response } = require('../app');
const models = require('../models');
const reserva = require('../models/reserva');

function save(req, res){
    const post = {
        fecha: req.body.fecha,
        hora: req.body.hora,
        descripcion: req.body.descripcion,
        IdPuesto: req.body.IdPuesto,
        IdUsuario: req.body.IdUsuario
    }
    models.puestos.findByPk(req.body.IdPuesto).then(result =>{
        //Verifica si el estado del puesto está ocupado o disponible
        if(result !== null && result.estado !== "Ocupado"){
            var status2 = "Ocupado"
            const status = {
                    estado: status2,
                    IdZonaParqueo: 1
                    }   
                    //Verifica si hay una reserva pendiente por parte del usuario o no
            models.Reserva.findOne({where:{IdUsuario:req.body.IdUsuario}}).then(result =>{  
                if(result !== null){
                    res.status(403).json({
                        message:"Usted tiene una reserva pendiente, cumpla o cancelela e intentelo nuevamente",
                        result:result
                    });
                }else{
                    //Marca el estado del puesto como ocupado 
                    models.puestos.update(status, {where:{id:req.body.IdPuesto}}).then(result =>{
                        //Crea la reserva 
                        models.Reserva.create(post).then(result =>{
                            res.status(201).json({
                                message:"Reserva exitosa",
                                result:result
                            });
                        }).catch(error =>{
                            res.status(500).json({
                                message: "error",
                                error: error
                            });
                        });
                    }).catch(error =>{
                        res.status(500).json({
                            message: "error",
                            error: error
                        });
                    });
                }              
            });
        }else{
            res.status(409).json({
                message:"Puesto de parqueo no disponible"
            });
        }
    });
}

function show(req, res){
models.Reserva.findAll({where:{IdUsuario:req.params.IdUsuario}}).then(result =>{
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
    models.Reserva.findAll().then(result=>{
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
    const updatedReserva = {
        fecha: req.body.fecha,
        hora: req.body.hora,
        descripcion: req.body.descripcion,
        IdPuesto: req.body.IdPuesto,
        IdUsuario: req.body.IdUsuario
    }
    const userId = req.body.IdUsuario;
    models.Reserva.update(updatedReserva, {where:{id:id, IdUsuario: userId}}).then(result=>{
        res.status(200).json({
            message:"Actualizado",
            post: updatedReserva
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
    var status3 = "Disponible"
            const status1 = {
                    estado: status3,
                    IdZonaParqueo: 1
                    }   
                    //Marca el puesto como disponible
    models.puestos.update(status1, {where:{id:req.body.IdPuesto}}).then(result =>{
        //Cancela la reserva
    models.Reserva.destroy({where:{id:id, IdUsuario:IdUsuario}}).then(result =>{
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
});
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy:destroy
}