import React from 'react'
import ReactDom from 'react-dom';
import About from './About'
import "../css/section.css"


const Section = (props) => {
    console.log(props);
    return(
        <section>
            <About></About>
        </section>
    );
}

export default Section;