(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Recordatorios-recordatorio-recordatorio-module"],{

/***/ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RecordatorioModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioModalPageRoutingModule", function() { return RecordatorioModalPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordatorio-modal.page */ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts");





const routes = [
    {
        path: '',
        component: _recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_2__["RecordatorioModalPage"]
    }
];
class RecordatorioModalPageRoutingModule {
}
RecordatorioModalPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecordatorioModalPageRoutingModule });
RecordatorioModalPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecordatorioModalPageRoutingModule_Factory(t) { return new (t || RecordatorioModalPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecordatorioModalPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordatorioModalPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RecordatorioModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioModalPageModule", function() { return RecordatorioModalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recordatorio_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recordatorio-modal-routing.module */ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal-routing.module.ts");
/* harmony import */ var _recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordatorio-modal.page */ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








class RecordatorioModalPageModule {
}
RecordatorioModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecordatorioModalPageModule });
RecordatorioModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecordatorioModalPageModule_Factory(t) { return new (t || RecordatorioModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _recordatorio_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordatorioModalPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecordatorioModalPageModule, { declarations: [_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_5__["RecordatorioModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _recordatorio_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordatorioModalPageRoutingModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordatorioModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _recordatorio_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordatorioModalPageRoutingModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
                ],
                declarations: [_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_5__["RecordatorioModalPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RecordatorioModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioModalPage", function() { return RecordatorioModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "./src/app/providers/Api/Seguimiento.service.ts");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Recordatorios.service */ "./src/app/providers/Api/Recordatorios.service.ts");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/filtros/filtro-recordatorio.pipe */ "./src/app/pipes/filtros/filtro-recordatorio.pipe.ts");

















function RecordatorioModalPage_ion_content_0_Template(rf, ctx) { if (rf & 1) {
    const _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Recordatorios para mis clientes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_content_0_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r660); const ctx_r659 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r659.crear("predeterminado_cliente"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Crear Predeterminado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_content_0_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r660); const ctx_r661 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r661.crear("personalizado_cliente"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Crear Personalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Recordatorios para mi negocio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Crear Predeterminado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Crear Personalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Opciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_content_0_Template_div_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r660); const ctx_r662 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r662.cerrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecordatorioModalPage_ion_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r664 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_header_1_Template_ion_chip_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r664); const ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r663.cancelar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Predeterminados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_header_1_Template_ion_chip_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r664); const ctx_r665 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r665.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecordatorioModalPage_ion_content_2_ion_item_10_Template(rf, ctx) { if (rf & 1) {
    const _r673 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_2_ion_item_10_Template_ion_checkbox_ionChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r673); const ctx_r672 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r672.selectPersona($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r671 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", cliente_r671.usuarioEmisor.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cliente_r671.usuarioEmisor.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cliente_r671.usuarioEmisor.nombreusuario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("checked", cliente_r671.usuarioEmisor.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cliente_r671.usuarioEmisor._id);
} }
function RecordatorioModalPage_ion_content_2_ion_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 39);
} }
function RecordatorioModalPage_ion_content_2_ion_icon_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 40);
} }
function RecordatorioModalPage_ion_content_2_ion_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 39);
} }
function RecordatorioModalPage_ion_content_2_ion_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 40);
} }
function RecordatorioModalPage_ion_content_2_Template(rf, ctx) { if (rf & 1) {
    const _r675 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00BFPara que cliente est\u00E1 dirigido?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-searchbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_2_Template_ion_searchbar_ionChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r675); const ctx_r674 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r674.buscarPersona($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RecordatorioModalPage_ion_content_2_ion_item_10_Template, 9, 5, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "filtroRepo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Frecuencia del recordatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_content_2_Template_ion_card_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r675); const ctx_r676 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r676.selectPredeterminado("diario"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RecordatorioModalPage_ion_content_2_ion_icon_22_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RecordatorioModalPage_ion_content_2_ion_icon_23_Template, 1, 0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-card-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ejecutar cada d\u00EDa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioModalPage_ion_content_2_Template_ion_card_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r675); const ctx_r677 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r677.selectPredeterminado("mensual"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RecordatorioModalPage_ion_content_2_ion_icon_30_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RecordatorioModalPage_ion_content_2_ion_icon_31_Template, 1, 0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-card-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ejecutar cada Mes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RecordatorioModalPage_ion_content_2_Template_ion_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r675); const ctx_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r678.informacion.titulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RecordatorioModalPage_ion_content_2_Template_ion_textarea_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r675); const ctx_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r679.informacion.contenido = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Configuraciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ion-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Seguir recordando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r657 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@entrada", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 12, ctx_r657.clientes, ctx_r657.texto, ctx_r657.personasSelect));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("isSelect", ctx_r657.predeterminado.diario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r657.predeterminado.diario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r657.predeterminado.diario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("isSelect", ctx_r657.predeterminado.mensual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r657.predeterminado.mensual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r657.predeterminado.mensual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r657.informacion.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r657.informacion.contenido);
} }
function RecordatorioModalPage_ion_content_3_ion_item_10_Template(rf, ctx) { if (rf & 1) {
    const _r684 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_3_ion_item_10_Template_ion_checkbox_ionChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r684); const ctx_r683 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r683.selectPersona($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r682 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", cliente_r682.usuarioEmisor.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cliente_r682.usuarioEmisor.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cliente_r682.usuarioEmisor.nombreusuario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("checked", cliente_r682.usuarioEmisor.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cliente_r682.usuarioEmisor._id);
} }
function RecordatorioModalPage_ion_content_3_ion_item_29_Template(rf, ctx) { if (rf & 1) {
    const _r686 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RecordatorioModalPage_ion_content_3_ion_item_29_Template_ion_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r686); const ctx_r685 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r685.frecuencia.cantidad = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r681.msgFrecuencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r681.frecuencia.cantidad);
} }
function RecordatorioModalPage_ion_content_3_Template(rf, ctx) { if (rf & 1) {
    const _r688 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00BFPara que cliente est\u00E1 dirigido?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-searchbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_3_Template_ion_searchbar_ionChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r688); const ctx_r687 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r687.buscarPersona($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RecordatorioModalPage_ion_content_3_ion_item_10_Template, 9, 5, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "filtroRepo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Frecuencia del recordatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Seleccione Frecuencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_3_Template_ion_select_ionChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r688); const ctx_r689 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r689.frecuenciaPersonalizada($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Diario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Semanal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-select-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Mensual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RecordatorioModalPage_ion_content_3_ion_item_29_Template, 4, 2, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RecordatorioModalPage_ion_content_3_Template_ion_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r688); const ctx_r690 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r690.informacion.titulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RecordatorioModalPage_ion_content_3_Template_ion_textarea_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r688); const ctx_r691 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r691.informacion.contenido = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Configuraciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_3_Template_ion_checkbox_ionChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r688); const ctx_r692 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r692.repetir($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Seguir recordando al usuario cada hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item-divider", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Le recuerda al usuario hasta que confirme que visualiz\u00F3 el recordatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioModalPage_ion_content_3_Template_ion_checkbox_ionChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r688); const ctx_r693 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r693.reprogramar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Ejecutar de nuevo el recordatorio con el tiempo que tiene configurado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-item-divider", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Programa una nueva fecha para la ejecuci\u00F3n del recordatorio en base a la frecuencia configurada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@entrada", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 8, ctx_r658.clientes, ctx_r658.texto, ctx_r658.personasSelect));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r658.frecuencia.patron);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r658.msgFrecuencia !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r658.informacion.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r658.informacion.contenido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r658.recheckedRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r658.repetirchecked);
} }
class RecordatorioModalPage {
    constructor(modalCtrl, plt, apiSeguimiento, apiRecordatorio, almacenamiento, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.apiSeguimiento = apiSeguimiento;
        this.apiRecordatorio = apiRecordatorio;
        this.almacenamiento = almacenamiento;
        this.toastCtrl = toastCtrl;
        this.configuracion = true;
        this.predeterminado = {
            semanal: false,
            mensual: false,
            diario: false
        };
        this.clientes = [];
        this.texto = '';
        this.personasSelect = [];
        this.msgFrecuencia = 'Cada cuantos días';
        this.tipo = '';
        this.frecuencia = {
            patron: 'diario',
            cantidad: 0
        };
        this.informacion = {
            titulo: '',
            contenido: '',
            archivos: []
        };
        this.repetirRecordatorio = 'SI';
        this.repetirProgramacion = 'SI';
        this.repetirchecked = true;
        this.recheckedRecord = true;
        this.plt.backButton.subscribe((e) => {
            if (this.configuracion) {
                this.cerrar();
            }
            else {
                this.configuracion = false;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('entre');
        if (this.type === 'editar') {
            this.configuracion = true;
            this.evaluar();
        }
        else if (this.type === 'informacion') {
        }
        else {
            this.configuracion = false;
        }
        this.alAbrir();
    }
    evaluar() {
        if (this.recordatorioData.tipo === 'personalizado') {
            this.vista = '2';
            console.log(this.recordatorioData);
            const data = this.recordatorioData;
            this.informacion = data.informacion;
            this.repetirProgramacion = data.repetirprograma;
            this.repetirRecordatorio = data.repetir;
            this.repetirchecked = data.repetirprograma === 'SI' ? true : false;
            this.recheckedRecord = data.repetir === 'SI' ? true : false;
            this.frecuencia = data.frecuencia;
            this.cambiarMensaje(data.frecuencia.patron);
            this.personasSelect = data.destinatarios;
        }
        else if (this.recordatorioData.tipo === 'predeterminado') {
            this.vista = '1';
            const data = this.recordatorioData;
            this.informacion = data.informacion;
            this.repetirProgramacion = data.repetirprograma;
            this.repetirRecordatorio = data.repetir;
            this.recheckedRecord = data.repetir === 'SI' ? true : false;
            this.frecuencia = data.frecuencia;
            this.personasSelect = data.destinatarios;
            this.predeterminado[data.frecuencia.patron] = true;
        }
    }
    cambiarMensaje(tipo) {
        switch (tipo) {
            case 'diario':
                this.msgFrecuencia = 'Cada cuantos días';
                break;
            case 'semanal':
                this.msgFrecuencia = 'Cada cuantas semanas';
                break;
            case 'mensual':
                this.msgFrecuencia = 'Cada cuantos meses';
                break;
        }
    }
    alAbrir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiSeguimiento.solicitudesAceptadas(info.token, 'sin receptor', '0').subscribe((cli) => {
                    console.log(cli);
                    if (cli.exe) {
                        if (cli.response.length > 0) {
                            cli.response.forEach((item) => {
                                item.usuarioEmisor.image = item.usuarioEmisor.imagen.length > 0 ? item.usuarioEmisor.imagen[0].path : 'ruta de app';
                            });
                        }
                    }
                    else {
                        // error
                    }
                    this.clientes = cli.response;
                }, (err) => {
                });
            }
        });
    }
    buscarPersona(event) {
        this.texto = event.detail.value;
    }
    selectPersona(event) {
        if (event.detail.checked) {
            if (!this.personasSelect.find(item => item.id === event.detail.value)) {
                const cli = this.clientes.filter((item) => item.usuarioEmisor._id === event.detail.value);
                this.personasSelect.push({
                    id: event.detail.value,
                    visto: 'NO',
                    dispositivo: cli[0].usuarioEmisor.usuarioID
                });
            }
        }
        else {
            this.personasSelect = this.personasSelect.filter(item => item.id !== event.detail.value);
        }
        console.log(this.personasSelect);
    }
    crear(tipo) {
        switch (tipo) {
            case 'predeterminado_cliente':
                this.vista = '1';
                break;
            case 'personalizado_cliente':
                this.vista = '2';
                break;
        }
        this.configuracion = true;
    }
    cancelar() {
        if (this.type === 'editar') {
            this.cerrar();
        }
        else {
            this.configuracion = false;
        }
    }
    // Configuracion predeterminado
    selectPredeterminado(tipo) {
        switch (tipo) {
            case 'diario':
                this.predeterminado.diario = !this.predeterminado.diario;
                this.frecuencia.cantidad = 1;
                this.frecuencia.patron = 'diario';
                this.predeterminado.mensual = false;
                break;
            case 'semanal':
                this.predeterminado.semanal = !this.predeterminado.semanal;
                break;
            case 'mensual':
                this.frecuencia.cantidad = 1;
                this.frecuencia.patron = 'mensual';
                this.predeterminado.mensual = !this.predeterminado.mensual;
                this.predeterminado.diario = false;
                break;
        }
    }
    frecuenciaPersonalizada(event) {
        this.frecuencia.patron = event.detail.value;
        switch (event.detail.value) {
            case 'diario':
                this.msgFrecuencia = 'Cada cuantos días';
                break;
            case 'semanal':
                this.msgFrecuencia = 'Cada cuantas semanas';
                break;
            case 'mensual':
                this.msgFrecuencia = 'Cada cuantos meses';
                break;
        }
    }
    repetir(event) {
        if (event.detail.checked) {
            this.repetirRecordatorio = 'SI';
            this.recheckedRecord = true;
        }
        else {
            this.repetirRecordatorio = 'NO';
            this.recheckedRecord = false;
        }
    }
    reprogramar(event) {
        if (event.detail.checked) {
            this.repetirProgramacion = 'SI';
            this.repetirchecked = true;
        }
        else {
            this.repetirProgramacion = 'NO';
            this.repetirchecked = false;
        }
    }
    cerrar() {
        this.modalCtrl.dismiss({});
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line:max-line-length
            if (this.personasSelect.length > 0 && this.informacion.titulo !== '' && this.informacion.contenido !== '' && this.frecuencia.patron !== '' && this.frecuencia.cantidad > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                const data = {
                    tipo: this.vista === '1' ? 'predeterminado' : 'personalizado',
                    destinos: this.personasSelect,
                    informacion: this.informacion,
                    frecuencia: this.frecuencia,
                    repetir: this.repetirRecordatorio,
                    repetirprograma: this.repetirProgramacion
                };
                console.log(data);
                if (info) {
                    if (this.type === 'editar') {
                        data._id = this.recordatorioData._id;
                        this.apiRecordatorio.putRecordatorio(info.token, data).subscribe((res) => {
                            if (res.exe) {
                                this.toastCtrl.alertApplication('Recordatorio actualizado con éxito', true);
                                this.cerrar();
                            }
                            else {
                                this.toastCtrl.alertApplication('No se pudo actualizar el recordatorio, intentelo más tarde', false);
                            }
                        }, (err) => {
                        });
                    }
                    else {
                        this.apiRecordatorio.postRecordatorio(info.token, data).subscribe((res) => {
                            if (res.exe) {
                                this.toastCtrl.alertApplication('Recordatorio creado con éxito', true);
                                this.cerrar();
                            }
                            else {
                                this.toastCtrl.alertApplication('No se pudo crear el recordatorio, intentelo más tarde', false);
                            }
                        }, (err) => {
                        });
                    }
                }
            }
            else {
                this.toastCtrl.alertApplication('Debe completar toda la información', false);
            }
        });
    }
}
RecordatorioModalPage.ɵfac = function RecordatorioModalPage_Factory(t) { return new (t || RecordatorioModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__["RecordatoriosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"])); };
RecordatorioModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecordatorioModalPage, selectors: [["app-recordatorio-modal"]], inputs: { type: "type", recordatorioData: "recordatorioData" }, decls: 4, vars: 4, consts: [["fullscreen", "true", 4, "ngIf"], ["class", "ion-no-border", 4, "ngIf"], ["fullscreen", "true", "color", "muro", 4, "ngIf"], ["fullscreen", "true"], ["color", "light", 1, "ion-padding"], [1, "divider", "caja-flex"], [1, "opt"], [1, "boton", "btn-verde", 3, "click"], ["color", "blanco", "slot", "icon-only", "name", "add-outline"], [1, "des"], [1, "ion-text-center"], [1, "boton", "btn-amarillo"], [1, "boton", "btn-rojo", 3, "click"], ["color", "blanco", "slot", "icon-only", "name", "close-outline"], [1, "ion-no-border"], ["slot", "start", "color", "danger", 3, "click"], ["name", "close"], [1, "ion-text-wrap"], ["slot", "end", "color", "success", 3, "click"], ["fullscreen", "true", "color", "muro"], [1, "divider"], ["color", "light"], [1, "divider", "blanco"], ["mode", "ios", "placeholder", "Buscar Cliente", 1, "ion-margin-bottom", 3, "ionChange"], [1, "blanco", "ion-margin-bottom"], [4, "ngFor", "ngForOf"], [1, "miflex"], ["mode", "md", 1, "tarjeta", 3, "click"], [1, "headercard"], [1, "boton", "btn-gris"], ["color", "dark", "slot", "icon-only", "name", "megaphone-outline", 4, "ngIf"], ["color", "success", "slot", "icon-only", "name", "megaphone-outline", 4, "ngIf"], ["type", "text", "placeholder", "Titulo del Recordatorio", 3, "ngModel", "ngModelChange"], ["rows", "5", "placeholder", "Contenido del Recordatorio", 3, "ngModel", "ngModelChange"], ["lines", "none", 1, "ion-margin-bottom"], ["checked", "true", "slot", "start", "color", "success"], ["slot", "start", 1, "avatar"], [3, "src"], ["slot", "end", "color", "success", 3, "checked", "value", "ionChange"], ["color", "dark", "slot", "icon-only", "name", "megaphone-outline"], ["color", "success", "slot", "icon-only", "name", "megaphone-outline"], ["okText", "Aceptar", "cancelText", "Cerrar", 3, "value", "ionChange"], ["value", "diario"], ["value", "semanal"], ["value", "mensual"], [4, "ngIf"], ["slot", "start", "color", "success", 3, "checked", "ionChange"], [1, "anuncio"], ["type", "number", "value", "1", 3, "ngModel", "ngModelChange"]], template: function RecordatorioModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecordatorioModalPage_ion_content_0_Template, 53, 0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecordatorioModalPage_ion_header_1_Template, 12, 0, "ion-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecordatorioModalPage_ion_content_2_Template, 57, 16, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecordatorioModalPage_ion_content_3_Template, 62, 12, "ion-content", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.configuracion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configuracion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configuracion && ctx.vista === "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configuracion && ctx.vista === "2");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NumericValueAccessor"]], pipes: [_pipes_filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_10__["FiltroRecordatorio"]], styles: [".caja-flex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.opt[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n  margin: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.opt[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.boton[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  color: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 40px;\n  font-weight: 100;\n}\n\n.btn-verde[_ngcontent-%COMP%]:hover {\n  background-color: #1E8C4A;\n}\n\n.btn-verde[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-success);\n}\n\n.btn-amarillo[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-warning);\n}\n\n.btn-amarillo[_ngcontent-%COMP%]:hover {\n  background-color: #AA8206;\n}\n\n.btn-rojo[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-danger);\n}\n\n.btn-rojo[_ngcontent-%COMP%]:hover {\n  background-color: #9C2D3C;\n}\n\n.btn-gris[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\n.btn-rojo[_ngcontent-%COMP%]:hover {\n  background-color: #9C2D3C;\n}\n\n.miflex[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.tarjeta[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n  margin: 5px;\n  box-shadow: none;\n  opacity: 0.5;\n  border: 1px solid rgba(3, 3, 3, 0.1);\n  -webkit-transition: all 0.1s;\n  transition: all 0.1s;\n}\n\n.headercard[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.isSelect[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  opacity: 1;\n  border: 2px solid var(--ion-color-success);\n}\n\n.anuncio[_ngcontent-%COMP%] {\n  background-color: #FFFBE5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvTW9kYWxlcy9yZWNvcmRhdG9yaW8tbW9kYWwvQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXE1vZGFsZXNcXHJlY29yZGF0b3Jpby1tb2RhbFxccmVjb3JkYXRvcmlvLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvTW9kYWxlcy9yZWNvcmRhdG9yaW8tbW9kYWwvcmVjb3JkYXRvcmlvLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUhBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Nb2RhbGVzL3JlY29yZGF0b3Jpby1tb2RhbC9yZWNvcmRhdG9yaW8tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhamEtZmxleCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vcHQge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm9wdCAuZGVzIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5idG4tdmVyZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOEM0QTtcclxufVxyXG5cclxuLmJ0bi12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5idG4tYW1hcmlsbG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4uYnRuLWFtYXJpbGxvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTgyMDY7XHJcbn1cclxuXHJcbi5idG4tcm9qbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuLmJ0bi1yb2pvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QzJEM0M7XHJcbn1cclxuXHJcbi5idG4tZ3JpcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4uYnRuLXJvam86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlDMkQzQztcclxufVxyXG5cclxuLm1pZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFyamV0YSB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcclxufVxyXG5cclxuLmhlYWRlcmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXNTZWxlY3Qge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5hbnVuY2lvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRTUgIWltcG9ydGFudDtcclxufSIsIi5jYWphLWZsZXgge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm9wdCB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9wdCAuZGVzIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYm90b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmJ0bi12ZXJkZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRThDNEE7XG59XG5cbi5idG4tdmVyZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5idG4tYW1hcmlsbG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5cbi5idG4tYW1hcmlsbG86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUE4MjA2O1xufVxuXG4uYnRuLXJvam8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmJ0bi1yb2pvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlDMkQzQztcbn1cblxuLmJ0bi1ncmlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmJ0bi1yb2pvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlDMkQzQztcbn1cblxuLm1pZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhcmpldGEge1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgbWFyZ2luOiA1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cblxuLmhlYWRlcmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pc1NlbGVjdCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmFudW5jaW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkU1ICFpbXBvcnRhbnQ7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    }),
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecordatorioModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recordatorio-modal',
                templateUrl: './recordatorio-modal.page.html',
                styleUrls: ['./recordatorio-modal.page.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('entrada', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                opacity: 1
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                opacity: 0
                            }),
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__["ApiSeguimientoService"] }, { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__["RecordatoriosService"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], recordatorioData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/Recordatorios/recordatorio/recordatorio-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RecordatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageRoutingModule", function() { return RecordatorioPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordatorio.page */ "./src/app/pages/Recordatorios/recordatorio/recordatorio.page.ts");





const routes = [
    {
        path: '',
        component: _recordatorio_page__WEBPACK_IMPORTED_MODULE_2__["RecordatorioPage"]
    }
];
class RecordatorioPageRoutingModule {
}
RecordatorioPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecordatorioPageRoutingModule });
RecordatorioPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecordatorioPageRoutingModule_Factory(t) { return new (t || RecordatorioPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecordatorioPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordatorioPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Recordatorios/recordatorio/recordatorio.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio.module.ts ***!
  \*************************************************************************/
/*! exports provided: RecordatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageModule", function() { return RecordatorioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recordatorio-routing.module */ "./src/app/pages/Recordatorios/recordatorio/recordatorio-routing.module.ts");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordatorio.page */ "./src/app/pages/Recordatorios/recordatorio/recordatorio.page.ts");
/* harmony import */ var _Modales_recordatorio_modal_recordatorio_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modales/recordatorio-modal/recordatorio-modal.module */ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.module.ts");
/* harmony import */ var _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/recordatorio-modal/recordatorio-modal.page */ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










