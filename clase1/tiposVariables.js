// Formas de definir variables
/*
  Se pueden cambiar:
  var
  let
  No se puede cambiar:
  const (Constante)
*/

// No CAMBIA
const hola = "Hola mundo!";
// hola = "adiós!";
// console.log(hola);

// Sí CAMBIAN
{
  let numero = 2;

  console.log(numero); // 2

  numero = 5;
  console.log(numero);
}

// console.log(numero); // ERROR

// Ejemplo VAR vs LET
var foo = "Foo";
let bar = "Bar";

// console.log(foo, bar); // Foo Bar

{
  var moo = "Moo";
  let baz = "Bazz";
  // console.log(moo, baz); // Moo Bazz
}

// console.log(moo); // Moo
// console.log(baz); // Error
