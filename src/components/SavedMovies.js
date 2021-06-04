import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {
  
    return (
      <main className="content">
          <SearchForm />
          <MoviesCardList movies={props.movies} isSavedMovies={props.isSavedMovies}/>
      </main>
    ); 
  }
  
  export default SavedMovies;