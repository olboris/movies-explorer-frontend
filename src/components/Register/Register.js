import React from 'react';
import miniLogo from '../../images/mini-logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  
    return (
      <div className="auth-page">
        <div className="auth-page__container">
          <form className="auth-page__form">
            <div className="auth-page__form-container">
              <img className="logo logo_place_auth-page" alt="Лого" src={miniLogo}></img>
              <h2 className="auth-page__title">Добро пожаловать!</h2>
              <span className="auth-page__placeholder">Имя</span>
              <input name="name" type="name" className="auth-page__input" />
              <span className="auth-page__input-error"></span>
              <span className="auth-page__placeholder">Email</span>
              <input name="email" type="email" className="auth-page__input" />
              <span className="auth-page__input-error"></span>
              <span className="auth-page__placeholder">Пароль</span>
              <input name="password" type="password" className="auth-page__input" />
              <span className="auth-page__input-error"></span>
            </div>
            <div className="auth-page__form-container">
              <button type="submit" className="auth-page__save-button">Зарегистрироваться</button>
              <div className="auth-page__redirect-container">
                <p className="auth-page__redirect-span">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="auth-page__redirect-span auth-page__redirect-span_link">Войти</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
  
  export default Register;