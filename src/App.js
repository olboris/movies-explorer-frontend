import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import auth from './utils/Auth';

const initialMovies = [ 
  { 
      nameRU: '33 слова о дизайне',
      duration: '122', 
      image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
    nameRU: '32 слова о дизайне',
    duration: '122', 
    image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '31 слово о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200'
  }, 
  { 
  nameRU: '30 слов о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '29 слов о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '28 слов о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200'
  }, 
  { 
  nameRU: '27 слов о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '26 слов о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '25 слов о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '24 слова о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '23 слова о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
  }, 
  { 
  nameRU: '22 слова о дизайне',
  duration: '122', 
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2408175/pub_5ee3288b64d6731cc9e19ddd_5ee329d302f56d5bd137a534/scale_1200' 
}, 
]; 



function App(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState(' ');
  const history = useHistory();

  const tokenCheck = React.useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setUserName(res.name);
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [history]);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  function onLogin(mail, password) {
    auth.authorize(mail, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck();
          history.push("/")
        }
      })
      .catch((err) => {
        console.log(err);
        /*infoToolFail();*/
      })
  }
  
  function onRegister(email, password) {
    auth.register(email, password)
      .then(() => {
        history.push('/movies');
        /*infoToolSuccess();*/
      })
      /*.then((data) = {
        auth.authorize(data.email, data.password);
      }*/
      .catch((err) => {
        console.log(err);
        /*infoToolFail();*/
      })
  }

  React.useEffect(() => {
    MainApi.getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  function handleUpdateUser({ name, about }) {
    MainApi.setUser({ name, about })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleMenuButtonClick() {
    setIsNavOpen(true);
  }

  function handleCloseButtonClick() {
    setIsNavOpen(false);
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch >
          <Route exact path="/">
            <Header isMain={true}/>
            <Main />
            <Footer />
          </Route>
          <Route exact path="/movies">
            <Navigation isNavOpen={isNavOpen} onNavClose={handleCloseButtonClick} isMain={false}/>
            <Header onNavOpen={handleMenuButtonClick} />
            <Movies movies={initialMovies}/>
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Navigation isNavOpen={isNavOpen} onNavClose={handleCloseButtonClick} isMain={false}/>
            <Header onNavOpen={handleMenuButtonClick}/>
            <SavedMovies movies={initialMovies} isSavedMovies={true}/>
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Navigation isNavOpen={isNavOpen} onNavClose={handleCloseButtonClick} isMain={false}/>
            <Header onNavOpen={handleMenuButtonClick}/>
            <Profile userName={userName} onUpdateUser={handleUpdateUser}/>
          </Route>
          <Route exact path="/sign-up">
            <Register handleRegister={onRegister}/>
          </Route>
          <Route exact path="/sign-in">
            <Login handleLogin={onLogin}/>
          </Route>
          <Route exact path="/*">
            <PageNotFound />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/sign-in" />}
          </Route>
        </ Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
