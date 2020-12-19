const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EstadoCitas = new Schema({
    idtaller: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'Se requiere especificar el taller']
    },
    fechainicio: {
        type: String
    },
    usuariopedido: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'Se requiere especificar el usuario que realiza la petición']
    },
    fechaprogreso: {
        type: String,
        default: ''
    },
    fechacumplido: {
        type: String,
        default: ''
    },
    estado: {
        type: String,
        default: 'PENDIENTE',
        enum: {
            values: ['PENDIENTE', 'EN PROGRESO', 'TERMINADO'],
            message: '{PATH} no es un estado permitido'
        }
    },
    listaTrabajos: {
        type: Array,
        default: []
    },
    precio: {
        type: Number,
        default: 0
    }

});


module.exports = mongoose.model('citas', EstadoCitas);