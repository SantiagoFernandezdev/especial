const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const IVTipoSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    tipo: {
        type: String,
        enum: ['simple', 'avanzado']
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    accesos: {
        type: Array,
        default: []
    },
    fecha: {
        type: Date
    }
})


module.exports = mongoose.model('ivtipo', IVTipoSchema);