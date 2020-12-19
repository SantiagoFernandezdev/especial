function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"], {
  /***/
  "./src/app/pipes/Fechas/CambioUTC.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/Fechas/CambioUTC.pipe.ts ***!
    \************************************************/

  /*! exports provided: CambioUTCaLocalPipe */

  /***/
  function srcAppPipesFechasCambioUTCPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CambioUTCaLocalPipe", function () {
      return CambioUTCaLocalPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var CambioUTCaLocalPipe =
    /*#__PURE__*/
    function () {
      function CambioUTCaLocalPipe() {
        _classCallCheck(this, CambioUTCaLocalPipe);
      }

      _createClass(CambioUTCaLocalPipe, [{
        key: "transform",
        value: function transform(date) {
          var fecha = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](date).toDate();
          return moment__WEBPACK_IMPORTED_MODULE_1__(fecha).format('dddd, DD MMMM YYYY h:mm:a');
        }
      }]);

      return CambioUTCaLocalPipe;
    }();

    CambioUTCaLocalPipe.ɵfac = function CambioUTCaLocalPipe_Factory(t) {
      return new (t || CambioUTCaLocalPipe)();
    };

    CambioUTCaLocalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "cambioUTC",
      type: CambioUTCaLocalPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CambioUTCaLocalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'cambioUTC'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/Fechas/ConversionUTC.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/pipes/Fechas/ConversionUTC.pipe.ts ***!
    \****************************************************/

  /*! exports provided: ConvertirUTCPipe */

  /***/
  function srcAppPipesFechasConversionUTCPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvertirUTCPipe", function () {
      return ConvertirUTCPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var ConvertirUTCPipe =
    /*#__PURE__*/
    function () {
      function ConvertirUTCPipe() {
        _classCallCheck(this, ConvertirUTCPipe);
      }

      _createClass(ConvertirUTCPipe, [{
        key: "transform",
        value: function transform(value) {
          console.log(value, 'Fechs');
          return moment__WEBPACK_IMPORTED_MODULE_1__(value).format('DD-MM-YYYY hh:mm:a');
        }
      }]);

      return ConvertirUTCPipe;
    }();

    ConvertirUTCPipe.ɵfac = function ConvertirUTCPipe_Factory(t) {
      return new (t || ConvertirUTCPipe)();
    };

    ConvertirUTCPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "convertFecha",
      type: ConvertirUTCPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConvertirUTCPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'convertFecha'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/Fechas/fecha.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/Fechas/fecha.pipe.ts ***!
    \********************************************/

  /*! exports provided: MiFechaPipe */

  /***/
  function srcAppPipesFechasFechaPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiFechaPipe", function () {
      return MiFechaPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var MiFechaPipe =
    /*#__PURE__*/
    function () {
      function MiFechaPipe() {
        _classCallCheck(this, MiFechaPipe);
      }

      _createClass(MiFechaPipe, [{
        key: "transform",
        value: function transform(value) {
          moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('es');
          return moment__WEBPACK_IMPORTED_MODULE_1__(value).format('LLLL');
        }
      }]);

      return MiFechaPipe;
    }();

    MiFechaPipe.ɵfac = function MiFechaPipe_Factory(t) {
      return new (t || MiFechaPipe)();
    };

    MiFechaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "fecha",
      type: MiFechaPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiFechaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'fecha'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/Fechas/horario.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/Fechas/horario.pipe.ts ***!
    \**********************************************/

  /*! exports provided: HorarioPipe */

  /***/
  function srcAppPipesFechasHorarioPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HorarioPipe", function () {
      return HorarioPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var HorarioPipe =
    /*#__PURE__*/
    function () {
      function HorarioPipe() {
        _classCallCheck(this, HorarioPipe);
      }

      _createClass(HorarioPipe, [{
        key: "transform",
        value: function transform(value) {
          moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('es');
          return moment__WEBPACK_IMPORTED_MODULE_1__(value).format('h:mm a');
        }
      }]);

      return HorarioPipe;
    }();

    HorarioPipe.ɵfac = function HorarioPipe_Factory(t) {
      return new (t || HorarioPipe)();
    };

    HorarioPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "horario",
      type: HorarioPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorarioPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'horario'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/Textos/Imagen.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/Textos/Imagen.pipe.ts ***!
    \*********************************************/

  /*! exports provided: ImagenSelectPipe */

  /***/
  function srcAppPipesTextosImagenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagenSelectPipe", function () {
      return ImagenSelectPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImagenSelectPipe =
    /*#__PURE__*/
    function () {
      function ImagenSelectPipe() {
        _classCallCheck(this, ImagenSelectPipe);
      }

      _createClass(ImagenSelectPipe, [{
        key: "transform",
        value: function transform(valor) {
          var ruta = '';
          valor = valor.toLowerCase();

          if (valor.includes('entrada')) {
            ruta = '/assets/Entradas.png';
          } else if (valor.includes('salida')) {
            ruta = '/assets/Salidas.png';
          }

          return ruta;
        }
      }]);

      return ImagenSelectPipe;
    }();

    ImagenSelectPipe.ɵfac = function ImagenSelectPipe_Factory(t) {
      return new (t || ImagenSelectPipe)();
    };

    ImagenSelectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ImagenSelect",
      type: ImagenSelectPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagenSelectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ImagenSelect'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/Textos/colores.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/Textos/colores.pipe.ts ***!
    \**********************************************/

  /*! exports provided: ColoresPipe */

  /***/
  function srcAppPipesTextosColoresPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColoresPipe", function () {
      return ColoresPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ColoresPipe =
    /*#__PURE__*/
    function () {
      function ColoresPipe() {
        _classCallCheck(this, ColoresPipe);
      }

      _createClass(ColoresPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value.tipo === 'dibujar') {
            return "background-color: ".concat(value.dibujo.fondo, "; color: ").concat(value.dibujo.color, ";");
          }
        }
      }]);

      return ColoresPipe;
    }();

    ColoresPipe.ɵfac = function ColoresPipe_Factory(t) {
      return new (t || ColoresPipe)();
    };

    ColoresPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "colores",
      type: ColoresPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColoresPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'colores'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/Textos/recortar.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/pipes/Textos/recortar.pipe.ts ***!
    \***********************************************/

  /*! exports provided: RecortarTextoPipe */

  /***/
  function srcAppPipesTextosRecortarPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecortarTextoPipe", function () {
      return RecortarTextoPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RecortarTextoPipe =
    /*#__PURE__*/
    function () {
      function RecortarTextoPipe() {
        _classCallCheck(this, RecortarTextoPipe);
      }

      _createClass(RecortarTextoPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value.length >= 50) {
            return value.substr(0, 50) + '...';
          } else {
            return value;
          }
        }
      }]);

      return RecortarTextoPipe;
    }();

    RecortarTextoPipe.ɵfac = function RecortarTextoPipe_Factory(t) {
      return new (t || RecortarTextoPipe)();
    };

    RecortarTextoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "recortar",
      type: RecortarTextoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecortarTextoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'recortar'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/archivos/descarga.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/archivos/descarga.pipe.ts ***!
    \*************************************************/

  /*! exports provided: DescargaPipe */

  /***/
  function srcAppPipesArchivosDescargaPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescargaPipe", function () {
      return DescargaPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/Api/EstadoCitas.service */
    "./src/app/providers/Api/EstadoCitas.service.ts");

    var DescargaPipe =
    /*#__PURE__*/
    function () {
      function DescargaPipe(file, apiCitas, dom) {
        _classCallCheck(this, DescargaPipe);

        this.file = file;
        this.apiCitas = apiCitas;
        this.dom = dom;
      }

      _createClass(DescargaPipe, [{
        key: "transform",
        value: function transform(file) {
          return this.validar(file).then(function (e) {
            return e;
          });
        }
      }, {
        key: "validar",
        value: function validar(file) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var html, url;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.file.checkFile(this.file.dataDirectory + 'MimotoMedia/', file);

                  case 3:
                    html = _context.sent;

                    if (!html) {
                      _context.next = 9;
                      break;
                    }

                    console.log(html, ' html');
                    url = window.Ionic.WebView.convertFileSrc(this.file.dataDirectory + 'MimotoMedia/' + file);
                    console.log('url', url, this.dom.bypassSecurityTrustUrl(url));
                    return _context.abrupt("return", '<video width="100%" src="' + url + '" controls></video>');

                  case 9:
                    _context.next = 14;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](0);
                    // tslint:disable-next-line: deprecation
                    this.apiCitas.descargarArchivosChat(file).subscribe(function (descarga) {
                      console.log(descarga, ' Descargando');
                      var url = window.Ionic.WebView.convertFileSrc(_this.file.dataDirectory + 'MimotoMedia/' + file);
                      console.log('url descargada', url, _this.dom.bypassSecurityTrustUrl(url));
                      return '<video width="100%" src="' + url + '" controls></video>';
                    }, function (error) {
                      return '<ion-chip color="danger">Error al escargar  ' + error + '</ion-chip>';
                    });

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 11]]);
          }));
        }
      }]);

      return DescargaPipe;
    }();

    DescargaPipe.ɵfac = function DescargaPipe_Factory(t) {
      return new (t || DescargaPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_4__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
    };

    DescargaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "descarga",
      type: DescargaPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DescargaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'descarga'
        }]
      }], function () {
        return [{
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]
        }, {
          type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_4__["EstadoCitasService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/filtros/filtro-chat.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipes/filtros/filtro-chat.pipe.ts ***!
    \***************************************************/

  /*! exports provided: FiltroChat */

  /***/
  function srcAppPipesFiltrosFiltroChatPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroChat", function () {
      return FiltroChat;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FiltroChat =
    /*#__PURE__*/
    function () {
      function FiltroChat() {
        _classCallCheck(this, FiltroChat);
      }

      _createClass(FiltroChat, [{
        key: "transform",
        value: function transform(listado, param) {
          param = param.toLowerCase();

          if (param === '') {
            return listado;
          } else {
            console.log(param);
            return listado.filter(function (item) {
              var val = item;
              item = item.toLowerCase();

              if (item.includes(param)) {
                item = val;
                return val;
              }
            });
          }
        }
      }]);

      return FiltroChat;
    }();

    FiltroChat.ɵfac = function FiltroChat_Factory(t) {
      return new (t || FiltroChat)();
    };

    FiltroChat.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filtroChat",
      type: FiltroChat,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltroChat, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filtroChat'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/filtros/filtro-recordatorio.pipe.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pipes/filtros/filtro-recordatorio.pipe.ts ***!
    \***********************************************************/

  /*! exports provided: FiltroRecordatorio */

  /***/
  function srcAppPipesFiltrosFiltroRecordatorioPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroRecordatorio", function () {
      return FiltroRecordatorio;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FiltroRecordatorio =
    /*#__PURE__*/
    function () {
      function FiltroRecordatorio() {
        _classCallCheck(this, FiltroRecordatorio);
      }

      _createClass(FiltroRecordatorio, [{
        key: "transform",
        value: function transform(listado, param, arr) {
          param = param.toLowerCase();

          if (param === '') {
            return [];
          } else {
            return listado.filter(function (item) {
              item.usuarioEmisor.checked = false;

              if (arr.length > 0) {
                if (arr.find(function (person) {
                  return person.id === item.usuarioEmisor._id;
                })) {
                  item.usuarioEmisor.checked = true;
                }
              }

              var val = item.usuarioEmisor.nombrecompleto;
              item.usuarioEmisor.nombrecompleto = item.usuarioEmisor.nombrecompleto.toLowerCase();

              if (item.usuarioEmisor.nombrecompleto.includes(param)) {
                item.usuarioEmisor.nombrecompleto = val;
                return val;
              }
            });
          }
        }
      }]);

      return FiltroRecordatorio;
    }();

    FiltroRecordatorio.ɵfac = function FiltroRecordatorio_Factory(t) {
      return new (t || FiltroRecordatorio)();
    };

    FiltroRecordatorio.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filtroRepo",
      type: FiltroRecordatorio,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltroRecordatorio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filtroRepo'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/filtros/filtro-recorlist.pipe.ts":
  /*!********************************************************!*\
    !*** ./src/app/pipes/filtros/filtro-recorlist.pipe.ts ***!
    \********************************************************/

  /*! exports provided: FiltroRecordatoriosLista */

  /***/
  function srcAppPipesFiltrosFiltroRecorlistPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroRecordatoriosLista", function () {
      return FiltroRecordatoriosLista;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FiltroRecordatoriosLista =
    /*#__PURE__*/
    function () {
      function FiltroRecordatoriosLista() {
        _classCallCheck(this, FiltroRecordatoriosLista);
      }

      _createClass(FiltroRecordatoriosLista, [{
        key: "transform",
        value: function transform(lista, tipoRetorno, texto) {
          texto = texto.toLowerCase();
          console.log(texto, lista);
          var listado = lista;

          if (texto !== '') {
            listado = lista.filter(function (item) {
              var titulo = item.informacion.titulo.toLowerCase();
              var contenido = item.informacion.contenido.toLowerCase();

              if (titulo.includes(texto) || contenido.includes(texto)) {
                item.nada = false;
                return item;
              }
            });
          }

          listado = listado.filter(function (item) {
            return item.tipo === tipoRetorno;
          });

          if (listado.length === 0) {
            return [{
              nada: true
            }];
          }

          return listado;
        }
      }]);

      return FiltroRecordatoriosLista;
    }();

    FiltroRecordatoriosLista.ɵfac = function FiltroRecordatoriosLista_Factory(t) {
      return new (t || FiltroRecordatoriosLista)();
    };

    FiltroRecordatoriosLista.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filtroRecorList",
      type: FiltroRecordatoriosLista,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltroRecordatoriosLista, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filtroRecorList'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/filtros/mi-filtro.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/filtros/mi-filtro.pipe.ts ***!
    \*************************************************/

  /*! exports provided: MiFiltroPipe */

  /***/
  function srcAppPipesFiltrosMiFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiFiltroPipe", function () {
      return MiFiltroPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MiFiltroPipe =
    /*#__PURE__*/
    function () {
      function MiFiltroPipe() {
        _classCallCheck(this, MiFiltroPipe);
      }

      _createClass(MiFiltroPipe, [{
        key: "transform",
        value: function transform(value, texto) {
          texto = texto.toLowerCase();
          var array = value.filter(function (item) {
            item.nombrecompleto = item.nombrecompleto.toLowerCase();
            return item.nombrecompleto.includes(texto);
          });
          return array;
        }
      }]);

      return MiFiltroPipe;
    }();

    MiFiltroPipe.ɵfac = function MiFiltroPipe_Factory(t) {
      return new (t || MiFiltroPipe)();
    };

    MiFiltroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "miFiltro",
      type: MiFiltroPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiFiltroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'miFiltro'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/numeros/Contar.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/numeros/Contar.pipe.ts ***!
    \**********************************************/

  /*! exports provided: ContarPipe */

  /***/
  function srcAppPipesNumerosContarPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContarPipe", function () {
      return ContarPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContarPipe =
    /*#__PURE__*/
    function () {
      function ContarPipe() {
        _classCallCheck(this, ContarPipe);
      }

      _createClass(ContarPipe, [{
        key: "transform",
        value: function transform(value) {
          var cantidad = 0;
          value.forEach(function (item) {
            cantidad = cantidad + parseFloat(item.cantidad);
          });
          return cantidad;
        }
      }]);

      return ContarPipe;
    }();

    ContarPipe.ɵfac = function ContarPipe_Factory(t) {
      return new (t || ContarPipe)();
    };

    ContarPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "contar",
      type: ContarPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContarPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'contar'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/numeros/calculos.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/numeros/calculos.pipe.ts ***!
    \************************************************/

  /*! exports provided: ValoresPipe */

  /***/
  function srcAppPipesNumerosCalculosPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValoresPipe", function () {
      return ValoresPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValoresPipe =
    /*#__PURE__*/
    function () {
      function ValoresPipe() {
        _classCallCheck(this, ValoresPipe);
      }

      _createClass(ValoresPipe, [{
        key: "transform",
        value: function transform(value) {
          console.log(value, 'valor');
          var cantidad = 0;
          value.forEach(function (item) {
            cantidad = cantidad + parseFloat(item.valoru);
          });
          console.log(cantidad);
          return cantidad;
        }
      }]);

      return ValoresPipe;
    }();

    ValoresPipe.ɵfac = function ValoresPipe_Factory(t) {
      return new (t || ValoresPipe)();
    };

    ValoresPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "calculo",
      type: ValoresPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValoresPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'calculo'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/numeros/decimales.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/numeros/decimales.pipe.ts ***!
    \*************************************************/

  /*! exports provided: DecimalesPipe */

  /***/
  function srcAppPipesNumerosDecimalesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalesPipe", function () {
      return DecimalesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DecimalesPipe =
    /*#__PURE__*/
    function () {
      function DecimalesPipe() {
        _classCallCheck(this, DecimalesPipe);
      }

      _createClass(DecimalesPipe, [{
        key: "transform",
        value: function transform(value, locale) {
          if (value === 0) {
            return 0;
          } else {
            return new Intl.NumberFormat(locale, {
              minimumFractionDigits: 1
            }).format(value);
          }
        }
      }]);

      return DecimalesPipe;
    }();

    DecimalesPipe.ɵfac = function DecimalesPipe_Factory(t) {
      return new (t || DecimalesPipe)();
    };

    DecimalesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "decimales",
      type: DecimalesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecimalesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'decimales'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./filtros/mi-filtro.pipe */
    "./src/app/pipes/filtros/mi-filtro.pipe.ts");
    /* harmony import */


    var _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./archivos/descarga.pipe */
    "./src/app/pipes/archivos/descarga.pipe.ts");
    /* harmony import */


    var _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./numeros/decimales.pipe */
    "./src/app/pipes/numeros/decimales.pipe.ts");
    /* harmony import */


    var _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filtros/filtro-chat.pipe */
    "./src/app/pipes/filtros/filtro-chat.pipe.ts");
    /* harmony import */


    var _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Fechas/fecha.pipe */
    "./src/app/pipes/Fechas/fecha.pipe.ts");
    /* harmony import */


    var _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./filtros/filtro-recordatorio.pipe */
    "./src/app/pipes/filtros/filtro-recordatorio.pipe.ts");
    /* harmony import */


    var _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Textos/recortar.pipe */
    "./src/app/pipes/Textos/recortar.pipe.ts");
    /* harmony import */


    var _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./filtros/filtro-recorlist.pipe */
    "./src/app/pipes/filtros/filtro-recorlist.pipe.ts");
    /* harmony import */


    var _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Fechas/horario.pipe */
    "./src/app/pipes/Fechas/horario.pipe.ts");
    /* harmony import */


    var _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Fechas/ConversionUTC.pipe */
    "./src/app/pipes/Fechas/ConversionUTC.pipe.ts");
    /* harmony import */


    var _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Fechas/CambioUTC.pipe */
    "./src/app/pipes/Fechas/CambioUTC.pipe.ts");
    /* harmony import */


    var _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Textos/Imagen.pipe */
    "./src/app/pipes/Textos/Imagen.pipe.ts");
    /* harmony import */


    var _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./numeros/Contar.pipe */
    "./src/app/pipes/numeros/Contar.pipe.ts");
    /* harmony import */


    var _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./numeros/calculos.pipe */
    "./src/app/pipes/numeros/calculos.pipe.ts");
    /* harmony import */


    var _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Textos/colores.pipe */
    "./src/app/pipes/Textos/colores.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_1__["MiFiltroPipe"], _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroChat"], _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_2__["DescargaPipe"], _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_3__["DecimalesPipe"], _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_5__["MiFechaPipe"], _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroRecordatorio"], _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_7__["RecortarTextoPipe"], _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroRecordatoriosLista"], _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_9__["HorarioPipe"], _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_10__["ConvertirUTCPipe"], _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_11__["CambioUTCaLocalPipe"], _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_12__["ImagenSelectPipe"], _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_13__["ContarPipe"], _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_14__["ValoresPipe"], _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_15__["ColoresPipe"]],
        exports: [_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_1__["MiFiltroPipe"], _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_2__["DescargaPipe"], _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_3__["DecimalesPipe"], _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroChat"], _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_5__["MiFechaPipe"], _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroRecordatorio"], _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_7__["RecortarTextoPipe"], _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroRecordatoriosLista"], _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_9__["HorarioPipe"], _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_10__["ConvertirUTCPipe"], _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_11__["CambioUTCaLocalPipe"], _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_12__["ImagenSelectPipe"], _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_13__["ContarPipe"], _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_14__["ValoresPipe"], _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_15__["ColoresPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_1__["MiFiltroPipe"], _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroChat"], _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_2__["DescargaPipe"], _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_3__["DecimalesPipe"], _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_5__["MiFechaPipe"], _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroRecordatorio"], _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_7__["RecortarTextoPipe"], _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroRecordatoriosLista"], _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_9__["HorarioPipe"], _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_10__["ConvertirUTCPipe"], _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_11__["CambioUTCaLocalPipe"], _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_12__["ImagenSelectPipe"], _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_13__["ContarPipe"], _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_14__["ValoresPipe"], _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_15__["ColoresPipe"]],
          imports: [],
          exports: [_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_1__["MiFiltroPipe"], _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_2__["DescargaPipe"], _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_3__["DecimalesPipe"], _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroChat"], _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_5__["MiFechaPipe"], _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroRecordatorio"], _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_7__["RecortarTextoPipe"], _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroRecordatoriosLista"], _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_9__["HorarioPipe"], _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_10__["ConvertirUTCPipe"], _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_11__["CambioUTCaLocalPipe"], _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_12__["ImagenSelectPipe"], _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_13__["ContarPipe"], _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_14__["ValoresPipe"], _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_15__["ColoresPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Api/EstadoCitas.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/Api/EstadoCitas.service.ts ***!
    \******************************************************/

  /*! exports provided: EstadoCitasService */

  /***/
  function srcAppProvidersApiEstadoCitasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadoCitasService", function () {
      return EstadoCitasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");

    var EstadoCitasService =
    /*#__PURE__*/
    function () {
      function EstadoCitasService(http, MmyTransfer, file) {
        _classCallCheck(this, EstadoCitasService);

        this.http = http;
        this.MmyTransfer = MmyTransfer;
        this.file = file;
      }

      _createClass(EstadoCitasService, [{
        key: "hanflerError",
        value: function hanflerError(error) {
          return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(3000);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (errorHttp) {
            console.log('Entramos a intentos');

            if (errorHttp instanceof ErrorEvent) {
              throw new Error('Error de Red');
            } else {
              if (errorHttp.status === 401) {
                throw new Error('No tiene permisos para realizar esta petición, vuelva a iniciar sesión ');
              } else {
                throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
              }
            }
          }));
        }
      }, {
        key: "listadoTalleres",
        value: function listadoTalleres(token) {
          var _this2 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/talleres"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this2.hanflerError(error);
          }));
        }
      }, {
        key: "crearCita",
        value: function crearCita(token, data) {
          var _this3 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/crear"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this3.hanflerError(error);
          }));
        }
      }, {
        key: "listarCitas",
        value: function listarCitas(token) {
          var _this4 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/miscitas"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this4.hanflerError(error);
          }));
        }
      }, {
        key: "listarCitasTaller",
        value: function listarCitasTaller(token) {
          var _this5 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/miscitas/taller"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this5.hanflerError(error);
          }));
        }
      }, {
        key: "obtenerCita",
        value: function obtenerCita(token, cita) {
          var _this6 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token,
              'x-cita': cita
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/micita"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this6.hanflerError(error);
          }));
        }
      }, {
        key: "obtenerConversaciones",
        value: function obtenerConversaciones(token, cita, desde) {
          var _this7 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token,
              'x-idCita': cita,
              'x-desde': desde
            })
          };
          console.log(desde);
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/chat/uno"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this7.hanflerError(error);
          }));
        }
      }, {
        key: "obtenerConversacionesPendientes",
        value: function obtenerConversacionesPendientes(token, cita, fecha) {
          var _this8 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token,
              'x-idCita': cita,
              'x-fecha': fecha
            })
          };
          console.log(fecha);
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/chat/pendientes"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this8.hanflerError(error);
          }));
        }
      }, {
        key: "obtenerListaTrabajos",
        value: function obtenerListaTrabajos(token) {
          var _this9 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/trabajos/taller"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this9.hanflerError(error);
          }));
        }
      }, {
        key: "ingresarListaTrabajos",
        value: function ingresarListaTrabajos(token, data) {
          var _this10 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/trabajos"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this10.hanflerError(error);
          }));
        }
      }, {
        key: "editarCita",
        value: function editarCita(token, cita, data) {
          var _this11 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token,
              'x-cita': cita
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/micita"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this11.hanflerError(error);
          }));
        }
      }, {
        key: "ingresarChat",
        value: function ingresarChat(token, data) {
          var _this12 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/chat"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this12.hanflerError(error);
          }));
        }
      }, {
        key: "subirArchivosChat",
        value: function subirArchivosChat(token, idCita, imagen, name, mime) {
          console.log('archivo', imagen);
          var options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'POST',
            headers: {
              'x-token': token,
              'x-idCita': idCita
            }
          };
          var fileTransfer = this.MmyTransfer.create();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/citas/chat/upload"), options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log("No se pudo subir la imagen ", error);
            throw new Error("No se pudo subir la imagen ");
          }));
        }
      }, {
        key: "descargarArchivosChat",
        value: function descargarArchivosChat(file) {
          var fileTransfer = this.MmyTransfer.create();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.download("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/Citas/").concat(file), this.file.dataDirectory + 'MimotoMedia/' + file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log("No se pudo subir la imagen ", error);
            throw new Error("No se pudo subir la imagen ");
          }));
        }
      }, {
        key: "subirArchivosHoja",
        value: function subirArchivosHoja(token, id, imagen, asunto, tipo, name, mime) {
          console.log('archivo', imagen);
          var options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'POST',
            headers: {
              'x-token': token,
              'x-idhoja': id,
              'x-asunto': asunto,
              'x-tipo': tipo
            }
          };
          var fileTransfer = this.MmyTransfer.create();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja/upload"), options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log("No se pudo subir la imagen ", error);
            throw new Error("No se pudo subir la imagen ");
          }));
        }
      }, {
        key: "leefotos",
        value: function leefotos(token, data) {
          var _this13 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja/fotos"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this13.hanflerError(error);
          }));
        }
      }, {
        key: "leeHoja",
        value: function leeHoja(token, data) {
          var _this14 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this14.hanflerError(error);
          }));
        }
      }, {
        key: "leeHoja2",
        value: function leeHoja2(token, data) {
          var _this15 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja/leer"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this15.hanflerError(error);
          }));
        }
      }, {
        key: "crearHoja",
        value: function crearHoja(token, data) {
          var _this16 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this16.hanflerError(error);
          }));
        }
      }, {
        key: "editarHoja",
        value: function editarHoja(token, data) {
          var _this17 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja/datos"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this17.hanflerError(error);
          }));
        }
      }, {
        key: "buscarHojas",
        value: function buscarHojas(token, data) {
          var _this18 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja/mios"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this18.hanflerError(error);
          }));
        }
      }, {
        key: "buscarHojasFiltro",
        value: function buscarHojasFiltro(token, data) {
          var _this19 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"], "/hoja/buscar/"), data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this19.hanflerError(error);
          }));
        }
      }]);

      return EstadoCitasService;
    }();

    EstadoCitasService.ɵfac = function EstadoCitasService_Factory(t) {
      return new (t || EstadoCitasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]));
    };

    EstadoCitasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EstadoCitasService,
      factory: EstadoCitasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoCitasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346-es5.js.map