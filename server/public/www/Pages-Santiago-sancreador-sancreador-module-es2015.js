(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Santiago-sancreador-sancreador-module"],{

/***/ "./src/app/Pages/Santiago/sancreador/sancreador-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SANcreadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANcreadorPageRoutingModule", function() { return SANcreadorPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sancreador_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sancreador.page */ "./src/app/Pages/Santiago/sancreador/sancreador.page.ts");





const routes = [
    {
        path: '',
        component: _sancreador_page__WEBPACK_IMPORTED_MODULE_2__["SANcreadorPage"]
    }
];
class SANcreadorPageRoutingModule {
}
SANcreadorPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SANcreadorPageRoutingModule });
SANcreadorPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SANcreadorPageRoutingModule_Factory(t) { return new (t || SANcreadorPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SANcreadorPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SANcreadorPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pages/Santiago/sancreador/sancreador.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador.module.ts ***!
  \****************************************************************/
/*! exports provided: SANcreadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANcreadorPageModule", function() { return SANcreadorPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sancreador_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sancreador-routing.module */ "./src/app/Pages/Santiago/sancreador/sancreador-routing.module.ts");
/* harmony import */ var _sancreador_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sancreador.page */ "./src/app/Pages/Santiago/sancreador/sancreador.page.ts");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.module */ "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.module.ts");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");









