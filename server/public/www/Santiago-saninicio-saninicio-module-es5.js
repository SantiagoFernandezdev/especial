function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Santiago-saninicio-saninicio-module"], {
  /***/
  "./src/app/pages/Santiago/historias-modal/historias-modal-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/Santiago/historias-modal/historias-modal-routing.module.ts ***!
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
    "./src/app/pages/Santiago/historias-modal/historias-modal.page.ts");

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
  "./src/app/pages/Santiago/historias-modal/historias-modal.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/Santiago/historias-modal/historias-modal.module.ts ***!
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
    "./src/app/pages/Santiago/historias-modal/historias-modal-routing.module.ts");
    /* harmony import */


    var _historias_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historias-modal.page */
    "./src/app/pages/Santiago/historias-modal/historias-modal.page.ts");
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
  "./src/app/pages/Santiago/historias-modal/historias-modal.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/Santiago/historias-modal/historias-modal.page.ts ***!
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
        var ht_r1125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ht_r1125.dibujo.texto);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ht_r1125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://www.motocaliapp.com/11927613401/", ht_r1125.archivos[0].ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r1135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_16_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1135);

          var a_r1126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var i_r1122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1133.abrir(i_r1122, a_r1126);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ver m\xE1s... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_ion_item_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_ion_list_6_ion_item_3_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1141);

          var persona_r1139 = ctx.$implicit;

          var ctx_r1140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);

          return ctx_r1140.perfilNavegar(persona_r1139.nombreusuario);
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
        var persona_r1139 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://www.motocaliapp.com/", persona_r1139.imagen[0].path, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](persona_r1139.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", persona_r1139.nombreusuario, "");
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
        var ht_r1125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ht_r1125.etiquetas);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r1145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_div_17_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1145);

          var a_r1126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var i_r1122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r1143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1143.cerrar2(i_r1122, a_r1126);
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
        var ht_r1125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ht_r1125.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1125.etiquetas.length > 0);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1149);

          var ctx_r1148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1148.cerrar();
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
        var ht_r1125 = ctx.$implicit;

        var historia_r1121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r1124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 12, ht_r1125));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("one", historia_r1121.length === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", historia_r1121[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1124.info.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", ctx_r1124.info.usuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1125.tipo === "dibujar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1125.tipo === "multimedia");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1125.comentario !== "" || ht_r1125.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ht_r1125.etiqueta);
      }
    }

    function HistoriasModalPage_ion_slides_1_ion_slide_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HistoriasModalPage_ion_slides_1_ion_slide_2_Template_ion_slides_ionSlideWillChange_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1152);

          var ctx_r1151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1151.rotar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HistoriasModalPage_ion_slides_1_ion_slide_2_ion_slide_3_Template, 18, 14, "ion-slide", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var historia_r1121 = ctx.$implicit;

        var ctx_r1120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1120.opt);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", historia_r1121);
      }
    }

    function HistoriasModalPage_ion_slides_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HistoriasModalPage_ion_slides_1_Template_ion_slides_ionSlideWillChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1154);

          var ctx_r1153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1153.rotar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HistoriasModalPage_ion_slides_1_ion_slide_2_Template, 4, 2, "ion-slide", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1118.slideopts);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1118.historiasbase);
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
      styles: [".contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\n.encabezado[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 10;\n}\n\n.pie[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 10;\n}\n\n.pie[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  width: 150px;\n  background: #333333;\n  color: #ffffff !important;\n  text-align: center;\n  padding: 5px 10px;\n  font-size: 14px;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #ffffff;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  text-align: left;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nion-slide[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.one[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\n\n.sl[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n\n.sl[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  height: 100%;\n  position: relative;\n}\n\n.sl[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  font-weight: bold;\n}\n\n.etiquetados[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  z-index: 20;\n  background: #3B4B54;\n}\n\n.etiquetados[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: #3B4B54;\n}\n\n.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]   .cerrarr[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #ffffff;\n  z-index: 30;\n  font-size: 18px;\n  padding: 5px;\n}\n\n.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]   .com[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  color: #ffffff;\n  font-size: 16px;\n  padding: 10px;\n}\n\n.cc[_ngcontent-%COMP%] {\n  background: #536169;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU2FudGlhZ28vaGlzdG9yaWFzLW1vZGFsL0M6XFxNaW1vdG8vc3JjXFxhcHBcXHBhZ2VzXFxTYW50aWFnb1xcaGlzdG9yaWFzLW1vZGFsXFxoaXN0b3JpYXMtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9TYW50aWFnby9oaXN0b3JpYXMtbW9kYWwvaGlzdG9yaWFzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1NhbnRpYWdvL2hpc3Rvcmlhcy1tb2RhbC9oaXN0b3JpYXMtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBpZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBpZSAuZGF0YXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIC5kYXRhIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyAuZGF0YSAudGl0dWxvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIC5kYXRhIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8gLmRhdGEgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSBpb24tc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm9uZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zbCBpb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2wgaW9uLXNsaWRlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHRvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0I0QjU0O1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3MgaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNEI1NDtcclxufVxyXG5cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmV0aXF1ZXRhZG9zIC5kYXRhYSAuY2VycmFyciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMzA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEgLmNvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNjIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MzYxNjk7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufSIsIi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5lbmNhYmV6YWRvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBpZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBpZSAuZGF0YSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSAudGl0dWxvIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZW5jYWJlemFkbyAuZGF0YSBzdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIGlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm9uZSB7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLnNsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNsIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2wgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dG8gaDMge1xuICBmb250LXNpemU6IDIycHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV0aXF1ZXRhZG9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZDogIzNCNEI1NDtcbn1cblxuLmV0aXF1ZXRhZG9zIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogIzNCNEI1NDtcbn1cblxuLmV0aXF1ZXRhZG9zIC5kYXRhYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmV0aXF1ZXRhZG9zIC5kYXRhYSAuY2VycmFyciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXRpcXVldGFkb3MgLmRhdGFhIC5jb20ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2Mge1xuICBiYWNrZ3JvdW5kOiAjNTM2MTY5O1xuICBjb2xvcjogI2NjY2NjYztcbn0iXX0= */"]
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
  "./src/app/pages/Santiago/saninicio/saninicio-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/Santiago/saninicio/saninicio-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SANinicioPageRoutingModule */

  /***/
  function srcAppPagesSantiagoSaninicioSaninicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SANinicioPageRoutingModule", function () {
      return SANinicioPageRoutingModule;
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


    var _saninicio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./saninicio.page */
    "./src/app/pages/Santiago/saninicio/saninicio.page.ts");

    var routes = [{
      path: '',
      component: _saninicio_page__WEBPACK_IMPORTED_MODULE_2__["SANinicioPage"]
    }];

    var SANinicioPageRoutingModule = function SANinicioPageRoutingModule() {
      _classCallCheck(this, SANinicioPageRoutingModule);
    };

    SANinicioPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SANinicioPageRoutingModule
    });
    SANinicioPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SANinicioPageRoutingModule_Factory(t) {
        return new (t || SANinicioPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SANinicioPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SANinicioPageRoutingModule, [{
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
  "./src/app/pages/Santiago/saninicio/saninicio.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/Santiago/saninicio/saninicio.module.ts ***!
    \**************************************************************/

  /*! exports provided: SANinicioPageModule */

  /***/
  function srcAppPagesSantiagoSaninicioSaninicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SANinicioPageModule", function () {
      return SANinicioPageModule;
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


    var _saninicio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./saninicio-routing.module */
    "./src/app/pages/Santiago/saninicio/saninicio-routing.module.ts");
    /* harmony import */


    var _saninicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./saninicio.page */
    "./src/app/pages/Santiago/saninicio/saninicio.page.ts");
    /* harmony import */


    var _video_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video.directive */
    "./src/app/pages/Santiago/saninicio/video.directive.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Modales/igtmplantilla/igtmplantilla.page */
    "./src/app/pages/Modales/igtmplantilla/igtmplantilla.page.ts");
    /* harmony import */


    var _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../Modales/igtmplantilla/igtmplantilla.module */
    "./src/app/pages/Modales/igtmplantilla/igtmplantilla.module.ts");
    /* harmony import */


    var _historias_modal_historias_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../historias-modal/historias-modal.module */
    "./src/app/pages/Santiago/historias-modal/historias-modal.module.ts");
    /* harmony import */


    var _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../historias-modal/historias-modal.page */
    "./src/app/pages/Santiago/historias-modal/historias-modal.page.ts");

    var SANinicioPageModule = function SANinicioPageModule() {
      _classCallCheck(this, SANinicioPageModule);
    };

    SANinicioPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SANinicioPageModule
    });
    SANinicioPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SANinicioPageModule_Factory(t) {
        return new (t || SANinicioPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _saninicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["SANinicioPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPageModule"], _historias_modal_historias_modal_module__WEBPACK_IMPORTED_MODULE_10__["HistoriasModalPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SANinicioPageModule, {
        declarations: [_saninicio_page__WEBPACK_IMPORTED_MODULE_5__["SANinicioPage"], _video_directive__WEBPACK_IMPORTED_MODULE_6__["VideoDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _saninicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["SANinicioPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPageModule"], _historias_modal_historias_modal_module__WEBPACK_IMPORTED_MODULE_10__["HistoriasModalPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SANinicioPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_8__["IgtmplantillaPage"], _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_11__["HistoriasModalPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _saninicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["SANinicioPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPageModule"], _historias_modal_historias_modal_module__WEBPACK_IMPORTED_MODULE_10__["HistoriasModalPageModule"]],
          declarations: [_saninicio_page__WEBPACK_IMPORTED_MODULE_5__["SANinicioPage"], _video_directive__WEBPACK_IMPORTED_MODULE_6__["VideoDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Santiago/saninicio/saninicio.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/Santiago/saninicio/saninicio.page.ts ***!
    \************************************************************/

  /*! exports provided: SANinicioPage */

  /***/
  function srcAppPagesSantiagoSaninicioSaninicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SANinicioPage", function () {
      return SANinicioPage;
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


    var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/Api/IGTM.service */
    "./src/app/providers/Api/IGTM.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../Modales/igtmplantilla/igtmplantilla.page */
    "./src/app/pages/Modales/igtmplantilla/igtmplantilla.page.ts");
    /* harmony import */


    var _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../historias-modal/historias-modal.page */
    "./src/app/pages/Santiago/historias-modal/historias-modal.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _video_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./video.directive */
    "./src/app/pages/Santiago/saninicio/video.directive.ts");

    var _c0 = [".enlace"];
    var _c1 = ["contenido"];

    function SANinicioPage_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1162);

          var ctx_r1161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1161.crearHistoria();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_ion_avatar_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r1165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-avatar", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_ion_avatar_4_Template_ion_avatar_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1165);

          var historia_r1163 = ctx.$implicit;

          var ctx_r1164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1164.navegarHistoria(historia_r1163);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var historia_r1163 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", historia_r1163.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SANinicioPage_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-skeleton-text", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return [1, 1, 1, 1, 1];
    };

    function SANinicioPage_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANinicioPage_div_7_div_1_Template, 9, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function SANinicioPage_div_8_div_1_div_2_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_div_13_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1181);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1179.etiquetas(publicacion_r1169.etiquetas);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_2_ion_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_ion_button_21_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1184);

          var ctx_r1183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1183.$implicit;
          var o_r1170 = ctx_r1183.index;

          var ctx_r1182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1182.guardado(publicacion_r1169, "crear", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_2_ion_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r1187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_ion_button_22_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1187);

          var ctx_r1186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1186.$implicit;
          var o_r1170 = ctx_r1186.index;

          var ctx_r1185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1185.guardado(publicacion_r1169, "eliminar", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_2_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r1190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1190);

          var ctx_r1189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1189.$implicit;
          var o_r1170 = ctx_r1189.index;

          var ctx_r1188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1188.megusta(publicacion_r1169, "megusta", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_2_ion_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r1193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_ion_button_26_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1193);

          var ctx_r1192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1192.$implicit;
          var o_r1170 = ctx_r1192.index;

          var ctx_r1191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1191.megusta(publicacion_r1169, "nomegusta", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_2_ion_item_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r1196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_ion_item_27_Template_ion_avatar_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1196);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1194.perfilNavegar(publicacion_r1169.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_ion_item_27_Template_ion_label_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1196);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1197.perfilNavegar(publicacion_r1169.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Publicaci\xF3n original creada por ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1169.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", publicacion_r1169.creadororiginal.nombreusuario, "");
      }
    }

    function SANinicioPage_div_8_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1202);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1200.perfilNavegar(publicacion_r1169.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_Template_ion_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1202);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1203.perfilNavegar(publicacion_r1169.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SANinicioPage_div_8_div_1_div_2_div_13_Template, 3, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_Template_ion_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1202);

          var ctx_r1206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1169 = ctx_r1206.$implicit;
          var o_r1170 = ctx_r1206.index;

          var ctx_r1205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1205.comentarios(publicacion_r1169, o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_Template_ion_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1202);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1207.compartir(publicacion_r1169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SANinicioPage_div_8_div_1_div_2_ion_button_21_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SANinicioPage_div_8_div_1_div_2_ion_button_22_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-buttons", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SANinicioPage_div_8_div_1_div_2_ion_button_25_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SANinicioPage_div_8_div_1_div_2_ion_button_26_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SANinicioPage_div_8_div_1_div_2_ion_item_27_Template, 7, 2, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_Template_strong_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1202);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1209.perfilNavegar(publicacion_r1169.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_2_Template_div_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1202);

          var ctx_r1212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1169 = ctx_r1212.$implicit;
          var o_r1170 = ctx_r1212.index;

          var ctx_r1211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1211.comentarios(publicacion_r1169, o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " A\xF1adir Comentario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1169.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1169.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", publicacion_r1169.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", publicacion_r1169.dibujo.fondo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("color", publicacion_r1169.dibujo.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1169.dibujo.texto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1169.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1169.valormg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1169.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.cog);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1169.creador.nombreusuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1169.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1169.msg);
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 54);
      }

      if (rf & 2) {
        var archivo_r1222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1222.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 55);
      }

      if (rf & 2) {
        var archivo_r1222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1222.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abrir V\xEDdeo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_Template_ion_slide_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1231);

          var i_r1223 = ctx.index;

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          var ctx_r1229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1229.ver(publicacion_r1169.archivos, i_r1223, publicacion_r1169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template, 1, 1, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template, 1, 1, "video", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template, 2, 0, "ion-button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var archivo_r1222 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1222.mime.includes("image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1222.mime.includes("video") || archivo_r1222.mime.includes("Video") || archivo_r1222.mime.includes("mp4") || archivo_r1222.mime.includes("MP4"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1222.mime.includes("video") || archivo_r1222.mime.includes("Video") || archivo_r1222.mime.includes("mp4") || archivo_r1222.mime.includes("MP4"));
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_slides_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANinicioPage_div_8_div_1_div_3_ion_slides_11_ion_slide_1_Template, 4, 3, "ion-slide", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pager", publicacion_r1169.pager);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", publicacion_r1169.archivos);
      }
    }

    function SANinicioPage_div_8_div_1_div_3_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r1235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1235);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1233.etiquetas(publicacion_r1169.etiquetas);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r1238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_button_20_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1238);

          var ctx_r1237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1237.$implicit;
          var o_r1170 = ctx_r1237.index;

          var ctx_r1236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1236.guardado(publicacion_r1169, "crear", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_button_21_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1241);

          var ctx_r1240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1240.$implicit;
          var o_r1170 = ctx_r1240.index;

          var ctx_r1239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1239.guardado(publicacion_r1169, "eliminar", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r1244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_button_24_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1244);

          var ctx_r1243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1243.$implicit;
          var o_r1170 = ctx_r1243.index;

          var ctx_r1242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1242.megusta(publicacion_r1169, "megusta", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r1247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1247);

          var ctx_r1246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1169 = ctx_r1246.$implicit;
          var o_r1170 = ctx_r1246.index;

          var ctx_r1245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1245.megusta(publicacion_r1169, "nomegusta", o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SANinicioPage_div_8_div_1_div_3_ion_item_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_item_26_Template_ion_avatar_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1250);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1248.perfilNavegar(publicacion_r1169.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_ion_item_26_Template_ion_label_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1250);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1251.perfilNavegar(publicacion_r1169.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1169.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1169.creadororiginal.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1169.creadororiginal.nombreusuario, "");
      }
    }

    function SANinicioPage_div_8_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1256);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1254.perfilNavegar(publicacion_r1169.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_Template_ion_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1256);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1257.perfilNavegar(publicacion_r1169.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SANinicioPage_div_8_div_1_div_3_ion_slides_11_Template, 2, 2, "ion-slides", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SANinicioPage_div_8_div_1_div_3_div_12_Template, 3, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-buttons", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_Template_ion_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1256);

          var ctx_r1260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1169 = ctx_r1260.$implicit;
          var o_r1170 = ctx_r1260.index;

          var ctx_r1259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1259.comentarios(publicacion_r1169, o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_Template_ion_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1256);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1261.compartir(publicacion_r1169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SANinicioPage_div_8_div_1_div_3_ion_button_20_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SANinicioPage_div_8_div_1_div_3_ion_button_21_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-buttons", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SANinicioPage_div_8_div_1_div_3_ion_button_24_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SANinicioPage_div_8_div_1_div_3_ion_button_25_Template, 2, 0, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SANinicioPage_div_8_div_1_div_3_ion_item_26_Template, 7, 3, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_Template_strong_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1256);

          var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1263.perfilNavegar(publicacion_r1169.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANinicioPage_div_8_div_1_div_3_Template_div_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1256);

          var ctx_r1266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1169 = ctx_r1266.$implicit;
          var o_r1170 = ctx_r1266.index;

          var ctx_r1265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1265.comentarios(publicacion_r1169, o_r1170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " A\xF1adir Comentario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r1172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1169.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1169.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", publicacion_r1169.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1172.cargadentro);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1169.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1169.valormg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1169.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.cog);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1169.creador.nombreusuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1169.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1169.msg);
      }
    }

    function SANinicioPage_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SANinicioPage_div_8_div_1_div_2_Template, 38, 18, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SANinicioPage_div_8_div_1_div_3_Template, 37, 14, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1169 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.tipo === "dibujar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1169.tipo === "multimedia");
      }
    }

    function SANinicioPage_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANinicioPage_div_8_div_1_Template, 4, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1159.publicaciones);
      }
    }

    var SANinicioPage =
    /*#__PURE__*/
    function () {
      function SANinicioPage(almacenamiento, modalCtrl, IGTMApi, toast, router, statusbar, socket) {
        _classCallCheck(this, SANinicioPage);

        this.almacenamiento = almacenamiento;
        this.modalCtrl = modalCtrl;
        this.IGTMApi = IGTMApi;
        this.toast = toast;
        this.router = router;
        this.statusbar = statusbar;
        this.socket = socket;
        this.slideOpt = {
          zoom: {
            maxRatio: 8,
            toggle: true
          }
        };
        this.click = false;
        this.publicaciones = [];
        this.cargadentro = false;
        this.noticias = [1];
        this.historias = [];
        this.historiasBase = [];
        this.cargaTodo = false;
        this.clicks().subscribe(function () {});
      }

      _createClass(SANinicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log('Comenzando');
          this.historias = [];
          this.historiasBase = [];
          this.iniciar2();
          this.iniciar();
        }
      }, {
        key: "refrescando",
        value: function refrescando(event) {
          var _this4 = this;

          this.historias = [];
          this.historiasBase = [];
          this.iniciar().then(function () {
            _this4.iniciar2();

            event.detail.complete();
          }).catch(function () {
            _this4.iniciar2();

            event.detail.complete();
          });
        }
      }, {
        key: "clicks",
        value: function clicks() {
          var _this5 = this;

          var obst = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (obs) {
            if (_this5.enlace) {
              obs.next('Bien');

              _this5.enlace.nativeElement.addEventListener('click', function () {
                console.log('Hola');
              });
            }
          });
          return obst;
        }
      }, {
        key: "iniciar",
        value: function iniciar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

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
                      this.IGTMApi.saber(info.token, {}).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee3() {
                          var _this7 = this;

                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  console.log(data);

                                  if (data.exe) {
                                    data.response.forEach(function (item, i) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0,
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(function _callee2() {
                                        var _this8 = this;

                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                          while (1) {
                                            switch (_context2.prev = _context2.next) {
                                              case 0:
                                                item.guardado = false;

                                                if (item.creador.imagen.length > 0) {
                                                  item.image = "https://motocaliapp.com/".concat(item.creador.imagen[0].path);
                                                } else {
                                                  item.image = '/assets/notfound.png';
                                                }

                                                if (item.creadororiginal) {
                                                  item.cog = true;

                                                  if (item.creadororiginal.imagen.length > 0) {
                                                    item.imageori = "https://motocaliapp.com/".concat(item.creadororiginal.imagen[0].path);
                                                  } else {
                                                    item.imageori = '/assets/notfound.png';
                                                  }
                                                } else {
                                                  item.cog = false;
                                                }

                                                _context2.next = 5;
                                                return new Promise(function (resolve, reject) {
                                                  _this8.IGTMApi.leerFotos(info.token, {
                                                    id: item._id,
                                                    historia: 'false'
                                                  }).subscribe(function (res) {
                                                    if (res.exe) {
                                                      item.archivos = res.response;
                                                      console.log(res.response.length, 'Bien fotos');

                                                      if (res.response.length > 1) {
                                                        item.pager = true;
                                                        resolve({
                                                          exe: true
                                                        });
                                                      } else {
                                                        resolve({
                                                          exe: false
                                                        });
                                                        item.pager = false;
                                                      }
                                                    } else {
                                                      resolve({
                                                        exe: true
                                                      });
                                                      item.archivos = [];
                                                    }

                                                    _this8.cargadentro = true;
                                                  }, function (err) {
                                                    resolve({
                                                      exe: false
                                                    });
                                                    item.archivos = [];
                                                  });
                                                });

                                              case 5:
                                                _context2.next = 7;
                                                return new Promise(function (resolve, reject) {
                                                  _this8.IGTMApi.crearGuardado(info.token, {
                                                    publicacion: item._id,
                                                    tipo: 'leer'
                                                  }).subscribe(function (res) {
                                                    console.log(res, 'Guardado');

                                                    if (res.exe) {
                                                      item.guardado = true;
                                                    } else {
                                                      item.guardado = false;
                                                    }

                                                    resolve(true);
                                                  }, function (err) {
                                                    resolve(true);
                                                    item.guardado = false;
                                                  });
                                                });

                                              case 7:
                                                _context2.next = 9;
                                                return new Promise(function (resolve, reject) {
                                                  _this8.IGTMApi.meGusta(info.token, {
                                                    id: item._id,
                                                    tipo: 'leer'
                                                  }).subscribe(function (res) {
                                                    if (res.response.find(function (itemmg) {
                                                      return itemmg.creador === info._id;
                                                    })) {
                                                      item.megusta = true;
                                                    } else {
                                                      item.megusta = false;
                                                    }

                                                    resolve(true);
                                                    item.valormg = res.response.length;
                                                  }, function (err) {
                                                    resolve(true);
                                                    item.megusta = false;
                                                    item.valormg = '';
                                                  });
                                                });

                                              case 9:
                                                _context2.next = 11;
                                                return new Promise(function (resolve, reject) {
                                                  _this8.IGTMApi.crearComentario(info.token, {
                                                    _id: item._id,
                                                    tipo: 'leer'
                                                  }).subscribe(function (res) {
                                                    console.log(res.response, 'comentarios', item._id);

                                                    if (res.exe) {
                                                      item.comentarios = res.response;

                                                      if (res.response.length > 0) {
                                                        item.msg = "".concat(item.comentarios.length, " comentarios...");
                                                      } else {
                                                        item.msg = 'No hay ningún comentario paraesta publicación';
                                                      }
                                                    } else {
                                                      item.comentarios = [];
                                                    }

                                                    resolve(true);
                                                    _this8.cargadentro = true;
                                                  }, function (err) {
                                                    resolve(true);
                                                    item.comentarios = [];
                                                  });
                                                });

                                              case 11:
                                                console.log(item._id); // if(item.comentario !== '') {
                                                //   let array = item.comentario.split(' ');
                                                //   console.log(array, 'array')
                                                //   array = array.map((arr: string) => {
                                                //     if (arr.charAt(0) === '@') {
                                                //       let viaje = arr.substr(1);
                                                //       arr = `<a class="enlace" href="/central/buscar/perfil-visita/${viaje}">${arr}</a>`;
                                                //       console.log(arr);
                                                //     }
                                                //     return arr;
                                                //   })
                                                //   array = array.join(' ');
                                                //   console.log(array);
                                                //   item.comentario = array;
                                                // }

                                              case 12:
                                              case "end":
                                                return _context2.stop();
                                            }
                                          }
                                        }, _callee2);
                                      }));
                                    });
                                    this.publicaciones = data.response;
                                  } else {}

                                  this.cargaTodo = true;

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (err) {});
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
        key: "iniciar2",
        value: function iniciar2() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this9 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context8.sent;

                    if (info) {
                      this.IGTMApi.saberHistorias(info.token, {}).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee7() {
                          var _this10 = this;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  console.log(data, 'Historias');

                                  if (data.exe) {
                                    //this.cargaTodo = true;
                                    this.historias = [];
                                    data.response.forEach(function (item, i) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0,
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(function _callee6() {
                                        var _this11 = this;

                                        var obj;
                                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                          while (1) {
                                            switch (_context6.prev = _context6.next) {
                                              case 0:
                                                // item.guardado = false;
                                                if (item[0].creador.imagen.length > 0) {
                                                  item[0].image = "https://motocaliapp.com/".concat(item[0].creador.imagen[0].path);
                                                } else {
                                                  item[0].image = '/assets/notfound.png';
                                                }

                                                obj = {
                                                  img: item[0].image,
                                                  idx: i,
                                                  nombre: item[0].creador.nombrecompleto,
                                                  usuario: item[0].creador.nombreusuario
                                                };
                                                item.forEach(function (histo) {
                                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0,
                                                  /*#__PURE__*/
                                                  regeneratorRuntime.mark(function _callee5() {
                                                    var _this12 = this;

                                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                                      while (1) {
                                                        switch (_context5.prev = _context5.next) {
                                                          case 0:
                                                            _context5.next = 2;
                                                            return new Promise(function (resolve, reject) {
                                                              _this12.IGTMApi.leerFotos(info.token, {
                                                                id: histo._id,
                                                                historia: 'true'
                                                              }).subscribe(function (res) {
                                                                console.log(res.response, 'fotosssssssssssssssssssssss');

                                                                if (res.exe) {
                                                                  histo.archivos = res.response;
                                                                  console.log(res.response.length, 'Bien fotos');

                                                                  if (res.response.length > 1) {
                                                                    resolve({
                                                                      exe: true
                                                                    });
                                                                  } else {
                                                                    resolve({
                                                                      exe: false
                                                                    });
                                                                  }
                                                                } else {
                                                                  resolve({
                                                                    exe: true
                                                                  });
                                                                  histo.archivos = [];
                                                                }
                                                              }, function (err) {
                                                                resolve({
                                                                  exe: false
                                                                });
                                                                histo.archivos = [];
                                                              });
                                                            });

                                                          case 2:
                                                          case "end":
                                                            return _context5.stop();
                                                        }
                                                      }
                                                    }, _callee5);
                                                  }));
                                                });
                                                this.historias.push(obj);
                                                this.historiasBase.push(item);

                                              case 5:
                                              case "end":
                                                return _context6.stop();
                                            }
                                          }
                                        }, _callee6, this);
                                      }));
                                    });
                                  }

                                case 2:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      }, function (err) {
                        console.log('Error', err);
                      });
                    }

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "megusta",
        value: function megusta(publicacion, tipo, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this13 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log(this.publicaciones[i]);

                    if (tipo === 'megusta') {
                      this.publicaciones[i].megusta = true;
                      this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) + 1;
                    } else {
                      this.publicaciones[i].megusta = false;
                      this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) - 1;
                    }

                    _context9.next = 4;
                    return this.almacenamiento.obtenerToken();

                  case 4:
                    info = _context9.sent;

                    if (info) {
                      this.IGTMApi.meGusta(info.token, {
                        tipo: tipo,
                        id: publicacion._id,
                        creador: publicacion.creador
                      }).subscribe(function (data) {
                        if (data.exe) {
                          if (info._id !== publicacion.creador._id) {
                            if (tipo === 'megusta') {
                              _this13.socket.emit('megusta', {
                                id: publicacion._id,
                                mensaje: "@".concat(info.nusuario, " le gusta tu publicaci\xF3n"),
                                creador: publicacion.creador._id
                              });
                            }
                          }
                        } else {
                          _this13.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                        }
                      }, function (err) {
                        _this13.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                      });
                    }

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "guardado",
        value: function guardado(publicacion, tipo, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this14 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (tipo === 'crear') {
                      this.publicaciones[i].guardado = true;
                    } else {
                      this.publicaciones[i].guardado = false;
                    }

                    _context10.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context10.sent;

                    if (info) {
                      this.IGTMApi.crearGuardado(info.token, {
                        tipo: tipo,
                        publicacion: publicacion._id
                      }).subscribe(function (data) {
                        if (data.exe) {
                          if (tipo === 'crear') {
                            _this14.toast.toastNotificacion('Publicación guardada en colecciones');
                          } else {
                            _this14.toast.toastNotificacion('Publicación eliminada de colecciones');
                          }
                        } else {
                          _this14.toast.toastError('No se pudo guardar, intentelo más tarde');
                        }
                      }, function (err) {
                        _this14.toast.toastError('No se pudo guardar, intentelo más tarde');
                      });
                    }

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "etiquetar",
        value: function etiquetar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var modal;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'etiquetar'
                      }
                    });

                  case 2:
                    modal = _context11.sent;
                    _context11.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "etiquetas",
        value: function etiquetas(etiquetados) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'etiquetados',
                        etiquetados: etiquetados
                      }
                    });

                  case 2:
                    modal = _context12.sent;
                    _context12.next = 5;
                    return modal.present();

                  case 5:
                    _context12.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context12.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;
                    }

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "ver",
        value: function ver(archivos, indice, info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (this.click) {
                      _context13.next = 11;
                      break;
                    }

                    this.click = true;
                    _context13.next = 4;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'visualizador',
                        archivos: archivos,
                        indice: indice,
                        info: info
                      }
                    });

                  case 4:
                    modal = _context13.sent;
                    _context13.next = 7;
                    return modal.present();

                  case 7:
                    _context13.next = 9;
                    return modal.onWillDismiss();

                  case 9:
                    cerrado = _context13.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;
                    }

                  case 11:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "comentarios",
        value: function comentarios(publicacion, indice) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'comentar',
                        publicacion: publicacion._id,
                        creador: publicacion.creador,
                        comentarios: publicacion.comentarios
                      }
                    });

                  case 2:
                    modal = _context14.sent;
                    _context14.next = 5;
                    return modal.present();

                  case 5:
                    _context14.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context14.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;

                      if (cerrado.data) {
                        if (cerrado.data.exe) {
                          this.publicaciones[indice].comentarios = cerrado.data.comentarios;

                          if (cerrado.data.comentarios.length > 0) {
                            this.publicaciones[indice].msg = "".concat(cerrado.data.comentarios.length, " comentarios...");
                          } else {
                            this.publicaciones[indice].msg = 'No hay ningún comentario paraesta publicación';
                          }
                        }
                      }
                    }

                  case 9:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "compartir",
        value: function compartir(publicacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'compartir',
                        publicacionc: publicacion
                      }
                    });

                  case 2:
                    modal = _context15.sent;
                    _context15.next = 5;
                    return modal.present();

                  case 5:
                    _context15.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context15.sent;

                    if (!cerrado) {
                      _context15.next = 15;
                      break;
                    }

                    this.statusbar.show();
                    this.click = false;

                    if (!cerrado.data) {
                      _context15.next = 15;
                      break;
                    }

                    if (!cerrado.data.recargo) {
                      _context15.next = 15;
                      break;
                    }

                    _context15.next = 15;
                    return this.contenido.scrollToTop();

                  case 15:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "perfil",
        value: function perfil(usuario) {
          console.log('Holaa');
        }
      }, {
        key: "perfilNavegar",
        value: function perfilNavegar(usuario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var info;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context16.sent;

                    if (info) {
                      if (info.nusuario === usuario.nombreusuario) {
                        this.router.navigate(['/perfil/', 's']);
                      } else {
                        this.router.navigate(['/visita/', usuario.nombreusuario, 's']);
                      }
                    }

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "crearHistoria",
        value: function crearHistoria() {
          this.router.navigate(['historias/historia']);
        }
      }, {
        key: "navegarHistoria",
        value: function navegarHistoria(historia) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var modal;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.modalCtrl.create({
                      component: _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_11__["HistoriasModalPage"],
                      componentProps: {
                        info: historia,
                        historias: this.historiasBase
                      }
                    });

                  case 2:
                    modal = _context17.sent;
                    _context17.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return SANinicioPage;
    }();

    SANinicioPage.ɵfac = function SANinicioPage_Factory(t) {
      return new (t || SANinicioPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_3__["IGTMService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_2__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"]));
    };

    SANinicioPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SANinicioPage,
      selectors: [["app-saninicio"]],
      viewQuery: function SANinicioPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.enlace = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contenido = _t.first);
        }
      },
      decls: 9,
      vars: 5,
      consts: [[3, "fullscreen"], ["contenido", ""], ["scrollable", "true", 1, "ct"], ["class", "color", 3, "click", 4, "ngFor", "ngForOf"], ["class", "avatar", 3, "click", 4, "ngFor", "ngForOf"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [4, "ngIf"], [1, "color", 3, "click"], [1, "avatar", 3, "click"], [3, "src"], ["class", "skt", 4, "ngFor", "ngForOf"], [1, "skt"], ["lines", "none", 1, "sinfondo"], ["slot", "start"], ["animated", "", "width", "100%", "height", "100%"], ["animated", "", "width", "100%", "height", "30px"], ["animated", "", "width", "100px", "height", "30px"], [2, "height", "200px"], ["animated", "", "width", "100%", "height", "200px"], [4, "ngFor", "ngForOf"], [1, "divider", "ligth"], ["class", "publicacion dibujar", 4, "ngIf"], [1, "publicacion", "dibujar"], ["slot", "start", 3, "click"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [3, "click"], ["slot", "end"], ["name", "ellipsis-vertical-outline", "slot", "icon-only"], [1, "lienzo"], ["class", "etiquetas", 3, "click", 4, "ngIf"], [1, "opciones"], ["lines", "none", "mode", "md", 1, "sinfondo"], ["name", "chatbubble-outline", "slot", "icon-only"], ["name", "arrow-redo-outline", "slot", "icon-only"], [3, "click", 4, "ngIf"], ["lines", "none", "class", "sinfondo opacity", 4, "ngIf"], [1, "comentarios"], [1, "gris", "espacio", 3, "click"], [1, "comentar", 3, "click"], [1, "opt"], [1, "etiquetas", 3, "click"], ["name", "bookmark-outline", "slot", "icon-only"], ["name", "bookmark", "color", "darkgold", "slot", "icon-only"], ["name", "heart-outline", "slot", "icon-only"], ["name", "heart", "color", "danger", "slot", "icon-only"], ["lines", "none", 1, "sinfondo", "opacity"], ["color", "dark", "mode", "ios", 3, "pager", 4, "ngIf"], ["color", "dark", "mode", "ios", 3, "pager"], ["class", "diapo", 3, "click", 4, "ngFor", "ngForOf"], [1, "diapo", 3, "click"], ["width", "100%", 3, "src", 4, "ngIf"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src", 4, "ngIf"], ["class", "btonDiapo", "fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 4, "ngIf"], ["width", "100%", 3, "src"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src"], ["fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 1, "btonDiapo"]],
      template: function SANinicioPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-segment", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SANinicioPage_div_3_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SANinicioPage_ion_avatar_4_Template, 2, 1, "ion-avatar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-refresher", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function SANinicioPage_Template_ion_refresher_ionRefresh_5_listener($event) {
            return ctx.refrescando($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-refresher-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SANinicioPage_div_7_Template, 2, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SANinicioPage_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.noticias);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.historias);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cargaTodo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargaTodo);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], _video_directive__WEBPACK_IMPORTED_MODULE_13__["VideoDirective"]],
      styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.ct[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-oscuro);\n}\n\n.color[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  background-color: #58656D;\n  color: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 22px;\n}\n\n.color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #ffffff;\n  margin: 10px 5px;\n}\n\n.publicacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-top: 1px solid rgba(3, 3, 3, 0.1);\n  max-width: 800px;\n  margin: auto;\n}\n\n.lienzo[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.info[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.opciones[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.comentarios[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.espacio[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.diapo[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo[_ngcontent-%COMP%]   .btonDiapo[_ngcontent-%COMP%] {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n  cursor: pointer;\n}\n\n.comentar[_ngcontent-%COMP%] {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n}\n\n.opt[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU2FudGlhZ28vc2FuaW5pY2lvL0M6XFxNaW1vdG8vc3JjXFxhcHBcXHBhZ2VzXFxTYW50aWFnb1xcc2FuaW5pY2lvXFxzYW5pbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9TYW50aWFnby9zYW5pbmljaW8vc2FuaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU2FudGlhZ28vc2FuaW5pY2lvL3NhbmluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itb3NjdXJvKTtcclxufVxyXG5cclxuLmNvbG9yIHtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2NTZEO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY29sb3Igc3BhbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMywgMywgMywgMC4xKTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5saWVuem8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm9wY2lvbmVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tZW50YXJpb3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZ3JpcyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmVzcGFjaW8ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRpYXBvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaWFwbyB2aWRlbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGlhcG8gLmJ0b25EaWFwbyB7XHJcbiAgICBtYXJnaW46IGF1dG8gNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZXRpcXVldGFzIGgzIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbWVudGFyIHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5vcHQge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn0iLCJkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9zY3Vybyk7XG59XG5cbi5jb2xvciB7XG4gIG1hcmdpbjogMTBweCA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODY1NkQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY29sb3Igc3BhbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmZmZmO1xuICBtYXJnaW46IDEwcHggNXB4O1xufVxuXG4ucHVibGljYWNpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5saWVuem8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4uaW5mbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5vcGNpb25lcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tZW50YXJpb3Mge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmdyaXMge1xuICBjb2xvcjogIzMzMztcbn1cblxuLmVzcGFjaW8ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGlhcG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaWFwbyB2aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmRpYXBvIC5idG9uRGlhcG8ge1xuICBtYXJnaW46IGF1dG8gNSU7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmV0aXF1ZXRhcyBoMyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21lbnRhciB7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub3B0IHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SANinicioPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-saninicio',
          templateUrl: './saninicio.page.html',
          styleUrls: ['./saninicio.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_3__["IGTMService"]
        }, {
          type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_2__["ToastServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"]
        }];
      }, {
        enlace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['.enlace', {
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

  },

  /***/
  "./src/app/pages/Santiago/saninicio/video.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/Santiago/saninicio/video.directive.ts ***!
    \*************************************************************/

  /*! exports provided: VideoDirective */

  /***/
  function srcAppPagesSantiagoSaninicioVideoDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoDirective", function () {
      return VideoDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VideoDirective =
    /*#__PURE__*/
    function () {
      function VideoDirective(el) {
        _classCallCheck(this, VideoDirective);

        this.el = el;
      }

      _createClass(VideoDirective, [{
        key: "cargando",
        value: function cargando() {
          this.el.nativeElement.currentTime = 0.3;
        }
      }]);

      return VideoDirective;
    }();

    VideoDirective.ɵfac = function VideoDirective_Factory(t) {
      return new (t || VideoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    VideoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: VideoDirective,
      selectors: [["", "video-load", ""]],
      hostBindings: function VideoDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadstart", function VideoDirective_loadstart_HostBindingHandler() {
            return ctx.cargando();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[video-load]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        cargando: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['loadstart']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=Santiago-saninicio-saninicio-module-es5.js.map