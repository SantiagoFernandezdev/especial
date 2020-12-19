function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtentradas-ivtentradas-module"], {
  /***/
  "./src/app/pages/Inventarios/ivtentradas/ivtentradas-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtentradas/ivtentradas-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: IVTentradasPageRoutingModule */

  /***/
  function srcAppPagesInventariosIvtentradasIvtentradasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTentradasPageRoutingModule", function () {
      return IVTentradasPageRoutingModule;
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


    var _ivtentradas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ivtentradas.page */
    "./src/app/pages/Inventarios/ivtentradas/ivtentradas.page.ts");

    var routes = [{
      path: '',
      component: _ivtentradas_page__WEBPACK_IMPORTED_MODULE_2__["IVTentradasPage"]
    }];

    var IVTentradasPageRoutingModule = function IVTentradasPageRoutingModule() {
      _classCallCheck(this, IVTentradasPageRoutingModule);
    };

    IVTentradasPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IVTentradasPageRoutingModule
    });
    IVTentradasPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IVTentradasPageRoutingModule_Factory(t) {
        return new (t || IVTentradasPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTentradasPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTentradasPageRoutingModule, [{
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
  "./src/app/pages/Inventarios/ivtentradas/ivtentradas.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtentradas/ivtentradas.module.ts ***!
    \*********************************************************************/

  /*! exports provided: IVTentradasPageModule */

  /***/
  function srcAppPagesInventariosIvtentradasIvtentradasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTentradasPageModule", function () {
      return IVTentradasPageModule;
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


    var _ivtentradas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ivtentradas-routing.module */
    "./src/app/pages/Inventarios/ivtentradas/ivtentradas-routing.module.ts");
    /* harmony import */


    var _ivtentradas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ivtentradas.page */
    "./src/app/pages/Inventarios/ivtentradas/ivtentradas.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var IVTentradasPageModule = function IVTentradasPageModule() {
      _classCallCheck(this, IVTentradasPageModule);
    };

    IVTentradasPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IVTentradasPageModule
    });
    IVTentradasPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IVTentradasPageModule_Factory(t) {
        return new (t || IVTentradasPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtentradas_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTentradasPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTentradasPageModule, {
        declarations: [_ivtentradas_page__WEBPACK_IMPORTED_MODULE_5__["IVTentradasPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtentradas_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTentradasPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTentradasPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtentradas_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTentradasPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          declarations: [_ivtentradas_page__WEBPACK_IMPORTED_MODULE_5__["IVTentradasPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Inventarios/ivtentradas/ivtentradas.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtentradas/ivtentradas.page.ts ***!
    \*******************************************************************/

  /*! exports provided: IVTentradasPage */

  /***/
  function srcAppPagesInventariosIvtentradasIvtentradasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTentradasPage", function () {
      return IVTentradasPage;
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


    var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ivt-modal/ivt-modal.page */
    "./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/Api/Inventarios.service */
    "./src/app/providers/Api/Inventarios.service.ts");
    /* harmony import */


    var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../pipes/numeros/decimales.pipe */
    "./src/app/pipes/numeros/decimales.pipe.ts");
    /* harmony import */


    var _pipes_Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../pipes/Fechas/CambioUTC.pipe */
    "./src/app/pipes/Fechas/CambioUTC.pipe.ts");

    var _c0 = ["inifinito"];
    var _c1 = ["contenido"];

    function IVTentradasPage_ion_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r953 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_ion_button_9_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r953);

          var ctx_r952 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r952.borrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IVTentradasPage_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r955 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Seleccionar desde que fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-datetime", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IVTentradasPage_div_10_Template_ion_datetime_ionChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r955);

          var ctx_r954 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r954.filtro($event, 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Seleccionar hasta que fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-datetime", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IVTentradasPage_div_10_Template_ion_datetime_ionChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r955);

          var ctx_r956 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r956.filtro($event, 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_div_10_Template_ion_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r955);

          var ctx_r957 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r957.toggleFiltro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CERRAR");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_div_10_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r955);

          var ctx_r958 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r958.filtrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "BUSCAR");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IVTentradasPage_ion_content_17_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No tiene entradas registrados");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IVTentradasPage_ion_content_17_div_7_ion_item_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-skeleton-text", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return [1, 1, 1, 1, 1];
    };

    function IVTentradasPage_ion_content_17_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IVTentradasPage_ion_content_17_div_7_ion_item_2_Template, 5, 0, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function IVTentradasPage_ion_content_17_ion_list_8_ion_item_sliding_1_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inventario Origen: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entrada_r967 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entrada_r967.origenivt.name);
      }
    }

    function IVTentradasPage_ion_content_17_ion_list_8_ion_item_sliding_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r972 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cantidad: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Precio Unitario: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Costo Total : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "decimales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Creador: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Fecha: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "cambioUTC");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, IVTentradasPage_ion_content_17_ion_list_8_ion_item_sliding_1_div_33_Template, 6, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-item-options", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item-option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_ion_content_17_ion_list_8_ion_item_sliding_1_Template_ion_item_option_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r972);

          var entrada_r967 = ctx.$implicit;

          var ctx_r971 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r971.editar(entrada_r967);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item-option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_ion_content_17_ion_list_8_ion_item_sliding_1_Template_ion_item_option_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r972);

          var entrada_r967 = ctx.$implicit;
          var i_r968 = ctx.index;

          var ctx_r973 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r973.eliminar(entrada_r967, i_r968);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entrada_r967 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entrada_r967.producto.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entrada_r967.cantidad);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 7, entrada_r967.precio, "es-CO"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 10, entrada_r967.total, "es-CO"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entrada_r967.creador.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 13, entrada_r967.fecha));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", entrada_r967.origenivt !== "" && entrada_r967.origenivt);
      }
    }

    function IVTentradasPage_ion_content_17_ion_list_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IVTentradasPage_ion_content_17_ion_list_8_ion_item_sliding_1_Template, 39, 15, "ion-item-sliding", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r962 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r962.entradas);
      }
    }

    function IVTentradasPage_ion_content_17_ion_infinite_scroll_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r976 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-infinite-scroll", 53, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function IVTentradasPage_ion_content_17_ion_infinite_scroll_9_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r976);

          var ctx_r975 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r975.loadData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-infinite-scroll-content", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IVTentradasPage_ion_content_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r978 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", null, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-refresher", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function IVTentradasPage_ion_content_17_Template_ion_refresher_ionRefresh_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r978);

          var ctx_r977 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r977.refrescando($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-refresher-content", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IVTentradasPage_ion_content_17_div_6_Template, 4, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IVTentradasPage_ion_content_17_div_7_Template, 3, 2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, IVTentradasPage_ion_content_17_ion_list_8_Template, 2, 1, "ion-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IVTentradasPage_ion_content_17_ion_infinite_scroll_9_Template, 3, 0, "ion-infinite-scroll", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-fab", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-fab-button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_ion_content_17_Template_ion_fab_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r978);

          var ctx_r979 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r979.modal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r951 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r951.entradas.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r951.load);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r951.entradas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r951.carga);
      }
    }

    var IVTentradasPage =
    /*#__PURE__*/
    function () {
      function IVTentradasPage(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, ActiveRouter) {
        _classCallCheck(this, IVTentradasPage);

        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.ActiveRouter = ActiveRouter;
        this.entradas = [];
        this.load = false;
        this.fecha1 = '';
        this.fecha2 = '';
        this.formato1 = 'AAAA-MM-DDTHH: mm: ssTZD';
        this.formato2 = 'AAAA-MM-DDTHH: mm: ssTZD';
        this.filtros = false;
        this.partida = 0;
        this.partida2 = 0;
        this.patron = '';
        this.carga = true;
      }

      _createClass(IVTentradasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.cargarEntradas();
        }
      }, {
        key: "refrescando",
        value: function refrescando(event) {
          this.partida = 0;
          this.partida2 = 0;
          this.cargarEntradas().then(function () {
            event.target.complete();
          }).catch(function () {
            return event.target.complete();
          });
        }
      }, {
        key: "cargarEntradas",
        value: function cargarEntradas() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var info;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context.sent;

                    if (info) {
                      this.carga = true;
                      this.ivtApi.leerEntrada(info.token, {
                        ivt: this.ActiveRouter.snapshot.paramMap.get('id'),
                        partida: this.partida2,
                        patron: this.patron
                      }).subscribe(function (data) {
                        console.log(data, 'mi data');

                        if (data.exe) {
                          _this.entradas = data.response;
                        } else {
                          _this.toast.toastError('No se pudo listar las entradas, intentelo más tarde');
                        }
                      }, function (err) {
                        _this.toast.toastError('No se pudo listar las entradas, intentelo más tarde');
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "modal",
        value: function modal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_2__["IvtModalPage"],
                      componentProps: {
                        tipo: 'entradas',
                        inventario: this.ActiveRouter.snapshot.paramMap.get('id')
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    _context2.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context2.sent;

                    if (cerrado.data) {
                      if (cerrado.data.exe) {
                        this.cargarEntradas();
                      }
                    }

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "eliminar",
        value: function eliminar(entrada, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "editar",
        value: function editar(entrada) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "filtro",
        value: function filtro(event, tipo) {
          if (tipo === 1) {
            this.fecha1 = event.detail.value;
          } else {
            this.fecha2 = event.detail.value;
          }
        }
      }, {
        key: "filtrar",
        value: function filtrar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context5.sent;

                    if (info) {
                      this.partida = 0;

                      if (this.fecha1 !== '' && this.fecha2 !== '') {
                        this.ivtApi.filtrarEntradas(info.token, {
                          desde: this.fecha1,
                          hasta: this.fecha2,
                          partida: this.partida
                        }).subscribe(function (data) {
                          console.log(data, 'mi data');

                          if (data.exe) {
                            _this2.entradas = data.response;
                            _this2.filtros = false;
                          } else {
                            _this2.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                          }
                        }, function (err) {
                          _this2.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                        });
                      } else {
                        this.toast.toastError('Debe de especificar las fechas (desde, hasta)');
                      }
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // event.target.complete()
                    console.log(this.partida, this.partida2);
                    this.partida = this.partida + 10;
                    _context6.next = 4;
                    return this.almacenamiento.obtenerToken();

                  case 4:
                    info = _context6.sent;

                    if (info) {
                      if (this.fecha1 !== '' && this.fecha2 !== '') {
                        this.ivtApi.filtrarEntradas(info.token, {
                          desde: this.fecha1,
                          hasta: this.fecha2,
                          partida: this.partida,
                          patron: this.patron
                        }).subscribe(function (data) {
                          console.log(data, 'mi data scroll');

                          if (data.exe) {
                            if (data.response.length > 0) {
                              data.response.forEach(function (item) {
                                _this3.entradas.push(item);
                              });
                              event.target.complete();
                            } else {
                              event.target.disabled = true;
                              _this3.partida = 0;
                            }
                          } else {
                            _this3.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                          }
                        }, function (err) {
                          _this3.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                        });
                      } else {
                        this.partida2 = this.partida2 + 10;
                        this.ivtApi.leerEntrada(info.token, {
                          ivt: this.ActiveRouter.snapshot.paramMap.get('id'),
                          partida: this.partida2,
                          patron: this.patron
                        }).subscribe(function (data) {
                          console.log(data, 'mi data');

                          if (data.exe) {
                            if (data.response.length > 0) {
                              data.response.forEach(function (item) {
                                _this3.entradas.push(item);
                              });
                              event.target.complete();
                            } else {
                              event.target.disabled = true;
                              _this3.partida2 = 0;
                            }
                          } else {
                            _this3.toast.toastError('No se pudo listar las entradas, intentelo más tarde');
                          }
                        }, function (err) {
                          _this3.toast.toastError('No se pudo listar las entradas, intentelo más tarde');
                        });
                      }
                    }

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "buscarProducto",
        value: function buscarProducto(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this4 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.partida = 0;
                    this.partida2 = 0;
                    _context7.next = 4;
                    return this.almacenamiento.obtenerToken();

                  case 4:
                    info = _context7.sent;
                    _context7.next = 7;
                    return this.contenido.scrollToTop();

                  case 7:
                    if (info) {
                      if (event.detail.value === '') {
                        if (this.fecha1 !== '' && this.fecha2 !== '' && this.filtros) {
                          this.filtrar();
                        } else {
                          this.cargarEntradas();
                        }
                      } else {
                        this.patron = event.detail.value;

                        if (this.fecha1 !== '' && this.fecha2 !== '' && this.filtros) {
                          this.ivtApi.filtrarEntradasPatron(info.token, {
                            desde: this.fecha1,
                            hasta: this.fecha2,
                            patron: event.detail.value,
                            tipo: 'filtro'
                          }).subscribe(function (data) {
                            console.log(data, 'mi data filtro');

                            if (data.exe) {
                              if (data.response.length > 0) {
                                _this4.inifinito.disabled = false;
                              } else {
                                _this4.inifinito.disabled = true;
                              }

                              _this4.entradas = data.response;
                            } else {
                              _this4.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                            }
                          }, function (err) {
                            _this4.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                          });
                        } else {
                          this.ivtApi.filtrarEntradasPatron(info.token, {
                            patron: event.detail.value,
                            tipo: 'normal'
                          }).subscribe(function (data) {
                            console.log(data, 'mi data filtro 2');

                            if (data.exe) {
                              if (data.response.length > 0) {
                                _this4.inifinito.disabled = false;
                              } else {
                                _this4.inifinito.disabled = true;
                              }

                              _this4.entradas = data.response;
                            } else {
                              _this4.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                            }
                          }, function (err) {
                            _this4.toast.toastError('No se pudo consultar las entradas, intentelo más tarde');
                          });
                        }
                      }
                    }

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "borrar",
        value: function borrar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.fecha1 = '';
                    this.fecha2 = '';
                    _context8.next = 4;
                    return this.contenido.scrollToTop();

                  case 4:
                    this.partida = 0;
                    this.partida2 = 0;
                    this.inifinito.disabled = false;
                    this.cargarEntradas();

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "toggleFiltro",
        value: function toggleFiltro() {
          this.filtros = !this.filtros;
        }
      }]);

      return IVTentradasPage;
    }();

    IVTentradasPage.ɵfac = function IVTentradasPage_Factory(t) {
      return new (t || IVTentradasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    IVTentradasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IVTentradasPage,
      selectors: [["app-ivtentradas"]],
      viewQuery: function IVTentradasPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inifinito = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contenido = _t.first);
        }
      },
      decls: 18,
      vars: 4,
      consts: [[1, "ion-no-border"], ["color", "success"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu/ivt-inicio"], ["slot", "end"], [3, "click"], ["name", "search-outline", "slot", "icon-only"], [3, "click", 4, "ngIf"], ["class", "filtros blanco", 4, "ngIf"], [1, "buscar"], ["mode", "ios", "placeholder", "Buscar Productos", 3, "ionChange"], [1, "divider", "verdeo"], [4, "ngIf"], ["name", "trash-outline", "slot", "icon-only"], [1, "filtros", "blanco"], ["position", "floating"], ["displayFormat", "DD-MM-YYYY hh:mm:a", "pickerFormat", "DD MM YYYY, hh:mm:a", "done-text", "Aceptar", "cancel-text", "Cancelar", "placeholder", "Seleccione Desde", 3, "ionChange"], ["displayFormat", "DD-MM-YYYY hh:mm:a", "pickerFormat", "DD MM YYYY, hh:mm:a", "done-text", "Aceptar", "placeholder", "Seleccione Hasta", "cancel-text", "Cancelar", 3, "ionChange"], [1, "btns", "divider"], ["color", "medium", "shape", "round", "mode", "ios", 3, "click"], ["color", "warning", "shape", "round", "mode", "ios", 3, "click"], ["contenido", ""], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [1, "divider", "light"], [1, "divider"], ["class", "cen", 4, "ngIf"], ["class", "carga", 4, "ngIf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "success", 3, "click"], ["name", "add-outline"], [1, "cen"], ["src", "/assets/Entradas.png", "width", "100px", "alt", ""], [1, "tituloGrande"], [1, "carga"], [4, "ngFor", "ngForOf"], ["slot", "start", "animated", "", 2, "width", "50px", "height", "50px"], ["animated", "", 2, "width", "50%", "height", "20px"], ["animated", "", 2, "width", "90%", "height", "20px"], ["src", "/assets/Entradas.png", "width", "100%", "heigth", "100%"], [1, "titulo"], [1, "info"], [1, "flexbet"], [1, "verdei"], [1, "rojoi"], [1, "grisi"], ["side", "end"], ["color", "warning", 3, "click"], ["slot", "icon-only", "name", "pencil-outline"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash-outline"], [1, "amarilloi"], ["threshold", "100px", 3, "ionInfinite"], ["inifinito", ""], ["loadingSpinner", "bubbles", "loadingText", "Cargando entradas..."]],
      template: function IVTentradasPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inventario - Entradas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTentradasPage_Template_ion_button_click_7_listener() {
            return ctx.toggleFiltro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IVTentradasPage_ion_button_9_Template, 2, 0, "ion-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, IVTentradasPage_div_10_Template, 14, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-searchbar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IVTentradasPage_Template_ion_searchbar_ionChange_12_listener($event) {
            return ctx.buscarProducto($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " CANTIDAD DE ENTRADAS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, IVTentradasPage_ion_content_17_Template, 13, 4, "ion-content", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fecha1 !== "" && ctx.fecha2 !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filtros);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.entradas.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carga);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"]],
      pipes: [_pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_9__["DecimalesPipe"], _pipes_Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_10__["CambioUTCaLocalPipe"]],
      styles: [".cen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #1E8C4A;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: #C1302C;\n}\n\n.grisi[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n}\n\n.amarilloi[_ngcontent-%COMP%] {\n  color: #F5AD45;\n}\n\n.flexbet[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.btns[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.verdeo[_ngcontent-%COMP%] {\n  background-color: #FEF4C5;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvSW52ZW50YXJpb3MvaXZ0ZW50cmFkYXMvQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXEludmVudGFyaW9zXFxpdnRlbnRyYWRhc1xcaXZ0ZW50cmFkYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9JbnZlbnRhcmlvcy9pdnRlbnRyYWRhcy9pdnRlbnRyYWRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ludmVudGFyaW9zL2l2dGVudHJhZGFzL2l2dGVudHJhZGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZlcmRlaSB7XHJcbiAgICBjb2xvcjogIzFFOEM0QTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnJvam9pIHtcclxuICAgIGNvbG9yOiAjQzEzMDJDO1xyXG59XHJcblxyXG4uZ3Jpc2kge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbn1cclxuXHJcbi5hbWFyaWxsb2kge1xyXG4gICAgY29sb3I6ICNGNUFENDU7XHJcbn1cclxuXHJcbi5mbGV4YmV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnZlcmRlbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGNEM1O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn0iLCIuY2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHVsb0dyYW5kZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVyZGVpIHtcbiAgY29sb3I6ICMxRThDNEE7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucm9qb2kge1xuICBjb2xvcjogI0MxMzAyQztcbn1cblxuLmdyaXNpIHtcbiAgY29sb3I6ICNhYWFhYWE7XG59XG5cbi5hbWFyaWxsb2kge1xuICBjb2xvcjogI0Y1QUQ0NTtcbn1cblxuLmZsZXhiZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnZlcmRlbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUY0QzU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IVTentradasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-ivtentradas',
          templateUrl: './ivtentradas.page.html',
          styleUrls: ['./ivtentradas.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]
        }, {
          type: src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__["InventariosService"]
        }, {
          type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, {
        inifinito: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inifinito', {
            static: false
          }]
        }],
        contenido: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contenido', {
            static: false
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=Inventarios-ivtentradas-ivtentradas-module-es5.js.map