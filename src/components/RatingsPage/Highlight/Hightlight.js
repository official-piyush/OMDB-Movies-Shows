import React from 'react';
import './Highlight.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Highlight(props) {
  return (
    <span className="brief-data">
      <FontAwesomeIcon icon={props.icon} />
      <span className="brief-text">{props.data}</span>
    </span>
  );
}

export default Highlight;
