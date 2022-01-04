// Tipos primitivos de variables de JS

/*
  1. String (cadena de caracteres).
  2. Boolean.
  3. Numeric. (float, int, bigInt).
  4. Undefined.
  5. Null.
  6. Objetos.
*/

// Ejemplos de strings.
let str = "a";
let numero = 4;
let str1 = "patito";
let stringTemplate = `Hola mundo! ${str}-${numero}/${str1}`; // ${} Machote de string, encima del tab

let ejemplo1 = undefined;
let ejemplo2 = null;
let objeto = {};
// Armar fecha de nacimiento con strings
let dia = 16; //numeric -> string = '16'
let mes = "febrero"; // string
let anno = 1994; //numeric -> string = '1994'
const fechaNacimiento = dia + "-" + mes + "-" + anno;
// console.log(fechaNacimiento);

// Quiero comprar comida para el almuerzo en uber eats por $50.
const item = "Quiero comprar comida";
const razon = "para el almuerzo";
const lugarTienda = "en uber eats";
const monto = "por $50.";
const oracion = item + " " + razon + " " + lugarTienda + " " + monto;
const oracion1 = item.concat(razon).concat(lugarTienda).concat(monto);
// console.log(oracion);

// Version string template
let item1 = "comprar comida";
let razon1 = "el almuerzo";
let lugarTienda1 = "uber eats";
let monto1 = "$50.";
const oracionTemplate = `Quiero ${item1} para ${razon1} en ${lugarTienda1} por ${monto1}`;
// console.log(oracionTemplate);

let manzana = "manzana";
let naranja = "naranja";
const resultado = manzana.concat(naranja); // manzananaranja
// console.log(resultado);

// console.log(manzana.length);
// console.log(resultado.length);

// console.log(manzana.charAt(5));

// for (let j = 0; j < manzana.length; j++) {
//   console.log(manzana.charAt(j));
// }

// Ejemplos de numeric
let cinco = 5;
var diez = 10;
let numNegativo = -500;
let numPositivo = 7500;

let flotantes = 7.5;

const tres = 3;

const suma = cinco + diez; // 15;
// console.log("Suma", suma);

const resta = cinco - diez; // -5
// console.log("Resta", resta);

const division = diez / tres;
// console.log("División", division);

const multiplicacion = diez * cinco; // 50
// console.log("Multiplicación", multiplicacion);

const residuo = diez % cinco;
// console.log("Residuo", residuo);

const exponente = diez ** cinco;
// console.log("Exponente", exponente);

// MUY UTIL
const esPar = 12 % 2;
// console.log(esPar);

const conDecimales = division.toFixed(1);
// console.log(conDecimales);

// NaN = Not a Number -> No es un número

// Operadores: +, -, /, *, **, %

const string1 = "patito";
const string2 = "manzana";
const numString1 = parseInt(string1); // patito -> NaN
console.log(typeof numString1);

console.log(string1 - string2);

const numeroString = "16"; // string -> parseInt('16')
const res = numeroString % 4; // string + numeric
console.log(res);

// Ejemplo booleans
let verdadero = true;
let falso = false;

// Conjunción = Y = &&
console.log(true && true); // true;
console.log(true && false); // false;
console.log(false && true); // false;
console.log(false && false); // false;

// Disyunción = O = ||
console.log(true || true); // true;
console.log(true || false); // true;
console.log(false || true); // true;
console.log(false || false); // false;

// Negación = NO = !
console.log(!true); // false
console.log(!false); // true

// Valores que se vuelven falso
let stringVacio = "";
let vacio = null;
let indefinido = undefined;
let arregloVacio = [];
let objetoVacio = {};

if (stringVacio) {
  console.log("Soy string vacio");
}

console.log("Conversión a booleano", !!stringVacio);
