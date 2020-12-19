function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-EstadoCitas-chat-chat-module"], {
  /***/
  "./src/app/Pages/EstadoCitas/chat/chat-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/EstadoCitas/chat/chat-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ChatPageRoutingModule */

  /***/
  function srcAppPagesEstadoCitasChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
      return ChatPageRoutingModule;
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


    var _chat_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/Pages/EstadoCitas/chat/chat.page.ts");

    var routes = [{
      path: '',
      component: _chat_page__WEBPACK_IMPORTED_MODULE_2__["ChatPage"]
    }];

    var ChatPageRoutingModule = function ChatPageRoutingModule() {
      _classCallCheck(this, ChatPageRoutingModule);
    };

    ChatPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChatPageRoutingModule
    });
    ChatPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChatPageRoutingModule_Factory(t) {
        return new (t || ChatPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatPageRoutingModule, [{
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
  "./src/app/Pages/EstadoCitas/chat/chat.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/EstadoCitas/chat/chat.module.ts ***!
    \*******************************************************/

  /*! exports provided: ChatPageModule */

  /***/
  function srcAppPagesEstadoCitasChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
      return ChatPageModule;
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


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/Pages/EstadoCitas/chat/chat-routing.module.ts");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/Pages/EstadoCitas/chat/chat.page.ts");
    /* harmony import */


    var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Modales/modal-citas/modal-citas.page */
    "./src/app/Pages/Modales/modal-citas/modal-citas.page.ts");
    /* harmony import */


    var _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Modales/modal-citas/modal-citas.module */
    "./src/app/Pages/Modales/modal-citas/modal-citas.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _Components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../Components/components.module */
    "./src/app/Components/components.module.ts");
    /* harmony import */


    var _video_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./video.directive */
    "./src/app/Pages/EstadoCitas/chat/video.directive.ts");

    var ChatPageModule = function ChatPageModule() {
      _classCallCheck(this, ChatPageModule);
    };

    ChatPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChatPageModule
    });
    ChatPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChatPageModule_Factory(t) {
        return new (t || ChatPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatPageRoutingModule"], _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_7__["ModalCitasPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatPageModule, {
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"], _video_directive__WEBPACK_IMPORTED_MODULE_10__["VideoDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatPageRoutingModule"], _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_7__["ModalCitasPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_6__["ModalCitasPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatPageRoutingModule"], _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_7__["ModalCitasPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]],
          declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"], _video_directive__WEBPACK_IMPORTED_MODULE_10__["VideoDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/EstadoCitas/chat/chat.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Pages/EstadoCitas/chat/chat.page.ts ***!
    \*****************************************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppPagesEstadoCitasChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
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


    var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Api/EstadoCitas.service */
    "./src/app/providers/Api/EstadoCitas.service.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/cargas/usuarios.service */
    "./src/app/providers/cargas/usuarios.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../Modales/modal-citas/modal-citas.page */
    "./src/app/Pages/Modales/modal-citas/modal-citas.page.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../providers/Utilidades/LoadingService.service */
    "./src/app/providers/Utilidades/LoadingService.service.ts");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../providers/Conexiones/Conexion.service */
    "./src/app/providers/Conexiones/Conexion.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _video_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./video.directive */
    "./src/app/Pages/EstadoCitas/chat/video.directive.ts");

    var _c0 = ["contenido"];
    var _c1 = ["infinito"];

    function ChatPage_ion_avatar_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1339.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_div_7_h5_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Conectado");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChatPage_div_7_h5_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Desconectado");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChatPage_div_7_h5_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Escribiendo...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChatPage_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatPage_div_7_h5_3_Template, 3, 0, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatPage_div_7_h5_4_Template, 3, 0, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatPage_div_7_h5_5_Template, 2, 0, "h5", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1340.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1340.escribiendo === false && ctx_r1340.conexion === "conexion");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1340.escribiendo === false && ctx_r1340.conexion === "desconexion");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1340.escribiendo);
      }
    }

    function ChatPage_ion_row_14_ion_col_1_div_2_div_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1359 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_ion_row_14_ion_col_1_div_2_div_1_img_1_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1359);

          var file_r1353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1357 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1357.seleccionarMedia(file_r1353.nameBD, "imagen");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/Citas/", file_r1353.nameBD, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " El v\xEDdeo estar\xE1 disponible en un momento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_3_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1364);

          var file_r1353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1362 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1362.seleccionarMedia(file_r1353.nameBD, "video");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "video", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/Citas/", file_r1353.nameBD, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_3_div_1_Template, 4, 1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !file_r1353.type.includes("image"));
      }
    }

    function ChatPage_ion_row_14_ion_col_1_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_1_div_2_div_1_img_1_Template, 1, 1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_2_Template, 3, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatPage_ion_row_14_ion_col_1_div_2_div_1_div_3_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1353 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1353.type.includes("image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1353.nameBD === "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1353.nameBD !== "none");
      }
    }

    function ChatPage_ion_row_14_ion_col_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_1_div_2_div_1_Template, 4, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conver_r1348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", conver_r1348.archivos);
      }
    }

    function ChatPage_ion_row_14_ion_col_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatPage_ion_row_14_ion_col_1_div_2_Template, 2, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conver_r1348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", conver_r1348.archivos.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", conver_r1348.mensaje, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](conver_r1348.fechaMensaje);
      }
    }

    function ChatPage_ion_row_14_ion_col_2_ion_avatar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1369.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_ion_row_14_ion_col_2_div_4_div_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1378 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_ion_row_14_ion_col_2_div_4_div_1_img_1_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1378);

          var file_r1372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r1376 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1376.seleccionarMedia(file_r1372.nameBD, "imagen");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/Citas/", file_r1372.nameBD, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " El v\xEDdeo estar\xE1 disponible en un momento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_3_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1383);

          var file_r1372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r1381 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1381.seleccionarMedia(file_r1372.nameBD, "video");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "video", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/Citas/", file_r1372.nameBD, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_3_div_1_Template, 4, 1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !file_r1372.type.includes("image"));
      }
    }

    function ChatPage_ion_row_14_ion_col_2_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_2_div_4_div_1_img_1_Template, 1, 1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_2_Template, 3, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatPage_ion_row_14_ion_col_2_div_4_div_1_div_3_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1372 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1372.type.includes("image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1372.nameBD === "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1372.nameBD !== "none");
      }
    }

    function ChatPage_ion_row_14_ion_col_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_2_div_4_div_1_Template, 4, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conver_r1348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", conver_r1348.archivos);
      }
    }

    function ChatPage_ion_row_14_ion_col_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatPage_ion_row_14_ion_col_2_ion_avatar_2_Template, 2, 1, "ion-avatar", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatPage_ion_row_14_ion_col_2_div_4_Template, 2, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conver_r1348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r1350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1350.imagen !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", conver_r1348.archivos.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", conver_r1348.mensaje, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](conver_r1348.fechaMensaje);
      }
    }

    function ChatPage_ion_row_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_ion_row_14_ion_col_1_Template, 8, 3, "ion-col", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatPage_ion_row_14_ion_col_2_Template, 10, 4, "ion-col", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conver_r1348 = ctx.$implicit;

        var ctx_r1343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1343.local === conver_r1348.emisor);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1343.local !== conver_r1348.emisor);
      }
    }

    function ChatPage_div_16_div_4_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 61);
      }

      if (rf & 2) {
        var image_r1389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r1389, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_div_16_div_4_video_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 62);
      }

      if (rf & 2) {
        var image_r1389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r1389, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatPage_div_16_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r1396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatPage_div_16_div_4_img_1_Template, 1, 1, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatPage_div_16_div_4_video_2_Template, 1, 1, "video", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_div_16_div_4_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1396);

          var i_r1390 = ctx.index;

          var ctx_r1395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1395.eliminardelCarrete(i_r1390);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-chip", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r1389 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", image_r1389.includes("jpg"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", image_r1389.includes("mp4"));
      }
    }

    function ChatPage_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fotos para subir");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatPage_div_16_div_4_Template, 6, 2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@entrada", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1344.carrete);
      }
    }

    var ChatPage =
    /*#__PURE__*/
    function () {
      function ChatPage(activeRoute, apiEstadoCitas, sockect, almacenamiento, cargarElementos, modalCtrl, geo, camera, actionSheet, myLoading, media, toast, conexiones, menu, animationCtrl) {
        var _this = this;

        _classCallCheck(this, ChatPage);

        this.activeRoute = activeRoute;
        this.apiEstadoCitas = apiEstadoCitas;
        this.sockect = sockect;
        this.almacenamiento = almacenamiento;
        this.cargarElementos = cargarElementos;
        this.modalCtrl = modalCtrl;
        this.geo = geo;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.myLoading = myLoading;
        this.media = media;
        this.toast = toast;
        this.conexiones = conexiones;
        this.menu = menu;
        this.animationCtrl = animationCtrl;
        this.color = '';
        this.idCita = '';
        this.data = [];
        this.imagen = '';
        this.taller = '';
        this.conversacionTemporal = [];
        this.conversacion = [];
        this.mensaje = '';
        this.usuario = '';
        this.local = '';
        this.nombre = '';
        this.red = 'wifi';
        this.tallerId = '';
        this.usuarioID = '';
        this.idActual = '';
        this.dataInfoCita = {};
        this.escribiendo = false;
        this.carrete = [];
        this.carreteArriba = []; // Archivos

        this.directorios = [];
        this.urlInfo = {
          url: '',
          tipo: 'video'
        }; // Mensajes Optimizacion

        this.paginacion = 0;
        this.cargar = false;
        this.conexion = '';
        this.cargoprimero = false;
        this.video = false;
        this.cargarElementos.$cargarRed.subscribe(function (red) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.red = red;

                    if (this.red !== 'none') {
                      // console.log('Me ejecuto siii')
                      this.almacenamiento.obtenerToken().then(function (info) {
                        _this2.sockect.emit('conectar', info);

                        _this2.volver(info);
                      });
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
        this.recibirMensaje().subscribe(function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var audio;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // console.log('2');
                    // tslint:disable-next-line:max-line-length
                    this.conversacion.push({
                      id: data._id,
                      taller: this.taller,
                      usuario: this.usuario,
                      emisor: data.emisor,
                      mensaje: data.mensaje,
                      fechaMensaje: data.fechaMensaje,
                      archivos: data.archivos
                    }); // // console.log('se jecuta el suscribe');

                    audio = new Audio('/assets/Notificacion.mp3');
                    audio.play();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        });
        this.escribirOnCita().subscribe(function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // console.log('3');
                    this.escribiendo = data.exe;

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        });
        this.conexiones.$conexiones.subscribe(function (data) {
          // console.log('Data de la conexión ', data, this.idActual)
          if (data.usuario === _this.idActual) {
            _this.conexion = data.estado;
          }
        });
        this.actualizarVideo().subscribe(function (data) {
          // console.log('Data de la conexión ', data, this.idActual)
          _this.conversacion = _this.conversacion.map(function (item) {
            if (item.id) {
              if (item.id === data._id) {
                item.archivos = item.archivos.map(function (file) {
                  if (file.nameBD === 'none') {
                    file.nameBD = data.nameSecret;
                  }

                  return file;
                });
              }
            }

            return item;
          });
          console.log(_this.conversacion, 'Ultimo');
        });
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(false, 'perfilMenu');
          this.arrancar();
        }
      }, {
        key: "volver",
        value: function volver(info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var cita;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.almacenamiento.obtenerCita();

                  case 2:
                    cita = _context6.sent;

                    if (cita) {
                      // console.log(info, 'Todo bien por aca');
                      this.idCita = cita;
                      this.apiEstadoCitas.obtenerCita(info.token, this.idCita).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee5() {
                          var _this4 = this;

                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  // console.log(data, ' data');
                                  this.data = data.response;

                                  if (data.response.length > 0) {
                                    if (info.nusuario === data.response[0].idtaller.nombreusuario) {
                                      this.imagen = "https://motocaliapp.com/".concat(data.response[0].usuariopedido.imagen[0].path);
                                      this.nombre = data.response[0].usuariopedido.nombrecompleto;
                                      this.sockect.emit('entrarChatCita', {
                                        _id: this.idCita,
                                        usuario: data.response[0].usuariopedido._id,
                                        usuariohost: data.response[0].idtaller._id
                                      });
                                      this.idActual = data.response[0].usuariopedido._id;
                                    } else if (info.nusuario === data.response[0].usuariopedido.nombreusuario) {
                                      this.imagen = "https://motocaliapp.com/".concat(data.response[0].idtaller.imagen[0].path);
                                      this.nombre = data.response[0].idtaller.nombrecompleto;
                                      this.sockect.emit('entrarChatCita', {
                                        _id: this.idCita,
                                        usuario: data.response[0].idtaller._id,
                                        usuariohost: data.response[0].usuariopedido._id
                                      });
                                      this.idActual = data.response[0].idtaller._id;
                                    } // this.estado(data.response[0].estado);


                                    this.taller = data.response[0].idtaller.nombreusuario;
                                    this.usuario = data.response[0].usuariopedido.nombreusuario;
                                    this.tallerId = data.response[0].idtaller._id;
                                    this.usuarioID = data.response[0].usuariopedido._id;
                                    this.dataInfoCita.fechaInicio = data.response[0].fechainicio;
                                    this.dataInfoCita.fechaprogreso = data.response[0].fechaprogreso;
                                    this.dataInfoCita.fechacumplido = data.response[0].fechacumplido;
                                    this.dataInfoCita.role = info.role;
                                    this.dataInfoCita.precio = data.response[0].precio;
                                    this.dataInfoCita.trabajos = data.response[0].listaTrabajos; // console.log(this.conversacion.length, ' conversaciones');

                                    if (this.conversacion.length > 0) {
                                      // tslint:disable-next-line:max-line-length
                                      this.apiEstadoCitas.obtenerConversacionesPendientes(info.token, this.idCita, this.conversacion[this.conversacion.length - 1].fechaMensaje).subscribe(function (mensajes) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0,
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(function _callee4() {
                                          var _this5 = this;

                                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                              switch (_context4.prev = _context4.next) {
                                                case 0:
                                                  if (mensajes.exe) {
                                                    mensajes.response.forEach(function (item) {
                                                      _this5.conversacion.push(item);
                                                    });
                                                  } // console.log(mensajes, this.conversacion, 'Recargar nuevos msg');


                                                case 1:
                                                case "end":
                                                  return _context4.stop();
                                              }
                                            }
                                          }, _callee4);
                                        }));
                                      });
                                    }
                                  }

                                case 2:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
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
        key: "arrancar",
        value: function arrancar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this6 = this;

            var cita;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.almacenamiento.obtenerCita();

                  case 2:
                    cita = _context9.sent;

                    if (cita) {
                      this.cargoprimero = true;
                      this.idCita = cita; // console.log(cita, ' ionviewWillEnter');

                      this.almacenamiento.obtenerToken().then(function (info) {
                        _this6.local = info.nusuario;

                        _this6.apiEstadoCitas.obtenerCita(info.token, _this6.idCita).subscribe(function (data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee8() {
                            var _this7 = this;

                            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                              while (1) {
                                switch (_context8.prev = _context8.next) {
                                  case 0:
                                    this.data = data.response;

                                    if (data.response.length > 0) {
                                      if (info.nusuario === data.response[0].idtaller.nombreusuario) {
                                        this.imagen = "https://motocaliapp.com/".concat(data.response[0].usuariopedido.imagen[0].path);
                                        this.nombre = data.response[0].usuariopedido.nombrecompleto;
                                        this.idActual = data.response[0].usuariopedido._id;
                                        this.sockect.emit('entrarChatCita', {
                                          _id: this.idCita,
                                          usuario: data.response[0].usuariopedido._id,
                                          usuariohost: data.response[0].idtaller._id
                                        });
                                      } else if (info.nusuario === data.response[0].usuariopedido.nombreusuario) {
                                        this.imagen = "https://motocaliapp.com/".concat(data.response[0].idtaller.imagen[0].path);
                                        this.nombre = data.response[0].idtaller.nombrecompleto;
                                        this.idActual = data.response[0].idtaller._id;
                                        this.sockect.emit('entrarChatCita', {
                                          _id: this.idCita,
                                          usuario: data.response[0].idtaller._id,
                                          usuariohost: data.response[0].usuariopedido._id
                                        });
                                      } // this.estado(data.response[0].estado);


                                      this.taller = data.response[0].idtaller.nombreusuario;
                                      this.usuario = data.response[0].usuariopedido.nombreusuario;
                                      this.tallerId = data.response[0].idtaller._id;
                                      this.usuarioID = data.response[0].usuariopedido._id; // Información de la cita

                                      this.dataInfoCita.estado = data.response[0].estado;
                                      this.dataInfoCita.fechaInicio = data.response[0].fechainicio;
                                      this.dataInfoCita.fechaprogreso = data.response[0].fechaprogreso;
                                      this.dataInfoCita.fechacumplido = data.response[0].fechacumplido;
                                      this.dataInfoCita.role = info.role;
                                      this.dataInfoCita.precio = data.response[0].precio;
                                      this.dataInfoCita.trabajos = data.response[0].listaTrabajos;
                                      this.apiEstadoCitas.obtenerConversaciones(info.token, this.idCita, this.paginacion.toString()).subscribe(function (mensajes) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0,
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(function _callee7() {
                                          var _this8 = this;

                                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                            while (1) {
                                              switch (_context7.prev = _context7.next) {
                                                case 0:
                                                  if (mensajes.exe) {
                                                    mensajes.response.forEach(function (item) {
                                                      _this8.conversacion.unshift(item);
                                                    });
                                                    setTimeout(function () {
                                                      _this8.scrollbajar();
                                                    }, 1000);
                                                  } // console.log(mensajes, 'Me guta');


                                                case 1:
                                                case "end":
                                                  return _context7.stop();
                                              }
                                            }
                                          }, _callee7);
                                        }));
                                      }); // Scrolling
                                    }

                                  case 2:
                                  case "end":
                                    return _context8.stop();
                                }
                              }
                            }, _callee8, this);
                          }));
                        });
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
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this9 = this;

          if (this.cargar) {
            this.paginacion = this.paginacion + 10; // console.log(event, 'Cargando data', this.paginacion);

            this.almacenamiento.obtenerToken().then(function (info) {
              _this9.apiEstadoCitas.obtenerConversaciones(info.token, _this9.idCita, _this9.paginacion.toString()).subscribe(function (mensajes) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee10() {
                  var _this10 = this;

                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          if (mensajes.exe) {
                            mensajes.response.forEach(function (item) {
                              _this10.conversacion.unshift(item);
                            });
                          } // console.log(mensajes, 'Me guta');


                          event.target.complete();

                          if (mensajes.response.length === 0) {
                            this.infinito.disabled = true;
                          }

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10, this);
                }));
              });
            }).catch(function () {
              _this9.toast.alertApplication('No se pudo traer mas mensajes', false);

              event.target.complete();
            });
          }
        } // valid( file ) {
        //   return this.file.checkFile(this.file.dataDirectory + 'MimotoMedia/', file).then(() => {
        //     return true;
        //   }).catch(() => {
        //     return false;
        //   })
        // }
        // descargar( file ) {
        //   // console.log('Bine');
        //   this.myLoading.cargaProcesos('Descargando');
        //   this.apiEstadoCitas.descargarArchivosChat(file).subscribe((descarga) => {
        //     // console.log(descarga, ' Descargando');
        //     this.myLoading.finalizarCargado();
        //     this.file.listDir(this.file.dataDirectory, 'MimotoMedia').then((des) => {
        //       // console.log(des);
        //     }).catch((error) => {
        //       // console.log(error, ' Error al descargar')
        //     })
        //   }, (err) => {
        //     this.myLoading.finalizarCargado();
        //     // console.log('Error al descargar', err)
        //   });
        // }

      }, {
        key: "scrollbajar",
        value: function scrollbajar() {
          var _this11 = this;

          this.contenido.scrollToBottom(0).then(function () {
            // console.log('Vientos');
            _this11.cargar = true;
          });
        } // estado(status) {
        //   switch (status) {
        //     case 'PENDIENTE':
        //       this.color = 'warning';
        //       break;
        //     case 'EN PROGRESO':
        //       this.color = 'secondary';
        //       break;
        //     case 'TERMINADO':
        //       this.color = 'success';
        //       break;
        //   }
        //   this.dataInfoCita.estado = status;
        // }

      }, {
        key: "actualizarVideo",
        value: function actualizarVideo() {
          var _this12 = this;

          var myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this12.sockect.on('subirVideo', function (data) {
              observer.next(data);
              console.log(data, 'actualizado');
            });
          });
          return myobserver;
        }
      }, {
        key: "enviarMensaje",
        value: function enviarMensaje() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this13 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (!(this.carreteArriba.length > 0)) {
                      _context11.next = 8;
                      break;
                    }

                    _context11.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context11.sent;
                    this.myLoading.cargaProcesos('Subiendo mensaje con archivos media, por favor espere');

                    if (info) {
                      // console.log(info);
                      this.apiEstadoCitas.ingresarChat(info.token, {
                        _id: this.idCita,
                        mensaje: this.mensaje,
                        emisor: this.local,
                        taller: this.tallerId,
                        usuario: this.usuarioID
                      }).subscribe(function (data) {
                        // console.log(data);
                        if (data.exe) {
                          var id = data.response._id;
                          _this13.carreteArriba = _this13.carreteArriba.sort(function (a, b) {
                            if (a.mime > b.mime) {
                              return 1;
                            }

                            if (a.mime < b.mime) {
                              return -1;
                            } // a must be equal to b


                            return 0;
                          });
                          console.log(_this13.carreteArriba, ' imagenes');
                          var cont = _this13.carreteArriba.length;

                          _this13.carreteArriba.forEach(function (item) {
                            // console.log(item, 'itm');
                            _this13.apiEstadoCitas.subirArchivosChat(info.token, id, item.path, item.name, item.mime).subscribe(function (image) {
                              image.response = JSON.parse(image.response);

                              if (image.response.exe) {
                                cont--;

                                if (cont === 0) {
                                  image.response.response.tipo = 'file';
                                  image.response.response.idEmit = _this13.idActual;

                                  if (item.mime.includes('video')) {
                                    _this13.sockect.emit('subirarchivo', image.response.response);
                                  }

                                  _this13.sockect.emit('mensajeCita', image.response.response);

                                  image.response.response.id = image.response.response._id;

                                  _this13.conversacion.push(image.response.response);

                                  _this13.carrete = [];
                                  _this13.carreteArriba = [];
                                  _this13.mensaje = '';

                                  _this13.myLoading.finalizarCargado();
                                }
                              } // console.log(image, ' image cada vuelta');

                            }, function (error) {
                              // console.log('Error ', error);
                              _this13.myLoading.finalizarCargado();

                              _this13.toast.alertApplication('No se pudo subir el archivo de vídeo o imagen', true);
                            });
                          });
                        }
                      });
                    }

                    _context11.next = 9;
                    break;

                  case 8:
                    if (this.mensaje !== '') {
                      this.conversacion.push({
                        taller: this.taller,
                        usuario: this.usuario,
                        emisor: this.local,
                        mensaje: this.mensaje,
                        archivos: [],
                        fechaMensaje: moment__WEBPACK_IMPORTED_MODULE_13__().format('YYYY-MM-DD HH:mm')
                      });
                      this.sockect.emit('mensajeCita', {
                        _id: this.idCita,
                        mensaje: this.mensaje,
                        emisor: this.local,
                        taller: this.tallerId,
                        usuario: this.usuarioID,
                        tipo: 'msg',
                        idEmit: this.idActual
                      });
                      this.mensaje = '';
                    }

                  case 9:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "escribirMensaje",
        value: function escribirMensaje() {
          this.sockect.emit('escribiendoCita', {
            exe: true,
            _id: this.idCita
          });
        }
      }, {
        key: "cambiar",
        value: function cambiar() {
          this.sockect.emit('escribiendoCita', {
            exe: false,
            _id: this.idCita
          });
        }
      }, {
        key: "recibirMensaje",
        value: function recibirMensaje() {
          var _this14 = this;

          var myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this14.sockect.on('mensajeCita', function (data) {
              observer.next(data);
              console.log(data);
            });
          });
          return myobserver;
        }
      }, {
        key: "seleccionarMedia",
        value: function seleccionarMedia(url, type) {
          this.urlInfo.url = url;
          this.urlInfo.tipo = type;
          this.modal('media');
        }
      }, {
        key: "modal",
        value: function modal(type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this15 = this;

            var enterAnimation, leaveAnimation, data, modal, modalInfo, _data;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    enterAnimation = function enterAnimation(baseEl) {
                      var backdropAnimation = _this15.animationCtrl.create().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

                      var wrapperAnimation = _this15.animationCtrl.create().addElement(baseEl.querySelector('.modal-wrapper')).keyframes([{
                        offset: 0,
                        opacity: '0',
                        transform: 'scale(0)'
                      }, {
                        offset: 1,
                        opacity: '0.99',
                        transform: 'scale(1)'
                      }]);

                      return _this15.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
                    };

                    leaveAnimation = function leaveAnimation(baseEl) {
                      return enterAnimation(baseEl).direction('reverse');
                    };

                    if (type === 'media') {
                      data = this.urlInfo;
                    } else {
                      data = this.dataInfoCita;
                    }

                    _context12.next = 5;
                    return this.modalCtrl.create({
                      component: _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_10__["ModalCitasPage"],
                      componentProps: {
                        type: type,
                        data: data
                      },
                      mode: 'ios',
                      enterAnimation: enterAnimation,
                      leaveAnimation: leaveAnimation
                    });

                  case 5:
                    modal = _context12.sent;
                    _context12.next = 8;
                    return modal.present();

                  case 8:
                    _context12.next = 10;
                    return modal.onWillDismiss();

                  case 10:
                    modalInfo = _context12.sent;

                    if (modalInfo) {
                      if (modalInfo.data) {
                        if (modalInfo.data.estado) {
                          _data = {
                            listaTrabajos: modalInfo.data.info.trabajos,
                            estado: modalInfo.data.estado,
                            precio: modalInfo.data.info.precio
                          };
                          this.dataInfoCita.estado = modalInfo.data.estado; // console.log(data);

                          this.almacenamiento.obtenerToken().then(function (info) {
                            _this15.apiEstadoCitas.editarCita(info.token, _this15.idCita, _data).subscribe(function (miCita) {// console.log('api', miCita);
                              // console.log(miCita.response, ' Estado');
                            });
                          });
                        }
                      }
                    }

                  case 12:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "escribirOnCita",
        value: function escribirOnCita() {
          var _this16 = this;

          var myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this16.sockect.on('escribiendoCita', function (data) {
              observer.next(data);
            });
          });
          return myobserver;
        }
      }, {
        key: "ubicacion",
        value: function ubicacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var ok;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.geo.getCurrentPosition();

                  case 2:
                    ok = _context13.sent;

                    if (ok) {// console.log(ok);
                    }

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } // Camara

      }, {
        key: "camaraOpciones",
        value: function camaraOpciones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this17 = this;

            var miHojaAccion;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.actionSheet.create({
                      subHeader: '',
                      header: 'Selecciona cualquier opción para subir una foto, recuerda que solo puedes subir un vídeo por mensaje',
                      mode: 'md',
                      buttons: [{
                        text: 'Tomar foto',
                        icon: 'camera-outline',
                        handler: function handler() {
                          _this17.tomarFoto(_this17.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Grabar Vídeo',
                        icon: 'videocam-outline',
                        handler: function handler() {
                          if (!_this17.video) {
                            _this17.capturarVideo();
                          }
                        }
                      }, {
                        text: 'Seleccionar Imágen de galería',
                        icon: 'image-outline',
                        handler: function handler() {
                          _this17.tomarFoto(_this17.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                        }
                      }, {
                        text: 'Seleccionar Vídeo de galería',
                        icon: 'image-outline',
                        handler: function handler() {
                          if (!_this17.video) {
                            _this17.tomarFoto(_this17.camera.PictureSourceType.PHOTOLIBRARY, 'video');
                          }
                        }
                      }]
                    });

                  case 2:
                    miHojaAccion = _context14.sent;
                    _context14.next = 5;
                    return miHojaAccion.present();

                  case 5:
                    return _context14.abrupt("return", _context14.sent);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "tomarFoto",
        value: function tomarFoto(sourceType, mode) {
          var _this18 = this;

          var options = {
            quality: 80,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: mode === 'image' ? this.camera.MediaType.PICTURE : this.camera.MediaType.VIDEO,
            sourceType: sourceType
          };
          this.camera.getPicture(options).then(function (imageData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee15() {
              var mim, name, url;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      mim = '';
                      name = ''; // console.log('image data', imageData)

                      if (imageData.includes('jpg')) {
                        mim = 'image/jpg';
                        name = 'image.jpg';
                      } else if (imageData.includes('png')) {
                        mim = 'image/png';
                        name = 'image.png';
                      } else if (imageData.includes('jpeg')) {
                        mim = 'image/jpeg';
                        name = 'image.jpeg';
                      } else if (imageData.includes('gif')) {
                        mim = 'image/gif';
                        name = 'image.gif';
                      } else {
                        name = 'video.mp4';
                        mim = 'video/mp4';
                      }

                      if (mim.includes('video') || mim.includes('Video')) {
                        this.video = true;
                      } // console.log('Mi archivo', name, mim)


                      this.carreteArriba.push({
                        path: imageData,
                        name: name,
                        mime: mim
                      });
                      url = window.Ionic.WebView.convertFileSrc(imageData);
                      this.carrete.push(url); // console.log(this.carrete);

                      this.camera.cleanup().then(function () {
                        return console.log('Eliminado');
                      });

                    case 8:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          });
        }
      }, {
        key: "capturarVideo",
        value: function capturarVideo() {
          var _this19 = this;

          var opctions = {
            limit: 1,
            duration: 30
          };
          this.media.captureVideo(opctions).then(function (url) {
            _this19.carreteArriba.push({
              path: url[0].fullPath,
              name: url[0].name,
              mime: url[0].type
            }); // console.log(url[0].name)


            var image = window.Ionic.WebView.convertFileSrc(url[0].fullPath);

            _this19.carrete.push(image);

            _this19.video = true; // console.log(this.carrete);
          });
        }
      }, {
        key: "eliminardelCarrete",
        value: function eliminardelCarrete(indice) {
          this.carrete.splice(indice, 1);
          this.carreteArriba.splice(indice, 1);

          if (!this.carreteArriba.find(function (item) {
            return item.mime.includes('video') || item.mime.includes('Video');
          })) {
            this.video = false;
          }
        }
      }, {
        key: "verMensajes",
        value: function verMensajes(event) {
          this.contenido.getScrollElement().then(function (e) {// console.log(' elemento ', e)
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sockect.emit('salirChatCita', {
            _id: this.idCita
          });
          this.almacenamiento.eleminarCita().then(function (r) {
            if (r) {
              return true;
            }
          });
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ɵfac = function ChatPage_Factory(t) {
      return new (t || ChatPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_14__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_15__["MediaCapture"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_16__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_17__["ConexionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AnimationController"]));
    };

    ChatPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChatPage,
      selectors: [["app-chat"]],
      viewQuery: function ChatPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contenido = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infinito = _t.first);
        }
      },
      decls: 26,
      vars: 5,
      consts: [[1, "ion-no-border"], ["color", "blanco"], [1, "title"], [1, "taller"], ["defaultHref", "/central/menu/miscitas", "icon", "chevron-back-outline"], [4, "ngIf"], ["class", "info", 4, "ngIf"], ["contenido", ""], ["position", "top", "threshold", "100px", 3, "ionInfinite"], ["infinito", ""], ["loadingSpinner", "bubbles", "loadingText", "Cargando mensajes..."], [4, "ngFor", "ngForOf"], ["class", "fotos ", 4, "ngIf"], [1, "flexible", "ion-no-border"], [1, "text"], ["placeholder", "Escribe un mensaje", 1, "campo", 3, "ngModel", "ngModelChange", "ionInput", "ionBlur"], [1, "opt"], ["color", "blanco", "fill", "clear", 3, "click"], ["slot", "icon-only", "name", "camera-outline", "color", "medium"], [1, "botones"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "send-outline", "color", "success"], [3, "src"], [1, "info"], ["class", "conx", 4, "ngIf"], ["class", "small", 4, "ngIf"], [1, "conx"], [1, "bola", "verde"], [1, "bola", "rojo"], [1, "small"], ["size", "9", "class", "final", "push", "3", 4, "ngIf"], ["size", "11", "class", " visi", 4, "ngIf"], ["size", "9", "push", "3", 1, "final"], [1, "grispo", "col"], ["class", "images", 4, "ngIf"], [1, "msg"], [1, "fh"], [1, "fecha"], [1, "images"], ["class", "imageChild", 4, "ngFor", "ngForOf"], [1, "imageChild"], ["alt", " ", 3, "src", "click", 4, "ngIf"], ["alt", " ", 3, "src", "click"], ["name", "crescent"], ["class", "btn", "color", "success", 3, "click", 4, "ngIf"], ["color", "success", 1, "btn", 3, "click"], ["video-load", "", "poster", "/assets/icon/favicon.png", 3, "src"], ["color", "oscuro", "mode", "ios", 1, "btn-f"], ["name", "play-outline", "slot", "icon-only"], ["size", "11", 1, "visi"], [1, "imagen"], [1, "grispi", "col"], [1, "fotos"], [1, "titulo"], [1, "carrete"], ["class", "fotoHija", 4, "ngFor", "ngForOf"], [1, "fotoHija"], ["width", "70px", 3, "src", 4, "ngIf"], ["width", "70px", "controls", "", 3, "src", 4, "ngIf"], [1, "eliminar", 3, "click"], ["color", "danger"], ["width", "70px", 3, "src"], ["width", "70px", "controls", "", 3, "src"]],
      template: function ChatPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-back-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChatPage_ion_avatar_6_Template, 2, 1, "ion-avatar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChatPage_div_7_Template, 6, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-infinite-scroll", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function ChatPage_Template_ion_infinite_scroll_ionInfinite_10_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-infinite-scroll-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChatPage_ion_row_14_Template, 3, 2, "ion-row", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ChatPage_div_16_Template, 5, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-footer", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatPage_Template_ion_textarea_ngModelChange_19_listener($event) {
            return ctx.mensaje = $event;
          })("ionInput", function ChatPage_Template_ion_textarea_ionInput_19_listener() {
            return ctx.escribirMensaje();
          })("ionBlur", function ChatPage_Template_ion_textarea_ionBlur_19_listener() {
            return ctx.cambiar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_Template_ion_button_click_21_listener() {
            return ctx.camaraOpciones();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_Template_ion_button_click_24_listener() {
            return ctx.enviarMensaje();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imagen !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombre !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.conversacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carrete.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mensaje);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSpinner"], _video_directive__WEBPACK_IMPORTED_MODULE_20__["VideoDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonChip"]],
      styles: [".flexible[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px;\n  background: #FFFFFF;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #FCF9FC;\n}\n\nion-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n\nion-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  padding: 3px 5px;\n}\n\n.taller[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  padding-top: 2px;\n}\n\n.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #333333;\n  margin: 0;\n}\n\n.conx[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.bola[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n}\n\nion-row[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  background: #fafafa;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.btn[_ngcontent-%COMP%]   .btn-h[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  opacity: 0.3;\n  font-size: 16px;\n}\n\n.btn[_ngcontent-%COMP%]   .btn-f[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  opacity: 0.5;\n  font-size: 16px;\n}\n\n.imagen[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.visi[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 300px;\n  border-radius: 20px;\n  padding: 2px 5px;\n  border: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.col[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  width: 100%;\n  padding: 3px 8px;\n  padding-bottom: 1px;\n}\n\n.col[_ngcontent-%COMP%]   .fh[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.col[_ngcontent-%COMP%]   .fh[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.grispi[_ngcontent-%COMP%] {\n  background: #EDEAED;\n}\n\n.grispo[_ngcontent-%COMP%] {\n  background: #339B42;\n  color: #FFFFFF;\n}\n\n.text[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 50px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: #FFFFFF;\n  border-radius: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.text[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  height: 50px;\n  font-size: 14px;\n}\n\n.botones[_ngcontent-%COMP%] {\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-end: 2px !important;\n  --padding-start: 2px !important;\n  --padding-bottom: 0px !important;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0 5px;\n}\n\n.fotos[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  bottom: 57px;\n  left: 0px;\n  box-shadow: 0px 3px 25px rgba(2, 2, 2, 0.1);\n  background: #fff;\n  max-height: 50%;\n  overflow-y: scroll;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--ion-color-primary);\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n\n.carrete[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.fotoHija[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: calc(50% - 5px);\n  margin: 5px 2.5px;\n  box-shadow: 0px 2px 5px rgba(3, 3, 3, 0.1);\n  text-align: center;\n  overflow: hidden;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 100%;\n  max-width: 100%;\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n\n.final[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRXN0YWRvQ2l0YXMvY2hhdC9DOlxcTWltb3RvL3NyY1xcYXBwXFxQYWdlc1xcRXN0YWRvQ2l0YXNcXGNoYXRcXGNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9QYWdlcy9Fc3RhZG9DaXRhcy9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFBQSx3QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBOztFQUVJLGNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFBQSx3QkFBQTtFQUNBLGdDQUFBO1VBQUEsb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0VzdGFkb0NpdGFzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGlibGUge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkNGOUZDO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG59XHJcblxyXG4udGFsbGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLmluZm8gaDQsXHJcbi5pbmZvIGg1IHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29ueCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5ib2xhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4gLmJ0bi1oIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuIC5idG4tZiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW1hZ2VuIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4udmlzaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbn1cclxuXHJcbi5jb2wgLm1zZyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4uY29sIC5maCB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sIC5maCAuZmVjaGEge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5ncmlzcGkge1xyXG4gICAgYmFja2dyb3VuZDogI0VERUFFRDtcclxufVxyXG5cclxuLmdyaXNwbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzM5QjQyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dCBpb24tdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYm90b25lcyB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0IGlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYW1wbyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5mb3RvcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTdweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMjVweCByZ2JhKDIsIDIsIDIsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNhcnJldGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZvdG9IaWphIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgbWFyZ2luOiA1cHggMi41cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcblxyXG4uZmluYWwge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59IiwiLmZsZXhpYmxlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZDRjlGQztcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDVweDtcbn1cblxuLnRhbGxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4uaW5mbyBoNCxcbi5pbmZvIGg1IHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbngge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5ib2xhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuIC5idG4taCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJ0biAuYnRuLWYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmltYWdlbiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udmlzaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb2wge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XG59XG5cbi5jb2wgLm1zZyB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cblxuLmNvbCAuZmgge1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sIC5maCAuZmVjaGEge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ncmlzcGkge1xuICBiYWNrZ3JvdW5kOiAjRURFQUVEO1xufVxuXG4uZ3Jpc3BvIHtcbiAgYmFja2dyb3VuZDogIzMzOUI0MjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHQgaW9uLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3RvbmVzIHtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vcHQgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1lbmQ6IDJweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDJweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhbXBvIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5mb3RvcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTdweDtcbiAgbGVmdDogMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDI1cHggcmdiYSgyLCAyLCAyLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2FycmV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3RvSGlqYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XG4gIG1hcmdpbjogNXB4IDIuNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDMsIDMsIDMsIDAuMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4uZmluYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('mensajes', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          transform: 'scale(0)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          transform: 'scale(1)',
          opacity: 1
        }))])], {
          optional: true
        })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          transform: 'scale(0)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          transform: 'scale(1)',
          opacity: 1
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.page.html',
          styleUrls: ['./chat.page.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('mensajes', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(0)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(1)',
            opacity: 1
          }))])], {
            optional: true
          })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(0)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(1)',
            opacity: 1
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__["EstadoCitasService"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]
        }, {
          type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]
        }, {
          type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
        }, {
          type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_14__["LoadingService"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_15__["MediaCapture"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_16__["ToastServices"]
        }, {
          type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_17__["ConexionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AnimationController"]
        }];
      }, {
        contenido: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contenido', {
            static: false
          }]
        }],
        infinito: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['infinito', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Pages/EstadoCitas/chat/video.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/EstadoCitas/chat/video.directive.ts ***!
    \***********************************************************/

  /*! exports provided: VideoDirective */

  /***/
  function srcAppPagesEstadoCitasChatVideoDirectiveTs(module, __webpack_exports__, __webpack_require__) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("canplay", function VideoDirective_canplay_HostBindingHandler() {
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
          args: ['canplay']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Pages/Modales/modal-citas/modal-citas-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Pages/Modales/modal-citas/modal-citas-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ModalCitasPageRoutingModule */

  /***/
  function srcAppPagesModalesModalCitasModalCitasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCitasPageRoutingModule", function () {
      return ModalCitasPageRoutingModule;
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


    var _modal_citas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal-citas.page */
    "./src/app/Pages/Modales/modal-citas/modal-citas.page.ts");

    var routes = [{
      path: '',
      component: _modal_citas_page__WEBPACK_IMPORTED_MODULE_2__["ModalCitasPage"]
    }];

    var ModalCitasPageRoutingModule = function ModalCitasPageRoutingModule() {
      _classCallCheck(this, ModalCitasPageRoutingModule);
    };

    ModalCitasPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalCitasPageRoutingModule
    });
    ModalCitasPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalCitasPageRoutingModule_Factory(t) {
        return new (t || ModalCitasPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalCitasPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCitasPageRoutingModule, [{
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
  "./src/app/Pages/Modales/modal-citas/modal-citas.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Pages/Modales/modal-citas/modal-citas.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ModalCitasPageModule */

  /***/
  function srcAppPagesModalesModalCitasModalCitasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCitasPageModule", function () {
      return ModalCitasPageModule;
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


    var _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modal-citas-routing.module */
    "./src/app/Pages/Modales/modal-citas/modal-citas-routing.module.ts");
    /* harmony import */


    var _modal_citas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-citas.page */
    "./src/app/Pages/Modales/modal-citas/modal-citas.page.ts");
    /* harmony import */


    var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Components/components.module */
    "./src/app/Components/components.module.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var ModalCitasPageModule = function ModalCitasPageModule() {
      _classCallCheck(this, ModalCitasPageModule);
    };

    ModalCitasPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalCitasPageModule
    });
    ModalCitasPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalCitasPageModule_Factory(t) {
        return new (t || ModalCitasPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalCitasPageRoutingModule"], src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalCitasPageModule, {
        declarations: [_modal_citas_page__WEBPACK_IMPORTED_MODULE_5__["ModalCitasPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalCitasPageRoutingModule"], src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCitasPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalCitasPageRoutingModule"], src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
          declarations: [_modal_citas_page__WEBPACK_IMPORTED_MODULE_5__["ModalCitasPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/Modales/modal-citas/modal-citas.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/Modales/modal-citas/modal-citas.page.ts ***!
    \***************************************************************/

  /*! exports provided: ModalCitasPage */

  /***/
  function srcAppPagesModalesModalCitasModalCitasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCitasPage", function () {
      return ModalCitasPage;
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


    var src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/Api/EstadoCitas.service */
    "./src/app/providers/Api/EstadoCitas.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Components_Media_video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../Components/Media/video/video.component */
    "./src/app/Components/Media/video/video.component.ts");
    /* harmony import */


    var _pipes_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../pipes/filtros/mi-filtro.pipe */
    "./src/app/pipes/filtros/mi-filtro.pipe.ts");
    /* harmony import */


    var _pipes_Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../pipes/Fechas/fecha.pipe */
    "./src/app/pipes/Fechas/fecha.pipe.ts");

    var _c0 = ["slide"];

    function ModalCitasPage_ion_header_0_ion_buttons_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r1316 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_header_0_ion_buttons_4_Template_ion_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1316);

          var ctx_r1315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1315.descartar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ModalCitasPage_ion_header_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Creando nuevas citas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalCitasPage_ion_header_0_ion_buttons_4_Template, 3, 0, "ion-buttons", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1308.type !== "chat");
      }
    }

    function ModalCitasPage_ion_header_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1318 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_header_1_Template_ion_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1318);

          var ctx_r1317 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1317.descartar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fotos y V\xEDdeos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ModalCitasPage_ion_header_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_header_2_Template_ion_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1320);

          var ctx_r1319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1319.descartar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Carpeta de Citas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ModalCitasPage_ion_content_3_div_1_ion_item_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("press", function ModalCitasPage_ion_content_3_div_1_ion_item_13_Template_ion_item_press_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1326);

          var taller_r1324 = ctx.$implicit;

          var ctx_r1325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1325.opciones(taller_r1324.usuarioReceptor.nombrecompleto);
        })("click", function ModalCitasPage_ion_content_3_div_1_ion_item_13_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1326);

          var taller_r1324 = ctx.$implicit;

          var ctx_r1327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1327.crear(taller_r1324);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var taller_r1324 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", taller_r1324.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](taller_r1324.usuarioReceptor.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](taller_r1324.usuarioReceptor.nombreusuario);
      }
    }

    function ModalCitasPage_ion_content_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", null, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-searchbar", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ModalCitasPage_ion_content_3_div_1_ion_item_13_Template, 8, 3, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-slide", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-grid", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_content_3_div_1_Template_ion_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1329);

          var ctx_r1328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1328.cancelar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cancelar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_content_3_div_1_Template_ion_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1329);

          var ctx_r1330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1330.generarTicket();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Generar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1321.listaTalleres);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Creando un nuevo turno para ", ctx_r1321.usuario, "");
      }
    }

    function ModalCitasPage_ion_content_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCitasPage_ion_content_3_div_1_Template, 27, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1311.vista === "buscar");
      }
    }

    function ModalCitasPage_ion_content_4_app_video_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video", 30);
      }

      if (rf & 2) {
        var ctx_r1331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("url", "https://motocaliapp.com/Citas/", ctx_r1331.urlArchivo, "");
      }
    }

    function ModalCitasPage_ion_content_4_ion_slides_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1332.slideOpt);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/Citas/", ctx_r1332.urlArchivo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ModalCitasPage_ion_content_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCitasPage_ion_content_4_app_video_1_Template, 1, 1, "app-video", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalCitasPage_ion_content_4_ion_slides_2_Template, 3, 2, "ion-slides", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1312.tipoArchivo === "video");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1312.tipoArchivo === "imagen");
      }
    }

    var _c1 = function _c1(a0, a1, a2) {
      return {
        "estado-amarillo ": a0,
        "estado-azul ": a1,
        "estado-verde ": a2
      };
    };

    function ModalCitasPage_ion_content_5_ion_item_sliding_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r1336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_content_5_ion_item_sliding_4_Template_ion_item_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1336);

          var cita_r1334 = ctx.$implicit;

          var ctx_r1335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1335.escogerChat(cita_r1334._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item-options", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item-option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cita_r1334 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", cita_r1334.imagenTaller, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cita_r1334.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", cita_r1334.nombreusuario, " - Estado pendiente");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cita creada el ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, cita_r1334.fechainicio), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c1, cita_r1334.estado === "PENDIENTE", cita_r1334.estado === "EN PROGRESO", cita_r1334.estado === "TERMINADO"));
      }
    }

    function ModalCitasPage_ion_content_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-searchbar", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function ModalCitasPage_ion_content_5_Template_ion_searchbar_ionChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1338);

          var ctx_r1337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1337.filtro($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalCitasPage_ion_content_5_ion_item_sliding_4_Template, 17, 11, "ion-item-sliding", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "miFiltro");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1313 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r1313.citas, ctx_r1313.texto));
      }
    }

    moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('es');

    var ModalCitasPage =
    /*#__PURE__*/
    function () {
      function ModalCitasPage(modalCtrl, actionSheetCtrl, citasService, utitlities, almacenamiento, animationCtrl, toast) {
        _classCallCheck(this, ModalCitasPage);

        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.citasService = citasService;
        this.utitlities = utitlities;
        this.almacenamiento = almacenamiento;
        this.animationCtrl = animationCtrl;
        this.toast = toast;
        this.titulo = 'Configuración';
        this.listaTalleres = [];
        this.mensaje = '';
        this.estado = '';
        this.estadoCambio = '';
        this.role = '';
        this.usuario = '';
        this.urlArchivo = '';
        this.tipoArchivo = '';
        this.slideOpt = {
          zoom: {
            maxRatio: 3,
            minRatio: 1,
            toggle: true
          }
        };
        this.citas = [];
        this.texto = ''; // Sistema de Trabajos en el local

        this.listaCreados = [];
        this.trabajos = [];
        this.nuevoTrabajo = false;
        this.textoTrabajo = '';
        this.textoBuscar = '';
        this.precioconfig = false;
        this.precio = 0;
        this.msgEstado = '';
        this.msgpro = '';
        this.msgter = '';
        this.terminado = false;
      }

      _createClass(ModalCitasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var _this20 = this;

            var ui, filtrado, _filtrado;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.t0 = this.type;
                    _context16.next = _context16.t0 === 'setting' ? 3 : _context16.t0 === 'buscar' ? 10 : _context16.t0 === 'media' ? 15 : _context16.t0 === 'carpetas' ? 19 : 23;
                    break;

                  case 3:
                    _context16.next = 5;
                    return this.almacenamiento.obtenerToken();

                  case 5:
                    ui = _context16.sent;

                    if (ui) {
                      this.citasService.obtenerListaTrabajos(ui.token).subscribe(function (res) {
                        console.log(res, 'Respuesta');

                        if (res.exe) {
                          _this20.listaCreados = res.response[0].listaTrabajos;
                        }
                      });
                      console.log(1);
                    }

                    console.log(2);
                    this.vista = 'setting';
                    return _context16.abrupt("break", 24);

                  case 10:
                    this.titulo = 'Buscar Talleres';
                    this.vista = 'buscar';
                    setTimeout(function () {
                      _this20.slide.lockSwipes(true).then(function () {
                        console.log('OK');
                      });
                    }, 500);
                    this.listarTalleres();
                    return _context16.abrupt("break", 24);

                  case 15:
                    this.vista = 'media';
                    this.urlArchivo = this.data.url;
                    this.tipoArchivo = this.data.tipo;
                    return _context16.abrupt("break", 24);

                  case 19:
                    this.vista = 'carpetas';
                    console.log(this.data, 'BUENA ESA VALLE');

                    if (this.data.role === 'TALLER_ROLE') {
                      filtrado = this.data.info.filter(function (item) {
                        return item.usuariopedido._id === _this20.data.unico;
                      });
                      this.citas = filtrado;
                    } else {
                      _filtrado = this.data.info.filter(function (item) {
                        return item.idtaller._id === _this20.data.unico;
                      });
                      this.citas = _filtrado;
                    }

                    return _context16.abrupt("break", 24);

                  case 23:
                    return _context16.abrupt("break", 24);

                  case 24:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "filtro",
        value: function filtro(event) {
          this.texto = event.detail.value;
        }
      }, {
        key: "guardar",
        value: function guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var usuario;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    usuario = _context17.sent;

                    if (usuario) {
                      this.modalCtrl.dismiss({
                        estado: this.estadoCambio,
                        info: {
                          trabajos: this.trabajos,
                          precio: this.precio
                        }
                      });
                      this.nuevoTrabajo = false;
                    }

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "escogerChat",
        value: function escogerChat(cita) {
          this.modalCtrl.dismiss({
            salir: true,
            cita: cita
          });
        }
      }, {
        key: "descartar",
        value: function descartar() {
          this.modalCtrl.dismiss({
            salir: true
          });
        }
      }, {
        key: "listarTalleres",
        value: function listarTalleres() {
          var _this21 = this;

          this.almacenamiento.obtenerToken().then(function (info) {
            _this21.citasService.listadoTalleres(info.token).subscribe(function (data) {
              if (data.response.length > 0) {
                data.response.forEach(function (item) {
                  item.avatar = item.usuarioReceptor.imagen[0].path;

                  _this21.listaTalleres.push(item);
                });
              }

              console.log(_this21.listaTalleres, data);
            });
          });
        }
      }, {
        key: "opciones",
        value: function opciones(usuario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.slide.lockSwipes(true);

                  case 2:
                    _context18.next = 4;
                    return this.actionSheetCtrl.create({
                      translucent: true,
                      header: "Que quieres hacer con ".concat(usuario),
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
                        handler: function handler() {}
                      }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close-outline'
                      }]
                    });

                  case 4:
                    actionSheet = _context18.sent;
                    _context18.next = 7;
                    return actionSheet.present();

                  case 7:
                    return _context18.abrupt("return", _context18.sent);

                  case 8:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "crear",
        value: function crear(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.slide.lockSwipes(false);

                  case 2:
                    _context19.next = 4;
                    return this.slide.slideNext(300);

                  case 4:
                    this.usuario = item.usuarioReceptor.nombrecompleto;
                    this.taller = item;
                    _context19.next = 8;
                    return this.slide.lockSwipes(true);

                  case 8:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "generarTicket",
        value: function generarTicket() {
          var _this22 = this;

          console.log('Taller', this.taller.usuarioReceptor._id);
          this.almacenamiento.obtenerToken().then(function (info) {
            _this22.citasService.crearCita(info.token, {
              idtaller: _this22.taller.usuarioReceptor._id
            }).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee20() {
                return regeneratorRuntime.wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        console.log(data);
                        _context20.next = 3;
                        return this.modalCtrl.dismiss({});

                      case 3:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee21() {
                return regeneratorRuntime.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        _context21.next = 2;
                        return this.utitlities.alertApplication('No se pudo agendar la cita', false);

                      case 2:
                        _context21.next = 4;
                        return this.modalCtrl.dismiss({});

                      case 4:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21, this);
              }));
            });
          });
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.slide.lockSwipes(false);

                  case 2:
                    _context22.next = 4;
                    return this.slide.slidePrev(300);

                  case 4:
                    _context22.next = 6;
                    return this.slide.lockSwipes(true);

                  case 6:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        } // CONFIGURACIONES

      }, {
        key: "filtroTrabajo",
        value: function filtroTrabajo(event) {
          this.textoBuscar = event.detail.value;
        }
      }, {
        key: "check",
        value: function check(trabajo) {
          return this.trabajos.find(function (item) {
            return item === trabajo;
          });
        }
      }, {
        key: "borrarTrabajo",
        value: function borrarTrabajo(i) {
          this.trabajos.splice(i, 1);
        }
      }, {
        key: "habilitarTrabajo",
        value: function habilitarTrabajo() {
          this.nuevoTrabajo = true;
        }
      }]);

      return ModalCitasPage;
    }();

    ModalCitasPage.ɵfac = function ModalCitasPage_Factory(t) {
      return new (t || ModalCitasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]));
    };

    ModalCitasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ModalCitasPage,
      selectors: [["app-modal-citas"]],
      viewQuery: function ModalCitasPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
        }
      },
      inputs: {
        type: "type",
        data: "data"
      },
      decls: 6,
      vars: 6,
      consts: [[4, "ngIf"], ["fullscreen", "true", 4, "ngIf"], ["fullscreen", "true", "color", "darkgold", 4, "ngIf"], ["color", "blanco"], ["fill", "clear", "slot", "end", 4, "ngIf"], ["fill", "clear", "slot", "end"], ["fill", "clear", 3, "click"], ["name", "close-outline"], ["color", "dark"], ["fill", "clear", "slot", "start"], ["fullscreen", "true"], ["class", "divider", 4, "ngIf"], [1, "divider"], ["slide", ""], ["fixed", ""], ["size", "12"], ["color", "light"], [3, "press", "click", 4, "ngFor", "ngForOf"], [1, "anchofull"], [1, "opacity"], ["size", "6"], ["expand", "block", "mode", "ios", "color", "light", 3, "click"], ["expand", "block", "mode", "ios", "color", "primary", 3, "click"], [3, "press", "click"], ["slot", "start"], ["width", "100%", "alt", "", 3, "src"], [1, "ion-text-wrap"], ["fullscreen", "true", "color", "darkgold"], [3, "url", 4, "ngIf"], ["class", "diapositiva", 3, "options", 4, "ngIf"], [3, "url"], [1, "diapositiva", 3, "options"], ["alt", "", 3, "src"], ["mode", "ios", 3, "ionChange"], [4, "ngFor", "ngForOf"], [3, "click"], ["slot", "start", 1, "avatar"], ["width", "100%", 3, "src"], [1, "medium"], ["slot", "end", 1, "estadobol", 3, "ngClass"], ["side", "start"], ["slot", "icon-only", "name", "ellipsis-vertical-outline"], ["color", "secondary"], ["slot", "icon-only", "name", "trash-outline"]],
      template: function ModalCitasPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalCitasPage_ion_header_0_Template, 5, 1, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCitasPage_ion_header_1_Template, 7, 0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalCitasPage_ion_header_2_Template, 7, 0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalCitasPage_ion_content_3_Template, 3, 1, "ion-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalCitasPage_ion_content_4_Template, 3, 2, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModalCitasPage_ion_content_5_Template, 6, 4, "ion-content", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "media");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "carpetas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "buscar" || ctx.vista === "chat" || ctx.vista === "setting");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "media");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "carpetas");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _Components_Media_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"]],
      pipes: [_pipes_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__["MiFiltroPipe"], _pipes_Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__["MiFechaPipe"]],
      styles: ["ion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-item[_ngcontent-%COMP%] {\n  touch-action: pan-y !important;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fullancho[_ngcontent-%COMP%] {\n  min-height: 100%;\n  height: auto;\n}\n\n.diapositiva[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.estado[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.estadobol[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.estado-verde[_ngcontent-%COMP%] {\n  background: #85B84F;\n}\n\n.estado-amarillo[_ngcontent-%COMP%] {\n  background: #FCD573;\n}\n\n.estado-azul[_ngcontent-%COMP%] {\n  background: #5591B1;\n}\n\n.es-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.es-bottom-small[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.precio[_ngcontent-%COMP%] {\n  height: 80px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 42px;\n  opacity: 0.8;\n  font-weight: bolder;\n  color: var(--ion-color-success);\n}\n\n.trabajo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.trabajo[_ngcontent-%COMP%]:nth-child(even) {\n  --background: #f9f9f9;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.ok[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\nvideo[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n\n.fl[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.aviso[_ngcontent-%COMP%] {\n  --background: #FEE491;\n}\n\n.aviso[_ngcontent-%COMP%]:hover {\n  --background: #FEE491 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9tb2RhbC1jaXRhcy9DOlxcTWltb3RvL3NyY1xcYXBwXFxQYWdlc1xcTW9kYWxlc1xcbW9kYWwtY2l0YXNcXG1vZGFsLWNpdGFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9tb2RhbC1jaXRhcy9tb2RhbC1jaXRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9Nb2RhbGVzL21vZGFsLWNpdGFzL21vZGFsLWNpdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNsaWRlcyxcclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbGFuY2hvIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kaWFwb3NpdGl2YSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVzdGFkbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZXN0YWRvYm9sIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmVzdGFkby12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODVCODRGO1xyXG59XHJcblxyXG4uZXN0YWRvLWFtYXJpbGxvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XHJcbn1cclxuXHJcbi5lc3RhZG8tYXp1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU5MUIxO1xyXG59XHJcblxyXG4uZXMtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5lcy1ib3R0b20tc21hbGwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByZWNpbyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxufVxyXG5cclxuLnRyYWJham8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMywgMywgMywgMC4xKTtcclxufVxyXG5cclxuLnRyYWJham86bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub2sge1xyXG4gICAgb3BhY2l0eTogLjM7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYXZpc28ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxO1xyXG59XHJcblxyXG4uYXZpc286aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMsXG5pb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGxhbmNobyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmRpYXBvc2l0aXZhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVzdGFkbyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5lc3RhZG9ib2wge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uZXN0YWRvLXZlcmRlIHtcbiAgYmFja2dyb3VuZDogIzg1Qjg0Rjtcbn1cblxuLmVzdGFkby1hbWFyaWxsbyB7XG4gIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XG59XG5cbi5lc3RhZG8tYXp1bCB7XG4gIGJhY2tncm91bmQ6ICM1NTkxQjE7XG59XG5cbi5lcy1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXMtYm90dG9tLXNtYWxsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByZWNpbyB7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4udHJhYmFqbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XG59XG5cbi50cmFiYWpvOm50aC1jaGlsZChldmVuKSB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5vayB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxudmlkZW8ge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hdmlzbyB7XG4gIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcbn1cblxuLmF2aXNvOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalCitasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-modal-citas',
          templateUrl: './modal-citas.page.html',
          styleUrls: ['./modal-citas.page.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 0,
            transform: 'scale(0)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 1,
            transform: 'scale(1)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 1,
            transform: 'scale(1)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 0,
            transform: 'scale(0)'
          }))])])]
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__["EstadoCitasService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slide', {
            static: false
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=Pages-EstadoCitas-chat-chat-module-es5.js.map