const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const IVTEmpleados = new Schema({
    nombre: {
        type: String,
        default: ''
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'ivtipo'
    },
    fecha: {
        type: Date,
    }
})


module.exports = mongoose.model('ivtempleados', IVTEmpleados);