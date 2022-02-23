// Definir o declarar una funcion
function foo() {
    // LOGICA O CUERPO
    console.log('foo');
}

// LLAMAR UNA FUNCION
foo(); // foo

function molerCarne(carne) {

    return carneMolida;
}

molerCarne(carneMechar);

function devolverSuma(a, b) {
    return a + b;
}

const suma = devolverSuma(2, 3); // 5

function imprimirSuma(a, b) {
    console.log(a + b); // 5
}

const suma1 = imprimirSuma(2, 3); // undefined


// -----------------------------------------
function sumarArregloWhile(arreglo) {
    let i, suma = 0; // i = 0, suma = 0

    while (i < arreglo.length) {
        suma = suma + arreglo[i];
        i = i + 1;
    }

    return suma;
}

function sumarArregloFor(arreglo) {
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];
    }

    return suma;
}

function sumarArregloReduce(arreglo = []) {
    return arreglo.reduce(function (valorPasado, valorActual) {
        return valorPasado + valorActual;
    }, 0);
}


// Opcion 1 para ver resultado en consola
const sumaWhile = sumarArregloWhile([20, 10, 30, 5, 50]);
console.log(sumaWhile);

// Opcion 2 para ver resultado en consola
console.log(sumarArregloWhile([1, 2, 3, 4]));