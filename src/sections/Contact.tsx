import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        // --- Web3Forms Access Key --- //
        formData.append("access_key", "f9a47fce-b6ca-4ff6-b415-567dd9347c07");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Success');
                form.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('Error');
            }
        } catch (error) {
            setStatus('Error');
        }
    };

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
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {/* Hidden fields for Web3Forms options */}
                            <input type="hidden" name="subject" value="New Contact Form Submission - Portfolio" />
                            <input type="hidden" name="from_name" value="Your Portfolio Website" />
                            
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_subject">Subject</label>
                                <input type="text" id="user_subject" name="user_subject" placeholder="How can I help you?" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={5} placeholder="Message..." required></textarea>
                            </div>
                            
                            {status === 'Success' ? (
                                <div className="btn submit-btn" style={{backgroundColor: '#10b981', color: 'white', display: 'flex', justifyContent: 'center', gap: '8px', cursor: 'default'}}>
                                    Message Sent! <CheckCircle2 size={18} />
                                </div>
                            ) : status === 'Error' ? (
                                <div className="btn submit-btn" style={{backgroundColor: '#ef4444', color: 'white', display: 'flex', justifyContent: 'center', gap: '8px', cursor: 'default'}}>
                                    Failed to Send <AlertCircle size={18} />
                                </div>
                            ) : (
                                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'Sending...'}>
                                    {status === 'Sending...' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
