function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"], {
  /***/
  "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts ***!
    \*******************************************************************/

  /*! exports provided: IgtmplantillaPage */

  /***/
  function srcAppPagesModalesIgtmplantillaIgtmplantillaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgtmplantillaPage", function () {
      return IgtmplantillaPage;
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


    var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Api/IGTM.service */
    "./src/app/providers/Api/IGTM.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Components_Media_video_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../Components/Media/video/video.component */
    "./src/app/Components/Media/video/video.component.ts");

    var _c0 = ["slide"];
    var _c1 = ["text"];

    function IgtmplantillaPage_ion_header_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r1408 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_ion_header_0_Template_ion_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1408);

          var ctx_r1407 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1407.cerrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1400.colorheader);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1400.titulo);
      }
    }

    function IgtmplantillaPage_div_2_ion_item_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r1412 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_2_ion_item_4_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1412);

          var usuario_r1410 = ctx.$implicit;

          var ctx_r1411 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1411.seleccionar(usuario_r1410);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var usuario_r1410 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", usuario_r1410.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r1410.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", usuario_r1410.nombreusuario, " ");
      }
    }

    function IgtmplantillaPage_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1414 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-searchbar", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IgtmplantillaPage_div_2_Template_ion_searchbar_ionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1414);

          var ctx_r1413 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1413.buscar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IgtmplantillaPage_div_2_ion_item_4_Template, 8, 3, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1401.usuarios);
      }
    }

    function IgtmplantillaPage_div_3_ion_slides_14_ion_slide_2_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
      }

      if (rf & 2) {
        var archivo_r1418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1418.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function IgtmplantillaPage_div_3_ion_slides_14_ion_slide_2_app_video_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video", 30);
      }

      if (rf & 2) {
        var archivo_r1418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("url", "https://motocaliapp.com/11927613401/", archivo_r1418.ruta, "");
      }
    }

    function IgtmplantillaPage_div_3_ion_slides_14_ion_slide_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmplantillaPage_div_3_ion_slides_14_ion_slide_2_img_1_Template, 1, 1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IgtmplantillaPage_div_3_ion_slides_14_ion_slide_2_app_video_2_Template, 1, 1, "app-video", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var archivo_r1418 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1418.mime.includes("image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1418.mime.includes("video") || archivo_r1418.mime.includes("Video") || archivo_r1418.mime.includes("mp4") || archivo_r1418.mime.includes("MP4"));
      }
    }

    function IgtmplantillaPage_div_3_ion_slides_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IgtmplantillaPage_div_3_ion_slides_14_ion_slide_2_Template, 3, 2, "ion-slide", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1415.opt);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1415.archivos);
      }
    }

    function IgtmplantillaPage_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1425 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-avatar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-buttons", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_3_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1425);

          var ctx_r1424 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1424.cerrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, IgtmplantillaPage_div_3_ion_slides_14_Template, 3, 2, "ion-slides", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1402 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1402.info.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1402.info.creador.nombrecompleto, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1402.info.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1402.cargado);
      }
    }

    function IgtmplantillaPage_div_4_ion_item_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1429 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_4_ion_item_3_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1429);

          var etiqueta_r1427 = ctx.$implicit;

          var ctx_r1428 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1428.perfilNavegar(etiqueta_r1427);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var etiqueta_r1427 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", etiqueta_r1427.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](etiqueta_r1427.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", etiqueta_r1427.nombreusuario, " ");
      }
    }

    function IgtmplantillaPage_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgtmplantillaPage_div_4_ion_item_3_Template, 8, 3, "ion-item", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1403 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1403.etiquetados);
      }
    }

    function IgtmplantillaPage_div_5_h3_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay comentarios para esta publicaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmplantillaPage_div_5_ion_item_3_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r1439 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1439);

          var i_r1433 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r1437 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1437.verRespuestas(i_r1433);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ver respuestas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmplantillaPage_div_5_ion_item_3_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1442 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_div_13_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1442);

          var i_r1433 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r1440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1440.verRespuestas(i_r1433);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ocultar respuestas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmplantillaPage_div_5_ion_item_3_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1446 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_div_14_div_1_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1446);

          var hijo_r1444 = ctx.$implicit;

          var ctx_r1445 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1445.perfilNavegar(hijo_r1444.nombre);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_div_14_div_1_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1446);

          var hijo_r1444 = ctx.$implicit;

          var ctx_r1447 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r1447.perfilNavegar(hijo_r1444.nombre);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_div_14_div_1_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1446);

          var hijo_r1444 = ctx.$implicit;

          var ctx_r1449 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var comentario_r1432 = ctx_r1449.$implicit;
          var i_r1433 = ctx_r1449.index;

          var ctx_r1448 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1448.responder(comentario_r1432, 2, hijo_r1444, i_r1433);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Responder");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hijo_r1444 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", hijo_r1444.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", hijo_r1444.nombre.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hijo_r1444.comentario, " ");
      }
    }

    function IgtmplantillaPage_div_5_ion_item_3_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmplantillaPage_div_5_ion_item_3_div_14_div_1_Template, 12, 3, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comentario_r1432 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@entrada", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", comentario_r1432.hijos);
      }
    }

    function IgtmplantillaPage_div_5_ion_item_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1452 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_Template_ion_avatar_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1452);

          var comentario_r1432 = ctx.$implicit;

          var ctx_r1451 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1451.perfilNavegar(comentario_r1432.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1452);

          var comentario_r1432 = ctx.$implicit;

          var ctx_r1453 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1453.perfilNavegar(comentario_r1432.creador);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_5_ion_item_3_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1452);

          var comentario_r1432 = ctx.$implicit;
          var i_r1433 = ctx.index;

          var ctx_r1454 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1454.responder(comentario_r1432, 1, "", i_r1433);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Responder");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IgtmplantillaPage_div_5_ion_item_3_div_12_Template, 2, 0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, IgtmplantillaPage_div_5_ion_item_3_div_13_Template, 2, 0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, IgtmplantillaPage_div_5_ion_item_3_div_14_Template, 2, 2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comentario_r1432 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", comentario_r1432.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", comentario_r1432.creador.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", comentario_r1432.comentario, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comentario_r1432.hijos.length > 0 && !comentario_r1432.habilitar);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comentario_r1432.hijos.length > 0 && comentario_r1432.habilitar);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comentario_r1432.habilitar);
      }
    }

    function IgtmplantillaPage_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmplantillaPage_div_5_h3_1_Template, 2, 0, "h3", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgtmplantillaPage_div_5_ion_item_3_Template, 15, 6, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1404 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1404.comentarios.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1404.comentarios);
      }
    }

    function IgtmplantillaPage_div_6_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1462 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_6_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1462);

          var i_r1460 = ctx.index;

          var ctx_r1461 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r1461.eliminar(i_r1460);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var etiqueta_r1459 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", etiqueta_r1459.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function IgtmplantillaPage_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmplantillaPage_div_6_div_1_div_1_Template, 5, 1, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1455.etiquetadosc);
      }
    }

    function IgtmplantillaPage_div_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Buscando usuarios... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgtmplantillaPage_div_6_ion_item_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r1465 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_6_ion_item_6_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1465);

          var usuario_r1463 = ctx.$implicit;

          var ctx_r1464 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r1464.seleccion(usuario_r1463);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var usuario_r1463 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", usuario_r1463.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r1463.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", usuario_r1463.nombreusuario, " ");
      }
    }

    function IgtmplantillaPage_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r1467 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IgtmplantillaPage_div_6_div_1_Template, 2, 1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-searchbar", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IgtmplantillaPage_div_6_Template_ion_searchbar_ionChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1467);

          var ctx_r1466 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1466.buscar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IgtmplantillaPage_div_6_div_4_Template, 3, 0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IgtmplantillaPage_div_6_ion_item_6_Template, 8, 3, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-textarea", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IgtmplantillaPage_div_6_Template_ion_textarea_ionChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1467);

          var ctx_r1468 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1468.cambiar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_div_6_Template_ion_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1467);

          var ctx_r1469 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1469.publicarCompartido();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "COMPARTIR PUBLICACI\xD3N");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1405.etiquetadosc.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1405.cargares);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1405.usuarios);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoGrow", ctx_r1405.auto);
      }
    }

    function IgtmplantillaPage_ion_footer_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r1472 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-textarea", 63, 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IgtmplantillaPage_ion_footer_7_Template_ion_textarea_ionChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1472);

          var ctx_r1471 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1471.comentar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgtmplantillaPage_ion_footer_7_Template_ion_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1472);

          var ctx_r1473 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1473.crearComentario();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1406 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1406.usuario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autofocus", ctx_r1406.focus)("autoGrow", true)("value", ctx_r1406.comentario);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1406.boton);
      }
    }

    var IgtmplantillaPage =
    /*#__PURE__*/
    function () {
      function IgtmplantillaPage(almacenamiento, igtmApi, toast, modalCtrl, statusbar, router, socket) {
        _classCallCheck(this, IgtmplantillaPage);

        this.almacenamiento = almacenamiento;
        this.igtmApi = igtmApi;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.statusbar = statusbar;
        this.router = router;
        this.socket = socket;
        this.usuarios = [];
        this.titulo = '';
        this.color = 'blanco';
        this.colorheader = 'blanco';
        this.header = true;
        this.opt = {
          zoom: {
            maxRation: 5,
            toggle: true
          }
        };
        this.cargado = false;
        this.usuario = '';
        this.comentario = '';
        this.focus = false;
        this.tipoComentario = 'nuevo';
        this.padre = '';
        this.boton = false; // Compartir

        this.texto = '';
        this.auto = false;
        this.etiquetadosc = [];
        this.etiquetadoscid = [];
        this.cargares = false;
      }

      _createClass(IgtmplantillaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var info, msg;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.tipo === 'etiquetar') {
                      this.titulo = 'Etiquetar personas';
                    } else if (this.tipo === 'mencionar') {
                      this.titulo = 'Mencionar personas';
                    } else if (this.tipo === 'visualizador') {
                      this.header = false;
                      this.color = 'darkgold';
                      this.colorheader = 'darkgold';
                      this.statusbar.hide();
                      this.cargar();
                    } else if (this.tipo === 'etiquetados') {
                      this.titulo = 'Etiquetados';
                      this.color = 'blanco';
                      this.colorheader = 'blanco';
                      this.statusbar.hide();
                      this.etiquetados.forEach(function (item) {
                        if (item.imagen.length > 0) {
                          item.image = "https://motocaliapp.com/".concat(item.imagen[0].path);
                        } else {
                          item.image = '/assets/notfound.png';
                        }
                      });
                    } else if (this.tipo === 'comentar') {
                      this.colorheader = 'light';
                      this.titulo = this.comentarios.length + ' Comentarios';
                      info = this.almacenamiento.obtenerToken();

                      if (info) {
                        msg = !info.nusuario ? '' : "@".concat(info.nusuario);
                        this.usuario = "".concat(msg, " escribe un comentario");
                        console.log(this.comentarios);

                        if (this.comentarios.length > 0) {
                          this.comentarios.forEach(function (item) {
                            if (item.creador.imagen.length > 0) {
                              item.image = "https://motocaliapp.com/".concat(item.creador.imagen[0].path);
                            } else {
                              item.image = '/assets/notfound.png';
                            }

                            item.habilitar = false;

                            if (item.hijos.length > 0) {
                              item.hijos.forEach(function (it) {
                                if (it.nombre.imagen.length > 0) {
                                  it.image = "https://motocaliapp.com/".concat(it.nombre.imagen[0].path);
                                } else {
                                  it.image = '/assets/notfound.png';
                                }
                              });
                            }
                          });
                        }
                      }
                    } else if (this.tipo === 'compartir') {
                      this.titulo = 'Compartir publicación';
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "cargar",
        value: function cargar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var info;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.cargado = true;
                    _context2.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context2.sent;

                    if (!info) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 7;
                    return this.slide.slideTo(this.indice, 0);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "buscar",
        value: function buscar(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var info;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.cargares = true;
                    _context3.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context3.sent;

                    if (info) {
                      this.igtmApi.BuscarUsuarios(info.token, event.detail.value).subscribe(function (data) {
                        if (data.exe) {
                          data.response.forEach(function (item) {
                            if (item.imagen.length > 0) {
                              item.imagen = "https://motocaliapp.com/".concat(item.imagen[0].path);
                            } else {
                              item.imagen = '/assets/notfound.png';
                            }
                          });
                          _this.usuarios = data.response;
                          _this.cargares = false;
                        } else {
                          _this.cargares = false;

                          _this.toast.toastError('No se pudo taer los usuarios, intentelo mas tarde');
                        }
                      }, function (err) {
                        _this.cargares = false;

                        _this.toast.toastError('No se puede etiquetar esta publicación, intentelo mas tarde');
                      });
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
        key: "seleccionar",
        value: function seleccionar(persona) {
          this.modalCtrl.dismiss({
            exe: true,
            persona: persona
          });
        }
      }, {
        key: "navegar",
        value: function navegar(etiqueta) {
          this.router.navigate(['/central/buscar/perfil-visita', etiqueta.nombreusuario]);
          this.cerrar();
        }
      }, {
        key: "comentar",
        value: function comentar(event) {
          this.comentario = event.detail.value;

          if (!this.comentario.includes('@') || this.comentario === '') {
            this.tipoComentario = 'nuevo';
          }
        }
      }, {
        key: "responder",
        value: function responder(comentario, tipo, salida, indice) {
          if (tipo === 2) {
            salida.nombre.padre = indice;
            this.usuarioRespuesta = salida.nombre;
            console.log(this.usuarioRespuesta);
            this.comentario = "@".concat(salida.nombre.nombreusuario, " ");
          } else {
            this.comentario = "@".concat(comentario.creador.nombreusuario, " ");
            this.usuarioRespuesta = comentario.creador;
            this.usuarioRespuesta.padre = indice;
          }

          this.padre = comentario._id;
          this.tipoComentario = 'respuesta';
          this.text.setFocus();
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          if (this.tipo === 'comentar') {
            this.modalCtrl.dismiss({
              exe: true,
              comentarios: this.comentarios
            });
          } else {
            this.modalCtrl.dismiss();
          }
        }
      }, {
        key: "crearComentario",
        value: function crearComentario() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.boton = true;
                    _context4.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context4.sent;

                    if (info) {
                      this.igtmApi.crearComentario(info.token, {
                        comentario: this.comentario,
                        _id: this.publicacion,
                        tipo: this.tipoComentario,
                        padre: this.padre
                      }).subscribe(function (data) {
                        console.log(data, 'respuesta');

                        if (data.exe) {
                          if (_this2.tipoComentario === 'nuevo') {
                            if (data.response.creador.imagen.length > 0) {
                              data.response.image = "https://motocaliapp.com/".concat(data.response.creador.imagen[0].path);
                            } else {
                              data.response.image = '/assets/notfound.png';
                            }

                            _this2.comentarios.push(data.response);
                          } else {
                            console.log(_this2.usuarioRespuesta.padre);

                            if (data.response.hijos.length > 0) {
                              if (data.response.hijos[data.response.hijos.length - 1].nombre.imagen.length > 0) {
                                data.response.hijos[data.response.hijos.length - 1].image = "https://motocaliapp.com/".concat(data.response.hijos[data.response.hijos.length - 1].nombre.imagen[0].path);
                              } else {
                                data.response.hijos[data.response.hijos.length - 1].image = '/assets/notfound.png';
                              }
                            }

                            _this2.comentarios[_this2.usuarioRespuesta.padre].hijos.push(data.response.hijos[data.response.hijos.length - 1]);
                          }

                          _this2.toast.toastNotificacion('Comentario enviado correctamente');

                          if (info._id !== _this2.creador._id) {
                            if (_this2.tipoComentario === 'nuevo') {
                              _this2.socket.emit('comentario', {
                                creador: _this2.creador._id,
                                persona: "@".concat(info.nusuario),
                                celular: [_this2.creador.usuarioID],
                                ids: [_this2.creador._id],
                                motivo: 'a comentado en tu publicación',
                                comentario: _this2.comentario,
                                publicacion: _this2.publicacion
                              });
                            } else {
                              console.log(_this2.usuarioRespuesta);

                              _this2.socket.emit('comentario', {
                                creador: _this2.creador._id,
                                persona: "@".concat(info.nusuario),
                                celular: [_this2.creador.usuarioID, _this2.usuarioRespuesta.usuarioID],
                                ids: [_this2.creador._id, _this2.usuarioRespuesta._id],
                                comentario: _this2.comentario,
                                motivo: 'respondió a tu comentario',
                                publicacion: _this2.publicacion
                              });
                            }
                          } else {
                            console.log(_this2.usuarioRespuesta);

                            if (_this2.tipoComentario === 'respuesta') {
                              _this2.socket.emit('comentario', {
                                creador: _this2.creador._id,
                                persona: "@".concat(info.nusuario),
                                celular: [_this2.usuarioRespuesta.usuarioID],
                                ids: [_this2.usuarioRespuesta._id],
                                comentario: _this2.comentario,
                                motivo: 'respondió a tu comentario',
                                publicacion: _this2.publicacion
                              });
                            }
                          }

                          _this2.comentario = '';
                          _this2.tipoComentario = 'respuesta';
                          _this2.boton = false;
                        } else {
                          _this2.toast.toastError('No se pudo enviar el comentario, inténtelo más tarde');
                        }
                      }, function (err) {
                        _this2.toast.toastError('No se pudo enviar el comentario, inténtelo más tarde');
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
        key: "verRespuestas",
        value: function verRespuestas(indice) {
          this.comentarios[indice].habilitar = !this.comentarios[indice].habilitar;
        }
      }, {
        key: "cambiar",
        value: function cambiar(event) {
          this.texto = event.detail.value;

          if (this.texto !== '') {
            this.auto = true;
          } else {
            this.auto = false;
          }
        }
      }, {
        key: "seleccion",
        value: function seleccion(usuario) {
          if (!this.etiquetadosc.find(function (item) {
            return item._id === usuario._id;
          }) || this.etiquetadosc.length === 0) {
            this.etiquetadosc.push(usuario);
            this.etiquetadoscid.push(usuario._id);
          }
        }
      }, {
        key: "eliminar",
        value: function eliminar(i) {
          this.etiquetadosc.splice(i, 1);
          this.etiquetadoscid.splice(i, 1);
        }
      }, {
        key: "publicarCompartido",
        value: function publicarCompartido() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.boton = true;
                    _context5.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context5.sent;

                    if (info) {
                      console.log(this.publicacionc);
                      this.igtmApi.crearCompartida(info.token, {
                        etiquetas: this.etiquetadoscid,
                        comentario: this.texto,
                        publicacion: this.publicacionc
                      }).subscribe(function (data) {
                        console.log(data, 'respuesta');

                        if (data.exe) {
                          _this3.modalCtrl.dismiss({
                            recargo: true
                          });
                        } else {
                          _this3.toast.toastError('No se pudo compartir la publicación, inténtelo más tarde');
                        }
                      }, function (err) {
                        _this3.toast.toastError('No se pudo compartir la publicación, inténtelo más tarde');
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
                    console.log(usuario);

                    if (info) {
                      this.modalCtrl.dismiss();

                      if (info.nusuario === usuario.nombreusuario) {
                        this.router.navigate(['/perfil/', 's']);
                      } else {
                        this.router.navigate(['/visita/', usuario.nombreusuario, 's']);
                      }
                    }

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return IgtmplantillaPage;
    }();

    IgtmplantillaPage.ɵfac = function IgtmplantillaPage_Factory(t) {
      return new (t || IgtmplantillaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_3__["IGTMService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"]));
    };

    IgtmplantillaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IgtmplantillaPage,
      selectors: [["app-igtmplantilla"]],
      viewQuery: function IgtmplantillaPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
        }
      },
      inputs: {
        tipo: "tipo",
        archivos: "archivos",
        indice: "indice",
        info: "info",
        etiquetados: "etiquetados",
        publicacion: "publicacion",
        creador: "creador",
        comentarios: "comentarios",
        publicacionc: "publicacionc"
      },
      decls: 8,
      vars: 8,
      consts: [["class", "ion-no-border", 4, "ngIf"], [3, "color"], ["class", "etiquetar", 4, "ngIf"], ["class", "visualizador", 4, "ngIf"], ["class", "comentar", 4, "ngIf"], [4, "ngIf"], [1, "ion-no-border"], ["slot", "end"], [3, "click"], ["name", "close-outline", "slot", "icon-only"], [1, "etiquetar"], ["mode", "ios", "placeholder", "Buscar Usuario", 3, "ionChange"], [1, "divider"], [3, "click", 4, "ngFor", "ngForOf"], ["slot", "start"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [1, "visualizador"], [1, "cerrar"], ["lines", "none", 1, "transparente", "sinfondo"], [1, "cblanco"], ["color", "blanco", "name", "ellipsis-vertical-outline", "slot", "icon-only"], ["color", "blanco", "name", "close-outline", "slot", "icon-only"], ["class", "fullancho", "color", "dark", "mode", "ios", 3, "options", 4, "ngIf"], ["color", "dark", "mode", "ios", 1, "fullancho", 3, "options"], ["slide", ""], ["class", "diapo", 4, "ngFor", "ngForOf"], [1, "diapo"], ["width", "100%", 3, "src", 4, "ngIf"], [3, "url", 4, "ngIf"], ["width", "100%", 3, "src"], [3, "url"], [1, "darkgold"], ["color", "darkgold", 3, "click", 4, "ngFor", "ngForOf"], ["color", "darkgold", 3, "click"], [1, "comentar"], ["class", "tituloGrande", 4, "ngIf"], ["class", "sinfondo", "lines", "none", 4, "ngFor", "ngForOf"], [1, "tituloGrande"], ["lines", "none", 1, "sinfondo"], [1, "ion-text-wrap", "esp", "resp"], [1, "avatar", 3, "click"], [1, "info"], [1, "titulo"], [1, "respuesta", 3, "click"], ["class", "btn", 3, "click", 4, "ngIf"], ["class", "respuestas", 4, "ngIf"], [1, "btn", 3, "click"], [1, "respuestas"], [4, "ngFor", "ngForOf"], ["class", "etiquetadosc", 4, "ngIf"], ["mode", "ios", "placeholder", "Buscar usuario para etiquetarlo", 3, "ionChange"], ["class", "botonc", 4, "ngIf"], ["mode", "ios", 1, "sinfondo"], ["inputmode", "text", "maxlength", "120", "placeholder", "Escribe un comentario", 1, "comentario", 3, "autoGrow", "ionChange"], [1, "botonc"], ["mode", "ios", "shape", "round", "color", "success", 3, "click"], [1, "etiquetadosc"], ["class", "targe", 4, "ngFor", "ngForOf"], [1, "targe"], ["width", "100%", "height", "100%", 3, "src"], [1, "eliminar", 3, "click"], ["name", "crescent"], ["lines", "none", 1, "pie", "sinfondo"], ["inputmode", "text", "maxlength", "200", 1, "comentario", 3, "autofocus", "autoGrow", "placeholder", "value", "ionChange"], ["text", ""], ["color", "primary", 3, "disabled", "click"], ["name", "send-outline", "slot", "icon-only"]],
      template: function IgtmplantillaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, IgtmplantillaPage_ion_header_0_Template, 7, 2, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IgtmplantillaPage_div_2_Template, 5, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgtmplantillaPage_div_3_Template, 15, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IgtmplantillaPage_div_4_Template, 4, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IgtmplantillaPage_div_5_Template, 4, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IgtmplantillaPage_div_6_Template, 12, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IgtmplantillaPage_ion_footer_7_Template, 8, 5, "ion-footer", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "etiquetar" || ctx.tipo === "mencionar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "visualizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "etiquetados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "comentar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "compartir");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "comentar");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlide"], _Components_Media_video_video_component__WEBPACK_IMPORTED_MODULE_11__["VideoComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFooter"]],
      styles: ["ion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.visualizador[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.fullancho[_ngcontent-%COMP%] {\n  min-height: 100%;\n  height: 100vh;\n}\n\n.diapo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  color: #ffffff;\n  z-index: 100;\n}\n\n.cblanco[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.comentario[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #777777;\n}\n\n.esp[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\n.respuesta[_ngcontent-%COMP%] {\n  color: #0288D1;\n  padding: 5px 0;\n  width: 100%;\n}\n\n.respuesta[_ngcontent-%COMP%]:hover {\n  color: #015A8B;\n}\n\n.respuestas[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  width: 100%;\n}\n\n.resp[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.res[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.info[_ngcontent-%COMP%] {\n  width: calc(199% - 50px);\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: #777777;\n  opacity: 0.7;\n  margin-bottom: 10px;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 30px auto;\n  opacity: 0.5;\n  text-align: center;\n}\n\n.comentario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  margin-top: 15px;\n}\n\n.etiquetadosc[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.etiquetadosc[_ngcontent-%COMP%]   .targe[_ngcontent-%COMP%] {\n  width: calc(60px - 20px);\n  margin: 10px;\n  position: relative;\n}\n\n.etiquetadosc[_ngcontent-%COMP%]   .targe[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.etiquetadosc[_ngcontent-%COMP%]   .targe[_ngcontent-%COMP%]   .eliminar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 0px;\n  right: -15px;\n  border-radius: 100%;\n  background-color: #F3C5C1;\n  color: red;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.botonc[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9pZ3RtcGxhbnRpbGxhL0M6XFxNaW1vdG8vc3JjXFxhcHBcXFBhZ2VzXFxNb2RhbGVzXFxpZ3RtcGxhbnRpbGxhXFxpZ3RtcGxhbnRpbGxhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9pZ3RtcGxhbnRpbGxhL2lndG1wbGFudGlsbGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL01vZGFsZXMvaWd0bXBsYW50aWxsYS9pZ3RtcGxhbnRpbGxhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMsXHJcbmlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnZpc3VhbGl6YWRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZ1bGxhbmNobyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmRpYXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2VycmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNibGFuY28ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmVzcCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5yZXNwdWVzdGEge1xyXG4gICAgY29sb3I6ICMwMjg4RDE7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVzcHVlc3RhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDE1QThCO1xyXG59XHJcblxyXG4ucmVzcHVlc3RhcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlc3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnJlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICB3aWR0aDogY2FsYygxOTklIC0gNTBweCk7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvc2Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3NjIC50YXJnZSB7XHJcbiAgICB3aWR0aDogY2FsYyg2MHB4IC0gMjBweCk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvc2MgLnRhcmdlIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvc2MgLnRhcmdlIC5lbGltaW5hciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0M1QzE7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdG9uYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCJpb24tc2xpZGVzLFxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aXN1YWxpemFkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZnVsbGFuY2hvIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmRpYXBvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlcnJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY2JsYW5jbyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29tZW50YXJpbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmVzcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLnJlc3B1ZXN0YSB7XG4gIGNvbG9yOiAjMDI4OEQxO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNwdWVzdGE6aG92ZXIge1xuICBjb2xvcjogIzAxNUE4Qjtcbn1cblxuLnJlc3B1ZXN0YXMge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVzcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ucmVzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmluZm8ge1xuICB3aWR0aDogY2FsYygxOTklIC0gNTBweCk7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXR1bG9HcmFuZGUge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbWVudGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmV0aXF1ZXRhZG9zYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ldGlxdWV0YWRvc2MgLnRhcmdlIHtcbiAgd2lkdGg6IGNhbGMoNjBweCAtIDIwcHgpO1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmV0aXF1ZXRhZG9zYyAudGFyZ2UgaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5ldGlxdWV0YWRvc2MgLnRhcmdlIC5lbGltaW5hciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzQzVDMTtcbiAgY29sb3I6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3RvbmMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IgtmplantillaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-igtmplantilla',
          templateUrl: './igtmplantilla.page.html',
          styleUrls: ['./igtmplantilla.page.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_3__["IGTMService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"]
        }];
      }, {
        tipo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        archivos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        indice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        etiquetados: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        publicacion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        creador: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        comentarios: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        publicacionc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slide', {
            static: false
          }]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['text', {
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
//# sourceMappingURL=default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653-es5.js.map