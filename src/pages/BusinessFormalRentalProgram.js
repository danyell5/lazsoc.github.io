import React, { useEffect } from 'react';
import Footer from '../components/footer/footer';
import { useShopify } from '../hooks/useShopify';

const COLLECTION_ID = '274043371593';
const CONTAINER_ID = 'collection-component-1737836273907';

const BusinessFormalRentalProgram = () => {
    const isShopifyReady = useShopify(COLLECTION_ID, CONTAINER_ID);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shopify-page business-formal">
            <div className="shopify-content">
                <h1>Business Formal Rental Program</h1>
                <div id={CONTAINER_ID}></div>
            </div>
            <Footer />
        </div>
    );
};

export default BusinessFormalRentalProgram; 