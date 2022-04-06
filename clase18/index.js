function sumar(a, b) {
  return a + b;
}

function revertir(texto = "") {
  let resultado = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    resultado = resultado + texto[i];
  }

  return resultado;
}

module.exports = {
  sumar,
  revertir,
};
