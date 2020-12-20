(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/pages/menu/menu-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");





const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_2__["MenuPage"]
    }
];
class MenuPageRoutingModule {
}
MenuPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuPageRoutingModule });
MenuPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuPageRoutingModule_Factory(t) { return new (t || MenuPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/pages/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







class MenuPageModule {
}
MenuPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuPageModule });
MenuPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuPageModule_Factory(t) { return new (t || MenuPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenuPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuPageModule, { declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _menu_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenuPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _menu_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenuPageRoutingModule"]
                ],
                declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "./src/app/providers/Almacenamiento/inicio.service.ts");
/* harmony import */ var src_app_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/Utilidades/LoadingService.service */ "./src/app/providers/Utilidades/LoadingService.service.ts");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "./src/app/providers/Utilidades/ToastService.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/Seguimiento.service */ "./src/app/providers/Api/Seguimiento.service.ts");
/* harmony import */ var src_app_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/cargas/usuarios.service */ "./src/app/providers/cargas/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Conexiones/Conexion.service */ "./src/app/providers/Conexiones/Conexion.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../providers/Api/UsuariosLogin.service */ "./src/app/providers/Api/UsuariosLogin.service.ts");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../providers/Api/Recordatorios.service */ "./src/app/providers/Api/Recordatorios.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");


























const _c0 = function () { return ["/central/menu/factura"]; };
class MenuPage {
    constructor(almacenamiento, loading, toastService, navCtrl, apiSeguimiento, cargaElementos, router, menuCtrl, conexion, usuarioApi, apiRecordatorios, statusbar) {
        this.almacenamiento = almacenamiento;
        this.loading = loading;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.apiSeguimiento = apiSeguimiento;
        this.cargaElementos = cargaElementos;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.conexion = conexion;
        this.usuarioApi = usuarioApi;
        this.apiRecordatorios = apiRecordatorios;
        this.statusbar = statusbar;
        this.cantidadSeguimiento = 0;
        this.notificaciones = 0;
        this.recordatorios = 0;
        this.red = 'wifi';
        this.role = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusbar.backgroundColorByHexString('#777777');
        this.capturarRole();
    }
    capturarRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                this.apiSeguimiento.solicitudesRecibidas(info.token).subscribe((data) => {
                    if (data.exe) {
                        this.cantidadSeguimiento = data.response.SeguimientoData.length;
                    }
                });
                this.usuarioApi.notiCantidad(info.token).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        this.notificaciones = data.response;
                    }
                });
                this.apiRecordatorios.getRecordatorioPersona(info.token).subscribe((data) => {
                    this.recordatorios = data.response.length;
                });
            }
        });
    }
    terminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const estado = yield this.almacenamiento.terminarPartida();
                if (estado) {
                    console.log(estado, 'ESTADO');
                    this.loading.cargaProcesos('Cerrando sesión, te esperamos pronto').then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const abandonarPartida = yield this.conexion.destruir();
                        if (abandonarPartida) {
                            console.log(abandonarPartida);
                            console.log('Abandonar partida');
                            this.cargaElementos.cancelarSuscripciones();
                            this.router.navigate(['/home']);
                            this.loading.finalizarCargado();
                        }
                        else {
                            console.log('Abandonar partida falló');
                            this.loading.finalizarCargado();
                        }
                    }));
                }
                else {
                    console.log('MUY MAL');
                    this.router.navigate(['/home']);
                }
            }
            catch (error) {
                this.router.navigate(['/home']);
                this.loading.finalizarCargado();
                yield this.toastService.alertApplication('No se pudo cerrar la sesión', false);
            }
        });
    }
}
MenuPage.ɵfac = function MenuPage_Factory(t) { return new (t || MenuPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__["ApiSeguimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__["ConexionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_11__["UsuariosLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_12__["RecordatoriosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"])); };
MenuPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuPage, selectors: [["app-menu"]], decls: 12, vars: 2, consts: [[1, "ion-no-border"], ["color", "oscuro"], ["color", "light"], [1, "opts"], ["mode", "ios", 3, "routerLink"], ["src", "/assets/NuevaFactura.png", "width", "100px"], [1, "light"]], template: function MenuPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Herramientas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Facturero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"]], styles: [".alerta[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100%;\n}\n\n.opts[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n  margin: 10px 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  text-align: center;\n}\n\n.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n}\n\n@media screen and (min-width: 800px) {\n  .opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n    width: calc(33.33% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9DOlxcTWltb3RvL3NyY1xcYXBwXFxwYWdlc1xcbWVudVxcbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLDBCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRhIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3B0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi5vcHRzIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5vcHRzIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcclxuICAgIH1cclxufSIsIi5hbGVydGEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3B0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ub3B0cyBpb24tY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBtYXJnaW46IDEwcHggNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5vcHRzIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRzIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAub3B0cyBpb24tY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMTBweCk7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('alerta', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                    background: '#FFEBAD',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                    background: '#FFFFFF'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('300ms')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.page.html',
                styleUrls: ['./menu.page.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('alerta', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                            background: '#FFEBAD',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                            background: '#FFFFFF'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('300ms')
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"] }, { type: src_app_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }, { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }, { type: src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__["ApiSeguimientoService"] }, { type: src_app_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }, { type: src_app_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_9__["ConexionService"] }, { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_11__["UsuariosLoginService"] }, { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_12__["RecordatoriosService"] }, { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"] }]; }, null); })();


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


/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map