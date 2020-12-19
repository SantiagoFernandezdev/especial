function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Modales-igtmpublic-igtmpublic-module"], {
  /***/
  "./src/app/Pages/Modales/igtmpublic/igtmpublic-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: IgtmpublicPageRoutingModule */

  /***/
  function srcAppPagesModalesIgtmpublicIgtmpublicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgtmpublicPageRoutingModule", function () {
      return IgtmpublicPageRoutingModule;
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


    var _igtmpublic_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./igtmpublic.page */
    "./src/app/Pages/Modales/igtmpublic/igtmpublic.page.ts");

    var routes = [{
      path: '',
      component: _igtmpublic_page__WEBPACK_IMPORTED_MODULE_2__["IgtmpublicPage"]
    }];

    var IgtmpublicPageRoutingModule = function IgtmpublicPageRoutingModule() {
      _classCallCheck(this, IgtmpublicPageRoutingModule);
    };

    IgtmpublicPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IgtmpublicPageRoutingModule
    });
    IgtmpublicPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IgtmpublicPageRoutingModule_Factory(t) {
        return new (t || IgtmpublicPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IgtmpublicPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgtmpublicPageRoutingModule, [{
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
  "./src/app/Pages/Modales/igtmpublic/igtmpublic.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic.module.ts ***!
    \***************************************************************/

  /*! exports provided: IgtmpublicPageModule */

  /***/
  function srcAppPagesModalesIgtmpublicIgtmpublicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgtmpublicPageModule", function () {
      return IgtmpublicPageModule;
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


    var _igtmpublic_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./igtmpublic-routing.module */
    "./src/app/Pages/Modales/igtmpublic/igtmpublic-routing.module.ts");
    /* harmony import */


    var _igtmpublic_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./igtmpublic.page */
    "./src/app/Pages/Modales/igtmpublic/igtmpublic.page.ts");
    /* harmony import */


    var _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../igtmplantilla/igtmplantilla.page */
    "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");
    /* harmony import */


    var _igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../igtmplantilla/igtmplantilla.module */
    "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.module.ts");

    var IgtmpublicPageModule = function IgtmpublicPageModule() {
      _classCallCheck(this, IgtmpublicPageModule);
    };

    IgtmpublicPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IgtmpublicPageModule
    });
    IgtmpublicPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IgtmpublicPageModule_Factory(t) {
        return new (t || IgtmpublicPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _igtmpublic_routing_module__WEBPACK_IMPORTED_MODULE_4__["IgtmpublicPageRoutingModule"], _igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_7__["IgtmplantillaPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IgtmpublicPageModule, {
        declarations: [_igtmpublic_page__WEBPACK_IMPORTED_MODULE_5__["IgtmpublicPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _igtmpublic_routing_module__WEBPACK_IMPORTED_MODULE_4__["IgtmpublicPageRoutingModule"], _igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_7__["IgtmplantillaPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgtmpublicPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_6__["IgtmplantillaPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _igtmpublic_routing_module__WEBPACK_IMPORTED_MODULE_4__["IgtmpublicPageRoutingModule"], _igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_7__["IgtmplantillaPageModule"]],
          declarations: [_igtmpublic_page__WEBPACK_IMPORTED_MODULE_5__["IgtmpublicPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/Modales/igtmpublic/igtmpublic.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic.page.ts ***!
    \*************************************************************/

  /*! exports provided: IgtmpublicPage */

  /***/
  function srcAppPagesModalesIgtmpublicIgtmpublicPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgtmpublicPage", function () {
      return IgtmpublicPage;
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


    var src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/Api/IGTM.service */
    "./src/app/providers/Api/IGTM.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../igtmplantilla/igtmplantilla.page */
    "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["contenido"];

    function IgtmpublicPage_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-skeleton-text", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return [1, 1];
    };

    function IgtmpublicPage_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmpublicPage_div_6_div_1_Template, 9, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1489 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_div_13_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1489);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1487 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1487.etiquetas(publicacion_r1477.etiquetas);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_ion_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1492 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_ion_button_21_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1492);

          var ctx_r1491 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1491.$implicit;
          var o_r1478 = ctx_r1491.index;

          var ctx_r1490 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1490.guardado(publicacion_r1477, "crear", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_ion_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r1495 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_ion_button_22_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1495);

          var ctx_r1494 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1494.$implicit;
          var o_r1478 = ctx_r1494.index;

          var ctx_r1493 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1493.guardado(publicacion_r1477, "crear", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r1498 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1498);

          var ctx_r1497 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1497.$implicit;
          var o_r1478 = ctx_r1497.index;

          var ctx_r1496 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1496.megusta(publicacion_r1477, "megusta", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_ion_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r1501 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_ion_button_26_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1501);

          var ctx_r1500 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1500.$implicit;
          var o_r1478 = ctx_r1500.index;

          var ctx_r1499 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1499.megusta(publicacion_r1477, "nomegusta", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_ion_item_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r1504 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_ion_item_27_Template_ion_avatar_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1504);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1502 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1502.perfilNavegar(publicacion_r1477.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_ion_item_27_Template_ion_label_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1504);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1505 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1505.perfilNavegar(publicacion_r1477.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Publicaci\xF3n original creada por ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1477.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", publicacion_r1477.creadororiginal.nombreusuario, "");
      }
    }

    function IgtmpublicPage_div_7_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1510 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1510);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1508 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1508.perfilNavegar(publicacion_r1477.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_Template_ion_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1510);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1511 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1511.perfilNavegar(publicacion_r1477.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, IgtmpublicPage_div_7_div_1_div_2_div_13_Template, 3, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_Template_ion_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1510);

          var ctx_r1514 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1477 = ctx_r1514.$implicit;
          var o_r1478 = ctx_r1514.index;

          var ctx_r1513 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1513.comentarios(publicacion_r1477, o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_Template_ion_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1510);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1515 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1515.compartir(publicacion_r1477);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IgtmpublicPage_div_7_div_1_div_2_ion_button_21_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, IgtmpublicPage_div_7_div_1_div_2_ion_button_22_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-buttons", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, IgtmpublicPage_div_7_div_1_div_2_ion_button_25_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, IgtmpublicPage_div_7_div_1_div_2_ion_button_26_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, IgtmpublicPage_div_7_div_1_div_2_ion_item_27_Template, 7, 2, "ion-item", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_Template_strong_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1510);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1517 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1517.perfilNavegar(publicacion_r1477.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_2_Template_div_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1510);

          var ctx_r1520 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1477 = ctx_r1520.$implicit;
          var o_r1478 = ctx_r1520.index;

          var ctx_r1519 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1519.comentarios(publicacion_r1477, o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " A\xF1adir Comentario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1477.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1477.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1477.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", publicacion_r1477.dibujo.fondo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("color", publicacion_r1477.dibujo.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1477.dibujo.texto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1477.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1477.valormg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1477.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.cog);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1477.creador.nombreusuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1477.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1477.msg);
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 48);
      }

      if (rf & 2) {
        var archivo_r1530 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1530.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 49);
      }

      if (rf & 2) {
        var archivo_r1530 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1530.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abrir V\xEDdeo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1539 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_Template_ion_slide_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1539);

          var i_r1531 = ctx.index;

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          var ctx_r1537 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1537.ver(publicacion_r1477.archivos, i_r1531, publicacion_r1477);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template, 1, 1, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template, 1, 1, "video", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template, 2, 0, "ion-button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var archivo_r1530 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1530.mime.includes("image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1530.mime.includes("video") || archivo_r1530.mime.includes("Video") || archivo_r1530.mime.includes("mp4") || archivo_r1530.mime.includes("MP4"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1530.mime.includes("video") || archivo_r1530.mime.includes("Video") || archivo_r1530.mime.includes("mp4") || archivo_r1530.mime.includes("MP4"));
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_ion_slide_1_Template, 4, 3, "ion-slide", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pager", publicacion_r1477.pager);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", publicacion_r1477.archivos);
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r1543 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1543);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1541 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1541.etiquetas(publicacion_r1477.etiquetas);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r1546 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_button_20_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1546);

          var ctx_r1545 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1545.$implicit;
          var o_r1478 = ctx_r1545.index;

          var ctx_r1544 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1544.guardado(publicacion_r1477, "crear", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1549 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_button_21_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1549);

          var ctx_r1548 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1548.$implicit;
          var o_r1478 = ctx_r1548.index;

          var ctx_r1547 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1547.guardado(publicacion_r1477, "crear", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r1552 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_button_24_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1552);

          var ctx_r1551 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1551.$implicit;
          var o_r1478 = ctx_r1551.index;

          var ctx_r1550 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1550.megusta(publicacion_r1477, "megusta", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r1555 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1555);

          var ctx_r1554 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1477 = ctx_r1554.$implicit;
          var o_r1478 = ctx_r1554.index;

          var ctx_r1553 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1553.megusta(publicacion_r1477, "nomegusta", o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_ion_item_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r1558 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_item_26_Template_ion_avatar_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1558);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1556 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1556.perfilNavegar(publicacion_r1477.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_ion_item_26_Template_ion_label_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1558);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1559 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1559.perfilNavegar(publicacion_r1477.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1477.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1477.creadororiginal.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1477.creadororiginal.nombreusuario, "");
      }
    }

    function IgtmpublicPage_div_7_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1564 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1564);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1562 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1562.perfilNavegar(publicacion_r1477.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_Template_ion_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1564);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1565 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1565.perfilNavegar(publicacion_r1477.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, IgtmpublicPage_div_7_div_1_div_3_ion_slides_11_Template, 2, 2, "ion-slides", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IgtmpublicPage_div_7_div_1_div_3_div_12_Template, 3, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-buttons", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_Template_ion_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1564);

          var ctx_r1568 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1477 = ctx_r1568.$implicit;
          var o_r1478 = ctx_r1568.index;

          var ctx_r1567 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1567.comentarios(publicacion_r1477, o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_Template_ion_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1564);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1569 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1569.compartir(publicacion_r1477);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, IgtmpublicPage_div_7_div_1_div_3_ion_button_20_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IgtmpublicPage_div_7_div_1_div_3_ion_button_21_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-buttons", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, IgtmpublicPage_div_7_div_1_div_3_ion_button_24_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, IgtmpublicPage_div_7_div_1_div_3_ion_button_25_Template, 2, 0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, IgtmpublicPage_div_7_div_1_div_3_ion_item_26_Template, 7, 3, "ion-item", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_Template_strong_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1564);

          var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1571 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1571.perfilNavegar(publicacion_r1477.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmpublicPage_div_7_div_1_div_3_Template_div_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1564);

          var ctx_r1574 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1477 = ctx_r1574.$implicit;
          var o_r1478 = ctx_r1574.index;

          var ctx_r1573 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1573.comentarios(publicacion_r1477, o_r1478);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " A\xF1adir Comentario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1477 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r1480 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1477.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1477.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1477.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1480.cargadentro);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1477.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1477.valormg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1477.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.cog);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1477.creador.nombreusuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1477.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1477.msg);
      }
    }

    function IgtmpublicPage_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IgtmpublicPage_div_7_div_1_div_2_Template, 38, 18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgtmpublicPage_div_7_div_1_div_3_Template, 37, 14, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1477 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.tipo === "dibujar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1477.tipo === "multimedia");
      }
    }

    function IgtmpublicPage_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmpublicPage_div_7_div_1_Template, 4, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1473 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1473.publicaciones);
      }
    }

    var IgtmpublicPage =
    /*#__PURE__*/
    function () {
      function IgtmpublicPage(IGTMApi, almacenamiento, activeRoute, modalCtrl, statusbar, toast, socket, router) {
        _classCallCheck(this, IgtmpublicPage);

        this.IGTMApi = IGTMApi;
        this.almacenamiento = almacenamiento;
        this.activeRoute = activeRoute;
        this.modalCtrl = modalCtrl;
        this.statusbar = statusbar;
        this.toast = toast;
        this.socket = socket;
        this.router = router;
        this.publicaciones = [];
        this.cargadentro = false;
        this.click = false;
        this.cargaTodo = false;
      }

      _createClass(IgtmpublicPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.iniciar();
        }
      }, {
        key: "iniciar",
        value: function iniciar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var info;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context2.sent;

                    if (info) {
                      this.IGTMApi.leerUna(info.token, {
                        id: this.activeRoute.snapshot.paramMap.get('id')
                      }).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log(data);

                                  if (!data.exe) {
                                    _context.next = 16;
                                    break;
                                  }

                                  data.response.guardado = false;

                                  if (data.response.creador.imagen.length > 0) {
                                    data.response.image = "https://motocaliapp.com/".concat(data.response.creador.imagen[0].path);
                                  } else {
                                    data.response.image = '/assets/notfound.png';
                                  }

                                  if (data.response.creadororiginal) {
                                    data.response.cog = true;

                                    if (data.response.creadororiginal.imagen.length > 0) {
                                      data.response.imageori = "https://motocaliapp.com/".concat(data.response.creadororiginal.imagen[0].path);
                                    } else {
                                      data.response.imageori = '/assets/notfound.png';
                                    }
                                  } else {
                                    data.response.cog = false;
                                  }

                                  _context.next = 7;
                                  return new Promise(function (resolve, reject) {
                                    _this2.IGTMApi.leerFotos(info.token, {
                                      id: data.response._id
                                    }).subscribe(function (res) {
                                      if (res.exe) {
                                        data.response.archivos = res.response;
                                        console.log(res.response.length, 'Bien fotos');

                                        if (res.response.length > 1) {
                                          data.response.pager = true;
                                          resolve({
                                            exe: true
                                          });
                                        } else {
                                          resolve({
                                            exe: false
                                          });
                                          data.response.pager = false;
                                        }
                                      } else {
                                        resolve({
                                          exe: true
                                        });
                                        data.response.archivos = [];
                                      }

                                      _this2.cargadentro = true;
                                    }, function (err) {
                                      resolve({
                                        exe: false
                                      });
                                      data.response.archivos = [];
                                    });
                                  });

                                case 7:
                                  _context.next = 9;
                                  return new Promise(function (resolve, reject) {
                                    _this2.IGTMApi.crearGuardado(info.token, {
                                      publicacion: data.response._id,
                                      tipo: 'leer'
                                    }).subscribe(function (res) {
                                      if (res.exe) {
                                        data.response.guardado = true;
                                      } else {
                                        data.response.guardado = false;
                                      }

                                      resolve(true);
                                    }, function (err) {
                                      resolve(true);
                                      data.response.guardado = false;
                                    });
                                  });

                                case 9:
                                  _context.next = 11;
                                  return new Promise(function (resolve, reject) {
                                    _this2.IGTMApi.meGusta(info.token, {
                                      id: data.response._id,
                                      tipo: 'leer'
                                    }).subscribe(function (res) {
                                      if (res.response.find(function (itemmg) {
                                        return itemmg.creador === info._id;
                                      })) {
                                        data.response.megusta = true;
                                      } else {
                                        data.response.megusta = false;
                                      }

                                      resolve(true);
                                      data.response.valormg = res.response.length;
                                    }, function (err) {
                                      resolve(true);
                                      data.response.megusta = false;
                                      data.response.valormg = '';
                                    });
                                  });

                                case 11:
                                  _context.next = 13;
                                  return new Promise(function (resolve, reject) {
                                    _this2.IGTMApi.crearComentario(info.token, {
                                      _id: data.response._id,
                                      tipo: 'leer'
                                    }).subscribe(function (res) {
                                      console.log(res.response, 'comentarios', data.response._id);

                                      if (res.exe) {
                                        data.response.comentarios = res.response;

                                        if (res.response.length > 0) {
                                          data.response.msg = "".concat(data.response.comentarios.length, " comentarios...");
                                        } else {
                                          data.response.msg = 'No hay ningún comentario paraesta publicación';
                                        }
                                      } else {
                                        data.response.comentarios = [];
                                      }

                                      resolve(true);
                                      _this2.cargadentro = true;
                                    }, function (err) {
                                      resolve(true);
                                      data.response.comentarios = [];
                                    });
                                  });

                                case 13:
                                  // if(item.comentario !== '') {
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
                                  this.publicaciones.push(data.response);
                                  _context.next = 16;
                                  break;

                                case 16:
                                  this.cargaTodo = true;

                                case 17:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, function (err) {});
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "compartir",
        value: function compartir(publicacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'compartir',
                        publicacionc: publicacion
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context3.sent;

                    if (!cerrado) {
                      _context3.next = 15;
                      break;
                    }

                    this.statusbar.show();
                    this.click = false;

                    if (!cerrado.data) {
                      _context3.next = 15;
                      break;
                    }

                    if (!cerrado.data.recargo) {
                      _context3.next = 15;
                      break;
                    }

                    _context3.next = 15;
                    return this.contenido.scrollToTop();

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "guardado",
        value: function guardado(publicacion, tipo, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (tipo === 'crear') {
                      this.publicaciones[i].guardado = true;
                    } else {
                      this.publicaciones[i].guardado = false;
                    }

                    _context4.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context4.sent;

                    if (info) {
                      this.IGTMApi.crearGuardado(info.token, {
                        tipo: tipo,
                        publicacion: publicacion._id
                      }).subscribe(function (data) {
                        if (data.exe) {
                          if (tipo === 'crear') {
                            _this3.toast.toastNotificacion('Publicación guardada en colecciones');
                          } else {
                            _this3.toast.toastNotificacion('Publicación eliminada de colecciones');
                          }
                        } else {
                          _this3.toast.toastError('No se pudo guardar, intentelo más tarde');
                        }
                      }, function (err) {
                        _this3.toast.toastError('No se pudo guardar, intentelo más tarde');
                      });
                    }

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "comentarios",
        value: function comentarios(publicacion, indice) {
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
                      component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'comentar',
                        publicacion: publicacion._id,
                        creador: publicacion.creador,
                        comentarios: publicacion.comentarios
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
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "megusta",
        value: function megusta(publicacion, tipo, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (tipo === 'megusta') {
                      this.publicaciones[i].megusta = true;
                      this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) + 1;
                    } else {
                      this.publicaciones[i].megusta = false;
                      this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) - 1;
                    }

                    _context6.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context6.sent;

                    if (info) {
                      this.IGTMApi.meGusta(info.token, {
                        tipo: tipo,
                        id: publicacion._id,
                        creador: publicacion.creador
                      }).subscribe(function (data) {
                        if (data.exe) {
                          if (info._id !== publicacion.creador._id) {
                            if (tipo === 'megusta') {
                              _this4.socket.emit('megusta', {
                                id: publicacion._id,
                                mensaje: "@".concat(info.nusuario, " le gusta tu publicaci\xF3n"),
                                creador: publicacion.creador._id
                              });
                            }
                          }
                        } else {
                          _this4.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                        }
                      }, function (err) {
                        _this4.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                      });
                    }

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "etiquetar",
        value: function etiquetar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'etiquetar'
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "etiquetas",
        value: function etiquetas(etiquetados) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalCtrl.create({
                      component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'etiquetados',
                        etiquetados: etiquetados
                      }
                    });

                  case 2:
                    modal = _context8.sent;
                    _context8.next = 5;
                    return modal.present();

                  case 5:
                    _context8.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context8.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;
                    }

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "ver",
        value: function ver(archivos, indice, info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (this.click) {
                      _context9.next = 11;
                      break;
                    }

                    this.click = true;
                    _context9.next = 4;
                    return this.modalCtrl.create({
                      component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'visualizador',
                        archivos: archivos,
                        indice: indice,
                        info: info
                      }
                    });

                  case 4:
                    modal = _context9.sent;
                    _context9.next = 7;
                    return modal.present();

                  case 7:
                    _context9.next = 9;
                    return modal.onWillDismiss();

                  case 9:
                    cerrado = _context9.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;
                    }

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "perfilNavegar",
        value: function perfilNavegar(usuario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var info;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context10.sent;

                    if (info) {
                      if (info.nusuario === usuario.nombreusuario) {
                        this.router.navigate(['/perfil/', 's']);
                      } else {
                        this.router.navigate(['/visita/', usuario.nombreusuario, 's']);
                      }
                    }

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return IgtmpublicPage;
    }();

    IgtmpublicPage.ɵfac = function IgtmpublicPage_Factory(t) {
      return new (t || IgtmpublicPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_2__["IGTMService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    IgtmpublicPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IgtmpublicPage,
      selectors: [["app-igtmpublic"]],
      viewQuery: function IgtmpublicPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contenido = _t.first);
        }
      },
      decls: 8,
      vars: 3,
      consts: [[1, "ion-no-border"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "central/iniciosan"], [3, "fullscreen"], ["contenido", ""], [4, "ngIf"], ["class", "skt", 4, "ngFor", "ngForOf"], [1, "skt"], ["lines", "none", 1, "sinfondo"], ["animated", "", "width", "100%", "height", "100%"], ["animated", "", "width", "100%", "height", "30px"], ["animated", "", "width", "100px", "height", "30px"], [2, "height", "200px"], ["animated", "", "width", "100%", "height", "200px"], [4, "ngFor", "ngForOf"], [1, "divider", "ligth"], ["class", "publicacion dibujar", 4, "ngIf"], [1, "publicacion", "dibujar"], ["slot", "start", 3, "click"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [3, "click"], ["slot", "end"], ["name", "ellipsis-vertical-outline", "slot", "icon-only"], [1, "lienzo"], ["class", "etiquetas", 3, "click", 4, "ngIf"], [1, "opciones"], ["lines", "none", "mode", "md", 1, "sinfondo"], ["name", "chatbubble-outline", "slot", "icon-only"], ["name", "arrow-redo-outline", "slot", "icon-only"], [3, "click", 4, "ngIf"], ["lines", "none", "class", "sinfondo opacity", 4, "ngIf"], [1, "comentarios"], [1, "gris", "espacio", 3, "click"], [1, "comentar", 3, "click"], [1, "opt"], [1, "etiquetas", 3, "click"], ["name", "bookmark-outline", "slot", "icon-only"], ["name", "bookmark", "color", "darkgold", "slot", "icon-only"], ["name", "heart-outline", "slot", "icon-only"], ["name", "heart", "color", "danger", "slot", "icon-only"], ["lines", "none", 1, "sinfondo", "opacity"], ["color", "dark", "mode", "ios", 3, "pager", 4, "ngIf"], ["color", "dark", "mode", "ios", 3, "pager"], ["class", "diapo", 3, "click", 4, "ngFor", "ngForOf"], [1, "diapo", 3, "click"], ["width", "100%", 3, "src", 4, "ngIf"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src", 4, "ngIf"], ["class", "btonDiapo", "fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 4, "ngIf"], ["width", "100%", 3, "src"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src"], ["fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 1, "btonDiapo"]],
      template: function IgtmpublicPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IgtmpublicPage_div_6_Template, 2, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IgtmpublicPage_div_7_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cargaTodo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargaTodo);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlide"]],
      styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.publicacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.lienzo[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.info[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.opciones[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.comentarios[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.espacio[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.diapo[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo[_ngcontent-%COMP%]   .btonDiapo[_ngcontent-%COMP%] {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n}\n\n.comentar[_ngcontent-%COMP%] {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n}\n\n.opt[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9pZ3RtcHVibGljL0M6XFxNaW1vdG8vc3JjXFxhcHBcXFBhZ2VzXFxNb2RhbGVzXFxpZ3RtcHVibGljXFxpZ3RtcHVibGljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9pZ3RtcHVibGljL2lndG1wdWJsaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvTW9kYWxlcy9pZ3RtcHVibGljL2lndG1wdWJsaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHVibGljYWNpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxpZW56byB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ub3BjaW9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ncmlzIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZXNwYWNpbyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGlhcG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRpYXBvIHZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kaWFwbyAuYnRvbkRpYXBvIHtcclxuICAgIG1hcmdpbjogYXV0byA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5ldGlxdWV0YXMgaDMge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY29tZW50YXIge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm9wdCB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufSIsImRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHVibGljYWNpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ubGllbnpvIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLmluZm8ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ub3BjaW9uZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbWVudGFyaW9zIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ncmlzIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5lc3BhY2lvIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRpYXBvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGlhcG8gdmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5kaWFwbyAuYnRvbkRpYXBvIHtcbiAgbWFyZ2luOiBhdXRvIDUlO1xuICB3aWR0aDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5ldGlxdWV0YXMgaDMge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmNvbWVudGFyIHtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5vcHQge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IgtmpublicPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-igtmpublic',
          templateUrl: './igtmpublic.page.html',
          styleUrls: ['./igtmpublic.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_2__["IGTMService"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
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
//# sourceMappingURL=Pages-Modales-igtmpublic-igtmpublic-module-es5.js.map