class RecordatorioPageModule {
}
RecordatorioPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecordatorioPageModule });
RecordatorioPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecordatorioPageModule_Factory(t) { return new (t || RecordatorioPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordatorioPageRoutingModule"],
            _Modales_recordatorio_modal_recordatorio_modal_module__WEBPACK_IMPORTED_MODULE_6__["RecordatorioModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecordatorioPageModule, { declarations: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_5__["RecordatorioPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordatorioPageRoutingModule"],
        _Modales_recordatorio_modal_recordatorio_modal_module__WEBPACK_IMPORTED_MODULE_6__["RecordatorioModalPageModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordatorioPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                entryComponents: [
                    _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_7__["RecordatorioModalPage"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecordatorioPageRoutingModule"],
                    _Modales_recordatorio_modal_recordatorio_modal_module__WEBPACK_IMPORTED_MODULE_6__["RecordatorioModalPageModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
                ],
                declarations: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_5__["RecordatorioPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Recordatorios/recordatorio/recordatorio.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio.page.ts ***!
  \***********************************************************************/
/*! exports provided: RecordatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPage", function() { return RecordatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modales/recordatorio-modal/recordatorio-modal.page */ "./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "./src/app/providers/Api/Seguimiento.service.ts");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Recordatorios.service */ "./src/app/providers/Api/Recordatorios.service.ts");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/cargas/Entradas.service */ "./src/app/providers/cargas/Entradas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pipes/filtros/filtro-recorlist.pipe */ "./src/app/pipes/filtros/filtro-recorlist.pipe.ts");
/* harmony import */ var _pipes_Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/Textos/recortar.pipe */ "./src/app/pipes/Textos/recortar.pipe.ts");




















function RecordatorioPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Recordatorios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@entrada", undefined);
} }
function RecordatorioPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r703 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Opciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioPage_ion_toolbar_2_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r703); const ctx_r702 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r702.informacion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioPage_ion_toolbar_2_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r703); const ctx_r704 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r704.modal("editar"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioPage_ion_toolbar_2_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r703); const ctx_r705 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r705.eliminarRecordatorio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioPage_ion_toolbar_2_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r703); const ctx_r706 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r706.cerrarOpt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@entrada", undefined);
} }
function RecordatorioPage_div_10_ion_item_5_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 31);
} }
function RecordatorioPage_div_10_ion_item_5_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "recortar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recor_r708 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recor_r708.informacion.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, recor_r708.informacion.contenido), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Frecuencia ", recor_r708.frecuencia.patron, "");
} }
function RecordatorioPage_div_10_ion_item_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No hay resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecordatorioPage_div_10_ion_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r714 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("press", function RecordatorioPage_div_10_ion_item_5_Template_ion_item_press_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r714); const recor_r708 = ctx.$implicit; const ctx_r713 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r713.opciones(recor_r708); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecordatorioPage_div_10_ion_item_5_ion_icon_1_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecordatorioPage_div_10_ion_item_5_ion_label_2_Template, 9, 5, "ion-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecordatorioPage_div_10_ion_item_5_div_3_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recor_r708 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("select", recor_r708.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lines", recor_r708.nada ? "none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !recor_r708.nada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !recor_r708.nada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", recor_r708.nada);
} }
function RecordatorioPage_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Personalizados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecordatorioPage_div_10_ion_item_5_Template, 4, 6, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "filtroRecorList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r696 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 1, ctx_r696.lista, "personalizado", ctx_r696.texto));
} }
function RecordatorioPage_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} }
function RecordatorioPage_div_12_ion_item_5_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 31);
} }
function RecordatorioPage_div_12_ion_item_5_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "recortar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recor_r716 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recor_r716.informacion.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, recor_r716.informacion.contenido), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Frecuencia ", recor_r716.frecuencia.patron, "");
} }
function RecordatorioPage_div_12_ion_item_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No hay resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecordatorioPage_div_12_ion_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r722 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("press", function RecordatorioPage_div_12_ion_item_5_Template_ion_item_press_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r722); const recor_r716 = ctx.$implicit; const ctx_r721 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r721.opciones(recor_r716); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecordatorioPage_div_12_ion_item_5_ion_icon_1_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecordatorioPage_div_12_ion_item_5_ion_label_2_Template, 9, 5, "ion-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecordatorioPage_div_12_ion_item_5_div_3_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recor_r716 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("select", recor_r716.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lines", recor_r716.nada ? "none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !recor_r716.nada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !recor_r716.nada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", recor_r716.nada);
} }
function RecordatorioPage_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Predeterminados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecordatorioPage_div_12_ion_item_5_Template, 4, 6, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "filtroRecorList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r698 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 1, ctx_r698.lista, "predeterminado", ctx_r698.texto));
} }
function RecordatorioPage_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 35);
} }
function RecordatorioPage_div_14_ion_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r726 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioPage_div_14_ion_item_5_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r726); const recor_r724 = ctx.$implicit; const ctx_r725 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r725.ver(recor_r724); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "recortar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recor_r724 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recor_r724.informacion.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, recor_r724.informacion.contenido), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Frecuencia ", recor_r724.frecuencia.patron, "");
} }
function RecordatorioPage_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-divider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Personalizados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecordatorioPage_div_14_ion_item_5_Template, 11, 5, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r700 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r700.lista);
} }
function RecordatorioPage_ion_fab_15_Template(rf, ctx) { if (rf & 1) {
    const _r728 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-fab-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordatorioPage_ion_fab_15_Template_ion_fab_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r728); const ctx_r727 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r727.modal("normal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RecordatorioPage {
    constructor(modalCtrl, animationCtrl, apiSeguimiento, apiRecordatorios, almacenamiento, miToast, alertCtrl, entrada) {
        this.modalCtrl = modalCtrl;
        this.animationCtrl = animationCtrl;
        this.apiSeguimiento = apiSeguimiento;
        this.apiRecordatorios = apiRecordatorios;
        this.almacenamiento = almacenamiento;
        this.miToast = miToast;
        this.alertCtrl = alertCtrl;
        this.entrada = entrada;
        this.lista = [];
        this.vista = '1';
        this.role = '';
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.listaRecordatorios();
    }
    refrescando(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.listaRecordatorios();
            if (res) {
                console.log(res);
                event.target.complete();
            }
            else {
                event.target.complete();
            }
        });
    }
    listaRecordatorios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                if (info.role !== 'USER_ROLE') {
                    this.apiRecordatorios.getRecordatorio(info.token).subscribe((data) => {
                        console.log(data);
                        if (data.exe) {
                            data.response.forEach((item) => {
                                item.checked = false;
                            });
                            this.lista = data.response;
                        }
                        else {
                            this.miToast.alertApplication('No se pudo traer los recordatorios, intentelo más tarde', false);
                        }
                    });
                }
                else {
                    this.apiRecordatorios.getRecordatorioPersona(info.token).subscribe((data) => {
                        console.log(data);
                        if (data.exe) {
                            data.response.forEach((item) => {
                                item.checked = false;
                            });
                            this.lista = data.response;
                        }
                        else {
                            this.miToast.alertApplication('No se pudo traer los recordatorios, intentelo más tarde', false);
                        }
                    });
                }
                return true;
            }
        });
    }
    opciones(item) {
        if (!this.recordatorio) {
            this.vista = '2';
            item.checked = !item.checked;
            this.recordatorio = item;
        }
    }
    eliminarRecordatorio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Borrar Recordatorio',
                message: '¿Está seguro de eliminar este recordatorio de forma permanente?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.apiRecordatorios.deleteRecordatorio(info.token, this.recordatorio._id).subscribe((data) => {
                                    if (data.exe) {
                                        this.miToast.alertApplication('El recordatorio ha sido eliminado', true);
                                        this.listaRecordatorios();
                                    }
                                    else {
                                        this.miToast.alertApplication('No se pudo borrar el recordatorio, intentelo más tarde', false);
                                    }
                                    this.recordatorio = false;
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    cerrarOpt() {
        this.vista = '1';
        this.lista.forEach((item) => item.checked = false);
        this.recordatorio = false;
    }
    modal(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const enterAnimation = (baseEl) => {
                const backdropAnimation = this.animationCtrl.create()
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
                const wrapperAnimation = this.animationCtrl.create()
                    .addElement(baseEl.querySelector('.modal-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: '0', transform: 'scale(0)  translateX(300px)' },
                    { offset: 1, opacity: '0.99', transform: 'scale(1) translateX(0)' }
                ]);
                return this.animationCtrl.create()
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(300)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            const leaveAnimation = (baseEl) => {
                return enterAnimation(baseEl).direction('reverse');
            };
            const mimodal = yield this.modalCtrl.create({
                component: _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_3__["RecordatorioModalPage"],
                componentProps: {
                    type,
                    // recorType: this.recordatorio.tipo,
                    recordatorioData: this.recordatorio
                },
                mode: 'ios',
                enterAnimation,
                leaveAnimation
            });
            yield mimodal.present();
            const cerrado = yield mimodal.onWillDismiss();
            if (cerrado) {
                this.recordatorio = false;
                this.vista = '1';
                this.listaRecordatorios();
            }
        });
    }
    informacion() {
        this.entrada.crearEntrada();
    }
    filtrar(event) {
        this.texto = event.detail.value;
    }
    ver(recor) {
        this.entrada.mostrarSoloUna(recor);
    }
}
RecordatorioPage.ɵfac = function RecordatorioPage_Factory(t) { return new (t || RecordatorioPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__["RecordatoriosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_9__["EntradasServices"])); };
RecordatorioPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecordatorioPage, selectors: [["app-recordatorio"]], decls: 16, vars: 8, consts: [[1, "ion-no-border"], ["color", "oscuro", "mode", "md", 4, "ngIf"], ["color", "barra", "mode", "md", 4, "ngIf"], ["color", "light"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [1, "divider"], [1, "divider", "blanco"], ["mode", "ios", "placeholder", "Buscar Recordatorio", 3, "ionChange"], ["class", "blanco", 4, "ngIf"], ["class", "divider", 4, "ngIf"], ["class", " blanco", 4, "ngIf"], ["class", "divider light", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["color", "oscuro", "mode", "md"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu"], ["color", "barra", "mode", "md"], ["slot", "end"], [3, "click"], ["name", "information-outline", "slot", "icon-only"], ["name", "pencil-outline", "slot", "icon-only"], ["name", "trash-outline", "slot", "icon-only"], ["name", "close-outline", "slot", "icon-only"], [1, "blanco"], ["color", "medium", 1, "color-blanco"], [3, "select", "lines", "press", 4, "ngFor", "ngForOf"], [3, "lines", "press"], ["name", "megaphone-outline", "slot", "start", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "nada", 4, "ngIf"], ["name", "megaphone-outline", "slot", "start"], [1, "ion-text-wrap"], [1, "color-verde"], [1, "nada"], [1, "divider", "light"], ["color", "medium"], [3, "click", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "barra", 3, "click"], ["name", "add-outline"]], template: function RecordatorioPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecordatorioPage_ion_toolbar_1_Template, 5, 1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecordatorioPage_ion_toolbar_2_Template, 12, 1, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-refresher", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function RecordatorioPage_Template_ion_refresher_ionRefresh_4_listener($event) { return ctx.refrescando($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-refresher-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-searchbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecordatorioPage_Template_ion_searchbar_ionChange_8_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RecordatorioPage_div_10_Template, 7, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RecordatorioPage_div_11_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RecordatorioPage_div_12_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RecordatorioPage_div_13_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RecordatorioPage_div_14_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RecordatorioPage_ion_fab_15_Template, 3, 0, "ion-fab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role !== "USER_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role !== "USER_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role !== "USER_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "USER_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "USER_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role !== "USER_ROLE");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"]], pipes: [_pipes_filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_11__["FiltroRecordatoriosLista"], _pipes_Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_12__["RecortarTextoPipe"]], styles: ["ion-card[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.color-verde[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n\n.select[_ngcontent-%COMP%] {\n  border: 2px solid var(--ion-color-success) !important;\n}\n\n.nada[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: #fafafa;\n  opacity: 0.7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.nada[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUmVjb3JkYXRvcmlvcy9yZWNvcmRhdG9yaW8vQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXFJlY29yZGF0b3Jpb3NcXHJlY29yZGF0b3Jpb1xccmVjb3JkYXRvcmlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvUmVjb3JkYXRvcmlvcy9yZWNvcmRhdG9yaW8vcmVjb3JkYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxREFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9SZWNvcmRhdG9yaW9zL3JlY29yZGF0b3Jpby9yZWNvcmRhdG9yaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwcHhcclxufVxyXG5cclxuLmNvbG9yLXZlcmRlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYWRhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYWRhIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uY29sb3ItdmVyZGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uc2VsZWN0IHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG5cbi5uYWRhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYWRhIGgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecordatorioPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recordatorio',
                templateUrl: './recordatorio.page.html',
                styleUrls: ['./recordatorio.page.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] }, { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__["ApiSeguimientoService"] }, { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__["RecordatoriosService"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] }, { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }, { type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_9__["EntradasServices"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Recordatorios-recordatorio-recordatorio-module-es2015.js.map