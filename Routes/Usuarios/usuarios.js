const express = require('express');
const bcrypt = require('bcrypt');
const Usuarios = require('../../Models/Usuarios');
const Biografia = require('../../Models/Biografia');
const CitasSettings = require('../../Models/Citas')
const jwt = require('jsonwebtoken');
const { verificarToken } = require('../../middleware/verificarToken');
const app = express();
const router = express.Router();

router.post('/usuarios/unico', (req, res) => {
    let body = req.body;

    if (typeof body.buscar !== 'undefined' || body.buscar !== '') {
        Usuarios.findOne({ nombreusuario: body.buscar }, (err, response) => {
            if (err) {
                return res.json({
                    exe: false,
                    error: {
                        message: err
                    }
                })
            }

            if (response) {
                res.json({
                    exe: true
                })
            } else {
                res.json({
                    exe: false
                })
            }




        })
    }

})

router.post('/usuarios', (req, res) => {
    let body = req.body;

    if (typeof body.clave === 'undefined' || body.clave === '') {
        return res.json({
            exe: false,
            error: {
                message: 'Error, debe especificar una contraseña'
            }
        })
    }
    let usuario = new Usuarios({
        nombrecompleto: body.nombreCompleto,
        nombreusuario: body.nombreUsuario,
        clave: bcrypt.hashSync(body.clave, 10),
        correo: body.correo,
        tel: body.tel,
        role: body.role,
        pais: body.pais,
        ciudad: body.ciudad,
        tipoNegocio: body.tipoNegocio,
        usuarioID: body.usuarioID
    })

    usuario.save((err, usuarioMoto) => {
        if (err) {
            return res.json({
                exe: false,
                error: {
                    message: err
                }
            })
        }

        const token = jwt.sign({ usuario: usuarioMoto }, process.env.SECRET, { expiresIn: 60 * 60 * 24 })

        const settings = new CitasSettings({
            idtaller: usuarioMoto._id
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
                response: usuarioMoto,
                token
            })


        })


    })
})

router.get('/usuarios/:termino', [verificarToken], (req, res) => {
    const termino = req.params.termino;
    const regexp = new RegExp(termino, 'i');

    Usuarios.find({ nombrecompleto: regexp })
        .exec((err, usuarios) => {
            if (err) {
                res.status(400);
                return res.json({
                    exe: false,
                    response: {
                        message: 'No se pudo realizar la búsqueda'
                    }
                })
            }

            res.json({
                exe: true,
                response: usuarios
            })
        })
})

router.get('/usuarios/perfil/:usuario', [verificarToken], (req, res) => {
    const usuario = req.params.usuario;

    Usuarios.find({ nombreusuario: usuario })
        .exec((err, usuarioData) => {
            if (err) {
                res.status(500);
                return res.json({
                    exe: false,
                    response: {
                        message: `Error al acceder al usuario ${usuario}`
                    }
                })
            }

            if (usuarioData.length > 0) {
                const _id = usuarioData[0]._id;

                Biografia.find({ usuario: _id })
                    .exec((errbio, BiografiaUsuario) => {
                        if (errbio) {
                            res.status(500);
                            return res.json({
                                exe: false,
                                response: {
                                    message: `Error al acceder a la información del usuario ${usuario}`
                                }
                            })
                        }

                        if (BiografiaUsuario) {
                            res.json({
                                exe: true,
                                response: {
                                    usuario: usuarioData,
                                    biografia: BiografiaUsuario
                                },
                                _id
                            })
                        }
                    })


            }
        })
})


router.get('/usuarios', [verificarToken], (req, res) => {
    Usuarios.find({}).exec((err, usuario) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        res.json({
            exe: true,
            response: usuario,
            ok: true
        })
    })
})


router.put('/usuarios/role/', [verificarToken], (req, res) => {
    const _id = req.usuario._id;
    const role = req.body.role;
    Usuarios.findOneAndUpdate({ _id }, { role: role }, { new: true })
        .exec((err, usuario) => {
            if (err) {
                res.status(200);
                return res.json({
                    exe: false,
                    err
                })
            }

            res.json({
                exe: true,
                response: usuario
            })
        })
})


router.delete('/usuarios', [verificarToken], (req, res) => {

    Usuarios.deleteMany({}, (err, ok) => {
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