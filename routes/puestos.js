const express = require('express');
const puestoController = require('../controllers/puestos.controller');

const router = express.Router();

router.get("/",puestoController.index);
router.put("/:id",puestoController.update);

module.exports = router;