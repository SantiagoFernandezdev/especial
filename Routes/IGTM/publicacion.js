const express = require('express');
const router = express.Router();
const IGTMSchema = require('../../Models/IGTM/Crear');
const IGTMSHistoriachema = require('../../Models/IGTM/Historias');
const IGTMSFotoschema = require('../../Models/IGTM/Media');
const IGTMmeGustaSchema = require('../../Models/IGTM/Megusta');
const IGTMmeComentarioSchema = require('../../Models/IGTM/Comentarios');
const IGTMmeGuardadoSchema = require('../../Models/IGTM/Guardados');

const SeguidosSchema = require('../../Models/Seguimiento');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');
const path = require('path');
const uniqid = require('uniqid');
const Convertidor = require('../../Classes/Utilidades/Convertidor');
const filesystem = require('fs');
const Notificacion = require('../../Classes/Notificathion/Notification');
const { object } = require('underscore');
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
            publicada: true,
            dibujo: {
                texto: body.texto,
                color: body.grafico.letra,
                fondo: body.grafico.color
            },
            fecha: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
        }

        if (body.historia) {

            const igtm = new IGTMSHistoriachema(objeto)

            igtm.save((err, igtm) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }


                let miNotificacion = new Notificacion();

                if (body.etiquetas.length > 0) {
                    const usuariosExtraidos = body.etiquetas.map((val) => {
                        return val.usuarioID;
                    });

                    const usuariosExtraidos2 = body.etiquetas.map((val) => {
                        return val._id;
                    });

                    miNotificacion.createNotificaionOne({ tipo: "Historia", adicional: { id: igtm._id } }, { en: `@${req.usuario.nombreusuario} te etiquetó en una historia`, es: `@${req.usuario.nombreusuario} te etiquetó en una historia` }, { en: `Notificación`, es: `Notificación` }, usuariosExtraidos, { en: ``, es: `` });

                    _.each(usuariosExtraidos2, async(seg) => {
                        await miNotificacion.CrearNotificacionApp({
                            creador: req.usuario._id,
                            rutaApp: '/assets/Historias.png',
                            mensaje: `@${req.usuario.nombreusuario} te etiquetó en una historia`,
                            titulo: 'Notificación',
                            tipo: 'Historia',
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
                        response: igtm
                    })

                }





            })



        } else {

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



        }



    } else if (body.tipo === 'multimedia') {
        objeto = {
            tipo: body.tipo,
            creador: req.usuario._id,
            etiquetas: body.etiquetas,
            comentario: body.comentario,
            fecha: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
        }

        if (body.historia) {

            const igtm = new IGTMSHistoriachema(objeto)

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
            });

        } else {
            const igtm = new IGTMSchema(objeto)

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
            });
        }



    }


})

router.post('/igtm/historias/vistos/', [verificarToken], (req, res) => {
    const _id = req.body.id;

    IGTMSHistoriachema.findById(_id)
        .lean()
        .exec((err, doc) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            let arr = doc.vistos;
            if (arr.find((item) => item != req.usuario._id)) {
                arr.push(req.usuario._id);
                IGTMSHistoriachema.findByIdAndUpdate(_id, { vistos: arr }, { new: true })
                    .lean()
                    .exec((error, doc2) => {
                        if (error) {
                            return res.json({
                                exe: false,
                                error
                            })
                        }

                        return res.json({
                            exe: true,
                            arr,
                            noexiste: true
                        })
                    })
            } else {
                return res.json({
                    exe: true,
                    yaexiste: true,
                    doc: doc.vistos
                })
            }

        })
});


