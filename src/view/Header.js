import React from 'react';
import '../css/header.css';
import Main from "./Header";
import { Route } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div class="wrapper">
                <h1><a href="/">Logo</a></h1>
                <nav>
                    <ul class="menu">
                        <li><a href='/about'>About</a></li>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Home</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;