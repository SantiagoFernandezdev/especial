const express = require('express');
const router = express.Router();
const HistoriasSchema = require('../../Models/IGTM/Historias');
const SeguidosSchema = require('../../Models/Seguimiento');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');
const path = require('path');
const uniqid = require('uniqid');
const Convertidor = require('../../Classes/Utilidades/Convertidor');
const filesystem = require('fs');
const Notificacion = require('../../Classes/Notificathion/Notification');
const _ = require('underscore');

router.post('/igtm/guardado/', [verificarToken], (req, res) => {
    const body = req.body;

    if (body.tipo === 'crear') {
        const igtm = new IGTMmeGuardadoSchema({
            creador: req.usuario._id,
            publicacion: body.publicacion,
            fecha: moment().utc()
        })

        igtm.save((err, igtm) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: igtm
            })
        })
    } else if (body.tipo === 'eliminar') {
        IGTMmeGuardadoSchema.findOneAndRemove({ $and: [{ publicacion: body.publicacion }, { creador: req.usuario._id }] })
            .lean()
            .exec((err, igtm) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: igtm
                })
            })
    } else {
        IGTMmeGuardadoSchema.find({ $and: [{ publicacion: body.publicacion }, { creador: req.usuario._id }] })
            .lean()
            .exec((err, igtm) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                if (igtm.length > 0) {
                    return res.json({
                        exe: true
                    })
                } else {
                    return res.json({
                        exe: false
                    })
                }


            })
    }

})

router.post('/igtm/crear/', [verificarToken], (req, res) => {
    const body = req.body;
    let objeto = {};

    if (body.tipo === 'dibujar') {
        objeto = {
            tipo: body.tipo,
            creador: req.usuario._id,
            etiquetas: body.etiquetas,
            comentario: body.comentario,
            dibujo: {
                texto: body.texto,
                color: body.grafico.letra,
                fondo: body.grafico.color
            },
            fecha: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
        }

        const igtm = new IGTMSchema(objeto)

        igtm.save((err, igtm) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            SeguidosSchema.find({ usuarioReceptor: req.usuario._id, estado: 'aceptado' })
                .lean()
                .populate('usuarioEmisor')
                .exec((errr, igtms) => {
                    if (errr) {
                        return res.json({
                            exe: false,
                            errr
                        })
                    }


                    let seguidos = igtms.map((item) => {
                        return item.usuarioEmisor.usuarioID
                    });

                    let seguidos2 = igtms.map((item) => {
                        return item.usuarioEmisor._id
                    });



                    if (seguidos.length > 0) {
                        let miNotificacion = new Notificacion();

                        if (body.etiquetas.length > 0) {
                            const usuariosExtraidos = body.etiquetas.map((val) => {
                                return val.usuarioID;
                            });

                            const usuariosExtraidos2 = body.etiquetas.map((val) => {
                                return val._id;
                            });

                            miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: igtm._id } }, { en: `@${req.usuario.nombreusuario} te etiquetó en una publicación`, es: `@${req.usuario.nombreusuario} te etiquetó en una publicación` }, { en: `Notificación`, es: `Notificación` }, usuariosExtraidos, { en: ``, es: `` });

                            _.each(usuariosExtraidos2, async(seg) => {
                                await miNotificacion.CrearNotificacionApp({
                                    creador: req.usuario._id,
                                    rutaApp: '/assets/Video.png',
                                    mensaje: `@${req.usuario.nombreusuario} te etiquetó en una publicación`,
                                    titulo: 'Notificación',
                                    tipo: 'Publicacion',
                                    fecha: moment().utc(),
                                    data: { id: igtm._id },
                                    destino: seg
                                })
                            })
                        }

                        miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: igtm._id } }, { en: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas`, es: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas` }, { en: `Notificación`, es: `Notificación` }, seguidos, { en: ``, es: `` })

                        _.each(seguidos2, async(seg) => {
                            await miNotificacion.CrearNotificacionApp({
                                creador: req.usuario._id,
                                rutaApp: '/assets/Video.png',
                                mensaje: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas`,
                                titulo: 'Notificación',
                                tipo: 'Publicacion',
                                fecha: moment().utc(),
                                data: { id: igtm._id },
                                destino: seg
                            })
                        })


                        return res.json({
                            exe: true,
                            response: igtm,
                            etiquetas: body.etiquetas
                        })
                    } else {
                        return res.json({
                            exe: true,
                            response: igtm,
                            etiquetas: body.etiquetas
                        })
                    }

                })



        })



    } else if (body.tipo === 'multimedia') {
        objeto = {
            tipo: body.tipo,
            creador: req.usuario._id,
            etiquetas: body.etiquetas,
            comentario: body.comentario,
            fecha: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
        }


        const igtm = new IGTMSchema(objeto)

        igtm.save((err, igtm) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: false,
                response: igtm
            })
        });
    }


})


module.exports = router;