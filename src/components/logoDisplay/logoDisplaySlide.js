import React, { useState } from 'react';
// If you prefer Link-based routing instead of a click handler, uncomment:
// import { Link } from 'react-router-dom';

export const LogoDisplaySlide = (props) => {
  const { 
    id, 
    title, 
    description,
    header,
    headerDescription, 
    logos, 
    variant = "homepage",
    categories,
    selectedFilters,
    onFilterChange,
    onLogoClick,              // <-- NEW: accept click handler
  } = props;

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div id={id} className={`logo-display ${variant}`}>
      <div className="header-content">
        <div className="title-section">
          <h2 className="title">{header || title}</h2>
          <p className="description">{headerDescription || description}</p>
        </div>
        {variant === "clubsAssociations" && (
          <button 
            className="filter-toggle-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'} 
            <span className={`toggle-arrow ${showFilters ? 'open' : ''}`}>▼</span>
          </button>
        )}
      </div>

      {variant === "clubsAssociations" && (
        <div className="filters-section">
          <div className={`filter-container ${showFilters ? 'show' : ''}`}>
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedFilters.includes(category) ? 'active' : ''}`}
                onClick={() => onFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="logos-grid">
        {logos.map((logo, index) => {
          const alt = logo.logoTitle || logo.title || 'Logo';
          const to = logo.to || '/';   // parent can set .to; default to "/"
          return (
            <button
              key={`${logo.title || 'logo'}-${index}`}
              type="button"
              className="logo-item"
              onClick={() => onLogoClick ? onLogoClick(logo) : window.location.assign(to)}
              aria-label={`Open ${alt}`}
              style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
            >
              <img src={logo.url} alt={alt} />
            </button>

            // If you prefer <Link> instead, swap the button for:
            // <Link key={`${logo.title || 'logo'}-${index}`} to={to} className="logo-item" aria-label={`Open ${alt}`}>
            //   <img src={logo.url} alt={alt} />
            // </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LogoDisplaySlide;
