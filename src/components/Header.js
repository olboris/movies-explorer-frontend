import React from 'react';
import miniLogo from '../images/mini-logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  
    return (
            <header className={`header ${props.loggedIn && 'header_hidden'}`}>
              <img className="logo logo_place_header" alt="Лого" src={miniLogo}></img>
              <button onClick={props.onNavOpen} className={`menu-button ${props.loggedIn ? '' : 'menu-button_hidden'}`}></button>
              <div className={`header__links-container ${props.loggedIn && 'header__links-container_hidden'}`}>
                <Link to="/sign-up" className="header__link header__link_signup">Регистрация</Link>
                <Link to="/sign-in" className="header__link header__link_signin">Войти</Link>
              </div>
            </header> 
    );}
  
  export default Header;