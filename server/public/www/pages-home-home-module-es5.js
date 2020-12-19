function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomePageModule
    });
    HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomePageModule_Factory(t) {
        return new (t || HomePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, {
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
            path: '',
            component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
          }])],
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/Api/UsuariosLogin.service */
    "./src/app/providers/Api/UsuariosLogin.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/PushService/PushService.service */
    "./src/app/providers/PushService/PushService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../providers/Conexiones/Conexion.service */
    "./src/app/providers/Conexiones/Conexion.service.ts");
    /* harmony import */


    var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../providers/cargas/Entradas.service */
    "./src/app/providers/cargas/Entradas.service.ts");
    /* harmony import */


    var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../providers/Registro/registro.service */
    "./src/app/providers/Registro/registro.service.ts");
    /* harmony import */


    var _providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../providers/Api/Mapar.service */
    "./src/app/providers/Api/Mapar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomePage_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomePage_div_8_Template_ion_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.miCodigo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Si no tiene un c\xF3digo, por favor contactenos por medio de este correo: velascosantiago28@gmail.com ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_8_Template_ion_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.verificar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Verificar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_8_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.ir();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Volver");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.miCodigo);
      }
    }

    function HomePage_div_9_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("brojo", !ctx_r8.okUsuario)("bverde", ctx_r8.okUsuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.msgUsuario);
      }
    }

    function HomePage_div_9_ion_select_option_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pais_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pais_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pais_r14.nombre);
      }
    }

    function HomePage_div_9_ion_item_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-chip", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomePage_div_9_ion_item_34_ion_select_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ciudad_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ciudad_r16.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ciudad_r16.nombre);
      }
    }

    function HomePage_div_9_ion_item_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selecciona la ciudad");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-select", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HomePage_div_9_ion_item_34_Template_ion_select_ionChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r17.seleccionarCiudad($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePage_div_9_ion_item_34_ion_select_option_4_Template, 2, 2, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.ciudades);
      }
    }

    function HomePage_div_9_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("brojo", !ctx_r12.okClave)("bverde", ctx_r12.okClave);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.msgClave);
      }
    }

    function HomePage_div_9_ion_item_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-checkbox", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HomePage_div_9_ion_item_54_Template_ion_checkbox_ionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r20.agregarNegocios($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tipo_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", tipo_r19.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tipo_r19.nombre);
      }
    }

    function HomePage_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nombre Completo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomePage_div_9_Template_ion_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.ncompleto = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePage_div_9_div_8_Template, 2, 5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre usuario");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HomePage_div_9_Template_ion_input_ionChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.comprobarUsuario($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Escriba su correo electr\xF3nico (opcional)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomePage_div_9_Template_ion_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.correo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Escriba su tel\xE9fono celular (opcional)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomePage_div_9_Template_ion_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r26.tel = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-chip", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Selecciona el Pa\xEDs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-select", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HomePage_div_9_Template_ion_select_ionChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.listarCiudades($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HomePage_div_9_ion_select_option_32_Template, 2, 2, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HomePage_div_9_ion_item_33_Template, 3, 0, "ion-item", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, HomePage_div_9_ion_item_34_Template, 5, 1, "ion-item", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-chip", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, HomePage_div_9_div_39_Template, 2, 5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Escriba su contrase\xF1a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HomePage_div_9_Template_ion_input_ionChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r28.comprobarClave($event, 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-item", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Confirmar la contrase\xF1a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HomePage_div_9_Template_ion_input_ionChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r29.comprobarClave($event, 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Tipo de negocio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, HomePage_div_9_ion_item_54_Template, 4, 2, "ion-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_9_Template_ion_button_click_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r30.ir();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_9_Template_ion_button_click_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r31.guardar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Crear Cuenta");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.ncompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.usuarioValido);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.correo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.tel);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.paises);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.ciudad);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.ciudad);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.claveValida);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.negocios);
      }
    }

    var _c0 = function _c0() {
      return ["/registro"];
    };

    function HomePage_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_10_Template_ion_card_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r32.codigo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Negocio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Persona");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_10_Template_ion_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.retroceder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Navegar al inicio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HomePage_form_11_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Iniciando sesi\xF3n...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomePage_form_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomePage_form_11_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r36.iniciar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Iniciar Sesi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Recuperar mi ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_form_11_Template_b_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r38.ir();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cuenta");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_form_11_Template_ion_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r39.ir();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Crear una Cuenta");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HomePage_form_11_div_29_Template, 4, 0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.forma);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.sesion);
      }
    }

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(apiService, inicioService, toastService, router, navCtrl, OSService, menuCtrl, conexion, entradas, almacenamiento, registroService, apiMapas) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.apiService = apiService;
        this.inicioService = inicioService;
        this.toastService = toastService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.OSService = OSService;
        this.menuCtrl = menuCtrl;
        this.conexion = conexion;
        this.entradas = entradas;
        this.almacenamiento = almacenamiento;
        this.registroService = registroService;
        this.apiMapas = apiMapas;
        this.sesion = true;
        this.usuarioID = '';
        this.vista = 1;
        this.miCodigo = ''; // usuarios

        this.usuarioValido = false;
        this.msgUsuario = '';
        this.okUsuario = false;
        this.paises = [];
        this.ciudades = [];
        this.ciudad = false;
        this.load = false;
        this.pais = '';
        this.miciudad = '';
        this.claveValida = false;
        this.msgClave = '';
        this.clave = '';
        this.confirClave = '';
        this.correo = '';
        this.tel = 0;
        this.nusuario = '';
        this.ncompleto = '';
        this.okClave = false;
        this.negocios = [];
        this.escogidos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'usuario': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          'clave': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.OSService.$usuarioID.subscribe(function (numero) {
          _this.dispositivoID = numero;
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.OSService.$usuarioID.subscribe(function (usuarioID) {
            _this2.usuarioID = usuarioID;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.listarPaises();
          this.listarNegocios();
        }
      }, {
        key: "iniciar",
        value: function iniciar() {
          var _this3 = this;

          if (this.forma.value.usuario !== '' && this.forma.value.clave !== '') {
            this.sesion = false;
            this.apiService.iniciarPartida(this.forma.value, this.dispositivoID).subscribe(function (resp) {
              if (resp.exe) {
                _this3.sesion = true;

                _this3.inicioService.cambiarEstado(false);

                resp.usuarioID = _this3.usuarioID;

                _this3.inicioService.guardarUsuario(resp).then(function () {
                  _this3.conexion.cargaLista();

                  _this3.toastService.alertApplication('Bienvenido!!!', true).then(function () {
                    _this3.router.navigate(['/central/menu']);

                    _this3.entradas.crearEntrada();
                  });
                }, function (error) {
                  _this3.toastService.alertApplication(error.message, false);
                });
              } else {
                _this3.sesion = true;

                _this3.toastService.alertApplication('Credenciales Incorrectas', false);
              }
            }, function (error) {
              _this3.sesion = true;

              _this3.inicioService.cambiarEstado(true);

              _this3.toastService.alertApplication(error.message, false);
            });
          }
        }
      }, {
        key: "ir",
        value: function ir() {
          this.vista = 2;
        }
      }, {
        key: "retroceder",
        value: function retroceder() {
          this.vista = 1;
        }
      }, {
        key: "codigo",
        value: function codigo() {
          this.vista = 3;
        }
      }, {
        key: "verificar",
        value: function verificar() {
          var _this4 = this;

          if (this.miCodigo !== '') {
            this.apiService.CodigoComprobar({
              codigo: this.miCodigo
            }).subscribe(function (data) {
              if (data) {
                if (data.response.length === 0) {
                  _this4.toastService.toastError('Ingrese un código válido');
                } else {
                  _this4.vista = 4;

                  _this4.toastService.toastNotificacion('Complete toda la información');
                }
              } else {
                _this4.toastService.toastError('No se pudo comprobar el código, inténtelo más tarde');
              }
            }, function (err) {
              _this4.toastService.toastError('No se pudo comprobar el código, inténtelo más tarde');
            });
          } else {
            this.toastService.toastError('Ingrese un código válido');
          }
        }
      }, {
        key: "comprobarUsuario",
        value: function comprobarUsuario(event) {
          var _this5 = this;

          if (event.detail.value.length > 5) {
            this.usuarioValido = true;
            this.apiService.usuario(event.detail.value).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(data);

                        if (data.exe) {
                          this.okUsuario = false;
                          this.msgUsuario = 'El usuario ya se encuentra en uso';
                        } else {
                          this.okUsuario = true;
                          this.msgUsuario = 'El nombre de usuario esta disponible';
                          this.nusuario = event.detail.value;
                        }

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.toastService.toastError('No se pudo comprobar el usuario, inténtelo más tarde');

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          } else {
            this.usuarioValido = false;
          }
        }
      }, {
        key: "listarNegocios",
        value: function listarNegocios() {
          var _this6 = this;

          this.apiService.negocios().subscribe(function (data) {
            if (data.exe) {
              _this6.negocios = data.response;
            } else {
              _this6.negocios.push('Taller Mécanico');
            }
          }, function (err) {
            _this6.negocios.push('Taller Mécanico');
          });
        }
      }, {
        key: "listarPaises",
        value: function listarPaises() {
          var _this7 = this;

          this.apiService.listarPaises().subscribe(function (data) {
            if (data.exe) {
              _this7.paises = data.response;
            } else {
              _this7.paises.push('Colombia');
            }
          }, function (err) {
            _this7.paises.push('Colombia');
          });
        }
      }, {
        key: "listarCiudades",
        value: function listarCiudades(event) {
          var _this8 = this;

          console.log(event.detail);
          this.pais = event.detail.value.nombre;
          this.miciudad = '';
          this.apiService.listarCiudades(event.detail.value._id).subscribe(function (data) {
            if (data.exe) {
              _this8.ciudades = data.response;
              _this8.ciudad = true;
            } else {
              _this8.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
          }, function (err) {
            _this8.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
          });
        }
      }, {
        key: "seleccionarCiudad",
        value: function seleccionarCiudad(event) {
          this.miciudad = event.detail.value;
        }
      }, {
        key: "comprobarClave",
        value: function comprobarClave(event, tipo) {
          this.claveValida = true;

          if (event.detail.value.length >= 8) {
            if (tipo === 1) {
              this.clave = event.detail.value;
            } else {
              this.confirClave = event.detail.value;
            }

            if (this.clave === this.confirClave) {
              this.msgClave = 'Las claves coínciden correctamente';
              this.okClave = true;
            } else {
              this.msgClave = 'Las contraseñas no coínciden';
              this.okClave = false;
            }
          } else {
            this.okClave = false;
            this.msgClave = 'Debe tener como mínmo 8 caracteres';
          }
        }
      }, {
        key: "agregarNegocios",
        value: function agregarNegocios(event) {
          if (event.detail.checked) {
            if (!this.escogidos.find(function (item) {
              return item === event.detail.value;
            })) {
              this.escogidos.push(event.detail.value);
            }
          } else {
            this.escogidos = this.escogidos.filter(function (item) {
              return item !== event.detail.value;
            });
          }

          console.log(this.escogidos);
        }
      }, {
        key: "guardar",
        value: function guardar() {
          var _this9 = this;

          if (this.okUsuario && this.okClave && this.pais !== '' && this.miciudad !== '' && this.ncompleto !== '') {
            this.apiService.registrar({
              nombreCompleto: this.ncompleto,
              nombreUsuario: this.nusuario,
              clave: this.clave,
              correo: this.correo,
              tel: this.tel,
              role: 'TALLER_ROLE',
              pais: this.pais,
              ciudad: this.miciudad,
              tipoNegocio: this.escogidos,
              usuarioID: this.usuarioID
            }).subscribe(function (datos) {
              console.log(datos, 'data', {
                nombreCompleto: _this9.ncompleto,
                nombreUsuario: _this9.nusuario,
                clave: _this9.clave,
                correo: _this9.correo,
                tel: _this9.tel,
                role: 'TALLER_ROLE',
                pais: _this9.pais,
                ciudad: _this9.miciudad,
                tipoNegocio: _this9.escogidos,
                usuarioID: _this9.usuarioID
              });

              _this9.almacenamiento.guardarUsuario(datos).then(function () {
                _this9.toastService.toastExitoso('Usuario registrado corectamente');

                _this9.registroService.cambioEstado(true);

                _this9.almacenamiento.cambiarEstado(false);

                _this9.navCtrl.navigateRoot(['/central']);

                _this9.apiService.EditarCodigo({
                  codigo: _this9.miCodigo
                }).subscribe(function (data) {
                  console.log('Código cambiado');
                }); // tslint:disable-next-line:max-line-length


                _this9.apiMapas.crearSede(datos.token, {
                  ubicacion: {
                    lat: 0,
                    lng: 0
                  },
                  nombre: 'SEDE ' + _this9.ncompleto,
                  tipo: _this9.escogidos,
                  pais: _this9.pais,
                  ciudad: _this9.miciudad
                }).subscribe(function (data) {
                  if (!data) {
                    _this9.toastService.toastError('No se pudo crear la sede');
                  }
                }, function (err) {
                  _this9.toastService.toastError('No se pudo crear la sede');
                });
              });
            }, function (error) {
              _this9.toastService.toastError('No se pudo registrar el usuario, inténtelo más tarde');
            });
          } else {
            this.toastService.toastError('Existen campos sin diligenciar correctamente');
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ɵfac = function HomePage_Factory(t) {
      return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_7__["PushService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__["ConexionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_10__["EntradasServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_11__["RegistroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_12__["MapasService"]));
    };

    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomePage,
      selectors: [["app-home"]],
      decls: 12,
      vars: 5,
      consts: [[1, "ion-no-border", 3, "translucent"], ["color", "oscuro", 1, "ion-justify-content-center"], [1, "ion-text-center"], [1, "ion-padding"], ["class", "c", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "c"], ["lines", "none", "mode", "ios"], ["type", "text", "placeholder", "C\xF3digo de verificaci\xF3n", 1, "privado", 3, "ngModel", "ngModelChange"], [1, "texto"], [1, "flexbet"], ["mode", "ios", "expand", "block", "color", "success", "fill", "outline", "shape", "round", 3, "click"], ["mode", "ios", "expand", "block", "color", "light", "shape", "round", 3, "click"], ["lines", "none", "mode", "ios", 1, "noborder"], ["type", "text", "placeholder", "Ingrese nombre completo del negocio", 1, "privado", 3, "ngModel", "ngModelChange"], ["class", "mensaje", 3, "brojo", "bverde", 4, "ngIf"], ["type", "text", "placeholder", "Ingrese su nombre de usuario", 1, "privado", 3, "ionChange"], ["lines", "none", "mode", "md", 1, "noborder", "ion-margin-top"], [1, "ion-text-wrap"], ["lines", "none", "mode", "ios", 1, "campo", "ion-margin-top"], ["placeholder", "Correo Electr\xF3nico", "type", "email", 3, "ngModel", "ngModelChange"], ["placeholder", "N\xFAmero de Celular", "type", "tel", 3, "ngModel", "ngModelChange"], ["lines", "none", "mode", "md", 1, "noborder", "ion-margin-top", "sinfondo"], ["color", "danger"], ["lines", "none", "mode", "md", 1, "noborder"], ["okText", "Aceptar", "cancelText", "Cancelar", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", "class", "noborder sinfondo", "mode", "md", 4, "ngIf"], ["lines", "none", "class", " noborder", "mode", "md", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "noborder", "sinfondo"], ["type", "password", "placeholder", "Escriba su contrase\xF1a", 3, "ionChange"], ["lines", "none", "mode", "ios", 1, "noborder", "ion-margin-top"], ["type", "password", "placeholder", "Confirmar la contrase\xF1a", 3, "ionChange"], ["class", "noborder", "mode", "ios", 4, "ngFor", "ngForOf"], ["expand", "block", "color", "danger", "mode", "ios", "fill", "outline", "shape", "round", 3, "click"], ["expand", "block", "color", "light", "mode", "ios", "shape", "round", 3, "click"], [1, "mensaje"], [3, "value"], ["mode", "ios", 1, "noborder"], ["slot", "start", "color", "success", 3, "value", "ionChange"], ["mode", "ios", 3, "click"], ["src", "/assets/Negocio.png", "width", "100px"], ["mode", "ios", 3, "routerLink"], ["src", "/assets/Estadisticas.png", "width", "100px"], ["expand", "block", "color", "warning", "fill", "outline", "shape", "round", 3, "click"], [3, "formGroup", "ngSubmit"], ["size", "12"], ["mode", "ios", "lines", "none"], ["name", "person", "slot", "start", "color", "medium"], ["formControlName", "usuario", "type", "text", "placeholder", "Nombre de Usuario"], ["name", "key", "slot", "start", "color", "medium"], ["formControlName", "clave", "type", "password", "placeholder", "Contrase\xF1a"], ["mode", "ios", "expand", "block", "shape", "round", "color", "light", "type", "submit", 1, "margen"], ["size", "12", 1, "ion-text-center"], [1, "ion-no-margin", "medium"], [1, "opacity"], [2, "color", "var(--ion-color-success)", 3, "click"], ["size", "12", 1, "centrar"], ["color", "warning", "fill", "outline", "shape", "round", 3, "click"], ["class", "load", 4, "ngIf"], [1, "load"], ["color", "oscuro", "name", "crescent"]],
      template: function HomePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Aplicaci\xF3n para Veh\xEDculos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePage_div_8_Template, 14, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomePage_div_9_Template, 62, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomePage_div_10_Template, 16, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePage_form_11_Template, 30, 2, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === 1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"]],
      styles: [".contenedor[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 100px;\n  margin: 50px auto;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --padding-top: 20px;\n  --padding-end: 15px;\n  --padding-start: 15px;\n  --padding-bottom: 20px;\n}\n\n.load[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.load[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n}\n\nion-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 8px;\n}\n\n.noborder[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.margen[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n\n.centrar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flexbet[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  margin: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  text-align: center;\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n}\n\n.privado[_ngcontent-%COMP%] {\n  border: 0px !important;\n}\n\n.privado[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  background-color: antiquewhite;\n}\n\n.flexbet[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.texto[_ngcontent-%COMP%], .mensaje[_ngcontent-%COMP%] {\n  background-color: #FBF6D8;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.brojo[_ngcontent-%COMP%] {\n  background: #F3C5C1;\n  color: #93372F;\n}\n\n.bverde[_ngcontent-%COMP%] {\n  background: #C4E4C5;\n  color: #4EAF52;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTs7RUFFSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ubG9hZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvYWQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG9wYWNpdHk6IC43O1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm5vYm9yZGVyIHtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuLm1hcmdlbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLmNlbnRyYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4YmV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJpdmFkbyB7XG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnByaXZhZG8gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmZsZXhiZXQgaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnRleHRvLFxuLm1lbnNhamUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkY2RDg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnJvam8ge1xuICAgIGJhY2tncm91bmQ6ICNGM0M1QzE7XG4gICAgY29sb3I6ICM5MzM3MkY7XG59XG5cbi5idmVyZGUge1xuICAgIGJhY2tncm91bmQ6ICNDNEU0QzU7XG4gICAgY29sb3I6ICM0RUFGNTI7XG59IiwiLmNvbnRlbmVkb3Ige1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbmlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5sb2FkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5ub2JvcmRlciB7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4ubWFyZ2VuIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLmNlbnRyYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXhiZXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJpdmFkbyB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcml2YWRvIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmZsZXhiZXQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi50ZXh0byxcbi5tZW5zYWplIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRjZEODtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJyb2pvIHtcbiAgYmFja2dyb3VuZDogI0YzQzVDMTtcbiAgY29sb3I6ICM5MzM3MkY7XG59XG5cbi5idmVyZGUge1xuICBiYWNrZ3JvdW5kOiAjQzRFNEM1O1xuICBjb2xvcjogIzRFQUY1Mjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: 'home.page.html',
          styleUrls: ['home.page.scss']
        }]
      }], function () {
        return [{
          type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_7__["PushService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__["ConexionService"]
        }, {
          type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_10__["EntradasServices"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }, {
          type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_11__["RegistroService"]
        }, {
          type: _providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_12__["MapasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Api/UsuariosLogin.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/providers/Api/UsuariosLogin.service.ts ***!
    \********************************************************/

  /*! exports provided: UsuariosLoginService */

  /***/
  function srcAppProvidersApiUsuariosLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosLoginService", function () {
      return UsuariosLoginService;
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


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var UsuariosLoginService =
    /*#__PURE__*/
    function () {
      function UsuariosLoginService(http, transfer, almacenamiento, navCtrl) {
        _classCallCheck(this, UsuariosLoginService);

        this.http = http;
        this.transfer = transfer;
        this.almacenamiento = almacenamiento;
        this.navCtrl = navCtrl;
      }

      _createClass(UsuariosLoginService, [{
        key: "hanflerError",
        value: function hanflerError(error) {
          var _this10 = this;

          var intento = 0;
          return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (errorHttp) {
            intento++;
            console.log('Entramos a intentos');

            if (errorHttp instanceof ErrorEvent) {
              if (intento === 3) {
                throw new Error('Error de Red');
              }
            } else if (errorHttp instanceof ProgressEvent) {
              if (intento === 3) {
                throw new Error('Error de Red');
              }
            } else {
              if (errorHttp.status === 404) {
                throw new Error(' al realizar la solicictud ');
              } else if (errorHttp.status === 401) {
                _this10.almacenamiento.terminarPartida().then(function () {
                  _this10.navCtrl.navigateRoot('/home');
                });

                throw new Error('No tiene permisos para realizar la petición ');
              } else {
                console.log(errorHttp, 'Error de servidor');
                throw new Error(' No se pudo realizar la petición, intentalo más tarde ');
              }
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        }
      }, {
        key: "registrar",
        value: function registrar(data) {
          var _this11 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.exe) {
              res.response.exe = res.exe;
              res.response.token = res.token;
              return res.response;
            } else {
              return res;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this11.hanflerError(error);
          }));
        }
      }, {
        key: "usuario",
        value: function usuario(_usuario) {
          var _this12 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios/unico"), {
            buscar: _usuario
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this12.hanflerError(error);
          }));
        }
      }, {
        key: "iniciarPartida",
        value: function iniciarPartida(usuario, dispositivoID) {
          var _this13 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-dispositivoID': dispositivoID
            })
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/login"), usuario, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.exe) {
              res.response.exe = res.exe;
              res.response.token = res.token;
              return res.response;
            } else {
              return res.exe;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this13.hanflerError(error);
          }));
        }
      }, {
        key: "fotoPerfilUsuarioMoto",
        value: function fotoPerfilUsuarioMoto(imagen, token, tipo) {
          var options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
              'x-token': token
            },
            params: {
              tipo: tipo
            }
          }; // 4912685137238652

          var fileTransfer = this.transfer.create();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/upload"), options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log("No se pudo subir la imagen ");
            throw new Error("No se pudo subir la imagen ");
          }));
        }
      }, {
        key: "fotoPortada",
        value: function fotoPortada(imagen, token, old) {
          var options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
              'x-token': token
            },
            params: {
              old: old
            }
          }; // 4912685137238652

          var fileTransfer = this.transfer.create();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/upload/portada/"), options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log("No se pudo subir la imagen ");
            throw new Error("No se pudo subir la imagen ");
          }));
        }
      }, {
        key: "viewImagen",
        value: function viewImagen(token) {
          var _this14 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/ver"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this14.hanflerError(error);
          }));
        }
      }, {
        key: "buscarUsuario",
        value: function buscarUsuario(termino, token) {
          var _this15 = this;

          var headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios/").concat(termino), headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this15.hanflerError(error);
          }));
        }
      }, {
        key: "buscarPerfilUsuario",
        value: function buscarPerfilUsuario(usuario, token) {
          var _this16 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios/perfil/").concat(usuario), HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this16.hanflerError(error);
          }));
        }
      }, {
        key: "traerMisNotificaciones",
        value: function traerMisNotificaciones(token, desde) {
          var _this17 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token,
              'x-desde': desde.toString()
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/notificaciones/misnotificaciones/"), HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this17.hanflerError(error);
          }));
        }
      }, {
        key: "notiCantidad",
        value: function notiCantidad(token) {
          var _this18 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/notificaciones/numero/"), HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this18.hanflerError(error);
          }));
        }
      }, {
        key: "ActualizarNotificaciones",
        value: function ActualizarNotificaciones(token, id) {
          var _this19 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/notificaciones/misnotificaciones/cambiarestado/"), {
            id: id
          }, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this19.hanflerError(error);
          }));
        }
      }, {
        key: "listarPaises",
        value: function listarPaises() {
          var _this20 = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/paises")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this20.hanflerError(error);
          }));
        }
      }, {
        key: "listarCiudades",
        value: function listarCiudades(pais) {
          var _this21 = this;

          var headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-pais': pais
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/ciudad"), headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this21.hanflerError(error);
          }));
        }
      }, {
        key: "CodigoComprobar",
        value: function CodigoComprobar(data) {
          var _this22 = this;

          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/codigos"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this22.hanflerError(error);
          }));
        }
      }, {
        key: "EditarCodigo",
        value: function EditarCodigo(data) {
          var _this23 = this;

          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/codigos/cambiar"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this23.hanflerError(error);
          }));
        }
      }, {
        key: "negocios",
        value: function negocios() {
          var _this24 = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/tiponegocio")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this24.hanflerError(error);
          }));
        }
      }]);

      return UsuariosLoginService;
    }();

    UsuariosLoginService.ɵfac = function UsuariosLoginService_Factory(t) {
      return new (t || UsuariosLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]));
    };

    UsuariosLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsuariosLoginService,
      factory: UsuariosLoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"]
        }, {
          type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map