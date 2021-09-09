import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header = () => {

    const login = () => {

        const id = window.sessionStorage.id;

        if(!id) {
            return null;
        } else {
            return <div className="welcome">환영합니다 {id} 님 <button onClick={logout}>로그아웃</button></div>;
        }
        
    }

    const logout = () => {
        window.sessionStorage.clear();
        document.location.href = '/';
    }

    const MainHeader = styled.div`
        height: 100px; background-color: #F5F6F7; border: 1px solid #E5E5E5;
        width: 100%; z-index: 9999; top: 0; left: 0;
        display: flex; justify-content: space-evenly;
    `;

    const Title = styled.h1`
        color: #87E0EC;
        line-height: 30px;
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
    `;

    const SubHeader = styled.div`
        position: absolute;
        top: 100px;
        width: 100%;
        height: 50px;
        border: 1px solid #E5E5E5;
        background-color : #F5F6F7;
    `;

    const MenuNav = styled.ul`
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    `;

    const MenuItem = styled.li`
        font-size: 18px;
    `;


    return (
        <div>
            <MainHeader>
                <Title>
                    <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                        &nbsp;&nbsp;&nbsp;Trip<br/>Planner
                    </Link>
                </Title>
                <MemberNav>
                    <MemberItem>
                        <Link to="/login" style={{color: 'inherit', textDecoration: 'inherit'}}><p>로그인</p></Link>
                    </MemberItem>
                    <MemberItem>
                        <Link to="/login" style={{color: 'inherit', textDecoration: 'inherit'}}><p>회원가입</p></Link>
                    </MemberItem>
                </MemberNav>
            </MainHeader>
            <SubHeader>
                <MenuNav>
                    <MenuItem>
                        <Link to="/plan" style={{color: 'inherit', textDecoration: 'inherit'}}>계획 짜기</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>홈</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/board" style={{color: 'inherit', textDecoration: 'inherit'}}>동행 찾기</Link>
                    </MenuItem>
                </MenuNav>
            </SubHeader>
        </div>
    );

};

export default Header;