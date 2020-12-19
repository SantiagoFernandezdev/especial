function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtempleados-ivtempleados-module"], {
  /***/
  "./src/app/pages/Inventarios/ivtempleados/ivtempleados-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: IVTempleadosPageRoutingModule */

  /***/
  function srcAppPagesInventariosIvtempleadosIvtempleadosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTempleadosPageRoutingModule", function () {
      return IVTempleadosPageRoutingModule;
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


    var _ivtempleados_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ivtempleados.page */
    "./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.ts");

    var routes = [{
      path: '',
      component: _ivtempleados_page__WEBPACK_IMPORTED_MODULE_2__["IVTempleadosPage"]
    }];

    var IVTempleadosPageRoutingModule = function IVTempleadosPageRoutingModule() {
      _classCallCheck(this, IVTempleadosPageRoutingModule);
    };

    IVTempleadosPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IVTempleadosPageRoutingModule
    });
    IVTempleadosPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IVTempleadosPageRoutingModule_Factory(t) {
        return new (t || IVTempleadosPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTempleadosPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTempleadosPageRoutingModule, [{
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
  "./src/app/pages/Inventarios/ivtempleados/ivtempleados.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados.module.ts ***!
    \***********************************************************************/

  /*! exports provided: IVTempleadosPageModule */

  /***/
  function srcAppPagesInventariosIvtempleadosIvtempleadosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTempleadosPageModule", function () {
      return IVTempleadosPageModule;
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


    var _ivtempleados_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ivtempleados-routing.module */
    "./src/app/pages/Inventarios/ivtempleados/ivtempleados-routing.module.ts");
    /* harmony import */


    var _ivtempleados_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ivtempleados.page */
    "./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.ts");

    var IVTempleadosPageModule = function IVTempleadosPageModule() {
      _classCallCheck(this, IVTempleadosPageModule);
    };

    IVTempleadosPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IVTempleadosPageModule
    });
    IVTempleadosPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IVTempleadosPageModule_Factory(t) {
        return new (t || IVTempleadosPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtempleados_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTempleadosPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTempleadosPageModule, {
        declarations: [_ivtempleados_page__WEBPACK_IMPORTED_MODULE_5__["IVTempleadosPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtempleados_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTempleadosPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTempleadosPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ivtempleados_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTempleadosPageRoutingModule"]],
          declarations: [_ivtempleados_page__WEBPACK_IMPORTED_MODULE_5__["IVTempleadosPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.ts ***!
    \*********************************************************************/

  /*! exports provided: IVTempleadosPage */

  /***/
  function srcAppPagesInventariosIvtempleadosIvtempleadosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IVTempleadosPage", function () {
      return IVTempleadosPage;
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


    var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/Api/Inventarios.service */
    "./src/app/providers/Api/Inventarios.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Utilidades/ToastService.service */
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

    function IVTempleadosPage_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No tiene empleados registrados");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IVTempleadosPage_div_13_ion_item_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-skeleton-text", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [1, 1, 1, 1, 1];
    };

    function IVTempleadosPage_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IVTempleadosPage_div_13_ion_item_2_Template, 5, 0, "ion-item", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function IVTempleadosPage_ion_list_14_ion_item_sliding_10_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var empleado_r898 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cargo: ", empleado_r898.cargo, "");
      }
    }

    function IVTempleadosPage_ion_list_14_ion_item_sliding_10_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var empleado_r898 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Al\xEDas: ", empleado_r898.alias, "");
      }
    }

    function IVTempleadosPage_ion_list_14_ion_item_sliding_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r904 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, IVTempleadosPage_ion_list_14_ion_item_sliding_10_div_10_Template, 2, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, IVTempleadosPage_ion_list_14_ion_item_sliding_10_div_11_Template, 2, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-checkbox", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IVTempleadosPage_ion_list_14_ion_item_sliding_10_Template_ion_checkbox_ionChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r904);

          var ctx_r903 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r903.marcando($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var empleado_r898 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", empleado_r898.usuario.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empleado_r898.usuario.nombrecompleto);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", empleado_r898.usuario.nombreusuario, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", empleado_r898.cargo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", empleado_r898.alias);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", empleado_r898.usuario._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", empleado_r898.checked);
      }
    }

    function IVTempleadosPage_ion_list_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Registrados");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, IVTempleadosPage_ion_list_14_ion_item_sliding_10_Template, 13, 7, "ion-item-sliding", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r894 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r894.empleados.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r894.empleados);
      }
    }

    var IVTempleadosPage =
    /*#__PURE__*/
    function () {
      function IVTempleadosPage(almacenamiento, IVTapi, toast, active, loading) {
        _classCallCheck(this, IVTempleadosPage);

        this.almacenamiento = almacenamiento;
        this.IVTapi = IVTapi;
        this.toast = toast;
        this.active = active;
        this.loading = loading;
        this.empleados = [];
        this.buscados = [];
        this.accesos = [];
        this.load = false;
        this.marcar = false;
        this.id = '';
        this.ivt = {};
        this.cargauno = false;
      }

      _createClass(IVTempleadosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.id = this.active.snapshot.paramMap.get('id');
                    _context.next = 3;
                    return this.traerEmpleados();

                  case 3:
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
          this.traerEmpleados().then(function () {
            event.target.complete();
          }).catch(function () {
            event.target.complete();
          });
        }
      }, {
        key: "traerEmpleados",
        value: function traerEmpleados() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var info;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.load = true;
                    _context2.next = 3;
                    return this.almacenamiento.obtenerToken();

                  case 3:
                    info = _context2.sent;

                    if (info) {
                      this.IVTapi.leerEmpleados(info.token).subscribe(function (data) {
                        console.log(data);

                        if (data.exe) {
                          var arr = [];
                          data.response.forEach(function (item) {
                            if (item.usuario.imagen.length > 0) {
                              item.usuario.imagen = "https://motocaliapp.com/".concat(item.usuario.imagen[0].path);
                            } else {
                              item.usuario.imagen = '/assets/notfound.png';
                            }
                          });
                          arr = data.response;
                          console.log(_this.id);

                          _this.IVTapi.leerInventario(info.token, _this.id).subscribe(function (re) {
                            console.log(re, 'mio');

                            if (re.exe) {
                              _this.ivt = re.response;
                              arr.forEach(function (item) {
                                if (re.response.accesos.find(function (acceso) {
                                  return acceso === item.usuario._id;
                                })) {
                                  item.checked = true;
                                }

                                console.log('bien');
                              });
                              _this.cargauno = true;
                              console.log(_this.cargauno);
                              _this.empleados = arr;
                            }
                          });
                        } else {
                          _this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                        }

                        _this.load = false;
                      }, function (err) {
                        _this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                      });
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "marcando",
        value: function marcando(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            var loading, info;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log(event.detail);

                    if (!this.cargauno) {
                      _context5.next = 11;
                      break;
                    }

                    _context5.next = 4;
                    return this.loading.create({
                      message: 'Procesando información...',
                      translucent: true,
                      mode: 'ios'
                    });

                  case 4:
                    loading = _context5.sent;
                    _context5.next = 7;
                    return loading.present();

                  case 7:
                    _context5.next = 9;
                    return this.almacenamiento.obtenerToken();

                  case 9:
                    info = _context5.sent;

                    if (info) {
                      // tslint:disable-next-line:max-line-length
                      this.IVTapi.editarAcceso(info.token, {
                        id: event.detail.value,
                        estado: event.detail.checked,
                        _id: this.id
                      }).subscribe(function (re) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (re.exe) {}

                                  _context3.next = 3;
                                  return loading.dismiss();

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return loading.dismiss();

                                case 2:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));
                      });
                    }

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log('sale');
          this.cargauno = false;
          this.empleados = [];
        }
      }]);

      return IVTempleadosPage;
    }();

    IVTempleadosPage.ɵfac = function IVTempleadosPage_Factory(t) {
      return new (t || IVTempleadosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_3__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]));
    };

    IVTempleadosPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IVTempleadosPage,
      selectors: [["app-ivtempleados"]],
      decls: 15,
      vars: 3,
      consts: [[1, "ion-no-border"], ["color", "success"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu/ivt-inicio"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["mode", "ios", "placeholder", "Buscar Empleado"], [1, "divider", "light"], [1, "divider"], ["class", "cen", 4, "ngIf"], ["class", "carga", 4, "ngIf"], [4, "ngIf"], [1, "cen"], ["src", "/assets/Empleadoslista.png", "width", "100px", "alt", ""], [1, "tituloGrande"], [1, "carga"], [4, "ngFor", "ngForOf"], ["slot", "start", "animated", "", 2, "width", "50px", "height", "50px"], ["animated", "", 2, "width", "50%", "height", "20px"], ["animated", "", 2, "width", "90%", "height", "20px"], ["lines", "none", "color", "muro"], [1, "padreflex"], [1, "titulo"], [1, "numero"], ["src", "/assets/Empleadoslista.png", "width", "25px", "height", "25px", "alt", ""], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [1, "verdei"], ["class", "rojoi", 4, "ngIf"], ["slot", "end", "color", "danger", 3, "checked", "value", "ionChange"], [1, "rojoi"]],
      template: function IVTempleadosPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mis Empleados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function IVTempleadosPage_Template_ion_refresher_ionRefresh_7_listener($event) {
            return ctx.refrescando($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-searchbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IVTempleadosPage_div_12_Template, 4, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, IVTempleadosPage_div_13_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, IVTempleadosPage_ion_list_14_Template, 11, 2, "ion-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.empleados.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.empleados.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"]],
      styles: [".cen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #1E8C4A;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: #C1302C;\n}\n\n.padreflex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.numero[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvSW52ZW50YXJpb3MvaXZ0ZW1wbGVhZG9zL0M6XFxNaW1vdG8vc3JjXFxhcHBcXHBhZ2VzXFxJbnZlbnRhcmlvc1xcaXZ0ZW1wbGVhZG9zXFxpdnRlbXBsZWFkb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9JbnZlbnRhcmlvcy9pdnRlbXBsZWFkb3MvaXZ0ZW1wbGVhZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ludmVudGFyaW9zL2l2dGVtcGxlYWRvcy9pdnRlbXBsZWFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMUU4QzRBO1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucm9qb2kge1xyXG4gICAgY29sb3I6ICNDMTMwMkM7XHJcbn1cclxuXHJcbi5wYWRyZWZsZXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm51bWVybyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iLCIuY2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHVsb0dyYW5kZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVyZGVpIHtcbiAgY29sb3I6ICMxRThDNEE7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucm9qb2kge1xuICBjb2xvcjogI0MxMzAyQztcbn1cblxuLnBhZHJlZmxleCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5udW1lcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IVTempleadosPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-ivtempleados',
          templateUrl: './ivtempleados.page.html',
          styleUrls: ['./ivtempleados.page.scss']
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_3__["InventariosService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Inventarios-ivtempleados-ivtempleados-module-es5.js.map