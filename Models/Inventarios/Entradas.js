const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const IVTEntradas = new Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'ivtproductos'
    },
    nombre: {
        type: String
    },
    codigo: {
        type: String
    },
    cantidad: {
        type: Number,
        default: 0
    },
    nombrecreador: {
        type: String,
        default: ''
    },
    precio: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    origen: {
        type: String
    },
    origenextra: {
        type: String,
        default: ''
    },
    origenivt: {
        type: Schema.Types.ObjectId,
        ref: 'ivtipo'
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'ivtipo'
    },
    fecha: {
        type: Date,
    }
})


module.exports = mongoose.model('ivtentradas', IVTEntradas);