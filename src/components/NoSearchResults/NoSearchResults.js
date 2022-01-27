import React from 'react';
import sad from '../../images/sad.png';
import './NoSearchResults.css';

function NoSearchResults() {
  return (
    <div className="no-results-wrapper">
      <p className="no-results-text">No Results Found...</p>
      <div className="sad-image-container">
        <img src={sad} alt="sad" className="sad-image" />
      </div>
      <p className="no-results-text">Don't be sad! Try refining your search.</p>
    </div>
  );
}

export default NoSearchResults;
