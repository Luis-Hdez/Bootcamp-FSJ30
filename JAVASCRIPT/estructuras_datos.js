// Estructuras de datos
// datos primitivos: number, string, boolean, null, undefined, symbol
// datos compuestos: array, object, function

let vacio = null; // Representa la ausencia de valor
let indefinido; // Variable declarada pero no inicializada
console.log(vacio); // Imprime undefined

vacio = "string re estandar"; // Asignación de un string
console.log(vacio); // Imprime "string re estandar"

// Objetos
// obejtos literales: son colecciones de propiedades y métodos
// ejemplo: formularios, bases de datos, etc.
let perro = {
  nombre: "Firulais",
  edad: 5,
  raza: "Labrador",
};

// mostrar una característica del objeto
console.log(perro.nombre); // Imprime "Firulais"

// POO -> Programación Orientada a Objetos
// forma de escribir código -> reutilizable
// clases: plantillas para crear objetos
// objetos: instancias de clases -> creamos algo con base en una clase
// métodos: funciones dentro de un objeto
// atributos o propiedades: variables dentro de un objeto
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  hablar() {
    console.log(`${this.nombre} hace un sonido.`);
  }
  mostrarEdad() {
    console.log(`${this.nombre} tiene ${this.edad} años.`);
  }
}

// Crear una instancia de la clase Animal
let gato = new Animal("Miau", 3);
gato.hablar(); // Imprime "Miau hace un sonido."
gato.mostrarEdad(); // Imprime "Miau tiene 3 años."

class Persona {
  constructor(nombreParam, edadParam) {
    // this -> apuntamos a esta clase
    this.nombre = nombreParam;
    this.edad = edadParam;
  }

  // Método para mostrar información de la persona
  correr() {
    console.log(`${this.nombre} está corriendo.`);
  }
}

// Utilizar el constructor de persona -> INSTANCIAR
let personita = new Persona("Juan", 25);
// Mostrar información de la persona
console.log(personita); // Imprime "Juan"

// acceder a algo de un objeto
personita.correr(); // Imprime "Juan está corriendo."

// pilares de la POO
// Exiten para asegurar un codigo mas ecalable, mantenible y reutilizable.
// 1. Abstracción: ocultar detalles complejos y mostrar solo lo necesario. No existe en JS
// 2. Encapsulamiento: agrupar datos y métodos relacionados en una clase. No existe en JS
// 3. Herencia: permitir que una clase herede propiedades y métodos de otra clase.
// 4. Polimorfismo: permitir que diferentes clases implementen el mismo método de diferentes maneras.
class Progrador extends Persona {
  // Carcteristicas de la clase Progrador
  constructor(nombreParam, edadParam, lenguaje) {
    super(nombreParam, edadParam); // Llama al constructor de la clase padre (Persona)
    this.lenguaje = lenguaje; // Agrega una nueva propiedad específica de Progrador
  }
  // metodos propios de la clase Progrador
  codear() {
    console.log(`${this.nombre} está programando en ${this.lenguaje}.`);
  }

  // usaremos polimorfismo
  correr() {
    //super.correr(); // Llama al método correr de la clase padre (Persona)
    console.log(`${this.nombre} está corriendo.`);
  }
}

let programador = new Progrador("Ana", 30, "JavaScript");
programador.codear(); // Imprime "Ana está programando en JavaScript."
programador.correr(); // Imprime "Ana está corriendo."

// clase martes 4 de julio de 2025
// Arrays // Son colecciones ordenadas de elementos
let arraycitoIdx = [1, 2, 3, 4, 5]; // Array de números
console.log(arraycitoIdx); // Imprime [1, 2, 3, 4, 5]
console.log(arraycitoIdx[0]); // Imprime 1 (primer elemento del array)

let arrayAsociativo = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 28 },
];

