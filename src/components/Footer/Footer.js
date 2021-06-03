import React from 'react';

function Footer(props) {
  
    return (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info-container">
          <p className="footer__copyright">&copy; 2021</p>
          <div className="footer__links-container">
            <a className="footer__link" rel="noreferrer" target="_blank" href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
            <a className="footer__link" rel="noreferrer" target="_blank" href="https://github.com/olboris">Github</a>
            <a className="footer__link" rel="noreferrer" target="_blank" href="https://vk.com/id6088916">Вконтакте</a>
          </div>
        </div>
      </footer>
    ); 
  }
  
  export default Footer;