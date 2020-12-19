const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IGTMmeGustaSchema = new Schema({

    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'igtm'
    },
    fecha: {
        type: String
    }
})


module.exports = mongoose.model('igtmmegusta', IGTMmeGustaSchema);