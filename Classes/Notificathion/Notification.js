const axios = require('axios').default;
const NotificacionesSchema = require('../../Models/Notificaciones');
const UsuariosSchema = require('../../Models/Usuarios.js')

class Notification {

    constructor() {}

    createNotificaionOne(data, contents, headings, include_player_ids, subtitle) {
        try {
            return axios.post('https://onesignal.com/api/v1/notifications', {
                app_id: '1de7b081-0773-484d-a7b2-139f15ff8586',
                data,
                contents,
                headings,
                subtitle,
                include_player_ids
            }, {
                headers: {
                    'Authorization': 'Basic NTM0OGQ2MTQtY2E3Ny00YWFkLWI4MzctNGY3NjU4ODRiODIy'
                }
            })
        } catch (err) {
            return err;
        }
    }

    CrearNotificacionApp(body) {

        const obj = {
            mensaje: body.mensaje,
            titulo: body.titulo,
            accion: {
                tipo: body.tipo,
                data: body.data
            },
            usuarioDestino: body.destino,
            fechaCreado: body.fecha
        }

        if (body.creador) {
            obj.usuarioCreador = body.creador;
        } else if (body.rutaApp) {
            obj.rutaApp = body.rutaApp;
        }


        return new Promise((resolve, reject) => {
            const myNotificacion = new NotificacionesSchema(obj)

            myNotificacion.save((err, notificacion) => {
                if (err) {
                    resolve({
                        exe: false
                    })

                }

                console.log('Excelente');

                resolve({
                    exe: true
                })

            })
        })

    }

}

module.exports = Notification