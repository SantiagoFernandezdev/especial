const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IGTMComentariosSchema = new Schema({
    comentario: {
        type: String
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'igtm'
    },
    hijos: [{
        comentario: {
            type: String
        },
        nombre: {
            type: Schema.Types.ObjectId,
            ref: 'usuarios'
        }
    }],

    fecha: {
        type: String
    }
})


module.exports = mongoose.model('igtmcomentarios', IGTMComentariosSchema);