import './App.css'
import { ListCharacters } from './views/listCharacters/ListCharacters'
import { FavoritesDataProvider } from './contexts/FavoritesContext'
import {BrowserRouter, Link, Route, Routes} from 'react-router'
import { SessionView } from './views/session/SessionView'

// Asincronismo -> manejar codigo que tarde en completarse como solicitudes a un servidor o
// de archivos, sin bloquear el resto del programa

// Promesa-> La esperanza de una posible respuesta a eso que va a tardar
// pending / fullfield / rejected

function App() {

  return (
    <>
    <FavoritesDataProvider>

      {/* Activamos React Router */}
      <BrowserRouter>
        <Link to="/session" className='btn btn-primary'>Registrar</Link>
        <Routes>
          <Route path='/' element={<ListCharacters/>}/>
          <Route path='/session' element={<SessionView/>}/>
          
        </Routes>
      </BrowserRouter>

    </FavoritesDataProvider>      
    </>
  )
}

export default App
