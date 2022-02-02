// Escriba una función que reciba un número como string y le dé vuelta al número.
// '32165' => '56123'
function invertirFrase(numero) {
  // for (let i = 0; i < numero.length; i++) {
  //   console.log(numero[i]);
  // }

  let resultado = "";
  // i = '32165'.length - 1 => 5 - 1 => -1
  // numero = '32165'
  // numero[i] = 3
  console.log(`Esto ha corrido ${numero.length} veces`);
  for (let i = numero.length - 1; i >= 0; i--) {
    resultado = resultado.concat(numero[i]);
  }
  return resultado;
}

// const numeroInvertido = invertirFrase("32165");
// console.log(numeroInvertido);

function limpiarString(str) {
  return str.replaceAll(" ", "").toLowerCase();
}

// Escriba una función que reciba un string y diga si es palíndromo.
// oso => oso
// seres => seres
// luis => siul
// Dabale arroz a la zorra el abad
function esPalindromo(frase) {
  const palabraInvertida = invertirFrase(frase);

  if (limpiarString(palabraInvertida) === limpiarString(frase)) {
    console.log("Es Palindromo!!!!");
  } else {
    console.log("No es palindromo :(");
  }
}

esPalindromo("Dabale arroz a la zorra el abad");

// Oso => 'oso'.length => 3
// luis => siul
// fraseLimpia = dabalearrozalazorraelabad
// fraseLimpia.length => 25
// i = 3
// fraseLimpia[i] = a
// fraseLimpia[25 - 1 - i] = a
function palindromoOptimizado(frase) {
  const fraseLimpia = limpiarString(frase);

  for (let i = 0; i < fraseLimpia.length / 2; i++) {
    console.log(`Esto ha corrido ${i + 1} veces`);
    const extremoIzquierdo = fraseLimpia[i];
    const extremoDerecho = fraseLimpia[fraseLimpia.length - 1 - i];
    if (extremoIzquierdo !== extremoDerecho) {
      console.log("No es palindromo :(");

      return;
    }
  }

  console.log("Es un palindromo :)");
}

console.log("-----------------");

palindromoOptimizado("Dabale arroz a la zorra el abad");
