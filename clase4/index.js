/**
 * 1. Escriba una función que reciba un arreglo de números, y encuentre el mayor entre todos.
 * 2. Escriba una función que reciba un arreglo de números, y de cada uno, diga si son par o impar.
 */

// [1, 2]
// [3, 0, 1]
// [25, 150, 250, 1035, 900, 701]
function encontrarMayor(arregloNumeros) {
  for (let i = 0; i < arregloNumeros.length; i++) {
    console.log(`Elemento ${i}: `, arregloNumeros[i]);
  }
}

encontrarMayor([1, 2]);
