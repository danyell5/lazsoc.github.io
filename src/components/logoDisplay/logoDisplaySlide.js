import React, { useState } from 'react'

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
        onFilterChange
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
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo.url} alt={logo.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoDisplaySlide 