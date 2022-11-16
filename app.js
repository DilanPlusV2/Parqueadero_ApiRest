const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const reservaRoute = require('./routes/reservas');
const vehiculoRoute = require('./routes/vehiculos');
const userRoute = require('./routes/usuario');
const puestosRoute = require('./routes/puestos');
const zonaParqueoRoute = require('./routes/zonaparqueo');

app.use(bodyParser.json());
app.use("/reservas",reservaRoute);
app.use("/vehiculos",vehiculoRoute);
app.use('/usuario', userRoute);
app.use('/puestos', puestosRoute);
app.use('/zonaparqueo', zonaParqueoRoute);

module.exports = app;