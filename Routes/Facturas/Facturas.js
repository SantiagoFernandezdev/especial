const express = require('express');
const router = express.Router();
const { verificarToken } = require('../../middleware/verificarToken');
const moment = require('moment-timezone');
const path = require('path');
const FacturasSchema = require('../../Models/Facturero/Facturas');
const ConfiguracionSchema = require('../../Models/Facturero/Configuracion');
const usuarioSchema = require('../../Models/Usuarios');
const _ = require('underscore');
const pdf = require('html-pdf');
const nodemailer = require('nodemailer');

router.post('/facturas/configuracion', [verificarToken], (req, res) => {
    const body = req.body;

    ConfiguracionSchema.find({ creador: req.usuario._id })
        .lean()
        .exec((error, doc) => {
            if (error) {
                return res.json({
                    exe: false,
                    error
                })
            }

            if (doc.length > 0) {

                ConfiguracionSchema.findOneAndUpdate({ creador: req.usuario._id }, {
                        creador: req.usuario._id,
                        nit: body.nit,
                        direccion: body.direccion,
                        regimen: body.regimen,
                        titular: body.titular,
                        iva: body.iva,
                        valorIva: body.valorIva
                    }, { new: true })
                    .lean()
                    .exec((err, docc) => {
                        if (err) {
                            return res.json({
                                exe: false,
                                err
                            })
                        }

                        return res.json({
                            exe: true,
                            response: docc
                        })

                    });

            } else {

                const miFactura = new ConfiguracionSchema({
                    creador: req.usuario._id,
                    nit: body.nit,
                    direccion: body.direccion,
                    regimen: body.regimen,
                    titular: body.titular,
                    iva: body.iva,
                    valorIva: body.valorIva,
                    consecutivo: 0,
                    fecha: moment().utc(),
                })

                miFactura.save((err, docc) => {
                    if (err) {
                        return res.json({
                            exe: false,
                            err
                        })
                    }

                    return res.json({
                        exe: true,
                        response: docc
                    })

                })

            }
        })


})


router.get('/facturas/configuracion', [verificarToken], (req, res) => {

    ConfiguracionSchema.find({ creador: req.usuario._id })
        .lean()
        .exec((error, doc) => {
            if (error) {
                return res.json({
                    exe: false,
                    error
                })
            }

            if (doc.length > 0) {

                return res.json({
                    exe: true,
                    response: doc[0]
                })

            } else {

                return res.json({
                    exe: true,
                    response: false
                })
            }
        })


})





router.post('/facturas/creadas', [verificarToken], (req, res) => {

    const desde = req.body.desde;

    if (req.body.patron) {

        FacturasSchema.find({ creador: req.usuario._id, $or: [{ cliente: { $regex: req.body.patron, $options: 'i' } }, { consecutivo: { $regex: req.body.patron, $options: 'i' } }] })
            .lean()
            .skip(desde)
            .limit(15)
            .sort({ _id: -1 })
            .exec((err, facturas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err,
                        num: Number(req.body.patron)
                    })
                }

                return res.json({
                    exe: true,
                    response: facturas,
                    desde,
                    tipo: 1

                })
            })
    } else {
        FacturasSchema.find({ creador: req.usuario._id })
            .lean()
            .skip(desde)
            .limit(15)
            .sort({ _id: -1 })
            .exec((err, facturas) => {
                if (err) {
                    return res.json({
                        exe: false,
                        err
                    })
                }

                return res.json({
                    exe: true,
                    response: facturas,
                    desde
                })
            })
    }


})


router.post('/factura/guardar', [verificarToken], (req, res) => {
    let body = req.body;
    let consecutivo = 0;
    ConfiguracionSchema.find({ creador: req.usuario._id })
        .lean()
        .exec((error, doc) => {

            if (error) {
                return res.json({
                    exe: false,
                    error
                })
            }

            if (doc.length > 0) {

                if (doc[0].consecutivo === 0) {
                    consecutivo = 1;
                } else {
                    consecutivo = doc[0].consecutivo + 1;
                }

                ConfiguracionSchema.findOneAndUpdate({ _id: doc[0]._id }, { consecutivo: consecutivo })
                    .exec((er, dc) => {

                        if (er) {
                            return res.json({
                                exe: false,
                                er
                            })
                        }

                        const miFactura = new FacturasSchema({
                            creador: req.usuario._id,
                            config: body.idconfig,
                            consecutivo: consecutivo,
                            cliente: body.cliente,
                            ciudad: body.ciudad,
                            direccion: body.direccion,
                            nitcc: body.cc,
                            tel: body.telefono,
                            lista: body.lista,
                            subtotal: body.subtotal,
                            ivatotal: body.iva,
                            total: body.total,
                            descuento: body.descuento,
                            fecha: moment().utc()
                        })

                        miFactura.save((err, docc) => {
                            if (err) {
                                return res.json({
                                    exe: false,
                                    err
                                })
                            }

                            return res.json({
                                exe: true,
                                response: docc
                            })

                        })

                    })




            } else {
                return res.json({
                    exe: false
                })
            }



        })

})




