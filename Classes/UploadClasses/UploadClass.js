const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
const _ = require('underscore');

class UploadClass {

    constructor(file, type, limitOne) {
        this.File = file;
        this.type = type;

        if (!limitOne || typeof limitOne === 'undefined') {
            this.limit = false;
        } else {
            this.limit = true
        }

    }

    guardarFolder(usuarioMotoID) {

        return new Promise((resolve, reject) => {

            const paths = this.crearFolder(usuarioMotoID);

            const nombreArchivo = this.nombreUnico(this.File.name);

            this.File.mv(`${paths}/${nombreArchivo}`, (err) => {
                if (err) {
                    reject();
                } else {
                    resolve();
                }
            })
        })
    }

    nombreUnico(file) {
        const archivo = file.split('.');
        const extension = archivo[archivo.length - 1];

        const nombreUnico = uniqid();

        return `${nombreUnico}.${extension}`;

    }

    crearFolder(usuarioMotoID) {
        const pathUsuarioMoto = path.resolve(__dirname, '../../server/public/', usuarioMotoID);
        const pathUsuarioMotoTemp = pathUsuarioMoto + '/temp';

        const existe = fs.existsSync(pathUsuarioMoto);

        if (!existe) {
            fs.mkdirSync(pathUsuarioMoto);
            fs.mkdirSync(pathUsuarioMotoTemp);

            console.log('existe');
        }

        return pathUsuarioMotoTemp;

    }


    moverArchivo(usuarioMotoID) {
        const path_root = path.resolve(__dirname, '../../server/public/', usuarioMotoID);
        let pathAcceso = usuarioMotoID;
        const pathUserTemp = path_root + '/temp';
        const pathUserFiles = path_root + '/files';

        let pathChildFile;
        const archivosReturn = [];

        if (!fs.existsSync(pathUserTemp)) {
            return [];
        }

        this.crearCarpeta(pathUserFiles);

        switch (this.type) {
            case 'perfil':
                pathChildFile = pathUserFiles + '/perfil';
                pathAcceso = pathAcceso + '/files/perfil';
                this.crearCarpeta(pathChildFile, true);
                break;

            default:
                pathChildFile = pathUserFiles + '/otro';
                pathAcceso = pathAcceso + '/files/otro';
                this.crearCarpeta(pathChildFile);
                break;
        }

        const archivos = this.listarArchivos(pathUserTemp);

        if (this.limit) {

        }

        _.each(archivos, (file) => {
            fs.renameSync(`${pathUserTemp}/${file}`, `${pathChildFile}/${file}`);

            archivosReturn.push({
                path: `${pathAcceso}/${file}`,
                name: this.File.name
            })

        })

        return archivosReturn;
    }

    listarArchivos(paquete) {

        return fs.readdirSync(paquete) || [];

    }

    crearCarpeta(paquete, borrar) {

        if (!fs.existsSync(paquete)) {
            fs.mkdirSync(paquete);
        } else {
            if (borrar && typeof borrar !== 'undefined') {
                const archivos = this.listarArchivos(paquete);

                _.each(archivos, (file) => {
                    fs.unlinkSync(`${paquete}/${file}`);
                })

            } else {
                return;
            }
        }
    }



}

module.exports = UploadClass;