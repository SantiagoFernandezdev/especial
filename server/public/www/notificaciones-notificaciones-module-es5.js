function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"], {
  /***/
  "./src/app/pages/notificaciones/notificaciones-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/notificaciones/notificaciones-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: NotificacionesPageRoutingModule */

  /***/
  function srcAppPagesNotificacionesNotificacionesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function () {
      return NotificacionesPageRoutingModule;
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


    var _notificaciones_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notificaciones.page */
    "./src/app/pages/notificaciones/notificaciones.page.ts");

    var routes = [{
      path: '',
      component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_2__["NotificacionesPage"]
    }];

    var NotificacionesPageRoutingModule = function NotificacionesPageRoutingModule() {
      _classCallCheck(this, NotificacionesPageRoutingModule);
    };

    NotificacionesPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotificacionesPageRoutingModule
    });
    NotificacionesPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotificacionesPageRoutingModule_Factory(t) {
        return new (t || NotificacionesPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificacionesPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificacionesPageRoutingModule, [{
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
  "./src/app/pages/notificaciones/notificaciones.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/notificaciones/notificaciones.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotificacionesPageModule */

  /***/
  function srcAppPagesNotificacionesNotificacionesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function () {
      return NotificacionesPageModule;
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


    var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notificaciones-routing.module */
    "./src/app/pages/notificaciones/notificaciones-routing.module.ts");
    /* harmony import */


    var _notificaciones_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notificaciones.page */
    "./src/app/pages/notificaciones/notificaciones.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var NotificacionesPageModule = function NotificacionesPageModule() {
      _classCallCheck(this, NotificacionesPageModule);
    };

    NotificacionesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotificacionesPageModule
    });
    NotificacionesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotificacionesPageModule_Factory(t) {
        return new (t || NotificacionesPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificacionesPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificacionesPageModule, {
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificacionesPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificacionesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificacionesPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/notificaciones/notificaciones.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/notificaciones/notificaciones.page.ts ***!
    \*************************************************************/

  /*! exports provided: NotificacionesPage */

  /***/
  function srcAppPagesNotificacionesNotificacionesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function () {
      return NotificacionesPage;
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
    /*! ../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/Api/UsuariosLogin.service */
    "./src/app/providers/Api/UsuariosLogin.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/Fechas/CambioUTC.pipe */
    "./src/app/pipes/Fechas/CambioUTC.pipe.ts");

    var _c0 = ["inifinito"];

    function NotificacionesPage_h3_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La bandeja de notificaciones est\xE1 vac\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function NotificacionesPage_ion_list_10_ion_item_1_ion_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 17);
      }

      if (rf & 2) {
        var notificacion_r738 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", notificacion_r738.imagen, "");
      }
    }

    function NotificacionesPage_ion_list_10_ion_item_1_ion_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 17);
      }

      if (rf & 2) {
        var notificacion_r738 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", notificacion_r738.rutaApp);
      }
    }

    function NotificacionesPage_ion_list_10_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r745 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificacionesPage_ion_list_10_ion_item_1_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r745);

          var notificacion_r738 = ctx.$implicit;

          var ctx_r744 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r744.navegar(notificacion_r738);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotificacionesPage_ion_list_10_ion_item_1_ion_img_2_Template, 1, 1, "ion-img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NotificacionesPage_ion_list_10_ion_item_1_ion_img_3_Template, 1, 1, "ion-img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "cambioUTC");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notificacion_r738 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", notificacion_r738.abierta ? "blanco" : "light");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notificacion_r738.cd);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !notificacion_r738.cd);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificacion_r738.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificacion_r738.mensaje);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, notificacion_r738.fechaCreado));
      }
    }

    function NotificacionesPage_ion_list_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotificacionesPage_ion_list_10_ion_item_1_Template, 13, 8, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r735 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r735.notificaciones);
      }
    }

    function NotificacionesPage_ion_infinite_scroll_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r748 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-infinite-scroll", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function NotificacionesPage_ion_infinite_scroll_11_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r748);

          var ctx_r747 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r747.loadData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-infinite-scroll-content", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var NotificacionesPage =
    /*#__PURE__*/
    function () {
      function NotificacionesPage(almacenamiento, usuarioApi, toastCtrl, router) {
        _classCallCheck(this, NotificacionesPage);

        this.almacenamiento = almacenamiento;
        this.usuarioApi = usuarioApi;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.notificaciones = [''];
        this.desde = 0;
        this.carga = false;
      }

      _createClass(NotificacionesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.inicio();
        }
      }, {
        key: "inicio",
        value: function inicio() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var login;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    login = _context.sent;

                    if (login) {
                      this.usuarioApi.traerMisNotificaciones(login.token, this.desde).subscribe(function (data) {
                        if (data.exe) {
                          data.response.forEach(function (item) {
                            if (item.usuarioCreador) {
                              item.cd = true;

                              if (item.usuarioCreador.imagen.length > 0) {
                                item.imagen = item.usuarioCreador.imagen[0].path;
                              }
                            } else {
                              item.cd = false;
                            }
                          });
                          _this.notificaciones = data.response;
                          _this.carga = true;
                        } else {
                          _this.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                        }
                      }, function (error) {
                        console.log(error);

                        _this.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
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
        key: "refrescando",
        value: function refrescando(event) {
          this.desde = 0;
          this.inicio().then(function () {
            event.detail.complete();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.desde = this.desde + 10;
                    console.log(this.desde);
                    _context2.next = 4;
                    return this.almacenamiento.obtenerToken();

                  case 4:
                    info = _context2.sent;

                    if (info) {
                      this.usuarioApi.traerMisNotificaciones(info.token, this.desde).subscribe(function (data) {
                        console.log(data);

                        if (data.exe) {
                          if (data.response.length > 0) {
                            data.response.forEach(function (item) {
                              if (item.usuarioCreador) {
                                item.cd = true;

                                if (item.usuarioCreador.imagen.length > 0) {
                                  item.imagen = item.usuarioCreador.imagen[0].path;
                                }
                              } else {
                                item.cd = false;
                              }

                              _this2.notificaciones.push(item);
                            });
                            event.target.complete();
                          } else {
                            event.target.disabled = true;
                            _this2.desde = 0;
                          }
                        } else {
                          _this2.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                        }
                      }, function (error) {
                        console.log(error);

                        _this2.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                      });
                    }

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "navegar",
        value: function navegar(noti) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

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
                      this.usuarioApi.ActualizarNotificaciones(info.token, noti._id).subscribe(function (data) {
                        if (data.exe) {
                          if (noti.accion.tipo === 'Seguimiento') {
                            _this3.router.navigate(['/central/menu/solicitudes']);
                          } else if (noti.accion.tipo === 'SeguimientoAceptado') {
                            _this3.router.navigate(['/central/buscar/perfil-visita/', noti.usuarioCreador.nombreusuario]);
                          } else if (noti.accion.tipo === 'Productos') {
                            _this3.router.navigate(['/central/menu/ivt-miinventario/', noti.accion.data.id, 'productos', noti.accion.data.id]);
                          } else if (noti.accion.tipo === 'SalidaIVT') {
                            _this3.router.navigate(['/central/menu/ivt-miinventario/', noti.accion.data.id, 'salidas', noti.accion.data.id, noti.accion.data.creador]);
                          } else if (noti.accion.tipo === 'EntradaIVT') {
                            _this3.router.navigate(['/central/menu/ivt-miinventario/', noti.accion.data.id, 'entradas', noti.accion.data.id]);
                          } else if (noti.accion.tipo === 'Publicacion') {
                            _this3.router.navigate(['/igtmpublic/', noti.accion.data.id]);
                          }
                        }
                      });
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return NotificacionesPage;
    }();

    NotificacionesPage.ɵfac = function NotificacionesPage_Factory(t) {
      return new (t || NotificacionesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    NotificacionesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotificacionesPage,
      selectors: [["app-notificaciones"]],
      viewQuery: function NotificacionesPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infinite = _t.first);
        }
      },
      decls: 12,
      vars: 3,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu/"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["class", "tituloGrande", 4, "ngIf"], ["class", "blanco ", 4, "ngIf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], [1, "tituloGrande"], [1, "blanco"], ["lines", "none", 3, "color", "click", 4, "ngFor", "ngForOf"], ["lines", "none", 3, "color", "click"], ["slot", "start", 1, "avatar"], [3, "src", 4, "ngIf"], [1, "ion-text-wrap"], [1, "ion-text-right"], [3, "src"], ["threshold", "100px", 3, "ionInfinite"], ["inifinito", ""], ["loadingSpinner", "bubbles", "loadingText", "Cargando entradas..."]],
      template: function NotificacionesPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Notificaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function NotificacionesPage_Template_ion_refresher_ionRefresh_7_listener($event) {
            return ctx.refrescando($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NotificacionesPage_h3_9_Template, 2, 0, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NotificacionesPage_ion_list_10_Template, 2, 1, "ion-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NotificacionesPage_ion_infinite_scroll_11_Template, 3, 0, "ion-infinite-scroll", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notificaciones.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notificaciones.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carga);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScrollContent"]],
      pipes: [_pipes_Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_8__["CambioUTCaLocalPipe"]],
      styles: [".avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.moto-padre[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2FjaW9uZXMvQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhY2lvbmVzXFxub3RpZmljYWNpb25lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYWNpb25lcy9ub3RpZmljYWNpb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubW90by1wYWRyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn0iLCIuYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1vdG8tcGFkcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXR1bG9HcmFuZGUge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgb3BhY2l0eTogMC41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificacionesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-notificaciones',
          templateUrl: './notificaciones.page.html',
          styleUrls: ['./notificaciones.page.scss']
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosLoginService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, {
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inifinito', {
            static: false
          }]
        }]
      });
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
          var _this4 = this;

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
                _this4.almacenamiento.terminarPartida().then(function () {
                  _this4.navCtrl.navigateRoot('/home');
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
          var _this5 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.exe) {
              res.response.exe = res.exe;
              res.response.token = res.token;
              return res.response;
            } else {
              return res;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this5.hanflerError(error);
          }));
        }
      }, {
        key: "usuario",
        value: function usuario(_usuario) {
          var _this6 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios/unico"), {
            buscar: _usuario
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this6.hanflerError(error);
          }));
        }
      }, {
        key: "iniciarPartida",
        value: function iniciarPartida(usuario, dispositivoID) {
          var _this7 = this;

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
            return _this7.hanflerError(error);
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
          var _this8 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/ver"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this8.hanflerError(error);
          }));
        }
      }, {
        key: "buscarUsuario",
        value: function buscarUsuario(termino, token) {
          var _this9 = this;

          var headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios/").concat(termino), headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this9.hanflerError(error);
          }));
        }
      }, {
        key: "buscarPerfilUsuario",
        value: function buscarPerfilUsuario(usuario, token) {
          var _this10 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/usuarios/perfil/").concat(usuario), HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this10.hanflerError(error);
          }));
        }
      }, {
        key: "traerMisNotificaciones",
        value: function traerMisNotificaciones(token, desde) {
          var _this11 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token,
              'x-desde': desde.toString()
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/notificaciones/misnotificaciones/"), HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this11.hanflerError(error);
          }));
        }
      }, {
        key: "notiCantidad",
        value: function notiCantidad(token) {
          var _this12 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/notificaciones/numero/"), HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this12.hanflerError(error);
          }));
        }
      }, {
        key: "ActualizarNotificaciones",
        value: function ActualizarNotificaciones(token, id) {
          var _this13 = this;

          var HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/notificaciones/misnotificaciones/cambiarestado/"), {
            id: id
          }, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this13.hanflerError(error);
          }));
        }
      }, {
        key: "listarPaises",
        value: function listarPaises() {
          var _this14 = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/paises")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this14.hanflerError(error);
          }));
        }
      }, {
        key: "listarCiudades",
        value: function listarCiudades(pais) {
          var _this15 = this;

          var headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'x-pais': pais
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/ciudad"), headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this15.hanflerError(error);
          }));
        }
      }, {
        key: "CodigoComprobar",
        value: function CodigoComprobar(data) {
          var _this16 = this;

          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/codigos"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this16.hanflerError(error);
          }));
        }
      }, {
        key: "EditarCodigo",
        value: function EditarCodigo(data) {
          var _this17 = this;

          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/codigos/cambiar"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this17.hanflerError(error);
          }));
        }
      }, {
        key: "negocios",
        value: function negocios() {
          var _this18 = this;

          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"], "/tiponegocio")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this18.hanflerError(error);
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
//# sourceMappingURL=notificaciones-notificaciones-module-es5.js.map