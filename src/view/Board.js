import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styled from "styled-components";
import api from "../api";
import uuid from "react-uuid"


//css
const Content = styled.div`
        position: relative;
        width: 100%;
        height: 1000px;
        top: 55px;
        background-color : white;
        display: flex;
        justify-content: center;
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
    `;
const DateTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 220px;
    `;

const BoardButton = styled.div`
        display: flex;
        flex-direction: row-reverse;
        width:100px;
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
                    // console.log(uuid());
                    result = result.concat(
                        <Tr key={uuid()}>
                            <IdTd key={uuid()}>{e.id}</IdTd>
                            <TitleTd key={uuid()}>{e.title}</TitleTd>
                            <WriterTd key={uuid()}>{e.writer}</WriterTd>
                            <DateTd key={uuid()}>{e.writeDate.substring(0, 10)} {e.writeDate.substring(11, 19)}</DateTd>
                        </Tr>
                    );
                }
        } else if(board.length === 0){
            result = result.concat(
                <tr>
                    <IdTd colSpan="4">아직 게시글이 없습니다.</IdTd>
                </tr>);
        }
        return result;
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
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                    </tr>
                    </thead>
                    <tbody>
                         {getBoards()}
                    </tbody>
                </BoardTable>
                <BoardButton>
                    <CreateButton>작성</CreateButton>
                </BoardButton>
            </BoardDiv>
        </Content>
        </div>
    );
};

export default Board;