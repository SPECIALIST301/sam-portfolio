import React from 'react';
import './FeaturedProjects.css';
import { Card } from '../components/Card';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import sysInfoImg from '../assets/projects/system_information_config_1773864414783.png';
import netDbDevImg from '../assets/projects/networking_database_software_1773864434724.png';
import cyberSecImg from '../assets/projects/cybersecurity_protection_1773864488900.png';
import ictSupportImg from '../assets/projects/ict_support_troubleshooting_1773864574577.png';
import cloudComputingImg from '../assets/projects/cloud_computing_1773864643194.png';

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: { github?: string; live?: string };
};

const projects: Project[] = [
    {
        title: 'System Information and Configuration',
        description: 'Designed and implemented robust system configurations for enterprise networks, ensuring optimal hardware efficiency, and system reliability.',
        image: sysInfoImg,
        tags: ['SysAdmin', 'Hardware', 'Configuration'],
        links: {}
    },
    {
        title: 'Networking, Database & Software Dev',
        description: 'Developed scalable database solutions integrated with secure networking protocols to support high-availability operations and robust software architecture.',
        image: netDbDevImg,
        tags: ['Networking', 'Database', 'Databases'],
        links: {}
    },
    {
        title: 'Cybersecurity and System Protection',
        description: 'Deployed advanced cybersecurity measures including intrusion detection systems, robust firewalls, and deep data encryption layers to protect organizational assets.',
        image: cyberSecImg,
        tags: ['Cybersecurity', 'Security', 'Defense'],
        links: {}
    },
    {
        title: 'ICT Support and Troubleshooting',
        description: 'Provided comprehensive ICT support, rapid issue resolution, and precise hardware diagnostics, drastically reducing system downtime and improving workflows.',
        image: ictSupportImg,
        tags: ['ICT Support', 'Diagnostics', 'Troubleshooting'],
        links: {}
    },
    {
        title: 'Cloud Computing',
        description: 'Architected and migrated legacy systems into modern cloud computing environments, leveraging advanced virtualization to scale infrastructure efficiently.',
        image: cloudComputingImg,
        tags: ['Cloud', 'Virtualization', 'Infrastructure'],
        links: {}
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
