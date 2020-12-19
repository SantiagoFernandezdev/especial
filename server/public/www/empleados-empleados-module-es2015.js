(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empleados-empleados-module"],{

/***/ "./src/app/pages/empleados/empleados-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/empleados/empleados-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EmpleadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosPageRoutingModule", function() { return EmpleadosPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _empleados_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleados.page */ "./src/app/pages/empleados/empleados.page.ts");





const routes = [
    {
        path: '',
        component: _empleados_page__WEBPACK_IMPORTED_MODULE_2__["EmpleadosPage"]
    }
];
class EmpleadosPageRoutingModule {
}
EmpleadosPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmpleadosPageRoutingModule });
EmpleadosPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmpleadosPageRoutingModule_Factory(t) { return new (t || EmpleadosPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmpleadosPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmpleadosPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/empleados/empleados.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/empleados/empleados.module.ts ***!
  \*****************************************************/
/*! exports provided: EmpleadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosPageModule", function() { return EmpleadosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empleados_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empleados-routing.module */ "./src/app/pages/empleados/empleados-routing.module.ts");
/* harmony import */ var _empleados_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empleados.page */ "./src/app/pages/empleados/empleados.page.ts");







class EmpleadosPageModule {
}
EmpleadosPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmpleadosPageModule });
EmpleadosPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmpleadosPageModule_Factory(t) { return new (t || EmpleadosPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _empleados_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmpleadosPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmpleadosPageModule, { declarations: [_empleados_page__WEBPACK_IMPORTED_MODULE_5__["EmpleadosPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _empleados_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmpleadosPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmpleadosPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _empleados_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmpleadosPageRoutingModule"]
                ],
                declarations: [_empleados_page__WEBPACK_IMPORTED_MODULE_5__["EmpleadosPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/empleados/empleados.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/empleados/empleados.page.ts ***!
  \***************************************************/
/*! exports provided: EmpleadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosPage", function() { return EmpleadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/Api/Inventarios.service */ "./src/app/providers/Api/Inventarios.service.ts");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function EmpleadosPage_ion_list_10_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r750 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpleadosPage_ion_list_10_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r750); const usuario_r748 = ctx.$implicit; const ctx_r749 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r749.agregar(usuario_r748); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r748 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", usuario_r748.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r748.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", usuario_r748.nombreusuario, " ");
} }
function EmpleadosPage_ion_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmpleadosPage_ion_list_10_ion_item_1_Template, 8, 3, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r744 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r744.buscados);
} }
function EmpleadosPage_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No tiene empleados registrados, buscalos para agregarlos a la lista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmpleadosPage_ion_list_13_ion_item_sliding_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empleado_r752 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cargo: ", empleado_r752.cargo, "");
} }
function EmpleadosPage_ion_list_13_ion_item_sliding_10_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empleado_r752 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Al\u00EDas: ", empleado_r752.alias, "");
} }
function EmpleadosPage_ion_list_13_ion_item_sliding_10_Template(rf, ctx) { if (rf & 1) {
    const _r758 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmpleadosPage_ion_list_13_ion_item_sliding_10_div_10_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmpleadosPage_ion_list_13_ion_item_sliding_10_div_11_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item-options", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpleadosPage_ion_list_13_ion_item_sliding_10_Template_ion_item_option_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r758); const empleado_r752 = ctx.$implicit; const ctx_r757 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r757.editar(empleado_r752); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpleadosPage_ion_list_13_ion_item_sliding_10_Template_ion_item_option_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r758); const empleado_r752 = ctx.$implicit; const ctx_r759 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r759.eliminar(empleado_r752); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empleado_r752 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", empleado_r752.usuario.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empleado_r752.usuario.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", empleado_r752.usuario.nombreusuario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", empleado_r752.cargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", empleado_r752.alias);
} }
function EmpleadosPage_ion_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Registrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmpleadosPage_ion_list_13_ion_item_sliding_10_Template, 17, 5, "ion-item-sliding", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r746 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r746.empleados.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r746.empleados);
} }
class EmpleadosPage {
    constructor(IVTapi, almacenamiento, alertCtrl, toast) {
        this.IVTapi = IVTapi;
        this.almacenamiento = almacenamiento;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.empleados = [];
        this.buscados = [];
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.traerEmpleados();
    }
    refrescando(event) {
        this.traerEmpleados().then(() => {
            event.target.complete();
        }).catch(() => {
            event.target.complete();
        });
    }
    traerEmpleados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IVTapi.leerEmpleados(info.token).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.usuario.imagen.length > 0) {
                                item.usuario.imagen = `https://motocaliapp.com/19927613410/${item.usuario.imagen[0].path}`;
                            }
                            else {
                                item.usuario.imagen = '/assets/notfound.png';
                            }
                        });
                        this.empleados = data.response;
                    }
                });
            }
        });
    }
    buscarEmpleados(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info && event.detail.value !== '') {
                this.IVTapi.BuscarUsuarios(info.token, event.detail.value).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.imagen.length > 0) {
                                item.imagen = `https://motocaliapp.com/19927613410/${item.imagen[0].path}`;
                            }
                            else {
                                item.imagen = '/assets/notfound.png';
                            }
                        });
                        this.buscados = data.response;
                    }
                });
            }
            else {
                this.buscados = [];
            }
        });
    }
    agregar(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Marcar usuario como empleado',
                message: `¿Estas seguro de marcar a ${usuario.nombrecompleto} como empleado?`,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.IVTapi.crearEmpleado(info.token, { nombre: usuario.nombrecompleto, _id: usuario._id }).subscribe((data) => {
                                    console.log(data);
                                    if (data.exe) {
                                        this.traerEmpleados();
                                    }
                                    else {
                                        if (data.err.errors) {
                                            if (data.err.errors.usuario) {
                                                if (data.err.errors.usuario.kind === 'unique') {
                                                    this.toast.toastError('El usuario ya ha sido agregado como empleado');
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    eliminar(empleado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar Empleado',
                message: `¿Estas seguro de eliminar a ${empleado.usuario.nombrecompleto} como empleado?`,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.IVTapi.eliminarEmpleados(info.token, empleado._id).subscribe((data) => {
                                    if (data.exe) {
                                        this.traerEmpleados();
                                    }
                                    else {
                                        this.toast.toastError('No se pudo eliminar el empleado');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo eliminar el empleado, intentelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    editar(empleado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar Empleado',
                message: `¿Estas seguro de eliminar a ${empleado.usuario.nombrecompleto} como empleado?`,
                inputs: [
                    {
                        type: 'text',
                        name: 'cargo',
                        placeholder: `Escriba el cargo ${empleado.usuario.nombrecompleto}`
                    },
                    {
                        type: 'text',
                        name: 'alias',
                        placeholder: `Escribe un alías`
                    },
                ],
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: (re) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.IVTapi.editarEmpleado(info.token, { _id: empleado._id, cargo: re.cargo, alias: re.alias }).subscribe((data) => {
                                    if (data.exe) {
                                        this.traerEmpleados();
                                    }
                                    else {
                                        this.toast.toastError('No se pudo editar el empleado');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo editar el empleado, intentelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
}
EmpleadosPage.ɵfac = function EmpleadosPage_Factory(t) { return new (t || EmpleadosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_2__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"])); };
EmpleadosPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmpleadosPage, selectors: [["app-empleados"]], decls: 14, vars: 3, consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start"], ["icon", "chevron-back-outline", "defaultHref", "/central/menu"], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["mode", "ios", "placeholder", "Buscar Usuario", 3, "ionChange"], [4, "ngIf"], [1, "divider", "light"], ["class", "cen", 4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [1, "cen"], ["src", "/assets/Empleados.png", "width", "100px", "alt", ""], [1, "tituloGrande"], ["lines", "none", "color", "muro"], [1, "padreflex"], [1, "titulo"], [1, "numero"], ["src", "/assets/Empleadoslista.png", "width", "25px", "height", "25px", "alt", ""], [4, "ngFor", "ngForOf"], [1, "verdei"], ["class", "rojoi", 4, "ngIf"], ["side", "end"], ["color", "warning", 3, "click"], ["name", "pencil-outline", "slot", "icon-only"], ["color", "danger", 3, "click"], ["name", "trash-outline", "slot", "icon-only"], [1, "rojoi"]], template: function EmpleadosPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Empleados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function EmpleadosPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.refrescando($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function EmpleadosPage_Template_ion_searchbar_ionChange_9_listener($event) { return ctx.buscarEmpleados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmpleadosPage_ion_list_10_Template, 2, 1, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EmpleadosPage_div_12_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmpleadosPage_ion_list_13_Template, 11, 2, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buscados.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.empleados.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.empleados.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]], styles: [".cen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei[_ngcontent-%COMP%] {\n  color: #1E8C4A;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.padreflex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.numero[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-right: 10px;\n}\n\n.rojoi[_ngcontent-%COMP%] {\n  color: #C1302C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wbGVhZG9zL0M6XFxNaW1vdG8vc3JjXFxhcHBcXHBhZ2VzXFxlbXBsZWFkb3NcXGVtcGxlYWRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VtcGxlYWRvcy9lbXBsZWFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0FDQ1I7O0FERUk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FERUk7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDUjs7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0ksY0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1wbGVhZG9zL2VtcGxlYWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNlbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aXR1bG9HcmFuZGUge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52ZXJkZWkge1xyXG4gICAgICAgIGNvbG9yOiAjMUU4QzRBO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYWRyZWZsZXgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5udW1lcm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucm9qb2kge1xyXG4gICAgICAgIGNvbG9yOiAjQzEzMDJDO1xyXG4gICAgfSIsIi5jZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0dWxvR3JhbmRlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZXJkZWkge1xuICBjb2xvcjogIzFFOEM0QTtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wYWRyZWZsZXgge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubnVtZXJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnJvam9pIHtcbiAgY29sb3I6ICNDMTMwMkM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmpleadosPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-empleados',
                templateUrl: './empleados.page.html',
                styleUrls: ['./empleados.page.scss'],
            }]
    }], function () { return [{ type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_2__["InventariosService"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=empleados-empleados-module-es2015.js.map