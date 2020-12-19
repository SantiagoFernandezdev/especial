const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuarioValidator = require('mongoose-unique-validator');

const CitasSettings = new Schema({
    idtaller: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        unique: true,
        required: [true, 'Requerido el usuario taller']
    },
    disponible: {
        type: Boolean,
        default: false
    },
    listaTrabajos: {
        type: Array,
        default: []
    }
})

mongoose.plugin(usuarioValidator, { message: '{PATH} debe ser único' })
module.exports = mongoose.model('citassettings', CitasSettings);