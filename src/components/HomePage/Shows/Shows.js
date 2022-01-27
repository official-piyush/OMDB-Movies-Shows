import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchShows from '../../../redux/shows/showActions';
import ItemCard from '../ItemCard/ItemCard';
import '../CommonHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { settings } from '../settings';

function Shows({ search }) {
  const showData = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows(search));
  }, [search, dispatch]);

  let jsx;

  if (showData.showsResponse === 'True') {
    const items = showData.shows.map((show) => (
      <ItemCard
        key={show.imdbID}
        imdbID={show.imdbID}
        poster={show.Poster}
        title={show.Title}
        year={show.Year}
      />
    ));

    let showSettings = { ...settings };

    if (items.length < 5) {
      showSettings.infinite = false;
    }

    jsx = (
      <div className="home-wrapper" style={{ paddingBottom: '4em' }}>
        <h1 className="section-header-home">Featured Shows</h1>
        <h2 className="sub-header">
          <span>Top picks</span>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronRight} className="right-arrow-icon" />
        </h2>
        <p className="brief-text">TV Shows just for you</p>
        <Slider {...showSettings}>{items}</Slider>
      </div>
    );
  }

  return <>{jsx}</>;
}

export default Shows;
