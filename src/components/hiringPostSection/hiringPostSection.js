import React, { useState, useEffect, useCallback } from 'react';
import { client } from '../../client';
import { HiringPostCard } from './hiringPostCard';
import '../../partials/_hiringPostSection.scss';

export const HiringPostSection = ({ fetchId, onPostsLoaded }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');

    const cleanUpPostData = useCallback((rawData) => {
        const { sys, fields } = rawData;
        const { id } = sys;
        const title = fields.title || '';
        const posts = fields.hiringPostCards?.map(post => ({
            id: post.sys.id,
            title: post.fields.title,
            description: post.fields.description,
            applicationLink: post.fields.applicationLink,
            image: post.fields.image?.fields.file.url
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

    if (isLoading) return <div>Loading...</div>;
    if (!posts.length) return null;

    return (
        <div className="hiring-post-section">
            {title && <h2 className="section-title">{title}</h2>}
            <div className="posts-grid">
                {posts.map(post => (
                    <HiringPostCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default HiringPostSection; 