(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivt-movimientos-ivt-movimientos-module"],{

/***/ "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: IvtMovimientosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMovimientosPageRoutingModule", function() { return IvtMovimientosPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-movimientos.page */ "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.ts");





const routes = [
    {
        path: '',
        component: _ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_2__["IvtMovimientosPage"]
    }
];
class IvtMovimientosPageRoutingModule {
}
IvtMovimientosPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IvtMovimientosPageRoutingModule });
IvtMovimientosPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IvtMovimientosPageRoutingModule_Factory(t) { return new (t || IvtMovimientosPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvtMovimientosPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvtMovimientosPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IvtMovimientosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMovimientosPageModule", function() { return IvtMovimientosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ivt_movimientos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ivt-movimientos-routing.module */ "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos-routing.module.ts");
/* harmony import */ var _ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-movimientos.page */ "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








class IvtMovimientosPageModule {
}
IvtMovimientosPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IvtMovimientosPageModule });
IvtMovimientosPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IvtMovimientosPageModule_Factory(t) { return new (t || IvtMovimientosPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ivt_movimientos_routing_module__WEBPACK_IMPORTED_MODULE_4__["IvtMovimientosPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvtMovimientosPageModule, { declarations: [_ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_5__["IvtMovimientosPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _ivt_movimientos_routing_module__WEBPACK_IMPORTED_MODULE_4__["IvtMovimientosPageRoutingModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvtMovimientosPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _ivt_movimientos_routing_module__WEBPACK_IMPORTED_MODULE_4__["IvtMovimientosPageRoutingModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
                ],
                declarations: [_ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_5__["IvtMovimientosPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.ts ***!
  \***************************************************************************/
/*! exports provided: IvtMovimientosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMovimientosPage", function() { return IvtMovimientosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "./src/app/providers/Api/Inventarios.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/Textos/Imagen.pipe */ "./src/app/pipes/Textos/Imagen.pipe.ts");
/* harmony import */ var _pipes_Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/Fechas/CambioUTC.pipe */ "./src/app/pipes/Fechas/CambioUTC.pipe.ts");
















const _c0 = ["inifinito"];
function IvtMovimientosPage_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay movimientos en el inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IvtMovimientosPage_ion_list_7_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "ImagenSelect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "cambioUTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movimiento_r1011 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, movimiento_r1011.mensaje));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movimiento_r1011.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, movimiento_r1011.fecha));
} }
function IvtMovimientosPage_ion_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IvtMovimientosPage_ion_list_7_ion_item_1_Template, 12, 7, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1008 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1008.movimientos);
} }
function IvtMovimientosPage_ion_infinite_scroll_8_Template(rf, ctx) { if (rf & 1) {
    const _r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-infinite-scroll", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function IvtMovimientosPage_ion_infinite_scroll_8_Template_ion_infinite_scroll_ionInfinite_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1015); const ctx_r1014 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1014.loadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-infinite-scroll-content", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class IvtMovimientosPage {
    constructor(almacenamiento, ivtApi, toastCtrl, router, activeRoute) {
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.activeRoute = activeRoute;
        this.movimientos = [];
        this.desde = 0;
        this.carga = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.inicio();
    }
    inicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.almacenamiento.obtenerToken();
            if (login) {
                this.ivtApi.leerMovmientos(login.token, { desde: this.desde, id: this.activeRoute.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        this.movimientos = data.response;
                        this.carga = true;
                    }
                    else {
                        this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                    }
                }, (error) => {
                    console.log(error);
                    this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                });
            }
        });
    }
    refrescando(event) {
        this.desde = 0;
        this.inicio().then(() => {
            event.detail.complete();
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = this.desde + 10;
            console.log(this.desde);
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerMovmientos(info.token, { desde: this.desde, id: this.activeRoute.snapshot.paramMap.get('id') }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            data.response.forEach((item) => {
                                this.movimientos.push(item);
                            });
                            event.target.complete();
                        }
                        else {
                            event.target.disabled = true;
                            this.desde = 0;
                        }
                    }
                    else {
                        this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                    }
                }, (error) => {
                    console.log(error);
                    this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                });
            }
        });
    }
}
IvtMovimientosPage.ɵfac = function IvtMovimientosPage_Factory(t) { return new (t || IvtMovimientosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
IvtMovimientosPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IvtMovimientosPage, selectors: [["app-ivt-movimientos"]], viewQuery: function IvtMovimientosPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infinite = _t.first);
    } }, decls: 9, vars: 3, consts: [[1, "ion-no-border"], ["color", "success"], ["slot", "start", "icon", "chevron-back-outline", "defaultHref", "/central/menu/ivt-inicio"], ["class", "tituloGrande", 4, "ngIf"], ["class", "blanco ", 4, "ngIf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], [1, "tituloGrande"], [1, "blanco"], ["mode", "ios", 4, "ngFor", "ngForOf"], ["mode", "ios"], ["slot", "start", 1, "avatar"], [3, "src"], [1, "ion-text-wrap"], [1, "ion-text-right"], [1, "ama"], ["threshold", "100px", 3, "ionInfinite"], ["inifinito", ""], ["loadingSpinner", "bubbles", "loadingText", "Cargando entradas..."]], template: function IvtMovimientosPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Movimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IvtMovimientosPage_h3_6_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IvtMovimientosPage_ion_list_7_Template, 2, 1, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, IvtMovimientosPage_ion_infinite_scroll_8_Template, 3, 0, "ion-infinite-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movimientos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movimientos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carga);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"]], pipes: [_pipes_Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_8__["ImagenSelectPipe"], _pipes_Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_9__["CambioUTCaLocalPipe"]], styles: [".ama[_ngcontent-%COMP%] {\n  color: #777777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvSW52ZW50YXJpb3MvaXZ0LW1vdmltaWVudG9zL0M6XFxNaW1vdG8vc3JjXFxhcHBcXHBhZ2VzXFxJbnZlbnRhcmlvc1xcaXZ0LW1vdmltaWVudG9zXFxpdnQtbW92aW1pZW50b3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9JbnZlbnRhcmlvcy9pdnQtbW92aW1pZW50b3MvaXZ0LW1vdmltaWVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0ludmVudGFyaW9zL2l2dC1tb3ZpbWllbnRvcy9pdnQtbW92aW1pZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFtYSB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufSIsIi5hbWEge1xuICBjb2xvcjogIzc3Nzc3Nztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IvtMovimientosPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ivt-movimientos',
                templateUrl: './ivt-movimientos.page.html',
                styleUrls: ['./ivt-movimientos.page.scss'],
            }]
    }], function () { return [{ type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] }, { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] }, { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { infinite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inifinito', { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=Inventarios-ivt-movimientos-ivt-movimientos-module-es2015.js.map