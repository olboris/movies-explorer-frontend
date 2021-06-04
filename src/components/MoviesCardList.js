import React from 'react';
import MoviesCard from './MoviesCard.js';

function MoviesCardList(props) {
  
    return (
      <div className="movies-cardlist">
          {props.movies.map((item) => {
            return (<MoviesCard onMovieLike={props.onMovieLike} isMovieSaved={props.isMovieSaved} movie={item} key={item._id} onCardClick={props.onCardClick} isSavedMovies={props.isSavedMovies}/>)
          })}
      </div>
    ); 
  }
  
  export default MoviesCardList;