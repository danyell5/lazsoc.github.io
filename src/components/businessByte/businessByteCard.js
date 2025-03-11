import React from 'react';

const BusinessByteCard = ({ post, onClick }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="business-byte-card" onClick={onClick}>
            <div className="image-wrapper">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="content">
                <h3>{post.title}</h3>
                <p className="date">{formattedDate}</p>
            </div>
        </div>
    );
};

export default BusinessByteCard; 