import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styled from "styled-components";
import api from "../api";
import uuid from "react-uuid"


//css
const Content = styled.div`
        position: relative;
        width: 100%;
        height: 760px;
        top: 55px;
        background-color : white;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

const BoardDiv = styled.div`
        width: 1000px;
        height: 600px;
        // display: flex;
        // flex-direction: column;
        // width: 1000px;
    `;

const SelectNav = styled.div`
        // width: 500px;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    `;

const CountrySelect = styled.select`
        width: 100px;
        height: 30px;
    `;

const ButtonSelect = styled.button`
        width: 60px;
        height: 30px;
    `;

const BoardTable = styled.table`
        border-collapse:collapse;
    `;

const Tr = styled.tr`
        &:hover {
            background: #F2F2F2;
        }
    `;

const IdTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 40px;
    height: 30px;
    text-align: center;
    `;
const TitleTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 600px;
    padding-left: 5px;
    `;
const WriterTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 100px;
    text-align: center;
    `;
const DateTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 220px;
    `;

const BoardButton = styled.div`
        display: flex;
        // flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;
        // flex-basis: 250px;
       
        width: 900px;
        padding-top: 10px;
    `;

const CreateButton = styled.button`
        width: 50px
    `;

const Board = () => {

    const [board, setBoard] = useState([]);
    const [options, setOptions] = useState([]);
    const [select, setSelect] = useState("전체");

    useEffect(() => {
        fetch(api.serverAPI+"/board/select")
            .then(res=>res.json())
            .then(data=> {
                setOptions(data);
            });
    }, []);

    useEffect(() => {
        fetch(api.serverAPI+"/board")
            .then(res=>res.json())
            .then(data=> {
                setBoard(data);
            });
    }, []);

    function getOptions() {

        let result = [];
        if(options) {
            for(let i=0; i<options.length; i++) {
                result = result.concat(<option key={options[i].id} value={options[i].country_kr}>{options[i].country_kr}</option>);
            }
        } else {
            result = result.concat(<div>loading</div>);
        }

        return result;
    }

    const clickSelect = (e) => {
        setSelect(e.target.value);
        // console.log(e.target.value);
    }

    function test() {
        const url = api.serverAPI+"/board?country="+select;
        // console.log(url);
        fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                setBoard(data);
            });
    }

    function getBoards() {
        let result = [];
        if(board.length > 0) {
                for(let i=0; i<board.length; i++) {
                    const e = board[i];
                    result = result.concat(
                        <Tr key={(i*5)+1}>
                            <IdTd key={(i*5)+2}>{e.rownum}</IdTd>
                            <td key={(i*5)+3}>{e.countey}</td>
                            <TitleTd key={(i*5)+4}>{e.title}</TitleTd>
                            <WriterTd key={(i*5)+5}>{e.writer}</WriterTd>
                            {/*<DateTd key={uuid()}>{e.writeDate.substring(0, 10)} {e.writeDate.substring(11, 19)}</DateTd>*/}
                        </Tr>
                    );
                }
        } else if(board.length === 0){
            result = result.concat(
                <tr>
                    <IdTd colSpan="4">아직 게시글이 없습니다.</IdTd>
                </tr>)
        }
        return result;
    }


    //페이지 이동
    const movePage = (e) => {
        // console.log(e.target.innerHTML);
        // document.location.href = '/board/1';
    }

    return (
        <div>
            <Header/>
            <Content>
            <BoardDiv>
                <SelectNav>
                    <CountrySelect onChange={(e) => clickSelect(e)} select={select}>
                        <option value="전체">전체</option>
                        {getOptions()}
                    </CountrySelect>
                    <ButtonSelect onClick={test}>검색</ButtonSelect>
                </SelectNav>
                <BoardTable>
                    <thead>
                    <tr style={{backgroundColor: "gray"}}>
                        <IdTd>번호</IdTd>
                        <td>나라</td>
                        <TitleTd>제목</TitleTd>
                        <WriterTd style={{textAlign: "center"}}>작성자</WriterTd>
                        <DateTd>작성일</DateTd>
                    </tr>
                    </thead>
                    <tbody>
                         {getBoards()}
                    </tbody>
                </BoardTable>
                <BoardButton>
                    <div>

                    </div>
                    <div>
                        <span onClick={(e) => movePage(e)} >1 </span>
                        <span>2 </span>
                        <span>3 </span>
                        <span>4 </span>
                    </div>
                    <CreateButton>작성</CreateButton>
                </BoardButton>
            </BoardDiv>
        </Content>
        </div>
    );
};

export default Board;