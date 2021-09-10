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
        width: 100%;
        height: 1000px;
        top: 50px;
        display: flex;
        justify-content: center;
    `;

const CountryInfo = styled.table`
        border-collapse:collapse;
        margin-top: 50px;
        width: 1000px;
        height: 600px;
    `

const Recommend = styled.td`
        border:1px solid black;
        height: 30px;
    `;

const TdMap = styled.td`
        margin: 0;
        position: relative;
        border:1px solid black;
        height: 170px;
    `;

const DivMap = styled.div`
        position: relative;
        margin: 0;
        width: 100%;
        height: 100%;
    `;

const TdCountryFlag = styled.td`
        border:1px solid black;
        width: 150px;
        height: 150px;
    `;

const TdCountryInfo = styled.td`
        border:1px solid black;
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
                                </TdCountryFlag>
                                <TdCountryInfo>
                                    <div>{country[0].continent}</div>
                                    <div>{country[0].country_eng}</div>
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