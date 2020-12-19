const express = require('express');
const router = express.Router();
const CategoriasSchema = require('../../Models/Inventarios/Categorias');
const UsuariosSchema = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');

router.post('/ivt/categorias/', [verificarToken], (req, res) => {
    const body = req.body;

    const categoria = new CategoriasSchema({
        nombre: body.nombre,
        creador: req.usuario._id,
        inventario: body.ivt,
        fecha: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
    })

    categoria.save((err, ivtCategoria) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtCategoria
        })
    })
})

router.put('/ivt/categorias/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = body._id;

    CategoriasSchema.findByIdAndUpdate(_id, {
        nombre: body.nombre,
    }, { new: true }, (err, ivtCategoria) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtCategoria
        })
    })
})


router.delete('/ivt/categorias/', [verificarToken], (req, res) => {
    const _id = req.get('x-id');

    CategoriasSchema.findByIdAndRemove(_id, (err, ivtCategoria) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true,
            response: ivtCategoria
        })
    })
})


router.get('/ivt/categorias/', [verificarToken], (req, res) => {

    CategoriasSchema.find({ inventario: req.get('x-ivt') })
        .lean()
        .sort({ _id: -1 })
        .exec((err, ivtCategorias) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: ivtCategorias
            })
        })
})




module.exports = router;