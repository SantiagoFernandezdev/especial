(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-usuario-perfil-perfil-module"],{

/***/ "./src/app/Pages/usuario/perfil/perfil.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/usuario/perfil/perfil.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.page */ "./src/app/Pages/usuario/perfil/perfil.page.ts");
/* harmony import */ var _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modales/modal/modal.module */ "./src/app/Pages/Modales/modal/modal.module.ts");
/* harmony import */ var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/modal/modal.page */ "./src/app/Pages/Modales/modal/modal.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video.directive */ "./src/app/Pages/usuario/perfil/video.directive.ts");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.module */ "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.module.ts");














const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]
    }
];
class PerfilPageModule {
}
PerfilPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PerfilPageModule });
PerfilPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PerfilPageModule_Factory(t) { return new (t || PerfilPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerfilPageModule, { declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"],
        _video_directive__WEBPACK_IMPORTED_MODULE_9__["VideoDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalPageModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
        _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                entryComponents: [
                    _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"],
                    _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPage"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalPageModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                    _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPageModule"]
                ],
                declarations: [
                    _perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"],
                    _video_directive__WEBPACK_IMPORTED_MODULE_9__["VideoDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Pages/usuario/perfil/perfil.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/usuario/perfil/perfil.page.ts ***!
  \*****************************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "./src/app/providers/Api/UsuariosLogin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "./src/app/providers/Utilidades/LoadingService.service.ts");
/* harmony import */ var _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Api/Biografia.service */ "./src/app/providers/Api/Biografia.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "./src/app/providers/cargas/usuarios.service.ts");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "./src/app/providers/Api/Seguimiento.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Modales/modal/modal.page */ "./src/app/Pages/Modales/modal/modal.page.ts");
/* harmony import */ var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../providers/Api/IGTM.service */ "./src/app/providers/Api/IGTM.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "./src/app/Pages/Modales/igtmplantilla/igtmplantilla.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./video.directive */ "./src/app/Pages/usuario/perfil/video.directive.ts");
/* harmony import */ var _pipes_Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../pipes/Fechas/horario.pipe */ "./src/app/pipes/Fechas/horario.pipe.ts");




































const _c0 = ["mislidedos"];
const _c1 = ["miContenido"];
function PerfilPage_ion_content_0_ion_back_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-back-button", 31);
} }
function PerfilPage_ion_content_0_ion_avatar_18_Template(rf, ctx) { if (rf & 1) {
    const _r1787 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-avatar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_avatar_18_Template_ion_avatar_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1787); const ctx_r1786 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1786.modal("mediap"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1783 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1783.Image);
} }
function PerfilPage_ion_content_0_ion_avatar_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-avatar", 34);
} }
function PerfilPage_ion_content_0_ion_slides_47_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "A\u00FAn no hay informaci\u00F3n sobre tu negocio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Establecimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "horario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "horario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1790 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1790.contenido.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1790.contenido.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1790.contenido.pagina);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1790.contenido.ciudad, ", ", ctx_r1790.contenido.pais, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Abierto desde las ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 9, ctx_r1790.contenido.desde), " hasta las ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 11, ctx_r1790.contenido.hasta), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" De ", ctx_r1790.contenido.de, " a ", ctx_r1790.contenido.a, "");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_5_div_3_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1799 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1799, " ");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilPage_ion_content_0_ion_slides_47_div_5_div_3_ion_card_1_Template, 6, 1, "ion-card", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1797 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1797.servicios);
} }
function PerfilPage_ion_content_0_ion_slides_47_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilPage_ion_content_0_ion_slides_47_div_5_div_3_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1791 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1791.role === "TALLER_ROLE");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Veh\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1792 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1792.contenido.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1792.contenido.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1792.contenido.Marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("M\u00F3delo ", ctx_r1792.contenido.Modelo, "");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-skeleton-text", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function () { return [1, 1, 1, 1, 1]; };
function PerfilPage_ion_content_0_ion_slides_47_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilPage_ion_content_0_ion_slides_47_div_8_div_1_Template, 9, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r1816 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1816); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r1814 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1814.etiquetas(publicacion_r1804.etiquetas); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r1819 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_21_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1819); const ctx_r1818 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1818.$implicit; const o_r1805 = ctx_r1818.index; const ctx_r1817 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1817.guardado(publicacion_r1804, "crear", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r1822 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_22_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1822); const ctx_r1821 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1821.$implicit; const o_r1805 = ctx_r1821.index; const ctx_r1820 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1820.guardado(publicacion_r1804, "eliminar", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r1825 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_25_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1825); const ctx_r1824 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1824.$implicit; const o_r1805 = ctx_r1824.index; const ctx_r1823 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1823.megusta(publicacion_r1804, "megusta", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r1828 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_26_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1828); const ctx_r1827 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1827.$implicit; const o_r1805 = ctx_r1827.index; const ctx_r1826 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1826.megusta(publicacion_r1804, "nomegusta", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_item_27_Template(rf, ctx) { if (rf & 1) {
    const _r1831 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_item_27_Template_ion_avatar_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1831); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r1829 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1829.perfilNavegar(publicacion_r1804.creadororiginal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_item_27_Template_ion_label_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1831); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r1832 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1832.perfilNavegar(publicacion_r1804.creadororiginal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Publicaci\u00F3n original creada por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1804.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", publicacion_r1804.creadororiginal.nombreusuario, "");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r1837 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template_ion_avatar_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1837); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1835 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1835.perfilNavegar(publicacion_r1804.creador); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template_ion_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1837); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1838 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1838.perfilNavegar(publicacion_r1804.creador); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_div_13_Template, 3, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template_ion_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1837); const ctx_r1841 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const publicacion_r1804 = ctx_r1841.$implicit; const o_r1805 = ctx_r1841.index; const ctx_r1840 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1840.comentarios(publicacion_r1804, o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template_ion_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1837); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1842 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1842.compartir(publicacion_r1804); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_21_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_22_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_25_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_button_26_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_ion_item_27_Template, 7, 2, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template_strong_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1837); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1844 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1844.perfilNavegar(publicacion_r1804.creador); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template_div_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1837); const ctx_r1847 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const publicacion_r1804 = ctx_r1847.$implicit; const o_r1805 = ctx_r1847.index; const ctx_r1846 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1846.comentarios(publicacion_r1804, o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " A\u00F1adir Comentario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1804.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1804.creador.nombrecompleto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1804.creador.nombreusuario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", publicacion_r1804.dibujo.fondo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("color", publicacion_r1804.dibujo.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1804.dibujo.texto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.etiquetas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1804.guardado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.guardado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1804.valormg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1804.megusta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.megusta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.cog);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1804.creador.nombreusuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1804.comentario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1804.msg);
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 107);
} if (rf & 2) {
    const archivo_r1857 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1857.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 108);
} if (rf & 2) {
    const archivo_r1857 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/11927613401/", archivo_r1857.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abrir V\u00EDdeo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_Template(rf, ctx) { if (rf & 1) {
    const _r1866 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_Template_ion_slide_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1866); const i_r1858 = ctx.index; const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; const ctx_r1864 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1864.ver(publicacion_r1804.archivos, i_r1858, publicacion_r1804); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_img_1_Template, 1, 1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_video_2_Template, 1, 1, "video", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_ion_button_3_Template, 2, 0, "ion-button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const archivo_r1857 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1857.mime.includes("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1857.mime.includes("video") || archivo_r1857.mime.includes("Video") || archivo_r1857.mime.includes("mp4") || archivo_r1857.mime.includes("MP4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", archivo_r1857.mime.includes("video") || archivo_r1857.mime.includes("Video") || archivo_r1857.mime.includes("mp4") || archivo_r1857.mime.includes("MP4"));
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_ion_slide_1_Template, 4, 3, "ion-slide", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pager", publicacion_r1804.pager);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", publicacion_r1804.archivos);
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r1870 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1870); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r1868 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1868.etiquetas(publicacion_r1804.etiquetas); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Etiquetas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r1873 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_20_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1873); const ctx_r1872 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1872.$implicit; const o_r1805 = ctx_r1872.index; const ctx_r1871 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1871.guardado(publicacion_r1804, "crear", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r1876 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_21_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1876); const ctx_r1875 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1875.$implicit; const o_r1805 = ctx_r1875.index; const ctx_r1874 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1874.guardado(publicacion_r1804, "eliminar", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r1879 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_24_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1879); const ctx_r1878 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1878.$implicit; const o_r1805 = ctx_r1878.index; const ctx_r1877 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1877.megusta(publicacion_r1804, "megusta", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r1882 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_25_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1882); const ctx_r1881 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const publicacion_r1804 = ctx_r1881.$implicit; const o_r1805 = ctx_r1881.index; const ctx_r1880 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1880.megusta(publicacion_r1804, "nomegusta", o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_item_26_Template(rf, ctx) { if (rf & 1) {
    const _r1885 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_item_26_Template_ion_avatar_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1885); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r1883 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1883.perfilNavegar(publicacion_r1804.creadororiginal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_item_26_Template_ion_label_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1885); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r1886 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1886.perfilNavegar(publicacion_r1804.creadororiginal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1804.imageori, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1804.creadororiginal.nombrecompleto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1804.creadororiginal.nombreusuario, "");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1891 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template_ion_avatar_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1891); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1889 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1889.perfilNavegar(publicacion_r1804.creador); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template_ion_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1891); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1892 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1892.perfilNavegar(publicacion_r1804.creador); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_slides_11_Template, 2, 2, "ion-slides", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_div_12_Template, 3, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-buttons", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template_ion_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1891); const ctx_r1895 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const publicacion_r1804 = ctx_r1895.$implicit; const o_r1805 = ctx_r1895.index; const ctx_r1894 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1894.comentarios(publicacion_r1804, o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template_ion_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1891); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1896 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1896.compartir(publicacion_r1804); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_20_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_21_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_24_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_button_25_Template, 2, 0, "ion-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_ion_item_26_Template, 7, 3, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template_strong_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1891); const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r1898 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1898.perfilNavegar(publicacion_r1804.creador); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1891); const ctx_r1901 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const publicacion_r1804 = ctx_r1901.$implicit; const o_r1805 = ctx_r1901.index; const ctx_r1900 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1900.comentarios(publicacion_r1804, o_r1805); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " A\u00F1adir Comentario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicacion_r1804 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1807 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", publicacion_r1804.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", publicacion_r1804.creador.nombrecompleto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1804.creador.nombreusuario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1807.cargadentro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.etiquetas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1804.guardado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.guardado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", publicacion_r1804.valormg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !publicacion_r1804.megusta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.megusta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.cog);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1804.creador.nombreusuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1804.comentario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1804.msg);
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_2_Template, 38, 18, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_div_3_Template, 37, 14, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicacion_r1804 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.tipo === "dibujar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1804.tipo === "multimedia");
} }
function PerfilPage_ion_content_0_ion_slides_47_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilPage_ion_content_0_ion_slides_47_div_9_div_1_Template, 4, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1794 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1794.publicaciones);
} }
function PerfilPage_ion_content_0_ion_slides_47_ion_item_16_Template(rf, ctx) { if (rf & 1) {
    const _r1906 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_ion_item_16_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1906); const persona_r1903 = ctx.$implicit; const ctx_r1905 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1905.perfilNavegar(persona_r1903.usuarioEmisor); })("press", function PerfilPage_ion_content_0_ion_slides_47_ion_item_16_Template_ion_item_press_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1906); const persona_r1903 = ctx.$implicit; const ctx_r1907 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r1907.opciones(persona_r1903.usuarioEmisor.nombrecompleto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const persona_r1903 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", persona_r1903.imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](persona_r1903.usuarioEmisor.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", persona_r1903.usuarioEmisor.nombreusuario, "");
} }
function PerfilPage_ion_content_0_ion_slides_47_ion_list_19_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r1912 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_ion_slides_47_ion_list_19_ion_item_4_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1912); const persona_r1909 = ctx.$implicit; const ctx_r1911 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r1911.perfilNavegar(persona_r1909.usuarioReceptor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const persona_r1909 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", persona_r1909.imagen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](persona_r1909.usuarioReceptor.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", persona_r1909.usuarioReceptor.nombreusuario, "");
} }
function PerfilPage_ion_content_0_ion_slides_47_ion_list_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PerfilPage_ion_content_0_ion_slides_47_ion_list_19_ion_item_4_Template, 9, 3, "ion-item", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1796 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@personas", ctx_r1796.personasSeguidas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Siguiendo ", ctx_r1796.personasSeguidas.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1796.personasSeguidas);
} }
function PerfilPage_ion_content_0_ion_slides_47_Template(rf, ctx) { if (rf & 1) {
    const _r1914 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function PerfilPage_ion_content_0_ion_slides_47_Template_ion_slides_ionSlideDidChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1914); const ctx_r1913 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r1913.cambioDiapositiva($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-slide", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PerfilPage_ion_content_0_ion_slides_47_h3_3_Template, 2, 0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PerfilPage_ion_content_0_ion_slides_47_div_4_Template, 33, 13, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PerfilPage_ion_content_0_ion_slides_47_div_5_Template, 4, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PerfilPage_ion_content_0_ion_slides_47_div_6_Template, 23, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-slide", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PerfilPage_ion_content_0_ion_slides_47_div_8_Template, 2, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PerfilPage_ion_content_0_ion_slides_47_div_9_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-slide", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PerfilPage_ion_content_0_ion_slides_47_ion_item_16_Template, 9, 3, "ion-item", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-slide", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PerfilPage_ion_content_0_ion_slides_47_ion_list_19_Template, 5, 3, "ion-list", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1785 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("over", ctx_r1785.over);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1785.role === "TALLER_ROLE" && !ctx_r1785.contenido && ctx_r1785.servicios.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1785.contenido && ctx_r1785.role === "TALLER_ROLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1785.servicios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1785.contenido && ctx_r1785.role === "USER_ROLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("over", ctx_r1785.over);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1785.cargaTodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1785.cargaTodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("over", ctx_r1785.over);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@personas", ctx_r1785.personas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Seguidores ", ctx_r1785.personas.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1785.personas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("over", ctx_r1785.over);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1785.personasSeguidas.length > 0);
} }
function PerfilPage_ion_content_0_Template(rf, ctx) { if (rf & 1) {
    const _r1916 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function PerfilPage_ion_content_0_Template_ion_content_ionScroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1916); const ctx_r1915 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1915.scrollable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-refresher", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function PerfilPage_ion_content_0_Template_ion_refresher_ionRefresh_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1916); const ctx_r1917 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1917.refrescando($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-refresher-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PerfilPage_ion_content_0_ion_back_button_9_Template, 1, 0, "ion-back-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1916); const ctx_r1918 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1918.modal("mediapor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_Template_ion_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1916); const ctx_r1919 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1919.herramientas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_0_Template_ion_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1916); const ctx_r1920 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1920.herramientasperfil(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PerfilPage_ion_content_0_ion_avatar_18_Template, 2, 1, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PerfilPage_ion_content_0_ion_avatar_19_Template, 1, 0, "ion-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-card-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-segment", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PerfilPage_ion_content_0_Template_ion_segment_ionChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1916); const ctx_r1921 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1921.segmentos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-segment-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Historia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-segment-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-segment-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Seguidores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-segment-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Siguiendo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, PerfilPage_ion_content_0_ion_slides_47_Template, 20, 18, "ion-slides", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1779 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true)("scrollEvents", ctx_r1779.scroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1779.atrasBoton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/19927613410/", ctx_r1779.portada, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1779.Image !== "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1779.Image === "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1779.nombreUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1779.segmento);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1779.personas.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1779.personasSeguidas.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1779.cargarInformacion);
} }
function PerfilPage_ion_content_1_Template(rf, ctx) { if (rf & 1) {
    const _r1923 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Ups! lo sentimos, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " no tienes acceso a internet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Te invitamos a que disfrutes de los m\u00F3dulos offline que ofrecemos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilPage_ion_content_1_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1923); const ctx_r1922 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1922.abrirMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "M\u00F3dulos Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PerfilPage {
    constructor(camera, actionCtrl, almacenamiento, usuaripService, toastService, loadingService, mneuCtrl, navCtrl, biografia, loading, toast, cargarElementos, seguimientoService, router, plt, socket, modalCtrl, IGTMApi, statusbar, activeRoute) {
        // // console.log('Holita')
        this.camera = camera;
        this.actionCtrl = actionCtrl;
        this.almacenamiento = almacenamiento;
        this.usuaripService = usuaripService;
        this.toastService = toastService;
        this.loadingService = loadingService;
        this.mneuCtrl = mneuCtrl;
        this.navCtrl = navCtrl;
        this.biografia = biografia;
        this.loading = loading;
        this.toast = toast;
        this.cargarElementos = cargarElementos;
        this.seguimientoService = seguimientoService;
        this.router = router;
        this.plt = plt;
        this.socket = socket;
        this.modalCtrl = modalCtrl;
        this.IGTMApi = IGTMApi;
        this.statusbar = statusbar;
        this.activeRoute = activeRoute;
        this.Image = 'none';
        this.tokenTemp = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('none');
        this.$token = this.tokenTemp.asObservable();
        this.segmento = 'info';
        // variables para manejar la info
        this.infoSegment = [];
        this.estado = false;
        this.servicios = [];
        this.nombreUsuario = '';
        this.role = '';
        this.ocultar = true;
        // variable que maneja la red
        this.red = 'wifi';
        // para los clientes o seguimientos que tengo
        this.personasTemp = [];
        this.personas = [];
        this.personasSeguidas = [];
        this.seguidosTemp = [];
        this.scroll = true;
        this.bajando = false;
        this.titulo = '';
        this.color = 'blanco';
        this.portada = '';
        // Social
        this.publicaciones = [];
        this.cargadentro = false;
        this.click = false;
        this.over = false;
        this.atrasBoton = false;
        this.cargaTodo = false;
    }
    ngOnInit() {
        // // console.log('Jujuuu 2')
    }
    ionViewWillEnter() {
        if (this.activeRoute.snapshot.paramMap.get('tipo')) {
            this.atrasBoton = true;
        }
        this.arrancar();
    }
    refrescando(event) {
        this.arrancar().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    arrancar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.scroll = true;
                yield this.llamarBio();
                yield this.llamarFoto();
                yield this.publicacion();
                this.cargarElementos.cargarSeguimientos();
                this.informacion();
                this.seguidos();
                this.solicitudes();
            }
            catch (e) {
                // // console.log('Error del resfresh', e)
                this.estado = true;
            }
        });
    }
    publicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.leerPublicacion(info.token, {}).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(data);
                    if (data.exe) {
                        data.response.forEach((item, i) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            item.guardado = false;
                            if (item.creador.imagen.length > 0) {
                                item.image = `https://motocaliapp.com/${item.creador.imagen[0].path}`;
                            }
                            else {
                                item.image = '/assets/notfound.png';
                            }
                            if (item.creadororiginal) {
                                item.cog = true;
                                if (item.creadororiginal.imagen.length > 0) {
                                    item.imageori = `https://motocaliapp.com/${item.creadororiginal.imagen[0].path}`;
                                }
                                else {
                                    item.imageori = '/assets/notfound.png';
                                }
                            }
                            else {
                                item.cog = false;
                            }
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.leerFotos(info.token, { id: item._id }).subscribe((res) => {
                                    if (res.exe) {
                                        item.archivos = res.response;
                                        console.log(res.response.length, 'Bien fotos');
                                        if (res.response.length > 1) {
                                            item.pager = true;
                                            resolve({ exe: true });
                                        }
                                        else {
                                            resolve({ exe: false });
                                            item.pager = false;
                                        }
                                    }
                                    else {
                                        resolve({ exe: true });
                                        item.archivos = [];
                                    }
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve({ exe: false });
                                    item.archivos = [];
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.crearGuardado(info.token, { publicacion: item._id, tipo: 'leer' }).subscribe((res) => {
                                    if (res.exe) {
                                        item.guardado = true;
                                    }
                                    else {
                                        item.guardado = false;
                                    }
                                    resolve(true);
                                }, (err) => {
                                    resolve(true);
                                    item.guardado = false;
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.meGusta(info.token, { id: item._id, tipo: 'leer' }).subscribe((res) => {
                                    if (res.response.find((itemmg) => itemmg.creador === info._id)) {
                                        item.megusta = true;
                                    }
                                    else {
                                        item.megusta = false;
                                    }
                                    resolve(true);
                                    item.valormg = res.response.length;
                                }, (err) => {
                                    resolve(true);
                                    item.megusta = false;
                                    item.valormg = '';
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.crearComentario(info.token, { _id: item._id, tipo: 'leer' }).subscribe((res) => {
                                    console.log(res.response, 'comentarios', item._id);
                                    if (res.exe) {
                                        item.comentarios = res.response;
                                        if (res.response.length > 0) {
                                            item.msg = `${item.comentarios.length} comentarios...`;
                                        }
                                        else {
                                            item.msg = 'No hay ningún comentario paraesta publicación';
                                        }
                                    }
                                    else {
                                        item.comentarios = [];
                                    }
                                    resolve(true);
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve(true);
                                    item.comentarios = [];
                                });
                            });
                            console.log(item._id);
                            // if(item.comentario !== '') {
                            //   let array = item.comentario.split(' ');
                            //   console.log(array, 'array')
                            //   array = array.map((arr: string) => {
                            //     if (arr.charAt(0) === '@') {
                            //       let viaje = arr.substr(1);
                            //       arr = `<a class="enlace" href="/central/buscar/perfil-visita/${viaje}">${arr}</a>`;
                            //       console.log(arr);
                            //     }
                            //     return arr;
                            //   })
                            //   array = array.join(' ');
                            //   console.log(array);
                            //   item.comentario = array;
                            // }
                        }));
                        this.publicaciones = data.response;
                    }
                    else {
                    }
                    this.cargaTodo = true;
                }), (err) => {
                });
            }
        });
    }
    compartir(publicacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_18__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'compartir',
                    publicacionc: publicacion,
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                this.statusbar.show();
                this.click = false;
                if (cerrado.data) {
                    if (cerrado.data.recargo) {
                        yield this.contenido.scrollToTop();
                    }
                }
            }
        });
    }
    guardado(publicacion, tipo, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (tipo === 'crear') {
                this.publicaciones[i].guardado = true;
            }
            else {
                this.publicaciones[i].guardado = false;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.crearGuardado(info.token, { tipo, publicacion: publicacion._id }).subscribe((data) => {
                    if (data.exe) {
                        if (tipo === 'crear') {
                            this.toast.toastNotificacion('Publicación guardada en colecciones');
                        }
                        else {
                            this.toast.toastNotificacion('Publicación eliminada de colecciones');
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo guardar, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo guardar, intentelo más tarde');
                });
            }
        });
    }
    perfilNavegar(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (info.nusuario === usuario.nombreusuario) {
                    this.router.navigate(['/perfil/', 's']);
                }
                else {
                    this.router.navigate(['/visita/', usuario.nombreusuario, 's']);
                }
            }
        });
    }
    comentarios(publicacion, indice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_18__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'comentar',
                    publicacion: publicacion._id,
                    creador: publicacion.creador,
                    comentarios: publicacion.comentarios
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                this.statusbar.show();
                this.click = false;
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        this.publicaciones[indice].comentarios = cerrado.data.comentarios;
                        if (cerrado.data.comentarios.length > 0) {
                            this.publicaciones[indice].msg = `${cerrado.data.comentarios.length} comentarios...`;
                        }
                        else {
                            this.publicaciones[indice].msg = 'No hay ningún comentario paraesta publicación';
                        }
                    }
                }
            }
        });
    }
    megusta(publicacion, tipo, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (tipo === 'megusta') {
                this.publicaciones[i].megusta = true;
                this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) + 1;
            }
            else {
                this.publicaciones[i].megusta = false;
                this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) - 1;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.meGusta(info.token, { tipo, id: publicacion._id, creador: publicacion.creador }).subscribe((data) => {
                    if (data.exe) {
                        if (info._id !== publicacion.creador._id) {
                            if (tipo === 'megusta') {
                                this.socket.emit('megusta', {
                                    id: publicacion._id,
                                    mensaje: `@${info.nusuario} le gusta tu publicación`,
                                    creador: publicacion.creador._id
                                });
                            }
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                });
            }
        });
    }
    etiquetas(etiquetados) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_18__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'etiquetados',
                    etiquetados
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                this.statusbar.show();
                this.click = false;
            }
        });
    }
    ver(archivos, indice, info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.click) {
                this.click = true;
                const modal = yield this.modalCtrl.create({
                    component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_18__["IgtmplantillaPage"],
                    componentProps: {
                        tipo: 'visualizador',
                        archivos,
                        indice,
                        info
                    }
                });
                yield modal.present();
                const cerrado = yield modal.onWillDismiss();
                if (cerrado) {
                    this.statusbar.show();
                    this.click = false;
                }
            }
        });
    }
    llamarFoto() {
        return new Promise((resolve, reject) => {
            resolve(this.cerrarToken = this.$token.subscribe((token) => {
                this.usuaripService.viewImagen(token).subscribe((url) => {
                    // // console.log(url);
                    this.Image = `https://motocaliapp.com/${url.paquete}`;
                    this.portada = url.portada.path;
                }, (error) => {
                    // // console.log(error);
                });
            }));
        });
    }
    llamarBio() {
        return new Promise((resolve, reject) => {
            try {
                this.almacenamiento.obtenerToken().then((info) => {
                    // // console.log(`Datos de toda la app `, info);
                    this.role = info.role;
                    this.nombreUsuario = info.nombre;
                    this.tokenTemp.next(info.token);
                    resolve(this.cargarListados(info.token));
                }).catch(e => {
                    reject(e);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    cargarListados(token) {
        this.seguimientoService.solicitudesAceptadas(token, 'Sin receptor', '0').subscribe((data) => {
            this.personasTemp = [];
            if (data.response.length > 0) {
                data.response.forEach((item) => {
                    item.imagen = item.usuarioEmisor.imagen.length > 0 ? item.usuarioEmisor.imagen[0].path : '';
                    this.personasTemp.push(item);
                });
                this.personas = this.personasTemp;
            }
        }, (error) => {
            this.toast.alertApplication('No se pudo traer los usuarios', false);
        });
        this.seguimientoService.solicitudesAceptadasSeguidos(token, '', '0').subscribe((data) => {
            this.cargarInformacion = true;
            this.seguidosTemp = [];
            if (data.response.length > 0) {
                data.response.forEach((item) => {
                    item.imagen = item.usuarioReceptor.imagen.length > 0 ? item.usuarioReceptor.imagen[0].path : '';
                    this.seguidosTemp.push(item);
                });
                this.personasSeguidas = this.seguidosTemp;
            }
        }, (error) => {
            this.toast.alertApplication('No se pudo traer los usuarios', false);
        });
    }
    abrirMenu() {
        this.mneuCtrl.toggle('perfilMenu');
    }
    cambiarToken(token) {
        this.tokenTemp.next(token);
    }
    herramientas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.preventAction();
        });
    }
    herramientasperfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const opciones = [{
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'rojo'
                }];
            if (this.role === 'TALLER_ROLE') {
                opciones.unshift({
                    text: 'Servicios que ofrezco',
                    icon: 'checkmark-circle-outline',
                    handler: () => {
                        this.modal('servis');
                    }
                }, {
                    text: 'Información de mi negocio',
                    icon: 'information-outline',
                    handler: () => {
                        this.modal('form');
                    }
                });
            }
            if (this.role === 'USER_ROLE') {
                opciones.unshift({
                    text: 'Información del Vehículo',
                    icon: 'information-outline',
                    handler: () => {
                        this.modal('vehiculo');
                    }
                });
            }
            const action = yield this.actionCtrl.create({
                header: 'Crear',
                buttons: opciones
            });
            yield action.present();
        });
    }
    modal(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.Image);
            let image = '';
            if (type === 'mediapor') {
                image = `https://motocaliapp.com/19927613410/${this.portada}`;
            }
            else if (type === 'mediap') {
                image = this.Image;
            }
            const miModal = yield this.modalCtrl.create({
                component: _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_15__["ModalPage"],
                componentProps: {
                    type,
                    imagen: image
                }
            });
            yield miModal.present();
            if (type !== 'mediapor' && type !== 'mediap') {
                const dataRetorno = yield miModal.onWillDismiss();
                if (dataRetorno) {
                    if (dataRetorno.data) {
                        this.contenido = dataRetorno.data.contenido;
                        this.servicios = dataRetorno.data.servicios;
                    }
                }
            }
        });
    }
    preventAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionCtrl.create({
                translucent: true,
                header: 'Fotos',
                buttons: [
                    {
                        text: 'Seleccionar Foto de Perfil en Galeria',
                        icon: 'image',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'perfil');
                        }
                    },
                    {
                        text: 'Seleccionar Foto de Portada en Galeria',
                        icon: 'image',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'portada');
                        }
                    },
                    {
                        text: 'Tomar Foto de Perfíl',
                        icon: 'camera',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA, 'perfil');
                        }
                    },
                    {
                        text: 'Tomar Foto de Portada',
                        icon: 'camera',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA, 'portada');
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close',
                        cssClass: 'rojo'
                    }
                ]
            });
            return yield actionSheet.present();
        });
    }
    opciones(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionCtrl.create({
                translucent: true,
                header: `Que quieres hacer con ${usuario}`,
                buttons: [
                    {
                        text: 'Compartir Perfíl',
                        icon: 'arrow-redo-outline',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Enviar mensaje',
                        icon: 'chatbubble-outline',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Invitar a grupo',
                        icon: 'people-outline',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close-outline'
                    }
                ]
            });
            return yield actionSheet.present();
        });
    }
    tomarFoto(sourceType, accion) {
        // // console.log(this.portada);
        const options = {
            quality: 100,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType
        };
        this.camera.getPicture(options).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingService.cargaProcesos('Subiendo Imagen, por favor espera.');
            this.almacenamiento.obtenerToken().then((info) => {
                if (accion === 'perfil') {
                    this.usuaripService.fotoPerfilUsuarioMoto(imageData, info.token, 'perfil').subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.cambiarToken(info.token);
                        this.loadingService.finalizarCargado();
                        yield this.toastService.alertApplication('Imagen subida con éxito', true);
                    }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // // console.log(JSON.stringify(error.message));
                        yield this.toastService.alertApplication(error.message, false);
                    }));
                }
                else {
                    const old = this.portada === 'notfound.jpg' ? '' : this.portada;
                    this.usuaripService.fotoPortada(imageData, info.token, old).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // // console.log(data, 'respuesta');
                        this.cambiarToken(info.token);
                        this.loadingService.finalizarCargado();
                        yield this.toastService.alertApplication('Foto de portada actualizada', true);
                    }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // // console.log(JSON.stringify(error.message));
                        yield this.toastService.alertApplication(error.message, false);
                    }));
                }
            }).catch(() => {
                this.loadingService.finalizarCargado();
            });
        }), (err) => {
            // Handle error
        });
    }
    // Lógica de segmentos
    segmentos(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (event.detail.value) {
                case 'info':
                    // // console.log('Info');
                    yield this.miSlide.slideTo(0, 300);
                    break;
                case 'public':
                    yield this.miSlide.slideTo(1, 300);
                    break;
                case 'clientes':
                    yield this.miSlide.slideTo(2, 300);
                    break;
                case 'seguidos':
                    yield this.miSlide.slideTo(3, 300);
                    break;
            }
        });
    }
    cambioDiapositiva(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.miSlide.getActiveIndex().then((index) => {
                // // console.log(index);
                if (index === 0) {
                    this.segmento = 'info';
                }
                else if (index === 1) {
                    this.segmento = 'public';
                }
                else if (index === 2) {
                    this.segmento = 'clientes';
                }
                else if (index === 3) {
                    this.segmento = 'seguidos';
                }
            });
        });
    }
    solicitudes() {
        this.personas = [];
        this.personasTemp.forEach((item) => {
            this.personas.push(item);
        });
    }
    seguidos() {
        this.personasSeguidas = [];
        this.seguidosTemp.forEach((item) => {
            this.personasSeguidas.push(item);
        });
        // // console.log(this.personasSeguidas, 'ok')
    }
    visitar(usuario) {
        this.router.navigate(['/central/buscar/perfil-visita/', usuario]);
    }
    informacion() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.biografia.getBiografia(info.token, 'none').subscribe((data) => {
                // // console.log(data.response);
                if (data.response.length > 0) {
                    this.infoSegment = data.response;
                    this.contenido = data.response[0].contenido;
                    this.servicios = data.response[0].servicios;
                    this.estado = false;
                }
                else {
                    this.estado = true;
                }
                // // console.log(`Estado ${this.estado}`);
            }, (err) => {
                // // console.log('Error');
                this.infoSegment = [];
                this.estado = true;
            });
        });
    }
    scrollable(event) {
        if (event.detail.scrollTop > 300) {
            // console.log('Holaaaaaaaaaaaaaaaa')
            this.over = true;
        }
        else {
            this.over = false;
        }
    }
    ionViewDidLeave() {
        this.scroll = false;
        // // console.log('Salimos');
        this.cerrarToken.unsubscribe();
    }
}
PerfilPage.ɵfac = function PerfilPage_Factory(t) { return new (t || PerfilPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_9__["BiografiaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_11__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_12__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_16__["IGTMService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"])); };
PerfilPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerfilPage, selectors: [["app-perfil"]], viewQuery: function PerfilPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.miSlide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.miContenido = _t.first);
    } }, decls: 2, vars: 2, consts: [["color", "blanco", 3, "fullscreen", "scrollEvents", "ionScroll", 4, "ngIf"], ["color", "blanco", 4, "ngIf"], ["color", "blanco", 3, "fullscreen", "scrollEvents", "ionScroll"], ["miContenido", ""], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [1, "main"], [1, "contenedor"], [1, "info"], ["mode", "ios", 1, "tarjeta"], [1, "portada"], ["mode", "md", "class", "boton", "color", "blanco", "icon", "chevron-back-outline", "defaultHref", "/central/iniciosan", 4, "ngIf"], [1, "img", 3, "click"], ["alt", "", 3, "src"], [1, "opciones"], ["slot", "end"], [3, "click"], ["color", "blanco", "name", "camera-outline", "slot", "icon-only"], ["color", "blanco", "name", "add-outline", "slot", "icon-only"], ["class", "avatar", 3, "click", 4, "ngIf"], ["class", "avatar", 4, "ngIf"], [1, "ion-text-center", "ion-text-wrap"], ["mode", "md", "scrollable", "", "color", "success", 3, "value", "ionChange"], ["value", "info"], [1, "up"], ["value", "public"], ["value", "clientes"], ["value", "seguidos"], [1, "content"], [1, "divider"], ["class", "fullancho2", 3, "ionSlideDidChange", 4, "ngIf"], ["mode", "md", "color", "blanco", "icon", "chevron-back-outline", "defaultHref", "/central/iniciosan", 1, "boton"], [1, "avatar", 3, "click"], ["type", "media", "width", "200px", 3, "src"], [1, "avatar"], [1, "fullancho2", 3, "ionSlideDidChange"], ["mislidedos", ""], [1, "diapositiva"], ["class", "tituloGrande per", 4, "ngIf"], ["class", "blanco", 4, "ngIf"], [4, "ngIf"], [1, "blanco"], ["lines", "none", 1, "es-bottom"], ["color", "blanco", 3, "click", "press", 4, "ngFor", "ngForOf"], ["class", "blanco ", 4, "ngIf"], [1, "tituloGrande", "per"], [1, "tituloGrande"], [1, "contenido"], ["mode", "ios"], ["lines", "none"], ["name", "home", "slot", "start", "color", "medium"], [1, "ion-text-wrap"], ["name", "call", "slot", "start", "color", "medium"], ["name", "desktop", "slot", "start", "color", "medium"], ["name", "location", "slot", "start", "color", "medium"], ["name", "alarm", "slot", "start", "color", "medium"], ["name", "today", "slot", "start", "color", "medium"], ["class", "servicio", 4, "ngIf"], [1, "servicio"], ["mode", "ios", 4, "ngFor", "ngForOf"], [1, "centrarHijo"], [1, "marca"], ["name", "build"], ["name", "aperture", "slot", "start", "color", "medium"], ["name", "information-circle", "slot", "start", "color", "medium"], ["name", "flag", "slot", "start", "color", "medium"], ["name", "ellipse", "slot", "start", "color", "medium"], ["class", "skt", 4, "ngFor", "ngForOf"], [1, "skt"], ["lines", "none", 1, "sinfondo"], ["slot", "start"], ["animated", "", "width", "100%", "height", "100%"], ["animated", "", "width", "100%", "height", "30px"], ["animated", "", "width", "100px", "height", "30px"], [2, "height", "200px"], ["animated", "", "width", "100%", "height", "200px"], [4, "ngFor", "ngForOf"], [1, "divider", "ligth"], ["class", "publicacion dibujar", 4, "ngIf"], [1, "publicacion", "dibujar"], ["slot", "start", 3, "click"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], ["name", "ellipsis-vertical-outline", "slot", "icon-only"], [1, "lienzo"], ["class", "etiquetas", 3, "click", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "sinfondo"], ["name", "chatbubble-outline", "slot", "icon-only"], ["name", "arrow-redo-outline", "slot", "icon-only"], [3, "click", 4, "ngIf"], ["lines", "none", "class", "sinfondo opacity", 4, "ngIf"], [1, "comentarios"], [1, "gris", "espacio", 3, "click"], [1, "comentar", 3, "click"], [1, "opt"], [1, "etiquetas", 3, "click"], ["name", "bookmark-outline", "slot", "icon-only"], ["name", "bookmark", "color", "darkgold", "slot", "icon-only"], ["name", "heart-outline", "slot", "icon-only"], ["name", "heart", "color", "danger", "slot", "icon-only"], ["lines", "none", 1, "sinfondo", "opacity"], ["color", "dark", "mode", "ios", 3, "pager", 4, "ngIf"], ["color", "dark", "mode", "ios", 3, "pager"], ["class", "diapo", 3, "click", 4, "ngFor", "ngForOf"], [1, "diapo", 3, "click"], ["width", "100%", 3, "src", 4, "ngIf"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src", 4, "ngIf"], ["class", "btonDiapo", "fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 4, "ngIf"], ["width", "100%", 3, "src"], ["video-load", "", "poster", "/assets/Video.png", "width", "100%", 3, "src"], ["fill", "outline", "color", "blanco", "mode", "md", "expand", "block", 1, "btonDiapo"], ["color", "blanco", 3, "click", "press"], ["width", "100%", "height", "100%", 3, "src"], [1, "small"], ["lines", "none", "color", "blanco", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", "color", "blanco", 3, "click"], [3, "src"], ["color", "blanco"], [1, "main", "ion-padding"], [1, "ion-text-center", "opacity"], [1, "ion-text-center"], ["fill", "outline", "mode", "ios", "expand", "block", "color", "success", 3, "click"]], template: function PerfilPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PerfilPage_ion_content_0_Template, 48, 11, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilPage_ion_content_1_Template, 12, 0, "ion-content", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red !== "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.red === "none");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSkeletonText"], _video_directive__WEBPACK_IMPORTED_MODULE_20__["VideoDirective"]], pipes: [_pipes_Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_21__["HorarioPipe"]], styles: [".contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\nion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fullancho2[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n\n.over[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.diapositiva[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 800px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.contenedor[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.tarjeta[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  width: 100%;\n  margin: 0px;\n}\n\n.tarje[_ngcontent-%COMP%] {\n  margin: auto 0px;\n  margin-top: 10px;\n}\n\n.tarjeta[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.segment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-bottom: 2px;\n  font-size: 11px;\n}\n\n.portada[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f9f9f9;\n  height: 150px;\n  max-height: 150px;\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.boton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 0 10px 50px 0px;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.portada[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.portada[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgba(3, 3, 3, 0.3);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  color: #fff;\n}\n\n.portada[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin: 0px auto;\n  width: 100px !important;\n  height: 100px !important;\n  z-index: 11;\n}\n\n.avatar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.avatar-peque[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.avatar-peque[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.titulo2[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\n\n.line[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  margin-bottom: 5px;\n}\n\n.sombre[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  padding: 10px;\n  opacity: 0.5 !important;\n}\n\n.break[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  text-align: justify;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.up[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.aviso[_ngcontent-%COMP%] {\n  --background: #FEE491;\n}\n\n.gris[_ngcontent-%COMP%] {\n  --background: #f9f9f9;\n}\n\n.aviso[_ngcontent-%COMP%]:hover {\n  --background: #FEE491 !important;\n}\n\n.veh[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(odd) {\n  --background: #f9f9f9;\n}\n\n.servicio[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.centrarHijo[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.marca[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #e9e9e9;\n  border-radius: 100%;\n  font-size: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f3f3f3;\n  font-weight: 100;\n  text-align: center;\n  padding: 15px;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:nth-child(1n)   .marca[_ngcontent-%COMP%] {\n  background-color: #80CFE7;\n  color: #ffffff;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:nth-child(2n)   .marca[_ngcontent-%COMP%] {\n  background-color: #EE85AA;\n  color: #ffffff;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:nth-child(3n)   .marca[_ngcontent-%COMP%] {\n  background-color: #FFD559;\n  color: #ffffff;\n}\n\n.servicio[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n\n.per[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\n.publicaciones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.publicacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-top: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.lienzo[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.publicaciones[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.publicaciones[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.opciones[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.comentarios[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.espacio[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.diapo[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo[_ngcontent-%COMP%]   .btonDiapo[_ngcontent-%COMP%] {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n}\n\n.comentar[_ngcontent-%COMP%] {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  text-align: left;\n}\n\n.opt[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 600px) {\n  .contenido[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .contenido[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(90% - 10px);\n  }\n\n  .servicio[_ngcontent-%COMP%] {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(90% - 10px);\n    margin: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 1000px) and (min-width: 601px) {\n  .servicio[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(50% - 10px);\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXN1YXJpby9wZXJmaWwvQzpcXE1pbW90by9zcmNcXGFwcFxcUGFnZXNcXHVzdWFyaW9cXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvdXN1YXJpby9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7Ozs7RUFJSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0NBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksMEJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSx3Q0FBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksV0FBQTtFQ0ROOztFREdFO0lBQ0ksdUJBQUE7RUNBTjs7RURFRTtJQUNJLHdCQUFBO1lBQUEsdUJBQUE7RUNDTjs7RURDRTtJQUNJLHVCQUFBO0lBQ0EsaUJBQUE7RUNFTjtBQUNGOztBRENBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLFdBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdXN1YXJpby9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2xpZGVzLFxyXG5pb24tc2xpZGUsXHJcbmlvbi1saXN0LFxyXG5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mdWxsYW5jaG8yIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVyIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmRpYXBvc2l0aXZhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogODAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3IgLmluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi50YXJqZSB7XHJcbiAgICBtYXJnaW46IGF1dG8gMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRhcmpldGEgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zZWdtZW50IHt9XHJcblxyXG4uc2VnbWVudCBkaXYge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnBvcnRhZGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDUwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ucG9ydGFkYSAuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9ydGFkYSAub3BjaW9uZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMywgMywgMC4zKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wb3J0YWRhIC5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmF2YXRhciBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmF2YXRhci1wZXF1ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyLXBlcXVlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50aXR1bG8yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zb21icmUgaDMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG9wYWNpdHk6IC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5icmVhayB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi51cCB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hdmlzbyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRUU0OTE7XHJcbn1cclxuXHJcbi5ncmlzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuLmF2aXNvOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVoIGlvbi1pdGVtOm50aC1jaGlsZChvZGQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuLnNlcnZpY2lvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jZW50cmFySGlqbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXJjYSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgxbikgLm1hcmNhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MENGRTc7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgybikgLm1hcmNhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRTg1QUE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgzbikgLm1hcmNhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ1NTk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2lvIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wZXIge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHVibGljYWNpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbn1cclxuXHJcbi5saWVuem8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uZXMgLmluZm8ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uZXMgaW9uLWF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vcGNpb25lcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbWVudGFyaW9zIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ncmlzIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZXNwYWNpbyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGlhcG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRpYXBvIHZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kaWFwbyAuYnRvbkRpYXBvIHtcclxuICAgIG1hcmdpbjogYXV0byA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5ldGlxdWV0YXMgaDMge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY29tZW50YXIge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5vcHQge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udGVuaWRvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW5pZG8gaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2lvIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNpbyBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gMTBweCk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgLnNlcnZpY2lvIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxufSIsIi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlcyxcbmlvbi1zbGlkZSxcbmlvbi1saXN0LFxuZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsYW5jaG8yIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm92ZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5kaWFwb3NpdGl2YSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVuZWRvciAuaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhcmpldGEge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnRhcmplIHtcbiAgbWFyZ2luOiBhdXRvIDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRhcmpldGEgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNlZ21lbnQgZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ucG9ydGFkYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uYm90b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCA1MHB4IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ucG9ydGFkYSAuaW1nIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3J0YWRhIC5vcGNpb25lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMywgMywgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wb3J0YWRhIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmF2YXRhciBoMyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXZhdGFyLXBlcXVlIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItcGVxdWUgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGl0dWxvMiB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ubGluZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zb21icmUgaDMge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XG59XG5cbi5icmVhayB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLndyYXAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi51cCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmF2aXNvIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxO1xufVxuXG4uZ3JpcyB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuLmF2aXNvOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XG59XG5cbi52ZWggaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xuICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG5cbi5zZXJ2aWNpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VudHJhckhpam8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hcmNhIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHVsb0dyYW5kZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5zZXJ2aWNpbyBpb24tY2FyZDpudGgtY2hpbGQoMW4pIC5tYXJjYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MENGRTc7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VydmljaW8gaW9uLWNhcmQ6bnRoLWNoaWxkKDJuKSAubWFyY2Ege1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUU4NUFBO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlcnZpY2lvIGlvbi1jYXJkOm50aC1jaGlsZCgzbikgLm1hcmNhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDU1OTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZXJ2aWNpbyBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wZXIge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgb3BhY2l0eTogMC41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnB1YmxpY2FjaW9uZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnB1YmxpY2FjaW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMywgMywgMywgMC4xKTtcbn1cblxuLmxpZW56byB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5wdWJsaWNhY2lvbmVzIC5pbmZvIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnB1YmxpY2FjaW9uZXMgaW9uLWF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3BjaW9uZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbWVudGFyaW9zIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ncmlzIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5lc3BhY2lvIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRpYXBvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGlhcG8gdmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5kaWFwbyAuYnRvbkRpYXBvIHtcbiAgbWFyZ2luOiBhdXRvIDUlO1xuICB3aWR0aDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5ldGlxdWV0YXMgaDMge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmNvbWVudGFyIHtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5vcHQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250ZW5pZG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRlbmlkbyBpb24tY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoOTAlIC0gMTBweCk7XG4gIH1cblxuICAuc2VydmljaW8ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnNlcnZpY2lvIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogY2FsYyg5MCUgLSAxMHB4KTtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgLnNlcnZpY2lvIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('openClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('chao', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ marginLeft: '300px', opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('personas', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                            opacity: 0,
                            transform: 'scale(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["stagger"])(300, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                opacity: 1,
                                transform: 'none'
                            }))
                        ])
                    ], { optional: true })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PerfilPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-perfil',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('openClose', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('chao', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ marginLeft: '300px', opacity: 0 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('personas', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                    opacity: 0,
                                    transform: 'scale(0)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["stagger"])(300, [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                        opacity: 1,
                                        transform: 'none'
                                    }))
                                ])
                            ], { optional: true })
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('entrada', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                opacity: 0,
                                transform: 'scale(0)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                opacity: 1,
                                transform: 'scale(1)'
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                opacity: 1,
                                transform: 'scale(1)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                opacity: 0,
                                transform: 'scale(0)'
                            }))
                        ])
                    ])
                ],
                templateUrl: './perfil.page.html',
                styleUrls: ['./perfil.page.scss']
            }]
    }], function () { return [{ type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] }, { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] }, { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_9__["BiografiaService"] }, { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] }, { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_11__["CargaElementosUsuariosService"] }, { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_12__["ApiSeguimientoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["Socket"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_16__["IGTMService"] }, { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__["StatusBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }]; }, { miSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mislidedos', { static: false }]
        }], miContenido: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['miContenido', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/Pages/usuario/perfil/video.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/usuario/perfil/video.directive.ts ***!
  \*********************************************************/
/*! exports provided: VideoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDirective", function() { return VideoDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VideoDirective {
    constructor(el) {
        this.el = el;
    }
    cargando() {
        this.el.nativeElement.currentTime = 0.3;
    }
}
VideoDirective.ɵfac = function VideoDirective_Factory(t) { return new (t || VideoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
VideoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VideoDirective, selectors: [["", "video-load", ""]], hostBindings: function VideoDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadstart", function VideoDirective_loadstart_HostBindingHandler() { return ctx.cargando(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[video-load]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { cargando: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['loadstart']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=Pages-usuario-perfil-perfil-module-es2015.js.map