const express = require('express');
const router = express.Router();
const HojadeVida = require('../../Models/HojadeVida');
const HojadeVidaFotos = require('../../Models/MediaHoja');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');
const path = require('path');
const uniqid = require('uniqid');
const Notificacion = require('../../Classes/Notificathion/Notification');

router.post('/hoja', [verificarToken], (req, res) => {

    const body = req.body;
    const idusuario = body.usuario;;

    const hoja = new HojadeVida({
        idtaller: req.usuario._id,
        ntaller: req.usuario.nombrecompleto,
        nusuario: body.nusuario,
        placa: body.placa,
        tipo: 'hoja',
        fecha: moment().utc()
    });

    hoja.save((err, hojainfo) => {
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
            response: hojainfo
        })

    });
})




router.post('/hoja/upload', [verificarToken], (req, res) => {
    const _id = req.get('x-idhoja');
    const asunto = req.get('x-asunto');
    const tipo = req.get('x-tipo');

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
        file.mv(path.resolve(__dirname, '../../server/public/11927613402/', nameSecret), async(errFile) => {
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
                const media = new HojadeVidaFotos({
                    ruta: nameSecret,
                    nombre: file.name,
                    mime: file.mimetype,
                    creador: req.usuario._id,
                    asunto: asunto,
                    tipo: tipo,
                    hoja: _id,
                    fecha: moment().utc()
                })

                media.save((err, media) => {
                    if (err) {
                        return res.json({
                            exe: false,
                            error: err
                        })
                    }

                    return res.json({
                        exe: true,
                        response: media
                    })




                    // let miNotificacion = new Notificacion();

                    // miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: publicacion._id } }, { en: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas`, es: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas` }, { en: `Notificación`, es: `Notificación` }, seguidos, { en: ``, es: `` })

                    // _.each(seguidos2, async(seg) => {
                    //     await miNotificacion.CrearNotificacionApp({
                    //         creador: req.usuario._id,
                    //         rutaApp: '/assets/Video.png',
                    //         mensaje: `@${req.usuario.nombreusuario} acaba de publicar contenido, no te lo pierdas`,
                    //         titulo: 'Notificación',
                    //         tipo: 'Publicacion',
                    //         data: { id: publicacion._id },
                    //         destino: seg
                    //     })
                    // })

                })

            }
        })
    }
})

router.put('/hoja/datos', [verificarToken], (req, res) => {

    const _id = req.body.id;


    HojadeVida.findByIdAndUpdate(_id, { repuestos: req.body.repuestos, trabajos: req.body.trabajos }, { new: true }, (err, hojainfo) => {
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
            response: hojainfo
        })

    });
})



router.put('/hoja', [verificarToken], (req, res) => {
    const _id = req.body.id;

    HojadeVida.findOne({ cita: _id })
        .lean()
        .populate('cita')
        .exec((err, hoja) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: err
                })
            }

            return res.json({
                exe: true,
                response: hoja
            })
        })

})



router.put('/hoja/leer', [verificarToken], (req, res) => {
    const _id = req.body.id;

    HojadeVida.findOne({ _id: _id })
        .lean()
        .exec((err, hoja) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: err
                })
            }

            return res.json({
                exe: true,
                response: hoja
            })
        })

})

router.put('/hoja/fotos', [verificarToken], (req, res) => {
    const _id = req.body.id;

    HojadeVidaFotos.find({ hoja: _id })
        .lean()
        .exec((err, fotos) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: err
                })
            }

            return res.json({
                exe: true,
                response: fotos
            })
        })

})


router.put('/hoja/mios/', [verificarToken], (req, res) => {
    const body = req.body;
    let obj = undefined;

    if (req.usuario.role === 'TALLER_ROLE') {
        obj = {
            idtaller: req.usuario._id
        }
    } else if (req.usuario.role === 'USER_ROLE') {
        obj = {
            idusuario: req.usuario._id
        }
    }

    if (obj) {
        HojadeVida.find(obj)
            .populate('cita')
            .populate('idtaller')
            .populate('idusuario')

        .skip(body.desde)
            .limit(5)
            .sort({ _id: -1 })
            .lean()
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: productos
                })
            })
    } else {
        return res.json({
            exe: false
        })
    }


})


router.put('/hoja/buscar/', [verificarToken], (req, res) => {
    const body = req.body;

    if (req.usuario.role === 'TALLER_ROLE') {

        HojadeVida.find({ $and: [{ idtaller: req.usuario._id }, { nusuario: { $regex: body.patron, $options: 'i' } }] })
            .populate('cita')
            .populate('idtaller')
            .populate('idusuario')

        .skip(body.desde)
            .limit(5)
            .sort({ _id: -1 })
            .lean()
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: productos
                })
            })
    } else if (req.usuario.role === 'USER_ROLE') {
        HojadeVida.find({ $and: [{ idusuario: req.usuario._id }, { ntaller: { $regex: body.patron, $options: 'i' } }] })
            .populate('cita')
            .populate('idtaller')
            .populate('idusuario')

        .skip(body.desde)
            .limit(5)
            .sort({ _id: -1 })
            .lean()
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: productos
                })
            })
    }




})




module.exports = router;