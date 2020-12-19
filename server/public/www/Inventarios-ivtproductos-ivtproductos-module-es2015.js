(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtproductos-ivtproductos-module"],{

/***/ "./src/app/pages/Inventarios/ivtproductos/ivtproductos-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: IVTproductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTproductosPageRoutingModule", function() { return IVTproductosPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ivtproductos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivtproductos.page */ "./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.ts");





const routes = [
    {
        path: '',
        component: _ivtproductos_page__WEBPACK_IMPORTED_MODULE_2__["IVTproductosPage"]
    }
];
class IVTproductosPageRoutingModule {
}
IVTproductosPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IVTproductosPageRoutingModule });
IVTproductosPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IVTproductosPageRoutingModule_Factory(t) { return new (t || IVTproductosPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTproductosPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTproductosPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Inventarios/ivtproductos/ivtproductos.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos.module.ts ***!
  \***********************************************************************/
/*! exports provided: IVTproductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTproductosPageModule", function() { return IVTproductosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ivtproductos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ivtproductos-routing.module */ "./src/app/pages/Inventarios/ivtproductos/ivtproductos-routing.module.ts");
/* harmony import */ var _ivtproductos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivtproductos.page */ "./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.ts");







class IVTproductosPageModule {
}
IVTproductosPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IVTproductosPageModule });
IVTproductosPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IVTproductosPageModule_Factory(t) { return new (t || IVTproductosPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ivtproductos_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTproductosPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IVTproductosPageModule, { declarations: [_ivtproductos_page__WEBPACK_IMPORTED_MODULE_5__["IVTproductosPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _ivtproductos_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTproductosPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IVTproductosPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _ivtproductos_routing_module__WEBPACK_IMPORTED_MODULE_4__["IVTproductosPageRoutingModule"]
                ],
                declarations: [_ivtproductos_page__WEBPACK_IMPORTED_MODULE_5__["IVTproductosPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.ts ***!
  \*********************************************************************/
/*! exports provided: IVTproductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTproductosPage", function() { return IVTproductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Api/Inventarios.service */ "./src/app/providers/Api/Inventarios.service.ts");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















const _c0 = ["inifinito"];
function IVTproductosPage_ion_searchbar_16_Template(rf, ctx) { if (rf & 1) {
    const _r935 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-searchbar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IVTproductosPage_ion_searchbar_16_Template_ion_searchbar_ionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r935); const ctx_r934 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r934.buscar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IVTproductosPage_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r930 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r930.mensaje);
} }
function IVTproductosPage_div_20_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-skeleton-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [1, 1, 1, 1, 1]; };
function IVTproductosPage_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IVTproductosPage_div_20_ion_item_2_Template, 5, 0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
function IVTproductosPage_ion_list_21_ion_item_sliding_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "C\u00F3digo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r939 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", producto_r939.codigo, "");
} }
function IVTproductosPage_ion_list_21_ion_item_sliding_1_ion_chip_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-chip", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "AL DIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IVTproductosPage_ion_list_21_ion_item_sliding_1_ion_chip_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-chip", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SE EST\u00C1 AGOTANDO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IVTproductosPage_ion_list_21_ion_item_sliding_1_ion_chip_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-chip", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PRODUCTO AGOTADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IVTproductosPage_ion_list_21_ion_item_sliding_1_Template(rf, ctx) { if (rf & 1) {
    const _r947 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IVTproductosPage_ion_list_21_ion_item_sliding_1_div_7_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Categoria: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Existencia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IVTproductosPage_ion_list_21_ion_item_sliding_1_ion_chip_18_Template, 2, 0, "ion-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, IVTproductosPage_ion_list_21_ion_item_sliding_1_ion_chip_19_Template, 2, 0, "ion-chip", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, IVTproductosPage_ion_list_21_ion_item_sliding_1_ion_chip_20_Template, 2, 0, "ion-chip", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item-options", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTproductosPage_ion_list_21_ion_item_sliding_1_Template_ion_item_option_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r947); const producto_r939 = ctx.$implicit; const ctx_r946 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r946.editar(producto_r939); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTproductosPage_ion_list_21_ion_item_sliding_1_Template_ion_item_option_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r947); const producto_r939 = ctx.$implicit; const i_r940 = ctx.index; const ctx_r948 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r948.eliminar(producto_r939, i_r940); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r939 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](producto_r939.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", producto_r939.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](producto_r939.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](producto_r939.existencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", producto_r939.existencia > producto_r939.limite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", producto_r939.existencia <= producto_r939.limite && producto_r939.existencia > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", producto_r939.existencia === 0);
} }
function IVTproductosPage_ion_list_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IVTproductosPage_ion_list_21_ion_item_sliding_1_Template, 26, 7, "ion-item-sliding", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r932 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r932.productos);
} }
function IVTproductosPage_ion_infinite_scroll_22_Template(rf, ctx) { if (rf & 1) {
    const _r951 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-infinite-scroll", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function IVTproductosPage_ion_infinite_scroll_22_Template_ion_infinite_scroll_ionInfinite_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r951); const ctx_r950 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r950.loadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-infinite-scroll-content", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class IVTproductosPage {
    constructor(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, ActiveRouter) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.ActiveRouter = ActiveRouter;
        this.productos = [];
        this.load = false;
        this.patron = '';
        this.desde = 0;
        this.seleccion = 'Todos';
        this.mensaje = 'No hay productos registrados';
        this.prod = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.ActiveRouter.snapshot.paramMap.get('modal') === 'agotados') {
            this.seleccion = 'Agotados';
            this.cargarProductosAgotados();
        }
        else if (this.ActiveRouter.snapshot.paramMap.get('modal') === 'proximos') {
            this.seleccion = 'Próximos en agotarse';
            this.cargarProductosProximos();
        }
        else {
            this.cargarProductos();
        }
    }
    refrescando(event) {
        this.cargarProductos().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarProductos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = 0;
            if (this.load) {
                this.infinite.disabled = false;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        this.productos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    modal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__["IvtModalPage"],
                componentProps: {
                    tipo: 'productos',
                    inventario: this.ActiveRouter.snapshot.paramMap.get('id')
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarProductos();
                }
            }
        });
    }
    editar(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__["IvtModalPage"],
                componentProps: {
                    tipo: 'editarproductos',
                    producto
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarProductos();
                }
            }
        });
    }
    eliminar(producto, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                const alert = yield this.alertCtrl.create({
                    header: `Eliminar Producto: ${producto.nombre}`,
                    buttons: [
                        {
                            role: 'cancel',
                            text: 'Cancelar'
                        },
                        {
                            text: 'Eliminar',
                            cssClass: 'rojoi',
                            handler: () => {
                                // tslint:disable-next-line:max-line-length
                                this.ivtApi.eliminarProducto(info.token, producto._id).subscribe((res) => {
                                    if (res.exe) {
                                        this.toast.toastExitoso('Producto eliminado!');
                                        this.productos.splice(i, 1);
                                    }
                                    else {
                                        this.toast.toastError('No se pudo eliminar el producto, intentelo más tarde');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo eliminar el proveedor, intentelo más tarde');
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    buscar(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(event.detail, 'epale');
            if (event.detail.value !== '') {
                this.desde = 0;
                this.infinite.disabled = false;
                this.patron = event.detail.value;
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id'), patron: this.patron }).subscribe((data) => {
                        console.log(data, 'mi data');
                        if (data.exe) {
                            this.productos = data.response;
                            if (data.response.length === 0) {
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                    });
                }
            }
            else {
                this.desde = 0;
                console.log(this.infinite.disabled);
                this.cargarProductos();
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // event.target.complete()
            this.desde = this.desde + 5;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (this.patron === '') {
                    this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                        console.log(data);
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.productos.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                    });
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    console.log(this.desde, 'pli');
                    this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                        console.log(data, 'mi data 2', this.desde);
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.productos.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                    });
                }
            }
        });
    }
    cambioFiltro(event) {
        this.seleccion = event.detail.value;
        if (this.seleccion === 'Todos') {
            this.prod = true;
            this.cargarProductos();
        }
        else if (this.seleccion === 'Agotados') {
            this.prod = false;
            this.cargarProductosAgotados();
        }
        else if (this.seleccion === 'Próximos en agotarse') {
            this.prod = false;
            this.cargarProductosProximos();
        }
    }
    cargarProductosAgotados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerAgotados(info.token, { _id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length === 0) {
                            this.mensaje = 'No hay productos agotados';
                        }
                        this.productos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    cargarProductosProximos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerProximos(info.token, { _id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        if (data.response.length === 0) {
                            this.mensaje = 'No hay productos próximos para agotarse';
                        }
                        this.productos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos v2, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
}
IVTproductosPage.ɵfac = function IVTproductosPage_Factory(t) { return new (t || IVTproductosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
IVTproductosPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IVTproductosPage, selectors: [["app-ivtproductos"]], viewQuery: function IVTproductosPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infinite = _t.first);
    } }, decls: 26, vars: 6, consts: [[1, "ion-no-border"], ["color", "success"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu/ivt-inicio"], ["slot", "end", "interface", "popover", 3, "value", "ionChange"], ["value", "Todos"], ["value", "Agotados"], ["value", "Pr\u00F3ximos en agotarse"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["debounce", "300", "mode", "ios", "placeholder", "Buscar Productos", 3, "ionChange", 4, "ngIf"], [1, "divider", "light"], [1, "divider"], ["class", "cen", 4, "ngIf"], ["class", "carga", 4, "ngIf"], [4, "ngIf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "success", 3, "click"], ["name", "add-outline"], ["debounce", "300", "mode", "ios", "placeholder", "Buscar Productos", 3, "ionChange"], [1, "cen"], ["src", "/assets/Productos.png", "width", "100px", "alt", ""], [1, "tituloGrande"], [1, "carga"], [4, "ngFor", "ngForOf"], ["slot", "start", "animated", "", 2, "width", "50px", "height", "50px"], ["animated", "", 2, "width", "50%", "height", "20px"], ["animated", "", 2, "width", "90%", "height", "20px"], ["lines", "none"], ["src", "/assets/Productos.png", "width", "100%", "heigth", "100%"], [1, "rojoi"], [1, "flexbet"], [1, "verdei"], ["color", "success", 4, "ngIf"], ["color", "warning", 4, "ngIf"], ["color", "danger", 4, "ngIf"], ["side", "end"], ["color", "warning", 3, "click"], ["slot", "icon-only", "name", "pencil-outline"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash-outline"], ["color", "warning"], ["color", "danger"], ["threshold", "100px", 3, "ionInfinite"], ["inifinito", ""], ["loadingSpinner", "bubbles", "loadingText", "Cargando Hojas de Vida..."]], template: function IVTproductosPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Productos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IVTproductosPage_Template_ion_select_ionChange_6_listener($event) { return ctx.cambioFiltro($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-select-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Agotados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Pr\u00F3ximos en agotarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-refresher", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function IVTproductosPage_Template_ion_refresher_ionRefresh_14_listener($event) { return ctx.refrescando($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-refresher-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, IVTproductosPage_ion_searchbar_16_Template, 1, 0, "ion-searchbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, IVTproductosPage_div_19_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, IVTproductosPage_div_20_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IVTproductosPage_ion_list_21_Template, 2, 1, "ion-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, IVTproductosPage_ion_infinite_scroll_22_Template, 3, 0, "ion-infinite-scroll", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-fab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-fab-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IVTproductosPage_Template_ion_fab_button_click_24_listener() { return ctx.modal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.seleccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prod);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productos.length === 0 && ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"]], styles: [".cen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #1E8C4A;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: #C1302C;\n}\n\nion-item-sliding[_ngcontent-%COMP%]:nth-child(odd)   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvSW52ZW50YXJpb3MvaXZ0cHJvZHVjdG9zL0M6XFxNaW1vdG8vc3JjXFxhcHBcXHBhZ2VzXFxJbnZlbnRhcmlvc1xcaXZ0cHJvZHVjdG9zXFxpdnRwcm9kdWN0b3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9JbnZlbnRhcmlvcy9pdnRwcm9kdWN0b3MvaXZ0cHJvZHVjdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksK0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ludmVudGFyaW9zL2l2dHByb2R1Y3Rvcy9pdnRwcm9kdWN0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMUU4QzRBO1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucm9qb2kge1xyXG4gICAgY29sb3I6ICNDMTMwMkM7XHJcbn1cclxuXHJcbmlvbi1pdGVtLXNsaWRpbmc6bnRoLWNoaWxkKG9kZCkgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcbn0iLCIuY2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHVsb0dyYW5kZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVyZGVpIHtcbiAgY29sb3I6ICMxRThDNEE7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucm9qb2kge1xuICBjb2xvcjogI0MxMzAyQztcbn1cblxuaW9uLWl0ZW0tc2xpZGluZzpudGgtY2hpbGQob2RkKSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IVTproductosPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ivtproductos',
                templateUrl: './ivtproductos.page.html',
                styleUrls: ['./ivtproductos.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"] }, { type: src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__["InventariosService"] }, { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { infinite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inifinito', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/numeros/decimales.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/numeros/decimales.pipe.ts ***!
  \*************************************************/
/*! exports provided: DecimalesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalesPipe", function() { return DecimalesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DecimalesPipe {
    transform(value, locale) {
        if (value === 0) {
            return 0;
        }
        else {
            return new Intl.NumberFormat(locale, {
                minimumFractionDigits: 1
            }).format(value);
        }
    }
}
DecimalesPipe.ɵfac = function DecimalesPipe_Factory(t) { return new (t || DecimalesPipe)(); };
DecimalesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decimales", type: DecimalesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecimalesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'decimales'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Inventarios-ivtproductos-ivtproductos-module-es2015.js.map