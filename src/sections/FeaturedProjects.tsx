import React from 'react';
import './FeaturedProjects.css';
import { Card } from '../components/Card';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
    {
        title: 'Enterprise Network Overhaul',
        description: 'Redesigned and implemented a complete network infrastructure for a 200+ employee company, improving speed by 300% and enhancing security protocols.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        tags: ['Networking', 'Infrastructure', 'Security'],
        links: { github: '#', live: '#' }
    },
    {
        title: 'Server Migration & Virtualization',
        description: 'Led migration of physical servers to VMware virtualized environment, reducing costs by 40% and improving system reliability and backup capabilities.',
        image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=800',
        tags: ['Virtualization', 'Server', 'Cloud'],
        links: { live: '#' }
    }
];

const FeaturedProjects: React.FC = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="projects" className="section bg-white projects-section">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header text-center mb-12 animate-on-scroll fade-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2>Featured Projects</h2>
                    <p className="subtitle">Some of my recent work and technical accomplishments</p>
                </div>

                <div className="projects-grid" ref={gridRef}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`animate-on-scroll fade-up delay-${(index + 1) * 200} ${gridVisible ? 'is-visible' : ''}`}
                        >
                            <Card className="project-card" title="">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-links">
                                        {project.links.github && (
                                            <a href={project.links.github} className="project-link">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.links.live && (
                                            <a href={project.links.live} className="project-link">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
