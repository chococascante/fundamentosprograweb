let animal = "patito";
console.log(animal);
animal = "perro";

console.log(animal);

const nombre = "Luis";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

console.log("-------------------------------------------------------");

function holaMundo() {
  console.log("Hola mundo.");
}

holaMundo();

console.log("-------------------------------------------------------");

function imprimirNombre(nombre) {
  console.log(nombre);
}

imprimirNombre("Luis");
imprimirNombre("Siena");

console.log("-------------------------------------------------------");

function imprimirNombreApellido(nombre, apellido) {
  console.log(nombre, apellido);
}

imprimirNombreApellido("Luis", "Cascante");

function funcion() {
  let variableFuncion = 5;
}

// console.log(variableFuncion);

function sumar(a, b) {
  return a + b;
}

const resultadoSuma = sumar(4, 3);
console.log(resultadoSuma);

function crearPersona(nombre, apellido, estatura, colorPelo) {
  return {
    nombre: nombre,
    apellido: apellido,
    estatura: estatura,
    colorPelo: colorPelo,
  };
}

function crearPersonaArreglo(nombre, apellido, estatura, colorPelo) {
  return [nombre, apellido, estatura, colorPelo];
}

console.log(crearPersona("Luis", "Cascante", 1.8, "negro"));
console.log(crearPersonaArreglo("Luis", "Cascante", 1.8, "negro"));
