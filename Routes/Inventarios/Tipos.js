const express = require('express');
const router = express.Router();
const TipoSchema = require('../../Models/Inventarios/Tipos');
const ConfigSchema = require('../../Models/Inventarios/Configuracion');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');

router.post('/ivt/tipo/', [verificarToken], (req, res) => {
    const body = req.body;

    const ivTipo = new TipoSchema({
        name: body.nombre,
        creador: req.usuario._id,
        accesos: [req.usuario._id],
        tipo: body.tipo,
        fecha: moment().utc()
    })

    ivTipo.save((err, ivt) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        const ivtConfig = new ConfigSchema({
            creador: req.usuario._id,
            inventario: ivt._id,
            fechadesde: moment().utc(),
            fechahasta: ''
        })

        ivtConfig.save((error, ok) => {
            if (error) {
                TipoSchema.findByIdAndDelete(ivt._id, (errr, doc) => {
                    if (errr) {
                        return res.json({
                            exe: false,
                            error
                        })
                    }

                    return res.json({
                        exe: true,
                        response: ivt
                    })
                })

            }

            return res.json({
                exe: true,
                response: ivt
            })

        })


    })
})


router.put('/ivt/cierre/', [verificarToken], (req, res) => {
    const body = req.body;
    const ivt = body.ivt;
    let fecha = moment().utc();


    console.log(fecha, moment(new Date()).utc(), 'Fechas', moment.utc())

    const nombre = body.nombre;

    TipoSchema.findOneAndUpdate({ _id: ivt }, { name: nombre }, (errivt, docivt) => {
        if (errivt) {
            return res.json({
                exe: false,
                errivt
            })
        }

        if (body.exe) {
            ConfigSchema.find({ inventario: ivt })
                .limit(1)
                .sort({ _id: -1 })
                .lean()
                .exec((err, doc) => {
                    if (err) {
                        return res.json({
                            exe: false,
                            err
                        })
                    }
                    console.log(doc)

                    if (doc.length > 0) {
                        if (doc[0].fechahasta === '') {
                            const _id = doc[0]._id;

                            ConfigSchema.findByIdAndUpdate(_id, { fechahasta: fecha }, { new: true })
                                .lean()
                                .exec((error, docs) => {
                                    if (error) {
                                        return res.json({
                                            exe: false,
                                            error
                                        })
                                    }

                                    const nuevo = new ConfigSchema({
                                        fechadesde: moment().utc(),
                                        inventario: ivt,
                                        creador: req.usuario._id,
                                        fechahasta: ''
                                    })

                                    nuevo.save((malo, nuevo) => {
                                        if (malo) {
                                            return res.json({
                                                exe: false,
                                                err: malo
                                            })
                                        }

                                        return res.json({
                                            exe: true,
                                            response: nuevo,
                                            fecha
                                        })
                                    })
                                })
                        }
                    } else {
                        return res.json({
                            exe: false,
                            nv: false
                        })
                    }
                })

        } else {
            return res.json({
                exe: true,
                response: docivt
            })
        }


    })

})



router.get('/ivt/tipo/', [verificarToken], (req, res) => {
    const body = req.body;

    TipoSchema.find({ accesos: { $in: [req.usuario._id] } })
        .lean()
        .sort({ _id: -1 })
        .exec((err, ivts) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: ivts
            })
        })
})


router.put('/ivt/tipo/almacen/', [verificarToken], (req, res) => {
    const body = req.body;

    TipoSchema.find({ creador: body.creador })
        .lean()
        .sort({ _id: -1 })
        .exec((err, ivts) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: ivts
            })
        })
})


router.put('/ivt/tipo/accesos/', [verificarToken], (req, res) => {
    const id = req.body.id;
    const estado = req.body.estado;
    console.log(estado)
    TipoSchema.findOne({ _id: req.body._id })
        .lean()
        .exec((err, ivt) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            if (ivt) {

                const _id = ivt._id;
                let accesos = ivt.accesos;

                if (estado) {
                    accesos.push(id);
                } else {
                    accesos = ivt.accesos.filter((item) => item !== id);
                }

                TipoSchema.findByIdAndUpdate(_id, { accesos: accesos })
                    .lean()
                    .exec((error, iv) => {
                        if (error) {
                            return res.json({
                                exe: false,
                                error
                            })
                        }

                        return res.json({
                            exe: true,
                            response: iv
                        })
                    })
            } else {
                return res.json({
                    exe: false,
                    err: 'No se pudo encontrar'
                })
            }


        })
})



router.get('/ivt/tipo/uno/', [verificarToken], (req, res) => {
    TipoSchema.findOne({ _id: req.get('x-id') })
        .lean()
        .exec((err, ivt) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: ivt
            })


        })
})




router.put('/ivt/cierre/buscar/', [verificarToken], (req, res) => {
    const body = req.body;
    const ivt = body.ivt;
    ConfigSchema.find({ inventario: ivt })
        .lean()
        .exec((err, doc) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }


            return res.json({
                exe: true,
                response: doc
            })

        });
})

module.exports = router;