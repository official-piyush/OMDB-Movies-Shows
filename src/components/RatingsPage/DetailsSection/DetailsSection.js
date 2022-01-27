import React from 'react';
import Detail from '../Detail/Detail';
import './DetailsSection.css';
import '../CommonRatings.css';

function DetailsSection(props) {
  return (
    <section className="section-light">
      <div className="section-header-ratings wrapper-internal">Details</div>

      <div className="details-section wrapper-internal">
        <Detail
          category="Type"
          categoryValue={props.type}
          className="border-light"
        />

        <Detail
          category="Release Date"
          categoryValue={props.releaseDate}
          className="border-light"
        />

        <Detail
          category="Country of Origin"
          categoryValue={props.country}
          className="border-light"
        />

        <Detail
          category="Language"
          categoryValue={props.language}
          className="border-light"
        />
      </div>
    </section>
  );
}

export default DetailsSection;
