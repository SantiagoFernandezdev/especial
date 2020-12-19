const CitasChat = require('../../Models/EstadoCitasChat');
const moment = require('moment-timezone');


class EstadoCitas {

    constructor() {}

    crearMensaje(data) {
        return new Promise((resolve, reject) => {
            let citasChat = new CitasChat({
                idCita: data._id,
                mensaje: data.mensaje,
                fechaMensaje: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm'),
                emisor: data.emisor,
                usuarioTaller: data.taller,
                usuarioApp: data.usuario
            });

            citasChat.save((err, cita) => {
                if (err) {
                    reject({
                        exe: false,
                        error: err
                    })
                }

                resolve(cita);
            })

        })
    }

    editarArchivo(data) {
        return new Promise((resolve, reject) => {
            const _id = data._id;

            CitasChat.find({ _id: data._id })
                .exec((err, miCita) => {
                    if (err) {
                        reject({
                            exe: false,
                            error: err
                        })
                    }

                    let files = miCita[0].archivos;

                    files = files.map((item) => {
                        if (item.nameBD === 'none') {
                            item.nameBD = data.nameSecret
                        }
                        return item;
                    })

                    CitasChat.findByIdAndUpdate(_id, { archivos: files, public: true }, { new: true })
                        .exec((error, miCitaFinal) => {
                            if (error) {
                                reject({
                                    exe: false,
                                    error
                                })
                            }

                            resolve(miCitaFinal);
                        })
                })

        });
    }


}

module.exports = EstadoCitas;