router.post('/igtm/compartir/', [verificarToken], (req, res) => {
    const body = req.body;
    IGTMSchema.findOne({ _id: body.publicacion._id })
        .lean()
        .exec((err, document) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            if (document) {
                if (document.tipo === 'dibujar') {
                    objeto = {
                        tipo: 'dibujar',
                        creador: req.usuario._id,
                        etiquetas: body.etiquetas,
                        comentario: body.comentario,
                        dibujo: body.publicacion.dibujo,
                        creadortemporal: document.creador,
                        publicada: true,
                        fecha: moment().utc()
                    }
                    if (!document.creadororiginal) {
                        objeto.creadororiginal = document.creador;
                    } else {
                        objeto.creadororiginal = document.creadororiginal;
                    }

                    let guardar = new IGTMSchema(objeto)
                    guardar.save((errorr, newdocument) => {
                        if (errorr) {
                            return res.json({
                                exe: false,
                                errorr
                            })
                        }

                        return res.json({
                            exe: true,
                            response: newdocument
                        })

                    });

                } else {

                    IGTMSFotoschema.find({ publicacion: body.publicacion._id })
                        .lean()
                        .exec((error, fotos) => {
                            if (err) {
                                return res.json({
                                    exe: false,
                                    error
                                })
                            }

                            if (fotos.length > 0) {
                                let objeto = {
                                    tipo: 'multimedia',
                                    creador: req.usuario._id,
                                    etiquetas: body.etiquetas,
                                    comentario: body.comentario,
                                    creadortemporal: document.creador,
                                    publicada: true,
                                    fecha: moment().utc()
                                };

                                if (!document.creadororiginal) {
                                    objeto.creadororiginal = document.creador;
                                } else {
                                    objeto.creadororiginal = document.creadororiginal;
                                }

                                let guardar = new IGTMSchema(objeto)
                                guardar.save((errorr, newdocument) => {
                                    if (errorr) {
                                        return res.json({
                                            exe: false,
                                            errorr
                                        })
                                    }

                                    _.each(fotos, (fto) => {
                                        let miFoto = new IGTMSFotoschema({
                                            ruta: fto.ruta,
                                            nombre: fto.nombre,
                                            mime: fto.mime,
                                            creador: req.usuario._id,
                                            publicacion: newdocument._id,
                                        })
                                        miFoto.save((erorr, newdocument) => {
                                            if (erorr) {
                                                return res.json({
                                                    exe: false,
                                                    erorr
                                                })
                                            }

                                        })
                                    })

                                    return res.json({
                                        exe: true,
                                        response: newdocument
                                    })
                                })


                            } else {
                                return res.json({
                                    exe: false,
                                    mensaje: 'No tiene archivos'
                                })
                            }
                        })

                }
            }
        })
})



