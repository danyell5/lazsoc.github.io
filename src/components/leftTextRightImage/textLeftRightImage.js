import React, { useState, useEffect, useCallback } from 'react'
import { TextLeftRightImageSlide } from './textLeftRightImageSlide';
import { client } from '../../client'

export const TextLeftRightImage = (props) => {
    const { fetchId, variant } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [slideData, setSlideData] = useState(null);

    const cleanUpSlideData = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        const slideDescriptionOne = fields.descriptionOne
        const slideRedirectionUrl = fields.redirectionUrl
        const slideImage = fields.image?.fields?.file?.url

        const updatedSlide = {
            id,
            slideTitle,
            slideDescription,
            slideDescriptionOne,
            slideImage,
            slideRedirectionUrl
        }

        setSlideData(updatedSlide)
    }, [])

    const getSlideData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            if (response) {
                cleanUpSlideData(response);
            } else {
                setSlideData(null)
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching slide data:', error);
            setSlideData(null)
            setIsLoading(false);
        }
    }, [cleanUpSlideData, fetchId])

    useEffect(() => {
        getSlideData()
    }, [getSlideData]);

    if (!slideData) return null;

    return (
        <TextLeftRightImageSlide 
            {...slideData}
            variant={variant}
        />
    )
}

export default TextLeftRightImage;