const express = require('express');
const router = express.Router();
const ProductosSchema = require('../../Models/Inventarios/Productos');
const EntradasSchema = require('../../Models/Inventarios/Entradas');
const SalidasSchema = require('../../Models/Inventarios/Salidas');
const UsuariosSchema = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');
const mongoose = require('mongoose');

router.post('/ivt/productos/', [verificarToken], (req, res) => {
    const body = req.body;

    const producto = new ProductosSchema({
        nombre: body.nombre,
        creador: req.usuario._id,
        codigo: body.codigo,
        categoria: body.categoria,
        proveedor: body.proveedor,
        inventario: body.inventario,
        limite: body.limite,
        fecha: moment().utc()
    })

    producto.save((err, ivtProducto) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtProducto
        })
    })
})

router.put('/ivt/productos/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body._id;

    ProductosSchema.findByIdAndUpdate(_id, {
        nombre: body.nombre,
        codigo: body.codigo,
        categoria: body.categoria,
        proveedor: body.proveedor,
        limite: body.limite
    }, { new: true }, (err, ivtProducto) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtProducto
        })
    })
})



router.put('/ivt/productos/buscarivt/', [verificarToken], (req, res) => {
    const body = req.body;
    ProductosSchema.find({ $and: [{ inventario: body.id }, { $or: [{ nombre: { $regex: body.patron, $options: 'i' } }, { codigo: { $regex: body.patron, $options: 'i' } }] }] })
        .lean()
        .limit(10)
        .exec((err, ivtProducto) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: ivtProducto
            })
        })
})


router.put('/ivt/productos/buscar/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body._id;

    ProductosSchema.find({ $or: [{ nombre: { $regex: body.patron, $options: 'i' } }, { codigo: { $regex: body.patron, $options: 'i' } }], inventario: _id })
        .lean()
        .limit(10)
        .sort({ nombre: 1 })
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
})

router.put('/ivt/productos/agotados/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body._id;

    ProductosSchema.find({ inventario: _id, existencia: 0 })
        .lean()
        .sort({ nombre: 1 })
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
})


router.put('/ivt/productos/proximos/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body._id;

    ProductosSchema.aggregate().match({ $and: [{ inventario: _id, existencia: { $lte: '$limite' } }] })
        .sort({ nombre: 1 })
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
})


router.delete('/ivt/productos/', [verificarToken], (req, res) => {
    const _id = req.get('x-id');

    ProductosSchema.findByIdAndUpdate(_id, { eliminado: true }, { new: true }, (err, ivtProducto) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtProducto
        })
    })
})


router.put('/ivt/productos/filtro/', [verificarToken], (req, res) => {

    const _id = req.body.id;
    const desde = req.body.desde;

    if (req.body.patron) {
        ProductosSchema.find({ inventario: _id, $or: [{ nombre: { $regex: req.body.patron, $options: 'i' } }, { codigo: { $regex: req.body.patron, $options: 'i' } }] })
            .lean()
            .skip(desde)
            .limit(5)
            .sort({ nombre: 1 })
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: productos,
                    desde,
                    tipo: 1

                })
            })
    } else {
        ProductosSchema.find({ inventario: _id })
            .lean()
            .skip(desde)
            .limit(5)
            .sort({ nombre: 1 })
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: productos,
                    desde,
                    tipo: 2
                })
            })
    }

})





router.put('/ivt/productos/filtro/estadistica/', [verificarToken], (req, res) => {

    const _id = req.body.id;
    const desde = req.body.desde;
    const body = req.body;

    const desdef = moment(body.desdef).utc()
    let hasta = body.hasta;
    if (!hasta) {
        hasta = moment().utc()
    } else {
        hasta = moment(body.hasta).utc()
    }

    if (req.body.patron) {

        ProductosSchema.aggregate([{
                    $match: {
                        inventario: new mongoose.Types.ObjectId(_id),
                        $or: [{ nombre: { $regex: req.body.patron, $options: 'i' } }, { codigo: { $regex: req.body.patron, $options: 'i' } }]
                    }
                },
                {
                    $lookup: {
                        from: 'ivtentradas',
                        localField: '_id',
                        foreignField: 'producto',
                        as: 'entradas'
                    }
                },

                {
                    $lookup: {
                        from: 'ivtsalidas',
                        localField: '_id',
                        foreignField: 'producto',
                        as: 'salidas'
                    }
                }
            ]).match({ $or: [{ $and: [{ 'salidas.fecha': { $gte: new Date(desdef) } }, { 'salidas.fecha': { $lte: new Date(hasta) } }] }, { $and: [{ 'entradas.fecha': { $gte: new Date(desdef) } }, { 'entradas.fecha': { $lte: new Date(hasta) } }] }] }).group({
                _id: { nombre: '$nombre', existencia: '$existencia', salidas: '$salidas', entradas: '$entradas' }
            })
            .allowDiskUse(true)
            .skip(desde)
            .limit(5)
            .sort({ '_id.nombre': 1 })
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }


                return res.json({
                    exe: true,
                    response: productos,

                })

            })
    } else {
        ProductosSchema.aggregate([{
                    $match: {
                        inventario: new mongoose.Types.ObjectId(_id)
                    }
                },
                {
                    $lookup: {
                        from: 'ivtentradas',
                        localField: '_id',
                        foreignField: 'producto',
                        as: 'entradas'
                    }
                },

                {
                    $lookup: {
                        from: 'ivtsalidas',
                        localField: '_id',
                        foreignField: 'producto',
                        as: 'salidas'
                    }
                }
            ]).match({ $or: [{ $and: [{ 'salidas.fecha': { $gte: new Date(desdef) } }, { 'salidas.fecha': { $lte: new Date(hasta) } }] }, { $and: [{ 'entradas.fecha': { $gte: new Date(desdef) } }, { 'entradas.fecha': { $lte: new Date(hasta) } }] }] }).group({
                _id: { nombre: '$nombre', existencia: '$existencia', salidas: '$salidas', entradas: '$entradas' }
            })
            .allowDiskUse(true)
            .skip(desde)
            .limit(5)
            .sort({ '_id.nombre': 1 })
            .exec((err, productos) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }


                return res.json({
                    exe: true,
                    response: productos,
                    _id,
                    hasta,
                    desdef

                })

            })
    }

})




module.exports = router;