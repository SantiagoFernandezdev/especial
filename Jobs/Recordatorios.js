const miJob = require('node-cron');
const RecordatorioSchema = require('../Models/Recordatorio');
const ProductosSchema = require('../Models/Inventarios/Productos');
const _ = require('underscore');
const moment = require('moment-timezone');
const Notificacion = require('../Classes/Notificathion/Notification');
const { $where } = require('../Models/Inventarios/Productos');
let miNotificacion = new Notificacion();

const recordatorio = miJob.schedule('1 * * * *', (e) => {
    RecordatorioSchema.find({})
        .lean()
        .populate('creador')
        .exec((err, documentos) => {
            if (err) {
                recordatorio.stop();
            }
            if (documentos.length > 0) {

                _.each(documentos, (doc, idx) => {

                    if (doc.tipo === 'personalizado' || doc.tipo === 'predeterminado') {

                        if (doc.estado === 'primiparo') {
                            let proximo;
                            if (doc.frecuencia.patron === 'diario') {
                                const hoy = moment().tz('America/Bogota').format('YYYY-MM-DD');

                                const destino = moment().tz('America/Bogota').add(doc.frecuencia.cantidad, 'days').format('YYYY-MM-DD');

                                const diferencia = moment(destino).diff(moment(hoy), 'days')

                                console.log(diferencia, 'diferencia en dias')
                                proximo = destino;

                            } else if (doc.frecuencia.patron === 'semanal') {
                                const hoy = moment().tz('America/Bogota').format('YYYY-MM-DD');

                                const destino = moment().tz('America/Bogota').add(doc.frecuencia.cantidad, 'weeks').format('YYYY-MM-DD');

                                const diferencia = moment(destino).diff(moment(hoy), 'days')

                                console.log(diferencia, 'diferencia dias')
                                proximo = destino;

                            } else if (doc.frecuencia.patron === 'mensual') {
                                const hoy = moment().tz('America/Bogota').format('YYYY-MM-DD');

                                const destino = moment().tz('America/Bogota').add(doc.frecuencia.cantidad, 'months').format('YYYY-MM-DD');

                                const diferencia = moment(destino).diff(moment(hoy), 'days')

                                console.log(diferencia, 'diferencia dias')
                                proximo = destino;
                            }

                            RecordatorioSchema.findByIdAndUpdate(doc._id, { estado: 'evaluar', proximo }, (error, docEditado) => {
                                if (error) {
                                    console.log('error', error)
                                }
                            })

                        } else if (doc.estado === 'evaluar') {
                            const hoy = moment().tz('America/Bogota').format('YYYY-MM-DD');
                            const hoyHora = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm');

                            let compare = moment(doc.proximo).format('YYYY-MM-DD');

                            if (hoyHora == moment(hoy + ' 13:17').tz('America/Bogota').format('YYYY-MM-DD HH:mm')) {
                                console.log('HOLA ENTRAMOS AQUI')

                                _.each(doc.destinatarios, (usuario, ind) => {
                                    usuario.visto = 'NO';
                                })
                                if (doc.repetirprograma === 'SI') {
                                    doc.estado = 'primiparo';
                                    doc.proximo = '';
                                    marcado = 0;
                                    doc.visible = 'NO'
                                } else {
                                    doc.finalizado = 'SI';
                                }

                                RecordatorioSchema.findByIdAndUpdate(doc._id, { marcado: 0, estado: doc.estado, destinatarios: doc.destinatarios, finalizado: doc.finalizado }, (error, docEditado) => {
                                    if (error) {}
                                })
                            } else if (hoy === compare) {
                                console.log('Iguales')
                                doc.visible = 'SI';
                                console.log(doc.marcado, 'Hola')
                                let marcado;
                                if (doc.marcado === 30) {
                                    doc.marcado = 0;
                                }

                                if (doc.marcado > 0) {

                                    marcado = doc.marcado + 1;

                                } else {
                                    let dispositivos = [];
                                    _.each(doc.destinatarios, (usuario, ind) => {
                                        if (usuario.visto === 'NO') {
                                            dispositivos.push(usuario.dispositivo);
                                        }
                                    })

                                    if (dispositivos.length > 0) {
                                        miNotificacion.createNotificaionOne({ tipo: "Recordatorio", adicional: [{}] }, { en: `${doc.informacion.contenido}`, es: `${doc.informacion.contenido}` }, { en: `${doc.informacion.titulo} - ${doc.creador.nombrecompleto} te recuerda`, es: `${doc.informacion.titulo} - ${doc.creador.nombrecompleto} te recuerda` }, dispositivos, { en: ``, es: `` })
                                    }


                                    if (doc.repetir === 'SI' && dispositivos.length > 0) {
                                        marcado = doc.marcado + 1;
                                    } else if ((doc.repetir === 'NO' && dispositivos.length === 0) || (doc.repetir === 'SI' && dispositivos.length === 0)) {


                                    }
                                }

                                RecordatorioSchema.findByIdAndUpdate(doc._id, { marcado, estado: doc.estado, visible: doc.visible, finalizado: doc.finalizado }, (error, docEditado) => {
                                    if (error) {}
                                })

                            }

                        }
                    }

                })

            }
        })




})

