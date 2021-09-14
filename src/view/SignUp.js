import React, {useState} from "react";
import  "../css/signup.css";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {serverAPI} from "../api";

//css
const Content = styled.div`
    position: relative;
    display: flex;
    height: 930px;
    background-color: #F5F6F7;
`;

const SignupDiv = styled.div`
    margin: auto;
`;

const LogoDiv = styled.div`
    text-align: center;
    font-size: 30px;
    color: #11A1C4;
    margin-bottom: 10px;
`;

const TextInput = styled.input`
    margin-bottom: 5px;
    width: 450px;
    height: 4vh;
    padding-left: 10px;
`;

const SubmitButton = styled.input`
    background-color: #1C215B;
    width: 100%;
    height: 4vh;
    color: white;
`;




const SignUp = () => {

    const [elem, setElem] = useState({
        id: "",
        nickname: "",
        pw: "",
        re_pw: ""
    });
    const {id, nickname, pw, re_pw} = elem;

    const [btnDisabled, setBtnDisabled] = useState(false);


    const checkDuplication = () => {//아이디 중복확인
        if(!elem.id) {//입력된 정보가 없다
            alert("입력된 정보가 없습니다. 다시 입력해주세요");
        } else {
            const regexId = new RegExp(/^[A-Za-z0-9]+$/);   //영어와 숫자로만 이루어진 정규표현식
            if(regexId.test(elem.id)) {
                fetch(serverAPI+"/member/checkDuplicate?id="+elem.id)
                    .then(res => res.json())
                    .then((result) => {
                        // console.log(result[0].cnt);
                        if (result[0].cnt >= 1) {
                            alert("이미 있는 아이디입니다.");
                        } else {
                            alert("가입 가능한 아이디입니다.");
                            setBtnDisabled(true);
                        }
                    })
                    .catch(error => {
                            console.error(error);
                        }
                    )
            } else {
                alert("영어와 숫자만 입력해주세요.");
            }
        }
    }
    
    const handleChange = e => {//아이디, 비밀번호 값
        const name = e.target.name;
        const value = e.target.value;
        // const {name, value} = e.target;
        setElem({
            ...elem, [name]: value
        });

        if(name === "id") {
            console.log("test");
            setBtnDisabled(false);
        }
        // console.log(elem);
    }

    const handleSubmit = e => {//회원가입
        // e.preventDefault();

        if(pw !== re_pw) {
            alert("비밀번호가 일치하지 않습니다");
        } else if(btnDisabled === false) {
            alert("아이디 중복확인을 해주세요.");
        } else {
            axios.post(serverAPI+"/member/signup", elem)
            .then(res => {
                alert("회원가입이 완료되었습니다.");
                window.sessionStorage.setItem('id', res.data[0].no);
                window.sessionStorage.setItem('nickname', res.data[0].nickname);
                document.location.href = '/';
            })
            .catch(err => {
                console.error(err);
            });
        }
    }


    return (
        <div>
            <Content>
                <SignupDiv>
                    <form onSubmit={handleSubmit}>
                        <LogoDiv><Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>Trip Planner</Link></LogoDiv>
                        아이디 <button type="button" onClick={checkDuplication} id="btnDuplication" disabled={btnDisabled}>중복확인</button>
                        <br/>
                        <TextInput type="text" name="id" onChange={handleChange}  autoComplete='off'/> <br/>
                        닉네임<br/>
                        <TextInput type="text" name="nickname" onChange={handleChange}  autoComplete='off'/>
                        <br/>
                        비밀번호<br/>
                        <TextInput type="password" name="pw" onChange={handleChange} value={pw} autoComplete='off'/> <br/>
                        비밀번호 재확인<br/>
                        <TextInput type="password" name="re_pw" onChange={handleChange} value={re_pw} autoComplete='off'/> <br/>
                        <SubmitButton type="submit" value="회원가입"/>
                    </form>
                </SignupDiv>
            </Content>
        </div>
    );
}

export default SignUp;