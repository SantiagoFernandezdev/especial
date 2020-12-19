const express = require('express');
const app = express();

app.use(require('./Usuarios/usuarios'));
app.use(require('./Login/login'));
app.use(require('./Upload/upload'));
app.use(require('./Biografia/Biografia'));
app.use(require('./Seguimiento/Seguimiento'));
app.use(require('./EstadoCitas/settings'));
app.use(require('./EstadoCitas/Citas'));
app.use(require('./EstadoCitas/Chat'));
app.use(require('./Conexiones/Conexiones'));
app.use(require('./Recordatorios/Recordatorios'));
app.use(require('./Notificaciones/Notificaciones'));
app.use(require('./Inventarios/Tipos'));
app.use(require('./Empleados/Empleados'));
app.use(require('./Inventarios/Proveedores'));
app.use(require('./Inventarios/Categorias'));
app.use(require('./Inventarios/Productos'));
app.use(require('./Inventarios/Entradas'));
app.use(require('./Inventarios/Salidas'));
app.use(require('./Inventarios/Movimientos'));
app.use(require('./Mapas/Mapa'));

app.use(require('./IGTM/publicacion'));
app.use(require('./IGTM/Historias'));
app.use(require('./EstadoCitas/HojadeVida'));

app.use(require('./Facturas/Facturas'));

module.exports = app;