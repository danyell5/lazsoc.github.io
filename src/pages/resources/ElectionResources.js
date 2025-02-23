import React from 'react';
import '../../partials/_resources.scss';

const ElectionResources = () => {
    return (
        <div className="resources-page election">
            <div className="resources-content">
                <h1>Election Resources</h1>
                <div className="content-section">
                    <h2>Election Information</h2>
                    <p>Find all the information you need about LazSoc elections, including important dates, positions, and requirements.</p>
                    
                    <div className="resource-grid">
                        <div className="resource-card">
                            <h3>Election Timeline</h3>
                            <ul>
                                <li>Nomination Period: TBD</li>
                                <li>Campaign Period: TBD</li>
                                <li>Voting Days: TBD</li>
                                <li>Results Announcement: TBD</li>
                            </ul>
                        </div>

                        <div className="resource-card">
                            <h3>Available Positions</h3>
                            <ul>
                                <li>President</li>
                                <li>VP Academic</li>
                                <li>VP External</li>
                                <li>VP Finance</li>
                                <li>VP Internal</li>
                                <li>VP Marketing</li>
                            </ul>
                        </div>

                        <div className="resource-card">
                            <h3>Important Documents</h3>
                            <ul>
                                <li><a href="#nomination">Nomination Package</a></li>
                                <li><a href="#rules">Election Rules & Guidelines</a></li>
                                <li><a href="#platform">Platform Template</a></li>
                                <li><a href="#budget">Campaign Budget Form</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Campaign Guidelines</h2>
                    <div className="guidelines">
                        <p>All candidates must adhere to the following guidelines:</p>
                        <ul>
                            <li>Maintain professional conduct throughout the campaign period</li>
                            <li>Follow all university and LazSoc policies</li>
                            <li>Stay within the designated campaign budget</li>
                            <li>Only campaign in approved locations</li>
                            <li>Respect other candidates and their campaigns</li>
                        </ul>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Contact Information</h2>
                    <p>For questions about the election process, please contact:</p>
                    <div className="contact-info">
                        <p>Chief Returning Officer</p>
                        <p>Email: elections@lazsoc.ca</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectionResources; 