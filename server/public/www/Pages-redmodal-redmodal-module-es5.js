function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-redmodal-redmodal-module"], {
  /***/
  "./src/app/Pages/redmodal/redmodal-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/redmodal/redmodal-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RedmodalPageRoutingModule */

  /***/
  function srcAppPagesRedmodalRedmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedmodalPageRoutingModule", function () {
      return RedmodalPageRoutingModule;
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


    var _redmodal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./redmodal.page */
    "./src/app/Pages/redmodal/redmodal.page.ts");

    var routes = [{
      path: '',
      component: _redmodal_page__WEBPACK_IMPORTED_MODULE_2__["RedmodalPage"]
    }];

    var RedmodalPageRoutingModule = function RedmodalPageRoutingModule() {
      _classCallCheck(this, RedmodalPageRoutingModule);
    };

    RedmodalPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RedmodalPageRoutingModule
    });
    RedmodalPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RedmodalPageRoutingModule_Factory(t) {
        return new (t || RedmodalPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RedmodalPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedmodalPageRoutingModule, [{
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
  "./src/app/Pages/redmodal/redmodal.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/Pages/redmodal/redmodal.module.ts ***!
    \***************************************************/

  /*! exports provided: RedmodalPageModule */

  /***/
  function srcAppPagesRedmodalRedmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedmodalPageModule", function () {
      return RedmodalPageModule;
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


    var _redmodal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./redmodal-routing.module */
    "./src/app/Pages/redmodal/redmodal-routing.module.ts");
    /* harmony import */


    var _redmodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./redmodal.page */
    "./src/app/Pages/redmodal/redmodal.page.ts");

    var RedmodalPageModule = function RedmodalPageModule() {
      _classCallCheck(this, RedmodalPageModule);
    };

    RedmodalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RedmodalPageModule
    });
    RedmodalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RedmodalPageModule_Factory(t) {
        return new (t || RedmodalPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _redmodal_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedmodalPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RedmodalPageModule, {
        declarations: [_redmodal_page__WEBPACK_IMPORTED_MODULE_5__["RedmodalPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _redmodal_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedmodalPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedmodalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _redmodal_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedmodalPageRoutingModule"]],
          declarations: [_redmodal_page__WEBPACK_IMPORTED_MODULE_5__["RedmodalPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/redmodal/redmodal.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/Pages/redmodal/redmodal.page.ts ***!
    \*************************************************/

  /*! exports provided: RedmodalPage */

  /***/
  function srcAppPagesRedmodalRedmodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedmodalPage", function () {
      return RedmodalPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RedmodalPage =
    /*#__PURE__*/
    function () {
      function RedmodalPage() {
        _classCallCheck(this, RedmodalPage);
      }

      _createClass(RedmodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RedmodalPage;
    }();

    RedmodalPage.ɵfac = function RedmodalPage_Factory(t) {
      return new (t || RedmodalPage)();
    };

    RedmodalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RedmodalPage,
      selectors: [["app-redmodal"]],
      decls: 5,
      vars: 0,
      template: function RedmodalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Redmodal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3JlZG1vZGFsL3JlZG1vZGFsLnBhZ2Uuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedmodalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-redmodal',
          templateUrl: './redmodal.page.html',
          styleUrls: ['./redmodal.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Pages-redmodal-redmodal-module-es5.js.map