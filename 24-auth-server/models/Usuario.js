const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String, // tipo string
        required: true // obligatorio
    },
    email: {
        type: String,
        required: true,
        unique: true // unico
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = model('Usuario', UsuarioSchema ); // (nombre del modelo, esquema)