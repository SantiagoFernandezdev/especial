const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SedesMapa = new Schema({
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    nombre: {
        type: String
    },
    pais: {
        type: String
    },
    ciudad: {
        type: String
    },
    imagen: {
        type: String
    },
    tipoNegocio: {
        type: Array
    },
    ubicacion: {
        type: Object
    },
    desde: {
        type: String
    },
    hasta: {
        type: String
    },
    de: {
        type: String
    },
    a: {
        type: String
    },

    fecha: {
        type: Date
    }
})

module.exports = mongoose.model('sedesmapa', SedesMapa);