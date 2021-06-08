import React, {useState} from 'react';
import FilterCheckbox from './FilterCheckbox.js';

function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");
  const [inputError, setInputError] = useState(false);

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchValue.length === 0){
      setInputError(true);
    } else {
      props.searchMovies(searchValue);
      setInputError(false);
    }
    setSearchValue("");
  }
  
    return (
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-form__container">
            <input value={searchValue} onChange={handleSearchInputChange} type="text" placeholder="Фильм" className="search-form__input"></input>
            <button className="search-form__button">Найти</button>
          </div>
          <div className={`search-form__input-error ${inputError && 'search-form__input-error_active'}`}>Нужно ввести ключевое слово</div>
          <FilterCheckbox handleChangeCheck={props.handleChangeCheck} isChecked={props.isChecked}/>
        </form> 
    ); 
  }
  
  export default SearchForm;