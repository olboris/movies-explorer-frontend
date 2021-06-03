import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {
  
    return (
        <form className="search-form">
          <div className="search-form__container">
            <input type="text" placeholder="Фильм" className="search-form__input"></input>
            <button className="search-form__button">Найти</button>
          </div>
          <FilterCheckbox />
        </form> 
    ); 
  }
  
  export default SearchForm;