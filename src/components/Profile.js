import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import useForm from './FormValidator';
import Navigation from './Navigation';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const stateSchema = {
    name: { value: String(currentUser.name), error: ''},
    email: { value: String(currentUser.email), error: '' },
  }

  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[A-ZА-Я -]+$/i,
        error: 'Неверный формат имени',
      },
    },
    email: {
      required: true,
      validator: {
        regEx: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        error: 'Неверный формат email',
      },
    },
  }

  function onSubmitForm(state) {
    props.onUpdateUser({
      name: state.name.value, 
      email: state.email.value,
    });
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  React.useEffect(() => {
    state.name.value = String(currentUser.name);
    state.email.value = String(currentUser.email);
  }, [currentUser]);

    return (
      
      <div className="profile">
        <Navigation
        isNavOpen={props.isNavOpen}
        onNavClose={props.onNavClose}
        onNavOpen={props.onNavOpen}
        loggedIn={props.loggedIn}
        isMain={false}/>
        <div className="profile__block">
        <div className="profile__container">
        <form onSubmit={handleOnSubmit} className="profile__form" name="form-element">
        <div className="profile__form-container">
          <h2 className="profile__title">Привет, {props.userName}!</h2>
          <div className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input 
            name="name"
            type="text"
            onChange={handleOnChange}
            value={state.name.value}
            className="profile__input" />
          </div>
          <span className={`profile__input-error ${state.name.error && 'profile__input-error_active'}`}>{state.name.error}</span>
          <div className="profile__input-container profile__input-container_last">
            <p className="profile__input-name">Email</p>
            <input
            name="email"
            type="email"
            onChange={handleOnChange}
            value={state.email.value}
            className="profile__input"
            />
          </div>
          <span className={`profile__input-error ${state.email.error && 'profile__input-error_active'}`}>{state.email.error}</span>
        </div>
        <div className="profile__form-container">
          <p className={`update-message ${props.isUpdateSuccess && 'update-message_success'} ${props.isUpdateUnsuccess && 'update-message_unsuccess'}`}>{props.updateMessage}</p>
          <button type="submit" disabled={disable} className={`profile__edit-button ${disable && 'profile__edit-button_disable'}`}>Редактировать</button>
          <button type="button" onClick={props.onSignOut} className="profile__exit-button">Выйти из аккаунта</button>
        </div>
        </form>
        </div>
        </div>
      </div>
    ); 
  }
  
  export default Profile;