const express = require('express');
const router = express.Router();
const CitasChat = require('../../Models/EstadoCitasChat');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');
const path = require('path');
const uniqid = require('uniqid');
const Convertidor = require('../../Classes/Utilidades/Convertidor');

router.post('/citas/chat/', [verificarToken], (req, res) => {
    const body = req.body;

    let citasChat = new CitasChat({
        idCita: body._id,
        mensaje: body.mensaje,
        fechaMensaje: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm'),
        emisor: body.emisor,
        usuarioTaller: body.taller,
        usuarioApp: body.usuario,
        public: false
    });

    citasChat.save((err, cita) => {

        if (err) {
            return res.json({
                exe: false,
                error: err
            })
        }

        return res.json({
            exe: true,
            response: cita
        })

    })



})

router.post('/citas/chat/upload', [verificarToken], (req, res) => {
    const _id = req.get('x-idCita');

    if (!req.files) {
        return res.json({
            exe: false,
            error: 'No seleccionó nada'
        })
    } else {
        let file = req.files.archivo;
        let nameSecret = uniqid() + moment().tz('America/Bogota').format('YYYYMMDDHHmmss') + file.name;
        const nameConvert = uniqid() + moment().tz('America/Bogota').format('YYYYMMDDHHmmss') + _id + '.mp4';
        console.log(nameSecret, ' Toosle');
        file.mv(path.resolve(__dirname, '../../server/public/Citas/', nameSecret), async(errFile) => {
            if (errFile) {
                return res.json({
                    exe: false,
                    error: errFile
                })
            }

            let mime = file.mimetype;

            if (mime.includes('image') || mime.includes('Image')) {

                CitasChat.find({ _id: _id })
                    .exec((err, miCita) => {
                        if (err) {
                            return res.json({
                                exe: false,
                                error: err
                            })
                        }

                        const files = miCita[0].archivos;

                        files.push({
                            name: file.name,
                            nameBD: nameSecret,
                            type: file.mimetype,
                        });

                        CitasChat.findByIdAndUpdate(_id, { archivos: files, public: true }, { new: true })
                            .exec((error, miCitaFinal) => {
                                if (error) {
                                    return res.json({
                                        exe: false,
                                        error
                                    })
                                }

                                return res.json({
                                    exe: true,
                                    response: miCitaFinal
                                })
                            })
                    })

            } else {

                console.log('Despues de llamar');

                CitasChat.find({ _id: _id })
                    .exec((err, miCita) => {
                        if (err) {
                            return res.json({
                                exe: false,
                                error: err
                            })
                        }

                        const files = miCita[0].archivos;

                        files.push({
                            name: file.name,
                            nameBD: 'none',
                            type: file.mimetype,
                        });

                        CitasChat.findByIdAndUpdate(_id, { archivos: files, public: true }, { new: true })
                            .exec((error, miCitaFinal) => {
                                if (error) {
                                    return res.json({
                                        exe: false,
                                        error
                                    })
                                }


                                let ObjectCita = miCitaFinal;
                                ObjectCita.nameSecret = nameSecret;
                                ObjectCita.nameConvert = nameConvert;
                                console.log(ObjectCita, nameConvert, nameSecret, ' entramos')

                                return res.json({
                                    exe: true,
                                    response: {
                                        _id: miCitaFinal._id,
                                        nameSecret,
                                        nameConvert,
                                        emisor: miCitaFinal.emisor,
                                        idCita: miCitaFinal.idCita,
                                        usuarioApp: miCitaFinal.usuarioApp,
                                        usuarioTaller: miCitaFinal.usuarioTaller,
                                        mensaje: miCitaFinal.mensaje,
                                        archivos: miCitaFinal.archivos,
                                        fechaMensaje: miCitaFinal.fechaMensaje,
                                        public: miCitaFinal.public
                                    }
                                })
                            })
                    })

            }





        })
    }
})

router.get('/citas/chat/pendientes', [verificarToken], (req, res) => {
    const fecha = req.get('x-fecha');
    const _id = req.get('x-idCita');
    CitasChat.find({ idCita: _id, estado: 'on', public: true })
        .populate('usuarioTaller')
        .populate('usuarioApp')
        .exec((err, mensajes) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: err
                })
            }

            let arrayMensajes = [];

            if (mensajes.length > 0) {
                mensajes.forEach((item) => {
                    const fcha1 = moment(fecha).tz('America/Bogota').format('YYYY-MM-DD HH:mm');
                    const fcha2 = moment(item.fechaMensaje).tz('America/Bogota').format('YYYY-MM-DD HH:mm');

                    const duration = moment(fcha1).diff(moment(fcha2), 'minutes');

                    if (duration < 0) {
                        arrayMensajes.push(item);
                    }
                })

                return res.json({
                    exe: true,
                    response: arrayMensajes,
                    fecha
                })
            }


        })
})


router.get('/citas/chat/uno', [verificarToken], (req, res) => {
    const _id = req.get('x-idCita');
    const desde = parseInt(req.get('x-desde'));
    CitasChat.find({ idCita: _id, estado: 'on', public: true })
        .skip(desde)
        .limit(10)
        .sort({ _id: -1 })
        .populate('usuarioTaller')
        .populate('usuarioApp')
        .exec((err, citas) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: err
                })
            }

            return res.json({
                exe: true,
                response: citas,
                desde
            })
        })
})




module.exports = router;