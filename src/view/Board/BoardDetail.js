import {useEffect, useState} from "react";
import api from "../../api";
import styled from "styled-components";
import BoardWrite from "./BoardWrite";
import BoardRead from "./BoardRead";

//css
const Content = styled.div`
    position: relative;
    width: 100%;
    // height: auto;
    top: 55px;
    background-color : white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;


const BoardDetail = (match) => {

    const id = match.match.params.id;
    const regex = new RegExp(/^[0-9]+$/);

    if(id === "boardWrite") {
        return(
            <Content>
                <BoardWrite/>
            </Content>
        );
    } else if(regex.test(id)) {
      return (
          <Content>
              <BoardRead id={id}/>
          </Content>
      )
    }
}


export default BoardDetail;