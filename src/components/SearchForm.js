import React, {useState} from 'react';
import FilterCheckbox from './FilterCheckbox.js';

function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    props.searchMovies(searchValue);
    setSearchValue("");
  }
  
    return (
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-form__container">
            <input value={searchValue} onChange={handleSearchInputChange} type="text" required placeholder="Фильм" className="search-form__input"></input>
            <button className="search-form__button">Найти</button>
          </div>
          <FilterCheckbox />
        </form> 
    ); 
  }
  
  export default SearchForm;