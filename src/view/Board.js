import React, {useEffect, useState} from 'react';

const Board = () => {

    const [board, setBoard] = useState([]);
    const [options, setOptions] = useState([]);
    const [select, setSelect] = useState("전체");

    useEffect(() => {
        fetch('http://localhost:3001/api/board/select')
            .then(res=>res.json())
            .then(data=> {
                setOptions(data);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/board/')
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                setBoard(data);
            });
    }, []);

    function getOptions() {

        let result = [];
        if(options) {
            options.map(e => {
                result = result.concat(<option key={e.id} value={e.country_kr}>{e.country_kr}</option>);
            })
        } else {
            result = result.concat(<div>loading</div>);
        }

        return result;
    }

    const clickSelect = (e) => {
        setSelect(e.target.value);
    }

    function test() {
        const url = "http://localhost:3001/api/board?country="+select;
        console.log(url);
        fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                setBoard(data);
            });
    }

    function getBoards() {
        let result = [];
        if(board) {
            board.map(e => {
                // console.log(e);
                result = result.concat(
                    <tr key={e}>
                        <td key={e.id}>{e.id}</td>
                        <td key={e.title}>{e.title}</td>
                        <td key={e.writer}>{e.writer}</td>
                        <td key={e.writeDate}>{e.writeDate}</td>
                    </tr>
                );
            })
        } else {
            result = result.concat(<div>loading</div>);
        }
        return result;
    }

    return (
        <div className="container">
            <select onChange={(e) => clickSelect(e)} select={select} >
                <option value="전체">전체</option>
                {getOptions()}
            </select>
            <button onClick={test}>asdasdasdasdasd</button>
            <table className="tblCountryInfo">
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성날짜</td>
                    </tr>
                </thead>
                <tbody>
                    {getBoards()}
            {/*        <tr>*/}
            {/*            <td>1</td>*/}
            {/*            <td>여행 동행하실분 구합니다</td>*/}
            {/*            <td>홍길동</td>*/}
            {/*            <td>2019-09-09</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td>3</td>*/}
            {/*            <td>여행 동행하실분 구합니다</td>*/}
            {/*            <td>홍길동</td>*/}
            {/*            <td>2019-09-09</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td>4</td>*/}
            {/*            <td>여행 동행하실분 구합니다</td>*/}
            {/*            <td>홍길동</td>*/}
            {/*            <td>2019-09-09</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td>5</td>*/}
            {/*            <td>여행 동행하실분 구합니다</td>*/}
            {/*            <td>홍길동</td>*/}
            {/*            <td>2019-09-09</td>*/}
            {/*        </tr>*/}
                    <tr>
                        <td>1</td>
                        <td>여행 동행하실분 구합니다</td>
                        <td>홍길동</td>
                        <td>2019-09-09</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Board;