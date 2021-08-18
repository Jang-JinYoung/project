import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div class="wrapper">
                <h1><a href="/">Logo</a></h1>
                <nav>
                    <ul class="menu">
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Home</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;