import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1><a href="/">Trip Planner</a></h1>
                <nav>
                    <ul className="menu">
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/map">Map</Link></li>
                        <li><Link to="/plan">Plan</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;