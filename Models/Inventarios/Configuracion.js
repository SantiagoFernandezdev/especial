const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const IVTConfchema = new Schema({


    creador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'ivtipo'
    },
    fechadesde: {
        type: Date
    },
    fechahasta: {
        type: Date
    }
})


module.exports = mongoose.model('ivtcong', IVTConfchema);