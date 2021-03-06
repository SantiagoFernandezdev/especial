function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Facturas-factura-nueva-factura-nueva-module"], {
  /***/
  "./src/app/pages/Facturas/factura-nueva/factura-nueva-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: FacturaNuevaPageRoutingModule */

  /***/
  function srcAppPagesFacturasFacturaNuevaFacturaNuevaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturaNuevaPageRoutingModule", function () {
      return FacturaNuevaPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _factura_nueva_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./factura-nueva.page */
    "./src/app/pages/Facturas/factura-nueva/factura-nueva.page.ts");

    var routes = [{
      path: '',
      component: _factura_nueva_page__WEBPACK_IMPORTED_MODULE_2__["FacturaNuevaPage"]
    }];

    var FacturaNuevaPageRoutingModule = function FacturaNuevaPageRoutingModule() {
      _classCallCheck(this, FacturaNuevaPageRoutingModule);
    };

    FacturaNuevaPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacturaNuevaPageRoutingModule
    });
    FacturaNuevaPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacturaNuevaPageRoutingModule_Factory(t) {
        return new (t || FacturaNuevaPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacturaNuevaPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacturaNuevaPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Facturas/factura-nueva/factura-nueva.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva.module.ts ***!
    \**********************************************************************/

  /*! exports provided: FacturaNuevaPageModule */

  /***/
  function srcAppPagesFacturasFacturaNuevaFacturaNuevaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturaNuevaPageModule", function () {
      return FacturaNuevaPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _factura_nueva_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./factura-nueva-routing.module */
    "./src/app/pages/Facturas/factura-nueva/factura-nueva-routing.module.ts");
    /* harmony import */


    var _factura_nueva_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./factura-nueva.page */
    "./src/app/pages/Facturas/factura-nueva/factura-nueva.page.ts");
    /* harmony import */


    var _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal-factura/modal-factura.page */
    "./src/app/pages/Facturas/modal-factura/modal-factura.page.ts");
    /* harmony import */


    var _modal_factura_modal_factura_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-factura/modal-factura.module */
    "./src/app/pages/Facturas/modal-factura/modal-factura.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var FacturaNuevaPageModule = function FacturaNuevaPageModule() {
      _classCallCheck(this, FacturaNuevaPageModule);
    };

    FacturaNuevaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacturaNuevaPageModule
    });
    FacturaNuevaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacturaNuevaPageModule_Factory(t) {
        return new (t || FacturaNuevaPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _factura_nueva_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaNuevaPageRoutingModule"], _modal_factura_modal_factura_module__WEBPACK_IMPORTED_MODULE_7__["ModalFacturaPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacturaNuevaPageModule, {
        declarations: [_factura_nueva_page__WEBPACK_IMPORTED_MODULE_5__["FacturaNuevaPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _factura_nueva_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaNuevaPageRoutingModule"], _modal_factura_modal_factura_module__WEBPACK_IMPORTED_MODULE_7__["ModalFacturaPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacturaNuevaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_6__["ModalFacturaPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _factura_nueva_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaNuevaPageRoutingModule"], _modal_factura_modal_factura_module__WEBPACK_IMPORTED_MODULE_7__["ModalFacturaPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
          declarations: [_factura_nueva_page__WEBPACK_IMPORTED_MODULE_5__["FacturaNuevaPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Facturas/factura-nueva/factura-nueva.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva.page.ts ***!
    \********************************************************************/

  /*! exports provided: FacturaNuevaPage */

  /***/
  function srcAppPagesFacturasFacturaNuevaFacturaNuevaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturaNuevaPage", function () {
      return FacturaNuevaPage;
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


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Api/Facturas.service */
    "./src/app/providers/Api/Facturas.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/Utilidades/LoadingService.service */
    "./src/app/providers/Utilidades/LoadingService.service.ts");
    /* harmony import */


    var _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-factura/modal-factura.page */
    "./src/app/pages/Facturas/modal-factura/modal-factura.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../pipes/numeros/decimales.pipe */
    "./src/app/pipes/numeros/decimales.pipe.ts");

    var _c0 = ["inifinito"];

    function FacturaNuevaPage_ion_list_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "La factura se estructura de acuerdo a los par\xE1metros de configuraci\xF3n establecidos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacturaNuevaPage_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r651 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No tiene facturas creadas hasta el momento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacturaNuevaPage_div_11_Template_ion_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r651);

          var ctx_r650 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r650.abrir();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Crear Factura");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacturaNuevaPage_ion_item_sliding_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r654 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cliente: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Nit o CC: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item-options", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacturaNuevaPage_ion_item_sliding_13_Template_ion_item_option_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r654);

          var factura_r652 = ctx.$implicit;

          var ctx_r653 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r653.alerta(factura_r652._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var factura_r652 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FACTURA N\xDAMERO ", factura_r652.consecutivo, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 4, factura_r652.total, "es-CO"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](factura_r652.cliente);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](factura_r652.cc);
      }
    }

    function FacturaNuevaPage_ion_infinite_scroll_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r657 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-infinite-scroll", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function FacturaNuevaPage_ion_infinite_scroll_14_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r657);

          var ctx_r656 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r656.loadData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-infinite-scroll-content", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacturaNuevaPage_ion_fab_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r659 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-fab-button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacturaNuevaPage_ion_fab_15_Template_ion_fab_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r659);

          var ctx_r658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r658.abrir();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var FacturaNuevaPage =
    /*#__PURE__*/
    function () {
      function FacturaNuevaPage(almacenamiento, toast, apiFactura, modalCtrl, loading, alert) {
        _classCallCheck(this, FacturaNuevaPage);

        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiFactura = apiFactura;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.alert = alert;
        this.facturas = [];
        this.car = true;
        this.load = false;
        this.nuevo = false;
        this.mostrar = false;
        this.nit = '';
        this.direccion = '';
        this.regimen = '';
        this.titular = '';
        this.iva = false;
        this.valorIva = 0;
        this.id = '';
        this.mensaje = true;
        this.desde = 0;
        this.patron = '';
      }

      _createClass(FacturaNuevaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.mensaje = false;
          }, 7000);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.mostrar = false;
          this.consultar();
        }
      }, {
        key: "refrescando",
        value: function refrescando(event) {
          this.cargarFacturas().then(function () {
            event.target.complete();
          }).catch(function () {
            return event.target.complete();
          });
        }
      }, {
        key: "cargarFacturas",
        value: function cargarFacturas() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.desde = 0;

                    if (this.load) {
                      this.infinite.disabled = false;
                    }

                    _context.next = 4;
                    return this.almacenamiento.obtenerToken();

                  case 4:
                    info = _context.sent;

                    if (info) {
                      this.apiFactura.consultarFacturas(info.token, {
                        desde: this.desde
                      }).subscribe(function (data) {
                        if (data.exe) {
                          _this2.facturas = data.response;
                        } else {
                          _this2.toast.toastError('No se pudo cargar las facturas, intentelo más tarde');
                        }

                        _this2.load = true;
                      }, function (err) {
                        _this2.toast.toastError('No se pudo cargar las facturas, intentelo más tarde');
                      });
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "buscar",
        value: function buscar(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(event.detail.value !== '')) {
                      _context2.next = 10;
                      break;
                    }

                    this.desde = 0;
                    this.infinite.disabled = false;
                    this.patron = event.detail.value;
                    _context2.next = 6;
                    return this.almacenamiento.obtenerToken();

                  case 6:
                    info = _context2.sent;

                    if (info) {
                      this.apiFactura.consultarFacturas(info.token, {
                        desde: this.desde,
                        patron: this.patron
                      }).subscribe(function (data) {
                        // console.log(data, 'mi data');
                        if (data.exe) {
                          _this3.facturas = data.response;

                          if (data.response.length === 0) {
                            _this3.desde = 0;
                          }
                        } else {
                          _this3.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                      }, function (err) {
                        _this3.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                      });
                    }

                    _context2.next = 11;
                    break;

                  case 10:
                    this.desde = 0;

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // event.target.complete()
                    this.desde = this.desde + 15;
                    _context3.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context3.sent;

                    if (info) {
                      if (this.patron === '') {
                        this.apiFactura.consultarFacturas(info.token, {
                          desde: this.desde,
                          patron: this.patron
                        }).subscribe(function (data) {
                          // console.log(data, 'CARGADA OFICIAL');
                          if (data.exe) {
                            if (data.response.length > 0) {
                              data.response.forEach(function (hoja) {
                                _this4.facturas.push(hoja);
                              });
                              event.target.complete();
                            } else {
                              event.target.disabled = true;
                              _this4.desde = 0;
                            }
                          } else {
                            _this4.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                          }
                        }, function (err) {
                          _this4.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                        });
                      } else {
                        // tslint:disable-next-line:max-line-length
                        // console.log(this.desde, 'pli');
                        this.apiFactura.consultarFacturas(info.token, {
                          desde: this.desde,
                          patron: this.patron
                        }).subscribe(function (data) {
                          // console.log(data, 'mi data 2', this.desde);
                          if (data.exe) {
                            if (data.response.length > 0) {
                              data.response.forEach(function (hoja) {
                                _this4.facturas.push(hoja);
                              });
                              event.target.complete();
                            } else {
                              event.target.disabled = true;
                              _this4.desde = 0;
                            }
                          } else {
                            _this4.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                          }
                        }, function (err) {
                          _this4.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        });
                      }
                    }

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "consultar",
        value: function consultar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context4.sent;

                    if (info) {
                      this.apiFactura.consultarConfiguracion(info.token).subscribe(function (data) {
                        if (data.exe) {
                          if (!data.response) {
                            _this5.nuevo = true;
                          } else {
                            // console.log(data)
                            _this5.regimen = data.response.regimen;
                            _this5.direccion = data.response.direccion;
                            _this5.titular = data.response.titular;
                            _this5.nit = data.response.nit;
                            _this5.iva = data.response.iva;
                            _this5.valorIva = data.response.valorIva;
                            _this5.id = data.response._id;
                            _this5.mostrar = true;

                            _this5.cargarFacturas();
                          }
                        } else {
                          _this5.toast.toastError('No se pudo consultar la información de la configuración, intentelo mpas tarde');
                        }
                      }, function (err) {
                        _this5.toast.toastError('No se pudo consultar la información de la configuración, intentelo mpas tarde');
                      });
                    }

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "abrir",
        value: function abrir() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_7__["ModalFacturaPage"],
                      componentProps: {
                        data: {
                          iva: this.iva,
                          regimen: this.regimen,
                          direccion: this.direccion,
                          nit: this.nit,
                          valorIva: this.valorIva,
                          id: this.id
                        }
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    _context5.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context5.sent;

                    if (cerrado) {
                      if (cerrado.data) {
                        if (cerrado.data.exe) {
                          this.cargarFacturas();
                        }
                      }
                    }

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "alerta",
        value: function alerta(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alert.create({
                      header: 'Correo electrónico',
                      message: 'Escriba el correo electrónico donde se enviará el documento pdf de la factura',
                      inputs: [{
                        type: 'text',
                        name: 'correo'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel'
                      }, {
                        text: 'Enviar',
                        handler: function handler(data) {
                          _this6.pdf(data.correo, id);
                        }
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "pdf",
        value: function pdf(correo, id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context7.sent;
                    this.loading.cargaProcesos('Creando Factura y enviandola al correo');

                    if (info) {
                      this.apiFactura.enviarrFacturas(info.token, {
                        id: id,
                        correo: correo
                      }).subscribe(function (data) {
                        // console.log(data, 'respuesta')
                        if (data.exe) {
                          _this7.toast.toastExitoso('Factura generada y enviada al correo electrónico del cliente');
                        } else {
                          _this7.toast.toastError('No se pudo enviar la factura, intentelo mpas tarde');
                        }

                        _this7.loading.finalizarCargado();
                      }, function (err) {
                        _this7.loading.finalizarCargado();

                        _this7.toast.toastError('No se pudo enviar la factura, intentelo mpas tarde');
                      });
                    }

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return FacturaNuevaPage;
    }();

    FacturaNuevaPage.ɵfac = function FacturaNuevaPage_Factory(t) {
      return new (t || FacturaNuevaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_3__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_4__["FacturasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]));
    };

    FacturaNuevaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FacturaNuevaPage,
      selectors: [["app-factura-nueva"]],
      viewQuery: function FacturaNuevaPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infinite = _t.first);
        }
      },
      decls: 16,
      vars: 5,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/menu/factura"], [4, "ngIf"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["debounce", "300", "mode", "ios", "placeholder", "Buscar Productos", 3, "ionChange"], [1, "divider"], ["class", "cen", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["color", "barra"], [1, "ion-text-wrap"], [1, "cen"], ["src", "/assets/NuevaFactura.png", "width", "100px", "alt", ""], [1, "tituloGrande"], ["mode", "ios", "shape", "round", "color", "success", 3, "click"], [1, "fl"], [1, "caja"], [1, "flex"], ["side", "end"], ["color", "medium", 3, "click"], ["name", "document-text-outline", "slot", "icon-only"], ["threshold", "100px", 3, "ionInfinite"], ["inifinito", ""], ["loadingSpinner", "bubbles", "loadingText", "Cargando Hojas de Vida..."], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "barra", 3, "click"], ["name", "add-outline"]],
      template: function FacturaNuevaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Crear Factura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FacturaNuevaPage_ion_list_6_Template, 4, 0, "ion-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function FacturaNuevaPage_Template_ion_refresher_ionRefresh_7_listener($event) {
            return ctx.refrescando($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-searchbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FacturaNuevaPage_Template_ion_searchbar_ionChange_9_listener($event) {
            return ctx.buscar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FacturaNuevaPage_div_11_Template, 6, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FacturaNuevaPage_ion_item_sliding_13_Template, 25, 7, "ion-item-sliding", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FacturaNuevaPage_ion_infinite_scroll_14_Template, 3, 0, "ion-infinite-scroll", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FacturaNuevaPage_ion_fab_15_Template, 3, 0, "ion-fab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mensaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.facturas.length === 0 && ctx.load);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.facturas);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.facturas.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFabButton"]],
      pipes: [_pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_9__["DecimalesPipe"]],
      styles: [".cen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n\n.fl[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  font-size: 18px !important;\n  color: red;\n  font-weight: bold;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding-bottom: 5px;\n}\n\n.fl[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 60%;\n  max-width: 80%;\n  background-color: #FCF3AA;\n  padding: 3px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRmFjdHVyYXMvZmFjdHVyYS1udWV2YS9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcRmFjdHVyYXNcXGZhY3R1cmEtbnVldmFcXGZhY3R1cmEtbnVldmEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9GYWN0dXJhcy9mYWN0dXJhLW51ZXZhL2ZhY3R1cmEtbnVldmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9GYWN0dXJhcy9mYWN0dXJhLW51ZXZhL2ZhY3R1cmEtbnVldmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZmwgLmNhamEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjNBQTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSIsIi5jZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0dWxvR3JhbmRlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmZsIC5jYWphIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjNBQTtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FacturaNuevaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-factura-nueva',
          templateUrl: './factura-nueva.page.html',
          styleUrls: ['./factura-nueva.page.scss']
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_3__["ToastServices"]
        }, {
          type: _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_4__["FacturasService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      }, {
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inifinito', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/Facturas/modal-factura/modal-factura-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/Facturas/modal-factura/modal-factura-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ModalFacturaPageRoutingModule */

  /***/
  function srcAppPagesFacturasModalFacturaModalFacturaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalFacturaPageRoutingModule", function () {
      return ModalFacturaPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modal_factura_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal-factura.page */
    "./src/app/pages/Facturas/modal-factura/modal-factura.page.ts");

    var routes = [{
      path: '',
      component: _modal_factura_page__WEBPACK_IMPORTED_MODULE_2__["ModalFacturaPage"]
    }];

    var ModalFacturaPageRoutingModule = function ModalFacturaPageRoutingModule() {
      _classCallCheck(this, ModalFacturaPageRoutingModule);
    };

    ModalFacturaPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalFacturaPageRoutingModule
    });
    ModalFacturaPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalFacturaPageRoutingModule_Factory(t) {
        return new (t || ModalFacturaPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalFacturaPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalFacturaPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Facturas/modal-factura/modal-factura.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/Facturas/modal-factura/modal-factura.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ModalFacturaPageModule */

  /***/
  function srcAppPagesFacturasModalFacturaModalFacturaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalFacturaPageModule", function () {
      return ModalFacturaPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_factura_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modal-factura-routing.module */
    "./src/app/pages/Facturas/modal-factura/modal-factura-routing.module.ts");
    /* harmony import */


    var _modal_factura_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-factura.page */
    "./src/app/pages/Facturas/modal-factura/modal-factura.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var ModalFacturaPageModule = function ModalFacturaPageModule() {
      _classCallCheck(this, ModalFacturaPageModule);
    };

    ModalFacturaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalFacturaPageModule
    });
    ModalFacturaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalFacturaPageModule_Factory(t) {
        return new (t || ModalFacturaPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _modal_factura_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalFacturaPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalFacturaPageModule, {
        declarations: [_modal_factura_page__WEBPACK_IMPORTED_MODULE_5__["ModalFacturaPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _modal_factura_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalFacturaPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalFacturaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _modal_factura_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalFacturaPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          declarations: [_modal_factura_page__WEBPACK_IMPORTED_MODULE_5__["ModalFacturaPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Facturas/modal-factura/modal-factura.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/Facturas/modal-factura/modal-factura.page.ts ***!
    \********************************************************************/

  /*! exports provided: ModalFacturaPage */

  /***/
  function srcAppPagesFacturasModalFacturaModalFacturaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalFacturaPage", function () {
      return ModalFacturaPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/Api/Facturas.service */
    "./src/app/providers/Api/Facturas.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../pipes/numeros/decimales.pipe */
    "./src/app/pipes/numeros/decimales.pipe.ts");

    function ModalFacturaPage_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cargando la interfaz...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ModalFacturaPage_ion_list_9_ion_item_sliding_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r629 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cantidad: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Valor unitario: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item-options", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFacturaPage_ion_list_9_ion_item_sliding_8_Template_ion_item_option_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r629);

          var i_r627 = ctx.index;

          var ctx_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r628.eliminar(i_r627);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r626 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r626.item);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r626.cantidad);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 4, item_r626.valoru, "es-CO"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 7, item_r626.total, "es-CO"), "");
      }
    }

    function ModalFacturaPage_ion_list_9_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Subtotal: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tl_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 1, tl_r630.subtotal, "es-CO"), "");
      }
    }

    function ModalFacturaPage_ion_list_9_div_10_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Iva: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tl_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 1, tl_r630.iva, "es-CO"), "");
      }
    }

    function ModalFacturaPage_ion_list_9_div_10_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tl_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 1, tl_r630.total, "es-CO"), "");
      }
    }

    function ModalFacturaPage_ion_list_9_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalFacturaPage_ion_list_9_div_10_div_1_Template, 7, 4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalFacturaPage_ion_list_9_div_10_div_2_Template, 7, 4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalFacturaPage_ion_list_9_div_10_div_3_Template, 7, 4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r625.items.length > 0 && ctx_r625.carga);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r625.items.length > 0 && ctx_r625.data.iva);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r625.items.length > 0 && ctx_r625.carga);
      }
    }

    function ModalFacturaPage_ion_list_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r638 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "A\xF1adir un nuevo item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFacturaPage_ion_list_9_Template_ion_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r637 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r637.crear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ModalFacturaPage_ion_list_9_ion_item_sliding_8_Template, 25, 10, "ion-item-sliding", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ModalFacturaPage_ion_list_9_div_10_Template, 4, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalFacturaPage_ion_list_9_Template_ion_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r639 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r639.cliente = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalFacturaPage_ion_list_9_Template_ion_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r640 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r640.telefono = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalFacturaPage_ion_list_9_Template_ion_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r641 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r641.direccion = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalFacturaPage_ion_list_9_Template_ion_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r642 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r642.cc = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalFacturaPage_ion_list_9_Template_ion_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r643.ciudad = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFacturaPage_ion_list_9_Template_ion_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r638);

          var ctx_r644 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r644.guardar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "CREAR FACTURA");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r623 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r623.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r623.totales);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r623.cliente);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r623.telefono);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r623.direccion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r623.cc);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r623.ciudad);
      }
    }

    var ModalFacturaPage =
    /*#__PURE__*/
    function () {
      function ModalFacturaPage(modalCtrl, almacenamiento, toast, alertCtrl, apiFactura) {
        _classCallCheck(this, ModalFacturaPage);

        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.apiFactura = apiFactura;
        this.items = [];
        this.totales = [];
        this.subtotal = 0;
        this.iva = 0;
        this.total = 0;
        this.cliente = '';
        this.telefono = '0';
        this.direccion = '';
        this.cc = '';
        this.ciudad = '';
        this.id = '';
        this.carga = false;
      }

      _createClass(ModalFacturaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// console.log(this.data)
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "crear",
        value: function crear() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertCtrl.create({
                      header: 'Crear Item',
                      inputs: [{
                        type: 'number',
                        name: 'cantidad',
                        placeholder: 'Ingrese la cantidad'
                      }, {
                        type: 'text',
                        name: 'item',
                        placeholder: 'Descripción'
                      }, {
                        type: 'number',
                        name: 'valoru',
                        placeholder: 'Ingrese el valor unitario'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel'
                      }, {
                        text: 'Guardar',
                        handler: function handler(data) {
                          // console.log(data);
                          data.total = data.cantidad * data.valoru;

                          _this8.items.push(data);

                          _this8.carga = false;

                          _this8.calculo();
                        }
                      }]
                    });

                  case 2:
                    info = _context8.sent;
                    _context8.next = 5;
                    return info.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "eliminar",
        value: function eliminar(idx) {
          this.items.splice(idx, 1);
          this.calculo();
        }
      }, {
        key: "calculo",
        value: function calculo() {
          this.subtotal = 0;
          this.total = 0;
          this.iva = 0;
          var sb = 0;
          this.totales = [];
          this.items.forEach(function (item) {
            sb = sb + parseFloat(item.total);
          });
          this.subtotal = sb;

          if (this.data.iva) {
            this.iva = this.subtotal * 0.19;
          }

          this.total = this.subtotal + this.iva;
          this.carga = true;
          this.totales.push({
            total: this.total,
            subtotal: this.subtotal,
            iva: this.iva
          }); // // console.log('data de la factura',  this.subtotal, this.total, this.iva, this.data.iva, this.items)
        }
      }, {
        key: "guardar",
        value: function guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this9 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!(this.items.length > 0 && this.cliente !== '' && this.cc !== '')) {
                      _context9.next = 7;
                      break;
                    }

                    _context9.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context9.sent;

                    if (info) {
                      // tslint:disable-next-line:max-line-length
                      this.apiFactura.guardarConfiguracion(info.token, {
                        cliente: this.cliente,
                        direccion: this.direccion,
                        telefono: this.telefono,
                        iva: this.iva,
                        cc: this.cc,
                        ciudad: this.ciudad,
                        subtotal: this.subtotal,
                        total: this.total,
                        lista: this.items,
                        descuento: 0,
                        idconfig: this.data.id
                      }).subscribe(function (data) {
                        if (data.exe) {
                          _this9.toast.toastExitoso('Factura creada con éxito');

                          _this9.modalCtrl.dismiss({
                            exe: true
                          });
                        } else {
                          _this9.toast.toastError('No se pudo guardar la información de la factura, intentelo mpas tarde');
                        }
                      }, function (err) {
                        _this9.toast.toastError('No se pudo guardar la información de la factura, intentelo mpas tarde');
                      });
                    }

                    _context9.next = 8;
                    break;

                  case 7:
                    this.toast.toastError('La información requerida aún esta icompleta, veirifca el nombre del cliente, su cédula y la descripción de la factura');

                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return ModalFacturaPage;
    }();

    ModalFacturaPage.ɵfac = function ModalFacturaPage_Factory(t) {
      return new (t || ModalFacturaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_5__["FacturasService"]));
    };

    ModalFacturaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ModalFacturaPage,
      selectors: [["app-modal-factura"]],
      inputs: {
        data: "data"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start"], [3, "click"], ["name", "chevron-back-outline", "slot", "icon-only"], ["class", "cargador", 4, "ngIf"], [4, "ngIf"], [1, "cargador"], ["name", "crescent", "color", "barra"], ["color", "light"], ["slot", "end"], ["name", "add-outline", "slot", "icon-only"], [1, "divider"], [4, "ngFor", "ngForOf"], ["class", "td", 4, "ngFor", "ngForOf"], ["mode", "ios"], ["slot", "start", "name", "alert-circle-outline", "color", "danger"], ["type", "text", "placeholder", "Nombre del cliente", 3, "ngModel", "ngModelChange"], ["slot", "start", "name", "alert-circle-outline", "color", "blanco"], ["type", "text", "placeholder", "Tel\xE9fono del cliente", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Direcci\xF3n del cliente", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "C\xE9dula o Nit del cliente", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ciudad del cliente", 3, "ngModel", "ngModelChange"], ["mode", "ios", "color", "primary", "shape", "round", "expand", "block", 3, "click"], [1, "ion-text-wrap"], [1, "fl"], ["side", "end"], ["color", "danger", 3, "click"], ["name", "trash-outline", "slot", "icon-only"], [1, "td"], ["class", "valores", 4, "ngIf"], [1, "valores"], [1, "verdei"], [1, "rojoi"]],
      template: function ModalFacturaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFacturaPage_Template_ion_button_click_3_listener() {
            return ctx.cerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Crear Factura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ModalFacturaPage_div_8_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ModalFacturaPage_ion_list_9_Template, 30, 7, "ion-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"]],
      pipes: [_pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_8__["DecimalesPipe"]],
      styles: [".valores[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  margin: 0px !important;\n}\n\n.valores[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.cargador[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.fl[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.td[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background: #FCF3AA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRmFjdHVyYXMvbW9kYWwtZmFjdHVyYS9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcRmFjdHVyYXNcXG1vZGFsLWZhY3R1cmFcXG1vZGFsLWZhY3R1cmEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9GYWN0dXJhcy9tb2RhbC1mYWN0dXJhL21vZGFsLWZhY3R1cmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ZhY3R1cmFzL21vZGFsLWZhY3R1cmEvbW9kYWwtZmFjdHVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsb3JlcyB7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52YWxvcmVzIGgzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnJvam9pIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jYXJnYWRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRkIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0YzQUE7XHJcbn0iLCIudmFsb3JlcyB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4udmFsb3JlcyBoMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZlcmRlaSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnJvam9pIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNhcmdhZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGQ0YzQUE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalFacturaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-modal-factura',
          templateUrl: './modal-factura.page.html',
          styleUrls: ['./modal-factura.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_5__["FacturasService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=Facturas-factura-nueva-factura-nueva-module-es5.js.map