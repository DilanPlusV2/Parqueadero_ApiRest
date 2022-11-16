const models = require('../models');

function index(req, res){
    models.zonaparqueo.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message: "error",
            error:error
        });
    });
}

function show(req, res){
    const id = req.params.id;
    
    models.zonaparqueo.findByPk(id).then(result =>{
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

module.exports = {
    index:index,
    show: show
}