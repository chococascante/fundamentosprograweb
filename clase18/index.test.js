const funciones = require("./index.js");

describe("clase pruebas unitarias", function () {
  it("primera prueba", function () {
    expect(true).toBe(true);
  });

  it("suma dos números positivos", function () {
    const resultadoEsperado = 5;
    const resultado = funciones.sumar(3, 2);

    expect(resultado).toBe(resultadoEsperado);
  });

  it("suma dos números negativos", function () {
    const resultadoEsperado = -2;
    const resultado = funciones.sumar(-1, -1);

    expect(resultado).toBe(resultadoEsperado);
  });

  it("suma un número positivo y uno negativo", function () {
    const resultadoEsperado = 0;
    const resultado = funciones.sumar(-1, 1);

    expect(resultado).toBe(resultadoEsperado);
  });

  it("revertir una palabra", function () {
    const palabra = "abc";
    const resultadoEsperado = "cba";

    const resultado = funciones.revertir(palabra);

    expect(resultado).toBe(resultadoEsperado);
  });

  it("revertir con espacios", function () {
    const palabra = "perro y gato";
    const resultadoEsperado = "otag y orrep";

    const resultado = funciones.revertir(palabra);

    expect(resultado).toBe(resultadoEsperado);
  });

  it("revertir con espacios", function () {
    const palabra = "";
    const resultadoEsperado = "";

    const resultado = funciones.revertir(palabra);

    expect(resultado).toBe(resultadoEsperado);
  });

  it("revertir con espacios", function () {
    const palabra = undefined;
    const resultadoEsperado = "";

    const resultado = funciones.revertir(palabra);

    expect(resultado).toBe(resultadoEsperado);
  });
});
