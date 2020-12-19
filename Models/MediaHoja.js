const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IGTMFotosSchema = new Schema({
    ruta: {
        type: String,
        default: 'none'
    },
    mime: {
        type: String,
    },
    nombre: {
        type: String
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    asunto: {
        type: String
    },
    hoja: {
        type: Schema.Types.ObjectId,
        ref: 'hojadevida'
    },
    tipo: {
        type: String
    },

    fecha: {
        type: String
    }
})


module.exports = mongoose.model('hojafotos', IGTMFotosSchema);