import React, { useEffect } from 'react';
import Footer from '../components/footer/footer';
import { useShopify } from '../hooks/useShopify';

const COLLECTION_ID = '160853000265';
const CONTAINER_ID = 'collection-component-1737836273905';

const Events = () => {
    const isShopifyReady = useShopify(COLLECTION_ID, CONTAINER_ID);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shopify-page events">
            <div className="shopify-content">
                <h1>Events</h1>
                <div id={CONTAINER_ID}></div>
            </div>
            <Footer />
        </div>
    );
};

export default Events; 