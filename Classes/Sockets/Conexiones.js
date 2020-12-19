const Conexiones = require('../../Models/Conexiones');
const moment = require('moment-timezone');
const Seguimientos = require('../../Models/Seguimiento');

class ConexionesApp {

    constructor() {

    }

    crearConexion(data) {
        return new Promise((resolve, reject) => {

            Conexiones.find({ usuarioId: data._id })
                .exec((error, document) => {
                    if (error) {
                        reject({
                            exe: false,
                            error: {
                                message: error
                            }
                        })
                    }

                    if (document.length > 0) {
                        Conexiones.findOneAndUpdate({ usuarioId: data._id }, {
                            fechaConexion: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm'),
                            socketId: data.socket
                        }, (err, conexion) => {
                            if (err) {
                                reject({
                                    exe: false,
                                    error: {
                                        message: err
                                    }
                                })


                            }

                            resolve({
                                exe: true,
                                response: conexion
                            })
                        })
                    } else {
                        let miConexion = new Conexiones({
                            usuarioId: data._id,
                            fechaConexion: moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm'),
                            socketId: data.socket
                        })

                        miConexion.save((err, conexion) => {
                            if (err) {
                                reject({
                                    exe: false,
                                    error: {
                                        message: err
                                    }
                                })


                            }

                            resolve({
                                exe: true,
                                response: conexion
                            })
                        })
                    }
                })
        })
    }


    eliminarConexion(data, type) {
        return new Promise((resolve, reject) => {
            let condicion = {};
            switch (type) {
                case '1':
                    condicion = {
                        usuarioId: data._id
                    }
                    break;
                case '2':
                    condicion = {
                        socketId: data.socket
                    }
                    break;

            }
            Conexiones.findOneAndRemove(condicion, async(err, document) => {
                if (err) {
                    reject({
                        exe: false,
                        error: {
                            message: err
                        }
                    })
                }

                if (document) {
                    console.log('bien');
                    if (type === '2') {
                        // console.log(document, data, type, ' mi documento')
                        const personas = await this.listaPersonas({ _id: document.usuarioId });

                        if (personas) {
                            // console.log(personas, ' personas adentrio')

                            resolve({
                                exe: true,
                                personas,
                                _id: document.usuarioId
                            })
                        }
                    } else {
                        resolve({
                            exe: true,
                            personas: [],
                            _id: document.usuarioId
                        })
                    }
                }


            })
        })
    }

    consultarConexion(data) {
        return new Promise((resolve, reject) => {
            let usuario = '';
            if (typeof data.tipo === 'undefined') {
                usuario = data.usuario;
            } else {
                usuario = data.idEmit
            }
            Conexiones.find({ usuarioId: usuario })
                .exec((err, document) => {
                    if (err) {
                        reject({
                            exe: false,
                            error: {
                                message: err
                            }
                        })
                    }

                    if (document.length > 0) {
                        resolve({
                            exe: true,
                            response: document
                        })
                    } else {
                        resolve({
                            exe: false
                        })
                    }
                })
        })
    }

    listaPersonas(data) {
        return new Promise((resolve, reject) => {
            const arreglo = [];
            Seguimientos.find({ usuarioEmisor: data._id, estado: 'aceptado' })
                .exec((err, documents) => {
                    if (err) {
                        reject({
                            exe: false,
                            error: {
                                message: err
                            }
                        })
                    }

                    console.log('Seguimientos', documents.length)

                    if (documents.length > 0) {

                        documents.forEach((item) => {
                            arreglo.push(item.usuarioReceptor);
                        })

                    }

                    Seguimientos.find({ usuarioReceptor: data._id, estado: 'aceptado' })
                        .exec((errr, documentss) => {
                            if (errr) {
                                reject({
                                    exe: false,
                                    error: {
                                        message: errr
                                    }
                                })
                            }

                            if (documentss.length > 0) {

                                documentss.forEach((item) => {
                                    arreglo.push(item.usuarioEmisor);
                                })

                            }

                            resolve({
                                exe: true,
                                arreglo
                            })


                        })


                })


        })
    }
}

module.exports = ConexionesApp;