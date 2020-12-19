const express = require('express');
const app = express();
const router = express.Router();
const SeguimientoModel = require('../../Models/Seguimiento');
const UsuariosModel = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');
const Notification = require('../../Classes/Notificathion/Notification');
const _ = require('underscore');
const moment = require('moment');

router.get('/seguimiento/consultar/', [verificarToken], (req, res) => {
    const idEmisor = req.usuario._id;
    const idReceptor = req.get('x-idReceptor');

    SeguimientoModel.find({ usuarioEmisor: idEmisor, usuarioReceptor: idReceptor })
        .exec((err, seguimientoData) => {
            if (err) {
                res.status(500);
                return res.json({
                    exe: false,
                    response: err
                })
            }
            res.json({
                exe: true,
                response: seguimientoData,
                idReceptor
            })
        })
})


router.get('/seguimiento/usuarios/', [verificarToken], (req, res) => {

    const idReceptor = req.usuario._id;

    SeguimientoModel.find({ usuarioReceptor: idReceptor, estado: 'pendiente' })
        .populate('usuarioEmisor')
        .exec((err, SeguimientoData) => {
            if (err) {
                res.satus(500);
                return res.json({
                    exe: false,
                    response: {
                        message: 'Error al consultar los seguimientos'
                    }
                })
            }
            res.status(200);
            res.json({
                exe: true,
                response: {
                    SeguimientoData
                }
            })

        })

})

// Seguimientos con estado aceptado

router.get('/seguimiento/usuarios/aceptados/', [verificarToken], (req, res) => {
    let idReceptor = '';
    const tipo = req.get('x-tipo');

    // tipo 1 es para buscar los seguimientos de otro usuario
    // tipo 0 es para buscar las seguimientos de la sesión actual (token)

    switch (tipo) {
        case '1':
            idReceptor = req.get('x-idReceptor');
            break;

        case '0':
            idReceptor = req.usuario._id;
            break;

    }


    SeguimientoModel.find({ usuarioReceptor: idReceptor, estado: 'aceptado' })
        .populate('usuarioEmisor')
        .exec((err, seguimientos) => {
            if (err) {
                res.status(500)
                return res.json({
                    exe: false,
                    response: {
                        message: 'Error en la petición',
                        err
                    }
                })
            }

            res.status(200);
            return res.json({
                exe: true,
                response: seguimientos,
                tipo,
                idReceptor
            })
        })
})


// Seguimientos con estado aceptado para las personas que yo sigo

router.get('/seguimiento/usuarios/aceptados/seguidos/', [verificarToken], (req, res) => {
    let idEmisor = '';
    const tipo = req.get('x-tipo');

    // tipo 1 es para buscar los seguimientos de otro usuario
    // tipo 0 es para buscar las seguimientos de la sesión actual (token)

    switch (tipo) {
        case '1':
            idEmisor = req.get('x-idReceptor');
            break;

        case '0':
            idEmisor = req.usuario._id;
            break;

    }


    SeguimientoModel.find({ usuarioEmisor: idEmisor, estado: 'aceptado' })
        .populate('usuarioEmisor')
        .populate('usuarioReceptor')
        .exec((err, seguimientos) => {
            if (err) {
                res.status(200)
                return res.json({
                    exe: false,
                    response: {
                        message: 'Error en la petición',
                        err
                    },
                    idEmisor
                })
            }


            res.status(200);
            return res.json({
                exe: true,
                response: seguimientos,
                tipo,
                idEmisor
            })
        });
})

router.get('/seguimientos', [verificarToken], (req, res) => {
    const idReceptor = req.usuario._id;

    SeguimientoModel.find({})
        .exec((err, SeguimientoData) => {

            if (err) {
                res.satus(500);
                return res.json({
                    exe: false,
                    response: {
                        message: 'Error al consultar los seguimientos'
                    }
                })
            }
            res.status(200);
            res.json({
                exe: true,
                response: {
                    message: 'Total de seguimientos',
                    SeguimientoData,
                    idReceptor
                }
            })
        })
})


// Enviar un seguimiento, notificación y solicitud de amistad

