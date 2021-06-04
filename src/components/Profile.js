import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(' ');
  const [password, setPassword] = React.useState(' ');
  
  React.useEffect(() => {
    setName(String(currentUser.name));
    setPassword(String(currentUser.password));
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      password,
    });
  }
  
    return (
      <div className="profile">
        <div className="profile__container">
        <form onSubmit={handleSubmit} className="profile__form" name="form-element">
        <div className="profile__form-container">
          <h2 className="profile__title">`Привет, ${props.name}!`</h2>
          <div className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input type="text" onClick={handleChangeName} value={name} minLength="2" maxLength="40" required className="profile__input" />
          </div>
          <div className="profile__input-container profile__input-container_last">
            <p className="profile__input-name">Email</p>
            <input type="email" required name="input-email" onClick={handleChangePassword} value={password} className="profile__input" />
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