/**
 * 1. Estudiantes que pasaron el curso
 * 2. Estudiantes mayores de edad
 * 3. Ordenar por edad
 * 4. Eliminar repetidos
 * 5. Redondear notas.
 */

const estudiantes = [
  {
    nombre: "Luis",
    apellido: "Cascante",
    edad: 17,
    genero: "Masculino",
    notaFinal: 51.75,
  },
  {
    apodo: "Luis",
    apellido: "Elizondo",
    edad: 18,
    genero: "Masculino",
    notaFinal: 78.9,
  },
  {
    nombre: "Edris",
    apellido: "Ríos",
    edad: 22,
    genero: "Masculino",
    notaFinal: 95.5,
  },
  {
    nombre: "Mariana",
    apellido: "García",
    edad: 16,
    genero: "Femenino",
    notaFinal: 84.9,
  },
  {
    nombre: "Betzabet",
    apellido: "Cháves",
    edad: 23,
    genero: "Femenino",
    notaFinal: 67.5,
  },
  {
    nombre: "Hati",
    apellido: "Alexandra",
    edad: 2,
    genero: "Femenino",
    notaFinal: 82.25,
  },
  {
    nombre: "Akamaru",
    apellido: "Josue",
    edad: 3,
    genero: "Masculino",
    notaFinal: 77,
  },
  {
    nombre: "Siena",
    apellido: "María",
    edad: 1,
    genero: "Femenino",
    notaFinal: 19.8,
  },
];

const estudiantesQuePasaron = estudiantes.filter((estudiante) => {
  return estudiante.notaFinal >= 70;
});

const estudiantesMayoresDeEdad = estudiantes.filter((estudiante) => {
  return estudiante.edad >= 18;
});

const listaOrdenada = estudiantes.sort((estudianteA, estudianteB) => {
  return estudianteA.edad - estudianteB.edad; // Ascendete
});

// console.log(listaOrdenada);

// Eliminar Repetidos de un arreglo
const nombres = ["Luis", "Andrea", "Paola", "Dinia", "Leidy", "Cindy"];
const nombres1 = ["Luis", "Andrea"];

const arregloNum1 = [1, 4, 3, 5, 6, 7];
const arregloNum2 = [3, 7, 3, 4, 5];

function eliminarRepetidos(arreglo1, arreglo2) {
  // Ciclo para revisar elementos el primer arreglo
  for (let i = 0; i < arreglo1.length; i++) {
    // Ciclo para revisar elementos el segundo arreglo
    for (let j = 0; j < arreglo2.length; j++) {
      //Revisamos si los valores son iguales
      if (arreglo1[i] === arreglo2[j]) {
        arreglo1.splice(i, 1);
        i--;
        break;
      }
    }
  }
}

// console.log(nombres);
// eliminarRepetidos(nombres, nombres1);

// console.log(nombres);

// console.log(arregloNum1);

// eliminarRepetidos(arregloNum1, arregloNum2);

// console.log(arregloNum1);

// Comparar si A === B

const notasRedondedas = estudiantes.map(function (estudiante) {
  return { ...estudiante, notaFinal: Math.round(estudiante.notaFinal) };
});

console.log(notasRedondedas);
