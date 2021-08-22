import React from "react";
import GoogleApiWrapper from "./Map";
import "../css/plan.css";
import Calendar from "./Calendar";

const Plan = () => {

    function onclick(e) {

        var calendar = document.getElementById("calendar");

        if(calendar.style.display === "block") {
            calendar.style.display = "none";
        } else {
            calendar.style.display = "block";
        }
    }

    return (
        <section>
            <div className="search">
                <div className="selectDate">
                    <div>
                        <p onClick={onclick}>날짜선택</p>
                    </div>
                    <div id="calendar" className="calendar" onClick={onclick}>
                        <Calendar/>
                    </div>
                </div>
                <div className="plan">
                    asdasd
                </div>
            </div>
            <div className="map">
                <GoogleApiWrapper width="100%" height="100%"/>
            </div>
        </section>
    );
};

export default Plan;