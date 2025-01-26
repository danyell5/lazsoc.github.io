import React, { memo } from 'react'

const HeaderCarouselSlide = memo(({ id, slideTitle, slideDescription, slideImage, variant }) => {
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
