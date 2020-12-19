const mongoose = require('mongoose');
const usuarioValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
const moment = require('moment-timezone');

let usuarioSchema = new Schema({
    nombrecompleto: {
        type: String,
        required: [true, 'Nombre y apellido requeridos']
    },
    nombreusuario: {
        type: String,
        required: [true, 'Nombre de usuario requerido'],
        unique: true
    },
    correo: {
        type: String
    },
    clave: {
        type: String,
        required: [true, 'Password requerida']
    },
    tel: {
        type: Number
    },
    imagen: {
        type: Array,
        default: [{
            path: 'notfound.png'
        }]
    },
    portada: {
        type: Object,
        default: {
            path: 'notfound.jpg'
        }
    },
    estado: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: {
            values: ['USER_ROLE', 'TALLER_ROLE', 'ALMACEN_ROLE', 'ADMIN_ROLE'],
            message: '{PATH} no es un role permitido'
        }
    },
    pais: {
        type: String
    },
    ciudad: {
        type: String
    },
    tipoNegocio: {
        type: Array,
        default: []
    },
    usuarioID: {
        type: String,
    },
    fecha: {
        type: String,
        default: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm')
    }

})


usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObjet = user.toObject();
    delete userObjet.clave;

    return userObjet;
}

mongoose.plugin(usuarioValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('usuarios', usuarioSchema);