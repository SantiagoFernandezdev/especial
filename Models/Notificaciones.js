const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const Notificaciones = new Schema({
    usuarioCreador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    rutaApp: {
        type: String,
        default: ''
    },
    mensaje: {
        type: String,
        default: ''
    },
    titulo: {
        type: String,
        default: ''
    },
    accion: {
        type: Object,
        default: {
            tipo: '',
            data: {}
        }
    },
    usuarioDestino: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    fechaCreado: {
        type: String,
    },
    abierta: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('notificaciones', Notificaciones);