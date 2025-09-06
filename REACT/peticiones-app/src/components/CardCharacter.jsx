export const CardCharacter = ({ id, name, image, status, listFavorites = null, changeFavorites}) => {

  /* parte logica para poder utilizar la lista de favoritos */
  const handleAddToFavorites = () => {
    //logica para guardar en favoritos
    console.log({id, name, image, status});

    // Propagación de datos -> mantener los valores nuevos y agregarle unos nuevos
    // Se da con un callback -> [...arrayAnterior]
    // [...arrayAnterior] ... SpreadOperator, los 3 puntitos le dicen que squ elo que ya estaba
    // en el array anterior y guarde
    changeFavorites ( (prevArray) => [...prevArray, {id, name, image, status}] )
    
    // changeFavorites({id, name, image, status})
    // console.log(listFavorites);
    
  }

  const handleDeleteToFavorites = () => {
    changeFavorites(listFavorites.filter( (favorite) => favorite.id !== id ));
    
  }

  const findCharacterInFavorites = () => {
    return listFavorites.find( (favorite) => favorite.id === id)
  }

  console.log(listFavorites);

  return (
    <div className="">
      <div className="card" style={{height:'62vh'}}>
        <img src={image} className="card-img-top" alt="image-character" />
        <div className="card-body">
          {/* <p hidden>{id}</p> */}
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{status}</p>

          {listFavorites ? findCharacterInFavorites () ? <button className="btn btn-danger" onClick={handleDeleteToFavorites}>Delete to Favorite</button> 
          : <button className="btn btn-primary" onClick={handleAddToFavorites}>Add to Favorite</button>
          : null}
        </div>
      </div>
    </div>
  );
};
