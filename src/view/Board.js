import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styled from "styled-components";

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
                    <tr key={e} stlye={{height: "60px"}}>
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

    //css
    const Content = styled.div`
        position: relative;
        width: 100%;
        height: 1000px;
        // top: 100px;
        background-color : #F5F6F7;
    `;

    const Board = styled.div`
        // width: 750px;
        // height: 1000px;
        // align: center;
        margin: 0 auto;
        padding-top: 250px;
    `;

    const SelectNav = styled.div`
        // display: flex;
        // justify-content: space-around;
    `;

    const CountrySelect = styled.select`
        width: 100px;
        height: 30px;
    `;

    const ButtonSelect = styled.button`
        width: 100px;
        height: 50px;
    `;

    const BoardTable = styled.table`
        
    `;

    const BoardButton = styled.div`
        display: flex;
        flex-direction: row-reverse;
        width:100px;
    `;

    const CreateButton = styled.button`
        width: 50px
    `;

    return (
        <Content>
            <Header/>
            <Board>
                <SelectNav>
                    <CountrySelect onChange={(e) => clickSelect(e)} select={select}>
                        <option value="전체">전체</option>
                        {getOptions()}
                    </CountrySelect>
                    <ButtonSelect onClick={test}>검색</ButtonSelect>
                </SelectNav>
                <BoardTable>
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
                    </tbody>
                </BoardTable>
                <BoardButton>
                    <CreateButton>작성</CreateButton>
                </BoardButton>
            </Board>
        </Content>
    );
};

export default Board;