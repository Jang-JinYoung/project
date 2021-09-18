import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const Header = styled.div`
    position: absolute;
    top: 100px;
    width: 100%;
    height: 55px;
    border: 1px solid #9FA8AF;
    background-color : #DEE7EE;
`;

const MenuNav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`;

const MenuItem = styled.li`
    font-size: 18px;
`;


const SubHeader = () => {

    return (
        <Header>
            <MenuNav>
                <MenuItem>
                    <Link to="/plan" style={{color: 'inherit', textDecoration: 'inherit'}}>계획 짜기</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>홈</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/board?country=전체&page=1" style={{color: 'inherit', textDecoration: 'inherit'}}>동행 찾기</Link>
                </MenuItem>
            </MenuNav>
        </Header>
    );
}

export default SubHeader;