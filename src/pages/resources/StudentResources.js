import React from 'react';
import '../../partials/_resources.scss';

const StudentResources = () => {
    return (
        <div className="resources-page student">
            <div className="resources-content">
                <h1>Student Resources</h1>
                <div className="content-section">
                    <h2>Academic Support</h2>
                    <p>Access resources to help you succeed in your academic journey at Lazaridis School of Business & Economics.</p>
                    
                    <div className="resource-grid">
                        <div className="resource-card">
                            <h3>Study Resources</h3>
                            <ul>
                                <li><a href="#tutoring">Peer Tutoring Program</a></li>
                                <li><a href="#study-groups">Study Groups</a></li>
                                <li><a href="#past-exams">Past Exam Database</a></li>
                                <li><a href="#academic-tips">Academic Success Tips</a></li>
                            </ul>
                        </div>

                        <div className="resource-card">
                            <h3>Career Development</h3>
                            <ul>
                                <li><a href="#resume">Resume Templates</a></li>
                                <li><a href="#cover-letter">Cover Letter Guide</a></li>
                                <li><a href="#interview">Interview Preparation</a></li>
                                <li><a href="#networking">Networking Tips</a></li>
                            </ul>
                        </div>

                        <div className="resource-card">
                            <h3>Student Life</h3>
                            <ul>
                                <li><a href="#wellness">Wellness Resources</a></li>
                                <li><a href="#involvement">Getting Involved</a></li>
                                <li><a href="#mentorship">Mentorship Programs</a></li>
                                <li><a href="#events-calendar">Events Calendar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Important Links</h2>
                    <div className="links-grid">
                        <a href="https://students.wlu.ca/" className="link-card" target="_blank" rel="noopener noreferrer">
                            <h3>LORIS</h3>
                            <p>Access your student account, course registration, and grades</p>
                        </a>
                        <a href="https://mylearningspace.wlu.ca/" className="link-card" target="_blank" rel="noopener noreferrer">
                            <h3>MyLearningSpace</h3>
                            <p>Access your course materials and online learning resources</p>
                        </a>
                        <a href="https://library.wlu.ca/" className="link-card" target="_blank" rel="noopener noreferrer">
                            <h3>Library</h3>
                            <p>Access research databases, study spaces, and academic resources</p>
                        </a>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Need Help?</h2>
                    <p>Contact our Student Support team for assistance:</p>
                    <div className="contact-info">
                        <p>Academic Support: academic@lazsoc.ca</p>
                        <p>Career Support: careers@lazsoc.ca</p>
                        <p>General Inquiries: support@lazsoc.ca</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentResources; 