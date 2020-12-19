function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/Components/Media/video/video.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/Media/video/video.component.ts ***!
    \***********************************************************/

  /*! exports provided: VideoComponent */

  /***/
  function srcAppComponentsMediaVideoVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoComponent", function () {
      return VideoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var _c0 = ["video"];
    var _c1 = ["range"];

    function VideoComponent_ion_chip_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-chip", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-spinner", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando Video...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VideoComponent_div_5_ion_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_div_5_ion_button_2_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r340);

          var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r339.play();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VideoComponent_div_5_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_div_5_ion_button_3_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r341.pause();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VideoComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoComponent_div_5_ion_button_2_Template, 2, 0, "ion-button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideoComponent_div_5_ion_button_3_Template, 2, 0, "ion-button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-range", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function VideoComponent_div_5_Template_ion_range_ionChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344);

          var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r343.progreso($event);
        })("ionFocus", function VideoComponent_div_5_Template_ion_range_ionFocus_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344);

          var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r345.foco($event);
        })("ionBlur", function VideoComponent_div_5_Template_ion_range_ionBlur_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344);

          var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r346.foco($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r335.paused);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r335.paused);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r335.currProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r335.currentt);
      }
    }

    var VideoComponent =
    /*#__PURE__*/
    function () {
      function VideoComponent() {
        _classCallCheck(this, VideoComponent);

        this.paused = true;
        this.currProgress = 0;
        this.slideOpts = {
          zoom: {
            maxRatio: 3,
            minRatio: 1,
            toggle: true
          }
        };
        this.focus = false;
        this.progress = 0;
        this.value = 0;
        this.bandera = true;
        this.carga = true;
        this.mostrar = false;
      }

      _createClass(VideoComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.current();
          console.log(this.url, ' archivo');
        }
      }, {
        key: "play",
        value: function play() {
          this.paused = true;
          this.bandera = true;
          this.focus = true;
          this.video.nativeElement.play();
        }
      }, {
        key: "pause",
        value: function pause() {
          // console.log('Hola pause')
          this.paused = false;
          this.bandera = false;
          this.focus = false;
          this.video.nativeElement.pause();
        }
      }, {
        key: "current",
        value: function current() {
          var _this = this;

          this.video.nativeElement.addEventListener('canplay', function () {
            _this.carga = false;

            if (_this.bandera) {
              _this.play();
            }
          });
          this.video.nativeElement.addEventListener('progress', function () {
            _this.carga = true;
          });
          this.video.nativeElement.addEventListener('timeupdate', function () {
            _this.currProgress = _this.video.nativeElement.currentTime * 100 / _this.video.nativeElement.duration;
            _this.currentt = Math.round(_this.video.nativeElement.currentTime);

            if (_this.currentt < 10) {
              _this.currentt = '0' + _this.currentt;
            }

            if (_this.video.nativeElement.currentTime === _this.video.nativeElement.duration) {
              _this.play();
            }
          });
        }
      }, {
        key: "toggle",
        value: function toggle() {
          console.log(this.bandera, this.focus);

          if (this.bandera) {
            this.mostrar = true;
            this.bandera = false;
            this.pause();
          } else {
            this.mostrar = false; // console.log(this.focus);

            if (this.focus) {
              this.pause();
            } else {
              this.play();
            }
          }
        }
      }, {
        key: "progreso",
        value: function progreso(event) {
          this.progress = event.detail.value;

          if (this.focus) {
            this.play();
            this.focus = false;
          }

          this.video.nativeElement.currentTime = Number((this.video.nativeElement.duration * (event.detail.value / 100)).toFixed(6));
        }
      }, {
        key: "foco",
        value: function foco(e) {
          this.bandera = true;
          this.focus = true;
          this.pause();
        }
      }, {
        key: "onProgress",
        value: function onProgress() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.video.nativeElement.pause();
          console.log('Destrucción');
        }
      }]);

      return VideoComponent;
    }();

    VideoComponent.ɵfac = function VideoComponent_Factory(t) {
      return new (t || VideoComponent)();
    };

    VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoComponent,
      selectors: [["app-video"]],
      viewQuery: function VideoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.range = _t.first);
        }
      },
      inputs: {
        url: "url"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "reproductor"], [1, "video", 3, "click"], ["poster", "/assets/Video.png", 3, "src"], ["video", ""], ["class", "cargando", "color", "success", 4, "ngIf"], ["class", "controles", 4, "ngIf"], ["color", "success", 1, "cargando"], ["name", "crescent"], [1, "controles"], [1, "botones"], ["fill", "clear", "color", "blanco", "mode", "ios", 3, "click", 4, "ngIf"], [1, "volumen"], ["debounce", "500", "min", "0", "max", "100", "color", "success", 3, "value", "ionChange", "ionFocus", "ionBlur"], ["range", ""], [1, "tiempo"], ["fill", "clear", "color", "blanco", "mode", "ios", 3, "click"], ["name", "play-outline", "slot", "icon-only"], ["name", "pause-outline", "slot", "icon-only"]],
      template: function VideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_div_click_1_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoComponent_ion_chip_4_Template, 3, 0, "ion-chip", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoComponent_div_5_Template, 10, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]],
      styles: [".reproductor[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.cargando[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 200px;\n  bottom: 10px;\n  right: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 100;\n}\n\n.oculto[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.controles[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.01);\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n\n.botones[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.volumen[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  width: 60%;\n}\n\n.tiempo[_ngcontent-%COMP%] {\n  width: calc(100% - 80%);\n  color: #fff;\n  font-size: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-range[_ngcontent-%COMP%] {\n  --bar-height: 10px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 70px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9NZWRpYS92aWRlby9DOlxcTWltb3RvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxNZWRpYVxcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL01lZGlhL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBRUEseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTWVkaWEvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwcm9kdWN0b3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jYXJnYW5kbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5vY3VsdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvbnRyb2xlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnZvbHVtZW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4udGllbXBvIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tcmFuZ2Uge1xyXG4gICAgLS1iYXItaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxufSIsIi5yZXByb2R1Y3RvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jYXJnYW5kbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ub2N1bHRvIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNvbnRyb2xlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uYm90b25lcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52b2x1bWVuIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi50aWVtcG8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gODAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1yYW5nZSB7XG4gIC0tYmFyLWhlaWdodDogMTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('entry', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('50ms')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video',
          templateUrl: './video.component.html',
          styleUrls: ['./video.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('entry', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('50ms')])])]
        }]
      }], function () {
        return [];
      }, {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        video: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['video', {
            static: true
          }]
        }],
        range: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['range', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/Menu/menuComponent.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/Components/Menu/menuComponent.component.ts ***!
    \************************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/Utilidades/LoadingService.service */
    "./src/app/providers/Utilidades/LoadingService.service.ts");
    /* harmony import */


    var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/Api/Seguimiento.service */
    "./src/app/providers/Api/Seguimiento.service.ts");
    /* harmony import */


    var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/cargas/usuarios.service */
    "./src/app/providers/cargas/usuarios.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../providers/Conexiones/Conexion.service */
    "./src/app/providers/Conexiones/Conexion.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_ion_badge_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r327.cantidadSeguimiento);
      }
    }

    function MenuComponent_ion_icon_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 18);
      }
    }

    function MenuComponent_ion_icon_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 18);
      }
    }

    function MenuComponent_ion_icon_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 18);
      }
    }

    function MenuComponent_ion_icon_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 18);
      }
    }

    function MenuComponent_ion_icon_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 18);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "opacity": a0
      };
    };

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(almacenamiento, loading, toastService, navCtrl, apiSeguimiento, cargaElementos, router, menuCtrl, conexion) {
        var _this2 = this;

        _classCallCheck(this, MenuComponent);

        this.almacenamiento = almacenamiento;
        this.loading = loading;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.apiSeguimiento = apiSeguimiento;
        this.cargaElementos = cargaElementos;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.conexion = conexion;
        this.cantidadSeguimiento = 0;
        this.red = 'wifi';
        this.cargaElementos.$seguimientoCantidad.subscribe(function (cant) {
          _this2.cantidadSeguimiento = cant;
          console.log(cant, 'Cantidad de seguimiento');
        });
        this.cargaElementos.$cargarRed.subscribe(function (red) {
          console.log('Menu suscrbiendose', red);
          _this2.red = red;
        });
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "terminar",
        value: function terminar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var estado;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.almacenamiento.terminarPartida();

                  case 3:
                    estado = _context2.sent;

                    if (estado) {
                      console.log(estado, 'ESTADO');
                      this.loading.cargaProcesos('Cerrando sesión, te esperamos pronto').then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee() {
                          var abandonarPartida;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.conexion.destruir();

                                case 2:
                                  abandonarPartida = _context.sent;

                                  if (abandonarPartida) {
                                    console.log(abandonarPartida);
                                    console.log('Abandonar partida');
                                    this.cargaElementos.cancelarSuscripciones();
                                    this.router.navigate(['/home']);
                                    this.loading.finalizarCargado();
                                  } else {
                                    console.log('Abandonar partida falló');
                                    this.loading.finalizarCargado();
                                  }

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                    } else {
                      console.log('MUY MAL');
                      this.router.navigate(['/home']);
                    }

                    _context2.next = 13;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);
                    this.router.navigate(['/home']);
                    this.loading.finalizarCargado();
                    _context2.next = 13;
                    return this.toastService.alertApplication('No se pudo cerrar la sesión', false);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 7]]);
          }));
        }
      }, {
        key: "ir",
        value: function ir() {
          var _this4 = this;

          this.menuCtrl.close('perfilMenu').then(function () {
            _this4.router.navigate(['/central/perfil/solicitudes']);
          });
        }
      }, {
        key: "citas",
        value: function citas() {
          var _this5 = this;

          this.menuCtrl.close('perfilMenu').then(function () {
            _this5.router.navigate(['/citas']);
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__["ConexionService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 45,
      vars: 21,
      consts: [["contentId", "perfil", "menuId", "perfilMenu", "side", "end"], [1, "ion-no-border"], ["color", "blanco"], [1, "blanco"], ["color", "blanco", 3, "ngClass", "click"], ["name", "people-outline", "slot", "start"], ["slot", "end", "color", "primary", 4, "ngIf"], ["name", "wifi-outline", "color", "danger", "slot", "end", 4, "ngIf"], ["color", "blanco", 3, "click"], ["name", "albums-outline", "slot", "start"], ["color", "blanco", 3, "ngClass"], ["name", "calendar-outline", "slot", "start"], ["name", "chatbubbles-outline", "slot", "start"], ["name", "build-outline", "slot", "start"], ["name", "folder-open-outline", "slot", "start"], ["name", "pricetags-outline", "slot", "start"], ["name", "power-outline", "slot", "start"], ["slot", "end", "color", "primary"], ["name", "wifi-outline", "color", "danger", "slot", "end"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Men\xFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_ion_item_click_7_listener() {
            return ctx.ir();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Seguimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MenuComponent_ion_badge_11_Template, 2, 1, "ion-badge", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MenuComponent_ion_icon_12_Template, 1, 0, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_ion_item_click_13_listener() {
            return ctx.ir();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Hoja de Vida");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Eventos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MenuComponent_ion_icon_21_Template, 1, 0, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Chats");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MenuComponent_ion_icon_26_Template, 1, 0, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Gr\xFAa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MenuComponent_ion_icon_31_Template, 1, 0, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_ion_item_click_32_listener() {
            return ctx.citas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Estado de citas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, MenuComponent_ion_icon_36_Template, 1, 0, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Inventarios");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_ion_item_click_41_listener() {
            return ctx.terminar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Cerrar sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.red === "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red !== "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.red === "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.red === "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.red === "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.red === "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBadge"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTWVudS9tZW51Q29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menuComponent.component.html',
          styleUrls: ['./menuComponent.component.scss']
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }, {
          type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__["ApiSeguimientoService"]
        }, {
          type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__["ConexionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/Components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Menu/menuComponent.component */
    "./src/app/Components/Menu/menuComponent.component.ts");
    /* harmony import */


    var _Media_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Media/video/video.component */
    "./src/app/Components/Media/video/video.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _Media_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _Media_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _Media_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [_Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _Media_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Guard/login/central.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/Guard/login/central.guard.ts ***!
    \**********************************************/

  /*! exports provided: CentralGuard */

  /***/
  function srcAppGuardLoginCentralGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralGuard", function () {
      return CentralGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CentralGuard =
    /*#__PURE__*/
    function () {
      function CentralGuard(inicioService, route) {
        _classCallCheck(this, CentralGuard);

        this.inicioService = inicioService;
        this.route = route;
        this.sesion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.$sesion = this.sesion.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(3000));
      }

      _createClass(CentralGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var login;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.inicioService.comprobarSesion();

                  case 3:
                    login = _context3.sent;
                    console.log('Bien central');

                    if (!login) {
                      _context3.next = 11;
                      break;
                    }

                    console.log(login, ' central');
                    this.route.navigate(['/home']);
                    return _context3.abrupt("return", false);

                  case 11:
                    return _context3.abrupt("return", true);

                  case 12:
                    _context3.next = 17;
                    break;

                  case 14:
                    _context3.prev = 14;
                    _context3.t0 = _context3["catch"](0);
                    return _context3.abrupt("return", true);

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 14]]);
          }));
        }
      }]);

      return CentralGuard;
    }();

    CentralGuard.ɵfac = function CentralGuard_Factory(t) {
      return new (t || CentralGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CentralGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CentralGuard,
      factory: CentralGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CentralGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Guard/login/inicio.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/Guard/login/inicio.guard.ts ***!
    \*********************************************/

  /*! exports provided: InicioGuard */

  /***/
  function srcAppGuardLoginInicioGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioGuard", function () {
      return InicioGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InicioGuard =
    /*#__PURE__*/
    function () {
      function InicioGuard(inicioService, route) {
        _classCallCheck(this, InicioGuard);

        this.inicioService = inicioService;
        this.route = route;
        this.sesion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.$sesion = this.sesion.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(3000));
      }

      _createClass(InicioGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var login;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.inicioService.comprobarSesion();

                  case 3:
                    login = _context4.sent;

                    if (!login) {
                      _context4.next = 8;
                      break;
                    }

                    return _context4.abrupt("return", true);

                  case 8:
                    this.route.navigate(['/central']);
                    return _context4.abrupt("return", false);

                  case 10:
                    _context4.next = 16;
                    break;

                  case 12:
                    _context4.prev = 12;
                    _context4.t0 = _context4["catch"](0);
                    this.route.navigate(['/central']);
                    return _context4.abrupt("return", false);

                  case 16:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 12]]);
          }));
        }
      }]);

      return InicioGuard;
    }();

    InicioGuard.ɵfac = function InicioGuard_Factory(t) {
      return new (t || InicioGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    InicioGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InicioGuard,
      factory: InicioGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InicioGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Guard/login/registro.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/Guard/login/registro.guard.ts ***!
    \***********************************************/

  /*! exports provided: RegistroGuard */

  /***/
  function srcAppGuardLoginRegistroGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroGuard", function () {
      return RegistroGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../providers/Registro/registro.service */
    "./src/app/providers/Registro/registro.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegistroGuard =
    /*#__PURE__*/
    function () {
      function RegistroGuard(registroService) {
        _classCallCheck(this, RegistroGuard);

        this.registroService = registroService;
      }

      _createClass(RegistroGuard, [{
        key: "canDeactivate",
        value: function canDeactivate() {
          return this.registroService.observer.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["find"])(function (x) {
            return x !== 'a';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            console.log("ESTADO ".concat(x));
            return x;
          }));
        }
      }]);

      return RegistroGuard;
    }();

    RegistroGuard.ɵfac = function RegistroGuard_Factory(t) {
      return new (t || RegistroGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"]));
    };

    RegistroGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistroGuard,
      factory: RegistroGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/Modales/entradas/entradas-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Pages/Modales/entradas/entradas-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: EntradasPageRoutingModule */

  /***/
  function srcAppPagesModalesEntradasEntradasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntradasPageRoutingModule", function () {
      return EntradasPageRoutingModule;
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


    var _entradas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./entradas.page */
    "./src/app/Pages/Modales/entradas/entradas.page.ts");

    var routes = [{
      path: '',
      component: _entradas_page__WEBPACK_IMPORTED_MODULE_2__["EntradasPage"]
    }];

    var EntradasPageRoutingModule = function EntradasPageRoutingModule() {
      _classCallCheck(this, EntradasPageRoutingModule);
    };

    EntradasPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EntradasPageRoutingModule
    });
    EntradasPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EntradasPageRoutingModule_Factory(t) {
        return new (t || EntradasPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntradasPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntradasPageRoutingModule, [{
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
  "./src/app/Pages/Modales/entradas/entradas.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/Modales/entradas/entradas.module.ts ***!
    \***********************************************************/

  /*! exports provided: EntradasPageModule */

  /***/
  function srcAppPagesModalesEntradasEntradasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntradasPageModule", function () {
      return EntradasPageModule;
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


    var _entradas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./entradas-routing.module */
    "./src/app/Pages/Modales/entradas/entradas-routing.module.ts");
    /* harmony import */


    var _entradas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entradas.page */
    "./src/app/Pages/Modales/entradas/entradas.page.ts");

    var EntradasPageModule = function EntradasPageModule() {
      _classCallCheck(this, EntradasPageModule);
    };

    EntradasPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EntradasPageModule
    });
    EntradasPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EntradasPageModule_Factory(t) {
        return new (t || EntradasPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _entradas_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntradasPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntradasPageModule, {
        declarations: [_entradas_page__WEBPACK_IMPORTED_MODULE_5__["EntradasPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _entradas_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntradasPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntradasPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _entradas_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntradasPageRoutingModule"]],
          declarations: [_entradas_page__WEBPACK_IMPORTED_MODULE_5__["EntradasPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/Modales/entradas/entradas.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Pages/Modales/entradas/entradas.page.ts ***!
    \*********************************************************/

  /*! exports provided: EntradasPage */

  /***/
  function srcAppPagesModalesEntradasEntradasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntradasPage", function () {
      return EntradasPage;
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


    var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/Api/Recordatorios.service */
    "./src/app/providers/Api/Recordatorios.service.ts");

    var EntradasPage =
    /*#__PURE__*/
    function () {
      function EntradasPage(modalCtrl, almacenamiento, apiRecordatorio) {
        _classCallCheck(this, EntradasPage);

        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.apiRecordatorio = apiRecordatorio;
        this.titulo = '';
        this.contenido = '';
        this.creador = '';
        this.img = '';
      }

      _createClass(EntradasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log(this.data);
          this.titulo = this.data.informacion.titulo;
          this.contenido = this.data.informacion.contenido;
          this.creador = this.data.creador.nombrecompleto;
          this.img = this.data.creador.imagen.length > 0 ? this.data.creador.imagen[0].path : '';
        }
      }, {
        key: "guardar",
        value: function guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var info, miUsuario, objeto;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context5.sent;

                    if (info) {
                      console.log(info, this.data);
                      miUsuario = this.data.destinatarios.filter(function (item) {
                        return item.id === info._id;
                      });

                      if (miUsuario.length > 0) {
                        objeto = miUsuario[0];
                        objeto.visto = 'SI';
                        this.apiRecordatorio.putRecordatorioPersona(info.token, {
                          _id: this.data._id,
                          destino: objeto
                        }).subscribe(function (data) {
                          if (data.exe) {
                            console.log('BIEN HECHO ', data);
                          } else {}
                        });
                      }
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss({});
        }
      }]);

      return EntradasPage;
    }();

    EntradasPage.ɵfac = function EntradasPage_Factory(t) {
      return new (t || EntradasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_4__["RecordatoriosService"]));
    };

    EntradasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EntradasPage,
      selectors: [["app-entradas"]],
      inputs: {
        type: "type",
        data: "data"
      },
      decls: 23,
      vars: 4,
      consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "close-outline"], ["fullscreen", "true", "color", "oscuro"], [1, "content"], [1, "leer"], [1, "imagen"], [1, "avatar"], [3, "src"], ["color", "oscuro", "mode", "ios"], [1, "titulo"], [1, "contenido"], ["expand", "block", "color", "danger", 3, "click"]],
      template: function EntradasPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recordatorios");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntradasPage_Template_ion_button_click_5_listener() {
            return ctx.cerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-avatar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-card-title", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-card-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntradasPage_Template_ion_button_click_21_listener() {
            return ctx.guardar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "ACEPTAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.creador);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", ctx.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contenido);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"]],
      styles: [".titulo[_ngcontent-%COMP%], .contenido[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contenido[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 18px;\n  margin-bottom: 20px;\n  white-space: pre-wrap;\n}\n\nion-card[_ngcontent-%COMP%] {\n  padding: 10px auto;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.leer[_ngcontent-%COMP%] {\n  max-width: calc(100% - 70px);\n  width: auto;\n  margin-top: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: var(--ion-color-success);\n  color: #ffffff;\n  font-size: 18px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.imagen[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  width: 50px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9lbnRyYWRhcy9DOlxcTWltb3RvL3NyY1xcYXBwXFxQYWdlc1xcTW9kYWxlc1xcZW50cmFkYXNcXGVudHJhZGFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9lbnRyYWRhcy9lbnRyYWRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7O0VBRUksa0JBQUE7QUNDUjs7QURFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURFSTtFQUNJLGtCQUFBO0FDQ1I7O0FERUk7RUFDSSxnQkFBQTtBQ0NSOztBREVJO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ1I7O0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvTW9kYWxlcy9lbnRyYWRhcy9lbnRyYWRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnRpdHVsbyxcclxuICAgIC5jb250ZW5pZG8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbmlkbyBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH0iLCIudGl0dWxvLFxuLmNvbnRlbmlkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbmlkbyBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTBweCBhdXRvO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sZWVyIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2VuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntradasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-entradas',
          templateUrl: './entradas.page.html',
          styleUrls: ['./entradas.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]
        }, {
          type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_4__["RecordatoriosService"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _Guard_login_registro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Guard/login/registro.guard */
    "./src/app/Guard/login/registro.guard.ts");
    /* harmony import */


    var _Guard_login_inicio_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Guard/login/inicio.guard */
    "./src/app/Guard/login/inicio.guard.ts");
    /* harmony import */


    var _Guard_login_central_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Guard/login/central.guard */
    "./src/app/Guard/login/central.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_Guard_login_inicio_guard__WEBPACK_IMPORTED_MODULE_3__["InicioGuard"]]
    }, // tslint:disable-next-line:max-line-length
    {
      path: 'registro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-registro-module */
        "pages-registro-registro-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro/registro.module */
        "./src/app/pages/registro/registro.module.ts")).then(function (m) {
          return m.RegistroPageModule;
        });
      },
      canDeactivate: [_Guard_login_registro_guard__WEBPACK_IMPORTED_MODULE_2__["RegistroGuard"]],
      canActivate: [_Guard_login_inicio_guard__WEBPACK_IMPORTED_MODULE_3__["InicioGuard"]],
      data: {
        animation: 'Registropage'
      }
    }, // tslint:disable-next-line:max-line-length
    {
      path: 'central',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-central-central-module */
        "pages-central-central-module").then(__webpack_require__.bind(null,
        /*! ./pages/central/central.module */
        "./src/app/pages/central/central.module.ts")).then(function (m) {
          return m.CentralPageModule;
        });
      },
      canActivate: [_Guard_login_central_guard__WEBPACK_IMPORTED_MODULE_4__["CentralGuard"]]
    }, {
      path: 'chat/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-EstadoCitas-chat-chat-module */
        [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("Pages-EstadoCitas-chat-chat-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/EstadoCitas/chat/chat.module */
        "./src/app/Pages/EstadoCitas/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      },
      canActivate: [_Guard_login_central_guard__WEBPACK_IMPORTED_MODULE_4__["CentralGuard"]]
    }, {
      path: 'igtmpublic/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-Modales-igtmpublic-igtmpublic-module */
        [__webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("common"), __webpack_require__.e("Pages-Modales-igtmpublic-igtmpublic-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/Modales/igtmpublic/igtmpublic.module */
        "./src/app/Pages/Modales/igtmpublic/igtmpublic.module.ts")).then(function (m) {
          return m.IgtmpublicPageModule;
        });
      }
    }, {
      path: 'visita/:usuario/:tipo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-usuario-perfil-visita-perfil-visita-module */
        [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"), __webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("default~Pages-usuario-perfil-perfil-module~Pages-usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("Pages-usuario-perfil-visita-perfil-visita-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/usuario/perfil-visita/perfil-visita.module */
        "./src/app/Pages/usuario/perfil-visita/perfil-visita.module.ts")).then(function (m) {
          return m.PerfilVisitaPageModule;
        });
      }
    }, {
      path: 'perfil/:tipo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-usuario-perfil-perfil-module */
        [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"), __webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("default~Pages-usuario-perfil-perfil-module~Pages-usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("common"), __webpack_require__.e("Pages-usuario-perfil-perfil-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/usuario/perfil/perfil.module */
        "./src/app/Pages/usuario/perfil/perfil.module.ts")).then(function (m) {
          return m.PerfilPageModule;
        });
      }
    }, {
      path: 'hoja-vida-modal/:id/:tipo/:hoja',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-Modales-hoja-vida-modal-hoja-vida-modal-module */
        [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("Pages-Modales-hoja-vida-modal-hoja-vida-modal-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/Modales/hoja-vida-modal/hoja-vida-modal.module */
        "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.module.ts")).then(function (m) {
          return m.HojaVidaModalPageModule;
        });
      }
    }, {
      path: 'hoja-vida-modal/:id/:tipo/:hoja/:idx',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-Modales-hoja-vida-modal-hoja-vida-modal-module */
        [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("Pages-Modales-hoja-vida-modal-hoja-vida-modal-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/Modales/hoja-vida-modal/hoja-vida-modal.module */
        "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.module.ts")).then(function (m) {
          return m.HojaVidaModalPageModule;
        });
      }
    }, {
      path: 'historias-modal',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-Santiago-historias-modal-historias-modal-module */
        [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("Pages-Santiago-historias-modal-historias-modal-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/Santiago/historias-modal/historias-modal.module */
        "./src/app/Pages/Santiago/historias-modal/historias-modal.module.ts")).then(function (m) {
          return m.HistoriasModalPageModule;
        });
      }
    }, {
      path: 'historias/:tipo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | Pages-Santiago-sancreador-sancreador-module */
        [__webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("common"), __webpack_require__.e("Pages-Santiago-sancreador-sancreador-module")]).then(__webpack_require__.bind(null,
        /*! ./Pages/Santiago/sancreador/sancreador.module */
        "./src/app/Pages/Santiago/sancreador/sancreador.module.ts")).then(function (m) {
          return m.SANcreadorPageModule;
        });
      }
    }, {
      path: 'redmodal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Pages-redmodal-redmodal-module */
        "Pages-redmodal-redmodal-module").then(__webpack_require__.bind(null,
        /*! ./Pages/redmodal/redmodal.module */
        "./src/app/Pages/redmodal/redmodal.module.ts")).then(function (m) {
          return m.RedmodalPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./providers/PushService/PushService.service */
    "./src/app/providers/PushService/PushService.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _providers_Red_servicio_red_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./providers/Red/servicio-red.service */
    "./src/app/providers/Red/servicio-red.service.ts");
    /* harmony import */


    var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./providers/Conexiones/Conexion.service */
    "./src/app/providers/Conexiones/Conexion.service.ts");
    /* harmony import */


    var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./providers/cargas/Entradas.service */
    "./src/app/providers/cargas/Entradas.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, almacenamiento, redService, conexion, entradas, pushService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.almacenamiento = almacenamiento;
        this.redService = redService;
        this.conexion = conexion;
        this.entradas = entradas;
        this.pushService = pushService;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this6 = this;

          this.platform.ready().then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.statusBar.backgroundColorByHexString('#273238');
                      this.splashScreen.hide();
                      _context6.next = 4;
                      return this.almacenamiento.crearBaseDeDatosSQLite();

                    case 4:
                      this.pushService.configuracionInicial();
                      _context6.next = 7;
                      return this.conexion.cargaLista();

                    case 7:
                      this.entradas.crearEntrada();

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Red_servicio_red_service__WEBPACK_IMPORTED_MODULE_7__["ServicioRedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_8__["ConexionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_9__["EntradasServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_5__["PushService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [["id", "perfil"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styleUrls: ['app.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]
        }, {
          type: _providers_Red_servicio_red_service__WEBPACK_IMPORTED_MODULE_7__["ServicioRedService"]
        }, {
          type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_8__["ConexionService"]
        }, {
          type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_9__["EntradasServices"]
        }, {
          type: _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_5__["PushService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: MyHammerConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function () {
      return MyHammerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! chartjs-plugin-zoom */
    "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.js");
    /* harmony import */


    var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _Components_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Components/components.module */
    "./src/app/Components/components.module.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./Pages/Modales/entradas/entradas.page */
    "./src/app/Pages/Modales/entradas/entradas.page.ts");
    /* harmony import */


    var _Pages_Modales_entradas_entradas_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./Pages/Modales/entradas/entradas.module */
    "./src/app/Pages/Modales/entradas/entradas.module.ts"); // Sockets
    // PLUGIN


    var MyHammerConfig =
    /*#__PURE__*/
    function (_angular_platform_bro) {
      _inherits(MyHammerConfig, _angular_platform_bro);

      function MyHammerConfig() {
        var _this7;

        _classCallCheck(this, MyHammerConfig);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(MyHammerConfig).apply(this, arguments));
        _this7.overrides = {
          swipe: {
            direction: hammerjs__WEBPACK_IMPORTED_MODULE_10__["DIRECTION_ALL"]
          }
        };
        return _this7;
      }

      return MyHammerConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]); //n const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


    var config = {
      url: 'https://motocaliapp.com',
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_22__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__["FilePath"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__["OneSignal"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
        useClass: MyHammerConfig
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_21__["IonicStorageModule"].forRoot({
        name: '__mimoto',
        driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
      }), ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["SocketIoModule"].forRoot(config), _Components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"], _Pages_Modales_entradas_entradas_module__WEBPACK_IMPORTED_MODULE_24__["EntradasPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_21__["IonicStorageModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["SocketIoModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"], _Pages_Modales_entradas_entradas_module__WEBPACK_IMPORTED_MODULE_24__["EntradasPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          entryComponents: [_Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_23__["EntradasPage"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_21__["IonicStorageModule"].forRoot({
            name: '__mimoto',
            driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
          }), ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["SocketIoModule"].forRoot(config), _Components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"], _Pages_Modales_entradas_entradas_module__WEBPACK_IMPORTED_MODULE_24__["EntradasPageModule"]],
          providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_22__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__["FilePath"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__["OneSignal"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
          }, {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Almacenamiento/inicio.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/providers/Almacenamiento/inicio.service.ts ***!
    \************************************************************/

  /*! exports provided: InicioService */

  /***/
  function srcAppProvidersAlmacenamientoInicioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioService", function () {
      return InicioService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _PushService_PushService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../PushService/PushService.service */
    "./src/app/providers/PushService/PushService.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var InicioService =
    /*#__PURE__*/
    function () {
      function InicioService(oneSignal, storage) {
        _classCallCheck(this, InicioService);

        this.oneSignal = oneSignal;
        this.storage = storage;
        this.motoValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sesion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('a');
        this.motoObserver = this.motoValue.asObservable();
        this.sesionValue = this.sesion.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["find"])(function (x) {
          return x !== 'a';
        }));
      }

      _createClass(InicioService, [{
        key: "crearBaseDeDatosSQLite",
        value: function crearBaseDeDatosSQLite() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            var login, citas;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context7.sent;
                    _context7.next = 5;
                    return this.storage.get('citas');

                  case 5:
                    citas = _context7.sent;

                    if (!login) {
                      _context7.next = 10;
                      break;
                    }

                    this.comprobarSesion().then(function (res) {
                      _this8.sesion.next(res);
                    });
                    _context7.next = 13;
                    break;

                  case 10:
                    this.comprobarSesion().then(function (res) {
                      _this8.sesion.next(res);
                    });
                    _context7.next = 13;
                    return this.storage.set('login', []);

                  case 13:
                    if (!citas) {
                      _context7.next = 16;
                      break;
                    }

                    _context7.next = 18;
                    break;

                  case 16:
                    _context7.next = 18;
                    return this.storage.set('citas', []);

                  case 18:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "comprobarSesion",
        value: function comprobarSesion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var login, data;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context8.sent;

                    if (!login) {
                      _context8.next = 12;
                      break;
                    }

                    data = login.filter(function (item) {
                      return item.estado === 'true';
                    });

                    if (!(data.length > 0)) {
                      _context8.next = 9;
                      break;
                    }

                    return _context8.abrupt("return", false);

                  case 9:
                    return _context8.abrupt("return", true);

                  case 10:
                    _context8.next = 13;
                    break;

                  case 12:
                    return _context8.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "cambiarEstado",
        value: function cambiarEstado(status) {
          this.sesion.next(status);
        }
      }, {
        key: "guardarUsuario",
        value: function guardarUsuario(datos) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var login, data, beforeData;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context9.sent;

                    if (!login) {
                      _context9.next = 17;
                      break;
                    }

                    data = login.filter(function (item) {
                      return item.nusuario === datos.nombreusuario;
                    });

                    if (!(data.length > 0)) {
                      _context9.next = 12;
                      break;
                    }

                    beforeData = login.filter(function (item) {
                      return item.nusuario !== datos.nombreusuario;
                    });
                    beforeData.push({
                      _id: datos._id,
                      nombre: datos.nombrecompleto,
                      nusuario: datos.nombreusuario,
                      clave: datos.clave,
                      telefono: datos.tel,
                      correo: datos.correo,
                      role: datos.role,
                      token: datos.token,
                      usuarioID: datos.usuarioID,
                      estado: 'true'
                    });
                    _context9.next = 10;
                    return this.storage.set('login', beforeData);

                  case 10:
                    _context9.next = 15;
                    break;

                  case 12:
                    login.push({
                      _id: datos._id,
                      nombre: datos.nombrecompleto,
                      nusuario: datos.nombreusuario,
                      clave: datos.clave,
                      telefono: datos.tel,
                      correo: datos.correo,
                      role: datos.role,
                      token: datos.token,
                      usuarioID: datos.usuarioID,
                      estado: 'true'
                    });
                    _context9.next = 15;
                    return this.storage.set('login', login);

                  case 15:
                    _context9.next = 18;
                    break;

                  case 17:
                    return _context9.abrupt("return", false);

                  case 18:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "reRenerarToken",
        value: function reRenerarToken(nusuario, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var login, data, beforeData;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context10.sent;

                    if (!login) {
                      _context10.next = 12;
                      break;
                    }

                    data = login.filter(function (item) {
                      return item.nusuario === nusuario;
                    });

                    if (!(data.length > 0)) {
                      _context10.next = 10;
                      break;
                    }

                    beforeData = login.filter(function (item) {
                      return item.nusuario !== nusuario;
                    });
                    beforeData.push({
                      token: token
                    });
                    _context10.next = 10;
                    return this.storage.set('login', beforeData);

                  case 10:
                    _context10.next = 13;
                    break;

                  case 12:
                    return _context10.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "insertarCita",
        value: function insertarCita(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var cita, insertar, _insertar;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.storage.get('citas');

                  case 2:
                    cita = _context11.sent;

                    if (!cita) {
                      _context11.next = 16;
                      break;
                    }

                    cita = [];
                    cita.push({
                      idCita: id
                    });
                    _context11.next = 8;
                    return this.storage.set('citas', cita);

                  case 8:
                    insertar = _context11.sent;

                    if (!insertar) {
                      _context11.next = 13;
                      break;
                    }

                    return _context11.abrupt("return", true);

                  case 13:
                    return _context11.abrupt("return", false);

                  case 14:
                    _context11.next = 26;
                    break;

                  case 16:
                    cita = [];
                    cita.push({
                      idCita: id
                    });
                    _context11.next = 20;
                    return this.storage.set('citas', cita);

                  case 20:
                    _insertar = _context11.sent;

                    if (!_insertar) {
                      _context11.next = 25;
                      break;
                    }

                    return _context11.abrupt("return", true);

                  case 25:
                    return _context11.abrupt("return", false);

                  case 26:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "obtenerCita",
        value: function obtenerCita() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var cita;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.storage.get('citas');

                  case 2:
                    cita = _context12.sent;

                    if (!cita) {
                      _context12.next = 9;
                      break;
                    }

                    if (!(cita.length > 0)) {
                      _context12.next = 8;
                      break;
                    }

                    return _context12.abrupt("return", cita[0].idCita);

                  case 8:
                    return _context12.abrupt("return");

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "eleminarCita",
        value: function eleminarCita() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var cita;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.storage.set('citas', []);

                  case 2:
                    cita = _context13.sent;

                    if (!cita) {
                      _context13.next = 5;
                      break;
                    }

                    return _context13.abrupt("return", true);

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "obtenerToken",
        value: function obtenerToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var login, data;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context14.sent;

                    if (!login) {
                      _context14.next = 10;
                      break;
                    }

                    data = login.filter(function (item) {
                      return item.estado === 'true';
                    });

                    if (!(data.length > 0)) {
                      _context14.next = 9;
                      break;
                    }

                    return _context14.abrupt("return", data[0]);

                  case 9:
                    return _context14.abrupt("return", []);

                  case 10:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "dataLogin",
        value: function dataLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var login;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context15.sent;

                    if (!login) {
                      _context15.next = 7;
                      break;
                    }

                    if (!(login.length > 0)) {
                      _context15.next = 6;
                      break;
                    }

                    return _context15.abrupt("return", login[0]);

                  case 6:
                    return _context15.abrupt("return", login);

                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "terminarPartida",
        value: function terminarPartida() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var login, cerrar;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.storage.get('login');

                  case 2:
                    login = _context16.sent;

                    if (!login) {
                      _context16.next = 13;
                      break;
                    }

                    login.forEach(function (item) {
                      item.estado = 'false';
                    });
                    _context16.next = 7;
                    return this.storage.set('login', login);

                  case 7:
                    cerrar = _context16.sent;

                    if (!cerrar) {
                      _context16.next = 12;
                      break;
                    }

                    return _context16.abrupt("return", true);

                  case 12:
                    return _context16.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "limpiarBD",
        value: function limpiarBD() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var login;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.storage.set('login', []);

                  case 2:
                    login = _context17.sent;

                    if (!login) {
                      _context17.next = 5;
                      break;
                    }

                    return _context17.abrupt("return", true);

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return InicioService;
    }();

    InicioService.ɵfac = function InicioService_Factory(t) {
      return new (t || InicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_4__["PushService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]));
    };

    InicioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InicioService,
      factory: InicioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InicioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _PushService_PushService_service__WEBPACK_IMPORTED_MODULE_4__["PushService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Api/Recordatorios.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/providers/Api/Recordatorios.service.ts ***!
    \********************************************************/

  /*! exports provided: RecordatoriosService */

  /***/
  function srcAppProvidersApiRecordatoriosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordatoriosService", function () {
      return RecordatoriosService;
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

    var RecordatoriosService =
    /*#__PURE__*/
    function () {
      function RecordatoriosService(http) {
        _classCallCheck(this, RecordatoriosService);

        this.http = http;
      }

      _createClass(RecordatoriosService, [{
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
              if (errorHttp.status === 404) {// throw new Error(' Credenciales incorrectas, por favor comprueba la información ');
              } else {// throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        }
      }, {
        key: "postRecordatorio",
        value: function postRecordatorio(token, data) {
          var _this9 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/recordatorios"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this9.hanflerError(error);
          }));
        }
      }, {
        key: "getRecordatorio",
        value: function getRecordatorio(token) {
          var _this10 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/recordatorios"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this10.hanflerError(error);
          }));
        }
      }, {
        key: "getRecordatorioPersona",
        value: function getRecordatorioPersona(token) {
          var _this11 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/recordatorios/personas"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this11.hanflerError(error);
          }));
        }
      }, {
        key: "deleteRecordatorio",
        value: function deleteRecordatorio(token, id) {
          var _this12 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token,
              'x-id': id
            })
          };
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/recordatorios"), httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this12.hanflerError(error);
          }));
        }
      }, {
        key: "putRecordatorio",
        value: function putRecordatorio(token, data) {
          var _this13 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/recordatorios"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this13.hanflerError(error);
          }));
        }
      }, {
        key: "putRecordatorioPersona",
        value: function putRecordatorioPersona(token, data) {
          var _this14 = this;

          var httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_SERVER"], "/recordatorios/personas"), data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (error) {
            return _this14.hanflerError(error);
          }));
        }
      }]);

      return RecordatoriosService;
    }();

    RecordatoriosService.ɵfac = function RecordatoriosService_Factory(t) {
      return new (t || RecordatoriosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    RecordatoriosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecordatoriosService,
      factory: RecordatoriosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordatoriosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Api/Seguimiento.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/Api/Seguimiento.service.ts ***!
    \******************************************************/

  /*! exports provided: ApiSeguimientoService */

  /***/
  function srcAppProvidersApiSeguimientoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiSeguimientoService", function () {
      return ApiSeguimientoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ApiSeguimientoService =
    /*#__PURE__*/
    function () {
      function ApiSeguimientoService(almacenamiento, navCtrl, http) {
        _classCallCheck(this, ApiSeguimientoService);

        this.almacenamiento = almacenamiento;
        this.navCtrl = navCtrl;
        this.http = http;
      }

      _createClass(ApiSeguimientoService, [{
        key: "handlerError",
        value: function handlerError(error) {
          var _this15 = this;

          return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delayWhen"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(3000);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (errorHttp) {
            if (errorHttp instanceof ErrorEvent) {
              throw new Error('Error de Red');
            } else {
              if (errorHttp.status === 404) {
                throw new Error(' al realizar la solicictud ');
              } else if (errorHttp.status === 401) {
                try {
                  _this15.almacenamiento.terminarPartida().then(function () {
                    _this15.navCtrl.navigateRoot('/home');
                  });
                } catch (error) {
                  throw new Error('No tiene permisos para realizar la petición ');
                }

                throw new Error('No tiene permisos para realizar la petición ');
              } else {
                throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
              }
            }
          }));
        }
      }, {
        key: "solicitudesRecibidas",
        value: function solicitudesRecibidas(token) {
          var _this16 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': token
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento/usuarios/"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this16.handlerError(error);
          }));
        }
      }, {
        key: "enviarSolicitud",
        value: function enviarSolicitud(data) {
          var _this17 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': data.token
            })
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento"), {
            IDreceptor: data.IDreceptor
          }, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this17.handlerError(error);
          }));
        }
      }, {
        key: "consultarSolicitud",
        value: function consultarSolicitud(token, idReceptor) {
          var _this18 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': token,
              'x-idReceptor': idReceptor
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento/consultar/"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this18.handlerError(error);
          }));
        }
      }, {
        key: "cancelarSolicitud",
        value: function cancelarSolicitud(token, idReceptor, type) {
          var _this19 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': token,
              'x-idReceptor': idReceptor,
              'x-tipo': type
            })
          };
          return this.http.delete("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento/usuario/"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this19.handlerError(error);
          }));
        }
      }, {
        key: "aceptarSolicitud",
        value: function aceptarSolicitud(token, idReceptor) {
          var _this20 = this;

          console.log('Datos ', token, idReceptor);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': token,
              'x-idReceptor': idReceptor
            })
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento/usuario/"), {}, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this20.handlerError(error);
          }));
        }
      }, {
        key: "solicitudesAceptadas",
        value: function solicitudesAceptadas(token, idReceptor, type) {
          var _this21 = this;

          //   console.log(type, idReceptor, 'LLamando a todo');
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': token,
              'x-idReceptor': idReceptor,
              'x-tipo': type
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento/usuarios/aceptados/"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this21.handlerError(error);
          }));
        }
      }, {
        key: "solicitudesAceptadasSeguidos",
        value: function solicitudesAceptadasSeguidos(token, idReceptor, type) {
          var _this22 = this;

          // console.log(type, idReceptor, 'LLamando a todo');
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'x-token': token,
              'x-idReceptor': idReceptor,
              'x-tipo': type
            })
          };
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"], "/seguimiento/usuarios/aceptados/seguidos/"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return _this22.handlerError(error);
          }));
        }
      }]);

      return ApiSeguimientoService;
    }();

    ApiSeguimientoService.ɵfac = function ApiSeguimientoService_Factory(t) {
      return new (t || ApiSeguimientoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_1__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ApiSeguimientoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiSeguimientoService,
      factory: ApiSeguimientoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiSeguimientoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_1__["InicioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Conexiones/Conexion.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/Conexiones/Conexion.service.ts ***!
    \**********************************************************/

  /*! exports provided: ConexionService */

  /***/
  function srcAppProvidersConexionesConexionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConexionService", function () {
      return ConexionService;
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


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Utilidades/ToastService.service */
    "./src/app/providers/Utilidades/ToastService.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../cargas/Entradas.service */
    "./src/app/providers/cargas/Entradas.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ConexionService =
    /*#__PURE__*/
    function () {
      function ConexionService(plt, socket, storage, toast, entradas, router) {
        var _this23 = this;

        _classCallCheck(this, ConexionService);

        this.plt = plt;
        this.socket = socket;
        this.storage = storage;
        this.toast = toast;
        this.entradas = entradas;
        this.router = router;
        this.carga = false;
        this.conexionBh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.$conexiones = this.conexionBh.asObservable();
        this.escucharFondo();
        this.escucharEntrada();
        this.conexiones().subscribe(function (data) {
          _this23.conexionBh.next(data);
        });
        this.notificaciones().subscribe(function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var _this24 = this;

            var audio, cita, buttons, marcado;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    audio = new Audio('/assets/Notificacion.mp3');
                    audio.play();

                    if (!(data.action === 'citaschat')) {
                      _context18.next = 11;
                      break;
                    }

                    console.log(data, 'Encima');
                    _context18.next = 6;
                    return this.storage.obtenerCita();

                  case 6:
                    cita = _context18.sent;
                    marcado = false;

                    if (cita) {
                      console.log(cita, 'Mi cita');

                      if (cita !== data.idCita) {
                        marcado = true;
                      }
                    } else {
                      buttons = {
                        action: true,
                        info: {
                          type: 'citas',
                          data: {
                            id: data.idCita
                          }
                        },
                        ruta: '/chat'
                      };
                      this.toast.alertApplication(data.mensaje, true, 'bottom', buttons);
                    }

                    _context18.next = 12;
                    break;

                  case 11:
                    if (data.action === 'recargo') {
                      this.entradas.crearEntrada();
                      console.log('LLego');
                    } else if (data.action === 'salidaIVT') {
                      this.toast.toastExitoso(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: function handler() {
                          _this24.router.navigate(['/central/menu/ivt-miinventario/', data.id, 'salidas', data.id, data.creador]);
                        }
                      }]);
                      console.log('LLego');
                    } else if (data.action === 'entradaIVT') {
                      this.toast.toastExitoso(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: function handler() {
                          _this24.router.navigate(['/central/menu/ivt-miinventario/', data.id, 'entradas', data.id]);
                        }
                      }]);
                      console.log('LLego');
                    } else if (data.action === 'megusta') {
                      this.toast.toastExitoso(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: function handler() {
                          _this24.router.navigate(['/igtmpublic/', data.id]);
                        }
                      }]);
                    } else if (data.action === 'comentario') {
                      this.toast.toastExitoso(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: function handler() {
                          _this24.router.navigate(['/igtmpublic/', data.id]);
                        }
                      }]);
                    }

                  case 12:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        });
      }

      _createClass(ConexionService, [{
        key: "cargaLista",
        value: function cargaLista() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var login;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.prev = 0;
                    this.carga = true;
                    _context19.next = 4;
                    return this.storage.obtenerToken();

                  case 4:
                    login = _context19.sent;

                    if (login) {
                      console.log(login, ' Empezando');

                      if (login.estado === 'true') {
                        this.socket.emit('conectar', login);
                      } else {//  this.toast.alertApplication('No se pudo iniciar la conexión', false);
                      }
                    }

                    _context19.next = 11;
                    break;

                  case 8:
                    _context19.prev = 8;
                    _context19.t0 = _context19["catch"](0);
                    this.toast.alertApplication('No se pudo iniciar la conexión', false);

                  case 11:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this, [[0, 8]]);
          }));
        }
      }, {
        key: "conexiones",
        value: function conexiones() {
          var _this25 = this;

          var conx = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (obs) {
            _this25.socket.on('conexiones', function (data) {
              obs.next(data);
            });
          });
          return conx;
        }
      }, {
        key: "escucharFondo",
        value: function escucharFondo() {
          var _this26 = this;

          return this.plt.pause.subscribe(function (e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee20() {
              var login;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      console.log('plataforma en fondo', e);
                      _context20.next = 3;
                      return this.storage.obtenerToken();

                    case 3:
                      login = _context20.sent;

                      if (login) {
                        console.log('login salida', login);
                        this.socket.emit('desconectar', login);
                      }

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          });
        }
      }, {
        key: "escucharEntrada",
        value: function escucharEntrada() {
          var _this27 = this;

          return this.plt.resume.subscribe(function (e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee21() {
              var login;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      if (!this.carga) {
                        _context21.next = 6;
                        break;
                      }

                      console.log('plataforma en entrada', e);
                      _context21.next = 4;
                      return this.storage.obtenerToken();

                    case 4:
                      login = _context21.sent;

                      if (login) {
                        console.log('login entrada', login);
                        this.socket.emit('conectar', login);
                      }

                    case 6:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          });
        }
      }, {
        key: "notificaciones",
        value: function notificaciones() {
          var _this28 = this;

          var notificaciones = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (obs) {
            _this28.socket.on('notificacion', function (data) {
              console.log('mala', data);
              obs.next(data);
            });
          });
          return notificaciones;
        }
      }, {
        key: "destruir",
        value: function destruir() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var login, cerrar;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.prev = 0;
                    _context22.next = 3;
                    return this.storage.dataLogin();

                  case 3:
                    login = _context22.sent;

                    if (!login) {
                      _context22.next = 24;
                      break;
                    }

                    console.log(login, ' Terminando');

                    if (!(login.estado === 'false')) {
                      _context22.next = 21;
                      break;
                    }

                    this.socket.connect();
                    this.socket.emit('desconectar', login);
                    _context22.next = 11;
                    return this.storage.limpiarBD();

                  case 11:
                    cerrar = _context22.sent;

                    if (!cerrar) {
                      _context22.next = 18;
                      break;
                    }

                    this.escucharEntrada().unsubscribe();
                    this.escucharFondo().unsubscribe();
                    return _context22.abrupt("return", true);

                  case 18:
                    return _context22.abrupt("return", false);

                  case 19:
                    _context22.next = 22;
                    break;

                  case 21:
                    return _context22.abrupt("return", false);

                  case 22:
                    _context22.next = 25;
                    break;

                  case 24:
                    return _context22.abrupt("return", false);

                  case 25:
                    _context22.next = 30;
                    break;

                  case 27:
                    _context22.prev = 27;
                    _context22.t0 = _context22["catch"](0);
                    return _context22.abrupt("return", false);

                  case 30:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this, [[0, 27]]);
          }));
        }
      }]);

      return ConexionService;
    }();

    ConexionService.ɵfac = function ConexionService_Factory(t) {
      return new (t || ConexionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__["EntradasServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    ConexionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ConexionService,
      factory: ConexionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConexionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
        }, {
          type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]
        }, {
          type: _Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"]
        }, {
          type: _cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__["EntradasServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/PushService/PushService.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/providers/PushService/PushService.service.ts ***!
    \**************************************************************/

  /*! exports provided: PushService */

  /***/
  function srcAppProvidersPushServicePushServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushService", function () {
      return PushService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PushService =
    /*#__PURE__*/
    function () {
      function PushService(oneSignal, router) {
        _classCallCheck(this, PushService);

        this.oneSignal = oneSignal;
        this.router = router;
        this.usuarioIDSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.$usuarioID = this.usuarioIDSubject.asObservable();
      }

      _createClass(PushService, [{
        key: "configuracionInicial",
        value: function configuracionInicial() {
          var _this29 = this;

          try {
            console.log('Entro a la notificación');
            this.oneSignal.startInit('1de7b081-0773-484d-a7b2-139f15ff8586', '954770608713');
            this.oneSignal.getIds().then(function (data) {
              _this29.usuarioIDSubject.next(data.userId);

              console.log('User ID', data.userId);
            });
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
              // do something when notification is received
              console.log(noti);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (noti) {
              // do something when a notification is opened
              console.log(noti.notification.payload.additionalData.tipo);
              var notificacion = noti.notification.payload.additionalData;

              _this29.detectarCambio(notificacion);
            });
            this.oneSignal.endInit();
          } catch (error) {
            console.log('No permitido servicio');
          }
        }
      }, {
        key: "detectarCambio",
        value: function detectarCambio(data) {
          var _this30 = this;

          console.log(data);

          if (data.tipo === 'Seguimiento') {
            this.router.navigate(['/central/menu/solicitudes']);
          } else if (data.tipo === 'MensajeCita') {
            var almacenamiento;
            almacenamiento.insertarCita(data.adicional.id).then(function () {
              _this30.router.navigate(['/chat', data.adicional.id]);
            });
          } else if (data.tipo === 'Recordatorio') {} else if (data.tipo === 'Publicacion') {
            this.router.navigate(['/igtmpublic/', data.adicional.id]);
          } else if (data.tipo === 'InventarioProximos') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.id, 'productos', data.adicional.ivt, 'proximos']);
          } else if (data.tipo === 'InventarioAgotados') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.id, 'productos', data.adicional.ivt, 'agotados']);
          } else if (data.tipo === 'EntradaIVT') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.ivt, 'entradas', data.adicional.ivt]);
          } else if (data.tipo === 'SalidaIVT') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.ivt, 'salidas', data.adicional.ivt]);
          }
        }
      }]);

      return PushService;
    }();

    PushService.ɵfac = function PushService_Factory(t) {
      return new (t || PushService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PushService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PushService,
      factory: PushService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Red/servicio-red.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/providers/Red/servicio-red.service.ts ***!
    \*******************************************************/

  /*! exports provided: ServicioRedService */

  /***/
  function srcAppProvidersRedServicioRedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioRedService", function () {
      return ServicioRedService;
    });
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cargas/usuarios.service */
    "./src/app/providers/cargas/usuarios.service.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ServicioRedService =
    /*#__PURE__*/
    function () {
      function ServicioRedService(red, cargarElementos, socket, modalCtrl, router) {
        _classCallCheck(this, ServicioRedService);

        this.red = red;
        this.cargarElementos = cargarElementos;
        this.socket = socket;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.conectarRed();
      }

      _createClass(ServicioRedService, [{
        key: "conectarRed",
        value: function conectarRed() {
          var _this31 = this;

          return this.red.onChange().subscribe(function (e) {
            console.log(_this31.red.type, ' Tipo de red');

            if (_this31.red.type === 'none') {
              _this31.sacarModal();
            } else if (_this31.red.type !== 'none') {
              _this31.cerrar();
            }

            _this31.cargarElementos.cargarRed(_this31.red.type);
          });
        }
      }, {
        key: "sacarModal",
        value: function sacarModal() {// this.router.navigate
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "cancelarServicio",
        value: function cancelarServicio() {
          this.conectarRed().unsubscribe();
        }
      }]);

      return ServicioRedService;
    }();

    ServicioRedService.ɵfac = function ServicioRedService_Factory(t) {
      return new (t || ServicioRedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    ServicioRedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ServicioRedService,
      factory: ServicioRedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServicioRedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__["Network"]
        }, {
          type: _cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["CargaElementosUsuariosService"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Registro/registro.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/providers/Registro/registro.service.ts ***!
    \********************************************************/

  /*! exports provided: RegistroService */

  /***/
  function srcAppProvidersRegistroRegistroServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroService", function () {
      return RegistroService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var RegistroService =
    /*#__PURE__*/
    function () {
      function RegistroService(storage) {
        _classCallCheck(this, RegistroService);

        this.storage = storage;
        this.estado = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('a');
        this.observer = this.estado.asObservable();
      }

      _createClass(RegistroService, [{
        key: "cambioEstado",
        value: function cambioEstado(status) {
          this.estado.next(status);
        }
      }]);

      return RegistroService;
    }();

    RegistroService.ɵfac = function RegistroService_Factory(t) {
      return new (t || RegistroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]));
    };

    RegistroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistroService,
      factory: RegistroService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Utilidades/LoadingService.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/providers/Utilidades/LoadingService.service.ts ***!
    \****************************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppProvidersUtilidadesLoadingServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
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

    var LoadingService =
    /*#__PURE__*/
    function () {
      function LoadingService(loadingCtrl) {
        _classCallCheck(this, LoadingService);

        this.loadingCtrl = loadingCtrl;
      }

      _createClass(LoadingService, [{
        key: "cargaProcesos",
        value: function cargaProcesos(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.loadingCtrl.create({
                      message: message
                    });

                  case 2:
                    this.loading = _context23.sent;
                    return _context23.abrupt("return", this.loading.present());

                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "finalizarCargado",
        value: function finalizarCargado() {
          this.loading.dismiss();
        }
      }]);

      return LoadingService;
    }();

    LoadingService.ɵfac = function LoadingService_Factory(t) {
      return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]));
    };

    LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoadingService,
      factory: LoadingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/Utilidades/ToastService.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/providers/Utilidades/ToastService.service.ts ***!
    \**************************************************************/

  /*! exports provided: ToastServices */

  /***/
  function srcAppProvidersUtilidadesToastServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastServices", function () {
      return ToastServices;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");

    var ToastServices =
    /*#__PURE__*/
    function () {
      function ToastServices(toasCTRL, router, navCtrl, almacenamiento) {
        _classCallCheck(this, ToastServices);

        this.toasCTRL = toasCTRL;
        this.router = router;
        this.navCtrl = navCtrl;
        this.almacenamiento = almacenamiento;
      }

      _createClass(ToastServices, [{
        key: "alertApplication",
        value: function alertApplication(mensaje, estado, location, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var _this32 = this;

            var boton, toast;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    if (!location || typeof location === 'undefined') {
                      location = 'bottom';
                    } else if (location === 'm') {
                      location = 'middle';
                    }

                    boton = [];

                    if (!buttons || typeof buttons === 'undefined') {
                      boton = [];
                    } else {
                      boton = [{
                        text: 'Navegar',
                        handler: function handler() {
                          if (buttons.action) {
                            if (buttons.info.type === 'citas') {
                              _this32.almacenamiento.insertarCita(buttons.info.data.id).then(function () {
                                console.log('agregado');

                                _this32.router.navigate(['/chat', buttons.info.data.id]);
                              });
                            }
                          }
                        }
                      }];
                    }

                    _context24.next = 5;
                    return this.toasCTRL.create({
                      message: mensaje,
                      // cssClass: estado ? 'msg-ok' : 'msg-not',
                      position: location,
                      header: 'Mensaje de Mimoto',
                      duration: 5000,
                      buttons: boton,
                      mode: 'ios'
                    });

                  case 5:
                    toast = _context24.sent;
                    _context24.next = 8;
                    return toast.present();

                  case 8:
                    return _context24.abrupt("return", _context24.sent);

                  case 9:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "toastError",
        value: function toastError(mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var toas;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.toasCTRL.create({
                      cssClass: 'errorAPP',
                      position: 'bottom',
                      duration: 3000,
                      message: mensaje,
                      header: 'Mensaje de la aplicación'
                    });

                  case 2:
                    toas = _context25.sent;
                    _context25.next = 5;
                    return toas.present();

                  case 5:
                    return _context25.abrupt("return", _context25.sent);

                  case 6:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "toastExitoso",
        value: function toastExitoso(mensaje, duration, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            var toas;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.toasCTRL.create({
                      cssClass: 'exitoApp',
                      position: 'bottom',
                      duration: duration ? duration : 3000,
                      message: mensaje,
                      buttons: buttons,
                      header: 'Mensaje de la aplicación'
                    });

                  case 2:
                    toas = _context26.sent;
                    _context26.next = 5;
                    return toas.present();

                  case 5:
                    return _context26.abrupt("return", _context26.sent);

                  case 6:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "toastNotificacion",
        value: function toastNotificacion(mensaje, duration, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var toas;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.toasCTRL.create({
                      cssClass: 'notiApp',
                      position: 'bottom',
                      duration: duration ? duration : 3000,
                      message: mensaje,
                      buttons: buttons,
                      header: 'Mensaje de la aplicación'
                    });

                  case 2:
                    toas = _context27.sent;
                    _context27.next = 5;
                    return toas.present();

                  case 5:
                    return _context27.abrupt("return", _context27.sent);

                  case 6:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }]);

      return ToastServices;
    }();

    ToastServices.ɵfac = function ToastServices_Factory(t) {
      return new (t || ToastServices)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]));
    };

    ToastServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastServices,
      factory: ToastServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/cargas/Entradas.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/cargas/Entradas.service.ts ***!
    \******************************************************/

  /*! exports provided: EntradasServices */

  /***/
  function srcAppProvidersCargasEntradasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntradasServices", function () {
      return EntradasServices;
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


    var src_app_Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Pages/Modales/entradas/entradas.page */
    "./src/app/Pages/Modales/entradas/entradas.page.ts");
    /* harmony import */


    var _Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Api/Recordatorios.service */
    "./src/app/providers/Api/Recordatorios.service.ts");
    /* harmony import */


    var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");

    var EntradasServices =
    /*#__PURE__*/
    function () {
      function EntradasServices(modalCtrl, apiRecordatorio, almacenamiento) {
        _classCallCheck(this, EntradasServices);

        this.modalCtrl = modalCtrl;
        this.apiRecordatorio = apiRecordatorio;
        this.almacenamiento = almacenamiento;
      }

      _createClass(EntradasServices, [{
        key: "crearEntrada",
        value: function crearEntrada() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            var _this33 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return this.almacenamiento.obtenerToken();

                  case 2:
                    info = _context29.sent;

                    if (info) {
                      this.apiRecordatorio.getRecordatorioPersona(info.token).subscribe(function (data) {
                        console.log('Data del servicio entrada', data);

                        if (data.exe) {
                          data.response.forEach(function (item, ind) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0,
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee28() {
                              var modal, finalice;
                              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                                while (1) {
                                  switch (_context28.prev = _context28.next) {
                                    case 0:
                                      console.log('DANDOME LA VUELTA*******************');

                                      if (!item.destinatarios.find(function (dest) {
                                        return dest.id === info._id && dest.visto === 'NO';
                                      })) {
                                        _context28.next = 11;
                                        break;
                                      }

                                      _context28.next = 4;
                                      return this.modalCtrl.create({
                                        component: src_app_Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_3__["EntradasPage"],
                                        componentProps: {
                                          type: 'recordatorio',
                                          data: item
                                        }
                                      });

                                    case 4:
                                      modal = _context28.sent;
                                      _context28.next = 7;
                                      return modal.present();

                                    case 7:
                                      _context28.next = 9;
                                      return modal.onWillDismiss();

                                    case 9:
                                      finalice = _context28.sent;

                                      if (finalice) {
                                        console.log('Siguiente', ind);
                                      }

                                    case 11:
                                    case "end":
                                      return _context28.stop();
                                  }
                                }
                              }, _callee28, this);
                            }));
                          });
                        }
                      });
                    }

                  case 4:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "mostrarSoloUna",
        value: function mostrarSoloUna(recor) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            var modal;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_3__["EntradasPage"],
                      componentProps: {
                        type: 'recordatorio',
                        data: recor
                      }
                    });

                  case 2:
                    modal = _context30.sent;
                    _context30.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }]);

      return EntradasServices;
    }();

    EntradasServices.ɵfac = function EntradasServices_Factory(t) {
      return new (t || EntradasServices)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_4__["RecordatoriosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]));
    };

    EntradasServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EntradasServices,
      factory: EntradasServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntradasServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_4__["RecordatoriosService"]
        }, {
          type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/providers/cargas/usuarios.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/cargas/usuarios.service.ts ***!
    \******************************************************/

  /*! exports provided: CargaElementosUsuariosService */

  /***/
  function srcAppProvidersCargasUsuariosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargaElementosUsuariosService", function () {
      return CargaElementosUsuariosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Api/Seguimiento.service */
    "./src/app/providers/Api/Seguimiento.service.ts");
    /* harmony import */


    var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CargaElementosUsuariosService =
    /*#__PURE__*/
    function () {
      function CargaElementosUsuariosService(apiSeguimiento, almacenamiento) {
        _classCallCheck(this, CargaElementosUsuariosService);

        this.apiSeguimiento = apiSeguimiento;
        this.almacenamiento = almacenamiento;
        this.seguimientoBehaviour = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.$seguimientoCantidad = this.seguimientoBehaviour.asObservable();
        this.cargared = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('wifi');
        this.$cargarRed = this.cargared.asObservable();
      }

      _createClass(CargaElementosUsuariosService, [{
        key: "cargarSeguimientos",
        value: function cargarSeguimientos() {
          var _this34 = this;

          this.almacenamiento.obtenerToken().then(function (info) {
            _this34.cancelarSeguimiento = _this34.apiSeguimiento.solicitudesRecibidas(info.token).subscribe(function (data) {
              _this34.seguimientoBehaviour.next(data.response.SeguimientoData.length);

              console.log(data.response.SeguimientoData, ' seguimientos cant');
            }, function (err) {
              console.log('Error en la solicitud');
            });
          });
        }
      }, {
        key: "cancelarSuscripciones",
        value: function cancelarSuscripciones() {
          this.cancelarSeguimiento.unsubscribe();
        }
      }, {
        key: "cargarRed",
        value: function cargarRed(red) {
          console.log('Mi red', red);
          this.cargared.next(red);
        }
      }]);

      return CargaElementosUsuariosService;
    }();

    CargaElementosUsuariosService.ɵfac = function CargaElementosUsuariosService_Factory(t) {
      return new (t || CargaElementosUsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_1__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]));
    };

    CargaElementosUsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CargaElementosUsuariosService,
      factory: CargaElementosUsuariosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CargaElementosUsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_1__["ApiSeguimientoService"]
        }, {
          type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, URL_SERVER */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_SERVER", function () {
      return URL_SERVER;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var URL_SERVER = 'https://motocaliapp.com';
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Mimoto\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map