import React, { memo } from 'react'

const HeaderCarouselSlide = memo(({ id, slideTitle, slideDescription, slideImage, variant }) => {
    if (variant === 'banner') {
        return (
            <div 
                className={`slideWrap ${variant}`} 
                style={{ 
                    backgroundImage: slideImage ? `url(${slideImage})` : 'none'
                }}
            >
                <div style={{ width: '100%', height: '100%' }} />
            </div>
        )
    }

    return (
        <div 
            className={`slideWrap ${variant || ''}`} 
            style={{ 
                backgroundImage: slideImage ? `url(${slideImage})` : 'none'
            }}
        >
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>
    )
})

HeaderCarouselSlide.displayName = 'HeaderCarouselSlide';

export default HeaderCarouselSlide
