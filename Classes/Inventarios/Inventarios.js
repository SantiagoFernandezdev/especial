const EntradasSchema = require('../../Models/Inventarios/Entradas');
const SalidasSchema = require('../../Models/Inventarios/Salidas');
const MovimientosSchema = require('../../Models/Inventarios/Movimientos');
const ProductosSchema = require('../../Models/Inventarios/Productos');

class Inventarios {

    constructor() {

    }

    crearEntrada() {

    }

    crearMovimiento(data) {

        return new Promise((resolve, reject) => {
            const movimiento = new MovimientosSchema({
                mensaje: data.mensaje,
                creador: data._id,
                inventario: data.inventario,
                fecha: data.fecha
            });

            movimiento.save((err, mov) => {
                if (err) {
                    reject({
                        exe: false,
                        error: err
                    })
                }

                console.log(mov, 'Movimientos')

                resolve({
                    exe: true
                })
            })
        })


    }


    existencia(_id, cant, tipo) {
        return new Promise((resolve, reject) => {

            ProductosSchema.find({ _id: _id })
                .lean()
                .exec((err, pdo) => {
                    if (err) {
                        reject({
                            exe: false,
                            error: err
                        })
                    }

                    if (pdo.length > 0) {

                        let cantidad = pdo[0].existencia;

                        if (tipo === 'entrada') {
                            cantidad = parseFloat(cantidad) + parseFloat(cant);
                        } else if (tipo === 'salida') {
                            cantidad = parseFloat(cantidad) - parseFloat(cant);
                        }

                        ProductosSchema.findByIdAndUpdate({ _id: _id }, { existencia: cantidad })
                            .lean()
                            .exec((error, pdoe) => {
                                if (err) {
                                    reject({
                                        exe: false,
                                        error
                                    })
                                }

                                resolve({
                                    exe: true
                                })
                            });

                    } else {

                    }
                })
        })
    }




    existenciaIVT(_id, cant, prodDestino) {
        return new Promise((resolve, reject) => {

            ProductosSchema.find({ _id: _id })
                .lean()
                .exec((err, pdo) => {
                    if (err) {
                        reject({
                            exe: false,
                            error: err
                        })
                    }

                    if (pdo.length > 0) {

                        let cantidad = pdo[0].existencia;

                        cantidad = parseFloat(cantidad) - parseFloat(cant);

                        ProductosSchema.findByIdAndUpdate({ _id: _id }, { existencia: cantidad })
                            .lean()
                            .exec((error, pdoe) => {
                                if (err) {
                                    reject({
                                        exe: false,
                                        error
                                    })
                                }


                                ProductosSchema.find({ _id: prodDestino })
                                    .lean()
                                    .exec((errr, pddo) => {
                                        if (errr) {
                                            reject({
                                                exe: false,
                                                error: errr
                                            })
                                        }

                                        if (pddo.length > 0) {

                                            let cantidad2 = pddo[0].existencia;
                                            cantidad2 = parseFloat(cantidad2) + parseFloat(cant);


                                            ProductosSchema.findByIdAndUpdate({ _id: prodDestino }, { existencia: cantidad2 })
                                                .lean()
                                                .exec((errorr, ppdo) => {
                                                    if (errorr) {
                                                        reject({
                                                            exe: false,
                                                            error
                                                        })
                                                    }

                                                    resolve({
                                                        exe: true
                                                    })

                                                });

                                        }

                                    });


                            });

                    } else {

                    }
                })
        })
    }
}

module.exports = Inventarios;