import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="company">
        <span className="company-text">an&nbsp;</span>

        <FontAwesomeIcon icon={faAmazon} />
        <span className="company-text">mazon company</span>
      </p>
      <p className="copyright-text">© 1990-2022 by OMDb.com, Inc.</p>
    </div>
  );
}

export default Footer;
