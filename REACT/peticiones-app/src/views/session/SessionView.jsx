import { useState } from "react"
import { LoginComponent } from "./components/LoginComponent"
import { RegisterComponent } from "./components/RegisterComponent"

export const SessionView = () => {
  const [view, setView] = useState("singUp")

  return (
    <div>
      <button className={`m-3 ${view === 'singUp' ? 'active' : ''}`} onClick={() => setView('singIn')}>Iniciar Sesión</button>
      <button className={`${view === 'singIn' ? 'active' : ''}`} onClick={() => setView('singUp')}>Registrarse</button>
      {view === 'singUp' ? <RegisterComponent /> : <LoginComponent />}
    </div>
  )
}
