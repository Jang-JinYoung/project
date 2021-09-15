import React, {Component} from 'react';
import axios from 'axios';
import "../css/login.css";
import {Link} from "react-router-dom";
import styled from "styled-components";
import api from "../api";

//css 관리
const Content = styled.div`
    position: relative;
    display: flex;
    height: 930px;
    background-color: #F5F6F7;
`;

const LoginDiv = styled.div`
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

const SearchDiv = styled.div`
    text-align: center;
`;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            pw : '',
            failCount : 0
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

   handleSubmit = e => {
        //페이지 이동 막아줌
        // e.preventDefault();

        const {id, pw} = this.state;
        const auth = { id, pw };

        axios.post(api.serverAPI+"/member/auth", auth)
            .then(res => {
                if(res.data[0].cnt >= 1) {
                    // console.log(res.data[0].no);
                    window.sessionStorage.setItem('no', res.data[0].no);
                    window.sessionStorage.setItem('nickname', res.data[0].nickname);
                    document.location.href = '/';
                } else {
                    console.log("로그인 실패");
                    this.setState({
                        failCount: this.state.failCount+1
                    });
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    loginFailure = () => {
       if(this.state.failCount > 0) {//로그인 카운트가 0보다 클때 출력
           if(this.state.failCount > 5) {
               this.setState({
                   failCount: 0
               });
               return <div className="failMessage">잠시 후 다시 시도해주세요</div>
           } else {
               return <div className="failMessage">{this.state.failCount}/5 오류</div>
           }
       } else {
           return null;
       }
    }

    moveSearch = () => {
        document.location.href = '/search';
    }


    render() {
        return (
            <Content>
                <LoginDiv>
                    <form onSubmit={this.handleSubmit}>
                        <LogoDiv><Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>Trip Planner</Link></LogoDiv>
                        <TextInput type="text" name="id" onChange={this.handleChange} autoComplete='off' placeholder="아이디"/><br/>
                        <TextInput type="password" name="pw" onChange={this.handleChange} autoComplete='off' placeholder ="비밀번호"/><br/>
                        <SubmitButton type="submit" value="로그인" />
                    </form>
                    {this.loginFailure()}
                    <SearchDiv>
                        <Link to="/search" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <span>아이디 찾기</span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>비밀번호 찾기</span>
                        </Link>
                    </SearchDiv>
                </LoginDiv>
            </Content>
        );
    }
}

export default Login;