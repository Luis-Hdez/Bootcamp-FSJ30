import { useState } from "react"
import { LoginComponent } from "./components/LoginComponent"
import { RegisterComponent } from "./components/RegisterComponent"

export const SessionView = () => {
  const [view, setView] = useState("signUp")

  return (
    <div className="row justify-content-center">
      <button className={`m-3 col-2 ${view === 'signIn' ? 'btn btn-primary active' : 'btn btn-primary'}`} onClick={() => setView('signIn')}>Iniciar Sesión</button>
      <button className={`m-3  col-2 ${view === 'signUp' ? 'btn btn-primary active' : 'btn btn-primary'}`} onClick={() => setView('signUp')}>Registrarse</button>
      {view === 'signUp' ? <RegisterComponent /> : <LoginComponent />}
    </div>
  )
}
