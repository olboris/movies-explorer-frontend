import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';

function SavedMovies(props) {
  
    return (
      <main className="content">
          <SearchForm />
          <MoviesCardList isOpen={props.isOpen} onClose={props.onClose} movie={props.movie} onMovieClick={props.onMovieClick} movies={props.savedMovies} isSavedMovies={props.isSavedMovies}/>
      </main>
    ); 
  }
  
  export default SavedMovies;