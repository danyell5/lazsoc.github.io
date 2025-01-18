import React, { useState, useRef } from 'react';

export const CardCarouselSlide = (props) => {
    const { id, header, cards, variant } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const cardRef = useRef(null);
    const dragThreshold = 5; // minimum pixels moved to consider it a drag vs click

    const getVariantClass = () => {
        if (variant === 'homepage') return 'homepage';
        return '';
    };

    const goToCard = (index) => {
        setCurrentIndex(index);
        setCurrentX(0);
    };

    const getPrevIndex = () => {
        return currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        return currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    };

    const getTextStyle = (text) => {
        const style = { whiteSpace: 'pre-line' };
        if (text && text.length > 200) {
            style.fontSize = '14px';
        }
        return style;
    };

    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        
        const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const walk = x - startX;
        setCurrentX(walk);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        
        setIsDragging(false);
        const threshold = 100; // minimum distance to trigger slide change

        if (Math.abs(currentX) > threshold) {
            if (currentX > 0) {
                // Dragged right - go to previous
                goToCard(getPrevIndex());
            } else {
                // Dragged left - go to next
                goToCard(getNextIndex());
            }
        }
        setCurrentX(0);
    };

    const handleCardClick = (e, direction) => {
        // Only handle click if we haven't dragged
        if (Math.abs(currentX) < dragThreshold) {
            if (direction === 'prev') {
                goToCard(getPrevIndex());
            } else if (direction === 'next') {
                goToCard(getNextIndex());
            }
        }
    };

    const getCardStyle = () => {
        if (!isDragging) return {};
        return {
            transform: `translateX(${currentX}px)`,
            transition: 'none'
        };
    };

    if (!cards || cards.length === 0) return null;

    return (
        <section className={`card-carousel ${getVariantClass()}`}>
            <div className="carousel-wrapper">
                <div className="carousel-container">
                    <div 
                        ref={cardRef}
                        className="card"
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEnd}
                        style={getCardStyle()}
                    >
                        <div 
                            className="prev-card"
                            onClick={(e) => handleCardClick(e, 'prev')}
                        >
                            <h3>{cards[getPrevIndex()].title}</h3>
                            <p style={getTextStyle(cards[getPrevIndex()].description)}>
                                {cards[getPrevIndex()].description}
                            </p>
                        </div>
                        <div className="current-card">
                            <h3>{cards[currentIndex].title}</h3>
                            <p style={getTextStyle(cards[currentIndex].description)}>
                                {cards[currentIndex].description}
                            </p>
                        </div>
                        <div 
                            className="next-card"
                            onClick={(e) => handleCardClick(e, 'next')}
                        >
                            <h3>{cards[getNextIndex()].title}</h3>
                            <p style={getTextStyle(cards[getNextIndex()].description)}>
                                {cards[getNextIndex()].description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-dots">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToCard(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardCarouselSlide; 