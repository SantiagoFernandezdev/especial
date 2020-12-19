const express = require('express');
const BiografiaModel = require('../../Models/Biografia');
const { verificarToken } = require('../../middleware/verificarToken');
const _ = require('underscore');
const router = express.Router();


router.post('/biografia', [verificarToken], (req, res) => {
    const id = req.usuario._id;
    let estado = '';

    BiografiaModel.find({ usuario: id }).exec((err, data) => {
        if (err) {
            return res.json({
                exe: false,
                eeror: {
                    message: err
                }
            })
        }

        if (data.length > 0) {

            const editarInformacion = _.pick(req.body, ['contenido', 'servicios']);
            BiografiaModel.findByIdAndUpdate(data[0]._id, editarInformacion, { new: true, runValidators: true }, (errr, biografiaEdit) => {
                if (errr) {
                    return res.json({
                        exe: false,
                        error: {
                            message: errr
                        }
                    })
                }

                return res.status(200).json({
                    exe: true,
                    editarInformacion
                })
            })

        } else {

            const Biografia = new BiografiaModel({
                contenido: req.body.contenido,
                servicios: req.body.servicios,
                usuario: id
            })

            Biografia.save((errr, biografia) => {
                if (errr) {
                    return res.json({
                        exe: false,
                        error: {
                            message: errr
                        }
                    })
                }

                res.json({
                    exe: true,
                    response: biografia
                })
            })

        }
    })

    /* */
})



router.get('/biografia', [verificarToken], (req, res) => {
    const id = req.get('x-id') !== 'none' ? req.get('x-id') : req.usuario._id;

    console.log(id, 'Hola')

    BiografiaModel.find({ usuario: id })
        .populate('usuario')
        .exec((err, biografia) => {
            if (err) {
                return res.status(500).json({
                    exe: false,
                    message: 'Problemas al buscar biografía'
                })
            }

            res.status(200);

            return res.json({
                exe: true,
                response: biografia
            })
        })
})


router.delete('/biografia', [verificarToken], (req, res) => {

    BiografiaModel.deleteMany({}, (err, ok) => {
        if (err) {
            req.status(200);
            return res.json({
                exe: false,
                response: err
            })
        }

        res.status(200);
        return res.json({
            exe: true,
            response: ok
        })
    })
})




module.exports = router;