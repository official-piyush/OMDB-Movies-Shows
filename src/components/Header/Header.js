import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorState, setErrorState] = useState({
    'movie-show': false,
  });
  const navigate = useNavigate();

  function searchInputHandler(event) {
    setSearchTerm(event.target.value);
    setErrorState((prevErrorState) => {
      return {
        ...prevErrorState,
        'movie-show': false,
      };
    });
  }

  function searchSubmitHandler(event) {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      setErrorState((prevErrorState) => {
        return {
          ...prevErrorState,
          'movie-show': true,
        };
      });
      return;
    } else {
      // submit the form
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm('');
    }
  }
  return (
    <div className="header">
      <Link to="/" className="logo">
        OMDb
      </Link>
      <form onSubmit={searchSubmitHandler} className="search-form">
        <input
          type="text"
          name="movie-show"
          id="movie-show"
          value={searchTerm}
          onChange={searchInputHandler}
          className={`search-field ${errorState['movie-show'] && 'error'}`}
          spellCheck="false"
          autoComplete="off"
          placeholder="Search OMDb"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default Header;
