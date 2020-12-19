const express = require('express');
const router = express.Router();
const SalidasSchema = require('../../Models/Inventarios/Salidas');
const EntradasSchema = require('../../Models/Inventarios/Entradas');
const UsuariosSchema = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');
const Inventarios = require('../../Classes/Inventarios/Inventarios');
const TipoSchemaIVT = require('../../Models/Inventarios/Tipos');
const Notificacion = require('../../Classes/Notificathion/Notification');
const _ = require('underscore');
let miNotificacion = new Notificacion();
const moment = require('moment-timezone');

router.post('/ivt/salidas/', [verificarToken], (req, res) => {
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
            destino: body.destino,
            inventario: body.ivt,
            fecha: moment().utc()
        };
        if (body.destinoivt !== '') {
            objeto.destinoivt = body.destinoivt;
            objeto.prodDestino = body.prodDestino;
            objeto.mensaje2 = body.mensaje2
        }

        const salida = new SalidasSchema(objeto)

        salida.save(async(err, ivtProducto) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            const ivt = new Inventarios();
            // console.log(body)

            if (body.destinoivt !== '') {
                await ivt.existenciaIVT(body.producto, body.cantidad, body.prodDestino);
                await ivt.crearMovimiento({ mensaje: body.mensaje2, _id: req.usuario._id, inventario: body.destinoivt, fecha: moment().utc() });

                let objeto2 = {
                    producto: body.producto2,
                    nombre: body.nombre2,
                    codigo: body.codigo2,
                    nombrecreador: req.usuario.nombrecompleto,
                    creador: req.usuario._id,
                    cantidad: body.cantidad,
                    precio: body.precio,
                    total: body.total,
                    origenivt: body.ivt,
                    inventario: body.destinoivt,
                    fecha: moment().utc()
                };

                const entrada = new EntradasSchema(objeto2)

                entrada.save((erpr, ivtProducto) => {
                    if (erpr) {
                        return res.json({
                            exe: false,
                            erpr,
                            message: 'errror'
                        })
                    }

                    // console.log(ivtProducto)

                });
            } else {
                await ivt.existencia(body.producto, body.cantidad, 'salida');

            }

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


                    miNotificacion.createNotificaionOne({ tipo: "SalidaIVT", adicional: { ivt: body.ivt } }, { en: `Nueva Salida del producto ${body.nombre}, por ${body.cantidad} unidades, Precio Unitario: ${body.precio}`, es: `Nueva Salida del producto ${body.nombre}, por ${body.cantidad} unidades, Precio Unitario: ${body.precio}` }, { en: `Nueva Salida - Inventario!`, es: `Nueva Salida - Inventario!` }, [ivtInfo.creador.usuarioID], { en: ``, es: `` })

                    _.each(ivtInfo.accesos, async(acceso) => {
                        // console.log(acceso)
                        await miNotificacion.CrearNotificacionApp({
                            creador: '',
                            rutaApp: '/assets/Salidas.png',
                            mensaje: `Nueva Salida del producto ${body.nombre}, por ${body.cantidad} unidades`,
                            titulo: 'Nueva Salida - Inventario!',
                            tipo: 'SalidaIVT',
                            data: { id: body.ivt, creador: body.creador },
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
        // console.log('Error', error)
        return res.json({
            exe: false,
            error
        })
    }
})

router.put('/ivt/salidas/', [verificarToken], (req, res) => {
    const ivt = req.body.ivt;
    const partida = req.body.partida;


    if (req.body.patron === '' || !req.body.patron) {
        SalidasSchema.find({ inventario: ivt })
            .skip(partida)
            .populate('producto')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, salidas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: salidas
                })
            })
    } else {

        SalidasSchema.find({ $and: [{ inventario: ivt }, { $or: [{ codigo: { $regex: req.body.patron, $options: 'i' } }, { nombre: { $regex: req.body.patron, $options: 'i' } }, { nombrecreador: { $regex: req.body.patron, $options: 'i' } }] }] })
            .skip(partida)
            .populate('producto')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, salidas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: salidas
                })
            })

    }


})

router.put('/ivt/salidas/buscar/', [verificarToken], (req, res) => {
    const body = req.body;

    const desde = moment(body.desde).utc()
    const hasta = moment(body.hasta).utc()


    // console.log(desde, hasta, body.patron)

    if (body.patron === '' || !body.patron) {
        SalidasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }] })
            .skip(body.partida)
            .populate('producto')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, salidas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: salidas
                })

            })
    } else {
        SalidasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { $or: [{ codigo: { $regex: body.patron, $options: 'i' } }, { nombre: { $regex: body.patron, $options: 'i' } }, { nombrecreador: { $regex: body.patron, $options: 'i' } }] }] })
            .skip(body.partida)
            .populate('producto')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, salidas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: salidas
                })

            })
    }



})



router.put('/ivt/salidas/buscar/patron/', [verificarToken], (req, res) => {
    const body = req.body;
    const tipo = body.tipo;


    if (tipo === 'filtro') {
        const desde = moment(body.desde).utc()
        const hasta = moment(body.hasta).utc()


        SalidasSchema.find({ $and: [{ fecha: { $gte: desde } }, { fecha: { $lte: hasta } }, { $or: [{ codigo: { $regex: body.patron, $options: 'i' } }, { nombre: { $regex: body.patron, $options: 'i' } }, , { nombrecreador: { $regex: body.patron, $options: 'i' } }] }] })
            .populate('producto')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, salidas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: salidas
                })

            })

    } else {
        SalidasSchema.find({ $or: [{ codigo: { $regex: body.patron, $options: 'i' } }, { nombre: { $regex: body.patron, $options: 'i' } }, { nombrecreador: { $regex: body.patron, $options: 'i' } }] })

        .populate('producto')
            .populate('creador')
            .sort({ _id: -1 })
            .limit(10)
            .lean()
            .exec((err, salidas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: salidas
                })

            })
    }


})





module.exports = router;