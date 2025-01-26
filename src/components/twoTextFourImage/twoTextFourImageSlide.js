import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const TwoTextFourImageSlide = (props) => {
    const { id, images, imageTitles, slideTitle, slideDescription, variant } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleImageClick = (title) => {
        if (title === "Business Formal Rental Program") {
            navigate('/shop/business-formal');
        } else if (title === "Club Memberships") {
            navigate('/shop/club-memberships');
        } else if (title === "Events") {
            navigate('/shop/events');
        } else if (title === "Merchandise") {
            navigate('/shop/merchandise');
        }
    };

    const getVariantClass = () => {
        switch(variant) {
            case 'homepage':
                return 'homepage';
            case 'carousel':
                return 'carousel';
            default:
                return '';
        }
    };

    const getImagesForDisplay = () => {
        if (!images || images.length === 0) return [];
        
        const result = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % images.length;
            result.push({
                image: images[index],
                title: imageTitles?.[index]
            });
        }
        return result;
    };

    const handlePrevious = () => {
        if (variant === 'carousel' && images?.length) {
            setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
        }
    };

    const handleNext = () => {
        if (variant === 'carousel' && images?.length) {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }
    };

    const renderCarouselContent = () => {
        const displayImages = getImagesForDisplay();
        
        return (
            <>
                <div className="header-container">
                    <div className="text-content">
                        <h2 className="title">{slideTitle}</h2>
                        <p className="description">{slideDescription}</p>
                    </div>
                    <div className="nav-buttons">
                        <button 
                            className="carousel-nav prev" 
                            onClick={handlePrevious}
                        >
                            &#8592;
                        </button>
                        <button 
                            className="carousel-nav next" 
                            onClick={handleNext}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
                <div className="images-container">
                    {displayImages.map((item, index) => (
                        <div 
                            key={index} 
                            className="image-item"
                            onClick={() => handleImageClick(item.title)}
                            style={{ cursor: item.title === "Business Formal Rental Program" ? 'pointer' : 'default' }}
                        >
                            <img src={item.image} alt={item.title || `Image ${index + 1}`} />
                            {item.title && (
                                <div className="image-title">{item.title}</div>
                            )}
                        </div>
                    ))}
                </div>
            </>
        );
    };

    const renderDefaultContent = () => {
        return (
            <>
                <h2 className="title">{slideTitle}</h2>
                <p className="description">{slideDescription}</p>
                <div className="images-container">
                    {images?.map((image, index) => (
                        <div 
                            key={index} 
                            className="image-item"
                            onClick={() => handleImageClick(imageTitles[index])}
                            style={{ cursor: imageTitles[index] === "Business Formal Rental Program" ? 'pointer' : 'default' }}
                        >
                            <img src={image} alt={imageTitles?.[index] || `Image ${index + 1}`} />
                            {imageTitles?.[index] && (
                                <div className="image-title">{imageTitles[index]}</div>
                            )}
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div id={id} className={`two-text-four-image ${getVariantClass()}`}>
            {variant === 'carousel' ? renderCarouselContent() : renderDefaultContent()}
        </div>
    )
}

export default TwoTextFourImageSlide 