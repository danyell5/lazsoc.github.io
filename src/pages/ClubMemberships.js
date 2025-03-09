import React, { useEffect } from 'react';
import Footer from '../components/footer/footer';
import { useShopify } from '../hooks/useShopify';

const COLLECTION_ID = '160852934729';
const CONTAINER_ID = 'collection-component-1737836273906';

const ClubMemberships = () => {
    const { isReady, isLoading } = useShopify(COLLECTION_ID, CONTAINER_ID);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shopify-page club-memberships">
            <div className="shopify-content">
                <h1>Club Memberships</h1>
                {isLoading && (
                    <div className="loading-state">Loading club memberships...</div>
                )}
                {!isLoading && !isReady && (
                    <div className="error-state">
                        There was an error loading the club memberships. Please try again later.
                    </div>
                )}
                <div id={CONTAINER_ID} className={!isReady ? 'hidden' : ''}></div>
            </div>
            <Footer />
        </div>
    );
};

export default ClubMemberships; 