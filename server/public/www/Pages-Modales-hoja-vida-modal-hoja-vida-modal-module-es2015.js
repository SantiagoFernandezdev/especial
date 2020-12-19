(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Modales-hoja-vida-modal-hoja-vida-modal-module"],{

/***/ "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HojaVidaModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaVidaModalPageRoutingModule", function() { return HojaVidaModalPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoja-vida-modal.page */ "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.ts");





const routes = [
    {
        path: '',
        component: _hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_2__["HojaVidaModalPage"]
    }
];
class HojaVidaModalPageRoutingModule {
}
HojaVidaModalPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HojaVidaModalPageRoutingModule });
HojaVidaModalPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HojaVidaModalPageRoutingModule_Factory(t) { return new (t || HojaVidaModalPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HojaVidaModalPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HojaVidaModalPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.module.ts ***!
  \*************************************************************************/
/*! exports provided: HojaVidaModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaVidaModalPageModule", function() { return HojaVidaModalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hoja_vida_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoja-vida-modal-routing.module */ "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal-routing.module.ts");
/* harmony import */ var _hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoja-vida-modal.page */ "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








class HojaVidaModalPageModule {
}
HojaVidaModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HojaVidaModalPageModule });
HojaVidaModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HojaVidaModalPageModule_Factory(t) { return new (t || HojaVidaModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _hoja_vida_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["HojaVidaModalPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HojaVidaModalPageModule, { declarations: [_hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_5__["HojaVidaModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _hoja_vida_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["HojaVidaModalPageRoutingModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HojaVidaModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _hoja_vida_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["HojaVidaModalPageRoutingModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
                ],
                declarations: [_hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_5__["HojaVidaModalPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.ts ***!
  \***********************************************************************/
/*! exports provided: HojaVidaModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaVidaModalPage", function() { return HojaVidaModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "./src/app/providers/Utilidades/LoadingService.service.ts");
/* harmony import */ var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/EstadoCitas.service */ "./src/app/providers/Api/EstadoCitas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pipes/numeros/decimales.pipe */ "./src/app/pipes/numeros/decimales.pipe.ts");




















const _c0 = ["ele"];
function HojaVidaModalPage_ion_content_0_ion_slides_17_ion_slide_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const archivo_r1930 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", archivo_r1930.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HojaVidaModalPage_ion_content_0_ion_slides_17_ion_slide_1_Template(rf, ctx) { if (rf & 1) {
    const _r1935 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HojaVidaModalPage_ion_content_0_ion_slides_17_ion_slide_1_img_1_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HojaVidaModalPage_ion_content_0_ion_slides_17_ion_slide_1_Template_ion_textarea_ionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1935); const i_r1931 = ctx.index; const ctx_r1934 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1934.descripcion($event, i_r1931); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaVidaModalPage_ion_content_0_ion_slides_17_ion_slide_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1935); const i_r1931 = ctx.index; const ctx_r1936 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1936.eliminardelCarrete(i_r1931); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const archivo_r1930 = ctx.$implicit;
    const ctx_r1929 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1930.mime.includes("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoGrow", ctx_r1929.gorw)("value", archivo_r1930.texto);
} }
function HojaVidaModalPage_ion_content_0_ion_slides_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HojaVidaModalPage_ion_content_0_ion_slides_17_ion_slide_1_Template, 6, 3, "ion-slide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1928 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1928.slideOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1928.carreteRoot);
} }
function HojaVidaModalPage_ion_content_0_Template(rf, ctx) { if (rf & 1) {
    const _r1938 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaVidaModalPage_ion_content_0_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1938); const ctx_r1937 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1937.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Seleccione el tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HojaVidaModalPage_ion_content_0_Template_ion_select_ionChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1938); const ctx_r1939 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1939.cambiar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-select-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Fotos de Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fotos de Salida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Novedades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HojaVidaModalPage_ion_content_0_ion_slides_17_Template, 2, 2, "ion-slides", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-fab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-fab-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaVidaModalPage_ion_content_0_Template_ion_fab_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1938); const ctx_r1940 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1940.seleccione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1924 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1924.cargado);
} }
function HojaVidaModalPage_ion_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A\u00F1adir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HojaVidaModalPage_ion_content_2_ion_slides_5_ion_slide_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const archivo_r1945 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613402/", archivo_r1945.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HojaVidaModalPage_ion_content_2_ion_slides_5_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HojaVidaModalPage_ion_content_2_ion_slides_5_ion_slide_2_img_1_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const archivo_r1945 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1945.mime.includes("image"));
} }
function HojaVidaModalPage_ion_content_2_ion_slides_5_Template(rf, ctx) { if (rf & 1) {
    const _r1950 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function HojaVidaModalPage_ion_content_2_ion_slides_5_Template_ion_slides_ionSlideDidChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1950); const ctx_r1949 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1949.cambiarSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HojaVidaModalPage_ion_content_2_ion_slides_5_ion_slide_2_Template, 2, 1, "ion-slide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1941 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1941.slideOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1941.fotos);
} }
function HojaVidaModalPage_ion_content_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1942 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1942.textoActual);
} }
function HojaVidaModalPage_ion_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HojaVidaModalPage_ion_content_2_ion_slides_5_Template, 3, 2, "ion-slides", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HojaVidaModalPage_ion_content_2_div_6_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1926 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1926.titulotipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1926.cargado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1926.mt);
} }
function HojaVidaModalPage_ion_content_3_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r1954 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Nombre del prodcuto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HojaVidaModalPage_ion_content_3_ion_card_1_Template_ion_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1954); const ctx_r1953 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1953.repuesto.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Precio Unitario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HojaVidaModalPage_ion_content_3_ion_card_1_Template_ion_input_ionChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1954); const ctx_r1955 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1955.salidaCambioProd($event, "precio"); })("ngModelChange", function HojaVidaModalPage_ion_content_3_ion_card_1_Template_ion_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1954); const ctx_r1956 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1956.repuesto.precio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function HojaVidaModalPage_ion_content_3_ion_card_1_Template_ion_input_ionChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1954); const ctx_r1957 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1957.salidaCambioProd($event, "canti"); })("ngModelChange", function HojaVidaModalPage_ion_content_3_ion_card_1_Template_ion_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1954); const ctx_r1958 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1958.repuesto.cantidad = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaVidaModalPage_ion_content_3_ion_card_1_Template_ion_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1954); const ctx_r1959 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1959.guardarHoja("rep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "GUARDAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1951 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1951.repuesto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1951.repuesto.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1951.repuesto.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 4, ctx_r1951.repuesto.total, "es-CO"), "");
} }
function HojaVidaModalPage_ion_content_3_ion_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r1961 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Nombre del trabajo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HojaVidaModalPage_ion_content_3_ion_card_2_Template_ion_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1961); const ctx_r1960 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1960.trabajo.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Precio Mano de Obra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HojaVidaModalPage_ion_content_3_ion_card_2_Template_ion_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1961); const ctx_r1962 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1962.trabajo.precio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HojaVidaModalPage_ion_content_3_ion_card_2_Template_ion_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1961); const ctx_r1963 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1963.guardarHoja("tra"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "GUARDAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1952 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1952.trabajo.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1952.trabajo.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 3, ctx_r1952.trabajo.precio, "es-CO"), "");
} }
function HojaVidaModalPage_ion_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HojaVidaModalPage_ion_content_3_ion_card_1_Template, 30, 7, "ion-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HojaVidaModalPage_ion_content_3_ion_card_2_Template, 25, 6, "ion-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1927 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1927.tipoVista === "repuestos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1927.tipoVista === "trabajos");
} }
class HojaVidaModalPage {
    constructor(modalCtrl, actionCtrl, almacenamiento, camera, toast, myLoading, hojaApi, activeRoute, router) {
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        this.almacenamiento = almacenamiento;
        this.camera = camera;
        this.toast = toast;
        this.myLoading = myLoading;
        this.hojaApi = hojaApi;
        this.activeRoute = activeRoute;
        this.router = router;
        this.carrete = [];
        this.carreteRoot = [];
        this.tipo = 'Fotos de Entrada';
        this.cargado = false;
        this.gorw = false;
        this.mt = true;
        this.slideOpt = {
            zoom: {
                maxRation: 8,
                toggle: true
            }
        };
        this.tipoVista = '';
        this.repuesto = {
            nombre: '',
            precio: undefined,
            cantidad: undefined,
            total: 0
        };
        this.trabajo = {
            nombre: '',
            precio: 0
        };
        this.repuestos = [];
        this.trabajos = [];
        this.id = '';
        this.idHoja = '';
        this.fotos = [];
        this.titulo = '';
        this.textoActual = '';
        this.titulotipo = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tipoVista = this.activeRoute.snapshot.paramMap.get('tipo');
            this.id = this.activeRoute.snapshot.paramMap.get('id');
            this.idHoja = this.activeRoute.snapshot.paramMap.get('hoja');
            if (this.activeRoute.snapshot.paramMap.get('tipo') === 'ver') {
                this.traerFotos();
            }
            this.miHoja();
        });
    }
    traerFotos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.cargado = true;
                this.hojaApi.leefotos(info.token, { id: this.idHoja }).subscribe((data) => {
                    console.log(data, 'ft');
                    if (data.exe) {
                        this.fotos = data.response;
                        this.textoActual = this.fotos[0].asunto;
                        this.titulotipo = this.fotos[0].tipo;
                        this.slide.slideTo(parseFloat(this.activeRoute.snapshot.paramMap.get('idx')), 300).then(() => {
                        }).catch(() => {
                        });
                    }
                    else {
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer las fotos de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    cambiarSlide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.slide.getActiveIndex().then((indx) => {
                this.titulotipo = this.fotos[indx].tipo;
                this.textoActual = this.fotos[indx].asunto;
            });
        });
    }
    miHoja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.cargado = true;
                this.hojaApi.leeHoja2(info.token, { id: this.id }).subscribe((data) => {
                    if (data.exe) {
                        console.log(data);
                        this.idHoja = data.response._id;
                        this.repuestos = data.response.repuestos;
                        this.trabajos = data.response.trabajos;
                    }
                    else {
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer la información de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    cambiar(event) {
        this.tipo = event.detail.value;
    }
    descripcion(event, idx) {
        if (event.detail.value !== '') {
            this.gorw = true;
        }
        else {
            this.gorw = false;
        }
        this.carreteRoot[idx].texto = event.detail.value;
        this.carrete[idx].texto = event.detail.value;
    }
    seleccione() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const action = yield this.actionCtrl.create({
                header: 'Escoge una opción',
                buttons: [
                    {
                        icon: 'camera-outline',
                        text: 'Tomar foto de la cámara',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        icon: 'image-outline',
                        text: 'Subir foto de galería',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                        }
                    }
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
            mediaType: this.camera.MediaType.PICTURE,
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
            console.log('Mi archivo', name, mim);
            this.carrete.push({ path: imageData, name, mime: mim, cont: this.carrete.length + 1, texto: '' });
            const url = window.Ionic.WebView.convertFileSrc(imageData);
            this.carreteRoot.push({ path: url, mime: mim, texto: '' });
            // console.log(this.carrete);
            this.camera.cleanup().then(() => console.log('Eliminado'));
        }));
    }
    eliminardelCarrete(indice) {
        this.carrete.splice(indice, 1);
        this.carreteRoot.splice(indice, 1);
    }
    salidaCambioProd(event, tipo) {
        if (tipo === 'precio') {
            this.repuesto.precio = event.detail.value;
        }
        else if (tipo === 'canti') {
            this.repuesto.cantidad = event.detail.value;
        }
        this.repuesto.total = this.repuesto.precio * this.repuesto.cantidad;
    }
    guardarHoja(tipo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                let msg = '';
                if (tipo === 'rep') {
                    if (this.repuesto.nombre === '' || this.repuesto.nombre === ' ') {
                        this.toast.toastError('Debe específicar el nombre del repuesto');
                        return;
                    }
                    if (!this.repuesto.precio || this.repuesto.precio === 0) {
                        this.toast.toastError('Ingrese un precio para el repuesto');
                        return;
                    }
                    if (!this.repuesto.cantidad || this.repuesto.cantidad === 0) {
                        this.toast.toastError('Ingrese una cantidad para el repuesto');
                        return;
                    }
                    msg = 'Repuesto agregado';
                    this.repuestos.push(this.repuesto);
                }
                else if (tipo === 'tra') {
                    if (this.trabajo.nombre === '' || this.trabajo.nombre === ' ') {
                        this.toast.toastError('Debe específicar el trabajo realizado');
                        return;
                    }
                    if (!this.trabajo.precio || this.trabajo.precio === 0) {
                        this.toast.toastError('Ingrese un valor de mano de obrao');
                        return;
                    }
                    msg = 'Trabajo agregado';
                    this.trabajos.push(this.trabajo);
                }
                this.cargado = true;
                this.hojaApi.editarHoja(info.token, { id: this.idHoja, repuestos: this.repuestos, trabajos: this.trabajos }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso(msg, 3000);
                    }
                    else {
                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                });
            }
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.carrete);
            if (this.carrete.length > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                this.myLoading.cargaProcesos('subiendo imágenes, por favor espere');
                if (info) {
                    const id = this.idHoja;
                    console.log(this.carrete, ' imagenes');
                    let cont = this.carrete.length;
                    let final = this.carrete.length === 1 ? true : false;
                    this.carrete.forEach((item) => {
                        // console.log(item, 'itm');
                        // tslint:disable-next-line:max-line-length
                        this.hojaApi.subirArchivosHoja(info.token, id, item.path, item.texto, this.tipo, item.name, item.mime).subscribe((image) => {
                            image.response = JSON.parse(image.response);
                            if (image.response.exe) {
                                cont--;
                                console.log('Entamos');
                                if (cont === 1) {
                                    final = true;
                                }
                                if (cont === 0) {
                                    image.response.response.tipo = 'file';
                                    this.myLoading.finalizarCargado();
                                    this.toast.toastNotificacion('Fotos subidas a la hoja de vida');
                                    this.router.navigate(['/central/menu/miscitas/hoja', this.activeRoute.snapshot.paramMap.get('id')]);
                                }
                            }
                            // console.log(image, ' image cada vuelta');
                        }, (error) => {
                            // console.log('Error ', error);
                            this.myLoading.finalizarCargado();
                            this.toast.alertApplication('No se pudo subir la imagen', true);
                        });
                    });
                }
            }
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
}
HojaVidaModalPage.ɵfac = function HojaVidaModalPage_Factory(t) { return new (t || HojaVidaModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_7__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
HojaVidaModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HojaVidaModalPage, selectors: [["app-hoja-vida-modal"]], viewQuery: function HojaVidaModalPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, decls: 4, vars: 4, consts: [["color", "darkgold", 3, "fullscreen", 4, "ngIf"], ["class", "ion-no-border", 4, "ngIf"], [4, "ngIf"], ["color", "darkgold", 3, "fullscreen"], ["color", "darkgold"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu/miscitas"], ["slot", "end"], ["color", "blanco", 3, "click"], ["name", "save-outline", "slot", "icon-only"], ["value", "Fotos de Entrada", "cancelText", "Cancelar", "okText", "Aplicar", 3, "ionChange"], ["value", "Fotos de Entrada"], ["value", "Fotos de Salida"], ["value", "Novedades"], [3, "options", 4, "ngIf"], ["slot", "fixed", "horizontal", "end", "vertical", "bottom"], ["color", "dark", 3, "click"], ["name", "camera-outline"], [3, "options"], [4, "ngFor", "ngForOf"], ["width", "100%", 3, "src", 4, "ngIf"], ["inputmode", "text", "maxlength", "200", "placeholder", "Escribe alguna descripci\u00F3n", 3, "autoGrow", "value", "ionChange"], [1, "eliminar", 3, "click"], ["color", "danger"], ["width", "100%", 3, "src"], [1, "ion-no-border"], ["color", "oscuro"], [1, "barra"], ["class", "verslide", 3, "options", "ionSlideDidChange", 4, "ngIf"], ["class", "texto", 4, "ngIf"], [1, "verslide", 3, "options", "ionSlideDidChange"], ["ele", ""], [3, "src", 4, "ngIf"], [3, "src"], [1, "texto"], ["mode", "ios", 4, "ngIf"], ["mode", "ios"], ["lines", "none", 1, "sinfondo"], ["slot", "start", 1, "ion-text-wrap"], [1, "sinfondo"], ["type", "text", "placeholder", "Nombre del producto", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Digitar valor", 3, "ngModel", "ionChange", "ngModelChange"], [1, "total"], [1, "flexbet"], [1, "verdei"], ["color", "barra", "expand", "block", "mode", "ios", "shape", "round", 1, "btn", 3, "click"], ["type", "text", "placeholder", "Nombre del trabajo", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Digitar valor", 3, "ngModel", "ngModelChange"]], template: function HojaVidaModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HojaVidaModalPage_ion_content_0_Template, 21, 2, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HojaVidaModalPage_ion_header_1_Template, 6, 0, "ion-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HojaVidaModalPage_ion_content_2_Template, 7, 3, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HojaVidaModalPage_ion_content_3_Template, 3, 2, "ion-content", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoVista === "fotos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoVista === "repuestos" || ctx.tipoVista === "trabajos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoVista === "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipoVista === "repuestos" || ctx.tipoVista === "trabajos");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NumericValueAccessor"]], pipes: [_pipes_numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_11__["DecimalesPipe"]], styles: [".flex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n}\n\n.verslide[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  max-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n}\n\n.verslide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  max-height: 100vh;\n}\n\nion-slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100vh;\n}\n\nion-slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.barra[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  color: #ffffff;\n  font-size: 16px;\n  z-index: 100;\n}\n\nion-textarea[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  padding: 5px;\n  margin: 0px;\n  opacity: 0.7;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.texto[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n\n.eliminar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 10;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto 0px;\n}\n\n.flexbet[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.flexbet[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.tprod[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 18px;\n  color: #333333;\n  padding: 0 10px !important;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #0c6809;\n}\n\n.total[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n  color: #333333;\n  font-size: 22px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9ob2phLXZpZGEtbW9kYWwvQzpcXE1pbW90by9zcmNcXGFwcFxcUGFnZXNcXE1vZGFsZXNcXGhvamEtdmlkYS1tb2RhbFxcaG9qYS12aWRhLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvTW9kYWxlcy9ob2phLXZpZGEtbW9kYWwvaG9qYS12aWRhLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvTW9kYWxlcy9ob2phLXZpZGEtbW9kYWwvaG9qYS12aWRhLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJzbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udmVyc2xpZGUgaW9uLXNsaWRlIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5pb24tc2xpZGUgZGl2IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5pb24tc2xpZGUgZGl2IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmFycmEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEsXHJcbi50ZXh0byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZWxpbWluYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gMHB4O1xyXG59XHJcblxyXG4uZmxleGJldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXhiZXQgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udHByb2Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMGM2ODA5O1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsIi5mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4udmVyc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZlcnNsaWRlIGlvbi1zbGlkZSB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tc2xpZGUgZGl2IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW9uLXNsaWRlIGRpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5iYXJyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmlvbi10ZXh0YXJlYSxcbi50ZXh0byB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi50ZXh0byB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZWxpbWluYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMHB4O1xufVxuXG4uZmxleGJldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXhiZXQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi50cHJvZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuXG4udmVyZGVpIHtcbiAgY29sb3I6ICMwYzY4MDk7XG59XG5cbi50b3RhbCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HojaVidaModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-hoja-vida-modal',
                templateUrl: './hoja-vida-modal.page.html',
                styleUrls: ['./hoja-vida-modal.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"] }, { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] }, { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }, { type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_7__["EstadoCitasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { slide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ele', { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=Pages-Modales-hoja-vida-modal-hoja-vida-modal-module-es2015.js.map