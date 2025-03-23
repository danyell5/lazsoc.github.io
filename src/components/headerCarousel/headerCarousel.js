import React, { useState, useEffect, useCallback } from 'react'
import HeaderCarouselSlide from './headerCarouselSlide';
import { client } from '../../client'

// Cache for storing fetched carousel data
const carouselCache = new Map();

export const HeaderCarousel = (props) => {
    const { fetchId, variant, isTopCarousel = false } = props;
    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    // Update isMobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        // Check cache first
        if (carouselCache.has(fetchId)) {
            cleanUpCarouselSlides(carouselCache.get(fetchId));
            return;
        }

        setIsCarouselLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            if (response) {
                // Store in cache
                carouselCache.set(fetchId, response);
                cleanUpCarouselSlides(response);
            } else {
                setCarouselSlides([])
            }
        } catch (error) {
            console.log(error);
            setCarouselSlides([])
        } finally {
            setIsCarouselLoading(false);
        }
    }, [cleanUpCarouselSlides, fetchId])

    useEffect(() => {
        getCarouselSlides()
    }, [getCarouselSlides]);

    // Early return if no slide data
    if (!carouselSlides.slideImage) return null;
    
    // Hide top carousels on mobile view
    if (isTopCarousel && isMobile) return null;

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