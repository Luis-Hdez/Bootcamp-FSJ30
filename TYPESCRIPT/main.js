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
var numerito = 1;
var numero = 2; // TS
var nombre = "Jairo";
var activo = true;
var vacio = null;
// TIpos de datos a no usar
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numero);
console.log(numerito);
function saludar(nombreParam) {
    return "holasss,  ".concat(nombreParam);
}
console.log(saludar("Luis"));
