const UsuariosBD = require('../../Models/Usuarios');

class Usuarios {

    constructor() {}

    obtenerUsuario(id) {
        return new Promise((resolve, reject) => {
            UsuariosBD.find({ _id: id })
                .exec((err, usuario) => {
                    if (err) {
                        reject({
                            exe: false,
                            err
                        })
                    }

                    resolve({
                        exe: true,
                        usuario
                    })
                })
        })
    }
}

module.exports = Usuarios