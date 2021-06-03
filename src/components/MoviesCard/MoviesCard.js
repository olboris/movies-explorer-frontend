import React from 'react';

function MoviesCard(props) {
  
    return (
      <div className="movies-card">
          <button type="button" className={`movies-card__like ${props.isSavedMovies && 'movies-card__like_delete'}`}>Сохранить</button>
          <div className="movies-card__poster" alt="Постер" style={{ backgroundImage: `url(${props.movie.image})` }}></div>
          <div className="movies-card__description">
              <h3 className="movies-card__title">{props.movie.nameRU}</h3>
              <h3 className="movies-card__duration">{props.movie.duration}</h3>
          </div>
      </div>
    ); 
  }
  
  export default MoviesCard;