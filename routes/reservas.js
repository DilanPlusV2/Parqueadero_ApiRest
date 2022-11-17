const express = require('express');
const reservaController = require('../controllers/reserva.controller');
// eslint-disable-next-line no-unused-vars
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/",reservaController.save);
router.get("/:IdUsuario",reservaController.show);

router.put("/:id",reservaController.update);
router.delete("/:id",reservaController.destroy);


module.exports = router;