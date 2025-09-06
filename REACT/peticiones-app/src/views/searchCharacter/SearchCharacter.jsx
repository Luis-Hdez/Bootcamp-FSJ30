import { useState } from "react"
import { useForm } from "react-hook-form"
import { CardCharacter } from "../../components/CardCharacter"

const API_URL = "https://rickandmortyapi.com/api/character/?name="

export const SearchCharacter = () => {
  const {register, handleSubmit} = useForm()
  const [character, setCharacter] = useState({})

  const onSubmitForm = (data) => {
    console.log(data);
    console.log(`${API_URL}${data.name}`);
    
    fetch(`${API_URL}${data.name}`)
    .then(response => response.json())
    .then(character => {
      console.log(character.results[0]);
      setCharacter(character.results[0]);
    })
  }

  return (
    <div className='' >
      <section className='row justify-content-center'>

      <h3>Search a Character from Rick and Morty</h3>
      <div className="col-6">

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label className='form-label'>Name of character</label>
        <input type="text" name="" id="" placeholder='Search Character' className='form-control' {...register('name')}/>
        <button className="btn btn-primary mt-2">Search</button>
      </form>
      </div>
      </section>
      <div/>

      
      {character.name === "" ? null :
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
      <CardCharacter 
      id={character.id}
      name={character.name}
      image={character.image}
      status={character.status}
      
      />
      </div>
      </div>}
    </div>
  )
}
