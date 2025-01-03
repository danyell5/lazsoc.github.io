import React, { useState, useEffect, useCallback } from 'react'
import { TextLeftRightImageSlide } from './textLeftRightImageSlide';
import { client } from '../../client'

export const TextLeftRightImage = (props) => {
    const fetchId = props.fetchId
    const [isSectionLoading, setIsSectionLoading] = useState(false);
    const [sectionSlides, setSectionSlides] = useState([]);

    const cleanUpSectionSlides = useCallback((rawData) => {
        
        const { sys, fields } = rawData
        const { id } = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        const slideRedirectionUrl = fields.redirectionUrl
        const slideImage = fields.image.fields.file.url
        const updatedSlide = { id, slideTitle, slideDescription, slideImage, slideRedirectionUrl }

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
            setIsSectionLoading(false);
        }
    }, [cleanUpSectionSlides])

    useEffect(() => {
        getSectionSlides()
    }, [getSectionSlides]);


    return (
        <div>
           <TextLeftRightImageSlide key={sectionSlides.id} slideTitle={sectionSlides.slideTitle} slideDescription={sectionSlides.slideDescription} slideImage={sectionSlides.slideImage} slideRedirectionURL={sectionSlides.slideRedirectionUrl}/>  
        </div>
    )
}

export default TextLeftRightImage;