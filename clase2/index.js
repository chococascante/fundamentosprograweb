const sienna = {
  nombre: "Sienna",
  colorPelo: "cafe",
  ojos: "grises",
  altura: 60,
  vacunada: true,
  castrada: false,
  edad: 1,
  pareja: null,
  cachorros: undefined,
  especie: "perro",
  raza: "zaguate",
};

const manzana = {
  color: "roja",
  sabor: "dulce",
  textura: "dura",
  tamano: "pequeno",
  familia: "fruta",
  tallo: null,
  semillas: undefined,
};
// console.log("Manzana", manzana);

// const luis = Object.create(null);

// luis.nombre = "Luis";
// luis.apellido = "Cascante";
// luis.estatura = 180;

const luis = {
  nombre: "Luis",
  apellido: "Cascante",
  edad: 27,
  direccion: "Curridabat",
};

const keys = Object.keys(luis); // Para sacar los nombres
const values = Object.values(luis); // Para sacar los valores

// console.log(keys);

const lasagna = {
  pasta: "pasta de lasagna",
  proteina: "pollo",
  queso: "mozzarella",
  salsa: {
    base: "crema dulce",
    olores: [
      "ajo",
      "oregano",
      "cebolla",
      "mantequilla",
      "consome",
      "chile dulce",
    ],
  },
  sazon: ["sal", "pimienta"],
  vegetales: ["hongos"],
};