router.post('/factura/pdf', [verificarToken], (req, res) => {
    let body = req.body;
    FacturasSchema.find({ _id: body.id })
        .lean()
        .populate('creador')
        .populate('config')
        .exec((error, doc) => {

            if (error) {
                return res.json({
                    exe: false,
                    error
                })
            }

            if (doc.length > 0) {

                let imagen = '';

                if (doc[0].creador.imagen.length > 0) {
                    imagen = doc[0].creador.imagen[0].path;
                }

                let options = {
                    format: 'Letter',
                    "timeout": 60000, // Timeout that will cancel phantomjs, in milliseconds

                    // Time we should wait after window load
                    // accepted values are 'manual', some delay in milliseconds or undefined to wait for a render event
                    "renderDelay": 20000,
                };

                let filas = '<tr><td class="center titulo">Cantidad</td><td class="center titulo">Detalle</td><td class="center titulo">Valor Unitario</td><td class="center titulo">Total</td></tr>';

                doc[0].lista.forEach((item) => {
                    filas = filas + '<tr> <td>' + item.cantidad + ' </td> <td>' + item.item + ' </td> <td>' + item.valoru + ' </td> <td>' + item.total + ' </td></tr>'
                })

                let ruta = path.resolve(__dirname, '../../server/public/', imagen);

                const html = `
    
<!doctype html>

<html>

<head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
        * {
            font-family: sans-serif;
            font-size: 12px !important;
        }
        
        h1 {
            color: green;
        }
        
        h3 {
            font-size: 16px !important;
        }
        
        .tabla {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        .nada {
            border: 0px;
            padding: 0px;
        }
        
        .center {
            text-align: center;
        }
        
        .titulo {
            background-color: #777777;
            color: #fff;
            font-weight: bold;
        }
        
        .hijos tr:nth-child(even) {
            background-color: #f1f1ff;
        }
    </style>
</head>

<body>

    <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px; background: #f1f1ff;">
        <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;">Facturas generadas por ALMECAPP</p>
        
    </div>

    <table class="tabla">
        <tr>
            <td class="none" style=" width: 50%;">
                <h3 style="margin: 0px; padding: 3px; opacity: .7">${doc[0].creador.nombrecompleto}</h3> <br>
                <h3 style="margin: 0px;  opacity: .5">Teléfono: ${doc[0].creador.tel} Dirección: ${doc[0].config.direccion}</h3>

                
            </td>

            <td class="none" style="text-align: right; width: 50%;">
            <img src="https://www.motocaliapp.com/${imagen}" width="120px" alt="">

            </td>
        </tr>

        <tr>
            <td colspan="2" style="padding: 10px; border: 0px; text-align:right;">
            <h3 style="text-align: right; color: red;  .5">Factura No. ${doc[0].consecutivo}</h3>
            </td>
        </tr>

      

        <tr>
            <td colspan="2" style="padding: 10px; border: 0px;"></td>
        </tr>
    </table>

    <table class="tabla">
        <tr>
            <td colspan="4" style="background-color: #777777; text-align: center;color: #ffffff; font-weight: bold;">Datos del cliente</td>
        </tr>
        <tr>
            <td style="border: 0px; width: 100px; padding: 5px;">Cliente:</td>
            <td style="border: 0px; text-align:center; border-bottom: 1px solid #333;">${doc[0].cliente}</td>
            <td style="border: 0px; width: 100px; padding: 5px; text-align:center;">Nit-CC:</td>
            <td style="border: 0px; text-align:center; border-bottom: 1px solid #333;">${doc[0].nitcc}</td>
        </tr>
        <tr>
            <td style="border: 0px; width: 100px; padding: 5px;">Teléfono:</td>
            <td style="border: 0px; text-align:center; border-bottom: 1px solid #333;">${doc[0].tel}</td>
            <td style="border: 0px; width: 100px; padding: 5px; text-align:center;">Dirección:</td>
            <td style="border: 0px; text-align:center; border-bottom: 1px solid #333;">${doc[0].direccion}</td>
        </tr>

        <tr>
            <td colspan="4" style="padding:5px; border: 0px;"></td>
        </tr>
    </table>

    <table class="tabla">
        <tbody class="hijos">
            ${filas}
        </tbody>
    </table>

    <table class="tabla">
    <tr>
    <td colspan="4" style="padding:5px; border: 0px;"></td>
</tr>
    </table>

    <table class="tabla">
        <tr>
            <td style="text-align: right; font-weight: bold;">Subtotal:</td>
            <td style="width: 200px; text-align: right;">$${doc[0].subtotal}</td>

        </tr>
        <tr>

            <td style="text-align: right; background: #f1f1ff; font-weight: bold;">Total</td>
            <td style="width: 200px; text-align: right;">$${doc[0].total}</td>

        </tr>
    </table>
</body>

</html>
                `;


                pdf.create(html, options).toFile('./public/pdf/factura.pdf', function(err, resp) {
                    if (err) {
                        return res.json({
                            exe: true,
                            response: err
                        })
                    }

                    let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'facturasalmecapp@gmail.com',
                            pass: 'almecapp.28'
                        }
                    });

                    let mailOptions = {
                        from: 'Remitente',
                        to: body.correo,
                        subject: 'Factura - ' + doc[0].creador.nombrecompleto,
                        text: 'Adjuntamos la factura en formato PDF',
                        attachments: [

                            { // file on disk as an attachment
                                filename: 'Factura.pdf',
                                href: `https://www.motocaliapp.com/pdf/factura.pdf` // stream this file
                            },
                        ]
                    };

                    transporter.sendMail(mailOptions, function(errorm, info) {
                        if (errorm) {
                            return res.json({
                                exe: false,
                                response: errorm
                            })
                        } else {
                            return res.json({
                                exe: true,
                                response: resp,
                                info
                            })
                        }
                    });


                });
            } else {
                return res.json({
                    exe: false
                })
            }



        })

})



module.exports = router;