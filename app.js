// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexión a BD
mongoose.connection.openUri(
  'mongodb://localhost:27017/hospitalDB',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) throw err;
    console.log('\x1b[32m[db] database online \x1b[0m');
  }
);

// Rutas
app.get('/', (request, response, next) => {
  response.status(200).json({
    ok: true,
    mensaje: 'Petición realizada correctamente'
  });
});

// Escuchar peticiones
app.listen(3000, () => {
  console.log('\x1b[32m[express] server online on port 3000\x1b[0m');
});
