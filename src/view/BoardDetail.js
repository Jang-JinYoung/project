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
const TextDiv = styled.div`
    border-top: 1px solid #9FA8AF;
    width: 850px;
    height: 500px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
    
    word-break:break-all;
`;



const BoardDetail = (match) => {

    const id = match.match.params.id;
    const [board, setBoard] = useState([]);

    //글내용 가져오기
    useEffect(() => {
        fetch(api.serverAPI+"/board/boardDetail?id="+id)
            .then(res=>res.json())
            .then(data=> {
                setBoard(data.board[0]);
            });
    }, []);


    if(board) {
        return(
            <Content>
                <BoardDiv>
                    <TitleDiv>
                        [{board.country}] {board.title}
                        <div>
                            {board.writer} {board.writeDate}
                        </div>
                    </TitleDiv>
                    <TextDiv>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </TextDiv>
                </BoardDiv>
                이전글
                다음글
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