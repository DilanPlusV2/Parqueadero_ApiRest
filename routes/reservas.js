const express = require('express');
const reservaController = require('../controllers/reserva.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/",reservaController.save);
router.get("/:IdUsuario",reservaController.show);
router.get("/",reservaController.index);
router.put("/:id",reservaController.update);
router.delete("/:id",reservaController.destroy);


module.exports = router;