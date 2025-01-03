import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavigation from './components/topNavigation';
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage';

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        {/* <Route path="/about-good-eats" element={<AboutGoodEatsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
