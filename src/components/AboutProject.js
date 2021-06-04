import React from 'react';

function AboutProject(props) {
  
    return (
      <section className="section about-project " id="about-project">
        <h2 className="section__heading">О проекте</h2>
        <div className="about-project__info-container">
          <div className="about-project__column">
            <h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
            <p className="section__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__column">
            <h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
            <p className="section__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__diagram">
          <p className="about-project__data about-project__data_backend">1 неделя</p>
          <p className="about-project__data about-project__data_frontend">4 недели</p>
          <p className="about-project__data about-project__data_caption">Back-end</p>
          <p className="about-project__data about-project__data_caption">Front-end</p>
        </div>
        </section>
    ); 
  }
  
  export default AboutProject;