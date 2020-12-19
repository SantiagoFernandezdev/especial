function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EstadoCitas-hoja-hoja-module"], {
  /***/
  "./src/app/pages/EstadoCitas/hoja/hoja-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/EstadoCitas/hoja/hoja-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: HojaPageRoutingModule */

  /***/
  function srcAppPagesEstadoCitasHojaHojaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HojaPageRoutingModule", function () {
      return HojaPageRoutingModule;
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


    var _hoja_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hoja.page */
    "./src/app/pages/EstadoCitas/hoja/hoja.page.ts");

    var routes = [{
      path: '',
      component: _hoja_page__WEBPACK_IMPORTED_MODULE_2__["HojaPage"]
    }];

    var HojaPageRoutingModule = function HojaPageRoutingModule() {
      _classCallCheck(this, HojaPageRoutingModule);
    };

    HojaPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HojaPageRoutingModule
    });
    HojaPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HojaPageRoutingModule_Factory(t) {
        return new (t || HojaPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HojaPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HojaPageRoutingModule, [{
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
  "./src/app/pages/EstadoCitas/hoja/hoja.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/EstadoCitas/hoja/hoja.module.ts ***!
    \*******************************************************/

  /*! exports provided: HojaPageModule */

  /***/
  function srcAppPagesEstadoCitasHojaHojaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HojaPageModule", function () {
      return HojaPageModule;
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


    var _hoja_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hoja-routing.module */
    "./src/app/pages/EstadoCitas/hoja/hoja-routing.module.ts");
    /* harmony import */


    var _hoja_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hoja.page */
    "./src/app/pages/EstadoCitas/hoja/hoja.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var HojaPageModule = function HojaPageModule() {
      _classCallCheck(this, HojaPageModule);
    };

    HojaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HojaPageModule
    });
    HojaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HojaPageModule_Factory(t) {
        return new (t || HojaPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _hoja_routing_module__WEBPACK_IMPORTED_MODULE_4__["HojaPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HojaPageModule, {
        declarations: [_hoja_page__WEBPACK_IMPORTED_MODULE_5__["HojaPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _hoja_routing_module__WEBPACK_IMPORTED_MODULE_4__["HojaPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HojaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _hoja_routing_module__WEBPACK_IMPORTED_MODULE_4__["HojaPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          declarations: [_hoja_page__WEBPACK_IMPORTED_MODULE_5__["HojaPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/EstadoCitas/hoja/hoja.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/EstadoCitas/hoja/hoja.page.ts ***!
    \*****************************************************/

  /*! exports provided: HojaPage */

  /***/
  function srcAppPagesEstadoCitasHojaHojaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HojaPage", function () {
      return HojaPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/Api/EstadoCitas.service */
    "./src/app/providers/Api/EstadoCitas.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../pipes/numeros/decimales.pipe */
    "./src/app/pipes/numeros/decimales.pipe.ts");

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "estado-amarillo ": a0,
        "estado-azul ": a1,
        "estado-verde ": a2
      };
    };

    function HojaPage_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r571 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaPage_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r571);

          var ctx_r570 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r570.estados();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r560 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c0, ctx_r560.estado === "PENDIENTE", ctx_r560.estado === "EN PROGRESO", ctx_r560.estado === "TERMINADO"));
      }
    }

    function HojaPage_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
      }

      if (rf & 2) {
        var ctx_r561 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c0, ctx_r561.estado === "PENDIENTE", ctx_r561.estado === "EN PROGRESO", ctx_r561.estado === "TERMINADO"));
      }
    }

    function HojaPage_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r562 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r562.placa);
      }
    }

    function HojaPage_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No hay informaci\xF3n en mi hoja de vida");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HojaPage_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r573 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaPage_div_19_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r573);

          var ctx_r572 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r572.tomarFoto();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ssfsdfsfs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "A\xF1adir Fotograf\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HojaPage_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ssfsdfsfs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HojaPage_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ssfsdfsfs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HojaPage_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r577 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaPage_div_22_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r577);

          var i_r575 = ctx.index;

          var ctx_r576 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r576.verFoto(i_r575);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ssfsdfsfs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var foto_r574 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613402/", foto_r574.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HojaPage_ion_list_23_ion_buttons_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r582 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaPage_ion_list_23_ion_buttons_4_Template_ion_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r582);

          var ctx_r581 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r581.viajar("repuestos");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HojaPage_ion_list_23_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
      }
    }

    function HojaPage_ion_list_23_ion_item_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cantidad: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Precio: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var repuesto_r583 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", repuesto_r583.nombre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", repuesto_r583.cantidad, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 4, repuesto_r583.precio, "es-CO"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 7, repuesto_r583.total, "es-CO"), "");
      }
    }

    function HojaPage_ion_list_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " A\xF1adir Repuestos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HojaPage_ion_list_23_ion_buttons_4_Template, 3, 0, "ion-buttons", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HojaPage_ion_list_23_div_5_Template, 1, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HojaPage_ion_list_23_ion_item_6_Template, 23, 10, "ion-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r568 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r568.role === "TALLER_ROLE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r568.repuestos.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r568.repuestos);
      }
    }

    function HojaPage_ion_list_24_ion_buttons_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r589 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaPage_ion_list_24_ion_buttons_4_Template_ion_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r589);

          var ctx_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r588.viajar("trabajos");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HojaPage_ion_list_24_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
      }
    }

    function HojaPage_ion_list_24_ion_item_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Precio: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trabajo_r590 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trabajo_r590.nombre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 2, trabajo_r590.precio, "es-CO"), "");
      }
    }

    function HojaPage_ion_list_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Trabajos realizados");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HojaPage_ion_list_24_ion_buttons_4_Template, 3, 0, "ion-buttons", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HojaPage_ion_list_24_div_5_Template, 1, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HojaPage_ion_list_24_ion_item_6_Template, 11, 5, "ion-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r569.role === "TALLER_ROLE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r569.trabajos.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r569.trabajos);
      }
    }

    var HojaPage =
    /*#__PURE__*/
    function () {
      function HojaPage(modalCtrl, alertCtrl, almacenamiento, active, router, hojaApi, toast) {
        _classCallCheck(this, HojaPage);

        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.almacenamiento = almacenamiento;
        this.active = active;
        this.router = router;
        this.hojaApi = hojaApi;
        this.toast = toast;
        this.fotos = [];
        this.repuestos = [];
        this.trabajos = [];
        this.role = '';
        this.cargaFotos = true;
        this.id = '';
        this.idHoja = '';
        this.estado = '';
        this.tipo = '';
        this.placa = '';
      }

      _createClass(HojaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.tipo = this.active.snapshot.paramMap.get('tipo');

                    if (!(this.active.snapshot.paramMap.get('tipo') === 'hoja')) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 4;
                    return this.miHoja2();

                  case 4:
                    _context.next = 8;
                    break;

                  case 6:
                    _context.next = 8;
                    return this.miHoja();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "refrescando",
        value: function refrescando(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.active.snapshot.paramMap.get('tipo') === 'hoja')) {
                      _context2.next = 5;
                      break;
                    }

                    _context2.next = 3;
                    return this.miHoja2();

                  case 3:
                    _context2.next = 7;
                    break;

                  case 5:
                    _context2.next = 7;
                    return this.miHoja();

                  case 7:
                    event.target.complete();

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "tomarFoto",
        value: function tomarFoto() {
          this.router.navigate(['/hoja-vida-modal', this.active.snapshot.paramMap.get('id'), 'fotos', this.idHoja]);
        }
      }, {
        key: "verFoto",
        value: function verFoto(idx) {
          this.router.navigate(['/hoja-vida-modal', this.active.snapshot.paramMap.get('id'), 'ver', this.idHoja, idx]);
        }
      }, {
        key: "viajar",
        value: function viajar(tipo) {
          this.router.navigate(['/hoja-vida-modal', this.active.snapshot.paramMap.get('id'), tipo, this.idHoja]);
        }
      }, {
        key: "miHoja",
        value: function miHoja() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this = this;

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
                      this.hojaApi.leeHoja(info.token, {
                        id: this.active.snapshot.paramMap.get('id')
                      }).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  console.log(data);

                                  if (!data.exe) {
                                    _context3.next = 7;
                                    break;
                                  }

                                  if (data.response) {
                                    this.idHoja = data.response._id;
                                    this.repuestos = data.response.repuestos;
                                    this.trabajos = data.response.trabajos;
                                    this.estado = data.response.cita.estado;
                                  }

                                  _context3.next = 5;
                                  return this.traerFotos();

                                case 5:
                                  _context3.next = 7;
                                  break;

                                case 7:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (err) {
                        _this.toast.toastError('No se pudo traer la información de la hoja de vida, inténtelo más tarde');
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
        key: "miHoja2",
        value: function miHoja2() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this2 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context6.sent;

                    if (info) {
                      this.hojaApi.leeHoja2(info.token, {
                        id: this.active.snapshot.paramMap.get('id')
                      }).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  console.log(data);

                                  if (!data.exe) {
                                    _context5.next = 7;
                                    break;
                                  }

                                  if (data.response) {
                                    this.idHoja = data.response._id;
                                    this.repuestos = data.response.repuestos;
                                    this.trabajos = data.response.trabajos;
                                    this.placa = data.response.placa;
                                  }

                                  _context5.next = 5;
                                  return this.traerFotos();

                                case 5:
                                  _context5.next = 7;
                                  break;

                                case 7:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, function (err) {
                        _this2.toast.toastError('No se pudo traer la información de la hoja de vida, inténtelo más tarde');
                      });
                    }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "traerFotos",
        value: function traerFotos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context7.sent;

                    if (info) {
                      this.role = info.role;
                      this.hojaApi.leefotos(info.token, {
                        id: this.idHoja
                      }).subscribe(function (data) {
                        if (data.exe) {
                          _this3.fotos = data.response;
                        } else {}

                        _this3.cargaFotos = false;
                      }, function (err) {
                        _this3.cargaFotos = false;

                        _this3.toast.toastError('No se pudo traer las fotos de la hoja de vida, inténtelo más tarde');
                      });
                    }

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "estados",
        value: function estados() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            var msg, alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    msg = 'PENDIENTE';

                    if (this.estado === 'PENDIENTE') {
                      msg = 'Marcar como "en Progeso"';
                    } else if (this.estado === 'EN PROGRESO') {
                      msg = 'Marcar como "Terminado"';
                    }

                    _context8.next = 4;
                    return this.alertCtrl.create({
                      header: 'Cambiar Estado de Cita',
                      message: "Actualmente la cita esta en estado ".concat(this.estado),
                      mode: 'ios',
                      buttons: [{
                        text: 'cancelar',
                        role: 'cancel'
                      }, {
                        text: msg,
                        handler: function handler() {
                          _this4.estado = _this4.estado === 'PENDIENTE' ? 'EN PROGRESO' : 'TERMINADO';

                          _this4.cambiarEstado();
                        }
                      }]
                    });

                  case 4:
                    alert = _context8.sent;
                    _context8.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "cambiarEstado",
        value: function cambiarEstado() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this5 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context9.sent;

                    if (info) {
                      this.hojaApi.editarCita(info.token, this.active.snapshot.paramMap.get('id'), {
                        estado: this.estado
                      }).subscribe(function (data) {
                        console.log(data);

                        if (data.exe) {
                          _this5.toast.toastExitoso('Estado cambiado');
                        } else {
                          _this5.toast.toastError('No se pudo cambiar el estado de la cita, inténtelo ás tarde');
                        }
                      }, function (err) {
                        _this5.toast.toastError('No se pudo cambiar el estado de la cita, inténtelo ás tarde');
                      });
                    }

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return HojaPage;
    }();

    HojaPage.ɵfac = function HojaPage_Factory(t) {
      return new (t || HojaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]));
    };

    HojaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HojaPage,
      selectors: [["app-hoja"]],
      decls: 25,
      vars: 10,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu"], ["class", "estadobol", "slot", "end", 3, "ngClass", "click", 4, "ngIf"], ["class", "estadobol", "slot", "end", 3, "ngClass", 4, "ngIf"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [1, "divider"], ["class", "placa", 4, "ngIf"], ["color", "light"], ["class", "flexbetver", 4, "ngIf"], ["scrollable", "true"], ["class", "color", 3, "click", 4, "ngIf"], ["class", "color2", 4, "ngIf"], ["class", "color", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["slot", "end", 1, "estadobol", 3, "ngClass", "click"], ["slot", "end", 1, "estadobol", 3, "ngClass"], [1, "placa"], [1, "flexbetver"], ["src", "/assets/Hojas.png", "width", "70px", "alt", ""], [1, "tituloGrande"], [1, "color", 3, "click"], [1, "none"], [1, "add"], ["color", "medium"], ["name", "add", "slot", "icon-only"], [1, "color2"], ["animated", ""], ["width", "100%", "alt", "", 3, "src"], ["slot", "end", 4, "ngIf"], ["class", "divider", 4, "ngIf"], ["class", "sinfondo", 4, "ngFor", "ngForOf"], ["slot", "end"], [3, "click"], [1, "sinfondo"], [1, "ion-text-wrap"], [1, "nombre"], [1, "flexbet"], [1, "verdei", "padd"], [1, "verdei"], [1, "flexbet", "bor"], [1, "rojoi"]],
      template: function HojaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Hoja de Vida");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HojaPage_div_6_Template, 1, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HojaPage_div_7_Template, 1, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-refresher", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function HojaPage_Template_ion_refresher_ionRefresh_9_listener($event) {
            return ctx.refrescando($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-refresher-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HojaPage_div_12_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item-divider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Registro Fotogr\xE1fico ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HojaPage_div_17_Template, 4, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-segment", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HojaPage_div_19_Template, 9, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HojaPage_div_20_Template, 4, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HojaPage_div_21_Template, 4, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HojaPage_div_22_Template, 4, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HojaPage_ion_list_23_Template, 7, 3, "ion-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HojaPage_ion_list_24_Template, 7, 3, "ion-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "TALLER_ROLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "USER_ROLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "hoja");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fotos.length === 0 && ctx.trabajos.length === 0 && ctx.repuestos.length === 0 && !ctx.cargaFotos && ctx.role === "USER_ROLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "TALLER_ROLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargaFotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargaFotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "TALLER_ROLE" || ctx.repuestos.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "TALLER_ROLE" || ctx.trabajos.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]],
      pipes: [_pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_8__["DecimalesPipe"]],
      styles: [".color[_ngcontent-%COMP%] {\n  margin: 5px;\n  min-width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #D7DDB8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.color2[_ngcontent-%COMP%] {\n  margin: 5px;\n  min-width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #f1f1f1;\n}\n\n.color2[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100% !important;\n  margin-top: 0px !important;\n}\n\n.color[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n}\n\n.camarillo[_ngcontent-%COMP%] {\n  background: #FDF2C0;\n  padding: 5px;\n}\n\n.none[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n\n.add[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-medium);\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 250px;\n  margin: auto;\n  text-align: center;\n  opacity: 0.3;\n  padding: 8px 0;\n}\n\n.flexbet[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.padd[_ngcontent-%COMP%] {\n  padding-right: 14px;\n}\n\n.flexbet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.nombre[_ngcontent-%COMP%] {\n  background-color: #FDF2C0;\n  padding: 2px 10px;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #18713C;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.estadobol[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.estado-verde[_ngcontent-%COMP%] {\n  background: #85B84F;\n}\n\n.estado-amarillo[_ngcontent-%COMP%] {\n  background: #FCD573;\n}\n\n.estado-azul[_ngcontent-%COMP%] {\n  background: #5591B1;\n}\n\n.flexbetver[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  text-align: center;\n}\n\n.flexbetver[_ngcontent-%COMP%]   .tituloGrande[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.placa[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #FFA800;\n  color: #000000;\n  font-size: 22px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: bold;\n  border: 3px solid #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRXN0YWRvQ2l0YXMvaG9qYS9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcRXN0YWRvQ2l0YXNcXGhvamFcXGhvamEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9Fc3RhZG9DaXRhcy9ob2phL2hvamEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvRXN0YWRvQ2l0YXMvaG9qYS9ob2phLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNEN0REQjg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbG9yMiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jb2xvcjIgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbG9yIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FtYXJpbGxvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGREYyQzA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ub25lIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG4uZmxleGJldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucGFkZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uZmxleGJldCBkaXYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm5vbWJyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGMkMwO1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuXHJcbi52ZXJkZWkge1xyXG4gICAgY29sb3I6ICMxODcxM0M7XHJcbn1cclxuXHJcbi5yb2pvaSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXN0YWRvYm9sIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmVzdGFkby12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODVCODRGO1xyXG59XHJcblxyXG4uZXN0YWRvLWFtYXJpbGxvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XHJcbn1cclxuXHJcbi5lc3RhZG8tYXp1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU5MUIxO1xyXG59XHJcblxyXG4uZmxleGJldHZlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJldHZlciAudGl0dWxvR3JhbmRlIHtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG59XHJcblxyXG4ucGxhY2Ege1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTgwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxufSIsIi5jb2xvciB7XG4gIG1hcmdpbjogNXB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRDdEREI4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbG9yMiB7XG4gIG1hcmdpbjogNXB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4uY29sb3IyIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhbWFyaWxsbyB7XG4gIGJhY2tncm91bmQ6ICNGREYyQzA7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm5vbmUge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWRkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4udGl0dWxvR3JhbmRlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjM7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4uZmxleGJldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhZGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xufVxuXG4uZmxleGJldCBkaXYge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubm9tYnJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERjJDMDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG59XG5cbi52ZXJkZWkge1xuICBjb2xvcjogIzE4NzEzQztcbn1cblxuLnJvam9pIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmVzdGFkb2JvbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5lc3RhZG8tdmVyZGUge1xuICBiYWNrZ3JvdW5kOiAjODVCODRGO1xufVxuXG4uZXN0YWRvLWFtYXJpbGxvIHtcbiAgYmFja2dyb3VuZDogI0ZDRDU3Mztcbn1cblxuLmVzdGFkby1henVsIHtcbiAgYmFja2dyb3VuZDogIzU1OTFCMTtcbn1cblxuLmZsZXhiZXR2ZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4YmV0dmVyIC50aXR1bG9HcmFuZGUge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5wbGFjYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTgwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HojaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-hoja',
          templateUrl: './hoja.page.html',
          styleUrls: ['./hoja.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__["EstadoCitasService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=EstadoCitas-hoja-hoja-module-es5.js.map