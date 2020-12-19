(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"],{

/***/ "./src/app/pages/registro/registro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro.page */ "./src/app/pages/registro/registro.page.ts");








const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_5__["RegistroPage"]
    }
];
class RegistroPageModule {
}
RegistroPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistroPageModule });
RegistroPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistroPageModule_Factory(t) { return new (t || RegistroPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistroPageModule, { declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_5__["RegistroPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_5__["RegistroPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/registro/registro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Api/UsuariosLogin.service */ "./src/app/providers/Api/UsuariosLogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Registro/registro.service */ "./src/app/providers/Registro/registro.service.ts");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _providers_Utilidades_AlertService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/Utilidades/AlertService.service */ "./src/app/providers/Utilidades/AlertService.service.ts");
/* harmony import */ var _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../providers/PushService/PushService.service */ "./src/app/providers/PushService/PushService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






















const _c0 = ["slide"];
const _c1 = ["content"];
function RegistroPage_ion_slides_11_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-spinner", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Validando Usuario...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroPage_ion_slides_11_ion_select_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pais_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pais_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pais_r48.nombre);
} }
function RegistroPage_ion_slides_11_ion_item_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroPage_ion_slides_11_ion_item_53_ion_select_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ciudad_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ciudad_r50.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ciudad_r50.nombre);
} }
function RegistroPage_ion_slides_11_ion_item_53_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selecciona la ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_ion_item_53_Template_ion_select_ionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.seleccionarCiudad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegistroPage_ion_slides_11_ion_item_53_ion_select_option_4_Template, 2, 2, "ion-select-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.ciudades);
} }
function RegistroPage_ion_slides_11_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-spinner", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Guardando informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroPage_ion_slides_11_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Escriba su nombre completo de Persona o negocio correspondiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_input_ionChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.changeOne([ctx_r53.forma.controls.nombreCompleto.errors]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Escriba un nombre de usuario para la aplicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_input_ionChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.comprobarUsuario($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegistroPage_ion_slides_11_div_27_Template, 5, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Escriba su correo electr\u00F3nico (opcional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_input_ionChange_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.changeOne([ctx_r56.forma.controls.correo.errors, ctx_r56.forma.controls.tel.errors]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Escriba su tel\u00E9fono celular (opcional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_input_ionChange_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.changeOne([ctx_r57.forma.controls.correo.errors, ctx_r57.forma.controls.tel.errors]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Selecciona el Pa\u00EDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_select_ionChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.listarCiudades($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, RegistroPage_ion_slides_11_ion_select_option_50_Template, 2, 2, "ion-select-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u00B4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, RegistroPage_ion_slides_11_ion_item_52_Template, 3, 0, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, RegistroPage_ion_slides_11_ion_item_53_Template, 5, 1, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Escriba su contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_input_ionChange_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.changeOne([ctx_r59.forma.controls.clave.errors, ctx_r59.forma.controls.confirmarClave.errors]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Confirmar la contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegistroPage_ion_slides_11_Template_ion_input_ionChange_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.changeOne([ctx_r60.forma.controls.clave.errors, ctx_r60.forma.controls.confirmarClave.errors]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Clave Privada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, RegistroPage_ion_slides_11_div_76_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r41.usuarioValido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.paises);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r41.ciudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r41.ciudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r41.usuarioValido);
} }
class RegistroPage {
    constructor(usuarioService, toastService, router, navCtrl, registroService, almacenamiento, platform, alertService, OSSignal) {
        this.usuarioService = usuarioService;
        this.toastService = toastService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.registroService = registroService;
        this.almacenamiento = almacenamiento;
        this.platform = platform;
        this.alertService = alertService;
        this.OSSignal = OSSignal;
        this.usuarioValido = true;
        this.colorStatus = 'blanco';
        this.mensaje = 'Ingresa su nombre completo';
        this.usuarioID = '';
        this.paises = [];
        this.ciudades = [];
        this.ciudad = false;
        this.load = false;
        this.pais = '';
        this.miciudad = '';
        this.index = 0;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombreCompleto': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]),
            'nombreUsuario': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            'clave': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            'confirmarClave': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'tel': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.forma.controls['confirmarClave'].setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), this.compareClaves.bind(this.forma)
        ]);
        this.OSSignal.$usuarioID.subscribe((usuarioID) => {
            this.usuarioID = usuarioID;
            // console.log('Entramos al usuarioID ', usuarioID);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.probar();
        this.listarPaises();
    }
    listarPaises() {
        this.usuarioService.listarPaises().subscribe((data) => {
            if (data.exe) {
                this.paises = data.response;
            }
            else {
                this.paises.push('Colombia');
            }
        }, (err) => {
            this.paises.push('Colombia');
        });
    }
    listarCiudades(event) {
        this.ciudad = true;
        this.pais = event.detail.value.nombre;
        this.miciudad = '';
        this.usuarioService.listarCiudades(event.detail.value._id).subscribe((data) => {
            if (data.exe) {
                this.ciudades = data.response;
                this.changeOne2();
            }
            else {
                this.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
        }, (err) => {
            this.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
        });
    }
    seleccionarCiudad(event) {
        this.miciudad = event.detail.value;
        this.changeOne2();
    }
    probar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.Slide.lockSwipes(true).then(() => {
                    // console.log('bien');
                });
            }
        });
    }
    changeOne2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.index);
            if (this.index === 1 && this.pais !== '' && this.miciudad !== '') {
                this.colorStatus = 'success';
            }
            else if (this.index !== 1) {
                this.colorStatus = 'success';
            }
            else {
                this.colorStatus = 'blanco';
            }
        });
    }
    changeOne(campoForma) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.index);
            const item = campoForma.filter((dato) => dato === null);
            if (item.length === campoForma.length) {
                if (this.index === 1 && this.pais !== '' && this.miciudad !== '') {
                }
                else if (this.index !== 1) {
                    this.colorStatus = 'success';
                }
                else {
                    this.colorStatus = 'blanco';
                }
            }
            else {
                this.colorStatus = 'blanco';
            }
        });
    }
    retroceso() {
        this.alertService.alertBasicApplication('Mensaje', '¿Estas seguro de que deseas cancelar el registro?', () => {
            this.registroService.cambioEstado(true);
            this.navCtrl.navigateBack('/home');
        });
    }
    // Validaciones Funcines
    compareClaves(control) {
        if (control.value !== this.controls['clave'].value) {
            return {
                compare: true
            };
        }
        return null;
    }
    guardarCambios() {
        this.usuarioValido = false;
        const dataRegistro = this.forma.value;
        dataRegistro.usuarioID = this.usuarioID === '' ? 'hola' : this.usuarioID;
        dataRegistro.pais = this.pais,
            dataRegistro.ciudad = this.miciudad;
        this.usuarioService.registrar(dataRegistro).subscribe((datos) => {
            this.usuarioValido = true;
            delete datos.clave;
            datos.clave = this.forma.controls.clave.value;
            datos.usuarioID = 'hola';
            this.almacenamiento.guardarUsuario(datos).then(() => {
                this.toastService.alertApplication('Usuario registrado corectamente', true);
                this.registroService.cambioEstado(true);
                this.almacenamiento.cambiarEstado(false);
                this.navCtrl.navigateForward(['/central']);
            }, (error) => {
                this.usuarioValido = true;
                this.toastService.alertApplication(error, false);
            });
        }, (error) => { this.toastService.alertApplication(error, false); this.usuarioValido = true; }, () => { });
    }
    comprobarUsuario(event) {
        if (!this.forma.controls.nombreUsuario.errors) {
            this.usuarioValido = false;
            this.usuarioService.usuario(event.detail.value).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.exe) {
                    this.usuarioValido = true;
                    this.colorStatus = 'blanco';
                    this.mensaje = 'El usuario ya existe, por favor escoge otro nombre';
                }
                else {
                    this.colorStatus = 'success';
                    this.usuarioValido = true;
                    this.mensaje = 'El nombre de usuario esta disponible';
                }
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.toastService.alertApplication(error, false);
                this.usuarioValido = true;
            }), () => {
                // console.log('Listo Completado');
            });
        }
        else {
            this.colorStatus = 'blanco';
        }
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Next');
            if (this.colorStatus === 'success') {
                yield this.Content.scrollToTop(100);
                this.Slide.getActiveIndex().then((index) => {
                    this.index = index;
                    if (index === 3) {
                        this.guardarCambios();
                        return;
                    }
                    else if (index === 0) {
                        this.mensaje = 'Escge un nombre de usuario personalizado';
                    }
                    else if (index === 1) {
                        this.mensaje = 'Ingresa un correo y número celular válido al cual se contacten contigo';
                    }
                    else if (index === 2) {
                        this.mensaje = 'Tú contraseña debe tener almenos 8 caracteres';
                    }
                    this.avanzar();
                });
            }
        });
    }
    avanzar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Avanzar');
            this.colorStatus = 'blanco';
            this.registroService.cambioEstado(false);
            yield this.Slide.lockSwipes(false);
            yield this.Slide.lockSwipeToPrev(true);
            yield this.Slide.slideNext(300);
            yield this.Slide.lockSwipeToNext(true);
        });
    }
    ioniewDidLeave() {
        this.Slide.lockSwipes(true).then(() => {
            // console.log('bien');
        });
    }
}
RegistroPage.ɵfac = function RegistroPage_Factory(t) { return new (t || RegistroPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_6__["RegistroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_AlertService_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_10__["PushService"])); };
RegistroPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistroPage, selectors: [["app-registro"]], viewQuery: function RegistroPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.Slide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.Content = _t.first);
    } }, decls: 19, vars: 3, consts: [["color", "", 1, "ion-no-border"], ["color", "success"], ["slot", "start"], ["fill", "clear", 1, "cancelar", 3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], ["color", "blanco"], ["content", ""], [1, "contenedor"], [3, "formGroup", "ngSubmit"], ["class", "slide-full", 4, "ngIf"], ["mode", "md"], [3, "color", "click"], ["slot", "end"], ["fill", "clear"], ["name", "arrow-round-forward", "slot", "icon-only"], [1, "slide-full"], ["slide", ""], [1, "slide"], [1, "content", 2, "width", "100%"], ["size", "12"], [1, "ion-margin-top"], ["lines", "none", "mode", "md", 1, "ion-margin-top"], [1, "ion-text-wrap"], ["lines", "none", "mode", "ios", 1, "campo", "ion-margin-top"], ["placeholder", "Nombre Completo", "type", "text", "formControlName", "nombreCompleto", 3, "ionChange"], ["placeholder", "Moto_28", "type", "text", "formControlName", "nombreUsuario", 3, "ionChange"], ["class", "contenido", 4, "ngIf"], ["placeholder", "Correo Electr\u00F3nico", "type", "email", "formControlName", "correo", 3, "ionChange"], ["placeholder", "N\u00FAmero de Celular", "type", "tel", "formControlName", "tel", 3, "ionChange"], ["lines", "none", "mode", "md", 1, "ion-margin-top", "sinfondo"], ["color", "danger"], ["lines", "none", "mode", "md", 1, ""], ["okText", "Aceptar", "cancelText", "Cancelar", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", "class", " ion-margin-top sinfondo", "mode", "md", 4, "ngIf"], ["lines", "none", "class", " ", "mode", "md", 4, "ngIf"], ["type", "password", "formControlName", "clave", 3, "ionChange"], ["type", "password", "formControlName", "confirmarClave", 3, "ionChange"], [1, "ion-text-center", "ion-margin-top", "opacity"], [1, "contenido"], [1, "load"], ["color", "primary", "name", "crescent"], [3, "value"]], template: function RegistroPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroPage_Template_ion_button_click_3_listener() { return ctx.retroceso(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Crear cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistroPage_Template_form_ngSubmit_10_listener() { return ctx.guardarCambios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegistroPage_ion_slides_11_Template, 77, 5, "ion-slides", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroPage_Template_ion_toolbar_click_13_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.colorStatus);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"]], styles: [".contenedor[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 600px;\n  margin: auto;\n}\n\n.cancelar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-item[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.campo[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.contenido[_ngcontent-%COMP%]   .load[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contenido[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.contenido[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  opacity: 0.7;\n}\n\n.message[_ngcontent-%COMP%] {\n  background: #FFEEC0;\n}\n\n.sizeM[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJvXFxyZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDaEI7O0FERVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ2hCOztBREVZO0VBQ0ksc0JBQUE7QUNDaEI7O0FERVk7RUFDSSxvQ0FBQTtBQ0NoQjs7QURFWTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NoQjs7QURFWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDaEI7O0FERVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ2hCOztBREVZO0VBQ0ksbUJBQUE7QUNDaEI7O0FERVk7RUFDSSxlQUFBO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAgICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2FuY2VsYXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jYW1wbyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW5pZG8gLmxvYWQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNvbnRlbmlkbyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW5pZG8gcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkVFQzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zaXplTSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH0iLCIuY29udGVuZWRvciB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYW5jZWxhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNhbXBvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY29udGVuaWRvIC5sb2FkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVuaWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbmlkbyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0ZGRUVDMDtcbn1cblxuLnNpemVNIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistroPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.page.html',
                styleUrls: ['./registro.page.scss'],
            }]
    }], function () { return [{ type: src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_6__["RegistroService"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }, { type: _providers_Utilidades_AlertService_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }, { type: _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_10__["PushService"] }]; }, { Slide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['slide', { static: false }]
        }], Content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "./src/app/providers/Api/UsuariosLogin.service.ts":
