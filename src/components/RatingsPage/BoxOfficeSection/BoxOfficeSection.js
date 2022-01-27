import React from 'react';
import './BoxOfficeSection.css';
import '../CommonRatings.css';

function BoxOfficeSection({ boxOffice }) {
  return (
    <section className="section-light">
      <div className="section-header-ratings wrapper-internal">Box Office</div>
      <p className="box-office-text wrapper-internal">Gross worldwide</p>
      <p className="box-office-value wrapper-internal">
        {boxOffice === undefined || boxOffice === 'N/A' ? 'tbd' : boxOffice}
      </p>
    </section>
  );
}

export default BoxOfficeSection;
