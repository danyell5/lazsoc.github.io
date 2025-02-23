import React, { useState, useEffect, useCallback } from 'react';
import { client } from '../../client';
import { CardCarouselSlide } from './cardCarouselSlide';

export const CardCarousel = (props) => {
    const { fetchId, variant } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [carouselData, setCarouselData] = useState(null);

    const cleanUpCarouselData = useCallback((rawData) => {
        const { sys, fields } = rawData;
        const { id } = sys;
        const header = fields.header;
        const cards = fields.cards?.map(card => ({
            title: card.fields.title,
            description: card.fields.description,
            hyperlinkText: card.fields.hyperlinkText || '',
            hyperlink: card.fields.link || ''
        })) || [];

        const updatedCarousel = {
            id,
            header,
            cards
        };

        setCarouselData(updatedCarousel);
    }, []);

    const getCarouselData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntry(fetchId);
            if (response) {
                cleanUpCarouselData(response);
            } else {
                setCarouselData(null);
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching carousel data:', error);
            setCarouselData(null);
            setIsLoading(false);
        }
    }, [cleanUpCarouselData, fetchId]);

    useEffect(() => {
        getCarouselData();
    }, [getCarouselData]);

    if (!carouselData) return null;

    return (
        <CardCarouselSlide
            {...carouselData}
            variant={variant}
        />
    );
};

export default CardCarousel; 