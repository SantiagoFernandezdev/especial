const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const IVTProveedores = new Schema({
    nombre: {
        type: String,
        default: ''
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'ivtipo'
    },
    telefono: {
        type: String,
    },
    telefono2: {
        type: String,
    },
    correo: {
        type: String,
        default: ''
    },
    fecha: {
        type: Date
    }
})


module.exports = mongoose.model('ivtproveedores', IVTProveedores);