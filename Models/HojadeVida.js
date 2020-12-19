const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HojadeVida = new Schema({
    idusuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
    },
    idtaller: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
    },
    ntaller: {
        type: String
    },
    nusuario: {
        type: String
    },
    cita: {
        type: Schema.Types.ObjectId,
        ref: 'citas',
    },
    placa: {
        type: String
    },
    repuestos: {
        type: Array,
        default: []
    },
    trabajos: {
        type: Array,
        default: []
    },
    tipo: {
        type: String
    },
    fecha: {
        type: String
    }
})
module.exports = mongoose.model('hojadevida', HojadeVida);