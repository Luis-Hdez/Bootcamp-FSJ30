// Comentarios -> desahabilitar líneas
/*
Multi 
línea
*/

// Impresiones en consola
console.log("Hola Mundo");
console.error("Error en la consola");

// JS es una lenguaje de tipado dinámico, interpretado y multiparadigma

// Variables y constantes
let variable = "Luis Hernández"; // Variable que puede cambiar
var variablecita = "Fernando"; // Variable que puede cambiar, pero no se recomienda su uso

const constante = "Constante"; // Variable que no puede cambiar. Este espeacio de memoria no va a cambiar su referencia
const numero = 3.14; // Constante numérica
numero = 123;
console.loge(numero); // Esto causará un error porque no se puede reasignar una constante

// variable = 3; // Reasignación de variable

// Concatenación de cadenas
console.log("Hola " + variable);

console.log("5" + 5); // Esto es una concatenación, el resultado será "55"
console.log("5" - 5); // Esto es una resta, el resultado será 0

// Cambiar los tipos de varoles o variables
// Parsear una cadena a un número
let cinco = parseInt("5"); // Convierte la cadena "5" a número 5
console.log(cinco + 5); // Esto será 10, porque ahora ambos son números

// Operadores aritméticos
let suma = 5 + 5;
let resta = "10" - 5; // Aquí "10" se convierte a número y se resta 5, el resultado es 5
let multiplicacion = 5 * 5;
let division = 4 / 2;
let modulo = 5 % 2; // El resto de la división de 5 entre 2, que es 1
let potencia = 2 ** 3; // 2 elevado a la 3, que es 8

// Operadores lógicos
// OR || AND && NOT !

// Operadores de comparación
// Igualdad ==, igualdad estricta ===, desigualdad !=, desigualdad estricta !==
// mayor que >, menor que <, mayor o igual >=, menor o igual <=
let igualdad = 5 == "5"; // true, porque compara el valor
console.log(igualdad);

let igualdadEstricta = 5 === "5"; // false, porque compara el valor y el tipo
console.log(igualdadEstricta);

let desigualdad = 5 != "5"; // false, porque el valor es el mismo
console.log(desigualdad);

let desigualdadEstricta = 5 !== "5"; // true, porque el tipo es diferente
console.log(desigualdadEstricta);

let mayorQue = 5 > 3; // true
let menorQue = 3 < 5; // true
let mayorOIgual = 5 >= 5; // true
let menorOIgual = 5 <= 3; // false

// Estructuras de control
// Condicionales if, else if, else, switch
if (false) {
  console.log("Esto se ejecuta si la condición es verdadera");
} else if (true) {
  console.log("Esto se ejecuta si la condición es falsa");
} else {
  console.log(
    "Esto se ejecuta si ninguna de las condiciones anteriores es verdadera"
  );
}

// Evalua casos

switch (option) {
  case 1:
    console.log("Opción 1 seleccionada");
    break;
  case 2:
    console.log("Opción 2 seleccionada");
    break;
  default:
    console.log("Opción no válida");
}

// ternario
// condición ? valorSiVerdadero : valorSiFalso;
let edad = 18;
let esMayorDeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad);

// Estructuras de repetición
// for, while, do while, for of, for in, forEach

// while (condición) {
//   // Código a ejecutar mientras la condición sea verdadera
// }

contador = 0;
while (contador < 5) {
  console.log("Contador:", contador);
  contador++; // Incrementa el contador. Cortador de bucle
}

// do while (condición) {
//   // Código a ejecutar al menos una vez y luego mientras la condición sea verdadera
// }
contador = 0;
do {
  console.log("Contador:", contador);
  contador++; // Incrementa el contador
} while (contador < 5); // Se ejecuta al menos una vez, incluso si la condición es falsa

contador = 0;
do {
  console.log("Contador:", contador);
  contador++; // Incrementa el contador
} while (contador < 5 && contador > 0);

// for (inicialización; condición; incremento) {
//   // Código a ejecutar en cada iteración
// }
for (let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}

// for of (iterar sobre colecciones como arrays o strings)
/*let array = [1, 2, 3, 4, 5];
for (let numero of array) {
    console.log("Número:", numero);
}*/

// funciones
function saludar(nombre) {
  console.log("Hola " + nombre);
}

// Función anónima
const saludarAnonimo = function (nombre) {
  console.log("Hola " + nombre);
};

const funcioncita = function () {
  console.log("Esta es una función anónima");
};

// Función flecha o arrow function o función lambda
// Sintaxis: (parametros) => { cuerpo de la función }
const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre);
};

const funcionFlecha = () => { console.log("Esta es una función flecha") };
funcionFlecha();