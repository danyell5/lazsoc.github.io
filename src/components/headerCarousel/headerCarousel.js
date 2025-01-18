import React, { useState, useEffect, useCallback } from 'react'
import HeaderCarouselSlide from './headerCarouselSlide';
import { client } from '../../client'

export const HeaderCarousel = (props) => {
    const { fetchId, variant } = props;
    const [isCarsouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);

    const cleanUpCarouselSlides = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        const slideImage = fields.image?.fields?.file?.url
        const updatedSlide = { id, slideTitle, slideDescription, slideImage }

        setCarouselSlides(updatedSlide)
    }, [])

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            if (response) {
                cleanUpCarouselSlides(response);
            } else {
                setCarouselSlides([])
            }
            setIsCarouselLoading(false);
        } catch (error) {
            setIsCarouselLoading(false);
            console.log(error);
        }
    }, [cleanUpCarouselSlides, fetchId])

    useEffect(() => {
        getCarouselSlides()
    }, [getCarouselSlides]);

    return (
        <div>
            <HeaderCarouselSlide 
                key={carouselSlides.id} 
                slideTitle={carouselSlides.slideTitle} 
                slideDescription={carouselSlides.slideDescription} 
                slideImage={carouselSlides.slideImage}
                variant={variant}
            />
        </div>
    )
}

export default HeaderCarousel;