/*!********************************************************!*\
  !*** ./src/app/providers/Api/UsuariosLogin.service.ts ***!
  \********************************************************/
/*! exports provided: UsuariosLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosLoginService", function() { return UsuariosLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");













class UsuariosLoginService {
    constructor(http, transfer, almacenamiento, navCtrl) {
        this.http = http;
        this.transfer = transfer;
        this.almacenamiento = almacenamiento;
        this.navCtrl = navCtrl;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((errorHttp) => {
            intento++;
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                if (intento === 3) {
                    throw new Error('Error de Red');
                }
            }
            else if (errorHttp instanceof ProgressEvent) {
                if (intento === 3) {
                    throw new Error('Error de Red');
                }
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' al realizar la solicictud ');
                }
                else if (errorHttp.status === 401) {
                    this.almacenamiento.terminarPartida().then(() => {
                        this.navCtrl.navigateRoot('/home');
                    });
                    throw new Error('No tiene permisos para realizar la petición ');
                }
                else {
                    console.log(errorHttp, 'Error de servidor');
                    throw new Error(' No se pudo realizar la petición, intentalo más tarde ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
    }
    registrar(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            if (res.exe) {
                res.response.exe = res.exe;
                res.response.token = res.token;
                return res.response;
            }
            else {
                return res;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    usuario(usuario) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios/unico`, { buscar: usuario }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    iniciarPartida(usuario, dispositivoID) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-dispositivoID': dispositivoID
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/login`, usuario, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            if (res.exe) {
                res.response.exe = res.exe;
                res.response.token = res.token;
                return res.response;
            }
            else {
                return res.exe;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    fotoPerfilUsuarioMoto(imagen, token, tipo) {
        const options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
                'x-token': token
            },
            params: {
                tipo
            }
        };
        // 4912685137238652
        const fileTransfer = this.transfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/upload`, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    fotoPortada(imagen, token, old) {
        const options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
                'x-token': token
            },
            params: {
                old
            }
        };
        // 4912685137238652
        const fileTransfer = this.transfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/upload/portada/`, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    viewImagen(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/ver`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarUsuario(termino, token) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios/${termino}`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarPerfilUsuario(usuario, token) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/usuarios/perfil/${usuario}`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    traerMisNotificaciones(token, desde) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token,
                'x-desde': desde.toString()
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/notificaciones/misnotificaciones/`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    notiCantidad(token) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/notificaciones/numero/`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    ActualizarNotificaciones(token, id) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/notificaciones/misnotificaciones/cambiarestado/`, { id }, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarPaises() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/paises`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarCiudades(pais) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-pais': pais
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/ciudad`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    CodigoComprobar(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/codigos`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    EditarCodigo(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/codigos/cambiar`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
    negocios() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/tiponegocio`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.hanflerError(error)));
    }
}
UsuariosLoginService.ɵfac = function UsuariosLoginService_Factory(t) { return new (t || UsuariosLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"])); };
UsuariosLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosLoginService, factory: UsuariosLoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] }, { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }]; }, null); })();


/***/ }),

/***/ "./src/app/providers/Utilidades/AlertService.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/providers/Utilidades/AlertService.service.ts ***!
  \**************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





class AlertService {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    // tslint:disable-next-line:ban-types
    alertBasicApplication(header, message, handlerFunction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Confirmar',
                        handler: () => {
                            handlerFunction();
                        }
                    }
                ]
            });
            return yield alert.present();
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-registro-registro-module-es2015.js.map