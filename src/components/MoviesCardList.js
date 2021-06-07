import React from 'react';
import MoviesCard from './MoviesCard.js';
/*import TrailerPopup from './TrailerPopup.js'*/

function MoviesCardList(props) {
  
    return (
      <section>
      <div className="movies-cardlist">
          {props.movies.map((item) => {
            return (
            <MoviesCard movies={props.movies} onMovieLike={props.onMovieLike} onMovieClick={props.onMovieClick} isMovieSaved={props.isMovieSaved} movie={item} key={item.id} onCardClick={props.onCardClick} isSavedMovies={props.isSavedMovies}/>
            )
          })}
      </div>
      {/*<TrailerPopup isOpen={props.isOpen} onClose={props.onClose} movie={props.movie} />*/}
      </section>
    ); 
  }
  
  export default MoviesCardList;