import React from 'react';
import GoogleApiWrapper from "./Map";
import  "../css/main.css";
import '../css/section.css';
import image from "../images/82.png";

const Main = () => {
    return (
        <section>
            <table class = "tbl">
                <tr>
                    <td class="tdRecommend" colSpan="2">오늘의 여행지 <strong>대한민국</strong></td>
                </tr>
                <tr>
                    <td class="tdMap" colSpan="2">
                        <div class="map">
                            <GoogleApiWrapper width="100%" height="100%"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="tdInfo1" rowSpan="2">
                        <img class="image" src={image} alt="국기"/>
                    </td>
                    <td class="tdInfo2" colSpan="2">
                        <div>나라</div>
                        <div>나라</div>
                        <div>나라</div>
                    </td>
                </tr>
            </table>
        </section>
    );
};

//<td>인구 : 1003만</td>
// <td>종교 : 천주교, 불교, 기독교</td>

export default Main;