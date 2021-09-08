import React, {useEffect, useState} from "react";
import GoogleApiWrapper from "./Map";
import "../css/plan.css";
import Calendar from "./Calendar";

const Plan = () => {

    const [elem, setElem] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const result = fetch('http://localhost:3001/api/plan/countries')
            .then(res=>res.json())
            .then(data=> {
                console.log(country);
                setCountry(data);
            });

        console.log(country);

    }, []);


    function showCalendar() {
        var calendar = document.getElementById("calendar");

        if(calendar.style.display === "block") {
            calendar.style.display = "none";
        } else {
            calendar.style.display = "block";
        }
    }

    const selectDate = (d) => {

        // var date1 = document.getElementById(d);
        setElem([...elem, d]);
    }

    if(country[0]) {
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
                    <GoogleApiWrapper width="100%" height="100%" country={country}/>
                </div>
            </div>
        );
    } else
        return <div>loading</div>
};

export default Plan;