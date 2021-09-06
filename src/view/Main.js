import React, {useEffect, useState} from 'react';
import GoogleApiWrapper from "./Map";
import  "../css/main.css";
import '../css/section.css';

const Main = () => {

    const [country, setCountry] = useState({});
    // const {country_kr, country_eng, image_path} = country;

    useEffect(() => {
        fetch('http://localhost:3001/api/main/country')
            .then(res=>res.json())
            .then(data=> {
                setCountry(data[0]);
            });
    }, []);

    function moveLogin() {
        document.location.href="/login";
    }

    function  moveSignUp() {
        // document.location.href="/signup";
        console.log(country);
    }


    return (
        <div className="content">
            <table className = "tblCountryInfo">
                <thead>
                    <tr>
                        <td className="tdRecommend" colSpan="2">오늘의 여행지 <strong>{country.country_kr}</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tdMap" colSpan="2">
                            <div className="map">
                                <GoogleApiWrapper width="100%" height="100%" country={country}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tdInfo1" rowSpan="2">
                            <img src={country.image_path} alt="flag"/>
                        </td>
                        <td className="tdInfo2" colSpan="2">
                            <div>{country.continent}</div>
                            <div>{country.country_eng}</div>
                            <div>수도 : {country.capital}</div>
                            <div>언어 : {country.language}</div>
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
                <div><button type="button" className="btn2" onClick={moveSignUp}>2</button></div>
            </div>
        </div>
    );
};

export default Main;