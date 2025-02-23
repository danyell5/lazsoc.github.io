import React, { useState } from 'react';

export const HiringPostCard = ({ title, description, applicationLink, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="hiring-post-card" onClick={openModal}>
                <div className="image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="title-container">
                    <h3>{title}</h3>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <h2>{title}</h2>
                        <div className="modal-description">
                            <pre>{description}</pre>
                        </div>
                        <a 
                            href={applicationLink} 
                            className="apply-button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default HiringPostCard; 