import React from 'react';
import './Hero.css';
import { ArrowRight, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
    const [ref1, isVisible1] = useIntersectionObserver();
    const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container grid">
                <div
                    ref={ref1}
                    className={`hero-content animate-on-scroll fade-up ${isVisible1 ? 'is-visible' : ''}`}
                >
                    <p className="greeting text-accent">Welcome to my portfolio</p>
                    <h1 className="hero-title">
                        <span className="block">SAMUEL MULI</span>
                        IT Technician
                        <span className="subtitle block">& Tech Specialist</span>
                    </h1>
                    <p className="hero-description">
                        Dedicated IT professional with expertise in hardware, software,
                        networking, and technical support. I solve complex technical
                        challenges and keep systems running smoothly.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me <Mail size={18} />
                        </a>
                    </div>
                </div>
                <div
                    ref={ref2}
                    className={`hero-image-container animate-on-scroll fade-left delay-200 ${isVisible2 ? 'is-visible' : ''}`}
                >
                    <div className="glass image-wrapper">
                        {/* Replace with actual image when available */}
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Tech Setup" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
