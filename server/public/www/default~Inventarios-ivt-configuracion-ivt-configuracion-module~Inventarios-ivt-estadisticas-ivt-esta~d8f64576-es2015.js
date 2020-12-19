(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"],{

/***/ "./src/app/providers/Api/Inventarios.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/Api/Inventarios.service.ts ***!
  \******************************************************/
/*! exports provided: InventariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosService", function() { return InventariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







class InventariosService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
    }
    crearInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/tipo/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    actualizarInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/cierre/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerInventarios(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/tipo/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerInventario(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/tipo/uno`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarAcceso(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/tipo/accesos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    // EMPLEADOS ************************************************************
    BuscarUsuarios(token, patron) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/empleados/buscar/`, { patron }, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearEmpleado(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/empleados/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarEmpleado(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/empleados/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerEmpleados(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/empleados/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarEmpleados(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/empleados/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Proveedores ******************************************************************
    crearProveedor(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/proveedores/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarProveedor(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/proveedores/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarProveedor(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/proveedores/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProveedor(token, ivt) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-ivt': ivt
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/proveedores/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Categorias ******************************************************************
    crearCategoria(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/categorias/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarCategoria(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/categorias/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarCategoria(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/categorias/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerCategoria(token, ivt) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-ivt': ivt
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/categorias/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Productos ******************************************************************
    crearProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarProducto(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/filtro/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProductoEstadistica(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/filtro/estadistica/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProductosPorInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/buscarivt/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Entradas  y Salidas ******
    buscarProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/buscar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearEntrada(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/entradas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerEntrada(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/entradas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarEntradas(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/entradas/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarEntradasPatron(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/entradas/buscar/patron/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearSalida(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/salidas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerSalida(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/salidas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarSalidas(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/salidas/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarSalidasPatron(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/salidas/buscar/patron/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    CargarInventarios(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/tipo/almacen/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Estadisticas
    CierresInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/cierre/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    MovCantidades(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/mov/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    MovCantidades2(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/mov/salidas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerMovmientos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/movimientos/filtro/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerAgotados(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/agotados/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProximos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"]}/ivt/productos/proximos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
}
InventariosService.ɵfac = function InventariosService_Factory(t) { return new (t || InventariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InventariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InventariosService, factory: InventariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576-es2015.js.map