import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
const TopNavigation = lazy(() => import('./components/topNavigation/topNavigation'))
const HomePage = lazy(() => import('./pages/homePage'))
const TeamPage = lazy(() => import('./pages/about/TeamPage'));
const WaterlooFavsPage = lazy(() => import('./pages/about/WaterlooFavsPage'));
const BusinessBytesPage = lazy(() => import('./pages/about/BusinessBytesPage'));
const ClubsAssociationsPage = lazy(() => import('./pages/clubsAssociationsPage'));
const HiringClubsPage = lazy(() => import('./pages/hiringClubsPage'));
const BusinessFormalRentalProgram = lazy(() => import('./pages/BusinessFormalRentalProgram'));
const ClubMemberships = lazy(() => import('./pages/ClubMemberships'));
const Events = lazy(() => import('./pages/events'));
const Merchandise = lazy(() => import('./pages/merchandise'));
const ElectionResources = lazy(() => import ('./pages/resources/ElectionResources'));
const Policies = lazy(() => import('./pages/resources/Policies'));
const StudentResources = lazy(() => import('./pages/resources/StudentResources'));
const RefundPolicy = lazy(() => import('./pages/resources/RefundPolicy'));
const getShopifyUI  = lazy(() => import('./utils/shopifyLoader'));



// Create a component to handle preloading

const PreloadComponent = () => {
  useEffect(() => {
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
      
      <TopNavigation />
    <Suspense fallback = {<div>Loading...</div>}>
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
    </Suspense>
    </div>
  );
}

export default App;
