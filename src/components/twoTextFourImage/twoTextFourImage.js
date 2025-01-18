import React, { useState, useEffect, useCallback } from 'react'
import { TwoTextFourImageSlide } from './twoTextFourImageSlide';
import { client } from '../../client'

export const TwoTextFourImage = (props) => {
    const fetchId = props.fetchId
    const variant = props.variant
    const [isLoading, setIsLoading] = useState(false);
    const [slideData, setSlideData] = useState(null);

    const cleanUpSlideData = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        
        // Handle multiple images
        const images = fields.images?.map(image => image.fields.file.url) || []
        const imageTitles = fields.imageTitles || []

        const updatedSlide = {
            id,
            slideTitle,
            slideDescription,
            images,
            imageTitles
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
            setIsLoading(false);
            console.log(error);
        }
    }, [cleanUpSlideData, fetchId])

    useEffect(() => {
        getSlideData()
    }, [getSlideData]);

    if (!slideData) return null;

    return (
        <TwoTextFourImageSlide
            {...slideData}
            variant={variant}
        />
    )
}

export default TwoTextFourImage; 