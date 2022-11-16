const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){

models.Usuario.findOne({where:{correo:req.body.correo}}).then(result=>{
    if(result){
        res.status(409).json({
            message:"Email existente"
        });
    }else{
        bcryptjs.genSalt(12, function(err, salt){
            bcryptjs.hash(req.body.password, salt, function(err, hash){
                const usuario = {
                    nombres: req.body.nombres,
                    apellidos: req.body.apellidos,
                    edad: req.body.edad,
                    telefono: req.body.telefono,
                    correo: req.body.correo,
                    password: hash
                }
                models.Usuario.create(usuario).then(result=>{
                    res.status(201).json({
                        message:"Usuario registrado",
                        result:result
                    });
                }).catch(error =>{
                    res.status(500).json({
                        message:"Error creando usuario",
                        error: error
                    });
                });
            });
        });
    }
}).catch(error=>{
    res.status(500).json({
        message:"Error creando usuario",
        error: error
    });
});
}

function login(req, res){
    models.Usuario.findOne({where:{correo:req.body.correo}}).then(usuario =>{
        if(usuario == null){
            res.status(401).json({
                message:"Datos invalidos"
            });
        }else{
            bcryptjs.compare(req.body.password, usuario.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        correo: usuario.correo,
                        userId: usuario.id
                    },process.env.JWT_KEY, function(err, token){
                        res.status(200).json({
                            message:"Autenticación exitosa",
                            token: token
                        });
                    });
                }else{
                    res.status(401).json({
                        message:"Usuario y/o contraseña incorrecto"
                    });
                }
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:"Error al iniciar sesion",
            error: error
        });
    });
}

function Mostrar(req, res){
    models.Usuario.findOne({where:{correo:req.params.correo}}).then(usuario =>{
        if(usuario){
            res.status(200).json([usuario]);
        }else{
            res.status(404).json({
                message:"Usuario inexistente"
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:"Error encontrando usuario",
            error: error
        });
    });
}
function Mostrar1(req, res){
    models.Usuario.findOne({where:{id:req.params.id}}).then(usuario =>{
        if(usuario){
            res.status(200).json([usuario]);
        }else{
            res.status(404).json({
                message:"Usuario inexistente"
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:"Error encontrando usuario",
            error: error
        });
    });
}
function updateUsuario(req, res){
    bcryptjs.genSalt(12, function(err, salt){
        bcryptjs.hash(req.body.password, salt, function(err, hash){
    const id = req.params.id;
    const updatedUsuario = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        telefono: req.body.telefono,
        correo: req.body.correo,
        password: hash
    }
    models.Usuario.update(updatedUsuario, {where:{id:id}}).then(result=>{
        res.status(200).json({
            message:"Actualizado",
            post: updatedUsuario,
            result: result
        });
    }).catch(error=>{
        res.status(500).json({
            message: "error",
            error: error
        });
    });
});
});
}
function destroyUsuario(req, res){
    const id = req.params.id;
    models.Usuario.destroy({where:{id:id}}).then(result =>{
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
    signUp: signUp,
    login: login,
    Mostrar:Mostrar,
    updateUsuario:updateUsuario,
    destroyUsuario:destroyUsuario,
    Mostrar1:Mostrar1
}