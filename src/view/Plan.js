import React from "react";
import GoogleApiWrapper from "./Map";
import "../css/plan.css";
import Calendar from "./Calendar";

const Plan = () => {

    let result = [];

    function showCalendar() {
        var calendar = document.getElementById("calendar");

        if(calendar.style.display === "block") {
            calendar.style.display = "none";
        } else {
            calendar.style.display = "block";
        }
    }

    const appendPlan = () => {
        // console.log(result);
        return result;
    }

    const selectDate = (d) => {
        result.push(d);

        var date1 = document.getElementsByClassName(d);

        date1[0].style.backgroundColor = "black";
        console.log(result);
    }

    return (
        <div className="container">
            <div className="search">
                <div className="selectDate">
                    <div>
                        <p onClick={showCalendar}>날짜선택</p>
                    </div>
                    <div id="calendar" className="calendar">
                        <Calendar function={selectDate}/>
                    </div>
                </div>
                <div className="plan">
                    {appendPlan()}
                </div>
            </div>
            <div className="map">
                <GoogleApiWrapper width="100%" height="100%"/>
            </div>
        </div>
    );
};

export default Plan;