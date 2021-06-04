import React from 'react';
import miniLogo from '../../images/mini-logo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  const [inputEmail, setInputEmail] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');

  function handleChangeEmail(e) {
    setInputEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setInputPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(inputEmail, inputPassword)
    setInputEmail('');
    setInputPassword('');
  }
  
    return (
      <div className="auth-page">
        <div className="auth-page__container">
          <form className="auth-page__form" onSubmit={handleSubmit}>
            <div className="auth-page__form-container">
              <img className="logo logo_place_auth-page" alt="Лого" src={miniLogo}></img>
              <h2 className="auth-page__title">Рады видеть!</h2>
              <span className="auth-page__placeholder">Email</span>
              <input name="email" required type="email" className="auth-page__input" value={inputEmail} onChange={handleChangeEmail}/>
              <span className="auth-page__input-error"></span>
              <span className="auth-page__placeholder">Пароль</span>
              <input name="password" required type="password" className="auth-page__input" value={inputPassword} onChange={handleChangePassword}/>
              <span className="auth-page__input-error"></span>
            </div>
            <div className="auth-page__form-container">
              <button type="submit" className="auth-page__save-button">Войти</button>
              <div className="auth-page__redirect-container">
                <p className="auth-page__redirect-span">Еще не зарегистрированы?</p>
                <Link to="/sign-up" className="auth-page__redirect-span auth-page__redirect-span_link">Регистрация</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
  
  export default Login;