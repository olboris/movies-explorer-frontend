import React from 'react';
import studentFoto from '../../images/student-foto.jpeg';
import Portfolio from '../Portfolio/Portfolio.js';

function AboutMe(props) {
  
    return (
      <section className="section about-me">
        <h2 className="section__heading">Студент</h2>
        <div className="about-me__info-container">
          <img className="about-me__foto" alt="Мое фото" src={studentFoto}></img>
          <div className="about-me__text-container">
            <h1 className="about-me__name">Ольга</h1>
            <h3 className="about-me__brief">Студент факультета Веб-разработки, 28 лет</h3>
            <p className="section__text section__text_place_about-me">Закончила Санкт-Петербургский экономический университет на заочном факультете. На данный момент живу в Москве, работаю финансистом. В поиске интересной работы пришла к курсам web-разработки. Надеюсь, получится стать хорошим специалистом.</p>
            <ul className="about-me__links-container">
              <li><a className="about-me__link" rel="noreferrer" target="_blank" href="https://vk.com/id6088916">ВКонтакте</a></li>
              <li><a className="about-me__link" rel="noreferrer" target="_blank" href="https://github.com/olboris/">Github</a></li>
            </ul>
          </div>
        </div>
        <Portfolio />
      </section>
    );
  }
  
  export default AboutMe;