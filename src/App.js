import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopNavigation from './components/topNavigation/topNavigation';
import HomePage from './pages/homePage'
import TeamPage from './pages/about/TeamPage';
import WaterlooFavsPage from './pages/about/WaterlooFavsPage';
import BusinessBytesPage from './pages/about/BusinessBytesPage';
import ClubsAssociationsPage from './pages/clubsAssociationsPage';
import HiringClubsPage from './pages/hiringClubsPage';
import BusinessFormalRentalProgram from './pages/BusinessFormalRentalProgram';
import ClubMemberships from './pages/ClubMemberships';
import Events from './pages/events';
import Merchandise from './pages/merchandise';
import ElectionResources from './pages/resources/ElectionResources';
import Policies from './pages/resources/Policies';
import StudentResources from './pages/resources/StudentResources';
import RefundPolicy from './pages/resources/RefundPolicy';
import { getShopifyUI } from './utils/shopifyLoader';

// Create a component to handle preloading
const PreloadComponent = () => {
  useEffect(() => {
    // Preload all page components
    const components = [
      HomePage,
      TeamPage,
      WaterlooFavsPage,
      BusinessBytesPage,
      ClubsAssociationsPage,
      HiringClubsPage,
      BusinessFormalRentalProgram,
      ClubMemberships,
      Events,
      Merchandise,
      ElectionResources,
      Policies,
      StudentResources
    ];

    // Initialize all components
    components.forEach(Component => {
      const elem = document.createElement('div');
      elem.style.display = 'none';
      document.body.appendChild(elem);
      const instance = <Component />;
      // Clean up
      document.body.removeChild(elem);
    });

    // Preload Shopify
    getShopifyUI().catch(console.error);

    // Preload common images
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    // Add your common images here
    const commonImages = [
      '/images/lazsoc-logo-blue.png',
      // Add other common images
    ];

    commonImages.forEach(preloadImage);
  }, []);

  return null;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <PreloadComponent />
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/about/waterloo-favs" element={<WaterlooFavsPage />} />
        <Route path="/about/business-bytes" element={<BusinessBytesPage />} />
        <Route path="/clubs-associations" element={<ClubsAssociationsPage />} />
        <Route path="/hiring-clubs" element={<HiringClubsPage />} />
        <Route path="/shop/business-formal" element={<BusinessFormalRentalProgram />} />
        <Route path="/shop/club-memberships" element={<ClubMemberships />} />
        <Route path="/shop/events" element={<Events />} />
        <Route path="/shop/merchandise" element={<Merchandise />} />
        <Route path="/resources/election" element={<ElectionResources />} />
        <Route path="/resources/policies" element={<Policies />} />
        <Route path="/resources/student" element={<StudentResources />} />
        <Route path="/resources/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
