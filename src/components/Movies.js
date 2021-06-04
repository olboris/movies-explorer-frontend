import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';

function Movies(props) {
  
    return (
      <main className="content">
        <SearchForm />
        <MoviesCardList onMovieLike={props.onMovieLike} isMovieSaved={props.isMovieSaved} movies={props.movies}/>
          <button type="button" className="movies-cardlist__more-button">Ещё</button>
      </main>
    ); 
  }
  
  export default Movies;