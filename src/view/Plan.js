import React, {useEffect, useState} from "react";
import GoogleApiWrapper from "./Map";
import Calendar from "./Calendar";
import API from "../api";
import styled from "styled-components";
import Header from "./Header/Header";


const ContentDiv = styled.div`
    position: relative;
    display: flex;
    height: 930px;
    background-color: #F5F6F7;
`;

const SearchDiv = styled.div`
    position: relative;
    /*top: 100px;*/
    width: 30vh;
    border: 1px solid black;
    height: 90vh;
}
`;

const PlanDiv = styled.div`
    border-bottom: 1px solid black;
    background-color: #DEE7EE;
    height: 40px;
`;

const SelectDateDiv = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 5%;
`;

const BeginCalendarDiv = styled.div`
    margin-left: 40px;
    margin-bottom : 100px;
`;

const EndCalendarDiv = styled.div`
    margin-left: 40px;
    margin-bottom : 100px;
`;

const MapDiv = styled.div`
    // height: 42.5%;
    width: 85%;
`;

const Plan = () => {

    const [elem, setElem] = useState([]);
    const [country, setCountry] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        fetch(API.serverAPI+"/plan/countries")
            .then(res=>res.json())
            .then(data=> {
                setCountry(data);
            });
    }, []);

    //달력 출력
    const onClickShowBeginCalendar = () => {
        if(showCalendar) {
            setShowCalendar(false);
        } else {
            setShowCalendar(true);
        }
    }

    const onClickShowEndCalendar = () => {
        if(showCalendar) {
            setShowCalendar(false);
        } else {
            setShowCalendar(true);
        }
    }

    //날짜 선택
    const selectDate = (m, d) => {
        let planDate = m + d;
        var date = document.getElementsByName(planDate);
        // date[0].style.backgroundColor = 'red';
    }

    if(country[0]) {
        return (
            <div>
                <Header/>
                <ContentDiv>
                    <SearchDiv>
                        <SelectDateDiv>
                            <p onClick={onClickShowBeginCalendar}>날짜선택</p>
                            <BeginCalendarDiv>
                                {showCalendar ? <Calendar function={selectDate} /> : null}
                            </BeginCalendarDiv>
                            <EndCalendarDiv>
                                {showCalendar ? <Calendar function={selectDate} /> : null}
                            </EndCalendarDiv>
                        </SelectDateDiv>
                        <div className="plan">
                            {elem.map(e => <PlanDiv key={e}>{e}</PlanDiv>)}
                        </div>
                    </SearchDiv>
                    <MapDiv>
                        <GoogleApiWrapper width="100%" height="100%" country={country}/>
                    </MapDiv>
                </ContentDiv>
            </div>
        );
    } else
        return <div>loading</div>
};

export default Plan;