import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  
    return (
      <div className="not-found">
        <div className="not-found__container">
          <div className="not-found__error-container">
        <h1 className="not-found__error-code">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        </div>
        <Link to="/" className="not-found__link">Назад</Link>
        </div>
      </div>
    ); 
  }
  
  export default PageNotFound;