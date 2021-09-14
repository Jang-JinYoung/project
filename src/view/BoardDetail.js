import {useEffect, useState} from "react";
import api from "../api";
import styled from "styled-components";

//css
const Content = styled.div`
        position: relative;
        width: 100%;
        height: 760px;
        top: 55px;
        background-color : white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `;

const TitleDiv = styled.div`
    border: 1px solid black;
    width: 850px;
    height: 80px;
    margin-bottom: 10px;
`;
const TextDiv = styled.div`
    border: 1px solid black;
    width: 850px;
    height: 500px;
`;



const BoardDetail = (match) => {

    const id = match.match.params.id;
    const [board, setBoard] = useState([]);

    //글내용 가져오기
    useEffect(() => {
        fetch(api.serverAPI+"/board/boardDetail?id="+id)
            .then(res=>res.json())
            .then(data=> {
                setBoard(data.board);
            });
    }, []);


    if(board) {
        return(
            <Content>
                <TitleDiv>
                    [{board.country}] {board.title}
                    <div>
                        {board.writer} {board.writeDate}
                    </div>
                </TitleDiv>
                <TextDiv>{board.text}</TextDiv>
            </Content>
        );
    } else {
        return(
            <Content>
                존재하지 않는 게시글입니다.
            </Content>
        )
    }
}


export default BoardDetail;