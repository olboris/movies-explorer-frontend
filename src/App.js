import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
  const [isMovieSaved, setIsMovieSaved] = React.useState(false);

  function handleMenuButtonClick() {
    setIsNavOpen(true);
  }

  function handleCloseButtonClick() {
    setIsNavOpen(false);
  }

  function handleLikeButtonClick() {
    setIsMovieSaved(true);
  }

  return (
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
          <Movies onMovieLike={handleLikeButtonClick} isMovieSaved={isMovieSaved} movies={initialMovies}/>
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
          <Profile />
        </Route>
        <Route exact path="/sign-up">
          <Register />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route exact path="/*">
          <PageNotFound />
        </Route> 
      </ Switch>
    </div>
  );
}

export default App;
