import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavigation from './components/topNavigation/topNavigation';
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage';
import ClubsAssociationsPage from './pages/clubsAssociationsPage';
import HiringClubsPage from './pages/hiringClubsPage';
import EDI from './pages/edi';

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/clubs-associations" element={<ClubsAssociationsPage />} />
        <Route path="/hiring-clubs" element={<HiringClubsPage />} />
        <Route path="/edi" element={<EDI />} />
      </Routes>
    </div>
  );
}

export default App;
