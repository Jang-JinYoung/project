import React, {Component} from 'react';
import axios from 'axios';
import "../css/login.css";
import {Link} from "react-router-dom";
import styled from "styled-components";

//css 관리
const Content = styled.div`
            position: relative;
            display: flex;
            // justify-content: center;
            height: 930px;
            background-color: #F5F6F7;
        `;

const LoginDiv = styled.div`
            margin: auto;
        `;

const LogoDiv = styled.div`
            text-align: center;
            font-size: 30px;
            color: #1C215B;
            margin-bottom: 10px;
        `;

const TextInput = styled.input`
            margin-bottom: 5px;
            width: 50vh;
            height: 4vh;
            padding-left: 10px;
        `;

const SubmitButton = styled.input`
            // height: 4vh;
            background-color: #1C215B;
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
        console.log(this.state);
    };

   handleSubmit = e => {
        //페이지 이동 막아줌
        e.preventDefault();

        const {id, pw} = this.state;
        const auth = { id, pw };
        // console.log(auth);

        axios.post('http://localhost:3001/api/member/auth', auth)
            .then(res => {
                if(res.data[0].cnt >= 1) {
                    alert("로그인");
                    //세션처리
                    window.sessionStorage.setItem('id', auth.id);
                    // document.location.href = '/';
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
                    <form  onSubmit={this.handleSubmit}>
                        <LogoDiv>Trip Planner</LogoDiv>
                        <TextInput type="text"  name="id" onChange={this.handleChange} placeholder="아이디"/><br/>
                        <TextInput type="password" name="pw" onChange={this.handleChange} placeholder ="비밀번호"/>
                        <SubmitButton type="submit" className="btn" value="로그인"/>
                    </form>
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