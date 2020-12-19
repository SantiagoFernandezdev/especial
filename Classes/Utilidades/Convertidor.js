const path = require('path');
const filesystem = require('fs');
const convert = require('handbrake-js');

class Convertidor {

    constructor() {}

    convertirMP4(pathOld, pathNew, nameNew) {

        return new Promise((resolve, reject) => {
            try {
                let estado = 'ok';
                console.log('Path', pathOld)
                convert.spawn({ input: path.resolve(__dirname, '../../server/public/', pathOld), output: path.resolve(__dirname, '../../server/public/', pathNew, nameNew) })
                    .on('error', err => {
                        // console.log(err, 'error')
                        estado = 'error';
                        resolve({
                            estado: 'error'
                        })
                    })
                    .on('progress', progress => {
                        console.log(
                            'Porcentaje de conversión: %s, ETA: %s',
                            progress.percentComplete,
                            progress.eta
                        )
                    })
                    .on('complete', () => {
                        console.log(
                            'Complete'
                        )

                        if (estado === 'ok') {
                            console.log('adentro');
                            if (filesystem.existsSync(path.resolve(__dirname, '../../server/public/Citas/', pathOld))) {
                                console.log('Existe');
                                filesystem.unlinkSync(path.resolve(__dirname, '../../server/public/Citas/', pathOld));
                            }
                        }

                        resolve({
                            estado: 'ok'
                        })
                    })
            } catch (error) {
                reject({
                    estado: error
                })
            }
        })
    }
}

module.exports = Convertidor;