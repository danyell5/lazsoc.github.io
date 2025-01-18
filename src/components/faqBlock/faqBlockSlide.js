import React, { useState } from 'react'

export const FaqBlockSlide = (props) => {
    const { id, title, description, questionAnswers, variant = "homepage" } = props;
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id={id} className={`faq-block ${variant}`}>
            <div className="header-content">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
            <div className="questions-container">
                {questionAnswers.map((qa, index) => (
                    <div 
                        key={index} 
                        className={`question-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggleQuestion(index)}
                    >
                        <div className="question">
                            <h3>{qa.question}</h3>
                            <span className="toggle-icon">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </div>
                        <div className="answer">
                            <p style={{ whiteSpace: 'pre-line' }}>{qa.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqBlockSlide 