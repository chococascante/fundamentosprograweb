/***
 *
 * 1. Escriba una función que reciba cualquier cantidad de números
 *    y devuelva el resultado de la suma.
 * 2. Escriba una función que elimite un atributo de un objeto.
 * 3. Escriba una función que agregue o actualice un valor de un atributo de un objeto.
 * 4. Escriba una función que reciba un arreglo y lo ordene por un atributo específico.
 */

function concatenar(...strings) {
  let fraseFinal = "";
  for (let i = 0; i < strings.length; i++) {
    fraseFinal = fraseFinal + strings[i];
  }
  return fraseFinal;
}

// console.log(concatenar("hola", " ", "mundo", "!", ".", " ", "?"));

// const arreglo =  [1,2,3,4,5,6,7
function sumarNumeros(...parametros) {
  console.log(parametros);
  let suma = 0;
  // i++
  // i = i + 1
  for (let i = 0; i < parametros.length; i++) {
    // suma = suma + params[i]
    suma += parametros[i];
  }

  return suma;
}

// console.log(sumarNumeros(1, 23, 4, 5));

function sumaAuxiliar(acumulador, elemento) {
  return acumulador + elemento;
}

// Reduce recibe una función
// Params: acumulador, elemento
function sumarConReduce(arregloNumeros) {
  const resultado = arregloNumeros.reduce(sumaAuxiliar, 0);
  return resultado;
}

// console.log(sumarConReduce([1, 23, 4, 5]));

function concatReduce(strings) {
  const resultado = strings.reduce((fraseFinal, frase) => {
    return fraseFinal + frase;
  }, "");

  return resultado;
}

// console.log(concatReduce(["hola", " ", "mundo", "!", ".", " ", "?"]));

// .map: arreglo[n] => arreglo[n]
// .forEach: arreglo[n] => undefined
// .filter: arreglo[n] => arreglo[? >= n]
// .reduce: arreglo[n] => un valor

function encontrarNumeroMayor(arregloNumeros) {
  const mayor = arregloNumeros.reduce((resultado, numero) => {
    if (resultado < numero) {
      return numero;
    }
    return resultado;
  }, 0);

  return mayor;
}

// console.log(encontrarNumeroMayor([1, 23, 4, 5]));

// Escriba una función que reciba un arreglo de objetos
// Y nos diga cuántas veces se repiten los valores
const estudiantes = [
  {
    nombre: "Luis Cascante",
    edad: 20,
  },
  { nombre: "Melissa Mendez", edad: 25 },
  { nombre: "Sienna", edad: 5 },
  {
    nombre: "Luis Cascante",
    edad: 25,
  },
  { nombre: "Melissa Mendez", edad: 5 },
  { nombre: "Hati", edad: 2 },
];

// {25: 3, 5: 2, 2: 1}
function contarRepetidos(arreglo) {
  const arregloNombres = arreglo.map((estudiante) => estudiante.nombre);
  // console.log(arregloNombres);
  //                          0                1             2             3
  // const arreglo =  ['Luis Cascante', 'Melissa Mendez', 'Sienna', 'Luis Cascante', 'Melissa Mendez', 'Hati']
  //    arreglo[2]
  // resultado = {'Luis Cascante': 2, 'Melissa Mendez': 2, 'Sienna': 1, "Hati": 1}
  // nombre = 'Luis Cascante'
  // resultado[nombre] = undefined | null

  return arregloNombres.reduce((resultado, nombre) => {
    if (resultado[nombre] == null) {
      resultado[nombre] = 1;
    } else {
      resultado[nombre] = resultado[nombre] + 1;
    }

    return resultado;
  }, {});
}

// console.log(contarRepetidos(estudiantes));

// Escriba una función que elimine un atributo de un objeto
function eliminarAtributo(objeto, atributo) {
  delete objeto[atributo];
}

function agregarOActualizarAtributo(objeto, atributo, valor) {
  objeto[atributo] = valor;
}

const objeto = { edad: 25, apellido: "Cascante" };

// console.log(objeto);
eliminarAtributo(objeto, "edad");
agregarOActualizarAtributo(objeto, "nombre", "Luis");
// console.log(objeto);

function ordenarObjetos(arreglo, atributo) {
  const arregloObjetos = [...arreglo];
  let auxiliar = null;
  /** *
    i = 4
    j = 0
   arreglo[i] = {
    nombre: "Luis Cascante",
    edad: 20,
  }
   arreglo[j] =  {
    nombre: "Luis Cascante",
    edad: 25,
  }
   */

  for (let i = 0; i < arregloObjetos.length; i++) {
    for (let j = 0; j < arregloObjetos.length; j++) {
      console.log(JSON.stringify(arregloObjetos));
      const primerElemento = arregloObjetos[i];
      const segundoElemento = arregloObjetos[j];
      console.log(
        `Comparando ${primerElemento.nombre}:${primerElemento.edad} con ${segundoElemento.nombre}:${segundoElemento.edad} `
      );

      if (primerElemento[atributo] < segundoElemento[atributo]) {
        console.log(
          `Cambiando ${primerElemento.nombre}:${primerElemento.edad} con ${segundoElemento.nombre}:${segundoElemento.edad} `
        );
        console.log(JSON.stringify(arregloObjetos));
        auxiliar = arregloObjetos[i];
        arregloObjetos[i] = arregloObjetos[j];
        arregloObjetos[j] = auxiliar;
      }
    }
  }

  return arregloObjetos;
}

const estudiantes1 = [
  { nombre: "Sienna", edad: 5 },
  { nombre: "Melissa Mendez", edad: 50 },
  {
    nombre: "Luis Cascante",
    edad: 25,
  },
  {
    nombre: "Luis Cascante",
    edad: 20,
  },
  { nombre: "Melissa Mendez", edad: 25 },
  { nombre: "Hati", edad: 22 },
];

ordenarObjetos(estudiantes1, "edad");
