const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const IVTProductosSchema = new Schema({
    nombre: {
        type: String,
        default: ''
    },
    codigo: {
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
    categoria: {
        type: String,
        default: ''
    },
    proveedor: {
        type: String,
        default: ''
    },
    existencia: {
        type: Number,
        default: 0
    },
    limite: {
        type: Number,
        default: 7
    },
    eliminado: {
        type: Boolean,
        default: false
    },
    fecha: {
        type: Date
    }
})


module.exports = mongoose.model('ivtproductos', IVTProductosSchema);