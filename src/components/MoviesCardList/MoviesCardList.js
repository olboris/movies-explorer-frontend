import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  
    return (
      <div className="movies-cardlist">
          {props.movies.map((item) => {
            return (<MoviesCard movie={item} key={item._id} isSavedMovies={props.isSavedMovies}/>)
          })}
      </div>
    ); 
  }
  
  export default MoviesCardList;