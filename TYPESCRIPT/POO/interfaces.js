/* Ejemplo de uso de interfances en POO*/
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
// Ejemplo simple -> No es una estrutura que usariamos en un proyecto
var Animal = /** @class */ (function () {
    function Animal(nombreParam, especieParam) {
        this.nombre = nombreParam;
        this.especie = especieParam;
    }
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    Animal.prototype.getAnimal = function () {
        return this;
    };
    return Animal;
}());
var cr7 = new Animal("c", "perro");
console.log(cr7.getAnimal());
// el extend nos avisa que esta usando el pilar de herencia
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombreParam, especieParam, razaParam, colorParam) {
        var _this = _super.call(this, nombreParam, especieParam) || this;
        _this.raza = razaParam;
        _this.color = colorParam;
        return _this;
    }
    Gato.prototype.hacerRuido = function () {
        return "Miau re Miau";
    };
    return Gato;
}(Animal));
var gatito = new Gato("Pelusa", "Gato", "Siames", "Naranja");
console.log(gatito);
// implements le avisa a js y ts que la clase perro obligatoriamente tiene que tener IAnimal
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.hacerRuido = function () {
        return "Wau re Wau";
    };
    return Perro;
}(Animal));
