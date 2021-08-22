import {useState} from 'react';
import moment from 'moment';
import "../css/calendar.css";

const Calendar = () => {

    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;

    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendarArr=()=>{

        let result = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                return(
                                    <td key={index} style={{backgroundColor:'red'}} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }else if(days.format('MM') !== today.format('MM')){
                                return(
                                    <td key={index} style={{backgroundColor:'gray'}} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }else{
                                return(
                                    <td key={index}  >
                                        <span>{days.format('D')}</span>
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
        // <section>
        <div id="calendar">
            <div id="date">
                <button onClick={() => setMoment(getMoment.clone().subtract(1, 'month'))}> prev </button>
                <sapn> {today.format('YYYY년 MM월')}</sapn>
                <button onClick={() => setMoment(getMoment.clone().add(1, 'month'))}> next </button>
            </div>
            <table id="dateTable">
                <thead>
                    <tr>
                        <td>월</td>
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
        // </section>
    );
}

export default Calendar;