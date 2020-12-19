function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-central-central-module"], {
  /***/
  "./src/app/pages/central/central.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/central/central.module.ts ***!
    \*************************************************/

  /*! exports provided: CentralPageModule */

  /***/
  function srcAppPagesCentralCentralModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralPageModule", function () {
      return CentralPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _central_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./central.page */
    "./src/app/pages/central/central.page.ts");

    var routes = [{
      path: '',
      component: _central_page__WEBPACK_IMPORTED_MODULE_5__["CentralPage"],
      children: [{
        path: 'perfil',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | usuario-perfil-perfil-module */
            [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"), __webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("default~usuario-perfil-perfil-module~usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("common"), __webpack_require__.e("usuario-perfil-perfil-module")]).then(__webpack_require__.bind(null,
            /*! ../usuario/perfil/perfil.module */
            "./src/app/pages/usuario/perfil/perfil.module.ts")).then(function (m) {
              return m.PerfilPageModule;
            });
          }
        }, {
          path: 'solicitudes',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | usuario-solicitudes-solicitudes-module */
              "usuario-solicitudes-solicitudes-module").then(__webpack_require__.bind(null,
              /*! ../usuario/solicitudes/solicitudes.module */
              "./src/app/pages/usuario/solicitudes/solicitudes.module.ts")).then(function (m) {
                return m.SolicitudesPageModule;
              });
            },
            data: {
              animation: 'SolicitudUsuario'
            }
          }]
        }]
      }, {
        path: 'buscar',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | buscar-buscar-module */
            "buscar-buscar-module").then(__webpack_require__.bind(null,
            /*! ../buscar/buscar.module */
            "./src/app/pages/buscar/buscar.module.ts")).then(function (m) {
              return m.BuscarPageModule;
            });
          },
          data: {
            animation: 'BuscarUsuario'
          }
        }, {
          path: 'perfil-visita/:usuario',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | usuario-perfil-visita-perfil-visita-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"), __webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("default~usuario-perfil-perfil-module~usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("usuario-perfil-visita-perfil-visita-module")]).then(__webpack_require__.bind(null,
              /*! ../usuario/perfil-visita/perfil-visita.module */
              "./src/app/pages/usuario/perfil-visita/perfil-visita.module.ts")).then(function (m) {
                return m.PerfilVisitaPageModule;
              });
            }
          }]
        }]
      }, {
        path: 'menu',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-menu-module */
            "menu-menu-module").then(__webpack_require__.bind(null,
            /*! ../menu/menu.module */
            "./src/app/pages/menu/menu.module.ts")).then(function (m) {
              return m.MenuPageModule;
            });
          }
        }, {
          path: 'solicitudes',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | usuario-solicitudes-solicitudes-module */
            "usuario-solicitudes-solicitudes-module").then(__webpack_require__.bind(null,
            /*! ../usuario/solicitudes/solicitudes.module */
            "./src/app/pages/usuario/solicitudes/solicitudes.module.ts")).then(function (m) {
              return m.SolicitudesPageModule;
            });
          }
        }, {
          path: 'miscitas',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | EstadoCitas-citas-citas-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("EstadoCitas-citas-citas-module")]).then(__webpack_require__.bind(null,
              /*! ../EstadoCitas/citas/citas.module */
              "./src/app/pages/EstadoCitas/citas/citas.module.ts")).then(function (m) {
                return m.CitasPageModule;
              });
            }
          }, {
            path: 'hoja/:id',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | EstadoCitas-hoja-hoja-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("EstadoCitas-hoja-hoja-module")]).then(__webpack_require__.bind(null,
              /*! ../EstadoCitas/hoja/hoja.module */
              "./src/app/pages/EstadoCitas/hoja/hoja.module.ts")).then(function (m) {
                return m.HojaPageModule;
              });
            }
          }]
        }, {
          path: 'hoja',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | HojadeVida-hoja-hoja-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("HojadeVida-hoja-hoja-module")]).then(__webpack_require__.bind(null,
              /*! ../HojadeVida/hoja/hoja.module */
              "./src/app/pages/HojadeVida/hoja/hoja.module.ts")).then(function (m) {
                return m.HojaPageModule;
              });
            }
          }, {
            path: 'mihoja/:id/:tipo',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | EstadoCitas-hoja-hoja-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("EstadoCitas-hoja-hoja-module")]).then(__webpack_require__.bind(null,
              /*! ../EstadoCitas/hoja/hoja.module */
              "./src/app/pages/EstadoCitas/hoja/hoja.module.ts")).then(function (m) {
                return m.HojaPageModule;
              });
            }
          }]
        }, {
          path: 'factura',
          children: [{
            path: '',
            // tslint:disable-next-line:max-line-length
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | Facturas-factura-inicio-factura-inicio-module */
              "Facturas-factura-inicio-factura-inicio-module").then(__webpack_require__.bind(null,
              /*! ../Facturas/factura-inicio/factura-inicio.module */
              "./src/app/pages/Facturas/factura-inicio/factura-inicio.module.ts")).then(function (m) {
                return m.FacturaInicioPageModule;
              });
            }
          }, {
            path: 'factura-configuracion',
            // tslint:disable-next-line:max-line-length
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Facturas-factura-configuracion-factura-configuracion-module */
              [__webpack_require__.e("common"), __webpack_require__.e("Facturas-factura-configuracion-factura-configuracion-module")]).then(__webpack_require__.bind(null,
              /*! ../Facturas/factura-configuracion/factura-configuracion.module */
              "./src/app/pages/Facturas/factura-configuracion/factura-configuracion.module.ts")).then(function (m) {
                return m.FacturaConfiguracionPageModule;
              });
            }
          }, {
            path: 'factura-nueva',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Facturas-factura-nueva-factura-nueva-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("common"), __webpack_require__.e("Facturas-factura-nueva-factura-nueva-module")]).then(__webpack_require__.bind(null,
              /*! ../Facturas/factura-nueva/factura-nueva.module */
              "./src/app/pages/Facturas/factura-nueva/factura-nueva.module.ts")).then(function (m) {
                return m.FacturaNuevaPageModule;
              });
            }
          }]
        }, {
          path: 'recordatorios',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Recordatorios-recordatorio-recordatorio-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("Recordatorios-recordatorio-recordatorio-module")]).then(__webpack_require__.bind(null,
              /*! ../Recordatorios/recordatorio/recordatorio.module */
              "./src/app/pages/Recordatorios/recordatorio/recordatorio.module.ts")).then(function (m) {
                return m.RecordatorioPageModule;
              });
            }
          }]
        }, {
          path: 'notificaciones',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | notificaciones-notificaciones-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("notificaciones-notificaciones-module")]).then(__webpack_require__.bind(null,
              /*! ../notificaciones/notificaciones.module */
              "./src/app/pages/notificaciones/notificaciones.module.ts")).then(function (m) {
                return m.NotificacionesPageModule;
              });
            }
          }]
        }, {
          path: 'empleados',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | empleados-empleados-module */
              [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("empleados-empleados-module")]).then(__webpack_require__.bind(null,
              /*! ../empleados/empleados.module */
              "./src/app/pages/empleados/empleados.module.ts")).then(function (m) {
                return m.EmpleadosPageModule;
              });
            }
          }]
        }, {
          path: 'ivt-inicio',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Inventarios-ivt-inicio-ivt-inicio-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("common"), __webpack_require__.e("Inventarios-ivt-inicio-ivt-inicio-module")]).then(__webpack_require__.bind(null,
              /*! ../Inventarios/ivt-inicio/ivt-inicio.module */
              "./src/app/pages/Inventarios/ivt-inicio/ivt-inicio.module.ts")).then(function (m) {
                return m.IvtInicioPageModule;
              });
            }
          }]
        }, {
          path: 'ivt-miinventario/:id',
          children: [{
            path: '',
            // tslint:disable-next-line:max-line-length
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Inventarios-ivt-miinventario-ivt-miinventario-module */
              [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("Inventarios-ivt-miinventario-ivt-miinventario-module")]).then(__webpack_require__.bind(null,
              /*! ../Inventarios/ivt-miinventario/ivt-miinventario.module */
              "./src/app/pages/Inventarios/ivt-miinventario/ivt-miinventario.module.ts")).then(function (m) {
                return m.IvtMiinventarioPageModule;
              });
            }
          }, {
            path: 'empleados/:id',
            children: [{
              path: '',
              // tslint:disable-next-line:max-line-length
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtempleados-ivtempleados-module */
                [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("Inventarios-ivtempleados-ivtempleados-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtempleados/ivtempleados.module */
                "./src/app/pages/Inventarios/ivtempleados/ivtempleados.module.ts")).then(function (m) {
                  return m.IVTempleadosPageModule;
                });
              }
            }]
          }, {
            path: 'proveedores/:id',
            children: [{
              path: '',
              // tslint:disable-next-line:max-line-length
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtproveedores-ivtproveedores-module */
                [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("common"), __webpack_require__.e("Inventarios-ivtproveedores-ivtproveedores-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtproveedores/ivtproveedores.module */
                "./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.module.ts")).then(function (m) {
                  return m.IVTProveedoresPageModule;
                });
              }
            }]
          }, {
            path: 'categorias/:id',
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtcategorias-ivtcategorias-module */
                [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtcategorias-ivtcategorias-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtcategorias/ivtcategorias.module */
                "./src/app/pages/Inventarios/ivtcategorias/ivtcategorias.module.ts")).then(function (m) {
                  return m.IVTcategoriasPageModule;
                });
              }
            }]
          }, {
            path: 'productos/:id',
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtproductos-ivtproductos-module */
                [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtproductos-ivtproductos-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtproductos/ivtproductos.module */
                "./src/app/pages/Inventarios/ivtproductos/ivtproductos.module.ts")).then(function (m) {
                  return m.IVTproductosPageModule;
                });
              }
            }]
          }, {
            path: 'productos/:id/:modal',
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtproductos-ivtproductos-module */
                [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtproductos-ivtproductos-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtproductos/ivtproductos.module */
                "./src/app/pages/Inventarios/ivtproductos/ivtproductos.module.ts")).then(function (m) {
                  return m.IVTproductosPageModule;
                });
              }
            }]
          }, {
            path: 'productos',
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtproductos-ivtproductos-module */
                [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtproductos-ivtproductos-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtproductos/ivtproductos.module */
                "./src/app/pages/Inventarios/ivtproductos/ivtproductos.module.ts")).then(function (m) {
                  return m.IVTproductosPageModule;
                });
              }
            }]
          }, {
            path: 'entradas/:id',
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtentradas-ivtentradas-module */
                [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtentradas-ivtentradas-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtentradas/ivtentradas.module */
                "./src/app/pages/Inventarios/ivtentradas/ivtentradas.module.ts")).then(function (m) {
                  return m.IVTentradasPageModule;
                });
              }
            }]
          }, {
            path: 'salidas/:id/:creador',
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivtsalidas-ivtsalidas-module */
                [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("common"), __webpack_require__.e("Inventarios-ivtsalidas-ivtsalidas-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivtsalidas/ivtsalidas.module */
                "./src/app/pages/Inventarios/ivtsalidas/ivtsalidas.module.ts")).then(function (m) {
                  return m.IVTsalidasPageModule;
                });
              }
            }]
          }, {
            path: 'ivt-configuracion/:id',
            children: [{
              path: '',
              // tslint:disable-next-line:max-line-length
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivt-configuracion-ivt-configuracion-module */
                [__webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("Inventarios-ivt-configuracion-ivt-configuracion-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivt-configuracion/ivt-configuracion.module */
                "./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.module.ts")).then(function (m) {
                  return m.IvtConfiguracionPageModule;
                });
              }
            }]
          }, {
            path: 'ivt-movimientos/:id',
            children: [{
              path: '',
              // tslint:disable-next-line:max-line-length
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivt-movimientos-ivt-movimientos-module */
                [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("Inventarios-ivt-movimientos-ivt-movimientos-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivt-movimientos/ivt-movimientos.module */
                "./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.module.ts")).then(function (m) {
                  return m.IvtMovimientosPageModule;
                });
              }
            }]
          }, {
            path: 'ivt-estadisticas/:id',
            children: [{
              path: '',
              // tslint:disable-next-line:max-line-length
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | Inventarios-ivt-estadisticas-ivt-estadisticas-module */
                [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Inventarios-ivt-configuracion-ivt-configuracion-module~Inventarios-ivt-estadisticas-ivt-esta~d8f64576"), __webpack_require__.e("Inventarios-ivt-estadisticas-ivt-estadisticas-module")]).then(__webpack_require__.bind(null,
                /*! ../Inventarios/ivt-estadisticas/ivt-estadisticas.module */
                "./src/app/pages/Inventarios/ivt-estadisticas/ivt-estadisticas.module.ts")).then(function (m) {
                  return m.IvtEstadisticasPageModule;
                });
              }
            }]
          }]
        }, {
          path: 'grua',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Mapas-grua-grua-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module"), __webpack_require__.e("Mapas-grua-grua-module")]).then(__webpack_require__.bind(null,
              /*! ../Mapas/grua/grua.module */
              "./src/app/pages/Mapas/grua/grua.module.ts")).then(function (m) {
                return m.GruaPageModule;
              });
            }
          }]
        }, {
          path: 'inicioMapa',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | Mapas-inicio-inicio-module */
              "Mapas-inicio-inicio-module").then(__webpack_require__.bind(null,
              /*! ../Mapas/inicio/inicio.module */
              "./src/app/pages/Mapas/inicio/inicio.module.ts")).then(function (m) {
                return m.InicioPageModule;
              });
            }
          }]
        }, {
          path: 'sedeMapa',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Mapas-sedes-mapa-sedes-mapa-module */
              [__webpack_require__.e("common"), __webpack_require__.e("Mapas-sedes-mapa-sedes-mapa-module")]).then(__webpack_require__.bind(null,
              /*! ../Mapas/sedes-mapa/sedes-mapa.module */
              "./src/app/pages/Mapas/sedes-mapa/sedes-mapa.module.ts")).then(function (m) {
                return m.SedesMapaPageModule;
              });
            }
          }]
        }, {
          path: 'control-mapas',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | Mapas-control-mapas-control-mapas-module */
              [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module~Pages-usuario-perfil-perfil-~8c6d9cb4"), __webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module"), __webpack_require__.e("common"), __webpack_require__.e("Mapas-control-mapas-control-mapas-module")]).then(__webpack_require__.bind(null,
              /*! ../Mapas/control-mapas/control-mapas.module */
              "./src/app/pages/Mapas/control-mapas/control-mapas.module.ts")).then(function (m) {
                return m.ControlMapasPageModule;
              });
            }
          }]
        }]
      }, {
        path: 'iniciosan',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Santiago-saninicio-saninicio-module */
            [__webpack_require__.e("default~EstadoCitas-citas-citas-module~EstadoCitas-hoja-hoja-module~Facturas-factura-nueva-factura-n~20677346"), __webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("common"), __webpack_require__.e("Santiago-saninicio-saninicio-module")]).then(__webpack_require__.bind(null,
            /*! ../Santiago/saninicio/saninicio.module */
            "./src/app/pages/Santiago/saninicio/saninicio.module.ts")).then(function (m) {
              return m.SANinicioPageModule;
            });
          }
        }]
      }, {
        path: 'creador',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Santiago-sancreador-sancreador-module */
            [__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("common"), __webpack_require__.e("Santiago-sancreador-sancreador-module")]).then(__webpack_require__.bind(null,
            /*! ../Santiago/sancreador/sancreador.module */
            "./src/app/pages/Santiago/sancreador/sancreador.module.ts")).then(function (m) {
              return m.SANcreadorPageModule;
            });
          }
        }]
      }, {
        path: 'creador/:tipo',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Santiago-sancreador-sancreador-module */
            [__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("common"), __webpack_require__.e("Santiago-sancreador-sancreador-module")]).then(__webpack_require__.bind(null,
            /*! ../Santiago/sancreador/sancreador.module */
            "./src/app/pages/Santiago/sancreador/sancreador.module.ts")).then(function (m) {
              return m.SANcreadorPageModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: '/central/menu'
      }]
    }];

    var CentralPageModule = function CentralPageModule() {
      _classCallCheck(this, CentralPageModule);
    };

    CentralPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CentralPageModule
    });
    CentralPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CentralPageModule_Factory(t) {
        return new (t || CentralPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CentralPageModule, {
        declarations: [_central_page__WEBPACK_IMPORTED_MODULE_5__["CentralPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentralPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_central_page__WEBPACK_IMPORTED_MODULE_5__["CentralPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/central/central.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/central/central.page.ts ***!
    \***********************************************/

  /*! exports provided: CentralPage */

  /***/
  function srcAppPagesCentralCentralPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralPage", function () {
      return CentralPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../providers/Registro/registro.service */
    "./src/app/providers/Registro/registro.service.ts");
    /* harmony import */


    var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/Almacenamiento/inicio.service */
    "./src/app/providers/Almacenamiento/inicio.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var CentralPage =
    /*#__PURE__*/
    function () {
      // @ViewChild('tab', { static: true, read: IonTabs }) private tabsRef: IonTabs;
      // v: any = '';
      function CentralPage(registroService, almacenamiento, menuCtrl) {
        _classCallCheck(this, CentralPage);

        this.registroService = registroService;
        this.almacenamiento = almacenamiento;
        this.menuCtrl = menuCtrl;
      }

      _createClass(CentralPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(true, 'perfilMenu').then(function () {// this.obtenerTab(this.tabsRef.outlet.activatedRouteData['animation']);
          });
        }
      }, {
        key: "abrirMenu",
        value: function abrirMenu() {
          console.log('Hola');
          this.menuCtrl.toggle('perfilMenu').then(function (e) {
            console.log('Bine', e);
          }).catch(function (e) {
            console.log('Mal', e);
          });
        }
      }]);

      return CentralPage;
    }();

    CentralPage.ɵfac = function CentralPage_Factory(t) {
      return new (t || CentralPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]));
    };

    CentralPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CentralPage,
      selectors: [["app-central"]],
      decls: 4,
      vars: 0,
      consts: [["slot", "bottom", "color", "muro"], ["tab", "menu"], ["name", "menu"]],
      template: function CentralPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tab-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NlbnRyYWwvY2VudHJhbC5wYWdlLnNjc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('routeAnimationsCentral', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => PerfilUsuario', [// Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0,
          transform: 'scale(0) translateY(200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => BuscarUsuario', [// Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0,
          transform: 'scale(0) translateY(200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => SolicitudUsuario', [// Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0,
          transform: 'scale(0) translateY(200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentralPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-central',
          templateUrl: './central.page.html',
          styleUrls: ['./central.page.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('routeAnimationsCentral', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => PerfilUsuario', [// Set a default  style for enter and leave
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0,
            transform: 'scale(0) translateY(200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 1,
            transform: 'scale(1) translateY(0)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => BuscarUsuario', [// Set a default  style for enter and leave
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0,
            transform: 'scale(0) translateY(200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 1,
            transform: 'scale(1) translateY(0)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => SolicitudUsuario', [// Set a default  style for enter and leave
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0,
            transform: 'scale(0) translateY(200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 1,
            transform: 'scale(1) translateY(0)'
          }))])])]
        }]
      }], function () {
        return [{
          type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"]
        }, {
          type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-central-central-module-es5.js.map