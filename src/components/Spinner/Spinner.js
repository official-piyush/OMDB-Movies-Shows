import React from 'react';
import './Spinner.css';
import spinner from '../../images/spinner.gif';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
