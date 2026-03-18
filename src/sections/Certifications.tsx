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
                            </ul>
                        </div>

                        <div className="cert-column">
                            <h3>Software Tools</h3>
                            <ul>
                                <li><span>•</span> Active Directory</li>
                                <li><span>•</span> VMware & Hyper-V</li>
                                <li><span>•</span> TeamViewer</li>
                                <li><span>•</span> Wireshark</li>
                                <li><span>•</span> Ticketing Systems</li>
                            </ul>
                        </div>

                        <div className="cert-column">
                            <h3>Specializations</h3>
                            <ul>
                                <li><span>•</span> Disaster Recovery</li>
                                <li><span>•</span> System Automation</li>
                                <li><span>•</span> IT Asset Management</li>
                                <li><span>•</span> Performance Optimization</li>
                                <li><span>•</span> Vendor Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
