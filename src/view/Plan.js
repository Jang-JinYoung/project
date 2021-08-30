import React, {useState} from "react";
import GoogleApiWrapper from "./Map";
import "../css/plan.css";
import Calendar from "./Calendar";

const Plan = () => {

    const [elem, setElem] = useState([]);

    function showCalendar() {
        var calendar = document.getElementById("calendar");

        if(calendar.style.display === "block") {
            calendar.style.display = "none";
        } else {
            calendar.style.display = "block";
        }
    }

    const selectDate = (d) => {

        var date1 = document.getElementById(d);
        setElem([...elem, d]);
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
                    {elem.map(e => <div key={e}>{e}</div>)}
                </div>
            </div>
            <div className="map">
                <GoogleApiWrapper width="100%" height="100%"/>
            </div>
        </div>
    );
};

export default Plan;