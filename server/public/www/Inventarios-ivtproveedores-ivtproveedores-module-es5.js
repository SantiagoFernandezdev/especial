function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtproveedores-ivtproveedores-module"], {
  /***/
  "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: IVTProveedoresPageRoutingModule */

  /***/
  function srcAppPagesInventariosIvtproveedoresIvtproveedoresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTProveedoresPageRoutingModule", function () {
      return IVTProveedoresPageRoutingModule;
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


    var _ivtproveedores_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ivtproveedores.page */
    "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.ts");

    var routes = [{
      path: '',
      component: _ivtproveedores_page__WEBPACK_IMPORTED_MODULE_2__["IVTProveedoresPage"]
    }];

    var IVTProveedoresPageRoutingModule = function IVTProveedoresPageRoutingModule() {
      _classCallCheck(this, IVTProveedoresPageRoutingModule);
    };

    IVTProveedoresPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IVTProveedoresPageRoutingModule
    });
    IVTProveedoresPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IVTProveedoresPageRoutingModule_Factory(t) {
        return new (t || IVTProveedoresPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTProveedoresPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTProveedoresPageRoutingModule, [{
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
  "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.module.ts ***!
    \***************************************************************************/

  /*! exports provided: IVTProveedoresPageModule */

  /***/
  function srcAppPagesInventariosIvtproveedoresIvtproveedoresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTProveedoresPageModule", function () {
      return IVTProveedoresPageModule;
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


    var _ivtproveedores_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ivtproveedores-routing.module */
    "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores-routing.module.ts");
    /* harmony import */


    var _ivtproveedores_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ivtproveedores.page */
    "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.ts");
    /* harmony import */


    var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ivt-modal/ivt-modal.page */
    "./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.ts");
    /* harmony import */


    var _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ivt-modal/ivt-modal.module */
    "./src/app/pages/Inventarios/ivt-modal/ivt-modal.module.ts");

    var IVTProveedoresPageModule = function IVTProveedoresPageModule() {
      _classCallCheck(this, IVTProveedoresPageModule);
    };

    IVTProveedoresPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IVTProveedoresPageModule
    });
    IVTProveedoresPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IVTProveedoresPageModule_Factory(t) {
        return new (t || IVTProveedoresPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtproveedores_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTProveedoresPageRoutingModule"], _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_7__["IvtModalPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTProveedoresPageModule, {
        declarations: [_ivtproveedores_page__WEBPACK_IMPORTED_MODULE_5__["IVTProveedoresPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtproveedores_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTProveedoresPageRoutingModule"], _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_7__["IvtModalPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTProveedoresPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__["IvtModalPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtproveedores_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTProveedoresPageRoutingModule"], _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_7__["IvtModalPageModule"]],
          declarations: [_ivtproveedores_page__WEBPACK_IMPORTED_MODULE_5__["IVTProveedoresPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.ts ***!
    \*************************************************************************/

  /*! exports provided: IVTProveedoresPage */

  /***/
  function srcAppPagesInventariosIvtproveedoresIvtproveedoresPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTProveedoresPage", function () {
      return IVTProveedoresPage;
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


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Api/Inventarios.service */
    "./src/app/providers/Api/Inventarios.service.ts");
    /* harmony import */


    var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ivt-modal/ivt-modal.page */
    "./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function IVTProveedoresPage_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No tiene proveedores registrados");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IVTProveedoresPage_div_13_ion_item_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-skeleton-text", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [1, 1, 1, 1, 1];
    };

    function IVTProveedoresPage_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IVTProveedoresPage_div_13_ion_item_2_Template, 5, 0, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function IVTProveedoresPage_ion_list_14_ion_item_sliding_1_strong_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proveedor_r908 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", proveedor_r908.telefono2, " ");
      }
    }

    function IVTProveedoresPage_ion_list_14_ion_item_sliding_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r913 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IVTProveedoresPage_ion_list_14_ion_item_sliding_1_strong_9_Template, 2, 1, "strong", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item-options", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTProveedoresPage_ion_list_14_ion_item_sliding_1_Template_ion_item_option_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r913);

          var proveedor_r908 = ctx.$implicit;
          var i_r909 = ctx.index;

          var ctx_r912 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r912.editar(proveedor_r908, i_r909);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTProveedoresPage_ion_list_14_ion_item_sliding_1_Template_ion_item_option_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r913);

          var proveedor_r908 = ctx.$implicit;
          var i_r909 = ctx.index;

          var ctx_r914 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r914.eliminar(proveedor_r908, i_r909);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proveedor_r908 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@salida", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", proveedor_r908.nombre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", proveedor_r908.telefono, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proveedor_r908.telefono2 !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proveedor_r908.correo);
      }
    }

    function IVTProveedoresPage_ion_list_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IVTProveedoresPage_ion_list_14_ion_item_sliding_1_Template, 18, 5, "ion-item-sliding", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r904 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r904.proveedores);
      }
    }

    var IVTProveedoresPage =
    /*#__PURE__*/
    function () {
      function IVTProveedoresPage(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, activeRoute) {
        _classCallCheck(this, IVTProveedoresPage);

        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.activeRoute = activeRoute;
        this.proveedores = [];
        this.load = false;
      }

      _createClass(IVTProveedoresPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.cargarProveedores();
        }
      }, {
        key: "refrescando",
        value: function refrescando(event) {
          this.cargarProveedores().then(function () {
            event.target.complete();
          }).catch(function () {
            return event.target.complete();
          });
        }
      }, {
        key: "cargarProveedores",
        value: function cargarProveedores() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

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
                      this.ivtApi.leerProveedor(info.token, this.activeRoute.snapshot.paramMap.get('id')).subscribe(function (data) {
                        if (data.exe) {
                          _this.proveedores = data.response;
                        } else {
                          _this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                        }
                      }, function (err) {
                        _this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
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
        key: "modal",
        value: function modal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal, cerrado;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_5__["IvtModalPage"],
                      componentProps: {
                        tipo: 'proveedores',
                        inventario: this.activeRoute.snapshot.paramMap.get('id')
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    _context2.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    cerrado = _context2.sent;

                    if (cerrado.data) {
                      if (cerrado.data.exe) {
                        this.cargarProveedores();
                      }
                    }

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "editar",
        value: function editar(proveedor, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: 'Editar Proveedor',
                      inputs: [{
                        type: 'text',
                        name: 'nombre',
                        placeholder: 'Escriba el nombre del proveedor',
                        value: proveedor.nombre
                      }, {
                        type: 'number',
                        name: 'tel1',
                        placeholder: 'Teléfono de contacto',
                        value: proveedor.telefono
                      }, {
                        type: 'number',
                        name: 'tel2',
                        placeholder: 'Teléfono de contacto adicional',
                        value: proveedor.telefono2
                      }, {
                        type: 'text',
                        name: 'correo',
                        placeholder: 'Correo electrónico de contacto',
                        value: proveedor.correo
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel'
                      }, {
                        text: 'Aceptar',
                        handler: function handler(data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
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
                                      // tslint:disable-next-line:max-line-length
                                      this.ivtApi.editarProveedor(info.token, {
                                        nombre: data.nombre,
                                        tel1: data.tel1,
                                        tel2: data.tel2,
                                        correo: data.correo,
                                        _id: proveedor._id
                                      }).subscribe(function (res) {
                                        if (res.exe) {
                                          _this3.toast.toastExitoso('Proveedor editado!');

                                          _this3.proveedores[i].nombre = res.response.nombre;
                                          _this3.proveedores[i].telefono = res.response.telefono;
                                          _this3.proveedores[i].telefono2 = res.response.telefono2;
                                          _this3.proveedores[i].correo = res.response.correo;
                                        } else {
                                          _this3.toast.toastError('No se pudo editar el proveedor, intentelo más tarde');
                                        }
                                      }, function (err) {
                                        _this3.toast.toastError('No se pudo editar el proveedor, intentelo más tarde');
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
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "eliminar",
        value: function eliminar(proveedor, i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context5.sent;

                    if (info) {
                      // tslint:disable-next-line:max-line-length
                      this.ivtApi.eliminarProveedor(info.token, proveedor._id).subscribe(function (res) {
                        if (res.exe) {
                          _this4.toast.toastExitoso('Proveedor eliminado!');

                          _this4.proveedores.splice(i, 1);
                        } else {
                          _this4.toast.toastError('No se pudo eliminar el proveedor, intentelo más tarde');
                        }
                      }, function (err) {
                        _this4.toast.toastError('No se pudo eliminar el proveedor, intentelo más tarde');
                      });
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return IVTProveedoresPage;
    }();

    IVTProveedoresPage.ɵfac = function IVTProveedoresPage_Factory(t) {
      return new (t || IVTProveedoresPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    IVTProveedoresPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IVTProveedoresPage,
      selectors: [["app-ivtproveedores"]],
      decls: 18,
      vars: 3,
      consts: [[1, "ion-no-border"], ["color", "success"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu/ivt-inicio"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["mode", "ios", "placeholder", "Buscar Proveedor"], [1, "divider", "light"], [1, "divider"], ["class", "cen", 4, "ngIf"], ["class", "carga", 4, "ngIf"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "success", 3, "click"], ["name", "add-outline"], [1, "cen"], ["src", "/assets/Proveedores.png", "width", "100px", "alt", ""], [1, "tituloGrande"], [1, "carga"], [4, "ngFor", "ngForOf"], ["slot", "start", "animated", "", 2, "width", "50px", "height", "50px"], ["animated", "", 2, "width", "50%", "height", "20px"], ["animated", "", 2, "width", "90%", "height", "20px"], ["src", "/assets/Proveedores.png"], [1, "verdei"], ["class", "verdei", 4, "ngIf"], [1, "rojoi"], ["side", "end"], ["color", "warning", 3, "click"], ["name", "pencil-outline", "slot", "icon-only"], ["color", "danger", 3, "click"], ["name", "trash-outline", "slot", "icon-only"]],
      template: function IVTProveedoresPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Proveedores");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function IVTProveedoresPage_Template_ion_refresher_ionRefresh_7_listener($event) {
            return ctx.refrescando($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-searchbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IVTProveedoresPage_div_12_Template, 4, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, IVTProveedoresPage_div_13_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, IVTProveedoresPage_ion_list_14_Template, 2, 1, "ion-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-fab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-fab-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTProveedoresPage_Template_ion_fab_button_click_16_listener() {
            return ctx.modal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proveedores.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proveedores.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"]],
      styles: [".cen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #1E8C4A;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: #C1302C;\n}\n\n.padreflex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.numero[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-right: 10px;\n}\n\nion-item-sliding[_ngcontent-%COMP%]:nth-child(odd)   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvSW52ZW50YXJpb3MvaXZ0cHJvdmVlZG9yZXMvQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXEludmVudGFyaW9zXFxpdnRwcm92ZWVkb3Jlc1xcaXZ0cHJvdmVlZG9yZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9JbnZlbnRhcmlvcy9pdnRwcm92ZWVkb3Jlcy9pdnRwcm92ZWVkb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSwrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvSW52ZW50YXJpb3MvaXZ0cHJvdmVlZG9yZXMvaXZ0cHJvdmVlZG9yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMUU4QzRBO1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucm9qb2kge1xyXG4gICAgY29sb3I6ICNDMTMwMkM7XHJcbn1cclxuXHJcbi5wYWRyZWZsZXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm51bWVybyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtLXNsaWRpbmc6bnRoLWNoaWxkKG9kZCkgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcbn0iLCIuY2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHVsb0dyYW5kZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVyZGVpIHtcbiAgY29sb3I6ICMxRThDNEE7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucm9qb2kge1xuICBjb2xvcjogI0MxMzAyQztcbn1cblxuLnBhZHJlZmxleCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5udW1lcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nOm50aC1jaGlsZChvZGQpIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('salida', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          transform: 'scale(1)',
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          transform: 'scale(0)',
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IVTProveedoresPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-ivtproveedores',
          templateUrl: './ivtproveedores.page.html',
          styleUrls: ['./ivtproveedores.page.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('salida', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            transform: 'scale(1)',
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            transform: 'scale(0)',
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]
        }, {
          type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__["InventariosService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Inventarios-ivtproveedores-ivtproveedores-module-es5.js.map