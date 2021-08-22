import React from 'react';
import '../css/about.css';
import '../css/section.css'
import Calendar from "./Calendar";

const About = () => {

    function onclick(e) {

        var calendar = document.getElementById("calendar");

        calendar.style.display = "block";
    }
    return (
        <section>
            <div id="calendar" className="calendar" onClick={onclick}>
                <Calendar/>
            </div>
        </section>
    );
};

export default About;
