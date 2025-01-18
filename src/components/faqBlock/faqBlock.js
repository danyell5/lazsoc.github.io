import React, { useState, useEffect, useCallback } from 'react'
import { FaqBlockSlide } from './faqBlockSlide';
import { client } from '../../client'

export const FaqBlock = (props) => {
    const { fetchId, variant = "homepage" } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [faqData, setFaqData] = useState(null);

    const cleanUpFaqData = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const title = fields.header
        const description = fields.description
        const questionAnswers = fields.questionAnswer?.map(qa => ({
            question: qa.fields.question,
            answer: qa.fields.answer
        })) || []

        const updatedData = {
            id,
            title,
            description,
            questionAnswers,
            variant
        }

        setFaqData(updatedData)
    }, [variant])

    const getFaqData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            if (response) {
                cleanUpFaqData(response);
            } else {
                setFaqData(null)
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }, [cleanUpFaqData, fetchId])

    useEffect(() => {
        getFaqData()
    }, [getFaqData]);

    if (!faqData) return null;

    return (
        <FaqBlockSlide {...faqData} />
    )
}

export default FaqBlock; 