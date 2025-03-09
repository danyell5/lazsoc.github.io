import React, { useState, useEffect, useCallback } from 'react';
import { client } from '../../client';
import { HiringPostCard } from './hiringPostCard';
import '../../partials/_hiringPostSection.scss';

const ROLE_CATEGORIES = [
    'Club Strategy',
    'Corporate Relations',
    'Finance',
    'Internal & EDI',
    'Marketing',
    'Operations',
    'Technology'
];

export const HiringPostSection = ({ fetchId, onPostsLoaded }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const cleanUpPostData = useCallback((rawData) => {
        const { sys, fields } = rawData;
        const { id } = sys;
        const title = fields.title || '';
        const posts = fields.hiringPostCards?.map(post => ({
            id: post.sys.id,
            title: post.fields.title,
            description: post.fields.description,
            applicationLink: post.fields.applicationLink,
            image: post.fields.image?.fields.file.url,
            roleType: post.fields.roleType
        })) || [];

        setTitle(title);
        setPosts(posts);
        onPostsLoaded?.(posts.length > 0);
    }, [onPostsLoaded]);

    const getPostData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntry(fetchId);
            if (response) {
                cleanUpPostData(response);
            } else {
                setPosts([]);
                setTitle('');
                onPostsLoaded?.(false);
            }
        } catch (error) {
            console.error('Error fetching hiring posts:', error);
            setPosts([]);
            setTitle('');
            onPostsLoaded?.(false);
        } finally {
            setIsLoading(false);
        }
    }, [cleanUpPostData, fetchId, onPostsLoaded]);

    useEffect(() => {
        getPostData();
    }, [getPostData]);

    const handleFilterChange = (category) => {
        setSelectedFilters(prev => {
            if (prev.includes(category)) {
                return prev.filter(f => f !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const getFilteredPosts = () => {
        if (selectedFilters.length === 0) return posts;
        return posts.filter(post => {
            const postRoleType = post.roleType.toLowerCase();
            return selectedFilters.some(filter => 
                postRoleType.includes(filter.toLowerCase())
            );
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (!posts.length) return null;

    return (
        <section className="hiring-post-section">
            <div className="section-content">
                <div className="header-content">
                    <div className="title-section">
                        <h2 className="title">{title}</h2>
                    </div>
                    <button 
                        className="filter-toggle-button"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? 'Hide Filters' : 'Show Filters'} 
                        <span className={`toggle-arrow ${showFilters ? 'open' : ''}`}>▼</span>
                    </button>
                </div>
                <div className="filters-section">
                    <div className={`filter-container ${showFilters ? 'show' : ''}`}>
                        {ROLE_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                className={`filter-button ${selectedFilters.includes(category) ? 'active' : ''}`}
                                onClick={() => handleFilterChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="posts-grid">
                    {getFilteredPosts().map((post, index) => (
                        <HiringPostCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringPostSection; 