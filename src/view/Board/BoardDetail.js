import {useEffect, useState} from "react";
import api from "../../api";
import styled from "styled-components";
import BoardWrite from "./BoardWrite";

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
    height: 200px;
    margin: 0 auto;
`;

const CommentDiv = styled.div`
    border-bottom: 1px solid #9FA8AF;
    width: 850px;
    height: 70px;
    margin: 0 auto;
`;



const BoardDetail = (match) => {

    const id = match.match.params.id;
    const [board, setBoard] = useState([]);
    const regex = new RegExp(/^[0-9]+$/);

    //글내용 가져오기
    useEffect(() => {
        fetch(api.serverAPI+"/board/boardDetail?id="+id)
            .then(res=>res.json())
            .then(data=> {
                setBoard(data.board[0]);
            });
    }, []);

    //            const regexId = new RegExp(/^[A-Za-z0-9]+$/);   //영어와 숫자로만 이루어진 정규표현식
    //             if(regexId.test(elem.id)) {

    if(board && id === "boardWrite") {
        return(
            <Content>
                <BoardWrite/>
            </Content>
        );
    } else if(regex.test(id)) {
      return (
          <Content>
              <BoardDiv>
                  <TitleDiv>
                      <CountrySpan>[{board.country}]</CountrySpan>
                      <TitleSpan>&nbsp;&nbsp;{board.title}</TitleSpan>
                      <div>
                          {board.writer} {board.writeDate}
                      </div>
                  </TitleDiv>
                  <TextDiv>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </TextDiv>
                  <CommentsDiv>
                      <CommentDiv>
                          <div>
                              작성자
                          </div>
                          <div>
                              댓글
                          </div>
                          <div>
                              작성시간
                          </div>
                      </CommentDiv>
                      <CommentDiv>
                          <div>
                              작성자
                          </div>
                          <div>
                              댓글
                          </div>
                          <div>
                              작성시간
                          </div>
                      </CommentDiv>
                      <CommentDiv>
                          <div>
                              작성자
                          </div>
                          <div>
                              댓글
                          </div>
                          <div>
                              작성시간
                          </div>
                      </CommentDiv>
                  </CommentsDiv>
              </BoardDiv>
              이전글
              다음글
          </Content>
      )
    } else {
        return(
            <Content>
                존재하지 않는 게시글입니다.
            </Content>
        )
    }
}


export default BoardDetail;