class SANcreadorPageModule {
}
SANcreadorPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SANcreadorPageModule });
SANcreadorPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SANcreadorPageModule_Factory(t) { return new (t || SANcreadorPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _sancreador_routing_module__WEBPACK_IMPORTED_MODULE_4__["SANcreadorPageRoutingModule"],
            _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_6__["IgtmplantillaPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SANcreadorPageModule, { declarations: [_sancreador_page__WEBPACK_IMPORTED_MODULE_5__["SANcreadorPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _sancreador_routing_module__WEBPACK_IMPORTED_MODULE_4__["SANcreadorPageRoutingModule"],
        _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_6__["IgtmplantillaPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SANcreadorPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                entryComponents: [
                    _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_7__["IgtmplantillaPage"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _sancreador_routing_module__WEBPACK_IMPORTED_MODULE_4__["SANcreadorPageRoutingModule"],
                    _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_6__["IgtmplantillaPageModule"]
                ],
                declarations: [_sancreador_page__WEBPACK_IMPORTED_MODULE_5__["SANcreadorPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pages/Santiago/sancreador/sancreador.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador.page.ts ***!
  \**************************************************************/
/*! exports provided: SANcreadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANcreadorPage", function() { return SANcreadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Api/IGTM.service */ "./src/app/providers/Api/IGTM.service.ts");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "./src/app/providers/Utilidades/LoadingService.service.ts");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

























const _c0 = ["lienzo"];
function SANcreadorPage_ion_back_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-back-button", 11);
} }
function SANcreadorPage_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2010 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_div_16_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2010); const color_r2008 = ctx.$implicit; const ctx_r2009 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r2009.cambiarColor(color_r2008); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ssfsdfsfs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r2008 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", color_r2008.color, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
} }
function SANcreadorPage_div_16_div_13_ion_item_sliding_1_Template(rf, ctx) { if (rf & 1) {
    const _r2015 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item-options", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_div_16_div_13_ion_item_sliding_1_Template_ion_item_option_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2015); const i_r2013 = ctx.index; const ctx_r2014 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r2014.eliminar(i_r2013); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r2012 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", usuario_r2012.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r2012.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", usuario_r2012.nombreusuario, " ");
} }
function SANcreadorPage_div_16_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANcreadorPage_div_16_div_13_ion_item_sliding_1_Template, 12, 3, "ion-item-sliding", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2007 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2007.etiquetados);
} }
function SANcreadorPage_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r2017 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-segment", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SANcreadorPage_div_16_div_2_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SANcreadorPage_div_16_Template_ion_textarea_ionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2017); const ctx_r2016 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2016.cambiarTexto($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item-divider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "A\u00F1adir Etiquetas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_div_16_Template_ion_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2017); const ctx_r2018 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2018.etiquetar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SANcreadorPage_div_16_div_13_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SANcreadorPage_div_16_Template_ion_textarea_ionChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2017); const ctx_r2019 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2019.cambiar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2002 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2002.colores);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r2002.colorSelect.color, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("color", ctx_r2002.colorSelect.letra);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autofocus", true)("autoGrow", true)("value", ctx_r2002.valort);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2002.etiquetados.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoGrow", true)("value", ctx_r2002.comentario);
} }
function SANcreadorPage_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "No Hay archivos agregados para publicar.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SANcreadorPage_div_17_ion_slides_3_ion_slide_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const archivo_r2024 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", archivo_r2024.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SANcreadorPage_div_17_ion_slides_3_ion_slide_1_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 43);
} if (rf & 2) {
    const archivo_r2024 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", archivo_r2024.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SANcreadorPage_div_17_ion_slides_3_ion_slide_1_Template(rf, ctx) { if (rf & 1) {
    const _r2031 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANcreadorPage_div_17_ion_slides_3_ion_slide_1_img_1_Template, 1, 1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SANcreadorPage_div_17_ion_slides_3_ion_slide_1_video_2_Template, 1, 1, "video", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_div_17_ion_slides_3_ion_slide_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2031); const i_r2025 = ctx.index; const ctx_r2030 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r2030.eliminardelCarrete(i_r2025); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-chip", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const archivo_r2024 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r2024.mime.includes("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r2024.mime.includes("video") || archivo_r2024.mime.includes("Video") || archivo_r2024.mime.includes("mp4") || archivo_r2024.mime.includes("MP4"));
} }
function SANcreadorPage_div_17_ion_slides_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANcreadorPage_div_17_ion_slides_3_ion_slide_1_Template, 6, 2, "ion-slide", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2021 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2021.carreteRoot);
} }
function SANcreadorPage_div_17_div_5_ion_item_sliding_1_Template(rf, ctx) { if (rf & 1) {
    const _r2036 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item-options", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_div_17_div_5_ion_item_sliding_1_Template_ion_item_option_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2036); const i_r2034 = ctx.index; const ctx_r2035 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r2035.eliminar(i_r2034); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r2033 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", usuario_r2033.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r2033.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", usuario_r2033.nombreusuario, " ");
} }
function SANcreadorPage_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SANcreadorPage_div_17_div_5_ion_item_sliding_1_Template, 12, 3, "ion-item-sliding", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2022 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2022.etiquetados);
} }
function SANcreadorPage_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r2038 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SANcreadorPage_div_17_div_2_Template, 6, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SANcreadorPage_div_17_ion_slides_3_Template, 2, 1, "ion-slides", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SANcreadorPage_div_17_div_5_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SANcreadorPage_div_17_Template_ion_textarea_ionChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2038); const ctx_r2037 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2037.cambiar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2003 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2003.carreteRoot.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2003.carreteRoot.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2003.etiquetados.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoGrow", true)("value", ctx_r2003.comentario);
} }
function SANcreadorPage_ion_fab_18_Template(rf, ctx) { if (rf & 1) {
    const _r2040 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_ion_fab_18_Template_ion_fab_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2040); const ctx_r2039 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2039.opciones(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SANcreadorPage {
    constructor(almacenamiento, modalCtrl, IGTMApi, toast, router, actionCtrl, camera, media, myLoading, socket, statusbar, activeRoute) {
        this.almacenamiento = almacenamiento;
        this.modalCtrl = modalCtrl;
        this.IGTMApi = IGTMApi;
        this.toast = toast;
        this.router = router;
        this.actionCtrl = actionCtrl;
        this.camera = camera;
        this.media = media;
        this.myLoading = myLoading;
        this.socket = socket;
        this.statusbar = statusbar;
        this.activeRoute = activeRoute;
        this.tipoPublicacion = 'dibujar';
        this.historia = false;
        this.cargado = false;
        this.colorSelect = {
            color: '#fafafa',
            letra: '#333333'
        };
        this.colores = [
            {
                color: '#fafafa',
                letra: '#333333'
            },
            {
                color: '#000000',
                letra: '#FFFFFF'
            },
            {
                color: '#8854DA',
                letra: '#FFFFFF'
            }, {
                color: '#FFD000',
                letra: '#FFFFFF'
            }, {
                color: '#BAB417',
                letra: '#FFFFFF'
            }, {
                color: '#AAD9F0',
                letra: '#FFFFFF'
            }, {
                color: '#F5AD45',
                letra: '#FFFFFF'
            }, {
                color: '#DD5347',
                letra: '#FFFFFF'
            }, {
                color: '#F8C883',
                letra: '#333333'
            },
            {
                color: '#1ABCFE',
                letra: '#333333'
            }, {
                color: '#0ACF83',
                letra: '#333333'
            }, {
                color: '#ED576B',
                letra: '#ffffff'
            }, {
                color: '#FFA300',
                letra: '#333333'
            }, {
                color: '#555555',
                letra: '#ffffff'
            }, {
                color: '#CC924E',
                letra: '#ffffff'
            }, {
                color: '#D69624',
                letra: '#ffffff'
            }, {
                color: '#FF7262',
                letra: '#ffffff'
            }
        ];
        this.texto = '';
        this.valort = '';
        this.etiquetados = [];
        this.comentario = '';
        // 2 Fase de publicacion
        this.archivos = [];
        this.carrete = [];
        this.carreteRoot = [];
        this.video = false;
        this.tipo = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.carrete = [];
        this.carreteRoot = [];
        this.etiquetados = [];
        this.comentario = '';
        this.texto = '';
        this.valort = '';
        this.tipo = this.activeRoute.snapshot.paramMap.get('tipo');
        if (this.activeRoute.snapshot.paramMap.get('tipo') === 'historia') {
            this.historia = true;
            console.log('Historia creando');
        }
        this.iniciar();
    }
    cambiarColor(color) {
        this.colorSelect = color;
    }
    detectar(event) {
        console.log(event.detail.value.length);
    }
    cambio(event) {
        this.tipoPublicacion = event.detail.value;
        this.carrete = [];
        this.carreteRoot = [];
    }
    iniciar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cargado = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
            }
        });
    }
    etiquetar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'etiquetar'
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        if (!this.etiquetados.find((item) => item.nombreusuario === cerrado.data.persona.nombreusuario)) {
                            this.etiquetados.push(cerrado.data.persona);
                        }
                        console.log(this.etiquetados);
                    }
                }
            }
        });
    }
    eliminar(idx) {
        this.etiquetados.splice(idx, 1);
    }
    cambiar(event) {
        this.comentario = event.detail.value;
    }
    cambiarTexto(event) {
        this.texto = event.detail.value;
    }
    entrada(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const valor = this.comentario;
            if (event.detail.data === '@') {
                console.log('Arroba');
                const previo = valor.charAt(valor.length - 1);
                console.log(previo);
                if (previo === ' ' || previo === '') {
                    const modal = yield this.modalCtrl.create({
                        component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"],
                        componentProps: {
                            tipo: 'mencionar'
                        }
                    });
                    yield modal.present();
                    const cerrado = yield modal.onWillDismiss();
                    if (cerrado) {
                        if (cerrado.data.exe) {
                            console.log(cerrado.data.persona.nombreusuario);
                            this.comentario = this.comentario + cerrado.data.persona.nombreusuario;
                        }
                    }
                }
                else {
                    console.log('No se lee como eituqeta');
                }
            }
        });
    }
    opciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const action = yield this.actionCtrl.create({
                header: 'Escoge una opción',
                buttons: [
                    {
                        icon: 'camera-outline',
                        text: 'Tomar foto de la cámara',
                        handler: () => {
                            if (this.historia) {
                                if (this.carrete.length === 0) {
                                    this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                                }
                                else {
                                    this.toast.toastNotificacion('Solo puedes añadir una imagen por historia');
                                }
                            }
                            else {
                                this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                            }
                        }
                    },
                    {
                        icon: 'image-outline',
                        text: 'Subir foto de galería',
                        handler: () => {
                            if (this.historia) {
                                if (this.carrete.length === 0) {
                                    this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                                }
                                else {
                                    this.toast.toastNotificacion('Solo puedes añadir una imagen por historia');
                                }
                            }
                            else {
                                this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                            }
                        }
                    },
                    {
                        icon: 'people-outline',
                        text: 'Etiquetas',
                        handler: () => {
                            this.etiquetar();
                        }
                    }
                    // {
                    //   icon: 'videocam-outline',
                    //   text: 'Grabar vídeo de la cámara',
                    //   handler: () => {
                    //     if (!this.carrete.find(item => item.mime.includes('video') || item.mime.includes('Video') )) {
                    //       this.capturarVideo();
                    //     } else {
                    //       this.toast.toastError('No puede adjuntar más de un vídeo por publicación');
                    //     }
                    //   }
                    // },
                    // {
                    //   icon: 'image-outline',
                    //   text: 'Subir vídeo de galería',
                    //   handler: () => {
                    //     if (!this.carrete.find(item => item.mime.includes('video') || item.mime.includes('Video') )) {
                    //       this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'video');
                    //     } else {
                    //       this.toast.toastError('No puede adjuntar más de un vídeo por publicación');
                    //     }
                    //   }
                    // }
                ]
            });
            yield action.present();
        });
    }
    tomarFoto(sourceType, mode) {
        const options = {
            quality: 100,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: mode === 'image' ? this.camera.MediaType.PICTURE : this.camera.MediaType.VIDEO,
            sourceType
        };
        this.camera.getPicture(options).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mim = '';
            let name = '';
            // console.log('image data', imageData)
            if (imageData.includes('jpg')) {
                mim = 'image/jpg';
                name = 'image.jpg';
            }
            else if (imageData.includes('png')) {
                mim = 'image/png';
                name = 'image.png';
            }
            else if (imageData.includes('jpeg')) {
                mim = 'image/jpeg';
                name = 'image.jpeg';
            }
            else if (imageData.includes('gif')) {
                mim = 'image/gif';
                name = 'image.gif';
            }
            else {
                name = 'video.mp4';
                mim = 'video/mp4';
            }
            // console.log('Mi archivo', name, mim)
            this.carrete.push({ path: imageData, name, mime: mim, cont: this.carrete.length + 1 });
            const url = window.Ionic.WebView.convertFileSrc(imageData);
            this.carreteRoot.push({ path: url, mime: mim });
            // console.log(this.carrete);
            this.camera.cleanup().then(() => console.log('Eliminado'));
        }));
    }
    capturarVideo() {
        const opctions = {
            limit: 1,
            duration: 30
        };
        this.media.captureVideo(opctions).then((url) => {
            this.carrete.push({ path: url[0].fullPath, name: url[0].name, mime: url[0].type, cont: this.carrete.length + 1 });
            // console.log(url[0].name)
            const vide = window.Ionic.WebView.convertFileSrc(url[0].fullPath);
            this.carreteRoot.push({ path: vide, mime: url[0].type });
            // console.log(this.carrete);
        });
    }
    eliminardelCarrete(indice) {
        this.carrete.splice(indice, 1);
        this.carreteRoot.splice(indice, 1);
        if (!this.carrete.find(item => item.mime.includes('video') || item.mime.includes('Video'))) {
            this.video = false;
        }
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (this.tipoPublicacion === 'dibujar') {
                    if (this.texto !== '') {
                        this.publicacion(info.token, { tipo: 'dibujar', grafico: this.colorSelect, texto: this.texto, comentario: this.comentario, etiquetas: this.etiquetados, historia: this.historia });
                    }
                }
                else if (this.tipoPublicacion === 'multimedia') {
                    this.enviarMensaje();
                }
            }
        });
    }
    enviarMensaje() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.carrete);
            if (this.carrete.length > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                this.myLoading.cargaProcesos('Subiendo mensaje con archivos media, por favor espere');
                if (info) {
                    // console.log(info);
                    this.IGTMApi.crearPublicacion(info.token, {
                        tipo: 'multimedia', comentario: this.comentario, etiquetas: this.etiquetados, historia: this.historia
                    }).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            const id = data.response._id;
                            this.carrete = this.carrete.sort((a, b) => {
                                if (a.mime > b.mime) {
                                    return 1;
                                }
                                if (a.mime < b.mime) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            console.log(this.carrete, ' imagenes');
                            let cont = this.carrete.length;
                            let final = this.carrete.length === 1 ? true : false;
                            this.carrete.forEach((item) => {
                                // console.log(item, 'itm');
                                // tslint:disable-next-line:max-line-length
                                this.IGTMApi.subirArchivosChat(info.token, id, item.path, final, item.cont, this.historia, item.name, item.mime).subscribe((image) => {
                                    image.response = JSON.parse(image.response);
                                    if (image.response.exe) {
                                        cont--;
                                        console.log('Entamos', image);
                                        if (cont === 1) {
                                            final = true;
                                        }
                                        if (cont === 0) {
                                            image.response.response.tipo = 'file';
                                            this.myLoading.finalizarCargado();
                                            if (item.mime.includes('video') || item.mime.includes('Video')) {
                                                this.socket.emit('subirvideo', {
                                                    nameSecret: image.response.response.ruta,
                                                    nameConvert: image.response.response.nuevo,
                                                    creador: image.response.response.creador,
                                                    mime: image.response.response.mime,
                                                    nombre: image.response.response.nombre,
                                                    _id: id,
                                                    historia: this.historia
                                                });
                                                this.toast.toastExitoso('La publicación estará disponible en unos momentos.');
                                            }
                                            else {
                                                this.toast.toastExitoso('Contenido publicado.');
                                            }
                                            this.router.navigate(['/central/iniciosan']);
                                        }
                                    }
                                    // console.log(image, ' image cada vuelta');
                                }, (error) => {
                                    // console.log('Error ', error);
                                    this.myLoading.finalizarCargado();
                                    this.toast.alertApplication('No se pudo subir el archivo de vídeo o imagen', true);
                                });
                            });
                        }
                    });
                }
            }
        });
    }
    publicacion(token, data) {
        console.log('DATAAAAAAAAAAAAAA', data);
        this.IGTMApi.crearPublicacion(token, data).subscribe((res) => {
            if (res.exe) {
                this.toast.toastExitoso('Contenido publicado.');
                this.router.navigate(['/central/iniciosan']);
            }
            else {
                this.toast.toastError('No se pudo crear la publicación, intentelo más tarde');
            }
        }, (err) => {
            this.toast.toastError('No se pudo crear la publicación, intentelo más tarde');
        });
    }
}
SANcreadorPage.ɵfac = function SANcreadorPage_Factory(t) { return new (t || SANcreadorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_4__["IGTMService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
SANcreadorPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SANcreadorPage, selectors: [["app-sancreador"]], viewQuery: function SANcreadorPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.p = _t.first);
    } }, decls: 19, vars: 4, consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/iniciosan", 4, "ngIf"], ["mode", "ios", "slot", "end"], [3, "click"], ["color", "blanco"], ["value", "dibujar", "okayText", "Aceptar", "cancelText", "Cancelar", 3, "ionChange"], ["value", "dibujar"], ["value", "multimedia"], ["class", "", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/iniciosan"], [1, ""], ["scrollable", "true"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "lienzo"], ["lienzo", ""], ["inputmode", "text", "maxlength", "120", "placeholder", "Escribe un texto para la publicaci\u00F3n", 1, "text-lienzo", 3, "autofocus", "autoGrow", "value", "ionChange"], ["color", "light"], ["slot", "end"], ["name", "chevron-forward-outline", "slot", "icon-only"], ["class", "etiquetados", 4, "ngIf"], ["mode", "ios", 1, "sinfondo"], ["inputmode", "text", "maxlength", "120", "placeholder", "Escribe un comentario", 1, "comentario", 3, "autoGrow", "value", "ionChange"], [1, "color", 3, "click"], [1, "etiquetados"], [4, "ngFor", "ngForOf"], ["slot", "start"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash-outline"], ["class", "none", 4, "ngIf"], [4, "ngIf"], [1, "none"], [1, "flexc"], ["src", "/assets/Camara.png", "width", "70px", "alt", ""], [1, "tituloGrande"], ["width", "70px", 3, "src", 4, "ngIf"], ["width", "70px", "controls", "", 3, "src", 4, "ngIf"], [1, "eliminar", 3, "click"], ["color", "danger"], ["width", "70px", 3, "src"], ["width", "70px", "controls", "", 3, "src"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "add"]], template: function SANcreadorPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SANcreadorPage_ion_back_button_2_Template, 1, 0, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Crear publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SANcreadorPage_Template_ion_button_click_6_listener() { return ctx.crear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Publicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SANcreadorPage_Template_ion_select_ionChange_11_listener($event) { return ctx.cambio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Dibujar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-select-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SANcreadorPage_div_16_Template, 16, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SANcreadorPage_div_17_Template, 8, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SANcreadorPage_ion_fab_18_Template, 3, 0, "ion-fab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoPublicacion === "dibujar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoPublicacion === "multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoPublicacion === "multimedia");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 100%;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.color[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n.color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.lienzo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  max-height: auto;\n  padding: 10px;\n}\n\n.text-lienzo[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  min-height: 100% !important;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.comentario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n\n.amarillo[_ngcontent-%COMP%] {\n  --background: #FEF1A7 !important;\n}\n\n.flexc[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU2FudGlhZ28vc2FuY3JlYWRvci9DOlxcTWltb3RvL3NyY1xcYXBwXFxQYWdlc1xcU2FudGlhZ29cXHNhbmNyZWFkb3JcXHNhbmNyZWFkb3IucGFnZS5zY3NzIiwic3JjL2FwcC9QYWdlcy9TYW50aWFnby9zYW5jcmVhZG9yL3NhbmNyZWFkb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9TYW50aWFnby9zYW5jcmVhZG9yL3NhbmNyZWFkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2xvciBzcGFuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5saWVuem8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWxpZW56byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLmNvbWVudGFyaW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYW1hcmlsbG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVGMUE3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4YyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn0iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sb3Ige1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbG9yIHNwYW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubGllbnpvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50ZXh0LWxpZW56byB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLmNvbWVudGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFtYXJpbGxvIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVGMUE3ICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4YyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGl0dWxvR3JhbmRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SANcreadorPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sancreador',
                templateUrl: './sancreador.page.html',
                styleUrls: ['./sancreador.page.scss'],
            }]
    }], function () { return [{ type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_4__["IGTMService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }, { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] }, { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"] }, { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["Socket"] }, { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__["StatusBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { p: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['lienzo']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=Pages-Santiago-sancreador-sancreador-module-es2015.js.map