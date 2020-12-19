const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Conexiones = new Schema({
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'Este id es requerido']
    },
    fechaConexion: {
        type: String,
    },
    socketId: {
        type: String
    }
})

module.exports = mongoose.model('conexiones', Conexiones);