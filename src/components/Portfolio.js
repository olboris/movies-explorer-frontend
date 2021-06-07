import React from 'react';
import portfolioPointer from '../images/links-pointer.svg';

function Portfolio(props) {
  
    return (
      <section className="section portfolio">
        <h3 className="portfolio__heading">Портфолио</h3>
        <div className="portfolio__links-container">
          <a className="portfolio__link" rel="noreferrer" target="_blank" href="href=https://github.com/olboris/how-to-learn">
            <p className="portfolio__project-name">Статичный сайт</p>
            <img className="portfolio__pointer" alt="Ссылка" src={portfolioPointer}></img>
          </a>
          <a className="portfolio__link" rel="noreferrer" target="_blank" href="href=https://github.com/olboris/russian-travel">
            <p className="portfolio__project-name">Адаптивный сайт</p>
            <img className="portfolio__pointer" alt="Ссылка" src={portfolioPointer}></img>
          </a>
          <a className="portfolio__link portfolio__link_last-item" rel="noreferrer" target="_blank" href="https://github.com/olboris/react-mesto-api-full">
            <p className="portfolio__project-name">Одностраничное приложение</p>
            <img className="portfolio__pointer" alt="Ссылка" src={portfolioPointer}></img>
          </a>
        </div>
      </section>
    );
  }
  
  export default Portfolio;