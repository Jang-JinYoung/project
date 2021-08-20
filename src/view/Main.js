import React from 'react';
import GoogleApiWrapper from "./Map";
import  "../css/main.css";
import '../css/section.css';
import image from "../images/82.png";

const Main = () => {
    function moveLogin() {
        document.location.href="/login";
    }
    return (
        <section>
            <div className="content">
                <table className = "tbl">
                    <thead>
                        <tr>
                            <td className="tdRecommend" colSpan="2">오늘의 여행지 <strong>대한민국</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tdMap" colSpan="2">
                                <div className="map">
                                    <GoogleApiWrapper width="100%" height="100%"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdInfo1" rowSpan="2">
                                <img className="image" src={image} alt="국기"/>
                            </td>
                            <td className="tdInfo2" colSpan="2">
                                <div>Republic of Korea</div>
                                <div>수도 : 서울</div>
                                <div>언어 : 한국어</div>
                                <div>인구 : 5,182만 1,669명</div>
                                <div>종교 : 천주교, 기독교, 불교</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="content2">
                    <div>지금 회원가입하고 여행계획을 세워요!</div>
                    <div>
                        <button type="button" className="btn1" onClick={moveLogin}>1</button>
                    </div>
                    <div>이미 회원이신가요? 로그인해서 미뤄둔 계획을 세워볼까요?</div>
                    <div><button type="button" className="btn2">2</button></div>
                </div>
            </div>
        </section>
    );
};

//<td>인구 : 1003만</td>
// <td>종교 : 천주교, 불교, 기독교</td>

export default Main;