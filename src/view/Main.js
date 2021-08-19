import React from 'react';
import GoogleApiWrapper from "./Map";
import  "../css/main.css"
import '../css/section.css'

const Main = () => {
    return (
        <section>
            <table class = "tbl">
                <tr>
                    <th colSpan="4">오늘의 여행지</th>
                </tr>
                <tr>
                    {/*<td class="tdMap" rowSpan="5"><GoogleApiWrapper width="25%" height="50%"/></td>*/}
                    <td class="tdMap" colSpan="4">
                        <div class="map">
                            <GoogleApiWrapper width="100%" height="100%"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>수도 : 서울</td>
                    <td colSpan="3">수도 : 서울</td>
                </tr>
                <tr>
                    <td>언어 : 한국어</td>
                    <td colSpan="3">수도 : 서울</td>
                </tr>
            </table>
        </section>
    );
};

//<td>인구 : 1003만</td>
// <td>종교 : 천주교, 불교, 기독교</td>

export default Main;