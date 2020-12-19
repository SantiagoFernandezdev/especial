const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const { verificarToken } = require('./../../middleware/verificarToken');
const NotificacionesSchema = require('../../Models/Notificaciones');
const UsuariosSchema = require('../../Models/Usuarios.js')


router.get('/notificaciones/misnotificaciones/', [verificarToken], (req, res) => {
    const desde = parseFloat(req.get('x-desde'));
    NotificacionesSchema.find({ usuarioDestino: req.usuario._id })

    .skip(desde)
        .limit(10)
        .populate('usuarioCreador')
        .populate('usuarioDestino')
        .sort({ _id: -1 })
        .lean()
        .exec((err, notificaciones) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: notificaciones,
                desde
            })
        })

})



router.get('/notificaciones/numero/', [verificarToken], (req, res) => {
    NotificacionesSchema.find({ usuarioDestino: req.usuario._id, abierta: false })

    .lean()
        .count((err, number) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: number
            })
        })

})


router.put('/notificaciones/misnotificaciones/cambiarestado/', [verificarToken], (req, res) => {

    const _id = req.body.id;

    NotificacionesSchema.findByIdAndUpdate(_id, { abierta: true }, { new: true })

    .exec((err, notificacion) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: notificacion
        })
    })

})


module.exports = router;