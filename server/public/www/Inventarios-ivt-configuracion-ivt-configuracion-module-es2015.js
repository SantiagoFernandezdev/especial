(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivt-configuracion-ivt-configuracion-module"],{

/***/ "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: IvtConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtConfiguracionPageRoutingModule", function() { return IvtConfiguracionPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-configuracion.page */ "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.ts");





const routes = [
    {
        path: '',
        component: _ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_2__["IvtConfiguracionPage"]
    }
];
class IvtConfiguracionPageRoutingModule {
}
IvtConfiguracionPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IvtConfiguracionPageRoutingModule });
IvtConfiguracionPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IvtConfiguracionPageRoutingModule_Factory(t) { return new (t || IvtConfiguracionPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvtConfiguracionPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvtConfiguracionPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IvtConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtConfiguracionPageModule", function() { return IvtConfiguracionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ivt_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ivt-configuracion-routing.module */ "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion-routing.module.ts");
/* harmony import */ var _ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-configuracion.page */ "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.ts");







class IvtConfiguracionPageModule {
}
IvtConfiguracionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IvtConfiguracionPageModule });
IvtConfiguracionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IvtConfiguracionPageModule_Factory(t) { return new (t || IvtConfiguracionPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ivt_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_4__["IvtConfiguracionPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvtConfiguracionPageModule, { declarations: [_ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_5__["IvtConfiguracionPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _ivt_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_4__["IvtConfiguracionPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvtConfiguracionPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _ivt_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_4__["IvtConfiguracionPageRoutingModule"]
                ],
                declarations: [_ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_5__["IvtConfiguracionPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.ts ***!
  \*******************************************************************************/
/*! exports provided: IvtConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtConfiguracionPage", function() { return IvtConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "./src/app/providers/Api/Inventarios.service.ts");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");














class IvtConfiguracionPage {
    constructor(almacenamiento, ivtApi, toast, activeRoute, alertCtrl, router) {
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.activeRoute = activeRoute;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.nombre = '';
        this.cambio = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.cargarCategorias();
    }
    refrescando(event) {
        this.cargarCategorias().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarCategorias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerInventario(info.token, this.activeRoute.snapshot.paramMap.get('id')).subscribe((data) => {
                    if (data.exe) {
                        this.nombre = data.response.name;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    toggle(event) {
        console.log(event);
        this.cambio = event.detail.checked;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cambio) {
                const alert = yield this.alertCtrl.create({
                    header: 'Cerrar periodo',
                    message: 'Al cerrar el periodo de inventario comezará un nuevo periodo a partir de ahora. Esta acción no se puede revsersar',
                    buttons: [
                        {
                            text: 'cancelar',
                            role: 'cancel'
                        },
                        {
                            text: 'Aceptar',
                            handler: () => {
                                this.actualizar(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.actualizar(false);
            }
        });
    }
    actualizar(bool) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.actualizarInventario(info.token, { ivt: this.activeRoute.snapshot.paramMap.get('id'), nombre: this.nombre, exe: bool }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Información actualizada!');
                        this.router.navigate(['/central/menu/ivt-miinventario', this.activeRoute.snapshot.paramMap.get('id')]);
                    }
                    else {
                        this.toast.toastError('No se pudo actualizar el inventario, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo actualizar el inventario, intentelo más tarde');
                });
            }
        });
    }
}
IvtConfiguracionPage.ɵfac = function IvtConfiguracionPage_Factory(t) { return new (t || IvtConfiguracionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_3__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
IvtConfiguracionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IvtConfiguracionPage, selectors: [["app-ivt-configuracion"]], decls: 19, vars: 1, consts: [[1, "ion-no-border"], ["color", "success"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/menu/ivt-inicio"], [1, "divider"], ["mode", "ios"], ["position", "floating"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "ion-text-wrap"], ["slot", "end", "color", "tertiary", 3, "ionChange"], ["color", "light", "expand", "block", "mode", "ios", "shape", "round", 3, "click"]], template: function IvtConfiguracionPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Nombre del Inventario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IvtConfiguracionPage_Template_ion_input_ngModelChange_11_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Cerrar periodo de inventario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function IvtConfiguracionPage_Template_ion_toggle_ionChange_15_listener($event) { return ctx.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IvtConfiguracionPage_Template_ion_button_click_17_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Guardar Cambios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nombre);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ludmVudGFyaW9zL2l2dC1jb25maWd1cmFjaW9uL2l2dC1jb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IvtConfiguracionPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ivt-configuracion',
                templateUrl: './ivt-configuracion.page.html',
                styleUrls: ['./ivt-configuracion.page.scss'],
            }]
    }], function () { return [{ type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"] }, { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_3__["InventariosService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Inventarios-ivt-configuracion-ivt-configuracion-module-es2015.js.map