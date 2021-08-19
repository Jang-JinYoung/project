import React from 'react';
import '../css/about.css';
import '../css/section.css'

const api = require("../api");


const About = () => {
    console.log(api.googleAPI);
    return (
        <section>
            About Page
        </section>
    );
};

export default About;
