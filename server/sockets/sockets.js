const { io } = require('../app');
const EstadoCitas = require('../../Classes/Sockets/Estado-de-citas');
const Conexiones = require('../../Classes/Sockets/Conexiones');
const _ = require('underscore');
const Notificaciones = require('../../Classes/Notificathion/Notification');
const Publicacion = require('../../Classes/IGTM/Publicacion');
const Usuarios = require('../../Classes/Sockets/Usuarios');
const jobs = require('node-cron');
const path = require('path');
const filesystem = require('fs');
const Convertidor = require('../../Classes/Utilidades/Convertidor');

let miCita = new EstadoCitas()
io.on('connection', (client) => {
    // console.log(client.id)

    // const miJob = jobs.schedule(' */30 * * * *', () => {
    //     // console.log('emitjobs', client.id);
    //     client.emit('notificacion', {
    //         action: 'recargo'
    //     });
    // })
    // client.emit('bienvenida', {
    //     message: 'Hola como estas, bievenido'
    // });



    client.on('conectar', async(data) => {
        // // console.log(data, ' Conectarme')
        // miJob.start();
        data.socket = client.id;
        // // console.log('Conectandonos')
        const miConexion = new Conexiones();
        const estado = await miConexion.crearConexion(data);

        if (estado) {
            client.join(data._id);

            const personas = await miConexion.listaPersonas(data);

            if (personas) {
                //// console.log(personas, ' personas conectarme');
                //// console.log(client)

                if (personas.arreglo.length > 0) {
                    const arr = _.uniq(personas.arreglo, (i) => i);
                    arr.forEach((item) => {
                        client.to(item).emit('conexiones', {
                            usuario: data._id,
                            estado: 'conexion',
                            arr,
                            client: client.id
                        })
                    })
                }
            }

        }
    })

    client.on('desconectar', async(data) => {
        try {
            // miJob.destroy();
            data.socket = client.id;
            const miConexion = new Conexiones();
            const estado = await miConexion.eliminarConexion(data, '1');

            if (estado) {

                const personas = await miConexion.listaPersonas(data);

                if (personas) {

                    if (personas.arreglo.length > 0) {
                        const arr = _.uniq(personas.arreglo, (i) => i);
                        arr.forEach((item) => {
                            client.to(item).emit('conexiones', {
                                usuario: data._id,
                                estado: 'desconexion',
                                arr,
                                client: client.id
                            })
                        })
                    }

                    // console.log('Salió con la sesión')
                    client.leaveAll();
                }
            }
        } catch (error) {
            // console.log('Salió con la sesión')
            client.leaveAll();
        }

    })

    client.on('disconnect', async() => {
        // miJob.stop();
        const miConexion = new Conexiones();
        const estado = await miConexion.eliminarConexion({ socket: client.id }, '2');

        if (estado) {
            // console.log('salió por desconectar su scoket')

            if (estado.personas.length > 0) {
                const arr = _.uniq(estado.personas, (i) => i);
                arr.forEach((item) => {
                    client.to(item).emit('conexiones', {
                        usuario: estado._id,
                        estado: 'desconexion',
                        personas: arr
                    })
                })

            }

            client.leaveAll();
        }
    })


    client.on('entrarChatCita', async(data) => {
        client.join(data._id);
        const miConexion = await new Conexiones();
        const conexion = await miConexion.consultarConexion(data);

        if (conexion) {
            if (conexion.exe) {


                client.emit('conexiones', {
                    usuario: data.usuario,
                    estado: 'conexion',
                    host: data.usuariohost,
                    conexion
                })

            } else {

                client.emit('conexiones', {
                    usuario: data.usuario,
                    estado: 'desconexion',
                    host: data.usuariohost,
                    conexion
                })
            }


        }

    })


    client.on('escribiendoCita', (data) => {
        client.broadcast.to(data._id).emit('escribiendoCita', {
            exe: data.exe
        })
    })

    client.on('cambiarEstadoCita', (data) => {
        client.broadcast.to(data._id).emit('cambiarEstadoCita', {
            estado: data.estado
        })
    })

    client.on('subirarchivo', async(data) => {
        console.log('data del achivo ', data);
        let miConvert = new Convertidor();
        miConvert.convertirMP4(`Citas/${data.nameSecret}`, 'Citas/Convertidor/', data.nameConvert).then((dataConvert) => {

            if (dataConvert.estado === 'ok') {
                data.nameSecret = 'Convertidor/' + data.nameConvert;
            } else if (dataConvert.estado === 'error') {
                data.nameSecret = data.nameSecret;
                if (filesystem.existsSync(path.resolve(__dirname, '../public/Citas/Convertidor/', data.nameConvert))) {

                    filesystem.unlinkSync(path.resolve(__dirname, '../public/Citas/Convertidor/', data.nameConvert));

                }
            }

            miCita.editarArchivo(data).then(async(resp) => {
                console.log('Bien, aqui se envia de nuevo el socket')
                client.broadcast.to(data.idCita).emit('subirVideo', data)
                client.emit('subirVideo', data)
            }).catch((error) => {
                console.log(error, ' subir archivo error 1')
            });

        }).catch((error) => {
            console.log(error, ' subir archivo error 2')
        })
    });

    client.on('mensajeCita', async(data) => {
        if (data.tipo === 'msg') {
            miCita.crearMensaje(data).then(async(resp) => {

                client.broadcast.to(data._id).emit('mensajeCita', resp)
                const miConexion = new Conexiones();
                const conexion = await miConexion.consultarConexion(data);

                if (conexion) {
                    if (conexion.exe) {
                        client.to(data.idEmit).emit('notificacion', {
                            action: 'citaschat',
                            mensaje: `@${data.emisor} envió un nuevo mensaje`,
                            idCita: data._id
                        })
                    } else {

                        const miUsuario = new Usuarios();
                        const document = await miUsuario.obtenerUsuario(data.idEmit);

                        if (document) {
                            const idNotificacion = document.usuario[0].usuarioID;
                            const miNotificacion = new Notificaciones();

                            miNotificacion.createNotificaionOne({ tipo: "MensajeCita", adicional: [{ idCita: data._id }] }, { en: `${data.mensaje}`, es: `${data.mensaje}` }, { en: `@${data.emisor} envió un nuevo mensaje`, es: `@${data.emisor} envió un nuevo mensaje` }, [idNotificacion], { en: '', es: '' })
                        }

                    }
                }
            }).catch((err) => {

                client.broadcast.to(data._id).emit('mensajeCita', {
                    mensaje: 'Error en el mensaje',
                    exe: false
                })

            });
        } else {
            client.broadcast.to(data.idCita).emit('mensajeCita', data)

            const miConexion = new Conexiones();
            const conexion = await miConexion.consultarConexion(data);

            if (conexion) {
                if (conexion.exe) {
                    client.to(data.idEmit).emit('notificacion', {
                        action: 'citaschat',
                        mensaje: `@${data.emisor} envió un nuevo mensaje con archivos adjuntos`,
                        idCita: data.idCita
                    })
                } else {

                    const miUsuario = new Usuarios();
                    const document = await miUsuario.obtenerUsuario(data.idEmit);

                    if (document) {
                        const idNotificacion = document.usuario[0].usuarioID;
                        const miNotificacion = new Notificaciones();

                        miNotificacion.createNotificaionOne({ tipo: "MensajeCita", adicional: [{ idCita: data.idCita }] }, { en: `${data.mensaje}`, es: `${data.mensaje} ` }, { en: `@${data.emisor} envió un nuevo mensaje`, es: `@${data.emisor} envió un nuevo mensaje` }, [idNotificacion], { en: `Con archivos Adjuntos`, es: `Con archivos Adjuntos` })
                    }

                }
            }

        }

    })



    client.on('salirChatCita', (data) => {
        client.leave(data._id);
    })



    // INVENTARIOS SOCKETS **************************************

    client.on('eventoIVT', (data) => {
        if (data.tipo === 'salida') {
            _.each(data.usuarios, (acceso) => {
                client.broadcast.to(acceso).emit('notificacion', {
                    mensaje: data.mensaje,
                    action: 'salidaIVT',
                    creador: data.creador,
                    id: data.id
                })
            })
        } else if (data.tipo === 'entrada') {
            _.each(data.usuarios, (acceso) => {
                client.broadcast.to(acceso).emit('notificacion', {
                    mensaje: data.mensaje,
                    action: 'entradaIVT',
                    id: data.id
                })
            })
        }

    })


    client.on('megusta', (data) => {

        client.broadcast.to(data.creador).emit('notificacion', {
            mensaje: data.mensaje,
            action: 'megusta',
            id: data.id
        })
    })

    client.on('subirvideo', (data) => {


        let nameSecret = data.nameSecret;
        console.log('Despues de llamar', nameSecret);

        let miConvert = new Convertidor();
        miConvert.convertirMP4(`11927613401/${nameSecret}`, '11927613401/Convertidor/', data.nameConvert).then((dataConvert) => {

            console.log(dataConvert)

            if (dataConvert.estado === 'ok') {
                let ultimonameConvert = 'Convertidor/' + data.nameConvert;
                let public = new Publicacion();

                public.marcar({
                    nombre: data.nombre,
                    mime: data.mime,
                    _id: data._id,
                    historia: data.historia,
                    ultimonameConvert: ultimonameConvert,
                    creador: data.creador
                }).then(() => {

                }).catch(() => {

                });

            } else if (dataConvert.estado === 'error') {
                nameConvert = data.nameConvert;
                if (filesystem.existsSync(path.resolve(__dirname, '../public/Citas/Convertidor/', nameConvert))) {

                    filesystem.unlinkSync(path.resolve(__dirname, '../public/Citas/Convertidor/', nameConvert));

                }
            }



        }).catch((error) => {
            console.log(error, ' subir archivo error 2')
        })


        client.broadcast.to(data.creador).emit('notificacion', {
            mensaje: 'La publicacion ya esta disponible',
            action: 'megusta',
            id: data._id
        })
    })

    client.on('comentario', (data) => {


        const miNotificacion = new Notificaciones();

        miNotificacion.createNotificaionOne({ tipo: "Publicacion", adicional: { id: data.publicacion } }, { en: `${data.comentario}`, es: `${data.comentario} ` }, { en: `${data.persona} ${data.motivo}`, es: `${data.persona}  ${data.motivo}` }, data.celular, { en: ``, es: `` })

        _.each(data.ids, (id) => {
            client.broadcast.to(id).emit('notificacion', {
                mensaje: `${data.persona} a comentado en tu publicación`,
                action: 'comentario',
                id: data.publicacion
            })
        })
    })

})