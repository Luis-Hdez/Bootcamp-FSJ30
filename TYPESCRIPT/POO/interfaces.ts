/* Ejemplo de uso de interfances en POO*/

// Ejemplo simple -> No es una estrutura que usariamos en un proyecto
class Animal{
  // encapsulamiento -> limitamos el acceso a nombre y especie
  private nombre: string;
  private especie: string;

  constructor(nombreParam: string, especieParam: string){
    this.nombre = nombreParam;
    this.especie = especieParam;
  }

  comer(): string{
    return "Estoy comiendo"
  }

  getAnimal(): Animal{
    return this;
  }

}

let cr7 = new Animal("c", "perro");

console.log(cr7.getAnimal());

// el extend nos avisa que esta usando el pilar de herencia
class Gato extends Animal implements IAnimal{
  // tenemos dos atributos publicos, no hay encapsulamiento
  raza: string;
  color: string;

  constructor(nombreParam: string, especieParam: string, razaParam: string, colorParam: string){
   super(nombreParam, especieParam)
   this.raza = razaParam;
   this.color = colorParam;
  }

  hacerRuido(): string {
    return "Miau re Miau"
  }
  
}

let gatito = new Gato("Pelusa", "Gato", "Siames", "Naranja");
console.log(gatito);


// implements le avisa a js y ts que la clase perro obligatoriamente tiene que tener IAnimal
class Perro extends Animal implements IAnimal{
  raza: string;
  color: string;

  hacerRuido(): string {
    return "Wau re Wau"
  }
}

interface IAnimal{
  // los atributos tienen que quedar publicos
  raza: string;
  color: string;

  // los metodos tienen que quedar publicos
  hacerRuido(): string;
}

