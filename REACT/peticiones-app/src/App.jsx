import { useState } from 'react'
import './App.css'
import { ListCharacters } from './components/ListCharacters'
import { FavoritesDataProvider } from './contexts/FavoritesContext'

// Asincronismo -> manejar codigo que tarde en completarse como solicitudes a un servidor o
// de archivos, sin bloquear el resto del programa

// Promesa-> La esperanza de una posible respuesta a eso que va a tardar
// pending / fullfield / rejected

function App() {

  return (
    <>
    <FavoritesDataProvider>

      <ListCharacters />

    </FavoritesDataProvider>
      <h1>Holiwis</h1>
      <h2>Cauchis</h2>
      
    </>
  )
}

export default App
