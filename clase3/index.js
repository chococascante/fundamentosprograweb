/**
 *  mayor > menor
 * mayor igual >= menor
 * menor < mayor
 * menor <= mayor igual
 * == preguntar si son iguales, sin revisar tipo de datos
 * === pregunta si los tipos y valores son iguales
 *
 * != es diferente de
 * !== es diferente de pero revisa tipos
 */

const test = "test";
const test1 = "test";
console.log("Valor test:", test);
console.log("Tipo test:", typeof test);

console.log("Valor test1:", test1);
console.log("Tipo test1:", typeof test1);

console.log("test == test1", test == test1);
console.log("test === test1", test === test1);

console.log("");
console.log("---------------------------------");
console.log("");

const numero = 1234;
const textDeNumero = "1234";
console.log("Valor numero:", numero);
console.log("Tipo numero:", typeof numero);

console.log("Valor textDeNumero:", textDeNumero);
console.log("Tipo textDeNumero:", typeof textDeNumero);

console.log("numero == textoDeNumero", numero == textDeNumero);
console.log("numero === textoDeNumero", numero === textDeNumero);

console.log("");
console.log("---------------------------------");
console.log("");

const cero = 0;
const falso = false;
console.log("Valor cero:", cero);
console.log("Tipo cero:", typeof numero);

console.log("Valor falso:", falso);
console.log("Tipo falso:", typeof falso);

console.log("cero == falso", cero == falso);
console.log("cero === falso", cero === falso);

console.log("");
console.log("---------------------------------");
console.log("");

const stringVacio = "";
const falso1 = false;
console.log("Valor stringVacio:", stringVacio);
console.log("Tipo stringVacio:", typeof stringVacio);

console.log("Valor falso:", falso1);
console.log("Tipo falso:", typeof falso1);

console.log("stringVacio == falso", stringVacio == falso1);
console.log("cestringVacioro === falso", stringVacio === falso1);
