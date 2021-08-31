import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const login = () => {

        const id = window.sessionStorage.id;

        if(!id) {
            console.log("컴");
            return null;
        } else {
            console.log("웰");
            return <div>환영합니다</div>;
        }
        
    }

    return (
        <header>
            <div className="wrapper">
                <h1><a href="/">Trip Planner</a></h1>
                {login()}
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