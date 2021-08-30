import { useState} from 'react';
import moment from 'moment';
import "../css/calendar.css";

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

                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                return(
                                    <td
                                        key={index} style={{backgroundColor:'red'}}
                                        id={days.format('D')}
                                        onClick={e => props.function(days.format('D'))}
                                    >
                                        {days.format('D')}
                                    </td>
                                );
                            }else if(days.format('MM') !== today.format('MM')){
                                return(
                                    <td key={index} style={{backgroundColor:'gray'}}
                                        id={days.format('D')}
                                        onClick={e => props.function(days.format('D'))}
                                    >
                                        {days.format('D')}
                                    </td>
                                );
                            }else{
                                return(
                                    <td key={index}
                                        id={days.format('D')}
                                        onClick={e => props.function(days.format('D'))}
                                    >
                                        {days.format('D')}
                                    </td>
                                );
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }
    
    return (
        <div id="calendar">
            <div id="date">
                <button onClick={() => setMoment(getMoment.clone().subtract(1, 'month'))}> prev </button>
                <span> {today.format('YYYY년 MM월')}</span>
                <button onClick={() => setMoment(getMoment.clone().add(1, 'month'))}> next </button>
            </div>
            <table id="dateTable">
                <thead>
                    <tr>
                        <td onClick={e => props.function("asd")}>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                        <td>일</td>
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