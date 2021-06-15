import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import PageNotFound from './components/PageNotFound';
import Movies from './components/Movies';
import SavedMovies from './components/SavedMovies';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import auth from './utils/Auth';
import moviesApi from './utils/MoviesApi';
import mainApi from './utils/MainApi';
import TrailerPopup from './components/TrailerPopup';

function App(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = React.useState(false);
  const [isUpdateUnuccess, setIsUpdateUnsuccess] = React.useState(false);
  const [updateMessage, setUpdateMessage] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState(' ');
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [searchSavedMovies, setSaerchSavedMovies] = React.useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = React.useState(false);
  const [isServerError, setIsServerError] = React.useState(false);
  const [isAuthError, setIsAuthError] = React.useState(false);
  const [authErrorMessage, setAuthErrorMessage] = React.useState('');
  const history = useHistory();
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [isTrailerPopupOpen, setIsTrailerPopupOpen] = React.useState(false);
  const [isChecked, setIsCkecked] = React.useState(false);

  const tokenCheck = React.useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setUserName(res.name);
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, []);
 
  function onRegister(name, email, password) {
    setIsAuthError(false);
    setAuthErrorMessage('');
    auth.register(name, email, password)
      .then((res) => {
        console.log(res);
        history.push('/movies');
        onLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        showAuthError();
      })
  }

  function onLogin(mail, password) {
    auth.authorize(mail, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck();
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        showAuthError();
      })
  }

  function showAuthError(){
    setIsAuthError(true);
    setAuthErrorMessage('Что-то пошло не так... Попробуйте еще раз');
    console.log(isAuthError, authErrorMessage);
  }

  function handleChangeCheck () {
    setIsCkecked(!isChecked);
  }

  function searchMovies(array, searchWord) {
    const foundArray = array.filter(item => item.nameRU.includes(searchWord));
    console.log(foundArray);
    if (foundArray.length === 0) {
      localStorage.setItem('found-movies', JSON.stringify(foundArray));
      setIsMoviesNotFound(true);
    } else {
      const filteredFoundArray = foundArray.filter((movie) => {
        return !isChecked
        ? movie
        : movie.duration <= 40
          ? movie
          : ''
      });
      if (filteredFoundArray.length === 0) {
        localStorage.setItem('found-movies', JSON.stringify(foundArray));
        setIsMoviesNotFound(true);
      }
      localStorage.setItem('found-movies', JSON.stringify(filteredFoundArray));
      console.log(filteredFoundArray);
    }
  }
  
  function onSearchMovies(searchValue) {
    setIsMoviesNotFound(false);
    setIsServerError(false);
    setIsLoading(true);
    moviesApi.getMovies()
    .then((res) => {
      console.log(res);
      searchMovies(res, searchValue);
      console.log(JSON.parse(localStorage.getItem('found-movies')))
      const foundResult = JSON.parse(localStorage.getItem('found-movies'));
      console.log(foundResult);
      localStorage.setItem('movies', JSON.stringify(foundResult));
      console.log(JSON.parse(localStorage.getItem('movies')));
      setMovies(JSON.parse(localStorage.getItem('movies')));
    })
    .catch((err) => {
      console.log(err);
      setIsServerError(true);
    })
    .finally(() =>{
      setIsLoading(false);
    })
  }

  function onSearchSavedMovies(searchValue) {
    setSaerchSavedMovies(true);
    setIsMoviesNotFound(false);
    setIsServerError(false);
    setIsLoading(true);
    mainApi.getMovies()
    .then((res) => {
      searchMovies(res.data, searchValue);
      console.log(JSON.parse(localStorage.getItem('found-movies')))
      const foundResult = JSON.parse(localStorage.getItem('found-movies'));
      console.log(foundResult);
      localStorage.setItem('found-savedmovies', JSON.stringify(foundResult));
      console.log(JSON.parse(localStorage.getItem('found-savedmovies')));
      setFoundSavedMovies(JSON.parse(localStorage.getItem('found-savedmovies')));
    })
    .catch((err) => {
      console.log(err);
      setIsServerError(true);
    })
    .finally(() =>{
      setIsLoading(false);
    })
  }

  React.useEffect(() => {
    mainApi.getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  React.useEffect(() => {
    const searchResult = localStorage.getItem('movies');
    if (searchResult){
    setMovies(JSON.parse(searchResult));
  }
}, [setMovies]);

function showUpdateSuccessMessage(){
  setIsUpdateSuccess(true);
  setUpdateMessage("Данные успешно обновлены");
}

function showUpdateUnsuccessMessage(){
  setIsUpdateUnsuccess(true);
  setUpdateMessage("Что-то пошло не так... Попробуйте еще раз");
}

  function handleUpdateUser({ name, email }) {
    setIsUpdateSuccess(false);
    setIsUpdateUnsuccess(false);
    mainApi.setUser({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setUserName(currentUser.name);
        showUpdateSuccessMessage()
      })
      .catch((err) => {
        showUpdateUnsuccessMessage()
        console.log(err)
      })
  }

  function saveMovie(data) {
    mainApi.saveMovie(data)
    .then(() => {
      getSavedMovies();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function deleteMovie(data) {
    console.log(data);
    mainApi.deleteMovie(data)
    .then(() => {
      getSavedMovies();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function getSavedMovies () {
    mainApi.getMovies()
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (loggedIn)
    getSavedMovies();
  }, [loggedIn])
  

  function handleMenuButtonClick() {
    setIsNavOpen(true);
  }

  function handleCloseButtonClick() {
    setIsNavOpen(false);
  }

  function handleMovieClick(movie) {
    setSelectedMovie(movie);
    setIsTrailerPopupOpen(true);
  }

  function closeTrailerPopup() {
    setIsTrailerPopupOpen(false);
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setLoggedIn(false);
    history.push('/');
    console.log(localStorage.getItem('token'));
  }

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page"> 
        <Switch >
          <Route exact path="/">
            <Header 
              loggedIn={loggedIn}
            />
           <Navigation
            isMain={true}
            onNavOpen={handleMenuButtonClick}
            isNavOpen={isNavOpen}
            onNavClose={handleCloseButtonClick}
            loggedIn={loggedIn}/>
           <Main />
          </Route>
          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            searchMovies={onSearchMovies}
            handleChangeCheck={handleChangeCheck}
            isChecked={isChecked}
            movies={movies}
            isSavedMovies={false}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
            isMoviesNotFound = {isMoviesNotFound}
            isServerError = {isServerError}
            isLoading={isLoading}
            onNavOpen={handleMenuButtonClick}
            isNavOpen={isNavOpen}
            onNavClose={handleCloseButtonClick}
            onMovieClick={handleMovieClick}
            isOpen={isTrailerPopupOpen} 
            movie={selectedMovie}
          />
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            searchMovies={onSearchSavedMovies}
            handleChangeCheck={handleChangeCheck}
            isChecked={isChecked}
            movies={searchSavedMovies ? foundSavedMovies : savedMovies}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
            onNavOpen={handleMenuButtonClick}
            isNavOpen={isNavOpen}
            onNavClose={handleCloseButtonClick}
            isMoviesNotFound = {isMoviesNotFound}
            isServerError = {isServerError}
            isLoading={isLoading}
            isSavedMovies={true}
            onMovieClick={handleMovieClick} 
            isOpen={isTrailerPopupOpen}
            onClose={closeTrailerPopup}
            movie={selectedMovie}
          />
          <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            userName={userName}
            onUpdateUser={handleUpdateUser}
            onSignOut={handleSignOut}
            onNavOpen={handleMenuButtonClick}
            isNavOpen={isNavOpen}
            onNavClose={handleCloseButtonClick}
            isUpdateSuccess={isUpdateSuccess}
            isUpdateUnuccess={isUpdateUnuccess}
            updateMessage={updateMessage}
          />
          <Route exact path="/sign-up">
            <Register 
            handleRegister={onRegister}
            isAuthError={isAuthError}
            authErrorMessage={authErrorMessage}
            />
          </Route>
          <Route exact path="/sign-in">
            <Login 
            handleLogin={onLogin}
            isAuthError={isAuthError}
            authErrorMessage={authErrorMessage}
            />
          </Route>
          <Route exact path="/*">
            <PageNotFound />
          </Route>
        </ Switch>
        <Footer />
        <TrailerPopup isOpen={isTrailerPopupOpen} onClose={closeTrailerPopup} movie={selectedMovie} />
      </div>
   </CurrentUserContext.Provider>
  );
}

export default App;
