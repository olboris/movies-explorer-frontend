import React from 'react';



function MoviesCard(props) {

  function onMovieLike (){
    props.onMovieLike(props.movie);
  }

  function handleClick() {
    props.onMovieClick(props.movie);
  }

    return (
      <div className="movies-card">
          <button onClick={onMovieLike} type="button" className={`movies-card__like ${props.isSavedMovies && 'movies-card__like_delete'} ${props.isMovieSaved && 'movies-card__like_active'}`}>Сохранить</button>
          <div className="movies-card__poster" alt="Постер" onClick={handleClick} style={{ backgroundImage: `url(https://api.nomoreparties.co${props.movie.image.url})` }}></div>
          <div className="movies-card__description">
              <h3 className="movies-card__title">{props.movie.nameRU}</h3>
              <h3 className="movies-card__duration">{props.movie.duration}</h3>
          </div>
      </div>
    ); 
  }
  
  export default MoviesCard;