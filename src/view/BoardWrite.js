import React, {useState} from 'react';
import styled from "styled-components";
import Header from "./Header";


//css
const Content = styled.div`
        position: relative;
        width: 100%;
        height: 1000px;
        top: 50px;
        background-color : #F5F6F7;
    `;

const BoardWrite = () => {


    const [board, setBoard] = useState({
        title: "",
        context: ""
    });
    const {title, context} = board;

    function textChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name + " " + value);
        setBoard({
            ...board, [name]: value
        });
    }


    return(
        <div>
            <Header/>
            <Content>
                <form className="" >
                    <input type="text" name="title" onChange={textChange} value={title}></input>
                    <br/>
                    <br/>
                    <textarea type="text" onChange={textChange}></textarea>
                    <br/>
                    <button>안녕</button>
                </form>
            </Content>
        </div>
    );
}

export default BoardWrite;