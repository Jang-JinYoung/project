import React from 'react';
import logo from "../../images/logo.png";
import cloud from "../../images/cloud.png"
import { Link } from 'react-router-dom';
import styled from "styled-components";

const MainHeader = styled.div`
        height: 100px; background-color: #B1DFEA; border: 1px solid #9FA8AF;
        width: 100%; z-index: 9999; top: 0; left: 0;
        display: flex; justify-content: space-evenly;
    `;

const Title = styled.h1`
        color: #11A1C4;
        line-height: 30px;
        font-family: Georgia, Serif;
    `;

const MemberNav = styled.ul`
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
    `;

const MemberItem = styled.li`
        display:inline-block; 
        text-align:center;
        padding-left: 10px;
        padding-top: 25px;
        font-family: Impact, Charcoal, Serif;
    `;

const Header = () => {
    
    const logout = () => {
        window.sessionStorage.clear();
        document.location.href = '/';
    }

    //로그인
    function loginTag() {
        let result = [];
        if(window.sessionStorage.no) {
            result = result.concat(
                <MemberItem key="login">
                        {window.sessionStorage.nickname} 님

                    <div>
                        <span onClick={message}>&nbsp;&nbsp;쪽지&nbsp;&nbsp;</span>
                        <span onClick={userInfo}>개인정보&nbsp;&nbsp;</span>
                        <span onClick={logout}>로그아웃</span>
                    </div>
                </MemberItem>
            );
        } else {
            result = result.concat(
                <MemberItem key="login">
                    <Link to="/login" style={{color: 'inherit', textDecoration: 'inherit'}}><p>로그인</p></Link>
                </MemberItem>
            );
            result = result.concat(
                <MemberItem key="signup">
                    <Link to="/signup" style={{color: 'inherit', textDecoration: 'inherit'}}><p>회원가입</p></Link>
                </MemberItem>
            );
        }
        return result;
    }

    function message() {

    }

    function userInfo() {

    }


    return (
        <MainHeader>
            <img src={logo} alt="headerImage" />
            <img src={cloud} alt="headerImage" />
            {/*<Title>*/}
            {/*    <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>*/}
            {/*        &nbsp;&nbsp;&nbsp;Trip<br/>Planner*/}
            {/*    </Link>*/}
            {/*</Title>*/}
            {/*<MemberNav>*/}
            {/*    {loginTag()}*/}
            {/*</MemberNav>*/}
        </MainHeader>
    );

};

export default Header;