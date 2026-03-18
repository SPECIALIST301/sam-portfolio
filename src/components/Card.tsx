import React from 'react';
import './Card.css';

interface CardProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, icon, children, className = '' }) => {
    return (
        <div className={`card ${className}`}>
            {icon && <div className="card-icon">{icon}</div>}
            <h3 className="card-title">{title}</h3>
            {description && <p className="card-description">{description}</p>}
            {children && <div className="card-content">{children}</div>}
        </div>
    );
};
