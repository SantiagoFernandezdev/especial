const express = require('express');
const router = express.Router();
const EntradasSchema = require('../../Models/Inventarios/Entradas');
const SalidasSchema = require('../../Models/Inventarios/Salidas');
const UsuariosSchema = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');
const Inventarios = require('../../Classes/Inventarios/Inventarios');
const TipoSchemaIVT = require('../../Models/Inventarios/Tipos');
const Notificacion = require('../../Classes/Notificathion/Notification');
const _ = require('underscore');
const { sortBy } = require('underscore');
let miNotificacion = new Notificacion();
const moment = require('moment-timezone');
const mongoose = require('mongoose')

router.post('/ivt/entradas/', [verificarToken], (req, res) => {
    try {
        const body = req.body;
        let objeto = {
            producto: body.producto,
            nombre: body.nombre,
            codigo: body.codigo,
            nombrecreador: req.usuario.nombrecompleto,
            creador: req.usuario._id,
            cantidad: body.cantidad,
            precio: body.precio,
            total: body.total,
            origenextra: body.origenextra,
            origen: body.origen,
            inventario: body.ivt,
            fecha: moment().utc()
        };
        if (body.origen === 'ivt') {
            objeto.origeniv = body.inventario;
        }

        const entrada = new EntradasSchema(objeto)

        entrada.save(async(err, ivtProducto) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            const ivt = new Inventarios();
            console.log(body)

            await ivt.existencia(body.producto, body.cantidad, 'entrada');
            await ivt.crearMovimiento({ mensaje: body.mensaje, _id: req.usuario._id, inventario: body.ivt, fecha: moment().utc() });

            TipoSchemaIVT.findOne({ _id: body.ivt })
                .populate('creador')
                .lean()
                .exec((error, ivtInfo) => {
                    if (error) {
                        return res.json({
                            exe: true,
                            error: true,
                            response: ivtProducto
                        })
                    }


                    miNotificacion.createNotificaionOne({ tipo: "EntradaIVT", adicional: { ivt: body.ivt } }, { en: `Nueva Entrada del producto ${body.nombre}, por ${body.cantidad} unidades, Precio Unitario: ${body.precio}`, es: `Nueva Entrada del producto ${body.nombre}, por ${body.cantidad} unidades, Precio Unitario: ${body.precio}` }, { en: `Nueva Entrada - Inventario!`, es: `Nueva Entrada - Inventario!` }, [ivtInfo.creador.usuarioID], { en: ``, es: `` })

                    _.each(ivtInfo.accesos, async(acceso) => {
                        console.log(acceso)
                        await miNotificacion.CrearNotificacionApp({
                            creador: '',
                            rutaApp: '/assets/Entradas.png',
                            mensaje: `Nueva Entrada del producto ${body.nombre}, por ${body.cantidad} unidades`,
                            titulo: 'Nueva Entrada - Inventario!',
                            tipo: 'EntradaIVT',
                            data: { id: body.ivt },
                            fecha: moment().utc(),
                            destino: acceso
                        })
                    })


                    return res.json({
                        exe: true,
                        response: ivtProducto
                    })
                })



        })
    } catch (error) {
        console.log('Error', error)
        return res.json({
            exe: false,
            error
        })
    }
})

router.put('/ivt/entradas/', [verificarToken], (req, res) => {
    const ivt = req.body.ivt;
    const partida = req.body.partida;


    if (req.body.patron === '' || !req.body.patron) {
        EntradasSchema.find({ inventario: ivt })
            .skip(partida)
            .populate('producto')
            .populate('origenivt')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, entradas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: entradas
                })
            })
    } else {

        EntradasSchema.find({ $and: [{ inventario: ivt }, { $or: [{ codigo: { $regex: req.body.patron, $options: 'i' } }, { nombre: { $regex: req.body.patron, $options: 'i' } }, { nombrecreador: { $regex: req.body.patron, $options: 'i' } }] }] })
            .skip(partida)
            .populate('producto')
            .populate('origenivt')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, entradas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: entradas
                })
            })

    }


})

