function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-solicitudes-solicitudes-module"], {
  /***/
  "./src/app/pages/usuario/solicitudes/solicitudes-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/usuario/solicitudes/solicitudes-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SolicitudesPageRoutingModule */

  /***/
  function srcAppPagesUsuarioSolicitudesSolicitudesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudesPageRoutingModule", function () {
      return SolicitudesPageRoutingModule;
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


    var _solicitudes_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./solicitudes.page */
    "./src/app/pages/usuario/solicitudes/solicitudes.page.ts");

    var routes = [{
      path: '',
      component: _solicitudes_page__WEBPACK_IMPORTED_MODULE_2__["SolicitudesPage"]
    }];

    var SolicitudesPageRoutingModule = function SolicitudesPageRoutingModule() {
      _classCallCheck(this, SolicitudesPageRoutingModule);
    };

    SolicitudesPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SolicitudesPageRoutingModule
    });
    SolicitudesPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SolicitudesPageRoutingModule_Factory(t) {
        return new (t || SolicitudesPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SolicitudesPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolicitudesPageRoutingModule, [{
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
  "./src/app/pages/usuario/solicitudes/solicitudes.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/usuario/solicitudes/solicitudes.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SolicitudesPageModule */

  /***/
  function srcAppPagesUsuarioSolicitudesSolicitudesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudesPageModule", function () {
      return SolicitudesPageModule;
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


    var _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./solicitudes-routing.module */
    "./src/app/pages/usuario/solicitudes/solicitudes-routing.module.ts");
    /* harmony import */


    var _solicitudes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./solicitudes.page */
    "./src/app/pages/usuario/solicitudes/solicitudes.page.ts");

    var SolicitudesPageModule = function SolicitudesPageModule() {
      _classCallCheck(this, SolicitudesPageModule);
    };

    SolicitudesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SolicitudesPageModule
    });
    SolicitudesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SolicitudesPageModule_Factory(t) {
        return new (t || SolicitudesPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_4__["SolicitudesPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SolicitudesPageModule, {
        declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_4__["SolicitudesPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolicitudesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_4__["SolicitudesPageRoutingModule"]],
          declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/usuario/solicitudes/solicitudes.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/usuario/solicitudes/solicitudes.page.ts ***!
    \***************************************************************/

  /*! exports provided: SolicitudesPage */

  /***/
  function srcAppPagesUsuarioSolicitudesSolicitudesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudesPage", function () {
      return SolicitudesPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/providers/Api/Seguimiento.service */
    "./src/app/providers/Api/Seguimiento.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/cargas/usuarios.service */
    "./src/app/providers/cargas/usuarios.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SolicitudesPage_ion_list_8_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-avatar", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolicitudesPage_ion_list_8_ion_item_1_Template_ion_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352);

          var solicitud_r349 = ctx.$implicit;
          var i_r350 = ctx.index;

          var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r351.aceptar(solicitud_r349, i_r350);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Aceptar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolicitudesPage_ion_list_8_ion_item_1_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352);

          var solicitud_r349 = ctx.$implicit;
          var i_r350 = ctx.index;

          var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r353.eliminar(solicitud_r349, i_r350);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var solicitud_r349 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", solicitud_r349.imagen, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](solicitud_r349.usuarioEmisor.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", solicitud_r349.usuarioEmisor.nombreusuario, "");
      }
    }

    function SolicitudesPage_ion_list_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolicitudesPage_ion_list_8_ion_item_1_Template, 14, 3, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@solicitudes", ctx_r347.seguimientos.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r347.seguimientos);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "hauto centrar": a0
      };
    };

    var SolicitudesPage =
    /*#__PURE__*/
    function () {
      function SolicitudesPage(apiSeguimiento, almacenamiento, toastUtilidad, cargarElementos) {
        var _this = this;

        _classCallCheck(this, SolicitudesPage);

        this.apiSeguimiento = apiSeguimiento;
        this.almacenamiento = almacenamiento;
        this.toastUtilidad = toastUtilidad;
        this.cargarElementos = cargarElementos;
        this.seguimientos = [];
        this.red = 'wifi';
        this.cargarElementos.$cargarRed.subscribe(function (red) {
          _this.red = red;

          if (_this.red !== 'none') {
            _this.arrancar();
          }
        });
      }

      _createClass(SolicitudesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (this.red !== 'none') {
            this.arrancar();
          }
        }
      }, {
        key: "arrancar",
        value: function arrancar() {
          var _this2 = this;

          this.almacenamiento.obtenerToken().then(function (info) {
            _this2.cancelSuscribe = _this2.apiSeguimiento.solicitudesRecibidas(info.token).subscribe(function (solicitudes) {
              _this2.seguimientos = [];
              console.log(solicitudes.response, 11);
              var data = solicitudes.response.SeguimientoData;

              if (data.length > 0) {
                data.forEach(function (item) {
                  if (item.usuarioEmisor.imagen.length > 0) {
                    item.imagen = item.usuarioEmisor.imagen[0].path;
                  } else {
                    item.imagen = '';
                  }

                  _this2.seguimientos.push(item);
                });
              }

              console.log(_this2.seguimientos, ' Seguimientos');
            }, function (err) {
              _this2.toastUtilidad.alertApplication('No se pudo aceptar la solicitud', false);
            });
          });
        }
      }, {
        key: "aceptar",
        value: function aceptar(solicitud, idx) {
          var _this3 = this;

          console.log('Datos del aceptar ', solicitud, idx);
          this.almacenamiento.obtenerToken().then(function (info) {
            _this3.apiSeguimiento.aceptarSolicitud(info.token, solicitud.usuarioEmisor._id).subscribe(function (seguimiento) {
              console.log(seguimiento, ' Solicitud aceptada');

              _this3.toastUtilidad.alertApplication('Solicitud aceptada', true);

              _this3.seguimientos.splice(idx, 1);
            }, function (err) {
              _this3.toastUtilidad.alertApplication('No se pudo aceptar la solicitud', false);
            });
          });
        }
      }, {
        key: "eliminar",
        value: function eliminar(seguimiento, idx) {
          var _this4 = this;

          this.almacenamiento.obtenerToken().then(function (info) {
            _this4.apiSeguimiento.cancelarSolicitud(info.token, seguimiento.usuarioEmisor._id, '0').subscribe(function () {
              _this4.seguimientos.splice(idx, 1);
            }, function (err) {
              _this4.toastUtilidad.alertApplication('No se pudo aceptar la solicitud', false);
            });
          });
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // tslint:disable-next-line:no-unused-expression
          this.cancelSuscribe.unsubscribe;
        }
      }]);

      return SolicitudesPage;
    }();

    SolicitudesPage.ɵfac = function SolicitudesPage_Factory(t) {
      return new (t || SolicitudesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_1__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["CargaElementosUsuariosService"]));
    };

    SolicitudesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolicitudesPage,
      selectors: [["app-solicitudes"]],
      decls: 9,
      vars: 5,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start", "defaultHref", "/central/menu/", "icon", "chevron-back-outline"], [1, "medium"], [1, "divider"], [1, "blanco", 3, "ngClass"], ["class", "blanco ", 4, "ngIf"], [1, "blanco"], ["lines", "none", "color", "blanco", 4, "ngFor", "ngForOf"], ["lines", "none", "color", "blanco"], ["slot", "start", 1, "avatar"], [3, "src"], [1, "ion-text-wrap"], [1, "small"], [1, "moto-padre"], ["color", "success", "shape", "round", "mode", "ios", 3, "click"], ["color", "light", "shape", "round", "mode", "ios", 3, "click"]],
      template: function SolicitudesPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SolicitudesPage_ion_list_8_Template, 2, 2, "ion-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("solicitudes de Seguimiento ", ctx.seguimientos.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.seguimientos.length === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seguimientos.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]],
      styles: [".avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.moto-padre[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.moto-padre[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: calc(50% - 2px);\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby9zb2xpY2l0dWRlcy9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcdXN1YXJpb1xcc29saWNpdHVkZXNcXHNvbGljaXR1ZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXN1YXJpby9zb2xpY2l0dWRlcy9zb2xpY2l0dWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c3VhcmlvL3NvbGljaXR1ZGVzL3NvbGljaXR1ZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5tb3RvLXBhZHJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tb3RvLXBhZHJlIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMnB4KTtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbn0iLCIuYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1vdG8tcGFkcmUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW90by1wYWRyZSBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMnB4KTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('solicitudes', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 0,
          transform: 'translateY(400px)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(300, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 1,
          transform: 'none'
        }))])], {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 1,
          transform: 'none'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(300, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }))])], {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolicitudesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-solicitudes',
          templateUrl: './solicitudes.page.html',
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('solicitudes', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0,
            transform: 'translateY(400px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(300, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1,
            transform: 'none'
          }))])], {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1,
            transform: 'none'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(300, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0,
            transform: 'translateY(-100%)'
          }))])], {
            optional: true
          })])])],
          styleUrls: ['./solicitudes.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_1__["ApiSeguimientoService"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["CargaElementosUsuariosService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=usuario-solicitudes-solicitudes-module-es5.js.map