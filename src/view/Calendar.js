import { useState} from 'react';
import styled from "styled-components";
import moment from 'moment';
import "../css/calendar.css";



const DateTd = styled.td`
    width: 30px;
    height: 30px;
`;


const Calendar = (props) => {

    //비구조화활당
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;

    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    //달력 요일 만드는 함수
    const calendarArr=()=>{
        let result = [];
        for (let week = firstWeek; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){// 해당 월, 일
                                return(
                                    <DateTd
                                        key={index} style={{backgroundColor:'red'}}
                                        name={days.format('MMDD')}
                                        id={days.format('D')}
                                        onClick={e => props.function(days.format('MM'), days.format('DD'))}
                                    >
                                        {days.format('D')}
                                    </DateTd>
                                );
                            }else if(days.format('MM') !== today.format('MM')){//해당 월
                                return(
                                    <DateTd key={index} style={{backgroundColor:'gray'}}
                                        name={days.format('MMDD')}
                                        id={days.format('D')}
                                        onClick={e => props.function(days.format('MM'),days.format('DD'))}
                                    >
                                        {days.format('D')}
                                    </DateTd>
                                );
                            }else{
                                if(moment().format('YYYYMMDD') > days.format('YYYYMMDD')) {//지난날은 선택불가
                                    return(
                                        <DateTd key={index}
                                            name={days.format('MMDD')}
                                            style={{backgroundColor:'black'}}
                                            id={days.format('D')}
                                        >
                                            {days.format('D')}
                                        </DateTd>
                                    );
                                }
                                else {
                                    return(
                                        <DateTd key={index}
                                            name={days.format('MMDD')}
                                            id={days.format('D')}
                                            onClick={e => props.function(days.format('MM'), days.format('DD'))}
                                        >
                                            {days.format('D')}
                                        </DateTd>
                                    );
                                }
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }
    
    return (
        <div id="calendar" >
            <div id="date">
                <button onClick={() => setMoment(getMoment.clone().subtract(1, 'month'))}> prev </button>
                <span> {today.format('YYYY년 MM월')}</span>
                <button onClick={() => setMoment(getMoment.clone().add(1, 'month'))}> next </button>
            </div>
            <table id="dateTable">
                <thead>
                    <tr>
                        <DateTd>월</DateTd>
                        <DateTd>화</DateTd>
                        <DateTd>수</DateTd>
                        <DateTd>목</DateTd>
                        <DateTd>금</DateTd>
                        <DateTd>토</DateTd>
                        <DateTd>일</DateTd>
                    </tr>
                </thead>
                <tbody>
                    {calendarArr()}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;