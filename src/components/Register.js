import React from 'react';
import miniLogo from '../../images/mini-logo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Register(props) {
  const [inputName, setInputName] = React.useState('');
  const [inputEmail, setInputEmail] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const history = useHistory();

  function handleChangeName(e) {
    setInputName(e.target.value);
  }
  
  function handleChangeEmail(e) {
    setInputEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setInputPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(inputName, inputEmail, inputPassword);
    setInputName('');
    setInputEmail('');
    setInputPassword('');
  }

  function handleClick(e) {
    history.push('/sign-in');
  }

    return (
      <div className="auth-page">
        <div className="auth-page__container">
          <form className="auth-page__form" onSubmit={handleSubmit}>
            <div className="auth-page__form-container">
              <img className="logo logo_place_auth-page" alt="Лого" src={miniLogo}></img>
              <h2 className="auth-page__title">Добро пожаловать!</h2>
              <span className="auth-page__placeholder">Имя</span>
              <input name="name" required type="name" className="auth-page__input" value={inputName} onChange={handleChangeName}/>
              <span className="auth-page__input-error"></span>
              <span className="auth-page__placeholder">Email</span>
              <input name="email" required type="email" className="auth-page__input" value={inputEmail} onChange={handleChangeEmail}/>
              <span className="auth-page__input-error"></span>
              <span className="auth-page__placeholder">Пароль</span>
              <input name="password" required type="password" className="auth-page__input" value={inputPassword} onChange={handleChangePassword}/>
              <span className="auth-page__input-error"></span>
            </div>
            <div className="auth-page__form-container">
              <button type="submit" className="auth-page__save-button">Зарегистрироваться</button>
              <div className="auth-page__redirect-container">
                <p className="auth-page__redirect-span">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="auth-page__redirect-span auth-page__redirect-span_link" onClick={handleClick}>Войти</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
  
  export default Register;