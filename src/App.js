import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home/Home';
import Ratings from './components/RatingsPage/Ratings/Ratings';
import NoSearchResults from './components/NoSearchResults/NoSearchResults';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchterm" element={<Home />} />
        <Route path="/ratings/:imdbID" element={<Ratings />} />
        <Route path="/no-results-found" element={<NoSearchResults />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