router.post('/seguimiento', [verificarToken], (req, res) => {
    const idEmisor = req.usuario._id;
    const body = req.body;
    const myNotification = new Notification();

    if (typeof body.IDreceptor === 'undefined') {
        res.status(400);
        return res.json({
            exe: false,
            response: {
                message: 'No especificó el ID del usuario receptor'
            }
        })
    }

    let Seguimieno = new SeguimientoModel({
        usuarioEmisor: idEmisor,
        usuarioReceptor: body.IDreceptor,
        fechaEnvio: moment().utc()
    });

    Seguimieno.save((err, seguimientoData) => {
        if (err) {
            return res.json({
                exe: false,
                response: {
                    message: err
                }
            });
        }

        UsuariosModel.find({ _id: idEmisor })
            .exec((error, usuarioMotoEmisor) => {
                if (error) {
                    return res.json({
                        exe: false,
                        response: {
                            message: error
                        }
                    });
                }

                UsuariosModel.find({ _id: body.IDreceptor })
                    .exec(async(errr, usuarioMotoReceptor) => {
                        if (errr) {
                            return res.json({
                                exe: false,
                                response: {
                                    message: errr
                                }
                            });
                        }

                        const IDusarioReceptor = usuarioMotoReceptor[0].usuarioID;

                        myNotification.createNotificaionOne({ tipo: "Seguimiento", adicional: [] }, { en: "Good Morning", es: `Hola soy ${usuarioMotoEmisor[0].nombrecompleto} y me gustaría seguirte` }, { en: "Solicitud de seguimiento English", es: "Solicitud de seguimiento" }, [IDusarioReceptor], { en: ``, es: `` })

                        await myNotification.CrearNotificacionApp({
                            creador: usuarioMotoEmisor[0]._id,
                            destino: usuarioMotoReceptor[0]._id,
                            tipo: 'Seguimiento',
                            titulo: `${usuarioMotoEmisor[0].nombrecompleto} quiere seguirte`,
                            fecha: moment().utc(),
                            mensaje: `Hola soy ${usuarioMotoEmisor[0].nombrecompleto} y me gustaría seguirte`
                        })


                        return res.json({
                            exe: true,
                            response: {
                                message: 'Notificación enviada',
                                seguimientoData
                            }

                        })


                    })
            })


    })
})


//  Editamos el estado de la solicitud, pendiente a aceptado

router.put('/seguimiento/usuario/', [verificarToken], (req, res) => {
    const idEmisor = req.get('x-idReceptor');
    const idReceptor = req.usuario._id;
    const myNotification = new Notification();

    SeguimientoModel.findOneAndUpdate({ usuarioEmisor: idEmisor, usuarioReceptor: idReceptor, estado: 'pendiente' }, { estado: 'aceptado' }, { new: true })
        .populate('usuarioEmisor')
        .populate('usuarioReceptor')
        .exec(async(err, seguimiento) => {
            if (err) {
                return res.json({
                    exe: false,
                    response: {
                        message: 'No se pudo enviar la solicitud',
                        err
                    }
                })
            }

            if (seguimiento) {


                const idDevice = seguimiento.usuarioEmisor.usuarioID;
                console.log('Seguimiento', seguimiento.usuarioEmisor, 'receptor', seguimiento.usuarioReceptor);

                myNotification.createNotificaionOne({ tipo: "Seguimiento", adicional: [] }, { en: `${seguimiento.usuarioReceptor.nombrecompleto} aceptó tu solicitud de seguimiento.`, es: `${seguimiento.usuarioReceptor.nombrecompleto} aceptó tu solicitud de seguimiento.` }, { en: "Solicitud de seguimiento", es: "Solicitud de seguimiento" }, [idDevice], { en: ``, es: `` })

                await myNotification.CrearNotificacionApp({
                    creador: seguimiento.usuarioReceptor._id,
                    destino: seguimiento.usuarioEmisor._id,
                    tipo: 'SeguimientoAceptado',
                    titulo: `${seguimiento.usuarioReceptor.nombrecompleto} te está siguiendo`,
                    fecha: moment().utc(),
                    mensaje: `${seguimiento.usuarioReceptor.nombrecompleto} aceptó tu solicitud de seguimiento.`
                })

                return res.json({
                    exe: true,
                    response: seguimiento,

                })

            }
            /**/

        })
})

// Eliminar todas las solicitudes de amistad de amistad temporal

router.delete('/seguimientos', [verificarToken], (req, res) => {

    SeguimientoModel.deleteMany({}, (err, seguimientos) => {
        if (err) {
            res.status(500);
            return res.json({
                exe: false,
                response: {
                    message: 'No se pudo eliminar las solicitudes'
                }
            })
        }

        res.json({
            exe: true,
            response: seguimientos
        })
    })
});


// Cancelamos la solicitud


router.delete('/seguimiento/usuario/', [verificarToken], (req, res) => {
    let idEmisor = '';
    let idReceptor = '';
    const tipo = req.get('x-tipo');

    switch (tipo) {
        case '1':
            idEmisor = req.usuario._id;
            idReceptor = req.get('x-idReceptor');
            break;

        case '0':
            idEmisor = req.get('x-idReceptor');
            idReceptor = req.usuario._id;
            break;
    }

    SeguimientoModel.remove({ usuarioEmisor: idEmisor, usuarioReceptor: idReceptor })
        .exec((err, deletedCout) => {
            if (err) {
                res.status(500);
                return res.json({
                    exe: false,
                    response: {
                        message: 'No se pudo eliminar las solicitudes'
                    }
                })
            }


            res.json({
                exe: true,
                response: deletedCout
            })
        })
})
module.exports = router;