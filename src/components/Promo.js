import React from 'react';
import promoLogo from '../../images/promo-logo.svg';

function Promo(props) {
  
    return (
      <section className="promo">
        <img className="promo__logo" alt="Лого" src={promoLogo}></img>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#about-project" className="promo__button">Узнать больше</a>
      </section>
    );
  }
  
  export default Promo;