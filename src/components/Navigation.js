import React from 'react';
import miniLogo from '../images/mini-logo.svg';
import { NavLink, Link } from 'react-router-dom';

function Navigation(props) {

    return (
      <div className={`navigation ${props.isMain && 'navigation_place_main'} ${props.loggedIn ? '' : 'navigation_hidden'}`}>
        <img className="logo logo_place_nav" alt="Лого" src={miniLogo}></img>
        <button onClick={props.onNavOpen} className="menu-button"></button>
        <div className={`navigation__background ${props.isNavOpen && 'navigation__background_active'}`}>
          <div className="navigation__container">
            <button onClick={props.onNavClose} className="navigation__close-button"></button>
            <Link exact to="/" className={`logo logo__link ${props.isNavOpen && 'logo_hidden'}`}><img alt="Лого" src={miniLogo}></img></Link>
            <div className="navigation__links-container">
              <NavLink exact to="/" onClick={props.onNavClose} activeClassName="navigation__link_active" className="navigation__link navigation__link_main">Главная</NavLink>
              <NavLink to="/movies" onClick={props.onNavClose} activeClassName="navigation__link_active" className="navigation__link">Фильмы</NavLink>
              <NavLink to="/saved-movies" onClick={props.onNavClose} activeClassName="navigation__link_active" className="navigation__link">Сохраненные фильмы</NavLink>
            </div>
            <Link to="/profile" onClick={props.onNavClose} className="navigation__profile-button">Аккаунт</Link>
          </div>
        </div>
      </div>
    ); 
  }
  
  export default Navigation;