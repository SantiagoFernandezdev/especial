const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IGTMSchema = new Schema({

    tipo: {
        type: String,
        enum: ['dibujar', 'multimedia']
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    creadortemporal: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    creadororiginal: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    etiquetas: [{
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    }],
    comentario: {
        type: String
    },
    dibujo: {
        type: Object,
        default: {
            fondo: '',
            color: '',
            texto: ''
        }
    },
    media: [{
        type: Schema.Types.ObjectId,
        ref: 'media'
    }],
    publicada: {
        type: Boolean,
        default: false
    },
    eliminada: {
        type: Boolean,
        default: false
    },
    bloqueada: {
        type: Object,
        default: {
            blok: false,
            motivo: ''
        }
    },
    fecha: {
        type: Date
    }
})


module.exports = mongoose.model('igtm', IGTMSchema);