router.put('/ivt/entradas/buscar/', [verificarToken], (req, res) => {
    const body = req.body;

    const desde = moment(body.desde).utc()
    const hasta = moment(body.hasta).utc()



    if (body.patron === '' || !body.patron) {
        EntradasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }] })
            .skip(body.partida)
            .populate('producto')
            .populate('origenivt')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, entradas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: entradas,
                    desde,
                    hasta
                })

            })
    } else {
        EntradasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { $or: [{ codigo: { $regex: body.patron, $options: 'i' } }, { nombre: { $regex: body.patron, $options: 'i' } }, { nombrecreador: { $regex: body.patron, $options: 'i' } }] }] })
            .skip(body.partida)
            .populate('producto')
            .populate('origenivt')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, entradas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: entradas
                })

            })
    }



})



router.put('/ivt/entradas/buscar/patron/', [verificarToken], (req, res) => {
    const body = req.body;
    const tipo = body.tipo;


    if (tipo === 'filtro') {
        const desde = moment(body.desde).utc()
        const hasta = moment(body.hasta).utc()




        EntradasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { $or: [{ codigo: { $regex: body.patron, $options: 'i' } }, { nombre: { $regex: body.patron, $options: 'i' } }, , { nombrecreador: { $regex: body.patron, $options: 'i' } }] }] })
            .populate('producto')
            .populate('origenivt')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, entradas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: entradas,
                    desde,
                    hasta
                })

            })

    } else {
        EntradasSchema.find({ $or: [{ codigo: { $regex: body.patron, $options: 'i' } }, { nombre: { $regex: body.patron, $options: 'i' } }, { nombrecreador: { $regex: body.patron, $options: 'i' } }] })

        .populate('producto')
            .populate('origenivt')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, entradas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: entradas
                })

            })
    }


})

router.put('/ivt/mov/', [verificarToken], (req, res) => {
    const body = req.body;
    const desde = moment(body.desde).utc()
    let hasta = body.hasta;
    if (!hasta) {
        hasta = moment().utc()
    } else {
        hasta = moment(body.hasta).utc()
    }


    EntradasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { inventario: body.ivt }] })
        .lean()
        .exec((err, docs) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            let cantidad = 0;

            docs.forEach((item) => {
                cantidad = cantidad + item.cantidad;
            })

            SalidasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { inventario: body.ivt }] })
                .lean()
                .exec((error, docs2) => {
                    if (error) {
                        return res.json({
                            exe: true,
                            paso: true,
                            entradas: cantidad,
                            error
                        })
                    }

                    let cantidad2 = 0;


                    docs2.forEach((item) => {
                        cantidad2 = cantidad2 + item.cantidad;
                    })

                    return res.json({
                        exe: true,
                        entradas: cantidad,
                        salidas: cantidad2,
                        desde,
                        hasta
                    })

                })

        })


})


router.put('/ivt/mov/salidas/', [verificarToken], (req, res) => {
    const body = req.body;
    const desde = moment(body.desde).utc()
    let hasta = body.hasta;
    if (!hasta) {
        hasta = moment().utc()
    } else {
        hasta = moment(body.hasta).utc()
    }



    SalidasSchema.aggregate().match({ $and: [{ inventario: new mongoose.Types.ObjectId(body.ivt) }, { fecha: { $gte: new Date(desde) } }, { fecha: { $lte: new Date(hasta) } }] }).group({
        _id: { inventario: '$inventario', nombre: '$nombre' },
        total: { $sum: '$cantidad' }
    }).allowDiskUse(true).sort({ 'total': -1 }).limit(5).exec((error, doc) => {
        if (error) {
            return res.json({
                exe: false,
                error
            })
        }

        return res.json({
            exe: true,
            response: doc,
            ivt: body.ivt,
            hasta,
            desde
        })
    })


    // SalidasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { inventario: body.ivt }] })
    //     .lean()
    //     .exec((error, docs2) => {




    //         let cantidad2 = 0;


    //         docs2.forEach((item) => {
    //             cantidad2 = cantidad2 + item.cantidad;
    //         })

    //         return res.json({
    //             exe: true,
    //             salidas: cantidad2,
    //             desde,
    //             hasta
    //         })

    //     })


})





module.exports = router;