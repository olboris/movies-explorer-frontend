import React from 'react';
import miniLogo from '../images/mini-logo.svg';
import { Link } from 'react-router-dom';
import useForm from './FormValidator';

function Login(props) {

    const stateSchema = {
      email: { value: '', error: '' },
      password: { value: '', error: '' },
    }

    const validationStateSchema = {
      email: {
        required: true,
        validator: {
          regEx: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          error: 'Неверный формат email',
        },
      },
      password: {
        required: true,
        error: 'Поле обязательно для заполнения'
      },
    }
    
    function onSubmitForm(state) {
      props.handleLogin(state.email.value, state.password.value);
    }

    const { state, handleOnChange, handleOnSubmit, disable } = useForm(
      stateSchema,
      validationStateSchema,
      onSubmitForm
    );
  
    return(
      <div className="auth-page">
        <div className="auth-page__container">
          <form className="auth-page__form" onSubmit={handleOnSubmit}>
            <div className="auth-page__form-container">
              <img className="logo logo_place_auth-page" alt="Лого" src={miniLogo}></img>
              <h2 className="auth-page__title">Рады видеть!</h2>
              <span className="auth-page__placeholder">Email</span>
              <input
              className="auth-page__input"
              type="email"
              name="email"
              value={state.email.value}
              onChange={handleOnChange}
              />
              <span className={`auth-page__input-error ${state.email.error && 'auth-page__input-error_active'}`}>{state.email.error}</span>
              <span className="auth-page__placeholder">Пароль</span>
              <input
              name="password"
              type="password"
              className="auth-page__input"
              value={state.password.value}
              onChange={handleOnChange}
              />
              <span className={`auth-page__input-error ${state.password.error && 'auth-page__input-error_active'}`}>{state.password.error}</span>
            </div>
            <div className="auth-page__form-container">
            <p className={`auth-error ${props.isAuthError && 'auth-error_active'}`}>{props.authErrorMessage}</p>
              <button type="submit" name="submit" disabled={disable} className={`auth-page__save-button ${disable && 'auth-page__save-button_disable'}`}>Войти</button>
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