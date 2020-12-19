const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TiposNegocio = new Schema({
    nombre: {
        type: String
    }
})

module.exports = mongoose.model('tnegocio', TiposNegocio);