import React from 'react';

function Profile(props) {
  
    return (
      <div className="profile">
        <div className="profile__container">
        <form className="profile__form" name="form-element">
        <div className="profile__form-container">
          <h2 className="profile__title">Привет, Ольга!</h2>
          <div className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input type="text" value="Ольга" minLength="2" maxLength="40" required className="profile__input" />
          </div>
          <div className="profile__input-container profile__input-container_last">
            <p className="profile__input-name">Email</p>
            <input type="email" required name="input-email" value="babushkina.os@yandex.ru" className="profile__input" />
          </div>
        </div>
        <div className="profile__form-container">
          <button type="submit" className="profile__edit-button">Редактировать</button>
          <button type="button" className="profile__exit-button">Выйти из аккаунта</button>
        </div>
          </form>
          </div>
      </div>
    ); 
  }
  
  export default Profile;