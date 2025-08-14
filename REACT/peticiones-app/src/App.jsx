import { useState } from 'react'
import './App.css'

// Asincronismo -> manejar codigo que tarde en completarse como solicitudes a un servidor o
// de archivos, sin bloquear el resto del programa

// Promesa-> La esperanza de una posible respuesta a eso que va a tardar
// pending / fullfield / rejected

function App() {

  const peticionAPI = () => {
    // peticion a una API
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)
    )
  }

  // async function peticioneApiAA
  const peticionApiAA = async () => {
    // bloque de manejo de errores
    try{
    // reemplazo al primer .then
    let response = await fetch('https://rickandmortyapi.com/api/character');
    //console.log(response.json())

    // reemplazo para el segundo .then
    let data = await response.json();
    console.log(data);
    }catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Holiwis</h1>
      <button onClick={peticionAPI}>Apretame para traer datos</button>
      <br /><br />
      <button onClick={peticionApiAA}>Apretame para traer datos de otra manera</button>
    </>
  )
}

export default App
