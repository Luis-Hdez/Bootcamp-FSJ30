console.log("OLA")


// obtenemos un elemento del frontend
let elementoDOM = document.getElementById('textoSaludo')
console.log(elementoDOM);

let contenidoDOM = document.querySelector('#contenedor h1').textContent
console.log(contenidoDOM)

const btnApretable = document.getElementById("botonMagico")

const btnArraycito = document.querySelector('#btnAbrirArray')

// Propiedades de los elemento
// innerHTML obtiene todo el contenido HTML del elemento
// innerText obtiene todo el texto del HTML
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>Chauuu</h2>"

// Metodos de los elementos
btnApretable.addEventListener('click', () =>{
    alert('Ya no hagas clic');
    let dato = prompt('Ingresame tu nombre')
    console.log(dato);
    
})

// metodos de js
// almacenar datos en local para el usuario
let arraycito = [1, 2, 3]
console.log(arraycito);

// localStorage = almacenamiento en el navegadir del usuario
// Esta diseñado para guardar OBJETOS
localStorage.setItem('arraycito', JSON.stringify(arraycito));

console.log(localStorage.getItem('arraycito'));



btnArraycito.addEventListener('click', () => {
    console.log('Estoy andando')
    arraycito.push(4)
    console.log(arraycito)

})



