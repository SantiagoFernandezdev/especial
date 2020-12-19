const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const { verificarToken } = require('./../../middleware/verificarToken');
const RecordatoriosSchema = require('../../Models/Recordatorio');

router.post('/recordatorios', [verificarToken], (req, res) => {
    const _id_creador = req.usuario._id;
    const body = req.body;

    console.log(body, _id_creador);

    const recordatorio = new RecordatoriosSchema({
        creador: _id_creador,
        tipo: body.tipo,
        destinatarios: body.destinos,
        informacion: body.informacion,
        frecuencia: body.frecuencia,
        repetir: body.repetir,
        repetirprograma: body.repetirprograma
    })

    recordatorio.save((err, data) => {
        if (err) {
            return res - json({
                exe: false,
                error: {
                    message: err
                }
            });
        }

        return res.json({
            exe: true,
            response: data
        })
    })
})

router.get('/recordatorios', [verificarToken], (req, res) => {
    const _id = req.usuario._id;

    RecordatoriosSchema.find({ creador: _id })
        .exec((err, documentos) => {
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
                response: documentos
            })
        })
})

router.get('/recordatorios/personas', [verificarToken], (req, res) => {
    const _id = req.usuario._id;

    RecordatoriosSchema.find({ visible: 'SI' })
        .populate('creador')
        .exec((err, documentos) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            let filtrado = [];

            documentos.forEach((item) => {
                item.destinatarios.forEach((dest) => {
                    if (dest.id === _id) {
                        filtrado.push(item);
                    }
                })
            });

            return res.json({
                exe: true,
                response: filtrado
            })
        })
})


router.delete('/recordatorios', [verificarToken], (req, res) => {
    const _id = req.get('x-id');

    RecordatoriosSchema.findByIdAndDelete(_id)
        .exec((err, documentos) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            return res.json({
                exe: true
            })
        })
})



router.put('/recordatorios', [verificarToken], (req, res) => {
    const _id = req.body._id;
    const body = req.body;

    console.log(body, _id);

    const objeto = {
        tipo: body.tipo,
        destinatarios: body.destinos,
        informacion: body.informacion,
        frecuencia: body.frecuencia,
        repetir: body.repetir,
        repetirprograma: body.repetirprograma,
        estado: 'primiparo'
    };

    RecordatoriosSchema.findByIdAndUpdate(_id, objeto, { new: true }, (err, data) => {
        if (err) {
            return res - json({
                exe: false,
                error: {
                    message: err
                }
            });
        }

        return res.json({
            exe: true,
            response: data
        })
    })
})

router.put('/recordatorios/personas', [verificarToken], (req, res) => {
    const _id = req.body._id;
    const body = req.body;

    console.log(body, _id);

    RecordatoriosSchema.find({ _id })
        .exec((error, documentos) => {
            if (error) {
                return res - json({
                    exe: false,
                    error: {
                        message: error
                    }
                });
            }

            if (documentos.length > 0) {
                const dest = documentos[0].destinatarios.filter((item) => item.id !== body.destino.id);

                dest.push(body.destino)

                RecordatoriosSchema.findByIdAndUpdate(_id, { destinatarios: dest }, { new: true }, (err, data) => {
                    if (err) {
                        return res - json({
                            exe: false,
                            error: {
                                message: err
                            }
                        });
                    }

                    return res.json({
                        exe: true,
                        response: data
                    })
                })

            }
        })


})


module.exports = router;