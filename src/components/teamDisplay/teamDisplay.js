import React, { useState, useEffect, useCallback } from 'react'
import { TeamDisplaySlide } from './teamDisplaySlide';
import { client } from '../../client'

export const TeamDisplay = (props) => {
    const { fetchId } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [slideData, setSlideData] = useState(null);

    const cleanUpSlideData = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        
        // Handle profiles data
        const profiles = fields.profiles?.map(profile => ({
            name: profile.fields.name,
            role: profile.fields.role,
            headshot: profile.fields.headshot?.fields?.file?.url,
            linkedin: profile.fields.linkedln
        })) || []

        const updatedSlide = {
            id,
            profiles
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
            console.error('Error fetching team data:', error);
            setSlideData(null)
            setIsLoading(false);
        }
    }, [cleanUpSlideData, fetchId])

    useEffect(() => {
        getSlideData()
    }, [getSlideData]);

    if (!slideData) return null;

    return (
        <TeamDisplaySlide {...slideData} />
    )
}

export default TeamDisplay; 