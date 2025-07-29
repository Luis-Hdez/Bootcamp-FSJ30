// Diferencias entre JS y TS

/* JS
- Flexible
- Fácl de aprender
- Forma de programar sea a través de funciones
- WEB -> Navegador (Interpretado)
*/


/* TS
- Tipado duro -> YA NO ES TAN FELXIBLE
- POO -> Forma de progrmar -> los prilares están COMPLETOS 
- Un poco más díficil de aprender 
- Lenguaje Compilado (TSC)-> Traducir el codigo de TS a JS 
*/

// Declaración de variables
let numerito = 1;
let numero : number = 2; // TS
let nombre : string = "Jairo";
let activo : boolean = true;
let vacio : null = null;

// TIpos de datos a no usar
let nose : any = "PUEDO SER CUALQUIER COSA";
let noDefinido : undefined = undefined;

console.log(numero);
console.log(numerito);

// Declaracón de funcioes
function saludar(nombreParam : string): string {
  return `holasss,  ${nombreParam}`
}

console.log(saludar("Luis"));
 
// Estructuras de datos
// Array
let arraycito : number [] = [1, 2, 3];
// arraycito.push("asd") no funciona por el tipo de dato

// tupla
let arrayEspecifico : [number, string] = [1, "Luis"];

// podemo llegar a tener 2 tipos de datos
let dosTiposDeDatos : (number | string )[]= [1, "dos", 3, 4]
// array de numeros o string
let arrayDosTipos : number[]|string[] = [1, 2, 3, 4]

// tpo de datos personalizados
type Persona = {
  name : string,
  age : number
}

let fsj30 : Persona[] = [{name : "Jairo", age : 27}]

console.log(fsj30[0]);
