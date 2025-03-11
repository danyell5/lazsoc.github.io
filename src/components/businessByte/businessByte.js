import React, { useState, useEffect, useCallback } from 'react';
import { client } from '../../client';
import BusinessByteCard from './businessByteCard';
import BusinessByteModal from './businessByteModal';
import '../../partials/_businessByte.scss';

export const BusinessByte = ({ fetchId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const cleanUpPostData = useCallback((rawData) => {
        console.log('Raw data received:', rawData);
        const { sys, fields } = rawData;
        const { id } = sys;
        const title = fields.title || '';
        console.log('Fields:', fields);
        
        if (!fields.posts) {
            console.log('No posts field found in the data');
            return;
        }

        const posts = fields.posts.map(post => {
            console.log('Processing post:', post);
            return {
                id: post.sys.id,
                title: post.fields.title,
                date: post.fields.date,
                text: post.fields.text,
                image: post.fields.image?.fields?.file?.url
            };
        });

        console.log('Processed posts:', posts);
        setPosts(posts);
    }, []);

    const getPostData = useCallback(async () => {
        console.log('Fetching data with ID:', fetchId);
        setIsLoading(true);
        try {
            const response = await client.getEntry(fetchId);
            console.log('Contentful response:', response);
            if (response) {
                cleanUpPostData(response);
            } else {
                console.log('No response from Contentful');
                setPosts([]);
            }
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            setPosts([]);
        } finally {
            setIsLoading(false);
        }
    }, [cleanUpPostData, fetchId]);

    useEffect(() => {
        getPostData();
    }, [getPostData]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    console.log('Current posts state:', posts);
    console.log('Loading state:', isLoading);

    if (isLoading) return <div>Loading...</div>;
    if (!posts.length) {
        console.log('No posts to display');
        return <div>No posts available</div>;
    }

    return (
        <section className="business-byte-section">
            <div className="posts-grid">
                {posts.map((post) => (
                    <BusinessByteCard
                        key={post.id}
                        post={post}
                        onClick={() => handlePostClick(post)}
                    />
                ))}
            </div>
            {selectedPost && (
                <BusinessByteModal
                    post={selectedPost}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

export default BusinessByte; 