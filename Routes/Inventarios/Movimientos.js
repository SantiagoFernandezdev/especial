const express = require('express');
const router = express.Router();
const MovimientosSchema = require('../../Models/Inventarios/Movimientos');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');

router.put('/ivt/movimientos/filtro/', [verificarToken], (req, res) => {

    const _id = req.body.id;
    const desde = req.body.desde;

    MovimientosSchema.find({ inventario: _id })
        .lean()
        .skip(desde)
        .limit(10)
        .sort({ _id: -1 })
        .exec((err, movimientos) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: movimientos,
            })
        })


})







module.exports = router;