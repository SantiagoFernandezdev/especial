function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Facturas-factura-inicio-factura-inicio-module"], {
  /***/
  "./src/app/pages/Facturas/factura-inicio/factura-inicio-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: FacturaInicioPageRoutingModule */

  /***/
  function srcAppPagesFacturasFacturaInicioFacturaInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturaInicioPageRoutingModule", function () {
      return FacturaInicioPageRoutingModule;
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


    var _factura_inicio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./factura-inicio.page */
    "./src/app/pages/Facturas/factura-inicio/factura-inicio.page.ts");

    var routes = [{
      path: '',
      component: _factura_inicio_page__WEBPACK_IMPORTED_MODULE_2__["FacturaInicioPage"]
    }];

    var FacturaInicioPageRoutingModule = function FacturaInicioPageRoutingModule() {
      _classCallCheck(this, FacturaInicioPageRoutingModule);
    };

    FacturaInicioPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacturaInicioPageRoutingModule
    });
    FacturaInicioPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacturaInicioPageRoutingModule_Factory(t) {
        return new (t || FacturaInicioPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacturaInicioPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacturaInicioPageRoutingModule, [{
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
  "./src/app/pages/Facturas/factura-inicio/factura-inicio.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio.module.ts ***!
    \************************************************************************/

  /*! exports provided: FacturaInicioPageModule */

  /***/
  function srcAppPagesFacturasFacturaInicioFacturaInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturaInicioPageModule", function () {
      return FacturaInicioPageModule;
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


    var _factura_inicio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./factura-inicio-routing.module */
    "./src/app/pages/Facturas/factura-inicio/factura-inicio-routing.module.ts");
    /* harmony import */


    var _factura_inicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./factura-inicio.page */
    "./src/app/pages/Facturas/factura-inicio/factura-inicio.page.ts");

    var FacturaInicioPageModule = function FacturaInicioPageModule() {
      _classCallCheck(this, FacturaInicioPageModule);
    };

    FacturaInicioPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacturaInicioPageModule
    });
    FacturaInicioPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacturaInicioPageModule_Factory(t) {
        return new (t || FacturaInicioPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _factura_inicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaInicioPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacturaInicioPageModule, {
        declarations: [_factura_inicio_page__WEBPACK_IMPORTED_MODULE_5__["FacturaInicioPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _factura_inicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaInicioPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacturaInicioPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _factura_inicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["FacturaInicioPageRoutingModule"]],
          declarations: [_factura_inicio_page__WEBPACK_IMPORTED_MODULE_5__["FacturaInicioPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Facturas/factura-inicio/factura-inicio.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio.page.ts ***!
    \**********************************************************************/

  /*! exports provided: FacturaInicioPage */

  /***/
  function srcAppPagesFacturasFacturaInicioFacturaInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturaInicioPage", function () {
      return FacturaInicioPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/central/menu/factura/factura-configuracion"];
    };

    var _c1 = function _c1() {
      return ["/central/menu/factura/factura-nueva"];
    };

    var FacturaInicioPage =
    /*#__PURE__*/
    function () {
      function FacturaInicioPage() {
        _classCallCheck(this, FacturaInicioPage);
      }

      _createClass(FacturaInicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacturaInicioPage;
    }();

    FacturaInicioPage.ɵfac = function FacturaInicioPage_Factory(t) {
      return new (t || FacturaInicioPage)();
    };

    FacturaInicioPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacturaInicioPage,
      selectors: [["app-factura-inicio"]],
      decls: 25,
      vars: 4,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/menu"], [1, "botones"], ["mode", "ios", 1, "vd", 3, "routerLink"], [1, "p"], ["src", "/assets/ConfiguracionFactura.png", "width", "100px"], [1, "title"], ["color", "muro", "mode", "ios", 3, "routerLink"], ["src", "/assets/NuevaFactura.png", "width", "100px"]],
      template: function FacturaInicioPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Facturero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Configurar Facturas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configura la informaci\xF3n que sale en tu factura como la direcci\xF3n, el tel\xE9fono, el NIT y muchos m\xE1s detalles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Crear nueva factura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Puedes crear una factura directamente desde aqu\xED sin necesidad de tener previamente una hoja de vida del veh\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"]],
      styles: [".botones[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  margin: 10px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.p[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\nion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: calc(100% - 100px);\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\nion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 18px;\n  line-height: 1.7;\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n  padding: 5px;\n}\n\n.texto[_ngcontent-%COMP%] {\n  background-color: #FFFBE5;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n\n.vd[_ngcontent-%COMP%] {\n  background-color: #F4F4D9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRmFjdHVyYXMvZmFjdHVyYS1pbmljaW8vQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXEZhY3R1cmFzXFxmYWN0dXJhLWluaWNpb1xcZmFjdHVyYS1pbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9GYWN0dXJhcy9mYWN0dXJhLWluaWNpby9mYWN0dXJhLWluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ZhY3R1cmFzL2ZhY3R1cmEtaW5pY2lvL2ZhY3R1cmEtaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbmVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi5wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaW9uLWNhcmQgLnRpdGxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQgcCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RDkgIWltcG9ydGFudDtcclxufSIsIi5ib3RvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgbWFyZ2luOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWNhcmQgLnRpdGxlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24tY2FyZCBwIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50ZXh0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRTU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RDkgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacturaInicioPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-factura-inicio',
          templateUrl: './factura-inicio.page.html',
          styleUrls: ['./factura-inicio.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Facturas-factura-inicio-factura-inicio-module-es5.js.map