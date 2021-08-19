import React from 'react';
import GoogleApiWrapper from "./Map";
import  "../css/main.css"
import '../css/section.css'

const Main = () => {
    return (
        <section>
            <table class = "tbl">
                <tr>
                    <th colSpan="2">오늘의 여행지</th>
                </tr>
                <tr>
                    <td class="tdMap" rowSpan="5"><GoogleApiWrapper width="25%" height="50%"/></td>
                    <td>대한민국 (Republic of Korea)</td>
                </tr>
                <tr>
                    <td>수도 : 서울</td>
                </tr>
                <tr>
                    <td>언어 : 한국어</td>
                </tr>
                <tr>
                    <td>인구 : 1003만</td>
                </tr>
                <tr>
                    <td>종교 : 천주교, 불교, 기독교</td>
                </tr>
            </table>
        </section>
    );
};

export default Main;