import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';
import MoviesNotFound from './MoviesNotFound.js';

function Movies(props) {
 
    return (
      <main className="content">
        <SearchForm searchMovies={props.searchMovies}/>
        {
        props.foundMovies.length > 0 
        ? <MoviesCardList isOpen={props.isOpen} onClose={props.onClose} movie={props.movie} onMovieLike={props.onMovieLike} onMovieClick={props.onMovieClick} isMovieSaved={props.isMovieSaved} movies={props.foundMovies}/>
        : <></> 
        }
        <MoviesNotFound isMoviesNotFound={props.isMoviesNotFound} />
          <button type="button" className="movies-cardlist__more-button">Ещё</button>
      </main>
    ); 
  }
  
  export default Movies;