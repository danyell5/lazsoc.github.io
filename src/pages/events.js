import React, { useEffect } from 'react';
import Footer from '../components/footer/footer';
import { useShopify } from '../hooks/useShopify';

const COLLECTION_ID = '160853000265';
const CONTAINER_ID = 'collection-component-1737836273905';

const Events = () => {
    const { isReady, isLoading } = useShopify(COLLECTION_ID, CONTAINER_ID);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shopify-page events">
            <div className="shopify-content">
                <h1>Events</h1>
                {isLoading && (
                    <div className="loading-state">Loading events...</div>
                )}
                {!isLoading && !isReady && (
                    <div className="error-state">
                        There was an error loading the events. Please try again later.
                    </div>
                )}
                <div id={CONTAINER_ID} className={!isReady ? 'hidden' : ''}></div>
            </div>
            <Footer />
        </div>
    );
};

export default Events; 