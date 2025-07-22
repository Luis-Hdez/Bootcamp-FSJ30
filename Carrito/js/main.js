// console.log('hola');

const contenedorCarrito = document.getElementById("cuerpo-carrito");
let cursoCarrito = [];

function vaciarCarrito(evento) {
  console.log("Soy el vacia carrito");
}

function agregarCurso(evento) {
  console.log("Agregar Curso");

  let curso = extraerDatosCurso(evento.target.parentElement.parentElement);

  console.log(curso);

  cursoCarrito.push(curso);
  console.log(cursoCarrito);

  recorrerCarritoHTML();
}

function extraerDatosCurso(curso) {
  // console.log(curso);

  // console.log(curso.querySelector("a").getAttribute("data-id"));
  // console.log(curso.querySelector("img").src);
  // console.log(curso.querySelector("h4"));
  // console.log(curso.querySelector("h5"));

  const infoCurso = {
    id: curso.querySelector("a").getAttribute("data-id"),
    img: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("h5").textContent,
    cantidad: 1,
  };

  //console.log(infoCurso);

  return infoCurso;
}

function recorrerCarritoHTML() {
  contenedorCarrito.innerHTML = "";

  cursoCarrito.map((curso) => {
    //crear fila
    let fila = document.createElement("tr");

    // asignar valores en celdas
    fila.innerHTML = `
      <td><img src="${curso.img}" width=80</td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>${curso.cantidad}</td>
      <td><a class="btn btn-danger">Eliminar</a></td>
    `;

    contenedorCarrito.appendChild(fila);
  });
}
