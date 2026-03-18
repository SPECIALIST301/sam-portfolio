import React from 'react';
import './TechnicalSkills.css';
import { Card } from '../components/Card';
import { HardDrive, Network, Monitor, Shield, Palette, Terminal } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skillsData = [
    {
        icon: <HardDrive size={24} />,
        title: 'Hardware Support',
        items: [
            'PC/Laptop Repair & Maintenance',
            'Hardware Troubleshooting',
            'Component Upgrades',
            'Peripheral Configuration'
        ]
    },
    {
        icon: <Network size={24} />,
        title: 'Network Administration',
        items: [
            'LAN/WAN Configuration',
            'Router & Switch Setup',
            'Network Security',
            'VPN Implementation'
        ]
    },
    {
        icon: <Monitor size={24} />,
        title: 'Operating Systems',
        items: [
            'Windows Server',
            'Linux (Ubuntu, CentOS)',
            'macOS Support',
            'System Migration'
        ]
    },
    {
        icon: <Shield size={24} />,
        title: 'Cybersecurity',
        items: [
            'Firewall Configuration',
            'Antivirus Management',
            'Security Audits',
            'Data Backup Solutions'
        ]
    },
    {
        icon: <Palette size={24} />,
        title: 'Graphic Design',
        items: [
            'Adobe Creative Suite (Photoshop, Illustrator)',
            'UI/UX Design',
            'Figma & Prototyping',
            'Brand Identity & Layout'
        ]
    },
    {
        icon: <Terminal size={24} />,
        title: 'Technical Support',
        items: [
            'Remote Support',
            'Help Desk Management',
            'User Training',
            'Documentation'
        ]
    }
];

const TechnicalSkills: React.FC = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header text-center mb-12 animate-on-scroll fade-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2>Technical Skills</h2>
                    <p className="subtitle">Comprehensive IT expertise across multiple domains</p>
                </div>

                <div className="skills-grid" ref={gridRef}>
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className={`animate-on-scroll fade-up delay-${(index % 3 + 1) * 100} ${gridVisible ? 'is-visible' : ''}`}
                        >
                            <Card title={skill.title} icon={skill.icon} className="skill-card">
                                <ul className="skill-list">
                                    {skill.items.map((item, idx) => (
                                        <li key={idx} className="skill-item">
                                            <span className="bullet"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
