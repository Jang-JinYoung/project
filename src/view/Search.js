import React, {useState} from 'react';
import "../css/search.css";

const Search = () => {

    const [selected, setSeleted] = useState("");

    const onclick = (e) => {
        if(e.target.id === 'id') {
            // console.log("아이디 클릭");
            setSeleted("id");
            console.log(selected);
        } else if(e.target.id === 'pw') {
            // console.log("비밀번호 클릭");
            setSeleted("pw");
            console.log(selected);
        }

    }

    const onchangeId = () => {
        if(selected === "id") {
            return {border : "1px solid #1C215B"}
        }
    }

    const onchangePw = () => {
        if(selected === "pw") {
            return {border : "1px solid #1C215B"}
        }
    }



    return(
        <div className="content">
            <div className="searchBox">
                <div className="logo">Trip Planner</div>
                <ul className="menu_wrap" role="tablist">
                    <li className="menu_item" role="presentation">
                        <a href="#none" id="search_id" className="menu_search_id" role="tab" aria-selected="true">
                            <span className="menu_text"><span className="text">ID 찾기</span></span>
                        </a>
                    </li>
                    <li className="menu_item" role="presentation">
                        <a href="#none" id="search_pw" className="menu_search_pw" role="tab" aria-selected="false">
                            <span className="menu_text"><span className="text">PW 찾기</span></span>
                        </a>
                    </li>
                </ul>
                <ul className="panel_wrap">
                    <li className="panel_item" >
                        <div className="panel_inner" role="tabpanel" aria-controls="loinid">
                            <div className="id_pw_wrap">
                                <div className="input_row" id="id_line" style={onchangeId()}>
                                    <input type="text" id="id" className="input_text" placeholder="아이디" onClick={onclick} autoComplete="off"/>
                                </div>
                                <div className="input_row" id="pw_line" style={onchangePw()}>
                                    <input type="text" id="pw" className="input_text" placeholder="비밀번호" onClick={onclick} autoComplete="off"/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Search;