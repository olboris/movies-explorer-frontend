import React from 'react';

function MoviesCard(props) {

  const displayDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const displayTime = hours + ' ч ' + minutes + ' м';

    return (displayTime)
  };

  function onMovieLike () {
    const a = isMovieSaved();
    if (isMovieSaved()) {
      console.log(a);
      props.savedMovies.forEach((item) => {
        if (item.nameRU === props.movie.nameRU) {
          props.deleteMovie(item._id);
        }
      });
    } else {
      props.saveMovie({ ...props.movie });
    }
  }

  function onMovieDelete () {
    props.deleteMovie(props.movie._id);
  }

  const isMovieSaved = () => {
    return props.savedMovies.find((item) => {
      return item.nameRU.includes(props.movie.nameRU);
    });
  };

  function handleClick() {
    props.onMovieClick(props.movie);
  }

    return (
      <div className="movies-card">
          <button onClick={props.isSavedMovies ? onMovieDelete : onMovieLike} type="button" className={
            props.isSavedMovies
            ? 'movies-card__like movies-card__like_delete'
            : isMovieSaved()
              ? 'movies-card__like movies-card__like_active'
              : 'movies-card__like'
            }
            /*</div>`movies-card__like ${props.isSavedMovies && 'movies-card__like_delete'} ${isMovieSaved() ? 'movies-card__like_active': ''}`}*/>Сохранить</button>
          <div className="movies-card__poster" alt="Постер" onClick={handleClick} style={{ backgroundImage: props.isSavedMovies ? `url(${props.movie.image})` :`url(https://api.nomoreparties.co${props.movie.image.url})` }}></div>
          <div className="movies-card__description">
              <h3 className="movies-card__title">{props.movie.nameRU}</h3>
              <h3 className="movies-card__duration">{displayDuration(props.movie.duration)}</h3>
          </div>
      </div>
    ); 
  }
  
  export default MoviesCard;