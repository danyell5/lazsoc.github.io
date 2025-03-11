import React, { useEffect } from 'react';

const BusinessByteModal = ({ post, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-image">
                    <img src={post.image} alt={post.title} />
                </div>
                <div className="modal-text">
                    <h2>{post.title}</h2>
                    <p className="date">{formattedDate}</p>
                    <div 
                        className="text-content"
                        dangerouslySetInnerHTML={{ __html: post.text }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessByteModal; 