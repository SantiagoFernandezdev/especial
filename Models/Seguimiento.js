const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let seguimientoSchema = new Schema({
    usuarioEmisor: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'Usuario requerido']
    },
    usuarioReceptor: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'Usuario receptor requerido']
    },

    fechaEnvio: {
        type: String
    },

    estado: {
        type: String,
        default: 'pendiente'
    },
    fechaEstado: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('seguimieno', seguimientoSchema);