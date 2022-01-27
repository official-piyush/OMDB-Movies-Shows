import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchSelectedItem, {
  removeSelectedItem,
} from '../../../redux/selectedItem/selectedItemActions';
import HeroSection from '../HeroSection/HeroSection';
import AwardSection from '../AwardSection/AwardSection';
import DetailsSection from '../DetailsSection/DetailsSection';
import BoxOfficeSection from '../BoxOfficeSection/BoxOfficeSection';
import Spinner from '../../Spinner/Spinner';
import './Ratings.css';

// /redux/selectedItem/selectedItemActions

function Ratings() {
  const { imdbID } = useParams();

  const selectedItemData = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectedItem(imdbID));

    return () => {
      dispatch(removeSelectedItem());
    };
  }, [dispatch, imdbID]);

  let jsx;

  if (selectedItemData.itemLoading) {
    jsx = <Spinner />;
  } else if (
    selectedItemData.itemData.Response === 'False' ||
    selectedItemData.itemError !== ''
  ) {
    jsx = <h3>Something went wrong...</h3>;
  } else if (selectedItemData.itemData.Response === 'True') {
    const { itemData } = selectedItemData;

    jsx = (
      <>
        <HeroSection itemData={itemData} />

        <AwardSection
          awards={
            itemData.Awards !== 'N/A' ? itemData.Awards : 'Data Not Available'
          }
        />

        <DetailsSection
          type={itemData.Type}
          releaseDate={itemData.Released}
          country={itemData.Country}
          language={itemData.Language}
        />

        <BoxOfficeSection boxOffice={itemData.BoxOffice} />
      </>
    );
  }

  return <div className="ratings-wrapper">{jsx}</div>;
}

export default Ratings;
