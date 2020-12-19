const express = require('express');
const router = express.Router();
const CitasSettings = require('../../Models/Citas');
const { verificarToken } = require('../../middleware/verificarToken');

router.get('/citas/trabajos/taller', [verificarToken], (req, res) => {
    const idtaller = req.usuario._id;
    CitasSettings.find({ idtaller })
        .populate('idtaller')
        .exec((err, config) => {

            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }


            res.json({
                exe: true,
                response: config,
            })


        })
})


router.get('/citas/trabajos', (req, res) => {
    CitasSettings.find({})
        .populate('idtaller')
        .exec((err, configs) => {

            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }


            res.json({
                exe: true,
                response: configs,
            })


        })
})


router.put('/citas/trabajos', [verificarToken], (req, res) => {
    const idtaller = req.usuario._id;
    CitasSettings.find({ idtaller })
        .exec((error, document) => {
            if (error) {
                return res.json({
                    exe: false,
                    error: {
                        message: error
                    }
                })
            }

            if (document.length > 0) {

                CitasSettings.findOneAndUpdate({ idtaller }, { disponible: req.body.disponible, listaTrabajos: req.body.trabajos }, { new: true, runValidators: true }, (err, settings) => {
                    if (err) {
                        return res.json({
                            exe: false,
                            error: {
                                message: err
                            }
                        })
                    }


                    res.json({
                        exe: true,
                        response: settings
                    })

                })

            } else {
                const settings = new CitasSettings({
                    idtaller: idtaller
                });

                settings.save((err, setting) => {
                    if (err) {
                        return res.json({
                            exe: false,
                            error: {
                                message: err
                            }
                        })
                    }


                    res.json({
                        exe: true,
                        response: setting,
                    })


                })

            }
        })



})


module.exports = router;