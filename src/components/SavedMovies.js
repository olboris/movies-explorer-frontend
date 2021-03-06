import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';
import MoviesNotFound from './MoviesNotFound.js';
import ServerErrorInfo from './ServerErrorInfo.js';
import Preloader from './Preloader.js';
import Navigation from './Navigation.js';

function SavedMovies(props) {
  
    return (
      <main className="content">
        <Navigation 
          isNavOpen={props.isNavOpen}
          onNavClose={props.onNavClose}
          onNavOpen={props.onNavOpen}
          loggedIn={props.loggedIn}
          isMain={false}/>
        <SearchForm searchMovies={props.searchMovies} handleChangeCheck={props.handleChangeCheck} isChecked={props.isChecked}/>
        {
        props.movies.length > 0 
        ? <MoviesCardList
        isOpen={props.isOpen}
        onClose={props.onClose}
        
        movies={props.movies}
        isSavedMovies={true}
        savedMovies={props.savedMovies}
        deleteMovie={props.deleteMovie}
        saveMovie={props.saveMovie}
        />
        : <></> 
        }
        <Preloader isLoading={props.isLoading} />
        <MoviesNotFound isMoviesNotFound={props.isMoviesNotFound} />
        <ServerErrorInfo isServerError={props.isServerError} />
      </main>
    ); 
  }
  
  export default SavedMovies;