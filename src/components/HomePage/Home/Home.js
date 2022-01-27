import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './Home.css';
import Spinner from '../../Spinner/Spinner';
import Movies from '../Movies/Movies';
import Shows from '../Shows/Shows';

function Home() {
  const navigate = useNavigate();
  const { moviesLoading, moviesResponse } = useSelector((state) => state.movie);
  const { showsLoading, showsResponse } = useSelector((state) => state.show);
  const params = useParams();

  useEffect(() => {
    if (moviesResponse === 'False' && showsResponse === 'False') {
      navigate('/no-results-found');
    }
  }, [navigate, moviesResponse, showsResponse]);

  let movieSearch = 'war';
  let showSearch = 'life';

  if (Object.keys(params).length !== 0) {
    movieSearch = params.searchterm;
    showSearch = params.searchterm;
  }

  return (
    <div className="wrapper">
      {moviesLoading && showsLoading && <Spinner />}
      <Movies search={movieSearch} />
      <Shows search={showSearch} />
    </div>
  );
}

export default Home;
