const IGTMSchema = require('../../Models/IGTM/Crear');
const IGTMSFotoschema = require('../../Models/IGTM/Media');
const moment = require('moment-timezone');
const Notificacion = require('../Notificathion/Notification');
const SeguidosSchema = require('../../Models/Seguimiento');

class Publicacion {

    constructor(

    ) {}

    marcar(data) {
        return new Promise((resolve, reject) => {
            const _id = data._id;

            const media = new IGTMSFotoschema({
                ruta: data.ultimonameConvert,
                nombre: data.name,
                mime: data.mime,
                creador: data.creador,
                publicacion: data._id,
                cont: data.cont,
                fecha: moment().utc()
            })

            media.save((err, media) => {
                if (err) {
                    reject({
                        exe: false,
                        error
                    })
                }

                IGTMSchema.findByIdAndUpdate(_id, { publicada: true }, { new: true })
                    .exec((error, publicacion) => {
                        if (error) {
                            reject({
                                exe: false,
                                error
                            })
                        }

                        SeguidosSchema.find({ usuarioReceptor: data.creador, estado: 'aceptado' })
                            .lean()
                            .populate('usuarioReceptor')
                            .populate('usuarioEmisor')
                            .exec((errr, igtms) => {
                                if (errr) {
                                    return res.json({
                                        exe: false,
                                        errr
                                    })
                                }


                                let seguidos = igtms.map((item) => {
                                    return item.usuarioEmisor.usuarioID
                                });

                                let seguidos2 = igtms.map((item) => {
                                    return item.usuarioEmisor._id
                                });



                                if (seguidos.length > 0) {
                                    const nusuario = igtms[0].usuarioReceptor.nombreusuario;
                                    let miNotificacion = new Notificacion();

                                    miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: _id } }, { en: `@${nusuario} acaba de publicar contenido, no te lo pierdas`, es: `@${nusuario} acaba de publicar contenido, no te lo pierdas` }, { en: `Notificación`, es: `Notificación` }, seguidos, { en: ``, es: `` })

                                    _.each(seguidos2, async(seg) => {
                                        await miNotificacion.CrearNotificacionApp({
                                            creador: data.creador,
                                            rutaApp: '/assets/Video.png',
                                            mensaje: `@${nusuario} acaba de publicar contenido, no te lo pierdas`,
                                            titulo: 'Notificación',
                                            tipo: 'Publicacion',
                                            data: { id: _id },
                                            destino: seg
                                        })
                                    })
                                    resolve({
                                        exe: true,
                                        response: publicacion
                                    })
                                } else {
                                    resolve({
                                        exe: true,
                                        response: publicacion
                                    })
                                }
                            })
                    })

            })

        })
    }


}

module.exports = Publicacion;