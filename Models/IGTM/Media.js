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
    cont: {
        type: Number
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'igtm'
    },
    historia: {
        type: Schema.Types.ObjectId,
        ref: 'historias'
    },

    fecha: {
        type: String
    }
})


module.exports = mongoose.model('igtmfotos', IGTMFotosSchema);