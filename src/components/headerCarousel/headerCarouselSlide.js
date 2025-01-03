import React from 'react'

export const HeaderCarouselSlide = (props) => {
    const { id, slideImage, slideTitle, slideDescription } = props
    return (
        <div className='slideWrap' style={{ backgroundImage: `url(${slideImage})` }}>
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>
    )
}

export default HeaderCarouselSlide
