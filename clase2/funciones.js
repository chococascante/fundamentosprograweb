// Partes de una funcion
/**
 * 1. La palabra reservada "function".
 * 2. El nombre de la funcion.
 * 3. Parametros, pueden 0 a infinito
 * 4. Cuerpo de la funcion, logica.
 */

// Como se llama una funcion
/**
 *
 * 1. el nombre. SIEMPRE
 * 2. Parentesis. SIEMPRE
 * 3. Parametros dentro de los parentesis. OPCIONAL
 *
 */

//       Nombre (parametros) {cuerpo}
function suma(numero1, numero2) {
  const resultadoSuma = numero1 + numero2;

  return resultadoSuma;
}

function resta(numero1, numero2) {
  const resultadoResta = numero1 - numero2;
  return resultadoResta;
}

function armarTexto(palabra1, palabra2, palabra3) {
  const texto = palabra1 + palabra2 + palabra3;
  return texto;
}

function imprimirHora() {
  const hora = new Date();
  console.log(hora);
}

const resultadoSuma1 = suma(30, 15);
const resultadoResta = resta(30, 15);
const texto = armarTexto("Hola", "Mundo", "!");

console.log(texto);

imprimirHora();

// Ejemplos de funciones
const estudiantes = ["Leidy", "Laura", "Jarelyz", "Andrea", "Dinia"]; // Arreglo de nombres
const numeros = [25, 3, 5, 5, 675, 7, 3543, 45345, 345];

function devolverPrimerElemento(arreglo) {
  const primerElemento = arreglo[0];
  return primerElemento;
}

// const resultado = devolverPrimerElemento(estudiantes);
// console.log(resultado); ES LO MISMO QUE ABAJO

console.log(devolverPrimerElemento(estudiantes));

const primeroNumero = devolverPrimerElemento(numeros);
console.log(primeroNumero);

// Funcion que devuelva el elemento del indice que le mande
// ejemplo(estudiantes, 1) = Laura
// ejemplo(estudiantes, 4) = Dinia
// ejemplo(numeros,6) = 7
//
function devolverElementoN(arreglo, indice) {
  const elemento = arreglo[indice];

  return elemento;
}

const cuartoEstudiante = devolverElementoN(estudiantes, 3);
console.log(cuartoEstudiante);

const segundaEstudiante = devolverElementoN(estudiantes, 1);
console.log(segundaEstudiante);

const sextoNumero = devolverElementoN(numeros, 5);
console.log(sextoNumero);
