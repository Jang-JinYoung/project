import {useEffect, useState} from "react";
import api from "../../api";
import styled from "styled-components";
import axios from "axios";


const BoardDiv = styled.div`
    position: relative;
    border: 1px solid #9FA8AF;
    width: 950px;
    height: 990px;
    margin-bottom: 50px;
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

const CountrySpan =styled.span`
    color: #9FA8AF;
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

const CommentsDiv = styled.div`
    border-top: 1px solid #9FA8AF;
    width: 850px;
    height: 150px;
    margin: 0 auto;
`;

const CommentDiv = styled.div`
    border-bottom: 1px solid #9FA8AF;
    width: 850px;
    height: 50px;
    margin: 0 auto;
`;

const TextInput = styled.textarea`
    width: 845px;
    height: 150px;
    resize: none;
    margin-top: 15px;
    
    &:focus {
        outline: 0;
    }
`;

const CommentWriteDateSpan = styled.span`
    font-size: 11px;
    padding: 2px;
`;

const BoardRead = (id) => {

    const board_id = id.id;
    const user_no = 1;
    const [board, setBoard] = useState([]);
    const [comments, setComments] = useState([]);

    //글내용 가져오기
    useEffect(() => {
        const url = "http://localhost:3001/api/board/read";
        const elem = {board_id, user_no};
        // fetch(api.serverAPI+"/board/read",elem)
        axios.post(url, elem)
            .then(res => {
                setBoard(res.data.board[0]);
                setComments(res.data.comment);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const getComments = () => {

        let result = [];

        for(let i=0; i<comments.length; i++) {
            result = result.concat(
                <CommentDiv>
                    <div>
                        <span>{comments[i].nickname} </span>
                        <CommentWriteDateSpan>{comments[i].writeDate}</CommentWriteDateSpan>
                    </div>
                    <div>
                        {comments[i].text}
                    </div>
                </CommentDiv>
            )
            console.log(comments[i]);
        }

        return result;
    }

    if(board) {
        return(
            <BoardDiv>
                <TitleDiv>
                    <CountrySpan>[{board.country}]</CountrySpan>
                    <TitleSpan>&nbsp;&nbsp;{board.title}</TitleSpan>
                    <br/>
                    {board.writer} {board.writeDate}
                </TitleDiv>
                <TextDiv>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </TextDiv>
                <span style={{marginLeft: "46px"}}>댓글({comments.length})</span>
                <CommentsDiv>
                    {getComments()}
                    <TextInput/>
                </CommentsDiv>
            </BoardDiv>
        );
    } else {
        return(
            <div>
                존재하지 않는 게시글입니다.
            </div>
        )
    }
}

export default BoardRead;