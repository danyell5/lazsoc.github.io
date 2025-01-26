import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavigation from './components/topNavigation/topNavigation';
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage';
import ClubsAssociationsPage from './pages/clubsAssociationsPage';
import HiringClubsPage from './pages/hiringClubsPage';
import EDI from './pages/edi';
import BusinessFormalRentalProgram from './pages/BusinessFormalRentalProgram';
import ClubMemberships from './pages/ClubMemberships';
import Events from './pages/events';
import Merchandise from './pages/merchandise';

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
        <Route path="/shop/business-formal" element={<BusinessFormalRentalProgram />} />
        <Route path="/shop/club-memberships" element={<ClubMemberships />} />
        <Route path="/shop/events" element={<Events />} />
        <Route path="/shop/merchandise" element={<Merchandise />} />
      </Routes>
    </div>
  );
}

export default App;
