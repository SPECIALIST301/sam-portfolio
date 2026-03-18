import React from 'react';
import './Certifications.css';

const Certifications: React.FC = () => {
    return (
        <section className="section cert-section">
            <div className="container">
                <div className="cert-card glass">
                    <div className="cert-header text-center mb-8">
                        <h2>Certifications & Tools</h2>
                    </div>

                    <div className="cert-grid">
                        <div className="cert-column">
                            <h3>Certifications</h3>
                            <ul>
                                <li><span>•</span> CompTIA A+</li>
                                <li><span>•</span> CompTIA Network+</li>
                                <li><span>•</span> CompTIA Security+</li>
                                <li><span>•</span> Microsoft Certified Professional</li>
                                <li><span>•</span> Cisco CCNA</li>
                                <li><span>•</span> TVET/CDACC Diploma</li>
                                <li><span>•</span> Graphic Design</li>
                            </ul>
                        </div>

                        <div className="cert-column">
                            <h3>Software Tools</h3>
                            <ul>
                                <li><span>•</span> Operating systems & Utilities</li>
                                <li><span>•</span> Office & productivity</li>
                                <li><span>•</span> Networking & security</li>
                                <li><span>•</span> Diagnostic & troubleshooting</li>
                            </ul>
                        </div>

                        <div className="cert-column">
                            <h3>Specializations</h3>
                            <ul>
                                <li><span>•</span> Networking</li>
                                <li><span>•</span> Cybersecurity</li>
                                <li><span>•</span> System administration</li>
                                <li><span>•</span> Hardware repair</li>
                                <li><span>•</span> Cloud services</li>
                                <li><span>•</span> Technical support</li>
                                <li><span>•</span> Graphic Design and web development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
