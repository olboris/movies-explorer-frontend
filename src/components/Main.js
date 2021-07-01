import React from 'react';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs.js';
import AboutMe from './AboutMe';

function Main(props) {
  
    return (
      <main className="content">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
      </main>
    ); 
  }
  
  export default Main;