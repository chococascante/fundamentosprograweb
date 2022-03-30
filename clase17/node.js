const express = require("express");
const usuarios = require("./users.json");

// Crear una aplicación de express
const app = express();

// Configurar ruta
//      'click'
app.get("/hola", function (solicitud, respuesta) {
  respuesta.send("Hola Mundo!");
});

// localhost:3000?nombre=pepe
app.get("/saludo", function (solicitud, respuesta) {
  const nombre = solicitud.query.nombre;
  respuesta.send(`Hola ${nombre}!`);
});

app.get("/users", function (solicitud, respuesta) {
  respuesta.send(usuarios);
});

// localhost:3000/users/1
app.get("/users/:id", function (solicitud, respuesta) {
  const id = solicitud.params.id;

  const usuario = usuarios.find(function (usuario) {
    return usuario.id == id;
  });
  respuesta.send(usuario);
});

app.listen(3000);
