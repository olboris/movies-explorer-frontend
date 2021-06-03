import React from 'react';
import miniLogo from '../../images/mini-logo.svg';
import { NavLink, Link } from 'react-router-dom';

function Navigation(props) {

    return (
      <div className={`navigation ${props.isMain && 'navigation_hidden'} ${props.isNavOpen && 'navigation_active'}`}>
        <div className="navigation__container">
        <button onClick={props.onNavClose} className="navigation__close-button"></button>
        <Link exact to="/" className="logo logo_place_nav"><img alt="Лого" src={miniLogo}></img></Link>
        <div className="navigation__links-container">
          <NavLink exact to="/" activeClassName="navigation__link_active" className="navigation__link navigation__link_main">Главная</NavLink>
          <NavLink to="/movies" activeClassName="navigation__link_active" className="navigation__link">Фильмы</NavLink>
          <NavLink to="/saved-movies" activeClassName="navigation__link_active" className="navigation__link">Сохраненные фильмы</NavLink>
        </div>
        <Link to="/profile" className="navigation__profile-button">Аккаунт</Link>
        </div>
      </div>
    ); 
  }
  
  export default Navigation;