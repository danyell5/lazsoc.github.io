import React from 'react';
import '../../partials/_about.scss';

const BusinessBytesPage = () => {
    const articles = [
        {
            title: "Navigating Your First Co-op Term",
            author: "Sarah Johnson",
            date: "March 15, 2024",
            category: "Career Development",
            image: "/images/bytes/coop.jpg",
            excerpt: "Essential tips and strategies for making the most of your first co-op experience.",
            link: "#article-1"
        },
        {
            title: "Club Leadership: A Guide to Success",
            author: "Michael Chen",
            date: "March 10, 2024",
            category: "Student Life",
            image: "/images/bytes/leadership.jpg",
            excerpt: "Learn how to effectively lead and manage student organizations while balancing academics.",
            link: "#article-2"
        }
    ];

    const resources = [
        {
            title: "Resume Templates",
            description: "Professional templates tailored for business students.",
            icon: "📄",
            link: "#resources"
        },
        {
            title: "Interview Prep Guide",
            description: "Comprehensive guide to ace your interviews.",
            icon: "🎯",
            link: "#interview"
        },
        {
            title: "Networking Tips",
            description: "Build meaningful professional connections.",
            icon: "🤝",
            link: "#networking"
        }
    ];

    return (
        <div className="about-page business-bytes">
            <div className="about-content">
                <h1>Business Bytes</h1>
                <p className="intro-text">
                    Your source for practical business insights, career tips, and student success stories. 
                    Written by LazSoc members for the Laurier business community.
                </p>

                <div className="content-section">
                    <h2>Latest Articles</h2>
                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <div key={index} className="article-card">
                                <div className="article-image">
                                    <img src={article.image} alt={article.title} />
                                    <span className="category-tag">{article.category}</span>
                                </div>
                                <div className="article-content">
                                    <h3>{article.title}</h3>
                                    <div className="article-meta">
                                        <span className="author">{article.author}</span>
                                        <span className="date">{article.date}</span>
                                    </div>
                                    <p>{article.excerpt}</p>
                                    <a href={article.link} className="read-more">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Quick Resources</h2>
                    <div className="resources-grid">
                        {resources.map((resource, index) => (
                            <a key={index} href={resource.link} className="resource-card">
                                <span className="resource-icon">{resource.icon}</span>
                                <h3>{resource.title}</h3>
                                <p>{resource.description}</p>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Contribute</h2>
                    <div className="contribute-section">
                        <div className="contribute-content">
                            <h3>Share Your Knowledge</h3>
                            <p>
                                Have insights or experiences that could benefit other students? 
                                We're always looking for new perspectives and stories to share 
                                with our community.
                            </p>
                            <div className="contribution-types">
                                <ul>
                                    <li>Success Stories</li>
                                    <li>Career Tips</li>
                                    <li>Industry Insights</li>
                                    <li>Student Life Experiences</li>
                                </ul>
                            </div>
                            <a href="mailto:content@lazsoc.ca" className="cta-button">
                                Submit Your Article
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessBytesPage; 