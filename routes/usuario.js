const express = require('express');
const userController = require ('../controllers/usuarios.controller')
const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);
router.post('/mostrar/:correo', userController.Mostrar);
router.post('/mostrar1/:id', userController.Mostrar1);
router.put('/modificar/:id', userController.updateUsuario);
router.delete('/eliminar/:id', userController.destroyUsuario);
module.exports = router;