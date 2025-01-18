import React, { useState, useEffect, useCallback } from 'react'
import { OneTextAboveFourImagesSlide } from './oneTextAboveFourImagesSlide';
import { client } from '../../client'

export const OneTextAboveFourImages = (props) => {
    const fetchId = props.fetchId
    const [isSectionLoading, setIsSectionLoading] = useState(false);
    const [sectionData, setSectionData] = useState(null);

    const cleanUpSectionData = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const header = fields.header
        const images = fields.fourImages.map(image => image.fields.file.url)
        const updatedData = { id, header, images }

        setSectionData(updatedData)
    }, [])

    const getSectionData = useCallback(async () => {
        setIsSectionLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            console.log(`API response for fetchId (${JSON.stringify(fetchId)}):`, response);
            if (response) {
                cleanUpSectionData(response);
            } else {
                setSectionData(null)
            }
            setIsSectionLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsSectionLoading(false);
        }
    }, [cleanUpSectionData, fetchId])

    useEffect(() => {
        getSectionData()
    }, [getSectionData]);

    return (
        <div>
            <OneTextAboveFourImagesSlide 
                key={sectionData?.id} 
                header={sectionData?.header}
                images={sectionData?.images}
                variant={props.variant}
            />
        </div>
    )
}

export default OneTextAboveFourImages; 