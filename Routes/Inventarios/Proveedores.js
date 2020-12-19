const express = require('express');
const router = express.Router();
const ProveedoresSchema = require('../../Models/Inventarios/Proveedores');
const UsuariosSchema = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');

router.post('/ivt/proveedores/', [verificarToken], (req, res) => {
    const body = req.body;

    const proveedor = new ProveedoresSchema({
        nombre: body.nombre,
        creador: req.usuario._id,
        telefono: body.tel1,
        telefono2: body.tel2,
        correo: body.correo,
        inventario: body.ivt,
        fecha: moment().utc()
    })

    proveedor.save((err, ivtProveedor) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtProveedor
        })
    })
})

router.put('/ivt/proveedores/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body._id;

    ProveedoresSchema.findByIdAndUpdate(_id, {
        nombre: body.nombre,
        telefono: body.tel1,
        telefono2: body.tel2,
        correo: body.correo
    }, { new: true }, (err, ivtProveedor) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtProveedor
        })
    })
})


router.delete('/ivt/proveedores/', [verificarToken], (req, res) => {
    const _id = req.get('x-id');

    ProveedoresSchema.findByIdAndRemove(_id, (err, ivtProveedor) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtProveedor
        })
    })
})


router.get('/ivt/proveedores/', [verificarToken], (req, res) => {

    ProveedoresSchema.find({ inventario: req.get('x-ivt') })
        .lean()
        .sort({ _id: -1 })
        .exec((err, proveedores) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: proveedores
            })
        })
})




module.exports = router;