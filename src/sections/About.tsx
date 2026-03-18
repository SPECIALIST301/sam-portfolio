import React from 'react';
import './About.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [textRef, textVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [imgRef, imgVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="about" className="section bg-white about-section">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header text-center mb-12 animate-on-scroll fade-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2>About Me</h2>
                    <p className="subtitle">Learn more about my background and expertise</p>
                </div>

                <div className="about-grid grid">
                    <div
                        ref={textRef}
                        className={`about-text animate-on-scroll fade-right delay-200 ${textVisible ? 'is-visible' : ''}`}
                    >
                        <p>
                            I'm a passionate IT technician with extensive experience in maintaining,
                            troubleshooting, and optimizing computer systems and networks. My
                            expertise spans from hardware repairs to network administration, ensuring
                            seamless technical operations for businesses and individuals.
                        </p>
                        <p>
                            With a strong foundation in both traditional IT support and emerging
                            technologies, I pride myself on staying current with industry trends and
                            continuously expanding my skill set. I believe in providing not just solutions,
                            but also educating users to prevent future issues.
                        </p>
                        <p>
                            My approach combines technical excellence with clear communication,
                            ensuring that complex technical concepts are accessible to all stakeholders.
                        </p>
                    </div>

                    <div
                        ref={imgRef}
                        className={`about-image-container animate-on-scroll fade-left delay-400 ${imgVisible ? 'is-visible' : ''}`}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
                            alt="Network Server Room"
                            className="about-image glass"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
