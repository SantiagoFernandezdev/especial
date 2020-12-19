const express = require('express');
const filesUpload = require('express-fileupload');
const FileSystem = require('../../Classes/UploadClasses/UploadClass');
const filesystem = require('fs');
const { verificarToken } = require('../../middleware/verificarToken');
const UsuarioSchema = require('../../Models/Usuarios');
const uniqid = require('uniqid')
const app = express.Router();
const path = require('path');
const moment = require('moment-timezone')

app.put('/upload', verificarToken, async(req, res) => {

    if (!req.body.tipo || typeof req.body.tipo === 'undefined') {
        return res.status(404).json({
            exe: false,
            message: 'No especifico el tipo de upload que iba a realizar'
        })
    }

    const type = req.body.tipo;

    if (!req.files) {
        return res.status(404).json({
            exe: false,
            message: 'No se ha seleccionado ningún archivo'
        })
    }

    let archivo = req.files.archivo;
    const FileClass = new FileSystem(archivo, type);

    await FileClass.guardarFolder(req.usuario._id);
    const archivos = FileClass.moverArchivo(req.usuario._id);

    UsuarioSchema.findByIdAndUpdate(req.usuario._id, { imagen: archivos }, { new: true, runValidators: true }, (err, usuarioMoto) => {
        if (err) {
            return res.status(500).json({
                exe: false,
                message: 'Error al subir la imagen'
            })
        }

        res.json({
            exe: true,
            response: usuarioMoto
        })
    })

})




app.put('/upload/portada/', [verificarToken], async(req, res) => {

    const body = req.body;
    const _id = req.usuario._id;
    if (!req.files) {
        return res.json({
            exe: false,
            message: 'No se ha seleccionado ningún archivo'
        })
    } else {
        let file = req.files.archivo;
        let nameSecret = uniqid() + moment().tz('America/Bogota').format('YYYYMMDDHHmmss') + file.name;

        file.mv(path.resolve(__dirname, '../../server/public/19927613410/', nameSecret), async(errFile) => {
            if (errFile) {
                return res.json({
                    exe: false,
                    error: errFile
                })
            }

            if (body.old !== '') {
                if (filesystem.existsSync(path.resolve(__dirname, '../../server/public/19927613410/', body.old))) {
                    filesystem.unlinkSync(path.resolve(__dirname, '../../server/public/19927613410/', body.old))
                }
            }

            UsuarioSchema.findByIdAndUpdate(_id, { portada: { path: nameSecret } }, { new: true }, (err, usuario) => {
                if (err) {
                    return res.json({
                        exe: false,
                        message: 'No se pudo actualizar la portada'
                    })
                }

                return res.json({
                    exe: true,
                    response: usuario
                })
            })

        });
    }



})



app.get('/ver', [verificarToken], (req, res) => {
    let id = req.usuario._id;

    UsuarioSchema.findOne({ _id: id }, (err, usuarioMoto) => {
        if (err) {
            return res.status(500).json({
                exe: false,
                message: 'Error al consultar la información'
            })
        }

        let paquete = '';

        if (usuarioMoto.imagen.length > 0) {
            paquete = usuarioMoto.imagen[0].path;
        }

        res.json({
            exe: true,
            paquete,
            portada: usuarioMoto.portada
        })
    })
})



module.exports = app;