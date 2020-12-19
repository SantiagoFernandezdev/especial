const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitasChat = new Schema({
    idCita: {
        type: String,
        required: [true, 'Especifique la sala de chat']
    },
    fechaMensaje: {
        type: String
    },
    mensaje: {
        type: String
    },
    emisor: {
        type: String
    },
    usuarioTaller: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    usuarioApp: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    estado: {
        type: String,
        default: 'on'
    },
    archivos: {
        type: Array,
        default: []
    },
    detalles: {
        type: Array,
        default: []
    },
    public: {
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('citaschat', CitasChat)