// paradigma -> modelo de progrmar
// que progrmamos bajo unas reglas en especifico
// 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
  POO -> es una forma de ver y pensar el codigo y las soluciones de implementaciones de codigo
  Vamos a imaginar moldes para estandarizar las cosas -> CLASES
  Utilizar los moldes para crear funcionalidad en nuestra app -> OBJETOS
*/
/*
  PILARES DE POO
  Herencia
  Polimorfismo

  Abstraccion -> nos da herramientas(metodos) para cceder a informacion limitada

  Encapsulamiento -> limitar el acceso a la información
        ====MODIFICADORES DE ACCESOS====
      PUBLIC, PROTECTED, PRIVATE, DEFAULT

  
*/
var Animal = /** @class */ (function () {
    // constructor -> metodo que se ejecuta al instanciar un objeto de una clase -> NEW
    function Animal(especieParam, edadParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    // metodos -> funciones que van a pertenecer a una clase -> comportamientos
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    //  Getters y Setters
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edadParam) {
        this.edad = edadParam;
    };
    // Abstracción
    Animal.prototype.aumentarEdad = function () {
        this.incrementarEdad(1);
    };
    Animal.prototype.incrementarEdad = function (value) {
        this.edad += value;
    };
    return Animal;
}());
var animalto = new Animal("Chucho", 7, "Masculino", "Blanco");
// Accedemos a un atributo del objeto instanciado creado con base en una clase
console.log(animalto.color);
console.log(animalto.getEdad());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(especieParam, edadParam, generoParam, colorParam, razaParam, nombreParam) {
        var _this = _super.call(this, especieParam, edadParam, generoParam, colorParam) || this;
        _this.raza = razaParam;
        _this.nombre = nombreParam;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        return "wau re wau";
    };
    return Perro;
}(Animal));
var perrito = new Perro("Perro", 3, "Masculino", "Negro", "Chiguagua", "Pepito Fuentes");
var Usuario = /** @class */ (function () {
    function Usuario(emailParam, passwordParam) {
        this.email = emailParam,
            this.password = passwordParam;
    }
    Usuario.prototype.login = function (fnConection) {
        fnConection(this.email, this.password);
    };
    Usuario.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    Usuario.prototype.showCredencials = function () {
        return this;
    };
    return Usuario;
}());
var usuarito = new Usuario("jose@meduermo.com", "123456789");
console.log(usuarito.showCredencials());
