const express = require('express');
const Usuario = require('../../Models/Usuarios');
const Paises = require('../../Models/Usuarios/Paises');
const Ciudades = require('../../Models/Usuarios/Ciudades');
const Codigo = require('../../Models/Codigos');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Router } = require('express');
const Codigos = require('../../Models/Codigos');
const TiposNegocio = require('../../Models/Usuarios/TiposNegocio');
const router = express.Router();


router.post('/login', (req, res) => {
    let body = req.body;
    let status = false;
    const dispositivo = req.get('x-dispositivoID');

    if (typeof body.clave === 'undefined' || body.clave === '') {
        res.status(200)
        return res.json({
            exe: false,
            error: {
                message: 'Debe especificar una contraseña válida'
            }
        })
    }

    Usuario.findOne({ nombreusuario: body.usuario, })
        .exec((err, usuarioMotor) => {
            if (err) {
                return res.json({
                    exe: false,
                    msg: 'Hola que hace',
                    error: {
                        message: err
                    }
                })
            }

            if (usuarioMotor) {

                const _id = usuarioMotor._id;

                Usuario.findByIdAndUpdate(_id, { usuarioID: dispositivo }, { new: true }, (errr, usuario) => {
                    if (err) {
                        return res.json({
                            exe: false,
                            msg: 'Hola que hace',
                            error: {
                                message: errr
                            }
                        })
                    }

                    if (!bcrypt.compareSync(body.clave, usuarioMotor.clave)) {
                        status = false;
                    } else {
                        status = true;
                    }



                    let token = jwt.sign({ usuario: usuarioMotor }, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 365 });

                    if (status) {
                        res.status(200)
                        return res.json({
                            exe: true,
                            response: usuario,
                            token
                        })

                    } else {
                        res.status(200)
                        return res.json({
                            exe: false,
                            usuario,
                            error: {
                                message: 'Credenciales incorrectas'
                            }
                        })
                    }


                })

            } else {
                res.status(200)
                return res.json({
                    exe: false,
                    usuarioMotor,
                    error: {
                        message: 'Credenciales incorrectas'
                    }
                })
            }



        })
})

router.post('/paises', (req, res) => {
    const nombre = req.body.nombre;

    const pais = new Paises({
        nombre
    })

    pais.save((err, doc) => {
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



router.post('/ciudad', (req, res) => {
    const nombre = req.body.nombre;
    const pais = req.body.pais;

    const ciudad = new Ciudades({
        nombre,
        pais
    })

    ciudad.save((err, doc) => {
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



router.get('/paises', (req, res) => {
    Paises.find({})
        .lean()
        .exec((err, docs) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: docs
            })
        })
})



router.get('/ciudad', (req, res) => {
    Ciudades.find({ pais: req.get('x-pais') })
        .lean()
        .exec((err, docs) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: docs
            })
        })
})

router.put('/codigos', (req, res) => {
    const codigo = req.body.codigo;

    Codigos.find({ codigo, estado: true })
        .lean()
        .exec((err, codigoData) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: codigoData
            })
        })
})



router.put('/codigos/cambiar', (req, res) => {
    const codigo = req.body.codigo;

    Codigos.findOneAndUpdate({ codigo: codigo }, { estado: false })
        .lean()
        .exec((err, codigoData) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
            })
        })
})

router.post('/codigos', (req, res) => {
    const codigo = req.body.codigo;

    const miCodigo = new Codigos({
        codigo,
        estado: true
    })

    miCodigo.save((err, codigoData) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true
        })
    })
})

router.post('/tiponegocio', (req, res) => {
    const nombre = req.body.nombre;

    const negocio = new TiposNegocio({
        nombre,
    })

    negocio.save((err, codigoData) => {
        if (err) {
            return res.json({
                exe: false,
                err
            })
        }

        return res.json({
            exe: true
        })
    })
})



router.get('/tiponegocio', (req, res) => {

    TiposNegocio.find({})
        .lean()
        .exec((err, negocios) => {
            if (err) {
                return res.json({
                    exe: false,
                    err
                })
            }

            return res.json({
                exe: true,
                response: negocios
            })
        })
})

module.exports = router;