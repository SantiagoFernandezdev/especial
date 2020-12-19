const express = require('express');
const router = express.Router();
const EmpleadosSchema = require('../../Models/Empleados');
const UsuariosSchema = require('../../Models/Usuarios');
const { verificarToken } = require('../../middleware/verificarToken');

router.post('/empleados/', [verificarToken], (req, res) => {
    const body = req.body;

    const empleado = new EmpleadosSchema({
        nombre: body.nombre,
        creador: req.usuario._id,
        usuario: [body._id]
    })

    empleado.save((err, ivt) => {
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


router.put('/empleados/buscar/', [verificarToken], (req, res) => {
    const body = req.body;

    console.log(body.patron);

    UsuariosSchema.find({ $or: [{ nombreusuario: { $regex: body.patron, $options: 'i' } }, { nombrecompleto: { $regex: body.patron, $options: 'i' } }] })
        .lean()
        .limit(5)
        .sort({ nombrecompleto: 1 })
        .exec((err, usuarios) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: usuarios
            })
        })
})



router.get('/empleados/', [verificarToken], (req, res) => {

    EmpleadosSchema.find({ creador: req.usuario._id })

    .populate('usuario')
        .lean()
        .sort({ _id: -1 })
        .exec((err, empleados) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: empleados
            })
        })
})


router.put('/empleados/', [verificarToken], (req, res) => {
    const body = req.body;
    const _id = req.body._id;

    EmpleadosSchema.findByIdAndUpdate(_id, { cargo: body.cargo, alias: body.alias }, { new: true })
        .lean()
        .exec((err, empleados) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: empleados
            })
        })
})


router.delete('/empleados/', [verificarToken], (req, res) => {
    const _id = req.get('x-id');
    EmpleadosSchema.findByIdAndRemove(_id)
        .exec((err, empleados) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: empleados
            })
        })
})

module.exports = router;