const express = require('express');
const router = express.Router();
const { verificarToken } = require('../../middleware/verificarToken');

// Modelos
const EstadoCitas = require('../../Models/EstadoCitas');
const HojadeVida = require('../../Models/HojadeVida');
const Seguimiento = require('../../Models/Seguimiento');
const Usuarios = require('../../Models/Usuarios');
// **

const _ = require('underscore');
const moment = require('moment-timezone');
const Notificaion = require('../../Classes/Notificathion/Notification');

router.get('/citas/talleres', [verificarToken], (req, res) => {
    const idUsuario = req.usuario._id;

    Seguimiento.find({ usuarioEmisor: idUsuario, estado: 'aceptado' })
        .populate('usuarioReceptor')
        .exec((err, usuarios) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            if (usuarios.length > 0) {
                const filtrado = _.filter(usuarios, (item, i) => {
                    return item.usuarioReceptor.role === 'TALLER_ROLE'
                });

                return res.json({
                    exe: true,
                    response: filtrado,
                    len: usuarios.length,
                    type: '2',
                })

            } else {
                return res.json({
                    exe: true,
                    response: usuarios,
                    len: usuarios.length
                })
            }


        })
})

router.post('/citas/crear', [verificarToken], (req, res) => {
    const idusuario = req.usuario._id;
    const body = req.body;
    let myNotification = new Notificaion();

    const cita = new EstadoCitas({
        idtaller: body.idtaller,
        fechainicio: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm'),
        usuariopedido: idusuario
    });

    cita.populate('idtaller', (err, miCita) => {
        if (err) {
            return res.json({
                exe: false,
                error: {
                    message: err
                }
            })
        }

        miCita.save((errr, citainfo) => {
            if (errr) {
                return res.json({
                    exe: false,
                    errr
                })
            }

            const hoja = new HojadeVida({
                idtaller: body.idtaller,
                ntaller: miCita.idtaller.nombrecompleto,
                nusuario: req.usuario.nombrecompleto,
                idusuario: idusuario,
                placa: req.usuario.placa,
                cita: citainfo._id,
                tipo: 'cita',
                fecha: moment().utc()
            });

            hoja.save(async(error, hojainfo) => {
                if (error) {
                    return res.json({
                        exe: false,
                        error
                    })
                }

                const idDevice = miCita.idtaller.usuarioID;
                myNotification.createNotificaionOne({ tipo: "Citas", adicional: [] }, { en: `@${req.usuario.nombreusuario} a generado una nueva cita en tu taller`, es: `@${req.usuario.nombreusuario} a generado una nueva cita en tu taller` }, { en: "Solicitud de citas", es: "Solicitud de citas" }, [idDevice], { en: ``, es: `` })

                await myNotification.CrearNotificacionApp({
                    creador: idusuario,
                    destino: miCita.idtaller._id,
                    tipo: 'Citas',
                    titulo: `Tienes una nueva cita`,
                    mensaje: `@${req.usuario.nombreusuario} a generado una nueva cita en tu taller`
                })

                return res.json({
                    exe: true,
                    response: citainfo
                })

            });


        })


    })
})


router.get('/citas/miscitas', [verificarToken], (req, res) => {
    let idusuario = req.usuario._id;

    EstadoCitas.find({ usuariopedido: idusuario, $or: [{ estado: 'PENDIENTE' }, { estado: 'EN PROGRESO' }] })
        .populate('idtaller')
        .sort({ _id: -1 })
        .exec((err, citas) => {

            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            return res.json({
                exe: true,
                response: citas,
                unicos: citas.length > 0 ? _.unique(_.map(citas, (item) => item.idtaller)) : []
            })

        })

})


router.get('/citas/miscitas/taller', [verificarToken], (req, res) => {
    let idusuario = req.usuario._id;

    EstadoCitas.find({ idtaller: idusuario, $or: [{ estado: 'PENDIENTE' }, { estado: 'EN PROGRESO' }] })
        .populate('usuariopedido')
        .sort({ _id: -1 })
        .exec((err, citas) => {

            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            return res.json({
                exe: true,
                response: citas,
                unicos: citas.length > 0 ? _.unique(_.map(citas, (item) => item.usuariopedido)) : []
            })

        })

})



router.get('/citas/micita', [verificarToken], (req, res) => {
    let _id = req.get('x-cita');

    EstadoCitas.find({ _id: _id })
        .populate('idtaller')
        .populate('usuariopedido')
        .exec((err, citas) => {

            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            return res.json({
                exe: true,
                response: citas
            })

        })

})




router.put('/citas/micita', [verificarToken], (req, res) => {
    const _id = req.get('x-cita');
    const data = req.body;
    let myNotification = new Notificaion();
    switch (data.estado) {
        case 'EN PROGRESO':
            data.fechaprogreso = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm');
            break;

        case 'TERMINADO':
            data.fechacumplido = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm');
            break;

        default:
            break;
    }
    EstadoCitas.findByIdAndUpdate(_id, data)
        .populate('idtaller')
        .populate('usuariopedido')
        .exec((err, citas) => {

            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }


            const idDevice = citas.usuariopedido.usuarioID;
            const mensaje = citas.idtaller.nombrecompleto + ' cambio el estado de la cita a ' + data.estado;



            if (data.estado === citas.estado) {
                return res.json({
                    exe: true,
                    response: citas
                })
            } else {

                myNotification.createNotificaionOne({ tipo: "Citas", adicional: [{ id: _id }] }, { en: "asdasdasd asdasd", es: `${mensaje}` }, { en: "Su cita ha cambiado de estado! ", es: "Su cita ha cambiado de estado! " }, [idDevice], { en: ``, es: `` })

                myNotification.CrearNotificacionApp({
                    creador: citas.idtaller._id,
                    destino: citas.usuariopedido._id,
                    tipo: 'Citas',
                    titulo: `La cita ha cambiado de estado`,
                    mensaje
                }).then(() => {

                    return res.json({
                        exe: true,
                        response: citas
                    })


                })

            }


        })



})


router.delete('/citas/miscitas', [verificarToken], (req, res) => {

    EstadoCitas.deleteMany({}, (err, conut) => {
        if (err) {
            return res.json({
                exe: false,
                error: {
                    message: err
                }
            })
        }

        return res.json({
            exe: true,
            response: conut
        })

    })
})

module.exports = router;