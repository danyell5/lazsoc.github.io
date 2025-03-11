import React from 'react';
import '../../partials/_about.scss';
import Footer from '../../components/footer/footer';
import BusinessByte from '../../components/businessByte/businessByte';

const BusinessBytesPage = () => {
    return (
        <div className="about-page business-bytes">
            <BusinessByte fetchId="42OZEhrcuuGClS8lnMuWCi" />
            <Footer />
        </div>
    );
};

export default BusinessBytesPage; 