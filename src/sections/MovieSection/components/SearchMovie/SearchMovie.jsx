import React from 'react';

import './SearchMovie.css';

const SearchMovie = ({
  searchQuery = '',
  setSearchQuery = () => {},
}) => {
  const handleQueryChange = (event) => {
    setSearchQuery(event?.target?.value);
  }

  return (
    <div className='search-box-container'>
      <input
        type="search"
        value={ searchQuery }
        onChange={ (e) => handleQueryChange(e) }
        className="search-box"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchMovie;
