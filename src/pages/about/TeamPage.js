import React from 'react';
import '../../partials/_about.scss';

const TeamPage = () => {
    const teamMembers = [
        {
            name: "John Doe",
            position: "President",
            image: "/images/team/president.jpg",
            description: "Fourth-year BBA student passionate about leadership and community building.",
            email: "president@lazsoc.ca"
        },
        {
            name: "Jane Smith",
            position: "VP Academic",
            image: "/images/team/vp-academic.jpg",
            description: "Third-year BBA student focused on enhancing academic resources for students.",
            email: "academic@lazsoc.ca"
        },
        // Add more team members here
    ];

    return (
        <div className="about-page team">
            <div className="about-content">
                <h1>Meet Our Team</h1>
                <div className="content-section">
                    <h2>LazSoc Executive Team 2023-2024</h2>
                    <p>Get to know the dedicated individuals working to enhance your Lazaridis experience.</p>
                    
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <h4>{member.position}</h4>
                                    <p>{member.description}</p>
                                    <a href={`mailto:${member.email}`} className="contact-link">
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Mission</h2>
                    <div className="mission-statement">
                        <p>
                            The Lazaridis Students' Society is dedicated to enhancing the university experience 
                            for all business and economics students at Wilfrid Laurier University. We strive to 
                            provide valuable resources, create meaningful connections, and foster a supportive 
                            community that prepares students for success in their academic and professional journeys.
                        </p>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Get Involved</h2>
                    <div className="involvement-info">
                        <p>Interested in joining the LazSoc team? Learn about our hiring process and available positions:</p>
                        <div className="cta-buttons">
                            <a href="/hiring-clubs" className="cta-button">View Open Positions</a>
                            <a href="/resources/election" className="cta-button">Election Information</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage; 