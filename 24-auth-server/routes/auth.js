const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(), // obligaorio y no tiene que ser vacio
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos // valida si hay error en 1 o varios de los campos anteriores
], crearUsuario );

// // Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(), // obligatorio, 
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }), // obligatorio y minimo 6 caracteres
    validarCampos
], loginUsuario );

// // Validar y revalidar token
router.get('/renew', validarJWT , revalidarToken );

module.exports = router;