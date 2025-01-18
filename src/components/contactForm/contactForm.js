import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await emailjs.send(
                'service_hmti1jb',
                'template_34gy6b9',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'krish.chandarana@lazsoc.ca'
                },
                '9Kn6gXHlH4nXZUsJE'
            );
            
            setStatusMessage('Message sent successfully!');
            setIsSuccess(true);
            setShowSuccessMessage(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setStatusMessage('Failed to send message. Please try again.');
            setIsSuccess(false);
        }
    };

    if (showSuccessMessage) {
        return (
            <div className="contact-form-wrapper">
                <div className="contact-form">
                    <div className="success-message">
                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully. We'll get back to you soon!</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-form-wrapper">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                    {statusMessage && (
                        <div className={`status-message ${isSuccess ? 'success' : 'error'}`}>
                            {statusMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm; 