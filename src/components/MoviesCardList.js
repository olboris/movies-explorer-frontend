import React, { useEffect } from 'react';
import MoviesCard from './MoviesCard.js';
import GetWindowWidth from '../hooks/getWindowWidth';
/*import TrailerPopup from './TrailerPopup.js'*/

function MoviesCardList(props) {
  
  const [numberMovies, setNumberMovies] = React.useState(12);
  const windowWidth = GetWindowWidth();

  function showMoreMovies() {
    if (windowWidth > 1024) {
      setNumberMovies(numberMovies + 3);
    } else if (windowWidth < 1024) {
      setNumberMovies(numberMovies + 2);
    }
  }

  useEffect(() => {
    if (windowWidth > 1024) {
      setNumberMovies(12);
    } else if (windowWidth <= 1024 && windowWidth > 550) {
      setNumberMovies(8);
    } else if (windowWidth <= 550) {
      setNumberMovies(5);
    }
  }, [windowWidth]);

    return (
      <section>
      <div className="movies-cardlist">
          {props.movies.slice(0, numberMovies).map((item) => {
            return (
            <MoviesCard
            isSavedMovies={props.isSavedMovies}
            savedMovies={props.savedMovies}
            movie={item}
            key={item.id}
            deleteMovie={props.deleteMovie}
            saveMovie={props.saveMovie}
            onMovieClick={props.onMovieClick}         
            />
            )
          })}
      </div>
      <button type="button" onClick={showMoreMovies} className={`movies-cardlist__more-button ${numberMovies >= props.movies.length && 'movies-cardlist__more-button_hidden'}`}>Ещё</button>
      </section>
    ); 
  }
  
  export default MoviesCardList;