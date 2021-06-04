import React from 'react';

function Techs(props) {
  
    return (
      <section className="section techs">
        <h2 className="section__heading">Технологии</h2>
        <h1 className="techs__title">7 технологий</h1>
        <p className="section__text section__text_place_techs">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__elements-container">
          <li><p className="techs__element" >HTML</p></li>
          <li><p className="techs__element" >CSS</p></li>
          <li><p className="techs__element" >JS</p></li>
          <li><p className="techs__element" >React</p></li>
          <li><p className="techs__element" >Git</p></li>
          <li><p className="techs__element" >Express.js</p></li>
          <li><p className="techs__element" >mongoDB</p></li>
        </ul>
      </section>
    );
  }
  
  export default Techs;