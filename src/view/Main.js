import React, {useEffect, useState} from 'react';
import GoogleApiWrapper from "./Map";
import  "../css/main.css";
import '../css/section.css';
import Header from "./Header";
import styled from "styled-components";
const api = require("../api");

//css
const Content = styled.div`
        position: relative;
        top: 55px;
        width: 100%;
        height: 820px;
        background-color: #EAECED;
        display: flex;
        justify-content: center;
    `;

const CountryInfo = styled.table`
        border-collapse:collapse;
        border: 1px solid #9FA8AF;
        margin-top: 50px;
        width: 1000px;
        height: 600px;
    `

const Recommend = styled.td`
        // border-top:1px solid black;
        // border-left:1px solid black;
        // border-right:1px solid black;
        height: 30px;
        text-align: center;
    `;

const TdMap = styled.td`
        position: relative;
        height: 180px;
    `;

const DivMap = styled.div`
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 100%;
    `;

const TdCountryFlag = styled.td`
        border-right:1px solid #9FA8AF;
        width: 300px;
        // height: 150px;
        text-align: center;
    `;

const TdCountryInfo = styled.td`
        background-color: white;
    `;



const Main = () => {

    const [country, setCountry] = useState([]);

    useEffect( () => {
        fetch(api.serverAPI+"/main/country")
            .then(res=>res.json())
            .then(data=> {
                setCountry(data);
            });
    }, []);


    function moveLogin() {
        document.location.href="/login";
    }

    function  moveSignUp() {
        // document.location.href="/signup";
        if(country)
            console.log(country[0]);
    }

    if(country[0]) {
        return (
            <div>
                <Header/>
                <Content>
                    <CountryInfo>
                        <thead>
                        <tr>
                            <Recommend colSpan="2">&lt;오늘의 여행지&gt; <strong>{country[0].country_kr}</strong></Recommend>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TdMap rowSpan="2" colSpan="2">
                                    <DivMap>
                                        <GoogleApiWrapper width="100%" height="100%" country={country}/>
                                    </DivMap>
                                </TdMap>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <TdCountryFlag>
                                    <img src={country[0].image_path}  alt="flag"/>
                                    <div><strong>{country[0].country_kr}</strong></div>
                                    <div style={{color: "#a0a0a0"}}>{country[0].country_eng}</div>
                                </TdCountryFlag>
                                <TdCountryInfo>
                                    <div>{country[0].continent}</div>
                                    <div>수도 : {country[0].capital}</div>
                                    <div>언어 : {country[0].language}</div>
                                </TdCountryInfo>
                            </tr>
                        </tbody>
                    </CountryInfo>
                </Content>
            </div>
        );
    } else
        return <div>loading</div>

};

export default Main;