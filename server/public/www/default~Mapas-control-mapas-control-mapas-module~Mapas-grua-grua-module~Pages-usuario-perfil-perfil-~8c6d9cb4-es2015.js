(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"],{

/***/ "./src/app/providers/Api/Biografia.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/Api/Biografia.service.ts ***!
  \****************************************************/
/*! exports provided: BiografiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiografiaService", function() { return BiografiaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







class BiografiaService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((errorHttp) => {
            intento++;
            if (intento === 3) {
                console.log('Entramos a intentos');
                if (errorHttp instanceof ErrorEvent) {
                    throw new Error('Error de Red');
                }
                else {
                    if (errorHttp.status === 404) {
                        // throw new Error(' Credenciales incorrectas, por favor comprueba la información ');
                    }
                    else {
                        // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                    }
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
    }
    getBiografia(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/biografia`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    postBiografia(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/biografia`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
}
BiografiaService.ɵfac = function BiografiaService_Factory(t) { return new (t || BiografiaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BiografiaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BiografiaService, factory: BiografiaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BiografiaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/providers/Api/UsuariosLogin.service.ts":
/*!********************************************************!*\
  !*** ./src/app/providers/Api/UsuariosLogin.service.ts ***!
  \********************************************************/
/*! exports provided: UsuariosLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosLoginService", function() { return UsuariosLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");













class UsuariosLoginService {
    constructor(http, transfer, almacenamiento, navCtrl) {
        this.http = http;
        this.transfer = transfer;
        this.almacenamiento = almacenamiento;
        this.navCtrl = navCtrl;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((errorHttp) => {
            intento++;
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                if (intento === 3) {
                    throw new Error('Error de Red');
                }
            }
            else if (errorHttp instanceof ProgressEvent) {
                if (intento === 3) {
                    throw new Error('Error de Red');
                }
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' al realizar la solicictud ');
                }
                else if (errorHttp.status === 401) {
                    this.almacenamiento.terminarPartida().then(() => {
                        this.navCtrl.navigateRoot('/home');
                    });
                    throw new Error('No tiene permisos para realizar la petición ');
                }
                else {
                    console.log(errorHttp, 'Error de servidor');
                    throw new Error(' No se pudo realizar la petición, intentalo más tarde ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
    }
    registrar(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            if (res.exe) {
                res.response.exe = res.exe;
                res.response.token = res.token;
                return res.response;
            }
            else {
                return res;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    usuario(usuario) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios/unico`, { buscar: usuario }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    iniciarPartida(usuario, dispositivoID) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-dispositivoID': dispositivoID
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/login`, usuario, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            if (res.exe) {
                res.response.exe = res.exe;
                res.response.token = res.token;
                return res.response;
            }
            else {
                return res.exe;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    fotoPerfilUsuarioMoto(imagen, token, tipo) {
        const options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
                'x-token': token
            },
            params: {
                tipo
            }
        };
        // 4912685137238652
        const fileTransfer = this.transfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/upload`, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    fotoPortada(imagen, token, old) {
        const options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
                'x-token': token
            },
            params: {
                old
            }
        };
        // 4912685137238652
        const fileTransfer = this.transfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/upload/portada/`, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    viewImagen(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/ver`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarUsuario(termino, token) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios/${termino}`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarPerfilUsuario(usuario, token) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios/perfil/${usuario}`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    traerMisNotificaciones(token, desde) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token,
                'x-desde': desde.toString()
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/notificaciones/misnotificaciones/`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    notiCantidad(token) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/notificaciones/numero/`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    ActualizarNotificaciones(token, id) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/notificaciones/misnotificaciones/cambiarestado/`, { id }, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarPaises() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/paises`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarCiudades(pais) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-pais': pais
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/ciudad`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    CodigoComprobar(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/codigos`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    EditarCodigo(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/codigos/cambiar`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    negocios() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/tiponegocio`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
}
UsuariosLoginService.ɵfac = function UsuariosLoginService_Factory(t) { return new (t || UsuariosLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"])); };
UsuariosLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosLoginService, factory: UsuariosLoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] }, { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4-es2015.js.map