import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section bg-secondary contact-section">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h2>Get In Touch</h2>
                    <p className="subtitle">Ready to solve your technical challenges</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="contact-title">Contact Information</h3>
                        <p className="mb-8">
                            Feel free to reach out for IT support, consulting, or any technical inquiries.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div><h4>Email</h4><a href="mailto:mulisamuel569@gmail.com">mulisamuel569@gmail.com</a></div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Phone size={20} /></div>
                                <div><h4>Phone</h4><a href="tel:+254110233585">+254 110 233 585</a></div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={20} /></div>
                                <div><h4>Location</h4><p>Machakos, 242 Mumbuni</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container glass">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="your.email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="How can I help you?" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="Message..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
