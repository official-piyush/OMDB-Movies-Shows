import React from 'react';
import './HeroSection.css';
import '../CommonRatings.css';
import Genre from '../Genre/Genre';
import IMDBCard from '../IMDBCard/IMDBCard';
import Metascore from '../Metascore/Metascore';
import Poster from '../Poster/Poster';
import Highlight from '../Highlight/Hightlight';
import Detail from '../Detail/Detail';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function HeroSection({ itemData }) {
  const genreList = itemData.Genre.split(',');
  return (
    <section className="section-dark">
      <div className="section-left wrapper-internal">
        <h1 className="movie-title-ratings">{itemData.Title}</h1>

        <Highlight icon={faCalendar} data={itemData.Year} />
        <Highlight
          icon={faEye}
          data={itemData.Rated !== 'N/A' ? itemData.Rated : 'PG-13'}
        />
        <Highlight
          icon={faClock}
          data={itemData.Runtime !== 'N/A' ? itemData.Runtime : '45 mins'}
        />

        <p className="plot">
          {itemData.Plot !== 'N/A' ? itemData.Plot : 'Plot Not Available'}
        </p>

        {genreList.map((genre, index) => (
          <Genre key={index} genre={genre} />
        ))}

        <div className="major-details">
          <Detail
            category="Director"
            categoryValue={
              itemData.Director !== 'N/A'
                ? itemData.Director
                : 'Data Not Available'
            }
            className="border-dark"
          />
          <Detail
            category="Writers"
            categoryValue={
              itemData.Writer !== 'N/A' ? itemData.Writer : 'Data Not Available'
            }
            className="border-dark"
          />
          <Detail
            category="Stars"
            categoryValue={
              itemData.Actors !== 'N/A' ? itemData.Actors : 'Data Not Available'
            }
            className="border-dark"
          />
        </div>
      </div>

      <div className="section-right">
        <IMDBCard
          imdbRating={itemData.imdbRating}
          imdbVotes={itemData.imdbVotes}
        />

        <Poster poster={itemData.Poster} />

        <Metascore metascore={itemData.Metascore} />
      </div>
    </section>
  );
}

export default HeroSection;
