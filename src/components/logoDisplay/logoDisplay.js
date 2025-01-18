import React, { useState, useEffect, useCallback } from 'react'
import LogoDisplaySlide from './logoDisplaySlide';
import { client } from '../../client'

const CATEGORIES = [
    'Accounting',
    'Consulting',
    'Diverse Leadership',
    'Economics',
    'Entrepreneurship',
    'Finance',
    'General',
    'Human Resources',
    'Insurance and Risk',
    'Marketing',
    'Student Support',
    'Supply Chain'
];

const CONSULTING_LOGOS = ['ACE Logo', 'JDCC Logo', 'LCC Logo'];
const DIVERSE_LEADERSHIP_LOGOS = ['WILL Logo', 'BSOL Logo', 'ASIB Logo'];
const FINANCE_LOGOS = ['LIFA Logo', 'LWIS Logo'];
const GENERAL_LOGOS = ['Business and Economics Review Logo', 'SML Logo', 'Sustainability Logo', 'Real Estate Logo'];
const MARKETING_LOGOS = ['LMA Logo', 'LSA Logo', 'Ad Logo'];
const STUDENT_SUPPORT_LOGOS = ['Xlerate Logo', 'Link Logo'];

export const LogoDisplay = (props) => {
    const { fetchId, variant = "homepage" } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [logoData, setLogoData] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const cleanUpLogoData = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const title = fields.title
        const description = fields.description
        const header = fields.header || ''
        const headerDescription = fields.headerDescription || ''
        const logos = fields.logos?.map(logo => ({
            url: logo.fields.file.url,
            title: logo.fields.title,
            logoTitle: logo.fields.title || '',
            categories: logo.fields.categories || []
        })) || []

        const updatedData = {
            id,
            title,
            description,
            header,
            headerDescription,
            logos,
            variant
        }

        setLogoData(updatedData)
    }, [variant])

    const getLogoData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntry(fetchId)
            if (response) {
                cleanUpLogoData(response);
            } else {
                setLogoData(null)
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }, [cleanUpLogoData, fetchId])

    useEffect(() => {
        getLogoData()
    }, [getLogoData]);

    const handleFilterChange = (category) => {
        setSelectedFilters(prev => {
            if (prev.includes(category)) {
                return prev.filter(f => f !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const getFilteredLogos = useCallback(() => {
        if (!logoData) return [];
        if (selectedFilters.length === 0) return logoData.logos;

        let filteredLogos = [];

        // Check each selected filter
        selectedFilters.forEach(filter => {
            let logosForFilter = [];
            
            // Special case for Accounting
            if (filter === 'Accounting') {
                logosForFilter = logoData.logos.filter(logo => logo.title === 'LAA Logo');
            }
            // Special case for Consulting
            else if (filter === 'Consulting') {
                logosForFilter = logoData.logos.filter(logo => CONSULTING_LOGOS.includes(logo.title));
            }
            // Special case for Diverse Leadership
            else if (filter === 'Diverse Leadership') {
                logosForFilter = logoData.logos.filter(logo => DIVERSE_LEADERSHIP_LOGOS.includes(logo.title));
            }
            // Special case for Economics
            else if (filter === 'Economics') {
                logosForFilter = logoData.logos.filter(logo => logo.title === 'LEC Logo');
            }
            // Special case for Entrepreneurship
            else if (filter === 'Entrepreneurship') {
                logosForFilter = logoData.logos.filter(logo => logo.title === 'Startup Logo');
            }
            // Special case for Finance
            else if (filter === 'Finance') {
                logosForFilter = logoData.logos.filter(logo => FINANCE_LOGOS.includes(logo.title));
            }
            // Special case for General
            else if (filter === 'General') {
                logosForFilter = logoData.logos.filter(logo => GENERAL_LOGOS.includes(logo.title));
            }
            // Special case for Human Resources
            else if (filter === 'Human Resources') {
                logosForFilter = logoData.logos.filter(logo => logo.title === 'HRL Logo');
            }
            // Special case for Insurance and Risk
            else if (filter === 'Insurance and Risk') {
                logosForFilter = logoData.logos.filter(logo => logo.title === 'LIRA Logo');
            }
            // Special case for Marketing
            else if (filter === 'Marketing') {
                logosForFilter = logoData.logos.filter(logo => MARKETING_LOGOS.includes(logo.title));
            }
            // Special case for Student Support
            else if (filter === 'Student Support') {
                logosForFilter = logoData.logos.filter(logo => STUDENT_SUPPORT_LOGOS.includes(logo.title));
            }
            // Special case for Supply Chain
            else if (filter === 'Supply Chain') {
                logosForFilter = logoData.logos.filter(logo => logo.title === 'LSCA Logo');
            }
            // Normal filtering for other categories
            else {
                logosForFilter = logoData.logos.filter(logo => 
                    logo.categories.includes(filter)
                );
            }

            // Add logos from this filter to the result array
            filteredLogos = [...filteredLogos, ...logosForFilter];
        });

        // Remove duplicates in case a logo matches multiple filters
        return [...new Set(filteredLogos)];
    }, [logoData, selectedFilters]);

    if (!logoData) return null;

    return (
        <LogoDisplaySlide 
            {...logoData} 
            logos={getFilteredLogos()}
            categories={CATEGORIES}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
        />
    )
}

export default LogoDisplay; 