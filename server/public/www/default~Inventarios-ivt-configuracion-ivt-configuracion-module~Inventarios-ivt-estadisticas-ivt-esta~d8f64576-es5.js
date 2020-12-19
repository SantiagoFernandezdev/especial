function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"], {
  /***/
  "./src/app/providers/Api/Inventarios.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/Api/Inventarios.service.ts ***!
    \******************************************************/

  /*! exports provided: InventariosService */

  /***/
  function srcAppProvidersApiInventariosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventariosService", function () {
      return InventariosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var InventariosService =
    /*#__PURE__*/
    function () {
      function InventariosService(http) {
        _classCallCheck(this, InventariosService);

        this.http = http;
      }

      _createClass(InventariosService, [{
        key: "hanflerError",
        value: function hanflerError(error) {
          var intento = 0;
          return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (errorHttp) {
            console.log('Entramos a intentos');

            if (errorHttp instanceof ErrorEvent) {
              throw new Error('Error de Red');
            } else {
              if (errorHttp.status === 404) {
                throw new Error(' Página no encontrada');
              } else {// throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
              }
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        }
      }, {
        key: "crearInventario",
        value: function crearInventario(token, data) {
          var _this = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/tipo/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this.hanflerError(error);
          }));
        }
      }, {
        key: "actualizarInventario",
        value: function actualizarInventario(token, data) {
          var _this2 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/cierre/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this2.hanflerError(error);
          }));
        }
      }, {
        key: "leerInventarios",
        value: function leerInventarios(token) {
          var _this3 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/tipo/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this3.hanflerError(error);
          }));
        }
      }, {
        key: "leerInventario",
        value: function leerInventario(token, id) {
          var _this4 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-id': id
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/tipo/uno"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this4.hanflerError(error);
          }));
        }
      }, {
        key: "editarAcceso",
        value: function editarAcceso(token, data) {
          var _this5 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/tipo/accesos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this5.hanflerError(error);
          }));
        } // EMPLEADOS ************************************************************

      }, {
        key: "BuscarUsuarios",
        value: function BuscarUsuarios(token, patron) {
          var _this6 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/empleados/buscar/"), {
            patron: patron
          }, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this6.hanflerError(error);
          }));
        }
      }, {
        key: "crearEmpleado",
        value: function crearEmpleado(token, data) {
          var _this7 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/empleados/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this7.hanflerError(error);
          }));
        }
      }, {
        key: "editarEmpleado",
        value: function editarEmpleado(token, data) {
          var _this8 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/empleados/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this8.hanflerError(error);
          }));
        }
      }, {
        key: "leerEmpleados",
        value: function leerEmpleados(token) {
          var _this9 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/empleados/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this9.hanflerError(error);
          }));
        }
      }, {
        key: "eliminarEmpleados",
        value: function eliminarEmpleados(token, id) {
          var _this10 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-id': id
            })
          };
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/empleados/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this10.hanflerError(error);
          }));
        } // Proveedores ******************************************************************

      }, {
        key: "crearProveedor",
        value: function crearProveedor(token, data) {
          var _this11 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/proveedores/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this11.hanflerError(error);
          }));
        }
      }, {
        key: "editarProveedor",
        value: function editarProveedor(token, data) {
          var _this12 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/proveedores/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this12.hanflerError(error);
          }));
        }
      }, {
        key: "eliminarProveedor",
        value: function eliminarProveedor(token, id) {
          var _this13 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-id': id
            })
          };
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/proveedores/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this13.hanflerError(error);
          }));
        }
      }, {
        key: "leerProveedor",
        value: function leerProveedor(token, ivt) {
          var _this14 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-ivt': ivt
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/proveedores/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this14.hanflerError(error);
          }));
        } // Categorias ******************************************************************

      }, {
        key: "crearCategoria",
        value: function crearCategoria(token, data) {
          var _this15 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/categorias/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this15.hanflerError(error);
          }));
        }
      }, {
        key: "editarCategoria",
        value: function editarCategoria(token, data) {
          var _this16 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/categorias/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this16.hanflerError(error);
          }));
        }
      }, {
        key: "eliminarCategoria",
        value: function eliminarCategoria(token, id) {
          var _this17 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-id': id
            })
          };
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/categorias/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this17.hanflerError(error);
          }));
        }
      }, {
        key: "leerCategoria",
        value: function leerCategoria(token, ivt) {
          var _this18 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-ivt': ivt
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/categorias/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this18.hanflerError(error);
          }));
        } // Productos ******************************************************************

      }, {
        key: "crearProducto",
        value: function crearProducto(token, data) {
          var _this19 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this19.hanflerError(error);
          }));
        }
      }, {
        key: "editarProducto",
        value: function editarProducto(token, data) {
          var _this20 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this20.hanflerError(error);
          }));
        }
      }, {
        key: "eliminarProducto",
        value: function eliminarProducto(token, id) {
          var _this21 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-id': id
            })
          };
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this21.hanflerError(error);
          }));
        }
      }, {
        key: "leerProducto",
        value: function leerProducto(token, data) {
          var _this22 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/filtro/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this22.hanflerError(error);
          }));
        }
      }, {
        key: "leerProductoEstadistica",
        value: function leerProductoEstadistica(token, data) {
          var _this23 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/filtro/estadistica/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this23.hanflerError(error);
          }));
        }
      }, {
        key: "leerProductosPorInventario",
        value: function leerProductosPorInventario(token, data) {
          var _this24 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/buscarivt/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this24.hanflerError(error);
          }));
        } // Entradas  y Salidas ******

      }, {
        key: "buscarProducto",
        value: function buscarProducto(token, data) {
          var _this25 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/buscar"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this25.hanflerError(error);
          }));
        }
      }, {
        key: "crearEntrada",
        value: function crearEntrada(token, data) {
          var _this26 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/entradas/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this26.hanflerError(error);
          }));
        }
      }, {
        key: "leerEntrada",
        value: function leerEntrada(token, data) {
          var _this27 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/entradas/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this27.hanflerError(error);
          }));
        }
      }, {
        key: "filtrarEntradas",
        value: function filtrarEntradas(token, data) {
          var _this28 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/entradas/buscar/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this28.hanflerError(error);
          }));
        }
      }, {
        key: "filtrarEntradasPatron",
        value: function filtrarEntradasPatron(token, data) {
          var _this29 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/entradas/buscar/patron/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this29.hanflerError(error);
          }));
        }
      }, {
        key: "crearSalida",
        value: function crearSalida(token, data) {
          var _this30 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/salidas/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this30.hanflerError(error);
          }));
        }
      }, {
        key: "leerSalida",
        value: function leerSalida(token, data) {
          var _this31 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/salidas/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this31.hanflerError(error);
          }));
        }
      }, {
        key: "filtrarSalidas",
        value: function filtrarSalidas(token, data) {
          var _this32 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/salidas/buscar/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this32.hanflerError(error);
          }));
        }
      }, {
        key: "filtrarSalidasPatron",
        value: function filtrarSalidasPatron(token, data) {
          var _this33 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/salidas/buscar/patron/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this33.hanflerError(error);
          }));
        }
      }, {
        key: "CargarInventarios",
        value: function CargarInventarios(token, data) {
          var _this34 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/tipo/almacen/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this34.hanflerError(error);
          }));
        } // Estadisticas

      }, {
        key: "CierresInventario",
        value: function CierresInventario(token, data) {
          var _this35 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/cierre/buscar/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this35.hanflerError(error);
          }));
        }
      }, {
        key: "MovCantidades",
        value: function MovCantidades(token, data) {
          var _this36 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/mov/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this36.hanflerError(error);
          }));
        }
      }, {
        key: "MovCantidades2",
        value: function MovCantidades2(token, data) {
          var _this37 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/mov/salidas/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this37.hanflerError(error);
          }));
        }
      }, {
        key: "leerMovmientos",
        value: function leerMovmientos(token, data) {
          var _this38 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/movimientos/filtro/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this38.hanflerError(error);
          }));
        }
      }, {
        key: "leerAgotados",
        value: function leerAgotados(token, data) {
          var _this39 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/agotados/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this39.hanflerError(error);
          }));
        }
      }, {
        key: "leerProximos",
        value: function leerProximos(token, data) {
          var _this40 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/ivt/productos/proximos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this40.hanflerError(error);
          }));
        }
      }]);

      return InventariosService;
    }();

    InventariosService.ɵfac = function InventariosService_Factory(t) {
      return new (t || InventariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    InventariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InventariosService,
      factory: InventariosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576-es5.js.map