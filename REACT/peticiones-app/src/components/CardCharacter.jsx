export const CardCharacter = ({ id, name, image, status, listFavorites, changeFavorites }) => {

  /* parte logica para poder utilizar la lista de favoritos */
  const handleAddToFavorites = () => {
    //logica para guardar en favoritos
    console.log({id, name, image, status});

    // Propagación de datos
    
    changeFavorites({id, name, image, status})
    console.log(listFavorites);
    
  }


  return (
    <div className="">
      <div className="card" style={{height:'62vh'}}>
        <img src={image} className="card-img-top" alt="image-character" />
        <div className="card-body">
          <p hidden>{id}</p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{status}</p>
          <button className="btn btn-primary" onClick={handleAddToFavorites}>Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};
