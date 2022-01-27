import React from 'react';
import './AwardSection.css';
import '../CommonRatings.css';

function AwardSection({ awards }) {
  return (
    <section className="section-light">
      <div className="awards-section wrapper-internal">
        <span className="awards-text">Awards</span>
        <span className="awards-value">{awards}</span>
      </div>
    </section>
  );
}

export default AwardSection;
