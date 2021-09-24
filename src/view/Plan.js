import React, {useEffect, useState} from "react";
import GoogleApiWrapper from "./Map";
import "../css/plan.css";
import Calendar from "./Calendar";
import API from "../api";
import styled from "styled-components";
import Header from "./Header/Header";

const PlanDiv = styled.div`
    border: 1px solid black;
    background-color: #DEE7EE;
    height: 40px;
`;

const CalendarDiv = styled.div`
    width: 1000px;
    display: none;
    margin-left: 40px;
    z-index: 9999;
`;

const Plan = () => {

    const [elem, setElem] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(API.serverAPI+"/plan/countries")
            .then(res=>res.json())
            .then(data=> {
                setCountry(data);
            });

    }, []);


    function showCalendar() {
        var calendar = document.getElementById("calendar");

        if(calendar.style.display === "block") {
            calendar.style.display = "none";
        } else {
            calendar.style.display = "block";
        }

    }

    const selectDate = (m, d) => {
        // var date1 = document.getElementById(d);

        let planDate = m + d;

        var date = document.getElementsByName(planDate);

        date[0].style.backgroundColor = 'red';

        // setElem([...elem, planDate]);

        var calendar = document.getElementById("calendar");

        if(calendar.style.display === "block") {
            calendar.style.display = "none";
        } else {
            calendar.style.display = "block";
        }

    }

    const funcCalendar = () => {
        return <Calendar function={selectDate} />;
    }


    if(country[0]) {
        return (
            <div className="container">
                {/*<Header/>*/}
                <div className="search">
                    <div className="selectDate">
                        <div>
                            <p onClick={showCalendar}>날짜선택</p>
                        </div>
                        <CalendarDiv>
                            {funcCalendar()}
                        </CalendarDiv>
                    </div>
                    <div className="plan">
                        {elem.map(e => <PlanDiv key={e}>{e}</PlanDiv>)}
                    </div>
                </div>
                <div className="map">
                    <GoogleApiWrapper width="100%" height="100%" country={country}/>
                </div>
            </div>
        );
    } else
        return <div>loading</div>
};

export default Plan;