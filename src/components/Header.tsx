import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header glass">
            <div className="container header-content">
                <a href="#" className="logo">SAMUEL MULI</a>

                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
