import React from 'react';

function FilterCheckbox(props) {
  
    return (
      <label className="filter-checkbox">
        <div className="filter-checkbox__toggle">
          <input className="filter-checkbox__toggle-state" type="checkbox" name="check" value="check"></input>
          <div className="filter-checkbox__toggle-inner">
            <div className="filter-checkbox__indicator"></div>
          </div>
        </div>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    );
  }
  
  export default FilterCheckbox;