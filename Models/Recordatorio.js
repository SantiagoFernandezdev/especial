const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const RecordatorioSchema = new Schema({
    fechacreado: {
        type: String,
        default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    tipo: {
        type: String,
        default: ''
    },
    destinatarios: {
        type: Array,
        default: []
    },
    informacion: {
        type: Object,
        default: {
            titulo: '',
            contenido: '',
            archivos: []
        }
    },
    frecuencia: {
        type: Object,
        default: {
            patron: '',
            cantidad: 0,
        }
    },
    repetir: {
        type: String,
        default: 'SI',
    },
    repetirprograma: {
        type: String,
        default: 'SI',
    },

    marcado: {
        type: Number,
        default: 0
    },
    estado: {
        type: String,
        default: 'primiparo',
    },
    proximo: {
        type: String,
        default: ''
    },
    finalizado: {
        type: String,
        default: 'NO'
    },
    visible: {
        type: String,
        default: 'NO'
    }

})

module.exports = mongoose.model('recordatorios', RecordatorioSchema);