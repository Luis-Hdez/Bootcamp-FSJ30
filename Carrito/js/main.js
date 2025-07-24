// console.log('hola');

const contenedorCarrito = document.getElementById("cuerpo-carrito");
let cursoCarrito = [];

function vaciarCarrito(evento) {
  console.log("Soy el vacia carrito");

  cursoCarrito = [];
  contenedorCarrito.innerHTML = "";
}

function eliminarCurso(id) {
  console.log(id);

  cursoCarrito.map((curso) => {
    if (curso.id == id) {
      cursoCarrito = cursoCarrito.filter((curso) => curso.id != id);
    }
  });

  recorrerCarritoHTML();

  // const cursoId = evento.target.getAttribute("data-id");
  // cursoCarrito = cursoCarrito.filter((curso) => curso.id !== cursoId);
  // recorrerCarritoHTML();
}

function agregarCurso(evento) {
  console.log("Agregar Curso");

  let curso = extraerDatosCurso(evento.target.parentElement.parentElement);
  console.log(curso);

  // CHequeamos si el curso existe previamente, guardamos true o false
  const existe = cursoCarrito.some((cursoArr) => cursoArr.id === curso.id);

  if (existe === true) {
    cursoCarrito.map((cursoArr) => {
      if (cursoArr.id === curso.id) {
        // aumentar precio
        // utilizar un metdo de string que pueda el quitar el primer caracter
        // metodos prosibles Substring o Slice
        cursoArr.cantidad += 1;
        cursoArr.precio = cursoArr.precio.substring(1); // el dato esta en prosicion 0

        // transformamos el string a numero
        // parseInt or parseFloat
        cursoArr.precio = parseFloat(cursoArr.precio);
        cursoArr.cantidad = parseFloat(cursoArr.cantidad);

        let basePrecio = cursoArr.precio / (cursoArr.cantidad - 1);
        cursoArr.precio = basePrecio * cursoArr.cantidad;
        cursoArr.precio = `$${cursoArr.precio}`;

        return cursoArr;
      }
    });
  } else {
    cursoCarrito.push(curso);
    console.log(cursoCarrito);
  }

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
      <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
    `;

    contenedorCarrito.appendChild(fila);
  });
}

// <td><a class="btn btn-danger" onclick="eliminarCurso(event)" data-id = ${curso.id}>Eliminar</a></td>
