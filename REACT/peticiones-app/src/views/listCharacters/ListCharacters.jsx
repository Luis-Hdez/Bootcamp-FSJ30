// rafc -> snippet para crear el componente funcional con flecha

import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export const ListCharacters = () => {

  // siempre que yo necesite una caja para guardar algo voy a hacer un ESTADO
  const [listPjs, setListPsj] = useState([])

  // utilizamos el useContext -> Hook para utilizar un contexto creado
  // sintaxis cuando solo tenemos un valor en el contexto
  // const valorContexto = useContext(FavoritesContext)
  // console.log(valorContexto);

  const {favorites, setFavorites} = useContext(FavoritesContext)
  //console.log(favorites);
  

  // Las funciones 

  const peticionAPI = () => {
    // peticion a una API
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())// se asegura que haya un respuesta de la API
    .then(data => {
      // console.log(data.results);// se manipula la respuesta en json

      // cuando necesito sacar la data de adentro
      setListPsj(data.results);
    })
    .catch(error => console.error(error))
  }

  //console.log(listPjs);
  

  // async function peticioneApiAA ---

  // const peticionApiAA = async () => {
  //   // bloque de manejo de errores
  //   try{
  //   // reemplazo al primer .then
  //   let response = await fetch('https://rickandmortyapi.com/api/character');
  //   //console.log(response.json())

  //   // reemplazo para el segundo .then
  //   let data = await response.json();
  //   console.log(data);
  //   }catch(error) {
  //     console.error(error);
  //   }
  // }


  // useeffect -> cuando necesito cargar datos a penas se vaya a montar el componente
  useEffect( () =>{
    peticionAPI()
  }, [] )


  return (
    <div className="row">
      {/*Recorrer el array para moestrar los datos -> Mapear los datos para pintarlos*/}

      {listPjs.map( (character) => { 
        return <section key={character.id} className="col-md-3 col-sm-12">
          <CardCharacter 
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            listFavorites={favorites}
            changeFavorites={setFavorites}
          />
          </section>
      })}
    </div>
      
  )
}
