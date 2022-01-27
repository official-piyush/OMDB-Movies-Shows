import React from 'react';
import './Metascore.css';

function Metascore(props) {
  return (
    <div className="metascore">
      <span className="metascore-value">
        {props.metascore === 'N/A' ? 'tbd' : props.metascore}
      </span>
      <span className="metascore-text">Metascore</span>
    </div>
  );
}

export default Metascore;
