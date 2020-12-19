const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FacturasSchema = new Schema({
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    config: {
        type: Schema.Types.ObjectId,
        ref: 'facturaconfig'
    },
    consecutivo: {
        type: String
    },
    cliente: {
        type: String
    },
    ciudad: {
        type: String
    },
    direccion: {
        type: String
    },
    nitcc: {
        type: String
    },
    tel: {
        type: Number
    },
    lista: {
        type: Array
    },
    subtotal: {
        type: Number
    },
    ivatotal: {
        type: Number
    },
    total: {
        type: Number
    },
    descuento: {
        type: Number
    },
    fecha: {
        type: Date
    }
})


module.exports = mongoose.model('facturas', FacturasSchema);