import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Header from "../Header";
import api from "../../api";
import {Button} from "@material-ui/core";
import axios from "axios";


//css
const BoardDiv = styled.div`
    border: 1px solid #9FA8AF;
    width: 950px;
    height: 900px;
    margin-top: 10px;
`;

const TitleDiv = styled.div`
    // border: 1px solid black;
    width: 850px;
    height: 50px;
    // margin-bottom: 15px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
`;

const TitleSpan = styled.span`
    
`;

const TextDiv = styled.div`
    border-top: 1px solid #9FA8AF;
    width: 850px;
    height: 400px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
    
    word-break:break-all;
`;

const CountrySelect = styled.select`
    width: 100px;
    height: 30px;
`;

const TitleInput = styled.input`
    border: 0;
    height: 40px;
    width: 700px;
    margin-left: 15px;
    font-size: 20px;
    
    // &:focus {
    //     outline: 0;
    // }
`;

const TextInput = styled.textarea`
    width: 845px;
    height: 600px;
    resize: none;
    // border: 0;
    
    &:focus {
        outline: 0;
    }
`;

const BoardWrite = () => {

    const nickname = sessionStorage.getItem("nickname")

    const [options, setOptions] = useState([]);
    const [board, setBoard] = useState({
        title: "",
        nickname: nickname,
        text: "",
        country: "교황청"
    });

    //나라선택 메뉴
    useEffect(() => {
        fetch(api.serverAPI+"/board/select")
            .then(res=>res.json())
            .then(data=> {
                setOptions(data);
            });
    }, []);

    function getOptions() {
        let result = [];
        if(options) {
            for(let i=1; i<options.length; i++) {
                result = result.concat(
                    <option key={options[i].id} value={options[i].country_kr}>
                        {options[i].country_kr}
                    </option>
                );
            }
        } else {
            result = result.concat(<div>loading</div>);
        }
        return result;
    }

    const onchange = (e) => {

        setBoard({
            ...board, [e.target.name]: e.target.value
        });

        console.log(board);
    }

    function boardWrite() {

        const {title, nickname, text, country} = setBoard;
        const board = {title, nickname, text, country};

        axios.post(api.serverAPI+"/board/write", board)
            .then(res => {
                const result = res.data.affectedRows;
                if(result === 1) {
                    document.location.href = '/board?country=전체&page=1';
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    const changeCountry = (e) => {
        setBoard({
            country: e.target.value
        });
    }

    return(
        <BoardDiv>
            <TitleDiv>
                <TitleSpan>
                    <CountrySelect onChange={(e)=>changeCountry(e)}>
                        {getOptions()}
                    </CountrySelect>
                    <TitleInput name="title" type="text" autoComplete="off" placeholder="제목을 입력하세요"
                                onChange={(e) => onchange(e)}/>
                </TitleSpan>
            </TitleDiv>
            <TextDiv>
                <TextInput name="text" onChange={(e) => onchange(e)}/>
                <div>
                    <button onClick={boardWrite}>작성</button>
                </div>
            </TextDiv>
        </BoardDiv>
    );
}

export default BoardWrite;