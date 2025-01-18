import React, { useState, useEffect, useCallback } from 'react'
import { ThreeImageLeftTextRightSlide } from './threeImageLeftTextRightSlide';
import { client } from '../../client'

export const ThreeImageLeftTextRight = (props) => {
    const fetchId = props.fetchId
    const [isSectionLoading, setIsSectionLoading] = useState(false);
    const [sectionSlides, setSectionSlides] = useState([]);

    const cleanUpSectionSlides = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        const slideRedirectionUrl = fields.redirectionURL
        const slideImages = {
            citySkyline: fields.threeImages[0].fields.file.url,
            pickleballHighFive: fields.threeImages[1].fields.file.url,
            fourPickleballFans: fields.threeImages[2].fields.file.url
        }
        const updatedSlide = { id, slideTitle, slideDescription, slideImages, slideRedirectionUrl }

        setSectionSlides(updatedSlide)
    }, [])

    const getSectionSlides = useCallback(async () => {
        setIsSectionLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            console.log(`API response for fetchId (${JSON.stringify(fetchId)}):`, response);
            if (response) {
                cleanUpSectionSlides(response);
            } else {
                setSectionSlides([])
            }
            setIsSectionLoading(false);
        } catch (error) {
            console.error('Error fetching slides:', error);
            setIsSectionLoading(false);
        }
    }, [cleanUpSectionSlides, fetchId])

    useEffect(() => {
        getSectionSlides()
    }, [getSectionSlides]);

    return (
        <div>
            <ThreeImageLeftTextRightSlide 
                key={sectionSlides.id} 
                slideTitle={sectionSlides.slideTitle} 
                slideDescription={sectionSlides.slideDescription} 
                slideImages={sectionSlides.slideImages}
                slideRedirectionURL={sectionSlides.slideRedirectionUrl}
                variant={props.variant}
            />
        </div>
    )
}

export default ThreeImageLeftTextRight; 