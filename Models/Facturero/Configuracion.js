const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FacturaConfiguracionSchema = new Schema({
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    iva: {
        type: Boolean,
        default: false
    },
    nit: {
        type: String
    },
    direccion: {
        type: String,
    },
    regimen: {
        type: String
    },
    titular: {
        type: String
    },
    consecutivo: {
        type: Number
    },
    valorIva: {
        type: String
    },
    fecha: {
        type: Date
    }
})


module.exports = mongoose.model('facturaconfig', FacturaConfiguracionSchema);