const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const Empleados = new Schema({
    nombre: {
        type: String,
        default: ''
    },
    cargo: {
        type: String,
        default: ''
    },
    alias: {
        type: String,
        default: ''
    },
    usuario: {
        type: Schema.Types.ObjectId,
        unique: true,
        ref: 'usuarios'
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    fecha: {
        type: String,
        default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
    }
})


module.exports = mongoose.model('empleados', Empleados);