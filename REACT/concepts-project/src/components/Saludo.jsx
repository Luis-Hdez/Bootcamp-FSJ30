// creacion de primer componente

import { useState } from "react";
import {Chauchis} from "./Chauchis"

// props -> Propiedades -> En realidad son un objeto 
function Saludo({ nombre, apellido}) {

  //function Saludo(props) {
  /* Destructuring object 
    props = {
    nombre : "Jairo",
    apellido : "Vega"
    }

  const {nombre, apellido} = props
  */

  let curso = "FSJ30";

  // el reemplazo de las variables para manipular datos en REACT
  // EL ESTADO -> Hook -> Funciones prehechas que ya vienen con REACT

  const [nombreDelCurso, setNombreCurso] = useState("FSJ30");

  console.log(nombreDelCurso);
  

  return (
    <>
      <h1>Holaaa, {nombre} {apellido}</h1>
      <h2>Curso : {nombreDelCurso}</h2>
      <button onClick={() => setNombreCurso ("Java8") }>Magia</button>
      <button onClick={() => setNombreCurso ("FSJ30") }>Regresar</button>
      <br />
      <Chauchis nombre={nombre} curso={nombreDelCurso}/>
    </>
  );
}

export default Saludo;
