function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Santiago-historias-modal-historias-modal-module"], {
  /***/
  "./src/app/Pages/Santiago/historias-modal/historias-modal-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/Pages/Santiago/historias-modal/historias-modal-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: HistoriasModalPageRoutingModule */

  /***/
  function srcAppPagesSantiagoHistoriasModalHistoriasModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriasModalPageRoutingModule", function () {
      return HistoriasModalPageRoutingModule;
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


    var _historias_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./historias-modal.page */
    "./src/app/Pages/Santiago/historias-modal/historias-modal.page.ts");

    var routes = [{
      path: '',
      component: _historias_modal_page__WEBPACK_IMPORTED_MODULE_2__["HistoriasModalPage"]
    }];

    var HistoriasModalPageRoutingModule = function HistoriasModalPageRoutingModule() {
      _classCallCheck(this, HistoriasModalPageRoutingModule);
    };

    HistoriasModalPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HistoriasModalPageRoutingModule
    });
    HistoriasModalPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HistoriasModalPageRoutingModule_Factory(t) {
        return new (t || HistoriasModalPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HistoriasModalPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoriasModalPageRoutingModule, [{
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
  "./src/app/Pages/Santiago/historias-modal/historias-modal.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Pages/Santiago/historias-modal/historias-modal.module.ts ***!
    \**************************************************************************/

  /*! exports provided: HistoriasModalPageModule */

  /***/
  function srcAppPagesSantiagoHistoriasModalHistoriasModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriasModalPageModule", function () {
      return HistoriasModalPageModule;
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


    var _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./historias-modal-routing.module */
    "./src/app/Pages/Santiago/historias-modal/historias-modal-routing.module.ts");
    /* harmony import */


    var _historias_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historias-modal.page */
    "./src/app/Pages/Santiago/historias-modal/historias-modal.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var HistoriasModalPageModule = function HistoriasModalPageModule() {
      _classCallCheck(this, HistoriasModalPageModule);
    };

    HistoriasModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HistoriasModalPageModule
    });
    HistoriasModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HistoriasModalPageModule_Factory(t) {
        return new (t || HistoriasModalPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["HistoriasModalPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HistoriasModalPageModule, {
        declarations: [_historias_modal_page__WEBPACK_IMPORTED_MODULE_5__["HistoriasModalPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["HistoriasModalPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoriasModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["HistoriasModalPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          declarations: [_historias_modal_page__WEBPACK_IMPORTED_MODULE_5__["HistoriasModalPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/Santiago/historias-modal/historias-modal.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Pages/Santiago/historias-modal/historias-modal.page.ts ***!
    \************************************************************************/

  /*! exports provided: HistoriasModalPage */

  /***/
  function srcAppPagesSantiagoHistoriasModalHistoriasModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriasModalPage", function () {
      return HistoriasModalPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/Api/IGTM.service */
    "./src/app/providers/Api/IGTM.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../pipes/Textos/colores.pipe */
    "./src/app/pipes/Textos/colores.pipe.ts");

    var _c0 = ["slide"];
    var _c1 = ["miSlide"];

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ht_r1966 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ht_r1966.dibujo.texto);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ht_r1966 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://www.motocaliapp.com/11927613401/", ht_r1966.archivos[0].ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r1976 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_16_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1976);

          var a_r1967 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var i_r1963 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r1974 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1974.abrir(i_r1963, a_r1967);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ver m\xE1s... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_ion_item_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1982 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_ion_item_3_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1982);

          var persona_r1980 = ctx.$implicit;

          var ctx_r1981 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);

          return ctx_r1981.perfilNavegar(persona_r1980.nombreusuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var persona_r1980 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://www.motocaliapp.com/", persona_r1980.imagen[0].path, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](persona_r1980.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", persona_r1980.nombreusuario, "");
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Usuarios etiquetados");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_ion_item_3_Template, 8, 3, "ion-item", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ht_r1966 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ht_r1966.etiquetas);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r1986 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1986);

          var a_r1967 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var i_r1963 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r1984 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1984.cerrar2(i_r1963, a_r1967);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_Template, 4, 1, "ion-list", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ht_r1966 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ht_r1966.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1966.etiquetas.length > 0);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1990 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "colores");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_Template_h1_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1990);

          var ctx_r1989 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1989.cerrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_14_Template, 3, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_img_15_Template, 1, 1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_16_Template, 3, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_Template, 7, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ht_r1966 = ctx.$implicit;

        var historia_r1962 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r1965 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 12, ht_r1966));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("one", historia_r1962.length === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", historia_r1962[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1965.info.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", ctx_r1965.info.usuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1966.tipo === "dibujar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1966.tipo === "multimedia");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1966.comentario !== "" || ht_r1966.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1966.etiqueta);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1993 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HistoriasModalPage_ion_slides_1_ion_slide_2_Template_ion_slides_ionSlideWillChange_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1993);

          var ctx_r1992 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1992.rotar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_Template, 18, 14, "ion-slide", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var historia_r1962 = ctx.$implicit;

        var ctx_r1961 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1961.opt);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", historia_r1962);
      }
    }

    function HistoriasModalPage_ion_slides_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1995 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HistoriasModalPage_ion_slides_1_Template_ion_slides_ionSlideWillChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1995);

          var ctx_r1994 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1994.rotar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HistoriasModalPage_ion_slides_1_ion_slide_2_Template, 4, 2, "ion-slide", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1959 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1959.slideopts);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1959.historiasbase);
      }
    }

    var HistoriasModalPage =
    /*#__PURE__*/
    function () {
      function HistoriasModalPage(modalCtrl, statusbar, router, almacenamiento, IGTMApi, toast) {
        _classCallCheck(this, HistoriasModalPage);

        this.modalCtrl = modalCtrl;
        this.statusbar = statusbar;
        this.router = router;
        this.almacenamiento = almacenamiento;
        this.IGTMApi = IGTMApi;
        this.toast = toast;
        this.ht = ['fsdf', 'asdfasf', 'asfas'];
        this.slideopts = {
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
              };
              this.params = Object.assign(this.params, overwriteParams);
              this.originalParams = Object.assign(this.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              var $el = swiper.$el,
                  $wrapperEl = swiper.$wrapperEl,
                  slides = swiper.slides,
                  swiperWidth = swiper.width,
                  swiperHeight = swiper.height,
                  rtl = swiper.rtlTranslate,
                  swiperSize = swiper.size;
              var params = swiper.params.cubeEffect;
              var isHorizontal = swiper.isHorizontal();
              var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
              var wrapperRotate = 0;
              var $cubeShadowEl;

              if (params.shadow) {
                if (isHorizontal) {
                  $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                  if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                  }

                  $cubeShadowEl.css({
                    height: "".concat(swiperWidth, "px")
                  });
                } else {
                  $cubeShadowEl = $el.find('.swiper-cube-shadow');

                  if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                  }
                }
              }

              for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;

                if (isVirtual) {
                  slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }

                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);

                if (rtl) {
                  slideAngle = -slideAngle;
                  round = Math.floor(-slideAngle / 360);
                }

                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;

                if (slideIndex % 4 === 0) {
                  tx = -round * 4 * swiperSize;
                  tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                  tx = 0;
                  tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                  tx = swiperSize + round * 4 * swiperSize;
                  tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                  tx = -swiperSize;
                  tz = 3 * swiperSize + swiperSize * 4 * round;
                }

                if (rtl) {
                  tx = -tx;
                }

                if (!isHorizontal) {
                  ty = tx;
                  tx = 0;
                }

                var transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

                if (progress <= 1 && progress > -1) {
                  wrapperRotate = slideIndex * 90 + progress * 90;
                  if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }

                $slideEl.transform(transform$$1);

                if (params.slideShadows) {
                  // Set shadows
                  var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                  var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                  if (shadowBefore.length === 0) {
                    shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                    $slideEl.append(shadowBefore);
                  }

                  if (shadowAfter.length === 0) {
                    shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                    $slideEl.append(shadowAfter);
                  }

                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
              }

              $wrapperEl.css({
                '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
              });

              if (params.shadow) {
                if (isHorizontal) {
                  $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
                } else {
                  var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                  var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                  var scale1 = params.shadowScale;
                  var scale2 = params.shadowScale / multiplier;
                  var offset$$1 = params.shadowOffset;
                  $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset$$1, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
                }
              }

              var zFactor = swiper.browser.isSafari || swiper.browser.isUiWebView ? -swiperSize / 2 : 0;
              $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              var $el = swiper.$el,
                  slides = swiper.slides;
              slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

              if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
              }
            }
          }
        };
        this.opt = {
          direction: 'vertical'
        };
        this.historiasbase = [];
        this.estilos = '';
        this.cargo = true;
      }

      _createClass(HistoriasModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.historiasbase = this.historias;
          console.log(this.historias, this.info);
          this.miSlide.slideTo(this.info.idx, 0).then(function () {
            console.log('VIajando');

            _this.slide.getActiveIndex().then(function (idx) {
              _this.vistos(_this.historiasbase[_this.info.idx][idx]._id);
            });
          });
        }
      }, {
        key: "rotar",
        value: function rotar() {
          var _this2 = this;

          this.miSlide.getActiveIndex().then(function (ind) {
            console.log('VIajando');

            _this2.slide.getActiveIndex().then(function (idx) {
              console.log(ind, idx);

              _this2.vistos(_this2.historiasbase[ind][idx]._id);
            });
          });
        }
      }, {
        key: "vistos",
        value: function vistos(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
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
                      this.IGTMApi.vistos(info.token, {
                        id: id
                      }).subscribe(function (data) {
                        console.log(data, 'vistos', id);
                      }, function (err) {});
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
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss();
          this.historias = [];
          this.info = {};
        }
      }, {
        key: "cambio",
        value: function cambio(histo, idx) {
          var _this3 = this;

          this.slide.getActiveIndex().then(function (num) {
            var historia = _this3.historias[idx];
            console.log(historia);

            if (historia[num].tipo === 'dibujar') {// this.statusbar.backgroundColorByHexString(historia[num].dibujo.fondo);
            } else {//  this.statusbar.backgroundColorByHexString('#273238');
              }
          });
        }
      }, {
        key: "ver",
        value: function ver(histo) {
          if (histo.tipo === 'dibujar') {//   this.statusbar.backgroundColorByHexString(histo.dibujo.fondo);
          } else {// this.statusbar.backgroundColorByHexString('#273238');
            }
        }
      }, {
        key: "abrir",
        value: function abrir(i, a) {
          this.historias[i][a].etiqueta = true;
        }
      }, {
        key: "cerrar2",
        value: function cerrar2(i, a) {
          this.historias[i][a].etiqueta = false;
        }
      }, {
        key: "perfilNavegar",
        value: function perfilNavegar(u) {
          this.modalCtrl.dismiss();
          this.router.navigate(['/visita/', u, 's']);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {// this.statusbar.backgroundColorByHexString('#273238');
        }
      }]);

      return HistoriasModalPage;
    }();

    HistoriasModalPage.ɵfac = function HistoriasModalPage_Factory(t) {
      return new (t || HistoriasModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__["IGTMService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]));
    };

    HistoriasModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HistoriasModalPage,
      selectors: [["app-historias-modal"]],
      viewQuery: function HistoriasModalPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.miSlide = _t.first);
        }
      },
      inputs: {
        info: "info",
        historias: "historias"
      },
      decls: 2,
      vars: 1,
      consts: [["color", "darkgold"], [3, "options", "ionSlideWillChange", 4, "ngIf"], [3, "options", "ionSlideWillChange"], ["miSlide", ""], ["class", "red", 4, "ngFor", "ngForOf"], [1, "red"], [1, "sl", 3, "options", "ionSlideWillChange"], ["slide", ""], [3, "one", "style", 4, "ngFor", "ngForOf"], [1, "encabezado"], [1, "data"], ["alt", "", 3, "src"], [1, "titulo"], [3, "click"], ["class", "texto", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "pie", 4, "ngIf"], ["class", "etiquetados", 4, "ngIf"], [1, "texto"], [1, "pie"], [1, "data", 3, "click"], [1, "etiquetados"], [1, "dataa"], [1, "cerrarr", 3, "click"], [1, "com"], [4, "ngIf"], [1, "cc"], ["color", "oscuro", 3, "click", 4, "ngFor", "ngForOf"], ["color", "oscuro", 3, "click"], ["slot", "start"], [3, "src"]],
      template: function HistoriasModalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HistoriasModalPage_ion_slides_1_Template, 3, 2, "ion-slides", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargo);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"]],
      pipes: [_pipes_Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_9__["ColoresPipe"]],
      styles: [".contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\n.encabezado[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 10;\n}\n\n.pie[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 10;\n}\n\n.pie[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  width: 150px;\n  background: #333333;\n  color: #ffffff !important;\n  text-align: center;\n  padding: 5px 10px;\n  font-size: 14px;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #ffffff;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  text-align: left;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nion-slide[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.one[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\n\n.sl[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n\n.sl[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  height: 100%;\n  position: relative;\n}\n\n.sl[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  font-weight: bold;\n}\n\n.etiquetados[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  z-index: 20;\n  background: #3B4B54;\n}\n\n.etiquetados[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: #3B4B54;\n}\n\n.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]   .cerrarr[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #ffffff;\n  z-index: 30;\n  font-size: 18px;\n  padding: 5px;\n}\n\n.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]   .com[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  color: #ffffff;\n  font-size: 16px;\n  padding: 10px;\n}\n\n.cc[_ngcontent-%COMP%] {\n  background: #536169;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU2FudGlhZ28vaGlzdG9yaWFzLW1vZGFsL0M6XFxNaW1vdG8vc3JjXFxhcHBcXFBhZ2VzXFxTYW50aWFnb1xcaGlzdG9yaWFzLW1vZGFsXFxoaXN0b3JpYXMtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9QYWdlcy9TYW50aWFnby9oaXN0b3JpYXMtbW9kYWwvaGlzdG9yaWFzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1NhbnRpYWdvL2hpc3Rvcmlhcy1tb2RhbC9oaXN0b3JpYXMtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBpZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBpZSAuZGF0YXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIC5kYXRhIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyAuZGF0YSAudGl0dWxvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIC5kYXRhIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8gLmRhdGEgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSBpb24tc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm9uZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zbCBpb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2wgaW9uLXNsaWRlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHRvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0I0QjU0O1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3MgaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNEI1NDtcclxufVxyXG5cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmV0aXF1ZXRhZG9zIC5kYXRhYSAuY2VycmFyciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMzA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEgLmNvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNjIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MzYxNjk7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufSIsIi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5lbmNhYmV6YWRvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBpZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBpZSAuZGF0YSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSAudGl0dWxvIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSBzdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIGlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm9uZSB7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLnNsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNsIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2wgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dG8gaDMge1xuICBmb250LXNpemU6IDIycHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV0aXF1ZXRhZG9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZDogIzNCNEI1NDtcbn1cblxuLmV0aXF1ZXRhZG9zIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogIzNCNEI1NDtcbn1cblxuLmV0aXF1ZXRhZG9zIC5kYXRhYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmV0aXF1ZXRhZG9zIC5kYXRhYSAuY2VycmFyciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXRpcXVldGFkb3MgLmRhdGFhIC5jb20ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2Mge1xuICBiYWNrZ3JvdW5kOiAjNTM2MTY5O1xuICBjb2xvcjogI2NjY2NjYztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HistoriasModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-historias-modal',
          templateUrl: './historias-modal.page.html',
          styleUrls: ['./historias-modal.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }, {
          type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__["IGTMService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]
        }];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        historias: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slide', {
            static: false
          }]
        }],
        miSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['miSlide', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/providers/Api/IGTM.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/providers/Api/IGTM.service.ts ***!
    \***********************************************/

  /*! exports provided: IGTMService */

  /***/
  function srcAppProvidersApiIGTMServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IGTMService", function () {
      return IGTMService;
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
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

    var IGTMService =
    /*#__PURE__*/
    function () {
      function IGTMService(http, MmyTransfer) {
        _classCallCheck(this, IGTMService);

        this.http = http;
        this.MmyTransfer = MmyTransfer;
      }

      _createClass(IGTMService, [{
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
        key: "BuscarUsuarios",
        value: function BuscarUsuarios(token, patron) {
          var _this4 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/empleados/buscar/"), {
            patron: patron
          }, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this4.hanflerError(error);
          }));
        }
      }, {
        key: "crearPublicacion",
        value: function crearPublicacion(token, data) {
          var _this5 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/crear/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this5.hanflerError(error);
          }));
        }
      }, {
        key: "leerPublicacion",
        value: function leerPublicacion(token, data) {
          var _this6 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/leer/"), {}, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this6.hanflerError(error);
          }));
        }
      }, {
        key: "leerPublicacionUsuario",
        value: function leerPublicacionUsuario(token, data) {
          var _this7 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/leer/usuario"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this7.hanflerError(error);
          }));
        }
      }, {
        key: "subirArchivosChat",
        value: function subirArchivosChat(token, id, imagen, final, cont, historia, name, mime) {
          console.log('archivo', imagen);
          var options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'POST',
            headers: {
              'x-token': token,
              'x-idpublicacion': id,
              'x-final': final,
              'x-cont': cont,
              'x-historia': historia
            }
          };
          var fileTransfer = this.MmyTransfer.create();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(fileTransfer.upload(imagen, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/upload"), options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log("No se pudo subir la imagen ", error);
            throw new Error("No se pudo subir la imagen ");
          }));
        }
      }, {
        key: "leerFotos",
        value: function leerFotos(token, data) {
          var _this8 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/fotos/leer/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this8.hanflerError(error);
          }));
        }
      }, {
        key: "vistos",
        value: function vistos(token, data) {
          var _this9 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/historias/vistos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this9.hanflerError(error);
          }));
        }
      }, {
        key: "meGusta",
        value: function meGusta(token, data) {
          var _this10 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/megusta/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this10.hanflerError(error);
          }));
        }
      }, {
        key: "saber",
        value: function saber(token, data) {
          var _this11 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/publicacion/seguidos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this11.hanflerError(error);
          }));
        }
      }, {
        key: "saberHistorias",
        value: function saberHistorias(token, data) {
          var _this12 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/historias/seguidos/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this12.hanflerError(error);
          }));
        }
      }, {
        key: "leerUna",
        value: function leerUna(token, data) {
          var _this13 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/leer/uno/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this13.hanflerError(error);
          }));
        }
      }, {
        key: "crearComentario",
        value: function crearComentario(token, data) {
          var _this14 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/comentarios/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this14.hanflerError(error);
          }));
        }
      }, {
        key: "crearCompartida",
        value: function crearCompartida(token, data) {
          var _this15 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/compartir/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this15.hanflerError(error);
          }));
        }
      }, {
        key: "crearGuardado",
        value: function crearGuardado(token, data) {
          var _this16 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/igtm/guardado/"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this16.hanflerError(error);
          }));
        }
      }]);

      return IGTMService;
    }();

    IGTMService.ɵfac = function IGTMService_Factory(t) {
      return new (t || IGTMService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]));
    };

    IGTMService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IGTMService,
      factory: IGTMService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IGTMService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Pages-Santiago-historias-modal-historias-modal-module-es5.js.map