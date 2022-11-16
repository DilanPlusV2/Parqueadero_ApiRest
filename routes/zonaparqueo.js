const express = require('express');
const puestoController = require('../controllers/zonaparqueo.controller');

const router = express.Router();

router.get("/",puestoController.index);
router.post('/mostrar/:id', puestoController.show);

module.exports = router;