const inventario = miJob.schedule('*/60 * * * *', () => {
    try {
        ProductosSchema.find({ eliminados: false })
            .lean()
            .populate('inventario')
            .populate('creador')
            .exec((err, productos) => {
                if (err) {
                    inventario.stop()
                }

                let creadores = [];
                let data1 = [];

                let creadores2 = [];
                let data2 = [];



                _.each(productos, async(element) => {
                    if (element.existencia === 0) {
                        creadores.push(element.creador._id);
                        element.ctd = element.creador._id;
                        data1.push(element);

                    } else if (element.existencia > 0 && element.existencia <= element.limite) {

                        creadores2.push(element.creador._id);
                        element.ctd = element.creador._id;
                        data2.push(element);

                    }



                })


                let cfinal = _.uniq(creadores);

                _.each(cfinal, async(element) => {

                    let midataCreador = _.where(data1, { ctd: element });

                    const inventarios = _.uniq(_.map(midataCreador, (ivt) => ivt.inventario));

                    _.each(inventarios, async(ivt) => {

                        let midata = _.where(midataCreador, { inventario: ivt });

                        let agotados = 0;
                        const pdo = [];
                        let creador = '';


                        _.each(midata, async(data) => {
                            if (data.existencia === 0) {

                                agotados = agotados + 1;
                                pdo.push(data.nombre)
                                creador = data.creador.usuarioID;


                            }


                        })

                        if (agotados > 0) {
                            const recorte = pdo.length > 5 ? pdo.slice(0, 4).join(',') + '...' : pdo.join(',');

                            miNotificacion.createNotificaionOne({ tipo: "InventarioAgotados", adicional: { ivt: ivt, prod: pdo } }, { en: `Tiene ${agotados} productos agotados del inventario ${midata[0].inventario.name}: ${recorte}`, es: `Tiene ${agotados} productos agotados del inventario ${midata[0].inventario.name}: ${recorte}` }, { en: `Alerta Inventario!`, es: `Alerta Inventario!` }, [creador], { en: ``, es: `` })

                            await miNotificacion.CrearNotificacionApp({
                                creador: '',
                                rutaApp: '/assets/AlertaPDO.png',
                                mensaje: `Tiene ${agotados} productos agotados del inventario ${midata[0].inventario.name}: ${pdo.join(',')}`,
                                titulo: 'Alerta Inventario!',
                                tipo: 'ProductosAlerta',
                                fecha: moment().utc(),
                                data: { ivt: ivt, prod: pdo },
                                destino: element
                            })
                        }


                    });


                });


                let cfinal2 = _.uniq(creadores2);

                _.each(cfinal2, async(element) => {

                    let midataCreador = _.where(data2, { ctd: element });

                    const inventarios = _.uniq(_.map(midataCreador, (ivt) => ivt.inventario));

                    _.each(inventarios, async(ivt) => {

                        let midata = _.where(midataCreador, { inventario: ivt });

                        const proximos = [];
                        let nproximo = 0;
                        let creador2 = '';

                        _.each(midata, async(data) => {
                            if (data.existencia > 0 && data.existencia <= data.limite) {
                                _.each(data.inventario.accesos, async(acceso) => {
                                    proximos.push(data.nombre);
                                    creador2 = data.creador.usuarioID;
                                    nproximo = nproximo + 1;
                                })
                            }


                        })

                        if (nproximo > 0) {
                            const recorte = proximos.length > 5 ? proximos.slice(0, 4).join(',') + '...' : proximos.join(',');

                            miNotificacion.createNotificaionOne({ tipo: "InventarioProximos", adicional: { ivt: ivt, prod: proximos } }, { en: `Tiene ${nproximo} productos que se están agotando del inventario ${midata[0].inventario.name}: ${recorte}`, es: `Tiene ${nproximo} productos que se están agotando del inventario ${midata[0].inventario.name}: ${recorte}}` }, { en: `Alerta Inventario!`, es: `Alerta Inventario!` }, [creador2], { en: ``, es: `` })

                            await miNotificacion.CrearNotificacionApp({
                                creador: '',
                                rutaApp: '/assets/AlertaPDO.png',
                                mensaje: `Tiene ${nproximo} productos que se están agotando del inventario ${midata[0].inventario.name}: ${proximos.join(',')}`,
                                titulo: 'Alerta Inventario!',
                                tipo: 'ProductosAlerta',
                                fecha: moment().utc(),
                                data: { ivt: ivt, prod: proximos },
                                destino: element
                            })
                        }

                    });



                });




            })
    } catch (error) {
        console.log('Error', error.message)
        inventario.stop()
    }
})