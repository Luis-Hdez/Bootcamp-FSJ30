import "./App.css";
import Saludo from "./components/Saludo";

function App() {
  return (
    <>{/* Estes es el fragment -> Nos diuja un contenedor en el HTML */}

      <h1>Holaaa</h1>

      {/*Este es el primer componente*/}
      <Saludo nombre="Luis" apellido="Hernandez"/>
      <Saludo nombre="Fernando" />
    </>
  );
}

export default App;
