import React, {useEffect, useState} from 'react';
import queryStirng from 'query-string';
import styled from "styled-components";
import api from "../../api";
import uuid from "react-uuid"
import {Link} from "react-router-dom";


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

const CountryTd = styled.td`
    border: 1px solid #9FA8AF;
    width: 80px;
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
    text-align: center;
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

const BoardList = (match) => {

    const queryObj = queryStirng.parse(match.location.search);
    let {country, page} = queryObj;

    const [board, setBoard] = useState([]);
    const [options, setOptions] = useState([]);
    const [pageCount, setPageCount] = useState();


    //나라선택 메뉴
    useEffect(() => {
        fetch(api.serverAPI+"/board/select")
            .then(res=>res.json())
            .then(data=> {
                setOptions(data);
            });
    }, []);

    //게시글 가져오기
    useEffect(() => {
        const url = api.serverAPI+"/board/list?country="+country+"&page="+page;
        // const url = "http://localhost:3001/api/board/boardList?country="+country+"&page="+page;
        fetch(url)
            .then(res=>res.json())
            .then(data=> {
                setBoard(data.board);
                setPageCount(data.paging[0].count);
            });
    }, []);

    //나라선택 메뉴 리스트 만들기
    function getOptions() {
        let result = [];
        if(options) {

            for(let i=0; i<options.length; i++) {
                if(country === options[i].country_kr) {
                    result = result.concat(
                        <option key={options[i].id} value={options[i].country_kr} selected>
                            {options[i].country_kr}
                        </option>
                    );
                } else {
                    result = result.concat(
                        <option key={options[i].id} value={options[i].country_kr}>
                            {options[i].country_kr}
                        </option>
                    );
                }
            }
        } else {
            result = result.concat(<div>loading</div>);
        }
        return result;
    }

    //검색
    function test() {
        document.location.href = "/board?country="+country+"&page="+page;
    }

    //게시글 세팅
    function getBoards() {
        let result = [];
        if(board.length > 0) {
            for(let i=0; i<board.length; i++) {
                const e = board[i];
                const link = "/board/"+e.id;
                result = result.concat(
                    <Tr key={(i*5)+1}>
                        <IdTd key={(i*5)+2}>{e.id}</IdTd>
                        <CountryTd key={(i*5)+3}>{e.country}</CountryTd>
                        <TitleTd key={(i*5)+4}><Link to={link} style={{color: 'inherit', textDecoration: 'inherit'}}>{e.title}</Link></TitleTd>
                        <WriterTd key={(i*5)+5}>{e.writer}</WriterTd>
                        <DateTd key={uuid()}>{e.writeDate}</DateTd>
                    </Tr>
                );
            }
        } else if(board.length === 0){
            result = result.concat(
                <tr>
                    <IdTd colSpan="5">아직 게시글이 없습니다.</IdTd>
                </tr>)
        }
        return result;
    }

    //페이징
    function paging() {
        let result = [];
        for(let i=0; i<pageCount; i++) {
            result = result.concat(
                <span key={i} onClick={(e) => movePage(e)}>{i+1}</span>
            )
        }
        return result;
    }

    //페이지 이동
    const movePage = (e) => {
        // console.log(e.target.innerHTML);
        let page = e.target.innerHTML
        document.location.href = "/board?country="+country+"&page="+page;
    }

    const changeCountry = (e) => {
        // console.log(e.target.value);
        country = e.target.value;
        // console.log(country);
    }

    return (
        <Content>
            <BoardDiv>
                <SelectNav>
                    <CountrySelect onChange={(e)=>changeCountry(e)}>
                        {getOptions()}
                    </CountrySelect>
                    <ButtonSelect onClick={test}>검색</ButtonSelect>
                </SelectNav>
                <BoardTable>
                    <thead>
                    <tr style={{backgroundColor: "#DEE7EE"}}>
                        <IdTd>번호</IdTd>
                        <CountryTd>나라</CountryTd>
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
                        {paging()}
                    </div>
                    <CreateButton><Link to="/board/boardWrite">작성</Link></CreateButton>
                </BoardButton>
            </BoardDiv>
        </Content>
    );
};

export default BoardList;