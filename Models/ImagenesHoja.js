const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FotosHojaSchema = new Schema({
    ruta: {
        type: String,
        default: 'none'
    },
    mime: {
        type: String,
    },
    nombre: {
        type: String
    },
    asunto: {
        type: String
    },
    hoja: {
        type: Schema.Types.ObjectId,
        ref: 'hojadevida'
    },

    fecha: {
        type: String
    }
})


module.exports = mongoose.model('fotoshoja', FotosHojaSchema);