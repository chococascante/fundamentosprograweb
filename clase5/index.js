/**
 * Temas de hoy:
 * - Métodos de arreglos: .map, .foreach, .filter, .reduce
 *
 */

const arreglo = ["Luis", "Sienna"];

const resultadoPush = arreglo.push("Meli");

// console.log("Arreglo", arreglo);

const resultadoPop = arreglo.pop();

// console.log("Arreglo", arreglo);
// console.log("resultado", resultadoPop);

// JSON
// JavaScript Object Notation
// Notación de Objetos de JavaScript

function procesarPersona(objeto) {
  const objetoProcesado = {
    nombre: objeto.name,
    correoElectronico: objeto.email,
    telefono: objeto.phone,
    sitioWeb: objeto.website,
  };
  return objetoProcesado;
}

function separarNombre(objeto) {
  const nombreApellido = objeto.name.split(" ");

  return {
    nombre: nombreApellido[0],
    apellido: nombreApellido[1],
  };
}

function revertirNombre(objeto) {
  const nombreApellido = objeto.name.split(" ");

  console.log(nombreApellido[1] + " " + nombreApellido[0]);
  return nombreApellido[1] + " " + nombreApellido[0];
  // return `${nombreApellido[1]} ${nombreApellido[0]}`;
}

async function traerDatos() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const datos = await respuesta.json();
  return datos;
}

function imprimirPersona(objeto) {
  console.log(objeto);
}

// Arreglo .map
async function mappearDatos() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const datos = await respuesta.json();
  // console.log("Datos originales: ", datos);

  // Procesar datos
  const datosProcesados = datos.map(revertirNombre);
  console.log(datosProcesados);
}

async function forEachDatos() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const datos = await respuesta.json();
  // console.log("Datos originales: ", datos);

  // Procesar datos
  const datosProcesados = datos.forEach(revertirNombre);
  console.log(datosProcesados);
}

function filtrarPorNumeroTelefono(objeto) {
  if (objeto.id < 5) {
    return true; // SI
  }

  return false; // NO
}

async function filterDatos() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const datos = await respuesta.json();
  // console.log("Datos originales: ", datos);

  // Procesar datos
  const datosFiltrados = datos.filter(filtrarPorNumeroTelefono);
  console.log(datosFiltrados);
}

// forEachDatos();

const estudiantes = [
  {
    id: 1,
    name: "Aracellys Mercado",
  },
  {
    id: 2,
    name: "Jessica Mora",
  },
  {
    id: 3,
    name: "Laura Núñez",
  },
  { id: 4, name: "Jennifer Mora" },
  { id: 5, name: "Dinia Castro" },
  { id: 6, name: "Ileana Campos" },
];

// mappearDatos();

filterDatos();

// ------------------ EJEMPLOS DE CÓMO FUNCIONA -----------------
function map(arreglo, funcion) {
  const nuevoArreglo = [];
  for (elemento of arreglo) {
    const resultadoElemento = funcion(elemento); // SÍ CAMBIAMOS EL ELEMENTO
    nuevoArreglo.push(resultadoElemento);
  }

  return nuevoArreglo;
}

function forEach(arreglo, funcion) {
  const nuevoArreglo = [];
  for (elemento of arreglo) {
    const resultadoElemento = funcion(elemento); // SÍ CAMBIAMOS EL ELEMENTO
    nuevoArreglo.push(resultadoElemento);
  }
  // NO DEVUELVE NADA
}

function filtrarID(objeto) {
  if (objeto.id < 5) {
    return true;
  }
  return false;
}

function filter(arreglo, funcion) {
  const nuevoArreglo = [];
  for (elemento of arreglo) {
    // Este resultado es SÍ o NO
    const resultado = funcion(elemento); // NO CAMBIAMOS EL ELEMENTO
    if (resultado) {
      // SI EL RESULTADO ES "SÍ", LO DEVOLVEMOS
      nuevoArreglo.push(elemento);
    }
  }
  return nuevoArreglo;
}

const resultadoFilter = filter(estudiantes, filtrarID);
console.log(resultadoFilter);

const resultado = map(estudiantes, separarNombre);
// console.log(resultado);
