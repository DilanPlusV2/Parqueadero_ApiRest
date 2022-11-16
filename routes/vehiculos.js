const express = require('express');
const vehiculosController = require('../controllers/vehiculos.controller');

const router = express.Router();

router.post("/",vehiculosController.save);
router.get("/:id",vehiculosController.show);
router.post("/:IdUsuario",vehiculosController.index);
router.put("/:id",vehiculosController.update);
router.delete("/:id",vehiculosController.destroy);


module.exports = router;