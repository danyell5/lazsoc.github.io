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
        // Handle looping
        if (cards.length > 1) {
            if (index < 0) {
                setCurrentIndex(cards.length - 1);
            } else if (index >= cards.length) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(index);
            }
        } else {
            setCurrentIndex(0);
        }
        setCurrentX(0);
    };

    const getPrevIndex = () => {
        if (cards.length <= 1) return 0;
        return currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        if (cards.length <= 1) return 0;
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
                goToCard(currentIndex - 1);
            } else {
                // Dragged left - go to next
                goToCard(currentIndex + 1);
            }
        }
        setCurrentX(0);
    };

    const handleCardClick = (e, direction) => {
        if (Math.abs(currentX) < dragThreshold) {
            if (direction === 'prev') {
                goToCard(currentIndex - 1);
            } else if (direction === 'next') {
                goToCard(currentIndex + 1);
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

    const renderCardContent = (card) => {
        return (
            <>
                <h3 className={!card.description ? 'title-only' : ''}>
                    {card.title}
                </h3>
                {card.description && (
                    <p style={getTextStyle(card.description)}>
                        {card.description}
                    </p>
                )}
                {card.hyperlinkText && card.hyperlink && (
                    <a 
                        href={card.hyperlink} 
                        className="card-link-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {card.hyperlinkText}
                    </a>
                )}
            </>
        );
    };

    if (!cards || cards.length === 0) return null;

    // If there's only one card, just show it without navigation
    if (cards.length === 1) {
        return (
            <section className={`card-carousel ${getVariantClass()}`}>
                <div className="carousel-wrapper">
                    <div className="carousel-container">
                        <div className="card">
                            <div className="current-card">
                                {renderCardContent(cards[0])}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

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
                            {renderCardContent(cards[getPrevIndex()])}
                        </div>
                        <div className="current-card">
                            {renderCardContent(cards[currentIndex])}
                        </div>
                        <div 
                            className="next-card"
                            onClick={(e) => handleCardClick(e, 'next')}
                        >
                            {renderCardContent(cards[getNextIndex()])}
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