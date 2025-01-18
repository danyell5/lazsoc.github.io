import React from 'react'

export const HeaderCarouselSlide = (props) => {
    const { id, slideTitle, slideDescription, slideImage, variant } = props
    return (
        <div className={`slideWrap ${variant || ''}`} style={{ backgroundImage: `url(${slideImage})` }}>
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>
    )
}

export default HeaderCarouselSlide
