(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EstadoCitas-citas-citas-module"],{

/***/ "./src/app/pages/EstadoCitas/citas/citas-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageRoutingModule", function() { return CitasPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./citas.page */ "./src/app/pages/EstadoCitas/citas/citas.page.ts");





const routes = [
    {
        path: '',
        component: _citas_page__WEBPACK_IMPORTED_MODULE_2__["CitasPage"]
    }
];
class CitasPageRoutingModule {
}
CitasPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CitasPageRoutingModule });
CitasPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CitasPageRoutingModule_Factory(t) { return new (t || CitasPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CitasPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitasPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/EstadoCitas/citas/citas.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas.module.ts ***!
  \*********************************************************/
/*! exports provided: CitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageModule", function() { return CitasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _citas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./citas-routing.module */ "./src/app/pages/EstadoCitas/citas/citas-routing.module.ts");
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./citas.page */ "./src/app/pages/EstadoCitas/citas/citas.page.ts");
/* harmony import */ var _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.module */ "./src/app/pages/Modales/modal-citas/modal-citas.module.ts");
/* harmony import */ var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.page */ "./src/app/pages/Modales/modal-citas/modal-citas.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










class CitasPageModule {
}
CitasPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CitasPageModule });
CitasPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CitasPageModule_Factory(t) { return new (t || CitasPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitasPageRoutingModule"],
            _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_6__["ModalCitasPageModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CitasPageModule, { declarations: [_citas_page__WEBPACK_IMPORTED_MODULE_5__["CitasPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitasPageRoutingModule"],
        _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_6__["ModalCitasPageModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitasPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                entryComponents: [
                    _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_7__["ModalCitasPage"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitasPageRoutingModule"],
                    _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_6__["ModalCitasPageModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
                ],
                declarations: [_citas_page__WEBPACK_IMPORTED_MODULE_5__["CitasPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/EstadoCitas/citas/citas.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas.page.ts ***!
  \*******************************************************/
/*! exports provided: CitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPage", function() { return CitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.page */ "./src/app/pages/Modales/modal-citas/modal-citas.page.ts");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Api/EstadoCitas.service */ "./src/app/providers/Api/EstadoCitas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "./src/app/providers/cargas/usuarios.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/filtros/mi-filtro.pipe */ "./src/app/pipes/filtros/mi-filtro.pipe.ts");
/* harmony import */ var _pipes_Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pipes/Fechas/fecha.pipe */ "./src/app/pipes/Fechas/fecha.pipe.ts");


















const _c0 = ["contenido"];
function CitasPage_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La bandeja de citas est\u00E1 vac\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "estado-amarillo ": a0, "estado-azul ": a1, "estado-verde ": a2 }; };
function CitasPage_ion_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r558 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CitasPage_ion_item_14_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r558); const cita_r556 = ctx.$implicit; const ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r557.chat(cita_r556._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "CHAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CitasPage_ion_item_14_Template_ion_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r558); const cita_r556 = ctx.$implicit; const ctx_r559 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r559.hoja(cita_r556._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "HOJA DE VIDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cita_r556 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", cita_r556.imagenTaller, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cita_r556.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c1, cita_r556.estado === "PENDIENTE", cita_r556.estado === "EN PROGRESO", cita_r556.estado === "TERMINADO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", cita_r556.nombreusuario, " - Estado pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cita creada el ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, cita_r556.fechainicio), " ");
} }
class CitasPage {
    constructor(actionsheetCtrl, modalCtrl, almacenamiento, citasService, router, navCtrl, menuCtrl, cargaElementos, animationCtrl) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.citasService = citasService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.cargaElementos = cargaElementos;
        this.animationCtrl = animationCtrl;
        this.role = 'USER_ROLE';
        this.titulos = ['Citas abiertas', 'Carpetas'];
        this.citas = [];
        this.red = 'wifi';
        this.texto = '';
        this.carpetas = [];
        this.valorSegemento = 'entrada';
        this.cargaElementos.$cargarRed.subscribe((red) => {
            this.red = red;
            if (this.red !== 'none') {
                this.cargarCitas().then(() => {
                    console.log('Bien');
                });
            }
        });
        console.log('Holita');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.role = info.role;
            console.log(info);
        });
    }
    // segmentos( event: any ) {
    //   switch (event.detail.value) {
    //     case 'entrada':
    //         this.contenido.scrollToTop(100).then(() => {
    //           this.miSlide.slideTo(0, 300).then(() => {
    //             console.log('bien')
    //           });
    //         });
    //         break;
    //     case 'carpetas':
    //         this.contenido.scrollToTop(100).then(() => {
    //           this.miSlide.slideTo(1, 300).then(() => {
    //             console.log('bien')
    //           });
    //         });
    //         break;
    //   }
    //  }
    // cambiandoDiapositiva( event ) {
    //       console.log(event)
    //       this.contenido.scrollToTop(100).then(() => {
    //         this.miSlide.getActiveIndex().then((index) => {
    //           if (index === 0) {
    //             this.valorSegemento = 'entrada';
    //           } else if ( index === 1 ) {
    //             this.valorSegemento = 'carpetas';
    //           }
    //       });
    //      });
    // }
    refrescando(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const proccess = yield this.cargarCitas();
            if (proccess) {
                console.log('BIEN TODO');
                event.detail.complete();
            }
            else {
                console.log('MAL TODO', proccess);
                event.detail.complete();
            }
        });
    }
    filtro(event) {
        this.texto = event.detail.value;
    }
    configuracion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_3__["ModalCitasPage"],
                componentProps: {
                    type: 'setting'
                },
                mode: 'ios',
                swipeToClose: true
            });
            return yield modal.present();
        });
    }
    miVentana(type, carpeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const enterAnimation = (baseEl) => {
                const backdropAnimation = this.animationCtrl.create()
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
                const wrapperAnimation = this.animationCtrl.create()
                    .addElement(baseEl.querySelector('.modal-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: '0', transform: 'scale(0)' },
                    { offset: 1, opacity: '0.99', transform: 'scale(1)' }
                ]);
                return this.animationCtrl.create()
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(500)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            const leaveAnimation = (baseEl) => {
                return enterAnimation(baseEl).direction('reverse');
            };
            let data = {};
            if (type === 'carpetas') {
                data = {
                    unico: carpeta._id,
                    info: this.citas,
                    role: this.role
                };
            }
            const modal = yield this.modalCtrl.create({
                component: _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_3__["ModalCitasPage"],
                componentProps: {
                    type,
                    data
                },
                enterAnimation,
                leaveAnimation,
                mode: 'ios',
            });
            yield modal.present();
            const midata = yield modal.onDidDismiss();
            if (midata) {
                this.cargarCitas();
                if (midata.data.cita) {
                    this.chat(midata.data.cita);
                }
            }
        });
    }
    cargarCitas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.almacenamiento.obtenerToken().then((info) => {
                /*let info = {
                  role: 'TALLER_ROLE',
                  token: this.token
                }*/
                if (info.role === 'TALLER_ROLE') {
                    this.citasService.listarCitasTaller(info.token).subscribe((data) => {
                        console.log(data);
                        this.cargarInformacion = true;
                        if (data.response.length > 0) {
                            data.response.forEach((item) => {
                                item.fecha = moment__WEBPACK_IMPORTED_MODULE_8__(item.fechainicio).format('LLLL');
                                item.imagenTaller = item.usuariopedido.imagen[0].path;
                                item.nombrecompleto = item.usuariopedido.nombrecompleto;
                                item.nombreusuario = item.usuariopedido.nombreusuario;
                            });
                            this.citas = data.response;
                            this.carpetas = data.unicos;
                        }
                    });
                }
                else {
                    this.citasService.listarCitas(info.token).subscribe((data) => {
                        console.log(data);
                        this.cargarInformacion = true;
                        if (data.response.length > 0) {
                            data.response.forEach((item) => {
                                item.imagenTaller = item.idtaller.imagen[0].path;
                                item.nombrecompleto = item.idtaller.nombrecompleto;
                                item.nombreusuario = item.idtaller.nombreusuario;
                            });
                            this.citas = data.response;
                            this.carpetas = data.unicos;
                        }
                    });
                }
            });
        });
    }
    chat(cita) {
        this.almacenamiento.insertarCita(cita).then((res) => {
            console.log(res);
            if (res) {
                this.router.navigate(['/chat', cita]);
            }
            else {
                console.log('Error 1');
            }
        }).catch(() => {
            console.log('Error 2');
        });
    }
    hoja(cita) {
        this.router.navigate(['/central/menu/miscitas/hoja/', cita]);
    }
}
CitasPage.ɵfac = function CitasPage_Factory(t) { return new (t || CitasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"])); };
CitasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CitasPage, selectors: [["app-citas"]], viewQuery: function CitasPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contenido = _t.first);
    } }, decls: 16, vars: 5, consts: [[1, "ion-no-border"], ["color", "oscuro"], ["slot", "start"], ["defaultHref", "/central/menu", "icon", "chevron-back-outline"], ["scrollEvents", "true"], ["contenido", ""], ["slot", "fixed", "pullFactor", "0.5", "pullMin", "50", "pullMax", "150", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], [1, "divider"], ["mode", "ios", 3, "ionChange"], ["class", "tituloGrande", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tituloGrande"], ["slot", "start", 1, "avatar"], ["width", "100%", 3, "src"], [1, "ion-text-wrap"], [1, "opciones"], [1, "medium"], [1, "estadobol", 3, "ngClass"], ["shape", "round", "mode", "ios", "color", "tertiary", 3, "click"], ["shape", "round", "mode", "ios", "color", "secondary", 3, "click"]], template: function CitasPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Estado de Citas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function CitasPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refrescando($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-refresher-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-searchbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CitasPage_Template_ion_searchbar_ionChange_11_listener($event) { return ctx.filtro($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CitasPage_h3_12_Template, 2, 0, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CitasPage_ion_item_14_Template, 17, 11, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "miFiltro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.citas.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 2, ctx.citas, ctx.texto));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_pipes_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__["MiFiltroPipe"], _pipes_Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__["MiFechaPipe"]], styles: [".estadobol[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.flexible[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.separador[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.padre[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n}\n\n.padre[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.estado-verde[_ngcontent-%COMP%] {\n  background: #85B84F;\n}\n\n.estado-amarillo[_ngcontent-%COMP%] {\n  background: #FCD573;\n}\n\n.estado-azul[_ngcontent-%COMP%] {\n  background: #5591B1;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: calc(100vh - 206px);\n  height: auto;\n  position: relative;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.tituloGrande[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\n.opciones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRXN0YWRvQ2l0YXMvY2l0YXMvQzpcXE1pbW90by9zcmNcXGFwcFxccGFnZXNcXEVzdGFkb0NpdGFzXFxjaXRhc1xcY2l0YXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9Fc3RhZG9DaXRhcy9jaXRhcy9jaXRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0VzdGFkb0NpdGFzL2NpdGFzL2NpdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXJqZXRhIHt9XHJcblxyXG4uZXN0YWRvYm9sIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmZsZXhpYmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3Ige1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucGFkcmUge1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuXHJcbi5wYWRyZSBoMyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5lc3RhZG8tdmVyZGUge1xyXG4gICAgYmFja2dyb3VuZDogIzg1Qjg0RjtcclxufVxyXG5cclxuLmVzdGFkby1hbWFyaWxsbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNENTczO1xyXG59XHJcblxyXG4uZXN0YWRvLWF6dWwge1xyXG4gICAgYmFja2dyb3VuZDogIzU1OTFCMTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjA2cHgpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm9wY2lvbmVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSIsIi5lc3RhZG9ib2wge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uZmxleGlibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnNlcGFyYWRvciB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnBhZHJlIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG59XG5cbi5wYWRyZSBoMyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXN0YWRvLXZlcmRlIHtcbiAgYmFja2dyb3VuZDogIzg1Qjg0Rjtcbn1cblxuLmVzdGFkby1hbWFyaWxsbyB7XG4gIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XG59XG5cbi5lc3RhZG8tYXp1bCB7XG4gIGJhY2tncm91bmQ6ICM1NTkxQjE7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwNnB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRpdHVsb0dyYW5kZSB7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ub3BjaW9uZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CitasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-citas',
                templateUrl: './citas.page.html',
                styleUrls: ['./citas.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] }, { type: src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__["EstadoCitasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }, { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] }]; }, { contenido: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contenido', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/Modales/modal-citas/modal-citas-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModalCitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPageRoutingModule", function() { return ModalCitasPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_citas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-citas.page */ "./src/app/pages/Modales/modal-citas/modal-citas.page.ts");





const routes = [
    {
        path: '',
        component: _modal_citas_page__WEBPACK_IMPORTED_MODULE_2__["ModalCitasPage"]
    }
];
class ModalCitasPageRoutingModule {
}
ModalCitasPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalCitasPageRoutingModule });
ModalCitasPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalCitasPageRoutingModule_Factory(t) { return new (t || ModalCitasPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalCitasPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCitasPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Modales/modal-citas/modal-citas.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModalCitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPageModule", function() { return ModalCitasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-citas-routing.module */ "./src/app/pages/Modales/modal-citas/modal-citas-routing.module.ts");
/* harmony import */ var _modal_citas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-citas.page */ "./src/app/pages/Modales/modal-citas/modal-citas.page.ts");
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Components/components.module */ "./src/app/Components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









class ModalCitasPageModule {
}
ModalCitasPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalCitasPageModule });
ModalCitasPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalCitasPageModule_Factory(t) { return new (t || ModalCitasPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalCitasPageRoutingModule"],
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalCitasPageModule, { declarations: [_modal_citas_page__WEBPACK_IMPORTED_MODULE_5__["ModalCitasPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalCitasPageRoutingModule"],
        src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCitasPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalCitasPageRoutingModule"],
                    src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
                ],
                declarations: [_modal_citas_page__WEBPACK_IMPORTED_MODULE_5__["ModalCitasPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/Modales/modal-citas/modal-citas.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalCitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPage", function() { return ModalCitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/Api/EstadoCitas.service */ "./src/app/providers/Api/EstadoCitas.service.ts");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _Components_Media_video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Components/Media/video/video.component */ "./src/app/Components/Media/video/video.component.ts");
/* harmony import */ var _pipes_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/filtros/mi-filtro.pipe */ "./src/app/pipes/filtros/mi-filtro.pipe.ts");
/* harmony import */ var _pipes_Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pipes/Fechas/fecha.pipe */ "./src/app/pipes/Fechas/fecha.pipe.ts");

















const _c0 = ["slide"];
function ModalCitasPage_ion_header_0_ion_buttons_4_Template(rf, ctx) { if (rf & 1) {
    const _r530 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_header_0_ion_buttons_4_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r530); const ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r529.descartar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalCitasPage_ion_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Creando nuevas citas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalCitasPage_ion_header_0_ion_buttons_4_Template, 3, 0, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r522 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r522.type !== "chat");
} }
function ModalCitasPage_ion_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r532 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_header_1_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r532); const ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r531.descartar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fotos y V\u00EDdeos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalCitasPage_ion_header_2_Template(rf, ctx) { if (rf & 1) {
    const _r534 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_header_2_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r534); const ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r533.descartar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Carpeta de Citas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalCitasPage_ion_content_3_div_1_ion_item_13_Template(rf, ctx) { if (rf & 1) {
    const _r540 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("press", function ModalCitasPage_ion_content_3_div_1_ion_item_13_Template_ion_item_press_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r540); const taller_r538 = ctx.$implicit; const ctx_r539 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r539.opciones(taller_r538.usuarioReceptor.nombrecompleto); })("click", function ModalCitasPage_ion_content_3_div_1_ion_item_13_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r540); const taller_r538 = ctx.$implicit; const ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r541.crear(taller_r538); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taller_r538 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", taller_r538.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](taller_r538.usuarioReceptor.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](taller_r538.usuarioReceptor.nombreusuario);
} }
function ModalCitasPage_ion_content_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r543 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-searchbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ModalCitasPage_ion_content_3_div_1_ion_item_13_Template, 8, 3, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-slide", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_content_3_div_1_Template_ion_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r543); const ctx_r542 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r542.cancelar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_content_3_div_1_Template_ion_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r543); const ctx_r544 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r544.generarTicket(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Generar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r535.listaTalleres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Creando un nuevo turno para ", ctx_r535.usuario, "");
} }
function ModalCitasPage_ion_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCitasPage_ion_content_3_div_1_Template, 27, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r525.vista === "buscar");
} }
function ModalCitasPage_ion_content_4_app_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video", 30);
} if (rf & 2) {
    const ctx_r545 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("url", "https://motocaliapp.com/Citas/", ctx_r545.urlArchivo, "");
} }
function ModalCitasPage_ion_content_4_ion_slides_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r546.slideOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/Citas/", ctx_r546.urlArchivo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ModalCitasPage_ion_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCitasPage_ion_content_4_app_video_1_Template, 1, 1, "app-video", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalCitasPage_ion_content_4_ion_slides_2_Template, 3, 2, "ion-slides", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r526.tipoArchivo === "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r526.tipoArchivo === "imagen");
} }
const _c1 = function (a0, a1, a2) { return { "estado-amarillo ": a0, "estado-azul ": a1, "estado-verde ": a2 }; };
function ModalCitasPage_ion_content_5_ion_item_sliding_4_Template(rf, ctx) { if (rf & 1) {
    const _r550 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCitasPage_ion_content_5_ion_item_sliding_4_Template_ion_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r550); const cita_r548 = ctx.$implicit; const ctx_r549 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r549.escogerChat(cita_r548._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item-options", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cita_r548 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://motocaliapp.com/", cita_r548.imagenTaller, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cita_r548.nombrecompleto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", cita_r548.nombreusuario, " - Estado pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cita creada el ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, cita_r548.fechainicio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c1, cita_r548.estado === "PENDIENTE", cita_r548.estado === "EN PROGRESO", cita_r548.estado === "TERMINADO"));
} }
function ModalCitasPage_ion_content_5_Template(rf, ctx) { if (rf & 1) {
    const _r552 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-searchbar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function ModalCitasPage_ion_content_5_Template_ion_searchbar_ionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r552); const ctx_r551 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r551.filtro($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalCitasPage_ion_content_5_ion_item_sliding_4_Template, 17, 11, "ion-item-sliding", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "miFiltro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r527.citas, ctx_r527.texto));
} }
moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('es');
class ModalCitasPage {
    constructor(modalCtrl, actionSheetCtrl, citasService, utitlities, almacenamiento, animationCtrl, toast) {
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.citasService = citasService;
        this.utitlities = utitlities;
        this.almacenamiento = almacenamiento;
        this.animationCtrl = animationCtrl;
        this.toast = toast;
        this.titulo = 'Configuración';
        this.listaTalleres = [];
        this.mensaje = '';
        this.estado = '';
        this.estadoCambio = '';
        this.role = '';
        this.usuario = '';
        this.urlArchivo = '';
        this.tipoArchivo = '';
        this.slideOpt = {
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: true
            }
        };
        this.citas = [];
        this.texto = '';
        // Sistema de Trabajos en el local
        this.listaCreados = [];
        this.trabajos = [];
        this.nuevoTrabajo = false;
        this.textoTrabajo = '';
        this.textoBuscar = '';
        this.precioconfig = false;
        this.precio = 0;
        this.msgEstado = '';
        this.msgpro = '';
        this.msgter = '';
        this.terminado = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (this.type) {
                case 'setting':
                    const ui = yield this.almacenamiento.obtenerToken();
                    if (ui) {
                        this.citasService.obtenerListaTrabajos(ui.token).subscribe((res) => {
                            console.log(res, 'Respuesta');
                            if (res.exe) {
                                this.listaCreados = res.response[0].listaTrabajos;
                            }
                        });
                        console.log(1);
                    }
                    console.log(2);
                    this.vista = 'setting';
                    break;
                case 'buscar':
                    this.titulo = 'Buscar Talleres';
                    this.vista = 'buscar';
                    setTimeout(() => {
                        this.slide.lockSwipes(true).then(() => {
                            console.log('OK');
                        });
                    }, 500);
                    this.listarTalleres();
                    break;
                case 'media':
                    this.vista = 'media';
                    this.urlArchivo = this.data.url;
                    this.tipoArchivo = this.data.tipo;
                    break;
                case 'carpetas':
                    this.vista = 'carpetas';
                    console.log(this.data, 'BUENA ESA VALLE');
                    if (this.data.role === 'TALLER_ROLE') {
                        const filtrado = this.data.info.filter((item) => item.usuariopedido._id === this.data.unico);
                        this.citas = filtrado;
                    }
                    else {
                        const filtrado = this.data.info.filter((item) => item.idtaller._id === this.data.unico);
                        this.citas = filtrado;
                    }
                    break;
                default:
                    break;
            }
        });
    }
    filtro(event) {
        this.texto = event.detail.value;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const usuario = yield this.almacenamiento.obtenerToken();
            if (usuario) {
                this.modalCtrl.dismiss({
                    estado: this.estadoCambio,
                    info: {
                        trabajos: this.trabajos,
                        precio: this.precio
                    }
                });
                this.nuevoTrabajo = false;
            }
        });
    }
    escogerChat(cita) {
        this.modalCtrl.dismiss({
            salir: true,
            cita
        });
    }
    descartar() {
        this.modalCtrl.dismiss({
            salir: true
        });
    }
    listarTalleres() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.citasService.listadoTalleres(info.token).subscribe((data) => {
                if (data.response.length > 0) {
                    data.response.forEach((item) => {
                        item.avatar = item.usuarioReceptor.imagen[0].path;
                        this.listaTalleres.push(item);
                    });
                }
                console.log(this.listaTalleres, data);
            });
        });
    }
    opciones(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(true);
            const actionSheet = yield this.actionSheetCtrl.create({
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
                        text: 'Eliminar Usuario',
                        icon: 'trash-outline',
                        cssClass: 'eliminar',
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
    crear(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(false);
            yield this.slide.slideNext(300);
            this.usuario = item.usuarioReceptor.nombrecompleto;
            this.taller = item;
            yield this.slide.lockSwipes(true);
        });
    }
    generarTicket() {
        console.log('Taller', this.taller.usuarioReceptor._id);
        this.almacenamiento.obtenerToken().then((info) => {
            this.citasService.crearCita(info.token, { idtaller: this.taller.usuarioReceptor._id }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(data);
                yield this.modalCtrl.dismiss({});
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.utitlities.alertApplication('No se pudo agendar la cita', false);
                yield this.modalCtrl.dismiss({});
            }));
        });
    }
    cancelar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(false);
            yield this.slide.slidePrev(300);
            yield this.slide.lockSwipes(true);
        });
    }
    // CONFIGURACIONES
    filtroTrabajo(event) {
        this.textoBuscar = event.detail.value;
    }
    check(trabajo) {
        return this.trabajos.find((item) => item === trabajo);
    }
    borrarTrabajo(i) {
        this.trabajos.splice(i, 1);
    }
    habilitarTrabajo() {
        this.nuevoTrabajo = true;
    }
}
ModalCitasPage.ɵfac = function ModalCitasPage_Factory(t) { return new (t || ModalCitasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__["EstadoCitasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"])); };
ModalCitasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalCitasPage, selectors: [["app-modal-citas"]], viewQuery: function ModalCitasPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slide = _t.first);
    } }, inputs: { type: "type", data: "data" }, decls: 6, vars: 6, consts: [[4, "ngIf"], ["fullscreen", "true", 4, "ngIf"], ["fullscreen", "true", "color", "darkgold", 4, "ngIf"], ["color", "blanco"], ["fill", "clear", "slot", "end", 4, "ngIf"], ["fill", "clear", "slot", "end"], ["fill", "clear", 3, "click"], ["name", "close-outline"], ["color", "dark"], ["fill", "clear", "slot", "start"], ["fullscreen", "true"], ["class", "divider", 4, "ngIf"], [1, "divider"], ["slide", ""], ["fixed", ""], ["size", "12"], ["color", "light"], [3, "press", "click", 4, "ngFor", "ngForOf"], [1, "anchofull"], [1, "opacity"], ["size", "6"], ["expand", "block", "mode", "ios", "color", "light", 3, "click"], ["expand", "block", "mode", "ios", "color", "primary", 3, "click"], [3, "press", "click"], ["slot", "start"], ["width", "100%", "alt", "", 3, "src"], [1, "ion-text-wrap"], ["fullscreen", "true", "color", "darkgold"], [3, "url", 4, "ngIf"], ["class", "diapositiva", 3, "options", 4, "ngIf"], [3, "url"], [1, "diapositiva", 3, "options"], ["alt", "", 3, "src"], ["mode", "ios", 3, "ionChange"], [4, "ngFor", "ngForOf"], [3, "click"], ["slot", "start", 1, "avatar"], ["width", "100%", 3, "src"], [1, "medium"], ["slot", "end", 1, "estadobol", 3, "ngClass"], ["side", "start"], ["slot", "icon-only", "name", "ellipsis-vertical-outline"], ["color", "secondary"], ["slot", "icon-only", "name", "trash-outline"]], template: function ModalCitasPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalCitasPage_ion_header_0_Template, 5, 1, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCitasPage_ion_header_1_Template, 7, 0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalCitasPage_ion_header_2_Template, 7, 0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalCitasPage_ion_content_3_Template, 3, 1, "ion-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalCitasPage_ion_content_4_Template, 3, 2, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModalCitasPage_ion_content_5_Template, 6, 4, "ion-content", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "carpetas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "buscar" || ctx.vista === "chat" || ctx.vista === "setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vista === "carpetas");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _Components_Media_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"]], pipes: [_pipes_filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__["MiFiltroPipe"], _pipes_Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__["MiFechaPipe"]], styles: ["ion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-item[_ngcontent-%COMP%] {\n  touch-action: pan-y !important;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fullancho[_ngcontent-%COMP%] {\n  min-height: 100%;\n  height: auto;\n}\n\n.diapositiva[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.estado[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.estadobol[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.estado-verde[_ngcontent-%COMP%] {\n  background: #85B84F;\n}\n\n.estado-amarillo[_ngcontent-%COMP%] {\n  background: #FCD573;\n}\n\n.estado-azul[_ngcontent-%COMP%] {\n  background: #5591B1;\n}\n\n.es-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.es-bottom-small[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.precio[_ngcontent-%COMP%] {\n  height: 80px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 42px;\n  opacity: 0.8;\n  font-weight: bolder;\n  color: var(--ion-color-success);\n}\n\n.trabajo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.trabajo[_ngcontent-%COMP%]:nth-child(even) {\n  --background: #f9f9f9;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.ok[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\nvideo[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n\n.fl[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.aviso[_ngcontent-%COMP%] {\n  --background: #FEE491;\n}\n\n.aviso[_ngcontent-%COMP%]:hover {\n  --background: #FEE491 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvTW9kYWxlcy9tb2RhbC1jaXRhcy9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcTW9kYWxlc1xcbW9kYWwtY2l0YXNcXG1vZGFsLWNpdGFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvTW9kYWxlcy9tb2RhbC1jaXRhcy9tb2RhbC1jaXRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Nb2RhbGVzL21vZGFsLWNpdGFzL21vZGFsLWNpdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNsaWRlcyxcclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbGFuY2hvIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kaWFwb3NpdGl2YSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVzdGFkbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZXN0YWRvYm9sIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmVzdGFkby12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODVCODRGO1xyXG59XHJcblxyXG4uZXN0YWRvLWFtYXJpbGxvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XHJcbn1cclxuXHJcbi5lc3RhZG8tYXp1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU5MUIxO1xyXG59XHJcblxyXG4uZXMtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5lcy1ib3R0b20tc21hbGwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByZWNpbyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxufVxyXG5cclxuLnRyYWJham8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMywgMywgMywgMC4xKTtcclxufVxyXG5cclxuLnRyYWJham86bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub2sge1xyXG4gICAgb3BhY2l0eTogLjM7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYXZpc28ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxO1xyXG59XHJcblxyXG4uYXZpc286aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMsXG5pb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGxhbmNobyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmRpYXBvc2l0aXZhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVzdGFkbyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5lc3RhZG9ib2wge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uZXN0YWRvLXZlcmRlIHtcbiAgYmFja2dyb3VuZDogIzg1Qjg0Rjtcbn1cblxuLmVzdGFkby1hbWFyaWxsbyB7XG4gIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XG59XG5cbi5lc3RhZG8tYXp1bCB7XG4gIGJhY2tncm91bmQ6ICM1NTkxQjE7XG59XG5cbi5lcy1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXMtYm90dG9tLXNtYWxsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByZWNpbyB7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4udHJhYmFqbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XG59XG5cbi50cmFiYWpvOm50aC1jaGlsZChldmVuKSB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5vayB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxudmlkZW8ge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hdmlzbyB7XG4gIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcbn1cblxuLmF2aXNvOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalCitasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-modal-citas',
                templateUrl: './modal-citas.page.html',
                styleUrls: ['./modal-citas.page.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('entrada', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                opacity: 0,
                                transform: 'scale(0)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                opacity: 1,
                                transform: 'scale(1)'
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                opacity: 1,
                                transform: 'scale(1)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                                opacity: 0,
                                transform: 'scale(0)'
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }, { type: src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_3__["EstadoCitasService"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"] }, { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] }, { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], slide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['slide', { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=EstadoCitas-citas-citas-module-es2015.js.map