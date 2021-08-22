import React from "react";
import GoogleApiWrapper from "./Map";
import "../css/plan.css";

const Plan = () => {
    return (
        <section>
            <div className="search">
                검색 <input type="text"/>
            </div>
            <div className="map">
                <GoogleApiWrapper width="100%" height="100%"/>
            </div>
        </section>
    );
};

export default Plan;