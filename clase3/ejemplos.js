// Escribir una función que reciba dos números y nos diga cuál número es el mayor
function mayor(numero1, numero2) {
  //    1     >   1
  if (numero1 > numero2) {
    console.log("Entro al primer if");
    console.log("El primer numero es mayor.");
  }
  //    1     <    1
  else if (numero1 < numero2) {
    console.log("Entro al segundo if");
    // es igual a decir numero2 > numero1
    console.log("El segundo numero es mayor.");
  } else {
    console.log("Entro al else");
    console.log("Los dos numeros son iguales");
  }
}

mayor(1, 2);

// Escribir una función que devuelva el número mayor.

function devuelveMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  }
  // else if (numero1 < numero2) {
  //   mayor = numero2;
  // }
  else {
    return numero2;
  }
}

const resultado = devuelveMayor(2, 5); // 2
console.log(resultado);

// Escribir una función que nos diga si un número es positivo o negativo. (0 es positivo)
function signoDeNumero(numero) {
  if (numero >= 0) {
    console.log("El número es positivo");
  } else {
    console.log("El número es negativo");
  }
}

// Escribir una función que imprima 'Hola Mundo!' en algunos idiomas.
/**
 * es = Español
 * en = Inglés
 * fr = Francés
 */
function holaMundoInternacional(idioma) {
  switch (idioma) {
    case "es":
      console.log("Hola Mundo!");
      break;
    case "en":
      console.log("Hello world!");
      break;

    case "fr":
      console.log("Salut Monde!");
      break;

    default:
      // Caso por defecto.
      console.log("Idioma no aceptado.");
      break;
  }
  // => después del break cae aquí
}

holaMundoInternacional("fr");

// Escriba una función que reciba un número y una palabra y devuelva la palabra en plural o singular
// (1, perro) => perro, (2, perro) => perros

const frase = "gato";
const stringTemplate = `${frase} travieso;`;

function saludar(nombre) {
  //  'Hola' + ' mi nombre es ' + nombre + ', mucho gusto.'
  return `Hola mi nombre es ${nombre}, mucho gusto.`;
}

console.log(saludar("Paola"));

function singularOPluralLargo(numero, palabra) {
  if (numero > 1) {
    return numero + " " + palabra + "s";
  } else {
    return numero + " " + palabra;
  }
}

const palabra = singularOPluralLargo(1, "perro");
console.log(palabra);

// Acento grave
//                               1
function singularOPluralSimple(numero, palabra) {
  //          1 perro
  return `${numero} ${palabra}${numero > 1 ? "s" : ""}`;
}

const fraseSimple = singularOPluralSimple(2, "perro");
console.log(fraseSimple);

// Operator ternario
/**
 * if(tal cosa){
 *  return 'hola';
 * }
 * else {
 *  return 'adios';
 * }
 *
 *
 * tal cosa ? 'hola' : 'adios'
 */

//  function devuelveMayor(numero1, numero2) {
//   if (numero1 > numero2) {
//     return numero1;
//   }
//   // else if (numero1 < numero2) {
//   //   mayor = numero2;
//   // }
//   else {
//     return numero2;
//   }
// }

function devuelveMayorSimple(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}

const resultadoSimple = devuelveMayorSimple(1, 2);
console.log(resultadoSimple);
