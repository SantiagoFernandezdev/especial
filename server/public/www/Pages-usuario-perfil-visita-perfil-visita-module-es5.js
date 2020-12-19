function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-usuario-perfil-visita-perfil-visita-module"], {
  /***/
  "./src/app/Pages/usuario/perfil-visita/perfil-visita.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Pages/usuario/perfil-visita/perfil-visita.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PerfilVisitaPageModule */

  /***/
  function srcAppPagesUsuarioPerfilVisitaPerfilVisitaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilVisitaPageModule", function () {
      return PerfilVisitaPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _perfil_visita_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-visita.page */
    "./src/app/Pages/usuario/perfil-visita/perfil-visita.page.ts");
    /* harmony import */


    var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Modales/modal/modal.page */
    "./src/app/Pages/Modales/modal/modal.page.ts");
    /* harmony import */


    var _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Modales/modal/modal.module */
    "./src/app/Pages/Modales/modal/modal.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _perfil_visita_page__WEBPACK_IMPORTED_MODULE_5__["PerfilVisitaPage"]
    }];

    var PerfilVisitaPageModule = function PerfilVisitaPageModule() {
      _classCallCheck(this, PerfilVisitaPageModule);
    };

    PerfilVisitaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PerfilVisitaPageModule
    });
    PerfilVisitaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PerfilVisitaPageModule_Factory(t) {
        return new (t || PerfilVisitaPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerfilVisitaPageModule, {
        declarations: [_perfil_visita_page__WEBPACK_IMPORTED_MODULE_5__["PerfilVisitaPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilVisitaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
          declarations: [_perfil_visita_page__WEBPACK_IMPORTED_MODULE_5__["PerfilVisitaPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/usuario/perfil-visita/perfil-visita.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Pages/usuario/perfil-visita/perfil-visita.page.ts ***!
    \*******************************************************************/

  /*! exports provided: PerfilVisitaPage */

  /***/
  function srcAppPagesUsuarioPerfilVisitaPerfilVisitaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilVisitaPage", function () {
      return PerfilVisitaPage;
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


    var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Utilidades/LoadingService.service */
    "./src/app/providers/Utilidades/LoadingService.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/Api/UsuariosLogin.service */
    "./src/app/providers/Api/UsuariosLogin.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/Api/Seguimiento.service */
    "./src/app/providers/Api/Seguimiento.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../providers/cargas/usuarios.service */
    "./src/app/providers/cargas/usuarios.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../providers/Api/Biografia.service */
    "./src/app/providers/Api/Biografia.service.ts");
    /* harmony import */


    var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../Modales/modal/modal.page */
    "./src/app/Pages/Modales/modal/modal.page.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../providers/Api/IGTM.service */
    "./src/app/providers/Api/IGTM.service.ts");
    /* harmony import */


    var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../Modales/igtmplantilla/igtmplantilla.page */
    "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../pipes/Fechas/horario.pipe */
    "./src/app/pipes/Fechas/horario.pipe.ts");

    var _c0 = ["miSlide"];
    var _c1 = ["miContenido"];

    function PerfilVisitaPage_ion_header_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Fuera de L\xEDnea");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_back_button_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-back-button", 27);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_avatar_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r1632 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-avatar", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_avatar_12_Template_ion_avatar_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1632);

          var ctx_r1631 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1631.modal("mediap");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1626 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1626.Image);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_avatar_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-avatar", 30);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_segment_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r1635 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-segment", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PerfilVisitaPage_ion_content_1_ion_segment_18_Template_ion_segment_ionChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1635);

          var ctx_r1634 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1634.segmentos($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-segment-button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sobre Mi");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-segment-button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Social");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-segment-button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Seguidores");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-segment-button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Seguidos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1628.segmento);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1628.personasTemp.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1628.seguidosTemp.length);
      }
    }

    function PerfilVisitaPage_ion_content_1_div_19_ion_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r1640 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_div_19_ion_button_9_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1640);

          var ctx_r1639 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1639.seguimiento();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1636 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1636.solicitudEnviada ? "danger" : "success");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1636.estado);
      }
    }

    function PerfilVisitaPage_ion_content_1_div_19_div_10_ion_spinner_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 53);
      }
    }

    function PerfilVisitaPage_ion_content_1_div_19_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilVisitaPage_ion_content_1_div_19_div_10_ion_spinner_3_Template, 1, 0, "ion-spinner", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enviando una solicitud");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1637 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1637.estadoSolicitud);
      }
    }

    function PerfilVisitaPage_ion_content_1_div_19_ion_col_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "T\xFA solicitud est\xE1 pendiente");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1638 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@solicitud", ctx_r1638.solicitudEnviada ? "pendiente" : "default");
      }
    }

    function PerfilVisitaPage_ion_content_1_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Esta cuenta es privada");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PerfilVisitaPage_ion_content_1_div_19_ion_button_9_Template, 2, 2, "ion-button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PerfilVisitaPage_ion_content_1_div_19_div_10_Template, 7, 1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PerfilVisitaPage_ion_content_1_div_19_ion_col_11_Template, 4, 1, "ion-col", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1629 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1629.cargarBoton);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1629.estadoSolicitud);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1629.solicitudEnviada);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_h3_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "A\xFAn no hay informaci\xF3n sobre tu negocio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Establecimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "horario");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "horario");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1644 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1644.contenido.direccion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1644.contenido.telefono);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1644.contenido.pagina);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1644.contenido.ciudad, ", ", ctx_r1644.contenido.pais, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Abierto desde las ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 9, ctx_r1644.contenido.desde), " hasta las ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 11, ctx_r1644.contenido.hasta), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" De ", ctx_r1644.contenido.de, " a ", ctx_r1644.contenido.a, "");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_5_div_3_ion_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1653 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1653, " ");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_5_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_ion_slides_21_div_5_div_3_ion_card_1_Template, 6, 1, "ion-card", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1651 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1651.servicios);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Servicios");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilVisitaPage_ion_content_1_ion_slides_21_div_5_div_3_Template, 2, 1, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1645 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1645.role === "TALLER_ROLE");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Veh\xEDculo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1646 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1646.contenido.tipo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1646.contenido.Nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1646.contenido.Marca);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("M\xF3delo ", ctx_r1646.contenido.Modelo, "");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-skeleton-text", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return [1, 1, 1, 1, 1];
    };

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_ion_slides_21_div_8_div_1_Template, 9, 0, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1670 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_div_13_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1670);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1668 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1668.etiquetas(publicacion_r1658.etiquetas);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1673 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_21_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1673);

          var ctx_r1672 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1672.$implicit;
          var o_r1659 = ctx_r1672.index;

          var ctx_r1671 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1671.guardado(publicacion_r1658, "crear", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r1676 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_22_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1676);

          var ctx_r1675 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1675.$implicit;
          var o_r1659 = ctx_r1675.index;

          var ctx_r1674 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1674.guardado(publicacion_r1658, "eliminar", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r1679 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1679);

          var ctx_r1678 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1678.$implicit;
          var o_r1659 = ctx_r1678.index;

          var ctx_r1677 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1677.megusta(publicacion_r1658, "megusta", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r1682 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_26_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1682);

          var ctx_r1681 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1681.$implicit;
          var o_r1659 = ctx_r1681.index;

          var ctx_r1680 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1680.megusta(publicacion_r1658, "nomegusta", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_item_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r1685 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_item_27_Template_ion_avatar_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1685);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1683 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1683.perfilNavegar(publicacion_r1658.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_item_27_Template_ion_label_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1685);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1686 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1686.perfilNavegar(publicacion_r1658.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Publicaci\xF3n original creada por ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1658.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", publicacion_r1658.creadororiginal.nombreusuario, "");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1691 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1689 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1689.perfilNavegar(publicacion_r1658.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template_ion_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1692 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1692.perfilNavegar(publicacion_r1658.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_div_13_Template, 3, 0, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template_ion_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var ctx_r1695 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1658 = ctx_r1695.$implicit;
          var o_r1659 = ctx_r1695.index;

          var ctx_r1694 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1694.comentarios(publicacion_r1658, o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template_ion_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1696 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1696.compartir(publicacion_r1658);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_21_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_22_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-buttons", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_25_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_button_26_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_ion_item_27_Template, 7, 2, "ion-item", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template_strong_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1698 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1698.perfilNavegar(publicacion_r1658.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template_div_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var ctx_r1701 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1658 = ctx_r1701.$implicit;
          var o_r1659 = ctx_r1701.index;

          var ctx_r1700 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1700.comentarios(publicacion_r1658, o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " A\xF1adir Comentario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1658.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1658.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1658.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", publicacion_r1658.dibujo.fondo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("color", publicacion_r1658.dibujo.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1658.dibujo.texto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1658.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1658.valormg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1658.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.cog);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1658.creador.nombreusuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1658.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1658.msg);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 128);
      }

      if (rf & 2) {
        var archivo_r1711 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1711.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 129);
      }

      if (rf & 2) {
        var archivo_r1711 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1711.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abrir V\xEDdeo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1720 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_Template_ion_slide_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1720);

          var i_r1712 = ctx.index;

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          var ctx_r1718 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1718.ver(publicacion_r1658.archivos, i_r1712, publicacion_r1658);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template, 1, 1, "img", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template, 1, 1, "video", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template, 2, 0, "ion-button", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var archivo_r1711 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1711.mime.includes("image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1711.mime.includes("video") || archivo_r1711.mime.includes("Video") || archivo_r1711.mime.includes("mp4") || archivo_r1711.mime.includes("MP4"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1711.mime.includes("video") || archivo_r1711.mime.includes("Video") || archivo_r1711.mime.includes("mp4") || archivo_r1711.mime.includes("MP4"));
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_ion_slide_1_Template, 4, 3, "ion-slide", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pager", publicacion_r1658.pager);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", publicacion_r1658.archivos);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r1724 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1724);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1722 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1722.etiquetas(publicacion_r1658.etiquetas);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r1727 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_20_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1727);

          var ctx_r1726 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1726.$implicit;
          var o_r1659 = ctx_r1726.index;

          var ctx_r1725 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1725.guardado(publicacion_r1658, "crear", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1730 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_21_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1730);

          var ctx_r1729 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1729.$implicit;
          var o_r1659 = ctx_r1729.index;

          var ctx_r1728 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1728.guardado(publicacion_r1658, "eliminar", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r1733 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_24_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1733);

          var ctx_r1732 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1732.$implicit;
          var o_r1659 = ctx_r1732.index;

          var ctx_r1731 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1731.megusta(publicacion_r1658, "megusta", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r1736 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1736);

          var ctx_r1735 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var publicacion_r1658 = ctx_r1735.$implicit;
          var o_r1659 = ctx_r1735.index;

          var ctx_r1734 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1734.megusta(publicacion_r1658, "nomegusta", o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_item_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r1739 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_item_26_Template_ion_avatar_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1739);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1737 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1737.perfilNavegar(publicacion_r1658.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_item_26_Template_ion_label_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1739);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1740 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1740.perfilNavegar(publicacion_r1658.creadororiginal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1658.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1658.creadororiginal.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1658.creadororiginal.nombreusuario, "");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1745 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1745);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1743 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1743.perfilNavegar(publicacion_r1658.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template_ion_label_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1745);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1746 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1746.perfilNavegar(publicacion_r1658.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_slides_11_Template, 2, 2, "ion-slides", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_div_12_Template, 3, 0, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-buttons", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template_ion_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1745);

          var ctx_r1749 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1658 = ctx_r1749.$implicit;
          var o_r1659 = ctx_r1749.index;

          var ctx_r1748 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1748.comentarios(publicacion_r1658, o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template_ion_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1745);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1750 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1750.compartir(publicacion_r1658);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_20_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_21_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-buttons", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_24_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_button_25_Template, 2, 0, "ion-button", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_ion_item_26_Template, 7, 3, "ion-item", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template_strong_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1745);

          var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1752 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1752.perfilNavegar(publicacion_r1658.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template_div_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1745);

          var ctx_r1755 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var publicacion_r1658 = ctx_r1755.$implicit;
          var o_r1659 = ctx_r1755.index;

          var ctx_r1754 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1754.comentarios(publicacion_r1658, o_r1659);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " A\xF1adir Comentario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r1661 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1658.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1658.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1658.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1661.cargadentro);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.etiquetas.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1658.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.guardado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1658.valormg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1658.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.megusta);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.cog);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1658.creador.nombreusuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1658.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1658.msg);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_2_Template, 38, 18, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_div_3_Template, 37, 14, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicacion_r1658 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.tipo === "dibujar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1658.tipo === "multimedia");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_div_1_Template, 4, 2, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1648 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1648.publicaciones);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_ion_item_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1760 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_ion_item_13_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1760);

          var persona_r1757 = ctx.$implicit;

          var ctx_r1759 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1759.perfilNavegar(persona_r1757.usuarioEmisor);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var persona_r1757 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", persona_r1757.imagen, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](persona_r1757.usuarioEmisor.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", persona_r1757.usuarioEmisor.nombreusuario, "");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_ion_list_16_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1765 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_ion_slides_21_ion_list_16_ion_item_1_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1765);

          var persona_r1762 = ctx.$implicit;

          var ctx_r1764 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1764.perfilNavegar(persona_r1762.usuarioReceptor);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var persona_r1762 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", persona_r1762.imagen, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](persona_r1762.usuarioReceptor.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", persona_r1762.usuarioReceptor.nombreusuario, "");
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_ion_list_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_ion_slides_21_ion_list_16_ion_item_1_Template, 9, 3, "ion-item", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1650 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@personas", ctx_r1650.personasSeguidas.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1650.personasSeguidas);
      }
    }

    function PerfilVisitaPage_ion_content_1_ion_slides_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r1767 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 55, 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function PerfilVisitaPage_ion_content_1_ion_slides_21_Template_ion_slides_ionSlideDidChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1767);

          var ctx_r1766 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1766.cambioDiapositiva($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-slide", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilVisitaPage_ion_content_1_ion_slides_21_h3_3_Template, 2, 0, "h3", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PerfilVisitaPage_ion_content_1_ion_slides_21_div_4_Template, 33, 13, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PerfilVisitaPage_ion_content_1_ion_slides_21_div_5_Template, 4, 1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PerfilVisitaPage_ion_content_1_ion_slides_21_div_6_Template, 23, 4, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-slide", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PerfilVisitaPage_ion_content_1_ion_slides_21_div_8_Template, 2, 2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PerfilVisitaPage_ion_content_1_ion_slides_21_div_9_Template, 2, 1, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-slide", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PerfilVisitaPage_ion_content_1_ion_slides_21_ion_item_13_Template, 9, 3, "ion-item", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-slide", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PerfilVisitaPage_ion_content_1_ion_slides_21_ion_list_16_Template, 2, 2, "ion-list", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1630 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1630.role === "TALLER_ROLE" && !ctx_r1630.contenido && ctx_r1630.servicios.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1630.contenido && ctx_r1630.role === "TALLER_ROLE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1630.servicios.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1630.contenido && ctx_r1630.role === "USER_ROLE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("over", ctx_r1630.over);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1630.cargaTodo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1630.cargaTodo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@personas", ctx_r1630.personas.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1630.personas);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1630.personasSeguidas.length > 0);
      }
    }

    function PerfilVisitaPage_ion_content_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1769 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function PerfilVisitaPage_ion_content_1_Template_ion_content_ionScroll_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1769);

          var ctx_r1768 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1768.scrollable($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-refresher", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function PerfilVisitaPage_ion_content_1_Template_ion_refresher_ionRefresh_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1769);

          var ctx_r1770 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1770.refrescando($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-refresher-content", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PerfilVisitaPage_ion_content_1_ion_back_button_9_Template, 1, 0, "ion-back-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_1_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1769);

          var ctx_r1771 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1771.modal("mediapor");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PerfilVisitaPage_ion_content_1_ion_avatar_12_Template, 2, 1, "ion-avatar", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PerfilVisitaPage_ion_content_1_ion_avatar_13_Template, 1, 0, "ion-avatar", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-title", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PerfilVisitaPage_ion_content_1_ion_segment_18_Template, 24, 3, "ion-segment", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PerfilVisitaPage_ion_content_1_div_19_Template, 12, 3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerfilVisitaPage_ion_content_1_ion_slides_21_Template, 17, 11, "ion-slides", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1622 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", ctx_r1622.scroll);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1622.atrasBoton);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/19927613410/", ctx_r1622.portada, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1622.Image !== "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1622.Image === "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1622.nombreUsuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1622.cargarInformacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1622.cargarInformacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1622.cargarInformacion);
      }
    }

    function PerfilVisitaPage_ion_content_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1773 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Ups! lo sentimos, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " no tienes acceso a internet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Te invitamos a que disfrutes de los m\xF3dulos offline que ofrecemos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilVisitaPage_ion_content_2_Template_ion_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1773);

          var ctx_r1772 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1772.abrirMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "M\xF3dulos Offline");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var PerfilVisitaPage =
    /*#__PURE__*/
    function () {
      function PerfilVisitaPage(activeRouter, loading, almacenamiento, usuarioApi, toast, router, seguimientoService, cargarElementos, menuCtrl, popoverCtrl, actionCtrl, biografia, modalCtrl, socket, statusbar, IGTMApi) {
        _classCallCheck(this, PerfilVisitaPage);

        this.activeRouter = activeRouter;
        this.loading = loading;
        this.almacenamiento = almacenamiento;
        this.usuarioApi = usuarioApi;
        this.toast = toast;
        this.router = router;
        this.seguimientoService = seguimientoService;
        this.cargarElementos = cargarElementos;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.actionCtrl = actionCtrl;
        this.biografia = biografia;
        this.modalCtrl = modalCtrl;
        this.socket = socket;
        this.statusbar = statusbar;
        this.IGTMApi = IGTMApi;
        this.dataUsuario = [];
        this.infoSegment = [];
        this.servicios = [];
        this.contenido = {};
        this.nombreUsuario = '';
        this.Image = '';
        this.role = '';
        this.red = 'wifi'; // Banderas

        this.solicitudEnviada = false;
        this.estado = 'Seguir Cuenta';
        this.estadoSolicitud = false;
        this.cargarBoton = false; // habilita el estado del botón

        this.segmento = 'info';
        this.ocultar = true; // clientes o personas que me siguen 

        this.personas = [];
        this.personasSeguidas = [];
        this.personasTemp = [];
        this.seguidosTemp = [];
        this.scroll = true;
        this.bajando = false;
        this.titulo = 'Perfíl de usuario';
        this.color = 'blanco';
        this.portada = ''; //

        this.publicaciones = [];
        this.click = false;
        this.cargadentro = false;
        this.over = false;
        this.atrasBoton = false;
        this.cargaTodo = false;
      }

      _createClass(PerfilVisitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.usuario = this.activeRouter.snapshot.paramMap.get('usuario');

          if (this.activeRouter.snapshot.paramMap.get('tipo')) {
            this.atrasBoton = true;
          }

          this.arrancar();
        }
      }, {
        key: "refrescando",
        value: function refrescando(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.arrancar();

                  case 2:
                    event.detail.complete();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "publicacion",
        value: function publicacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var info;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context3.sent;

                    if (info) {
                      this.IGTMApi.leerPublicacionUsuario(info.token, {
                        _id: this.IDreceptor
                      }).subscribe(function (data) {
                        // console.log(data)
                        if (data.exe) {
                          data.response.forEach(function (item, i) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee2() {
                              var _this2 = this;

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
                                        _this2.IGTMApi.leerFotos(info.token, {
                                          id: item._id
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

                                          _this2.cargadentro = true;
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
                                        _this2.IGTMApi.crearGuardado(info.token, {
                                          publicacion: item._id,
                                          tipo: 'leer'
                                        }).subscribe(function (res) {
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
                                        _this2.IGTMApi.meGusta(info.token, {
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
                                        _this2.IGTMApi.crearComentario(info.token, {
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
                                          _this2.cargadentro = true;
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
                          _this.publicaciones = data.response;
                        } else {}

                        _this.cargaTodo = true;
                      }, function (err) {});
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "compartir",
        value: function compartir(publicacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_16__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'compartir',
                        publicacionc: publicacion
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    _context4.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context4.sent;

                    if (!cerrado) {
                      _context4.next = 15;
                      break;
                    }

                    this.statusbar.show();
                    this.click = false;

                    if (!cerrado.data) {
                      _context4.next = 15;
                      break;
                    }

                    if (!cerrado.data.recargo) {
                      _context4.next = 15;
                      break;
                    }

                    _context4.next = 15;
                    return this.contenido.scrollToTop();

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "guardado",
        value: function guardado(publicacion, tipo, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (tipo === 'crear') {
                      this.publicaciones[i].guardado = true;
                    } else {
                      this.publicaciones[i].guardado = false;
                    }

                    _context5.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context5.sent;

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
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "perfilNavegar",
        value: function perfilNavegar(usuario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
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
                      if (info.nusuario === usuario.nombreusuario) {
                        this.router.navigate(['/perfil/', 's']);
                      } else {
                        this.router.navigate(['/visita/', usuario.nombreusuario, 's']);
                      }
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
        key: "comentarios",
        value: function comentarios(publicacion, indice) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_16__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'comentar',
                        publicacion: publicacion._id,
                        creador: publicacion.creador,
                        comentarios: publicacion.comentarios
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                    _context7.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context7.sent;

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
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "megusta",
        value: function megusta(publicacion, tipo, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (tipo === 'megusta') {
                      this.publicaciones[i].megusta = true;
                      this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) + 1;
                    } else {
                      this.publicaciones[i].megusta = false;
                      this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) - 1;
                    }

                    _context8.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context8.sent;

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
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "etiquetas",
        value: function etiquetas(etiquetados) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_16__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'etiquetados',
                        etiquetados: etiquetados
                      }
                    });

                  case 2:
                    modal = _context9.sent;
                    _context9.next = 5;
                    return modal.present();

                  case 5:
                    _context9.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context9.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;
                    }

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "ver",
        value: function ver(archivos, indice, info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.click) {
                      _context10.next = 11;
                      break;
                    }

                    this.click = true;
                    _context10.next = 4;
                    return this.modalCtrl.create({
                      component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_16__["IgtmplantillaPage"],
                      componentProps: {
                        tipo: 'visualizador',
                        archivos: archivos,
                        indice: indice,
                        info: info
                      }
                    });

                  case 4:
                    modal = _context10.sent;
                    _context10.next = 7;
                    return modal.present();

                  case 7:
                    _context10.next = 9;
                    return modal.onWillDismiss();

                  case 9:
                    cerrado = _context10.sent;

                    if (cerrado) {
                      this.statusbar.show();
                      this.click = false;
                    }

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "arrancar",
        value: function arrancar() {
          var _this5 = this;

          this.scroll = true; // this.loading.cargaProcesos(`Cargando los datos de ${this.usuario}`).then(() => {

          this.almacenamiento.obtenerToken().then(function (info) {
            _this5.cancelSuscribe = _this5.usuarioApi.buscarPerfilUsuario(_this5.usuario, info.token).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        this.dataUsuario = data.response;
                        this.dataUsuario.tokenIDEmisor = info.token; // console.log(this.dataUsuario, 'Info de todo');

                        if (this.dataUsuario.usuario[0].imagen.length > 0) {
                          this.Image = 'https://motocaliapp.com/' + this.dataUsuario.usuario[0].imagen[0].path;
                        } else {
                          this.Image = 'none';
                        }

                        this.portada = this.dataUsuario.usuario[0].portada.path;
                        this.nombreUsuario = this.dataUsuario.usuario[0].nombrecompleto;
                        this.IDreceptor = this.dataUsuario.usuario[0]._id;
                        this.role = this.dataUsuario.usuario[0].role; // this.loading.finalizarCargado();

                        _context11.next = 9;
                        return this.publicacion();

                      case 9:
                        _context11.next = 11;
                        return this.cargarListados(info.token);

                      case 11:
                        _context11.next = 13;
                        return this.cargarSolicitud(this.IDreceptor);

                      case 13:
                        _context11.next = 15;
                        return this.informacion();

                      case 15:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }, function (err) {
              // this.loading.finalizarCargado();
              _this5.toast.alertApplication(err, false);
            });
          }).catch(function (err) {
            //  this.loading.finalizarCargado();
            _this5.toast.alertApplication(err, false);
          }); // });
        }
      }, {
        key: "cargarListados",
        value: function cargarListados(token) {
          var _this6 = this;

          this.seguimientoService.solicitudesAceptadas(token, this.IDreceptor, '1').subscribe(function (data) {
            _this6.personasTemp = [];

            if (data.response.length > 0) {
              data.response.forEach(function (item) {
                item.imagen = item.usuarioEmisor.imagen[0].path;

                _this6.personasTemp.push(item);
              });

              _this6.solicitudes();

              console.log(data.response, 'Bien');
            }
          }, function (error) {
            _this6.toast.alertApplication('No se pudo traer los usuarios', false);
          });
          this.seguimientoService.solicitudesAceptadasSeguidos(token, this.IDreceptor, '1').subscribe(function (data) {
            _this6.seguidosTemp = [];

            if (data.response.length > 0) {
              console.log(data.response, 'Bien 2');
              data.response.forEach(function (item) {
                item.imagen = item.usuarioReceptor.imagen[0].path;

                _this6.seguidosTemp.push(item);
              });

              _this6.seguidos();
            }
          }, function (error) {
            _this6.toast.alertApplication('No se pudo traer los usuarios', false);
          });
        }
      }, {
        key: "cargarSolicitud",
        value: function cargarSolicitud(idReceptor) {
          var _this7 = this;

          // console.log(idReceptor);
          this.almacenamiento.obtenerToken().then(function (info) {
            _this7.seguimientoService.consultarSolicitud(info.token, idReceptor).subscribe(function (data) {
              // console.log(data);
              if (data.response.length > 0) {
                if (data.response[0].estado === 'pendiente') {
                  _this7.cargarBoton = true;
                  _this7.solicitudEnviada = true;
                  _this7.cargarInformacion = false;
                  _this7.estado = 'Cancelar Solicitud';
                } else if (data.response[0].estado === 'aceptado') {
                  _this7.cargarInformacion = true;
                }
              } else {
                _this7.cargarInformacion = false;
                _this7.cargarBoton = true;
              }
            }, function (err) {
              _this7.toast.alertApplication('No se pudo realizar la petición', false);
            });
          }).catch(function (err) {
            _this7.loading.finalizarCargado();

            _this7.toast.alertApplication(err, false);
          });
        }
      }, {
        key: "atras",
        value: function atras() {
          this.router.navigate(['/central/buscar']);
        }
      }, {
        key: "modal",
        value: function modal(type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var image, miModal, dataRetorno;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    console.log(this.Image);
                    image = '';

                    if (type === 'mediapor') {
                      image = "https://motocaliapp.com/19927613410/".concat(this.portada);
                    } else if (type === 'mediap') {
                      image = this.Image;
                    }

                    _context12.next = 5;
                    return this.modalCtrl.create({
                      component: _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_12__["ModalPage"],
                      componentProps: {
                        type: type,
                        imagen: image
                      }
                    });

                  case 5:
                    miModal = _context12.sent;
                    _context12.next = 8;
                    return miModal.present();

                  case 8:
                    if (!(type !== 'mediapor' && type !== 'mediap')) {
                      _context12.next = 13;
                      break;
                    }

                    _context12.next = 11;
                    return miModal.onWillDismiss();

                  case 11:
                    dataRetorno = _context12.sent;

                    if (dataRetorno) {
                      if (dataRetorno.data) {
                        this.contenido = dataRetorno.data.contenido;
                        this.servicios = dataRetorno.data.servicios;
                      }
                    }

                  case 13:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "seguimiento",
        value: function seguimiento() {
          var _this8 = this;

          if (!this.solicitudEnviada) {
            this.almacenamiento.obtenerToken().then(function (info) {
              _this8.estadoSolicitud = true;

              _this8.seguimientoService.enviarSolicitud({
                token: info.token,
                IDreceptor: _this8.IDreceptor
              }).subscribe(function (data) {
                _this8.estadoSolicitud = false;
                _this8.solicitudEnviada = true;
                _this8.estado = 'Cancelar Solicitud';
                console.log("Data del seguimiento ".concat(data));
              }, function (error) {
                console.log(error.message);
                _this8.estadoSolicitud = false;

                _this8.toast.alertApplication(error.message, false);
              });
            });
          } else {
            this.almacenamiento.obtenerToken().then(function (info) {
              _this8.seguimientoService.cancelarSolicitud(info.token, _this8.IDreceptor, '1').subscribe(function (data) {
                _this8.solicitudEnviada = false;
                _this8.estado = 'Seguir Cuenta';
              }, function (error) {
                _this8.toast.alertApplication(error.message, false);
              });
            }).catch(function (err) {
              _this8.loading.finalizarCargado();

              _this8.toast.alertApplication(err, false);
            });
          }
        }
      }, {
        key: "solicitudes",
        value: function solicitudes() {
          var _this9 = this;

          this.personas = [];
          this.personasTemp.forEach(function (item) {
            _this9.personas.push(item);
          });
          console.log(this.personas, 'personas');
        }
      }, {
        key: "informacion",
        value: function informacion() {
          var _this10 = this;

          this.almacenamiento.obtenerToken().then(function (info) {
            _this10.biografia.getBiografia(info.token, _this10.IDreceptor).subscribe(function (data) {
              // console.log(data.response, ' bien todo');
              if (data.response.length > 0) {
                _this10.infoSegment = data.response;
                _this10.contenido = data.response[0].contenido;
                _this10.servicios = data.response[0].servicios;
              } // console.log(`Estado ${this.estado}`);

            }, function (err) {
              // console.log('Error');
              _this10.infoSegment = [];
            });
          });
        }
      }, {
        key: "seguidos",
        value: function seguidos() {
          var _this11 = this;

          this.personasSeguidas = [];
          this.seguidosTemp.forEach(function (item) {
            _this11.personasSeguidas.push(item);
          });
        }
      }, {
        key: "visitar",
        value: function visitar(usuario) {
          this.router.navigate(['/central/buscar/perfil-visita/', usuario]);
        }
      }, {
        key: "segmentos",
        value: function segmentos(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.t0 = event.detail.value;
                    _context13.next = _context13.t0 === 'info' ? 3 : _context13.t0 === 'public' ? 6 : _context13.t0 === 'clientes' ? 9 : _context13.t0 === 'seguidos' ? 12 : 15;
                    break;

                  case 3:
                    _context13.next = 5;
                    return this.miSlide.slideTo(0, 300);

                  case 5:
                    return _context13.abrupt("break", 15);

                  case 6:
                    _context13.next = 8;
                    return this.miSlide.slideTo(1, 300);

                  case 8:
                    return _context13.abrupt("break", 15);

                  case 9:
                    _context13.next = 11;
                    return this.miSlide.slideTo(2, 300);

                  case 11:
                    return _context13.abrupt("break", 15);

                  case 12:
                    _context13.next = 14;
                    return this.miSlide.slideTo(3, 300);

                  case 14:
                    return _context13.abrupt("break", 15);

                  case 15:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "cambioDiapositiva",
        value: function cambioDiapositiva(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.miSlide.getActiveIndex().then(function (index) {
                      // console.log(index);
                      if (index === 0) {
                        _this12.segmento = 'info';
                      } else if (index === 1) {
                        _this12.segmento = 'public';
                      } else if (index === 2) {
                        _this12.segmento = 'clientes';
                      } else if (index === 3) {
                        _this12.segmento = 'seguidos';
                      }
                    });

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "swipeleft",
        value: function swipeleft(event) {
          // console.log('Evento ', event);
          this.toast.alertApplication('Evento deslizar', true);
        }
      }, {
        key: "abrirMenu",
        value: function abrirMenu() {
          this.menuCtrl.open('perfilMenu');
        }
      }, {
        key: "opciones",
        value: function opciones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this13 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.actionCtrl.create({
                      translucent: true,
                      header: "Que quieres hacer con ".concat(this.nombreUsuario),
                      buttons: [{
                        text: 'Compartir Perfíl',
                        icon: 'arrow-redo-outline',
                        handler: function handler() {}
                      }, {
                        text: 'Enviar mensaje',
                        icon: 'chatbubble-outline',
                        handler: function handler() {}
                      }, {
                        text: 'Invitar a grupo',
                        icon: 'people-outline',
                        handler: function handler() {}
                      }, {
                        text: 'Eliminar Usuario',
                        icon: 'trash-outline',
                        cssClass: 'eliminar',
                        handler: function handler() {
                          _this13.eliminar();
                        }
                      }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close-outline'
                      }]
                    });

                  case 2:
                    actionSheet = _context15.sent;
                    _context15.next = 5;
                    return actionSheet.present();

                  case 5:
                    return _context15.abrupt("return", _context15.sent);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "eliminar",
        value: function eliminar() {
          var _this14 = this;

          this.almacenamiento.obtenerToken().then(function (info) {
            _this14.seguimientoService.cancelarSolicitud(info.token, _this14.IDreceptor, '1').subscribe(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee16() {
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        this.cargarBoton = true;
                        this.cargarInformacion = false;
                        this.solicitudEnviada = false;

                      case 3:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            }, function () {});
          }).catch(function (e) {});
        }
      }, {
        key: "scrollable",
        value: function scrollable(event) {
          if (event.detail.scrollTop > 300) {
            // console.log('Holaaaaaaaaaaaaaaaa')
            this.over = true;
          } else {
            this.over = false;
          }
        } // Salimos del prfil y cancelamos los suscribe

      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // this.cancelSuscribe.unsuscribe();
          this.scroll = false;
        }
      }]);

      return PerfilVisitaPage;
    }();

    PerfilVisitaPage.ɵfac = function PerfilVisitaPage_Factory(t) {
      return new (t || PerfilVisitaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_7__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_11__["BiografiaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_15__["IGTMService"]));
    };

    PerfilVisitaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PerfilVisitaPage,
      selectors: [["app-perfil-visita"]],
      viewQuery: function PerfilVisitaPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.miSlide = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.miContenido = _t.first);
        }
      },
      decls: 3,
      vars: 3,
      consts: [["class", "ion-no-border", 4, "ngIf"], ["color", "blanco", 3, "scrollEvents", "ionScroll", 4, "ngIf"], ["color", "blanco", 4, "ngIf"], [1, "ion-no-border"], ["color", "light"], [1, "titulo"], ["slot", "end"], ["color", "danger", "name", "wifi-outline", "slot", "icon-only"], ["color", "blanco", 3, "scrollEvents", "ionScroll"], ["miContenido", ""], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [1, "main"], [1, "contenedor"], [1, "info"], ["mode", "ios", 1, "tarjeta"], [1, "portada"], ["mode", "md", "class", "boton", "color", "blanco", "icon", "chevron-back-outline", "defaultHref", "/central/iniciosan", 4, "ngIf"], [1, "img", 3, "click"], ["alt", "", 3, "src"], ["class", "avatar", 3, "click", 4, "ngIf"], ["class", "avatar", 4, "ngIf"], [1, "ion-text-center", "ion-text-wrap"], ["mode", "md", "scrollable", "true", "color", "success", 3, "value", "ionChange", 4, "ngIf"], ["class", "blanco mensajeCuenta", 4, "ngIf"], [1, "divider"], [3, "ionSlideDidChange", 4, "ngIf"], ["mode", "md", "color", "blanco", "icon", "chevron-back-outline", "defaultHref", "/central/iniciosan", 1, "boton"], [1, "avatar", 3, "click"], ["type", "media", "width", "200px", 3, "src"], [1, "avatar"], ["mode", "md", "scrollable", "true", "color", "success", 3, "value", "ionChange"], ["segment", ""], ["value", "info"], [1, "up"], [1, "ion-text-center"], ["value", "public"], ["value", "clientes"], ["value", "seguidos"], [1, "blanco", "mensajeCuenta"], ["fixed", ""], ["size", "10", "offset", "1"], [1, "ion-text-center", "opacity", "message"], ["size", "12"], [1, "anchofull", "centrado"], ["mode", "ios", "shape", "round", 3, "color", "click", 4, "ngIf"], ["class", "anchofull centrado ion-padding", 4, "ngIf"], ["size", "12", 4, "ngIf"], ["mode", "ios", "shape", "round", 3, "color", "click"], [1, "anchofull", "centrado", "ion-padding"], [1, "centrado"], ["name", "crescent", "color", "oscuro", 4, "ngIf"], [1, "opacity"], ["name", "crescent", "color", "oscuro"], [1, "anchofull", "ion-padding"], [3, "ionSlideDidChange"], ["miSlide", ""], [1, "diapositiva"], ["class", "tituloGrande per", 4, "ngIf"], ["class", "blanco", 4, "ngIf"], [4, "ngIf"], [1, "blanco"], ["color", "blanco", 3, "click", 4, "ngFor", "ngForOf"], ["class", "blanco ", 4, "ngIf"], [1, "tituloGrande", "per"], [1, "tituloGrande"], [1, "contenido"], ["mode", "ios"], ["lines", "none"], ["name", "home", "slot", "start", "color", "medium"], [1, "ion-text-wrap"], ["name", "call", "slot", "start", "color", "medium"], ["name", "desktop", "slot", "start", "color", "medium"], ["name", "location", "slot", "start", "color", "medium"], ["name", "alarm", "slot", "start", "color", "medium"], ["name", "today", "slot", "start", "color", "medium"], ["class", "servicio", 4, "ngIf"], [1, "servicio"], ["mode", "ios", 4, "ngFor", "ngForOf"], [1, "centrarHijo"], [1, "marca"], ["name", "build"], ["name", "aperture", "slot", "start", "color", "medium"], ["name", "information-circle", "slot", "start", "color", "medium"], ["name", "flag", "slot", "start", "color", "medium"], ["name", "ellipse", "slot", "start", "color", "medium"], ["class", "skt", 4, "ngFor", "ngForOf"], [1, "skt"], ["lines", "none", 1, "sinfondo"], ["slot", "start"], ["animated", "", "width", "100%", "height", "100%"], ["animated", "", "width", "100%", "height", "30px"], ["animated", "", "width", "100px", "height", "30px"], [2, "height", "200px"], ["animated", "", "width", "100%", "height", "200px"], [4, "ngFor", "ngForOf"], [1, "divider", "ligth"], ["class", "publicacion dibujar", 4, "ngIf"], [1, "publicacion", "dibujar"], ["slot", "start", 3, "click"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [3, "click"], ["name", "ellipsis-vertical-outline", "slot", "icon-only"], [1, "lienzo"], ["class", "etiquetas", 3, "click", 4, "ngIf"], [1, "opciones"], ["lines", "none", "mode", "md", 1, "sinfondo"], ["name", "chatbubble-outline", "slot", "icon-only"], ["name", "arrow-redo-outline", "slot", "icon-only"], [3, "click", 4, "ngIf"], ["lines", "none", "class", "sinfondo opacity", 4, "ngIf"], [1, "comentarios"], [1, "gris", "espacio", 3, "click"], [1, "comentar", 3, "click"], [1, "opt"], [1, "etiquetas", 3, "click"], ["name", "bookmark-outline", "slot", "icon-only"], ["name", "bookmark", "color", "darkgold", "slot", "icon-only"], ["name", "heart-outline", "slot", "icon-only"], ["name", "heart", "color", "danger", "slot", "icon-only"], ["lines", "none", 1, "sinfondo", "opacity"], ["color", "dark", "mode", "ios", 3, "pager", 4, "ngIf"], ["color", "dark", "mode", "ios", 3, "pager"], ["class", "diapo", 3, "click", 4, "ngFor", "ngForOf"], [1, "diapo", 3, "click"], ["width", "100%", 3, "src", 4, "ngIf"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src", 4, "ngIf"], ["class", "btonDiapo", "fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 4, "ngIf"], ["width", "100%", 3, "src"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src"], ["fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 1, "btonDiapo"], ["color", "blanco", 3, "click"], [3, "src"], [1, "small"], ["lines", "none", "color", "blanco", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", "color", "blanco", 3, "click"], ["color", "blanco"], [1, "main", "ion-padding"], [1, "ion-text-center", "opacity"], ["fill", "outline", "mode", "ios", "expand", "block", "shape", "round", "color", "success", 3, "click"]],
      template: function PerfilVisitaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PerfilVisitaPage_ion_header_0_Template, 7, 0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilVisitaPage_ion_content_1_Template, 22, 9, "ion-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerfilVisitaPage_ion_content_2_Template, 12, 0, "ion-content", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red !== "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSkeletonText"]],
      pipes: [_pipes_Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_18__["HorarioPipe"]],
      styles: [".contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.contenedor[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fullancho2[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n\n.over[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.diapositiva[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 800px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.tarjeta[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n}\n\n.segment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  font-size: 11px;\n}\n\n.tarjeta[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.portada[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f9f9f9;\n  height: 150px;\n  max-height: 150px;\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.boton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 0 10px 50px 0px;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.portada[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.portada[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgba(3, 3, 3, 0.3);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  color: #fff;\n}\n\n.portada[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin: 0px auto;\n  width: 100px !important;\n  height: 100px !important;\n  z-index: 11;\n}\n\n.avatar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.avatar-peque[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.avatar-peque[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.mensajeCuenta[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.break[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  text-align: justify;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.up[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.aviso[_ngcontent-%COMP%] {\n  --background: #FEE491;\n}\n\n.gris[_ngcontent-%COMP%] {\n  --background: #f9f9f9;\n}\n\n.aviso[_ngcontent-%COMP%]:hover {\n  --background: #FEE491 !important;\n}\n\n.veh[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(odd) {\n  --background: #f9f9f9;\n}\n\n.servicio[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.centrarHijo[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.marca[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #e9e9e9;\n  border-radius: 100%;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f3f3f3;\n  font-weight: 100;\n  text-align: center;\n  padding: 15px;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:nth-child(1n)   .marca[_ngcontent-%COMP%] {\n  background-color: #80CFE7;\n  color: #ffffff;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:nth-child(2n)   .marca[_ngcontent-%COMP%] {\n  background-color: #EE85AA;\n  color: #ffffff;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:nth-child(3n)   .marca[_ngcontent-%COMP%] {\n  background-color: #FFD559;\n  color: #ffffff;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n\n.per[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\n.publicaciones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.publicacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-top: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.lienzo[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.publicaciones[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.publicaciones[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.opciones[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.comentarios[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.espacio[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.diapo[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo[_ngcontent-%COMP%]   .btonDiapo[_ngcontent-%COMP%] {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n}\n\n.comentar[_ngcontent-%COMP%] {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  text-align: left;\n}\n\n.opt[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 600px) {\n  .contenido[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .contenido[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(90% - 10px);\n  }\n\n  .servicio[_ngcontent-%COMP%] {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(90% - 10px);\n    margin: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 1000px) and (min-width: 601px) {\n  .servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(50% - 10px);\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXN1YXJpby9wZXJmaWwtdmlzaXRhL0M6XFxNaW1vdG8vc3JjXFxhcHBcXFBhZ2VzXFx1c3VhcmlvXFxwZXJmaWwtdmlzaXRhXFxwZXJmaWwtdmlzaXRhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvdXN1YXJpby9wZXJmaWwtdmlzaXRhL3BlcmZpbC12aXNpdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7Ozs7RUFJSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFdBQUE7RUNDTjs7RURDRTtJQUNJLHVCQUFBO0VDRU47O0VEQUU7SUFDSSx3QkFBQTtZQUFBLHVCQUFBO0VDR047O0VEREU7SUFDSSx1QkFBQTtJQUNBLGlCQUFBO0VDSU47QUFDRjs7QUREQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxXQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3VzdWFyaW8vcGVyZmlsLXZpc2l0YS9wZXJmaWwtdmlzaXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVuZWRvciAuaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyxcclxuaW9uLXNsaWRlLFxyXG5pb24tbGlzdCxcclxuZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbGFuY2hvMiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3ZlciB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5kaWFwb3NpdGl2YSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zZWdtZW50IGRpdiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4udGFyamV0YSBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBvcnRhZGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDUwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ucG9ydGFkYSAuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9ydGFkYSAub3BjaW9uZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMywgMywgMC4zKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wb3J0YWRhIC5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmF2YXRhciBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmF2YXRhci1wZXF1ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyLXBlcXVlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW5zYWplQ3VlbnRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icmVhayB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi51cCB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hdmlzbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRUU0OTE7XHJcbn1cclxuXHJcbi5ncmlzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuLmF2aXNvOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVoIGlvbi1pdGVtOm50aC1jaGlsZChvZGQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuLnNlcnZpY2lvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jZW50cmFySGlqbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXJjYSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgxbikgLm1hcmNhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MENGRTc7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgybikgLm1hcmNhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRTg1QUE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgzbikgLm1hcmNhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ1NTk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wZXIge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHVibGljYWNpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbn1cclxuXHJcbi5saWVuem8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uZXMgLmluZm8ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uZXMgaW9uLWF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vcGNpb25lcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbWVudGFyaW9zIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ncmlzIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZXNwYWNpbyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGlhcG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRpYXBvIHZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kaWFwbyAuYnRvbkRpYXBvIHtcclxuICAgIG1hcmdpbjogYXV0byA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5ldGlxdWV0YXMgaDMge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY29tZW50YXIge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5vcHQge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udGVuaWRvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW5pZG8gaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2lvIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNpbyBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gMTBweCk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgLnNlcnZpY2lvIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxufSIsIi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3IgLmluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1zbGlkZXMsXG5pb24tc2xpZGUsXG5pb24tbGlzdCxcbmRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbGFuY2hvMiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5vdmVyIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZGlhcG9zaXRpdmEge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogODAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhcmpldGEge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zZWdtZW50IGRpdiB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnRhcmpldGEgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnBvcnRhZGEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmJvdG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggNTBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnBvcnRhZGEgLmltZyB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9ydGFkYSAub3BjaW9uZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDMsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucG9ydGFkYSAuaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5hdmF0YXIgaDMge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmF2YXRhci1wZXF1ZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyLXBlcXVlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWVuc2FqZUN1ZW50YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnJlYWsge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi53cmFwIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4udXAge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5hdmlzbyB7XG4gIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcbn1cblxuLmdyaXMge1xuICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG5cbi5hdmlzbzpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogI0ZFRTQ5MSAhaW1wb3J0YW50O1xufVxuXG4udmVoIGlvbi1pdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4uc2VydmljaW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNlbnRyYXJIaWpvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXJjYSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXR1bG9HcmFuZGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uc2VydmljaW8gaW9uLWNhcmQ6bnRoLWNoaWxkKDFuKSAubWFyY2Ege1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBDRkU3O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgybikgLm1hcmNhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFODVBQTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZXJ2aWNpbyBpb24tY2FyZDpudGgtY2hpbGQoM24pIC5tYXJjYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQ1NTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VydmljaW8gaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ucGVyIHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG9wYWNpdHk6IDAuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5wdWJsaWNhY2lvbmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wdWJsaWNhY2lvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XG59XG5cbi5saWVuem8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4ucHVibGljYWNpb25lcyAuaW5mbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5wdWJsaWNhY2lvbmVzIGlvbi1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm9wY2lvbmVzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21lbnRhcmlvcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZ3JpcyB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZXNwYWNpbyB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5kaWFwbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpYXBvIHZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlhcG8gLmJ0b25EaWFwbyB7XG4gIG1hcmdpbjogYXV0byA1JTtcbiAgd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZXRpcXVldGFzIGgzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5jb21lbnRhciB7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ub3B0IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGVuaWRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250ZW5pZG8gaW9uLWNhcmQge1xuICAgIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xuICB9XG5cbiAgLnNlcnZpY2lvIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5zZXJ2aWNpbyBpb24tY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoOTAlIC0gMTBweCk7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkgYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIC5zZXJ2aWNpbyBpb24tY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('solicitud', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('pendiente', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          background: '#FFCA28',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          background: '#fff',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => pendiente', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('1000ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => default', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('500ms')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('personas', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])(300, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'none'
        }))])], {
          optional: true
        })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PerfilVisitaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-perfil-visita',
          templateUrl: './perfil-visita.page.html',
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('solicitud', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('pendiente', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            background: '#FFCA28',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            background: '#fff',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => pendiente', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('1000ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => default', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('500ms')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('personas', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0,
            transform: 'scale(0)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])(300, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 1,
            transform: 'none'
          }))])], {
            optional: true
          })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0,
            transform: 'scale(0)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 1,
            transform: 'scale(1)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 1,
            transform: 'scale(1)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0,
            transform: 'scale(0)'
          }))])])],
          styleUrls: ['./perfil-visita.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]
        }, {
          type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_7__["ApiSeguimientoService"]
        }, {
          type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__["CargaElementosUsuariosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"]
        }, {
          type: _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_11__["BiografiaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["Socket"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"]
        }, {
          type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_15__["IGTMService"]
        }];
      }, {
        miSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['miSlide', {
            static: false
          }]
        }],
        miContenido: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['miContenido', {
            static: false
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=Pages-usuario-perfil-visita-perfil-visita-module-es5.js.map