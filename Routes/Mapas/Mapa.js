const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const { verificarToken } = require('./../../middleware/verificarToken');
const MapasSchema = require('../../Models/Mapas/Citas');
const MapasSedesSchema = require('../../Models/Mapas/Sede');

router.post('/mapas/cita', [verificarToken], (req, res) => {

    const body = req.body;

    const miMapa = new MapasSchema({
        creador: req.usuario._id,
        asunto: body.asunto,
        tipo: body.tipo,
        fecha: moment().utc()
    })

    miMapa.save((err, doc) => {
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
    })

})


router.put('/mapas/cita/traer', [verificarToken], (req, res) => {

    const body = req.body;

    MapasSchema.find({ $or: [{ creador: req.usuario._id }, { encargado: req.usuario._id }] })
        .sort({ _id: -1 })
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
        })

})

router.post('/mapas/sede/', [verificarToken], (req, res) => {

    const body = req.body;

    const miMapa = new MapasSedesSchema({
        creador: req.usuario._id,
        nombre: body.nombre,
        tipoNegocio: body.tipo,
        pais: body.pais,
        ciudad: body.ciudad,
        ubicacion: body.ubicacion,
        imagen: body.imagen,
        desde: body.desde,
        hasta: body.hasta,
        de: body.de,
        a: body.a,
        fecha: moment().utc()
    })

    miMapa.save((err, doc) => {
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
    })

})


router.put('/mapas/sede/traer/', [verificarToken], (req, res) => {

    MapasSedesSchema.find({ creador: req.usuario._id })
        .sort({ _id: -1 })
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
        })
})


router.put('/mapas/sede/editar/', [verificarToken], (req, res) => {

    const _id = req.body._id;
    const body = req.body;
    const obj = {
        nombre: body.nombre,
        tipoNegocio: body.tipo,
        pais: body.pais,
        ciudad: body.ciudad,
        ubicacion: body.ubicacion,
        desde: body.desde,
        hasta: body.hasta,
        de: body.de,
        a: body.a,
    }
    MapasSedesSchema.findByIdAndUpdate(_id, obj, { new: true })
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
        })
})

router.put('/mapas/sede/eliminar/', [verificarToken], (req, res) => {
    const _id = req.body.id;
    MapasSedesSchema.findByIdAndDelete(_id)
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
        })
})



// Buscador de Mapas


router.put('/mapas/sede/buscar/', [verificarToken], (req, res) => {

    const body = req.body;

    if (body.filtros) {
        if (!body.ciudad) {
            body.ciudad = req.usuario.ciudad;
        }

        if (!body.pais) {
            body.pais = req.usuario.pais;
        }


        MapasSedesSchema.find({ ciudad: body.ciudad, pais: body.pais, tipoNegocio: { $in: body.negocios } })
            .populate('creador')
            .sort({ _id: -1 })
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
            })
    } else {
        if (!body.ciudad) {
            body.ciudad = req.usuario.ciudad;
        }

        if (!body.pais) {
            body.pais = req.usuario.pais;
        }



        MapasSedesSchema.find({ ciudad: body.ciudad, pais: body.pais })
            .populate('creador')
            .sort({ _id: -1 })
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
            })
    }


})



module.exports = router;