router.post('/igtm/upload', [verificarToken], (req, res) => {
    const _id = req.get('x-idpublicacion');
    const final = req.get('x-final');
    const cont = req.get('x-cont');
    const historia = req.get('x-historia');

    console.log(_id, final, cont, historia, 'DATOS imagen');

    if (!req.files) {
        return res.json({
            exe: false,
            error: 'No seleccionó nada'
        })
    } else {
        let file = req.files.archivo;
        let nameSecret = uniqid() + moment().tz('America/Bogota').format('YYYYMMDDHHmmss') + file.name;
        let nameConvert = uniqid() + moment().tz('America/Bogota').format('YYYYMMDDHHmmss') + _id + '.mp4';
        console.log(nameSecret, ' Toosle');
        file.mv(path.resolve(__dirname, '../../server/public/11927613401/', nameSecret), async(errFile) => {
            if (errFile) {
                console.log(errFile, 'Error')
                return res.json({
                    exe: false,
                    error: errFile
                })
            }

            let mime = file.mimetype;

            console.log('Antes', mime);

            if (mime.includes('image') || mime.includes('Image')) {
                console.log('Despues')
                if (historia == 'true') {
                    const media = new IGTMSFotoschema({
                        ruta: nameSecret,
                        nombre: file.name,
                        mime: file.mimetype,
                        creador: req.usuario._id,
                        historia: _id,
                        cont: cont,
                        fecha: moment().utc()
                    })

                    media.save((err, media) => {
                        if (err) {
                            return res.json({
                                exe: false,
                                error: err
                            })
                        }

                        if (final) {
                            IGTMSHistoriachema.findByIdAndUpdate(_id, { publicada: true }, { new: true })
                                .exec((error, publicacion) => {
                                    if (error) {
                                        return res.json({
                                            exe: false,
                                            error
                                        })
                                    }

                                    console.log(publicacion, publicacion)


                                    let miNotificacion = new Notificacion();

                                    if (publicacion.etiquetas.length > 0) {
                                        const usuariosExtraidos = publicacion.etiquetas.map((val) => {
                                            return val.usuarioID;
                                        });

                                        const usuariosExtraidos2 = publicacion.etiquetas.map((val) => {
                                            return val._id;
                                        });

                                        miNotificacion.createNotificaionOne({ tipo: "Historia", adicional: { id: igtm._id } }, { en: `@${req.usuario.nombreusuario} te etiquetó en una historia`, es: `@${req.usuario.nombreusuario} te etiquetó en una historia` }, { en: `Notificación`, es: `Notificación` }, usuariosExtraidos, { en: ``, es: `` });

                                        _.each(usuariosExtraidos2, async(seg) => {
                                            await miNotificacion.CrearNotificacionApp({
                                                creador: req.usuario._id,
                                                rutaApp: '/assets/Historias.png',
                                                mensaje: `@${req.usuario.nombreusuario} te etiquetó en una historia`,
                                                titulo: 'Notificación',
                                                tipo: 'Historia',
                                                fecha: moment().utc(),
                                                data: { id: igtm._id },
                                                destino: seg
                                            })
                                        })

                                        return res.json({
                                            exe: true,
                                            response: publicacion,
                                        })

                                    } else {
                                        return res.json({
                                            exe: true,
                                            response: publicacion
                                        })

                                    }




                                })
                        }

                    })

                } else {
                    const media = new IGTMSFotoschema({
                        ruta: nameSecret,
                        nombre: file.name,
                        mime: file.mimetype,
                        creador: req.usuario._id,
                        publicacion: _id,
                        cont: cont,
                        fecha: moment().utc()
                    })

                    media.save((err, media) => {
                        if (err) {
                            return res.json({
                                exe: false,
                                error: err
                            })
                        }

                        if (final) {
                            IGTMSchema.findByIdAndUpdate(_id, { publicada: true }, { new: true })
                                .exec((error, publicacion) => {
                                    if (error) {
                                        return res.json({
                                            exe: false,
                                            error
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

                                                miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: publicacion._id } }, { en: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas`, es: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas` }, { en: `Notificación`, es: `Notificación` }, seguidos, { en: ``, es: `` })

                                                _.each(seguidos2, async(seg) => {
                                                    await miNotificacion.CrearNotificacionApp({
                                                        creador: req.usuario._id,
                                                        rutaApp: '/assets/Video.png',
                                                        mensaje: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas`,
                                                        titulo: 'Notificación',
                                                        tipo: 'Publicacion',
                                                        fecha: moment().utc(),
                                                        data: { id: publicacion._id },
                                                        destino: seg
                                                    })
                                                })
                                                return res.json({
                                                    exe: true,
                                                    response: publicacion
                                                })
                                            } else {
                                                return res.json({
                                                    exe: true,
                                                    response: publicacion
                                                })
                                            }

                                        })


                                })
                        }

                    })

                }
            } else {

                return res.json({
                    exe: true,
                    fase: true,
                    response: {
                        ruta: nameSecret,
                        nuevo: nameConvert,
                        nombre: file.name,
                        mime: file.mimetype,
                        cont: cont,
                        creador: req.usuario._id,
                    }
                })
            }
        })
    }
})


router.put('/igtm/fotos/leer/', [verificarToken], (req, res) => {
    const body = req.body;

    console.log(typeof body.historia, 'historia')

    if (body.historia == 'true') {
        IGTMSFotoschema.find({ historia: body.id })
            .lean()
            .sort({ cont: 1 })
            .exec((err, igtm) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                console.log(igtm)

                return res.json({
                    exe: true,
                    response: igtm
                })
            })
    } else {
        IGTMSFotoschema.find({ publicacion: body.id })
            .lean()
            .sort({ cont: 1 })
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
    }
})


router.put('/igtm/publicacion/seguidos/', [verificarToken], (req, res) => {
    const body = req.body;

    SeguidosSchema.find({ usuarioEmisor: req.usuario._id, estado: 'aceptado' })
        .lean()
        .populate('usuarioReceptor')
        .exec((err, igtm) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }


            let seguidos = igtm.map((item) => {
                return item.usuarioReceptor._id
            });

            seguidos.push(req.usuario._id)

            IGTMSchema.find({ creador: { $in: seguidos }, publicada: true })

            .populate('creador')
                .populate('etiquetas')
                .populate('creadororiginal')
                .populate('creadortemporal')
                .sort({ _id: -1 })
                .limit(10)
                .lean()
                .exec((error, publicaciones) => {
                    if (error) {
                        return res.json({
                            exe: false,
                            error
                        })
                    }

                    return res.json({
                        exe: true,
                        response: publicaciones,
                        si: true
                    })


                })


        })
})





router.put('/igtm/historias/seguidos/', [verificarToken], (req, res) => {
    const body = req.body;

    SeguidosSchema.find({ usuarioEmisor: req.usuario._id, estado: 'aceptado' })
        .lean()
        .populate('usuarioReceptor')
        .exec((err, igtm) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            let seguidos = igtm.map((item) => {
                return item.usuarioReceptor._id
            });

            seguidos.unshift(req.usuario._id)
            let historiasAgrupadas = [];
            let num = seguidos.length;

            console.log(seguidos);

            seguidos.forEach(async(item) => {

                await new Promise((resolve, reject) => {
                    IGTMSHistoriachema.find({ creador: item, publicada: true })

                    .populate('creador')
                        .populate('etiquetas')
                        .sort({ _id: 1 })
                        .lean()
                        .exec((error, historias) => {
                            if (error) {
                                historiasAgrupadas.push(false)
                            }

                            historiasAgrupadas.push(historias)

                            num = num - 1;
                            resolve(true)

                        })

                });

                if (num == 0) {
                    console.log('Entramos al 0', historiasAgrupadas)
                    return res.json({
                        exe: true,
                        response: historiasAgrupadas
                    })
                }


            })




        })
})



router.put('/igtm/megusta/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body.id;
    if (body.tipo === 'megusta') {
        const megusta = new IGTMmeGustaSchema({
            creador: req.usuario._id,
            publicacion: _id,
            fecha: moment().utc()
        })

        megusta.save(async(err, igtm) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            console.log(body.creador);

            let miNotificacion = new Notificacion();

            miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: _id } }, { en: `@${req.usuario.nombreusuario} le gusta tu publicación`, es: `@${req.usuario.nombreusuario} le gusta tu publicación` }, { en: `Notificación`, es: `Notificación` }, [body.creador.usuarioID], { en: ``, es: `` })

            await miNotificacion.CrearNotificacionApp({
                creador: req.usuario._id,
                rutaApp: '/assets/Video.png',
                mensaje: `@${req.usuario.nombreusuario} le gusta tu publicación`,
                titulo: 'Notificación',
                tipo: 'Publicacion',
                fecha: moment().utc(),
                data: { id: _id },
                destino: body.creador._id
            })

            return res.json({
                exe: true,
            })
        })

    } else if (body.tipo === 'leer') {
        IGTMmeGustaSchema.find({ publicacion: _id })
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

        IGTMmeGustaSchema.findOneAndRemove({ $and: [{ publicacion: _id }, { creador: req.usuario._id }] })
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
                })
            })

    }


})

// Comentarios

router.post('/igtm/comentarios/', [verificarToken], (req, res) => {
    const _id = req.body._id;

    if (req.body.tipo === 'nuevo') {
        const Comentario = new IGTMmeComentarioSchema({
            creador: req.usuario._id,
            comentario: req.body.comentario,
            publicacion: _id,
            fecha: moment().utc()
        })
        Comentario.populate('creador', (err, comentario) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }
            comentario.save((error, ok) => {
                if (error) {
                    return res.json({
                        exe: false,
                        response: comentario
                    })
                }

                return res.json({
                    exe: true,
                    response: comentario
                })
            })


        })
    } else if (req.body.tipo === 'respuesta') {
        IGTMmeComentarioSchema.findOne({ _id: req.body.padre })
            .populate('hijos.nombre')
            .populate('creador')
            .lean()
            .exec((err, comentarioData) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                const comentarios = comentarioData.hijos;

                comentarios.push({ comentario: req.body.comentario, nombre: req.usuario._id });

                IGTMmeComentarioSchema.findOneAndUpdate({ _id: req.body.padre }, { hijos: comentarios }, { new: true })

                .populate('creador')
                    .populate('hijos.nombre')
                    .lean()
                    .exec((error, comentarioEditado) => {
                        if (error) {
                            return res.json({
                                exe: false,
                                error
                            })
                        }

                        return res.json({
                            exe: true,
                            response: comentarioEditado
                        })
                    })

            })
    } else if (req.body.tipo === 'leer') {
        IGTMmeComentarioSchema.find({ publicacion: _id })
            .populate('creador')
            .populate('hijos.nombre')
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
    }
})


router.put('/igtm/leer/', [verificarToken], (req, res) => {
    const body = req.body;

    IGTMSchema.find({ creador: req.usuario._id })
        .populate('creador')
        .populate('etiquetas')
        .populate('creadororiginal')
        .populate('creadortemporal')
        .sort({ _id: -1 })
        .limit(10)
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
                response: igtm,
                bien: 'bien'
            })
        })
});


router.put('/igtm/leer/usuario', [verificarToken], (req, res) => {
    const body = req.body;

    IGTMSchema.find({ creador: body._id })
        .populate('creador')
        .populate('etiquetas')
        .populate('creadororiginal')
        .populate('creadortemporal')
        .sort({ _id: -1 })
        .limit(10)
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
                response: igtm,
                bien: 'bien'
            })
        })
})





router.put('/igtm/leer/uno', [verificarToken], (req, res) => {
    const body = req.body;

    IGTMSchema.findOne({ _id: body.id })
        .populate('creador')
        .populate('etiquetas')
        .populate('creadororiginal')
        .populate('creadortemporal')
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
                response: igtm,
                bien: 'bien'
            })
        })
})

module.exports = router;