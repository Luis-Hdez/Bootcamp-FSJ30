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


