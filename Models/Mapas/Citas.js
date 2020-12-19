const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitasMapa = new Schema({
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    encargado: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    asunto: {
        type: String
    },
    tipo: {
        type: String
    },
    ubicacion: {
        type: Object
    },
    eliminada: {
        type: Boolean
    },
    fecha: {
        type: Date
    }
})

module.exports = mongoose.model('citasmapa', CitasMapa);