/**
 * 1. Escriba una función que reciba un arreglo de números, y encuentre el mayor entre todos.
 * 2. Escriba una función que reciba un arreglo de números, y de cada uno, diga si son par o impar.
 */

// [1, 2]
// [3, 0, 1]
// [25, 250, 150, 1035, 900, 701]
function encontrarMayor(arregloNumeros) {
  let mayor = 0;

  // i, indice que revisamos: 6
  // condicion de parada:  i < cantidadElementos => 6 <= 6
  // elemento, el elemento en la posición del índice: 701
  // mayor que tenemos guardado: 1035

  //  Valor inicial  condicion            incremento/decremento
  for (let i = 0; i < arregloNumeros.length; i = i + 1) {
    const elemento = arregloNumeros[i];

    if (elemento > mayor) {
      mayor = elemento;
    }
  }

  return mayor;
}

const mayor = encontrarMayor([25, 250, 150, 1035, 900, 701]);
// console.log("El numero mayor es ", mayor);

/**
 * cantida de elementos: 6 *
 * indice i: 6
 * i < cantidadElementos ===> 6 < 6
 * elemento: 701
 */
function esParOImpar(arregloNumeros) {
  const cantidadDeElementosArreglo = arregloNumeros.length;
  for (let i = 0; i < cantidadDeElementosArreglo; i++) {
    const elemento = arregloNumeros[i];

    if (elemento % 2 === 0) {
      console.log(`El elemento ${elemento} es par.`);
    } else {
      console.log(`El elemento ${elemento} es impar.`);
    }
  }
}

// esParOImpar([25, 250, 150, 1035, 900, 701]);

// For of
function esParOImparOf(arregloNumeros) {
  for (elemento of arregloNumeros) {
    if (elemento % 2 === 0) {
      console.log(`El elemento ${elemento} es par.`);
    } else {
      console.log(`El elemento ${elemento} es impar.`);
    }
  }
}
// esParOImparOf([25, 250, 150, 1035, 900, 701]);

function encontrarMayorOf(arregloNumeros) {
  let mayor = 0;
  for (elemento of arregloNumeros) {
    if (elemento > mayor) {
      mayor = elemento;
    }
  }

  return mayor;
}

// console.log(encontrarMayorOf([25, 250, 150, 1035, 900, 701]));

// For in

function imprimirColeccion(objeto) {
  for (nombre in objeto) {
    // Arreglos  arreglo[0]
    // Objetos   objeto['nombre']
    console.log(objeto[nombre]);
  }
}

function imprimirObjetoAPata(objeto) {
  console.log(objeto.nombre);
  console.log(objeto.color);
  console.log(objeto.saludable);
  console.log(objeto.delicioso);
  console.log(objeto.comentarios);
}

const arregloEjemplo = [25, 250, 150, 1035, 900, 701];
const objetoEjemplo = {
  nombre: "Coca Cola",
  color: "negro",
  saludable: false,
  delicioso: true,
};
console.log(arregloEjemplo); // arregloEjemplo[0]
imprimirColeccion(arregloEjemplo);
console.log("---------------------------------");
// imprimirObjetoAPata(objetoEjemplo);
