// Peticiones asincronas con promesas

/*
    LAS PROMESAS PUEDEN ESTAR EN ESTADO:
    - PENDING: En espera, ni cumplida ni rechazada.
    - Resolve--FULFILLED: Cumplida, se ha resuelto correctamente. RESPONSE: Respuesta.
    - REJECTED: Rechazada, se ha producido un error.
*/

console.log("Inicio de la petición");

// simular una petición a una API
function getCoach(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({
          id: 1,
          name: "Luis",
        });
      } else {
        reject("No se encontró el coach con el ID proporcionado");
      }
    }, 2000);
  });
}

//console.log(getCoach(1));

// manejo de asincronía con promesas

// then: se resuelve correctamente
// catch: se rechaza, se produce un error
function traerDatos() {
  getCoach(2)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.error("Error:", e);
    });
}
//traerDatos();

// async/await: sintaxis más limpia para manejar promesas
// async: indica que la función es asíncrona
// await: espera a que la promesa se resuelva
async function obtenerDatos() {
  // let coach = await getCoach(1)
  // console.log(coach);
  // await se usa para esperar a que la promesa se resuelva
  // si se resuelve correctamente, se asigna el valor a la variable
  // si se rechaza, se lanza un error
  // por lo tanto, se puede usar try/catch para manejar el error

  // si se produce un error, se puede manejar con try/catch
  try {
    let coach = await getCoach(1);
    console.log(coach);
  } catch (error) {
    console.error("Error:", error);
  }
}

// obtenerDatos()

// fecth: método para hacer peticiones a APIs
// devuelve una promesa que se resuelve con la respuesta de la petición
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // si la respuesta es correcta, se convierte a JSON
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// uso de async/await con fetch
// async function obtenerUsuarios() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetch
async function getDittoAwait() {
  try {
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); // espera traer una respuesta
    console.log(respuesta); // ver que respuesta nos da la API
    let cuerpo = await respuesta.json(); // Convertir la respuesta a JSON
    console.log(cuerpo); // Mostrar los datos del Pokémon Ditto
  } catch (error) {
    console.error("Error:", error);
  }
}
//getDittoAwait();

function getDittoThen() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((data) => {
      console.log(data); // Mostrar la respuesta de la petición -- Metadata
      return data.json(); // Convertir la respuesta a JSON
    })
    .then((data) => { // voy a utiizar la data
      console.log(data); // Mostrar los datos del Pokémon Ditto muestro el uerpo , ahi estan los datos
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
//getDittoThen();

function saludar(){
    console.log("¡Hola, mundo!");
}


