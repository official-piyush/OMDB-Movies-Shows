import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../images/page-not-found.png';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="layout-wrapper">
      <div className="pnf-image-container">
        <img src={pageNotFound} alt="Page Not Found" className="pnf-image" />
      </div>
      <div className="pnf-text">
        <h1 className="pnf-heading">404</h1>
        <h2 className="pnf-sub-heading">UH OH! You're lost.</h2>
        <p className="pnf-description">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </p>
        <p className="pnf-description">
          Let's go&nbsp;
          <Link to="/" className="pnf-link">
            home
          </Link>
          &nbsp;and try from there.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
