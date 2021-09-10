import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styled from "styled-components";


//css
const Content = styled.div`
        position: relative;
        width: 100%;
        height: 1000px;
        top: 55px;
        background-color : #DEE7EE;
    `;

const BoardDiv = styled.div`
        width: 1000px;
        height: 600px;
        // display: flex;
        // flex-direction: column;
        // width: 1000px;
    `;

const SelectNav = styled.div`
        // display: flex;
        // justify-content: flex-end;
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
        border-collapse:collapse;
        // text-align: center;
        // margin-left:auto; 
        // margin-right:auto;
    `;

const Tr = styled.tr`
        &:hover {
            background: #F2F2F2;
        }
    `;

const IdTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 40px;
    `;
const TitleTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 600px;
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
        fetch('http://54.180.104.208:3001/api/board/select')
            .then(res=>res.json())
            .then(data=> {
                setOptions(data);
            });
    }, []);

    useEffect(() => {
        fetch('http://54.180.104.208:3001/api/board/')
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
        if(board.length > 0) {
            board.map(e => {
                // console.log(e);
                result = result.concat(
                    <Tr key={e}>
                        <IdTd key={e.id}>{e.id}</IdTd>
                        <TitleTd key={e.title}>{e.title}</TitleTd>
                        <WriterTd key={e.writer}>{e.writer}</WriterTd>
                        <DateTd key={e.writeDate}>{e.writeDate.substring(0, 10)} {e.writeDate.substring(11, 19)}</DateTd>
                    </Tr>
                );
            })
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
                        <IdTd>번호</IdTd>
                        <TitleTd>제목</TitleTd>
                        <WriterTd>작성자</WriterTd>
                        <DateTd>작성일</DateTd>
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