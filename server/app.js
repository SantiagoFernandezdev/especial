require('../config/config');
const express = require('express');
const cors = require('cors');
const filesUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const SocketIO = require('socket.io');
const http = require('http');
let server = http.createServer(app);
const helmet = require('helmet');

app.use(helmet());
app.disable('x-powered-by');


app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false, limit: '9000mb' }));
app.use(bodyParser.json({ limit: '9000mb' }));
app.use(filesUpload({ useTempFiles: true }));

const mime = require('mime');

// escribimos la función que creará nuestra cabecera
const setHeadersOnStatic = (res, path, stat) => {
    const type = mime.getType(path);
    res.set('content-type', type);
}

// creamos el objeto con las opciones
const staticOptions = {
    setHeaders: setHeadersOnStatic
}

app.use(express.static(__dirname + '/public/', staticOptions));
app.use(require('../Routes/index'));

// Base de datos
mongoose.connect(process.env.URLBD, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        return console.log(`Error en la conexión ${err}`);
    }

})

//Sockets 

module.exports.io = SocketIO(server);
require('./sockets/sockets');


// jobs

require('../Jobs/Recordatorios');


server.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(`Error ${err}`);
    }

    console.log(`Ejecutando aplicación en puerto ${process.env.PORT}`);
})