// array multideimensional
let arrayMultidimensional = [
  [1, 2, 3],
  [
    {
      nombre: "Ana",
      edad: 30,
      direccion: { ciudad: "Madrid", pais: "España" },
    },
  ],
];

// accedemos a la posicon 1
let cajaDeIndiceUno = arrayMultidimensional[1];
console.log(cajaDeIndiceUno[0]); // Imprime el segundo array dentro del array multidimensional
console.log(cajaDeIndiceUno[0].nombre); // Imprime "Ana"

console.log(arrayMultidimensional[0][1]); // Imprime 2 (segundo elemento del primer array)
console.log(arrayMultidimensional[1][0].nombre); // Imprime "Ana"
console.log(arrayMultidimensional[1][0].direccion.ciudad); // Imprime "Madrid"

// Métodos de arrays
// recorrer un array
let nombres = ["Juan", "Ana", "Pedro", "María"];
// forEach: ejecuta una función para cada elemento del array
// nos deja utilizar la posicion y el valor del elemento
nombres.forEach(function (nombre, index) {
  console.log(index + ": " + nombre); // Imprime el índice y el nombre
});

nombres.forEach((nombre) => {
  console.log("Hola, " + nombre + "!");
});

// ordenar un array
let frutas = ["Banana", "Naranja", "Pera", "Manzana"];
frutas.sort(); // Ordena el array alfabéticamente
console.log(frutas);

// metodos utiles de arrays
// map: crea un nuevo array con los resultados de aplicar una función a cada elemento del array original
// recorre el array y nos retorna

// dar vuelta a un array
let numeros = [1, 2, 3, 4, 5];
let numerosInvertidos = numeros.reverse(); // Invierte el orden del array
console.log(numerosInvertidos); // Imprime [5, 4, 3, 2, 1]

let numerosCuadrados = numeros.map((num) => num * num);
console.log(numerosCuadrados); // Imprime [1, 4, 9, 16, 25]

let names = ["Juan", "Ana", "Pedro", "María"];
const namesMayus = names.map((name) => {
  return name.toUpperCase();
});
console.log(namesMayus); // Imprime ["JUAN", "ANA", "PEDRO", "MARÍA"]

// foreach que reciba el array completo
/*let arrayNum = [1, 2, 3, 4, 5];
arrayNum.forEach((value, index, array) => {
  arrayNum.pop()
  console.log(array)
})*/

// filter: crea un nuevo array con los elementos que cumplen una condición
let edades = [15, 20, 25, 30, 35];
let mayoresDeVeinte = edades.filter((edad) => edad > 20);
console.log(mayoresDeVeinte); // Imprime [25, 30, 35]

const usuarios = [
  { nombre: "Jorge", edad: 32 },
  { nombre: "Jorge", edad: 28 },
  { nombre: "José", edad: 17 }
];

const mayoresDe21 = usuarios.filter((usuario) => { return usuario.edad > 21 && usuario.edad < 30})
console.log(mayoresDe21); // Imprime [{ nombre: "Jorge", edad: 28 }]

// find: devuelve el primer elemento que cumple una condición
const usuarioJorge = usuarios.find ((usuario) => { return usuario.nombre === "Jorge" && usuario.edad === 32 })
console.log(usuarioJorge)

// Métodos elementales(OBLIGATORIOS) de arrays
// Agregar datos a un array
let array = [];
// push: agrega uno o más elementos al final del array
array.push(2, 4);
console.log(array);

// unshift: agrega uno o más elementos al principio del array
array.unshift(1 , 3);
console.log(array); 

// pop: elimina el último elemento del array y lo devuelve
array.pop();
console.log(array)

// shift: elimina el primer elemento del array y lo devuelve
array.shift();
console.log(array);

// obtner la longitud de un array
console.log(array.length);

console.log("Hola Mundo".length);

// metodo para eliminar los espacos en blanco al inicio y al final de un string
let texto = "   Hola Mundo   ";
let textoSinEspacios = texto.trim();
console.log(textoSinEspacios.length);