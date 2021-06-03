import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies(props) {
  
    return (
      <main className="content">
        <SearchForm />
        <MoviesCardList movies={props.movies}/>
          <button type="button" className="movies-cardlist__more-button">Ещё</button>
      </main>
    ); 
  }
  
  export default Movies;