import React from 'react';
import './Stats.css';
import { Card } from '../components/Card';
import { Clock, Users, CheckCircle, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const statsData = [
    { icon: <Clock size={24} />, number: '2+', label: 'Years Experience' },
    { icon: <Users size={24} />, number: '20+', label: 'Clients Served' },
    { icon: <CheckCircle size={24} />, number: '5+', label: 'Projects Completed' },
    { icon: <Award size={24} />, number: '5', label: 'Certifications' }
];

const Stats: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="section stats-section">
            <div className="container">
                <div className="stats-grid" ref={ref}>
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`animate-on-scroll zoom-in delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
                        >
                            <Card className="stat-card" title="">
                                <div className="stat-icon-wrapper">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
