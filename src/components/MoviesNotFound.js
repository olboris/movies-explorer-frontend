function MoviesNotFound(props) {
  
    return (
      <div className={`movies-notfound ${props.isMoviesNotFound ? '' : 'movies-notfound_hidden'}`}>
          <p className="movies-notfound__info">Ничего не найдено</p>
      </div>
    ); 
  }
  
  export default MoviesNotFound;