import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';
import MoviesNotFound from './MoviesNotFound.js';
import ServerErrorInfo from './ServerErrorInfo.js';
import Preloader from './Preloader.js';

function Movies(props) { 

    return (
      <main className="content">
        <SearchForm searchMovies={props.searchMovies} handleChangeCheck={props.handleChangeCheck} isChecked={props.isChecked}/>
        {
        props.movies.length > 0 
        ? <MoviesCardList isOpen={props.isOpen} onClose={props.onClose} movie={props.movie} onMovieLike={props.onMovieLike} onMovieClick={props.onMovieClick} isMovieSaved={props.isMovieSaved} movies={props.movies}/>
        : <></> 
        }
        <Preloader isLoading={props.isLoading} />
        <MoviesNotFound isMoviesNotFound={props.isMoviesNotFound} />
        <ServerErrorInfo isServerError={props.isServerError} />
          <button type="button" className="movies-cardlist__more-button">Ещё</button>
      </main>
    ); 
  }
  
  export default Movies;