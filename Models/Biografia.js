const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const BiografiaSchema = new Schema({
    contenido: {
        type: Object,
        default: {}
    },
    servicios: {
        type: Array
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    }
})


module.exports = mongoose.model('biografia', BiografiaSchema);