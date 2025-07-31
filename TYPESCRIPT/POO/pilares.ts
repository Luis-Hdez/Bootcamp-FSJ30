// paradigma -> modelo de progrmar
// que progrmamos bajo unas reglas en especifico
//

/*
  POO -> es una forma de ver y pensar el codigo y las soluciones de implementaciones de codigo
  Vamos a imaginar moldes para estandarizar las cosas -> CLASES
  Utilizar los moldes para crear funcionalidad en nuestra app -> OBJETOS
*/

/*
  PILARES DE POO
  Herencia -> obtener las caracteristicas y comportamientos del padre
  Polimorfismo -> podemos cambiar el funcionamiento de los comportaminetos del hijo frente al padre

  Abstraccion -> nos da herramientas(metodos) para cceder a informacion limitada

  Encapsulamiento -> limitar el acceso a la información
        ==== MODIFICADORES DE ACCESOS ====
      PUBLIC, PROTECTED, PRIVATE, DEFAULT

  
*/
class Animal {
  // Atributos o propiedaddes -> Caracteristicas de esta clase
  public especie: string;
  private edad: number;
  genero: string;
  color: string;

  // constructor -> metodo que se ejecuta al instanciar un objeto de una clase -> NEW
  constructor(
    especieParam: string,
    edadParam: number,
    generoParam: string,
    colorParam: string
  ) {
    this.especie = especieParam;
    this.edad = edadParam;
    this.genero = generoParam;
    this.color = colorParam;
  }

  // metodos -> funciones que van a pertenecer a una clase -> comportamientos
  comer(): string {
    return "Estoy comiendo";
  }

  //  Getters y Setters
  getEdad(): number {
    return this.edad;
  }

  setEdad(edadParam: number) {
    this.edad = edadParam;
  }

  // Abstracción
  aumentarEdad() {
    this.incrementarEdad(1);
  }

  private incrementarEdad(value: number) {
    this.edad += value;
  }
}

const animalto = new Animal("Chucho", 7, "Masculino", "Blanco");
// Accedemos a un atributo del objeto instanciado creado con base en una clase
console.log(animalto.color);
console.log(animalto.getEdad());

class Perro extends Animal {
  private raza: string;
  private nombre: string;

  constructor(
    especieParam: string,
    edadParam: number,
    generoParam: string,
    colorParam: string,
    razaParam: string,
    nombreParam: string
  ) {
    super(especieParam, edadParam, generoParam, colorParam);
    this.raza = razaParam;
    this.nombre = nombreParam;
  }

  ladrar(): string {
    return "wau re wau";
  }

  // Polimorfismo
  aumentarEdad(): void {
    this.setEdad(this.getEdad() + 7);
  }
}

const perrito = new Perro(
  "Perro",
  3,
  "Masculino",
  "Negro",
  "Chiguagua",
  "Pepito Fuentes"
);

class Usuario {
  private email: string;
  private password: string;

  constructor(emailParam: string, passwordParam: string) {(this.email = emailParam), (this.password = passwordParam);}

  login(fnConection) {fnConection(this.email, this.password);}

  changePassword(newPassword: string) {
    this.password = newPassword;
  }

  showCredencials(): Usuario {
    return this;
  }
}

const usuarito = new Usuario("jose@meduermo.com", "123456789");
console.log(usuarito.showCredencials());

// tipos personalizados
type User = {
  name: string;
  email: string;
  password: string;
  rol: string;
};

let usuarito2: User = {
  name: "Luis",
  email: "luis@mail.com",
  password: "1234",
  rol: "admin"
};

interface IUser {
  name: string;
  email: string;
  password: string;
  rol: string;
}

let usuarito3: IUser = {
  name: "Luis",
  email: "luis@mail.com",
  password: "1234",
  rol: "admin",
};


