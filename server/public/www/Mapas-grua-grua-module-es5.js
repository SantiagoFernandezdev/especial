function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Mapas-grua-grua-module"], {
  /***/
  "./src/app/pages/Mapas/grua/grua-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/Mapas/grua/grua-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: GruaPageRoutingModule */

  /***/
  function srcAppPagesMapasGruaGruaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruaPageRoutingModule", function () {
      return GruaPageRoutingModule;
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


    var _grua_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grua.page */
    "./src/app/pages/Mapas/grua/grua.page.ts");

    var routes = [{
      path: '',
      component: _grua_page__WEBPACK_IMPORTED_MODULE_2__["GruaPage"]
    }];

    var GruaPageRoutingModule = function GruaPageRoutingModule() {
      _classCallCheck(this, GruaPageRoutingModule);
    };

    GruaPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GruaPageRoutingModule
    });
    GruaPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GruaPageRoutingModule_Factory(t) {
        return new (t || GruaPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GruaPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruaPageRoutingModule, [{
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
  "./src/app/pages/Mapas/grua/grua.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/Mapas/grua/grua.module.ts ***!
    \*************************************************/

  /*! exports provided: GruaPageModule */

  /***/
  function srcAppPagesMapasGruaGruaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruaPageModule", function () {
      return GruaPageModule;
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


    var _grua_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grua-routing.module */
    "./src/app/pages/Mapas/grua/grua-routing.module.ts");
    /* harmony import */


    var _grua_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grua.page */
    "./src/app/pages/Mapas/grua/grua.page.ts");
    /* harmony import */


    var _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal-mapas/modal-mapas.page */
    "./src/app/pages/Mapas/modal-mapas/modal-mapas.page.ts");
    /* harmony import */


    var _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-mapas/modal-mapas.module */
    "./src/app/pages/Mapas/modal-mapas/modal-mapas.module.ts");

    var GruaPageModule = function GruaPageModule() {
      _classCallCheck(this, GruaPageModule);
    };

    GruaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GruaPageModule
    });
    GruaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GruaPageModule_Factory(t) {
        return new (t || GruaPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grua_routing_module__WEBPACK_IMPORTED_MODULE_4__["GruaPageRoutingModule"], _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_7__["ModalMapasPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GruaPageModule, {
        declarations: [_grua_page__WEBPACK_IMPORTED_MODULE_5__["GruaPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grua_routing_module__WEBPACK_IMPORTED_MODULE_4__["GruaPageRoutingModule"], _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_7__["ModalMapasPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_6__["ModalMapasPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grua_routing_module__WEBPACK_IMPORTED_MODULE_4__["GruaPageRoutingModule"], _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_7__["ModalMapasPageModule"]],
          declarations: [_grua_page__WEBPACK_IMPORTED_MODULE_5__["GruaPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Mapas/grua/grua.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/Mapas/grua/grua.page.ts ***!
    \***********************************************/

  /*! exports provided: GruaPage */

  /***/
  function srcAppPagesMapasGruaGruaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruaPage", function () {
      return GruaPage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Api/UsuariosLogin.service */
    "./src/app/providers/Api/UsuariosLogin.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../providers/Utilidades/LoadingService.service */
    "./src/app/providers/Utilidades/LoadingService.service.ts");
    /* harmony import */


    var _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../modal-mapas/modal-mapas.page */
    "./src/app/pages/Mapas/modal-mapas/modal-mapas.page.ts");

    var _c0 = ["mapa"];

    var GruaPage =
    /*#__PURE__*/
    function () {
      function GruaPage(alertCtrl, geoReferencia, usuaripService, almacenamiento, statusbar, router, toast, loading, modalCtrl) {
        _classCallCheck(this, GruaPage);

        this.alertCtrl = alertCtrl;
        this.geoReferencia = geoReferencia;
        this.usuaripService = usuaripService;
        this.almacenamiento = almacenamiento;
        this.statusbar = statusbar;
        this.router = router;
        this.toast = toast;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        this.lat = 0;
        this.lng = 0;
        this.mensaje = '';
        this.imagen = '';
      }

      _createClass(GruaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusbar.backgroundColorByHexString('#273238');
          this.llamarFoto();
          this.confirmarUbicacion();
        }
      }, {
        key: "confirmarUbicacion",
        value: function confirmarUbicacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Mensaje de la App',
                      message: 'Permitir compartir la ubciación para realizar esta acción',
                      backdropDismiss: false,
                      buttons: [{
                        role: 'cancel',
                        text: 'Cancelar',
                        handler: function handler() {
                          _this.toast.toastNotificacion('No se puede realizar la acción debido a no compartir la ubicación', 3000);

                          _this.router.navigate(['/central/menu/inicioMapa']);
                        }
                      }, {
                        text: 'Permitir',
                        handler: function handler() {
                          _this.calcular();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calcular",
        value: function calcular() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    console.log('entramos al click');
                    _context2.next = 4;
                    return this.geoReferencia.getCurrentPosition();

                  case 4:
                    data = _context2.sent;

                    if (data) {
                      console.log(data);
                      this.lat = data.coords.latitude;
                      this.lng = data.coords.longitude;
                      this.graficar();
                    }

                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](0);
                    this.mensaje = _context2.t0;

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 8]]);
          }));
        }
      }, {
        key: "llamarFoto",
        value: function llamarFoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

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
                      this.usuaripService.viewImagen(info.token).subscribe(function (url) {
                        // // console.log(url);
                        _this2.imagen = "https://motocaliapp.com/".concat(url.paquete);
                        console.log(_this2.imagen);
                      }, function (error) {// // console.log(error);
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
      }, {
        key: "graficar",
        value: function graficar() {
          mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA';
          var mapa = new mapboxgl.Map({
            container: this.mapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.lng, this.lat],
            zoom: 15
          });
          mapa.addControl(new mapboxgl.NavigationControl());
          var el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundImage = 'url(' + this.imagen + ')';
          el.style.backgroundSize = '100%';
          el.style.width = 50 + 'px';
          el.style.height = 50 + 'px';
          var marker = new mapboxgl.Marker({
            element: el,
            draggable: true
          }).setLngLat([this.lng, this.lat]).addTo(mapa);
          var el2 = document.createElement('div');
          el2.className = 'marker';
          el2.style.backgroundImage = 'url(' + this.imagen + ')';
          el2.style.backgroundSize = '100%';
          el2.style.width = 50 + 'px';
          el2.style.height = 50 + 'px';
          marker.on('dragend', function () {
            var lngLat = marker.getLngLat();
            console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
          });
          var marker2 = new mapboxgl.Marker({
            element: el2,
            draggable: true
          }).setLngLat([-76.49279796685475, 3.4727944759127922]).addTo(mapa);
          marker2.on('dragend', function () {
            var lngLat = marker2.getLngLat();
            console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
          });
        }
      }, {
        key: "modal",
        value: function modal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_10__["ModalMapasPage"],
                      componentProps: {}
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.statusbar.backgroundColorByHexString('#777777');
        }
      }]);

      return GruaPage;
    }();

    GruaPage.ɵfac = function GruaPage_Factory(t) {
      return new (t || GruaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]));
    };

    GruaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GruaPage,
      selectors: [["app-grua"]],
      viewQuery: function GruaPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapa = _t.first);
        }
      },
      decls: 11,
      vars: 0,
      consts: [["color", "oscuro"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/menu/inicioMapa"], ["slot", "end"], [3, "click"], ["name", "add-outline", "slot", "icon-only"], [1, "mapa"], ["mapa", ""]],
      template: function GruaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sistema de Gr\xFAa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GruaPage_Template_ion_button_click_6_listener() {
            return ctx.modal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]],
      styles: [".mapa[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvTWFwYXMvZ3J1YS9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcTWFwYXNcXGdydWFcXGdydWEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9NYXBhcy9ncnVhL2dydWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvTWFwYXMvZ3J1YS9ncnVhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufSIsIi5tYXBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GruaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-grua',
          templateUrl: './grua.page.html',
          styleUrls: ['./grua.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
        }, {
          type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"]
        }, {
          type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      }, {
        mapa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mapa']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=Mapas-grua-grua-module-es5.js.map