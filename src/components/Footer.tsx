import React from 'react';
import './Footer.css';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3>Samuel Muli</h3>
                    <p>IT Technician & Tech Specialist</p>
                </div>

                <div className="footer-socials">
                    <a href="#" aria-label="LinkedIn" className="social-icon"><Linkedin size={20} /></a>
                    <a href="#" aria-label="GitHub" className="social-icon"><Github size={20} /></a>
                    <a href="#" aria-label="Email" className="social-icon"><Mail size={20} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Samuel Muli. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
